import type { ReactNode } from "react";

export function ProjectGrid({
  children,
  asymmetric,
}: {
  children: ReactNode;
  asymmetric?: boolean;
}) {
  return (
    <div className={asymmetric ? "cards asymmetric" : "cards"}>{children}</div>
  );
}
