export function HeroArt() {
  return (
    <svg
      className="hero-art"
      viewBox="0 0 460 360"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <g fill="none" stroke="#3E6B89" strokeOpacity="0.25">
        <path
          d="M0 280 C 80 240, 160 300, 240 260 S 380 240, 460 270"
          strokeWidth="1.1"
        />
        <path
          d="M0 250 C 80 210, 160 270, 240 230 S 380 210, 460 240"
          strokeWidth="1.1"
        />
        <path
          d="M0 220 C 80 180, 160 240, 240 200 S 380 180, 460 210"
          strokeWidth="1.1"
        />
        <path
          d="M0 190 C 80 150, 160 210, 240 170 S 380 150, 460 180"
          strokeWidth="1.1"
        />
        <path
          d="M0 160 C 80 120, 160 180, 240 140 S 380 120, 460 150"
          strokeWidth="1.1"
        />
        <path
          d="M0 130 C 80 90, 160 150, 240 110 S 380 90, 460 120"
          strokeWidth="1.1"
        />
      </g>
      <g fill="none" stroke="#C97B5C" strokeOpacity="0.5">
        <ellipse cx="320" cy="180" rx="100" ry="55" strokeWidth="1" />
        <ellipse cx="320" cy="180" rx="70" ry="38" strokeWidth="1" />
        <ellipse cx="320" cy="180" rx="40" ry="22" strokeWidth="1" />
      </g>
      <circle cx="320" cy="180" r="5" fill="#C97B5C" />
      <path
        d="M40 80 Q 200 30, 320 180"
        fill="none"
        stroke="#14202B"
        strokeWidth="1.2"
        strokeDasharray="4 4"
        strokeOpacity="0.5"
      />
      <circle cx="40" cy="80" r="3" fill="#14202B" />
    </svg>
  );
}
