import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";
export const dynamic = "force-static";

const RADIO_TOWER_PATHS = [
  "M4.9 16.1C1 12.2 1 5.8 4.9 1.9",
  "M7.8 4.7a6.14 6.14 0 0 0-.8 7.5",
  "M16.2 4.8c2 2 2.26 5.11.8 7.47",
  "M19.1 1.9a9.96 9.96 0 0 1 0 14.1",
  "M9.5 18h5",
  "m8 22 4-11 4 11",
];

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: 64,
        height: 64,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <svg width={64} height={64} viewBox="0 0 64 64">
        <rect width={64} height={64} rx={14} fill="#ff8a3d" />
        <g transform="translate(9.9 5.7) scale(2.2)">
          <circle cx="12" cy="9" r="2" fill="#ffffff" stroke="none" />
          {RADIO_TOWER_PATHS.map((d) => (
            <path
              key={d}
              d={d}
              fill="none"
              stroke="#ffffff"
              strokeWidth={1.6}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}
        </g>
      </svg>
    </div>,
    { ...size }
  );
}
