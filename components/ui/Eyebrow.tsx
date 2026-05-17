import type { ReactNode } from "react";

export function Eyebrow({
  children,
  center,
}: {
  children: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={center ? "eyebrow eyebrow--center" : "eyebrow"}>
      {children}
    </div>
  );
}
