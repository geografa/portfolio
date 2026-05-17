import type { ReactNode } from "react";

type Tone = "default" | "warm" | "green";

export function Chip({
  children,
  tone = "default",
}: {
  children: ReactNode;
  tone?: Tone;
}) {
  const cls =
    tone === "warm" ? "chip warm" : tone === "green" ? "chip green" : "chip";
  return <span className={cls}>{children}</span>;
}
