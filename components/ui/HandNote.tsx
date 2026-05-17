import type { ReactNode } from "react";

export function HandNote({ children }: { children: ReactNode }) {
  return <span className="hand-note">{children}</span>;
}
