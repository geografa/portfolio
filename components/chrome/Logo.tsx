export function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? "logo-mark"}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" stroke="#14202B" strokeWidth="1.6" />
      <path
        d="M2 12 H22 M12 2 C 16 6, 16 18, 12 22 M12 2 C 8 6, 8 18, 12 22"
        stroke="#14202B"
        strokeWidth="1.2"
        fill="none"
      />
      <circle cx="16" cy="9" r="2" fill="#C97B5C" />
    </svg>
  );
}
