// Rebuilds the logo asset set from the supplied 1024px JPEG:
// 2x Lanczos upscale, background removal (flood-fill so the white globe nodes survive),
// anti-aliased alpha edges, plus mark-only / reversed / on-white / icon variants.
// Usage: node scripts/build-logo.mjs
import sharp from "sharp";
import { mkdirSync } from "node:fs";

const SRC = "public/brand/source-logo.jpg";
const OUT = "public/brand";
const SCALE = 2;
const TEXT_TOP = 570 * SCALE; // everything below is the wordmark
const ARK_BOTTOM = 735 * SCALE; // "ARK" ends, subtitle starts below

mkdirSync(OUT, { recursive: true });

const base = await sharp(SRC)
  .resize({ width: 1024 * SCALE, kernel: "lanczos3" })
  .sharpen({ sigma: 0.8, m1: 0.6, m2: 1.2 })
  .removeAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width: W, height: H } = base.info;
const px = base.data;
const dist = (i) => 255 - Math.min(px[i], px[i + 1], px[i + 2]); // 0 = pure white

// 1. flood-fill the background from the borders
const NEAR_WHITE = 16;
const bg = new Uint8Array(W * H);
const stack = [];
const push = (x, y) => {
  const p = y * W + x;
  if (!bg[p] && dist(p * 3) < NEAR_WHITE) {
    bg[p] = 1;
    stack.push(p);
  }
};
for (let x = 0; x < W; x++) { push(x, 0); push(x, H - 1); }
for (let y = 0; y < H; y++) { push(0, y); push(W - 1, y); }
while (stack.length) {
  const p = stack.pop();
  const x = p % W, y = (p / W) | 0;
  if (x > 0) push(x - 1, y);
  if (x < W - 1) push(x + 1, y);
  if (y > 0) push(x, y - 1);
  if (y < H - 1) push(x, y + 1);
}
// letter counters (A, R) are enclosed, so clear near-white inside the wordmark too
for (let y = TEXT_TOP; y < H; y++)
  for (let x = 0; x < W; x++) if (dist((y * W + x) * 3) < NEAR_WHITE) bg[y * W + x] = 1;

// 2. distance-to-background (cheap 3px band) for edge anti-aliasing
const band = 3 * SCALE;
const near = new Uint8Array(W * H);
for (let y = 0; y < H; y++)
  for (let x = 0; x < W; x++) {
    if (bg[y * W + x]) continue;
    outer: for (let dy = -band; dy <= band; dy++) {
      const yy = y + dy;
      if (yy < 0 || yy >= H) continue;
      for (let dx = -band; dx <= band; dx++) {
        const xx = x + dx;
        if (xx >= 0 && xx < W && bg[yy * W + xx]) { near[y * W + x] = 1; break outer; }
      }
    }
  }

// 3. compose RGBA (un-premultiplied against white on the edge band)
const rgba = Buffer.alloc(W * H * 4);
for (let p = 0; p < W * H; p++) {
  const i = p * 3, o = p * 4;
  let a = 255;
  if (bg[p]) a = 0;
  else if (near[p]) a = Math.max(0, Math.min(255, Math.round(((dist(i) - 3) / 60) * 255)));
  rgba[o + 3] = a;
  if (a === 0) continue;
  const af = a / 255;
  for (let c = 0; c < 3; c++) {
    const v = af < 1 ? 255 - (255 - px[i + c]) / af : px[i + c];
    rgba[o + c] = Math.max(0, Math.min(255, Math.round(v)));
  }
}
const raw = { raw: { width: W, height: H, channels: 4 } };

const save = async (img, name) => {
  const info = await img.png({ compressionLevel: 9 }).toFile(`${OUT}/${name}`);
  console.log(name, info.width + "x" + info.height);
};

// full-colour lockup (transparent, trimmed)
await save(sharp(rgba, raw).trim({ threshold: 1 }), "ark-logo.png");
// mark only
const markBuf = await sharp(rgba, raw)
  .extract({ left: 0, top: 0, width: W, height: TEXT_TOP - 20 })
  .png()
  .toBuffer();
await save(sharp(markBuf).trim({ threshold: 1 }), "ark-mark.png");
// reversed wordmark for dark backgrounds (mark colours untouched)
const rev = Buffer.from(rgba);
for (let y = TEXT_TOP; y < H; y++)
  for (let x = 0; x < W; x++) {
    const o = (y * W + x) * 4;
    if (rev[o + 3] === 0) continue;
    const [r, g, b] = y < ARK_BOTTOM ? [255, 255, 255] : [217, 225, 241];
    rev[o] = r; rev[o + 1] = g; rev[o + 2] = b;
  }
await save(sharp(rev, raw).trim({ threshold: 1 }), "ark-logo-reversed.png");
// opaque white version (OG images, email, etc.)
await save(
  sharp(rgba, raw).trim({ threshold: 1 }).flatten({ background: "#ffffff" }).extend({
    top: 160, bottom: 160, left: 160, right: 160, background: "#ffffff",
  }),
  "ark-logo-on-white.png",
);
// square app icon (mark on white, rounded)
const mark = await sharp(markBuf)
  .trim({ threshold: 1 })
  .resize({ width: 400, height: 400, fit: "contain", background: "#00000000" })
  .png()
  .toBuffer();
await sharp({ create: { width: 512, height: 512, channels: 4, background: "#ffffff" } })
  .composite([{ input: mark, gravity: "center" }])
  .png()
  .toFile("src/app/icon.png");
console.log("icon.png 512x512");

