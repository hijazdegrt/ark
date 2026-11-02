// Original SVG: three stacked planes (strategy, process, technology) linked by flowing connectors.
const planes = [
  { y: 100, label: "Business strategy", accent: true },
  { y: 235, label: "Processes & workflows", accent: false },
  { y: 370, label: "Technology & systems", accent: false },
];
const HW = 165; // half width
const HH = 62; // half height
const nodeOffsets = [
  [0, 0],
  [-85, 0],
  [85, 0],
  [-42, -26],
  [42, 26],
] as const;

export function HeroVisual() {
  const cx = 230;
  return (
    <svg
      viewBox="0 0 520 470"
      role="img"
      aria-label="Diagram of business strategy, processes and technology connected as one system"
      className="h-auto w-full"
    >
      {[...planes].reverse().map((p) => (
        <g key={p.label}>
          <polygon
            points={`${cx - HW},${p.y} ${cx},${p.y - HH} ${cx + HW},${p.y} ${cx},${p.y + HH}`}
            fill="rgb(49 72 122 / 0.32)"
            stroke={p.accent ? "#1fb8a6" : "#8fb3e2"}
            strokeOpacity={p.accent ? 0.9 : 0.5}
            strokeWidth="1.25"
          />
          {/* in-plane links */}
          <g stroke="#8fb3e2" strokeOpacity="0.55" strokeWidth="1">
            <line x1={cx - 85} y1={p.y} x2={cx} y2={p.y} />
            <line x1={cx} y1={p.y} x2={cx + 85} y2={p.y} />
            <line x1={cx - 42} y1={p.y - 26} x2={cx} y2={p.y} />
            <line x1={cx + 42} y1={p.y + 26} x2={cx} y2={p.y} />
          </g>
          {nodeOffsets.map(([dx, dy], i) => (
            <circle
              key={i}
              cx={cx + dx}
              cy={p.y + dy}
              r={i === 0 ? 6 : 4.5}
              fill={p.accent && i === 0 ? "#1fb8a6" : "#d9e1f1"}
              className={i === 0 ? "anim-pulse" : undefined}
              style={i === 0 ? { animationDelay: `${planes.indexOf(p) * 0.6}s` } : undefined}
            />
          ))}
          <text
            x={cx + HW + 14}
            y={p.y + 4}
            fill="#d9e1f1"
            fontSize="13"
            fontWeight="600"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {p.label.split(" ")[0]}
          </text>
          <text
            x={cx + HW + 14}
            y={p.y + 21}
            fill="#8fb3e2"
            fontSize="11.5"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {p.label.split(" ").slice(1).join(" ")}
          </text>
        </g>
      ))}
      {/* connectors flowing upward from technology to strategy */}
      {[-85, 0, 85].map((dx) => (
        <g key={dx} stroke="#1fb8a6" strokeWidth="1.5" strokeLinecap="round">
          <line className="anim-flow" strokeDasharray="4 8" x1={cx + dx} y1={370} x2={cx + dx} y2={235} />
          <line className="anim-flow" strokeDasharray="4 8" x1={cx + dx} y1={235} x2={cx + dx} y2={100} />
        </g>
      ))}
    </svg>
  );
}
