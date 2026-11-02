// Builds public/opengraph-image.png (1200x630) from the reversed logo. Usage: node scripts/build-og.mjs
import sharp from "sharp";

const logo = await sharp("public/brand/ark-logo-reversed.png").resize({ height: 470 }).toBuffer();
await sharp({ create: { width: 1200, height: 630, channels: 3, background: "#192338" } })
  .composite([{ input: logo, gravity: "center" }])
  .png({ compressionLevel: 9 })
  .toFile("public/opengraph-image.png");
console.log("opengraph-image.png written");
