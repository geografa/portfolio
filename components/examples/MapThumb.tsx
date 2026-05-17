import type { ThumbVariant } from "@/lib/examples";

export function MapThumb({ variant }: { variant: ThumbVariant }) {
  switch (variant) {
    case "isochrones":
      return (
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#B7CDD9" />
              <stop offset="1" stopColor="#F4F2EC" />
            </linearGradient>
          </defs>
          <rect width="400" height="300" fill="url(#g1)" />
          <g fill="none" stroke="#3E6B89" strokeOpacity="0.55">
            <path
              d="M200 150 m -120 0 a 120 70 0 1 0 240 0 a 120 70 0 1 0 -240 0"
              strokeWidth="1"
            />
            <path
              d="M200 150 m -90 0 a 90 52 0 1 0 180 0 a 90 52 0 1 0 -180 0"
              strokeWidth="1"
            />
            <path
              d="M200 150 m -60 0 a 60 35 0 1 0 120 0 a 60 35 0 1 0 -120 0"
              strokeWidth="1"
            />
            <path
              d="M200 150 m -30 0 a 30 18 0 1 0 60 0 a 30 18 0 1 0 -60 0"
              strokeWidth="1"
            />
          </g>
          <path
            d="M70 60 Q 200 30, 330 70"
            fill="none"
            stroke="#C97B5C"
            strokeWidth="1.5"
            strokeDasharray="3 3"
          />
          <circle cx="200" cy="150" r="5" fill="#C97B5C" />
          <circle cx="330" cy="70" r="3" fill="#14202B" />
          <circle cx="70" cy="60" r="3" fill="#14202B" />
        </svg>
      );
    case "pins":
      return (
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" fill="#F4F2EC" />
          <g stroke="#3E6B89" strokeOpacity="0.25" fill="none">
            <path
              d="M-10 200 C 80 180, 160 230, 250 200 S 410 180, 410 200"
              strokeWidth="1"
            />
            <path
              d="M-10 230 C 80 210, 160 260, 250 230 S 410 210, 410 230"
              strokeWidth="1"
            />
            <path
              d="M-10 170 C 80 150, 160 200, 250 170 S 410 150, 410 170"
              strokeWidth="1"
            />
          </g>
          <g>
            <circle cx="120" cy="130" r="14" fill="#C97B5C" fillOpacity="0.25" />
            <circle cx="120" cy="130" r="5" fill="#C97B5C" />
            <circle cx="220" cy="170" r="14" fill="#C97B5C" fillOpacity="0.25" />
            <circle cx="220" cy="170" r="5" fill="#C97B5C" />
            <circle cx="310" cy="120" r="14" fill="#C97B5C" fillOpacity="0.25" />
            <circle cx="310" cy="120" r="5" fill="#C97B5C" />
            <circle cx="180" cy="90" r="14" fill="#3E6B89" fillOpacity="0.25" />
            <circle cx="180" cy="90" r="5" fill="#3E6B89" />
          </g>
        </svg>
      );
    case "lights":
      return (
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" fill="#0F1B2D" />
          <g stroke="#3E6B89" strokeOpacity="0.4">
            <path d="M0 80 L400 80" strokeWidth="0.7" />
            <path d="M0 140 L400 140" strokeWidth="0.7" />
            <path d="M0 200 L400 200" strokeWidth="0.7" />
            <path d="M0 260 L400 260" strokeWidth="0.7" />
            <path d="M80 0 L80 300" strokeWidth="0.7" />
            <path d="M170 0 L170 300" strokeWidth="0.7" />
            <path d="M260 0 L260 300" strokeWidth="0.7" />
            <path d="M340 0 L340 300" strokeWidth="0.7" />
          </g>
          <g>
            <circle cx="80" cy="80" r="14" fill="#D4A55A" fillOpacity="0.55" />
            <circle cx="80" cy="80" r="3" fill="#D4A55A" />
            <circle cx="170" cy="140" r="14" fill="#D4A55A" fillOpacity="0.55" />
            <circle cx="170" cy="140" r="3" fill="#D4A55A" />
            <circle cx="260" cy="80" r="14" fill="#D4A55A" fillOpacity="0.55" />
            <circle cx="260" cy="80" r="3" fill="#D4A55A" />
            <circle cx="340" cy="200" r="14" fill="#D4A55A" fillOpacity="0.55" />
            <circle cx="340" cy="200" r="3" fill="#D4A55A" />
            <circle cx="80" cy="200" r="14" fill="#D4A55A" fillOpacity="0.55" />
            <circle cx="80" cy="200" r="3" fill="#D4A55A" />
            <circle cx="260" cy="260" r="14" fill="#D4A55A" fillOpacity="0.55" />
            <circle cx="260" cy="260" r="3" fill="#D4A55A" />
          </g>
        </svg>
      );
    case "snow":
      return (
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" fill="#E8EDF0" />
          <g fill="#fff" fillOpacity="0.9">
            {[
              [40, 40],
              [120, 80],
              [200, 50],
              [280, 90],
              [340, 45],
              [90, 140],
              [180, 160],
              [260, 130],
              [320, 170],
              [60, 220],
              [150, 200],
              [240, 240],
              [310, 210],
            ].map(([cx, cy], i) => (
              <circle key={i} cx={cx} cy={cy} r={1.2 + (i % 3)} />
            ))}
          </g>
          <path
            d="M0 220 Q 200 180 400 200"
            fill="none"
            stroke="#3E6B89"
            strokeOpacity="0.35"
          />
        </svg>
      );
    case "terrain":
      return (
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="tg" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0" stopColor="#D4E0CD" />
              <stop offset="1" stopColor="#F4F2EC" />
            </linearGradient>
          </defs>
          <rect width="400" height="300" fill="url(#tg)" />
          <g fill="none" stroke="#3E6B89" strokeOpacity="0.45">
            <path d="M0 220 C 100 160, 200 260, 400 180" strokeWidth="1.2" />
            <path d="M0 200 C 120 140, 220 240, 400 160" strokeWidth="1" />
            <path d="M0 180 C 80 120, 280 220, 400 140" strokeWidth="1" />
          </g>
          <path
            d="M120 200 L200 120 L280 200 Z"
            fill="none"
            stroke="#C97B5C"
            strokeWidth="1.5"
          />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="300" fill="#F8F7F2" />
          <g fill="none" stroke="#3E6B89" strokeOpacity="0.35">
            <path d="M40 240 L360 60" strokeWidth="1" />
            <path d="M60 260 L340 80" strokeWidth="1" />
          </g>
          <circle cx="200" cy="150" r="8" fill="#3E6B89" fillOpacity="0.35" />
          <circle cx="200" cy="150" r="3" fill="#C97B5C" />
        </svg>
      );
  }
}
