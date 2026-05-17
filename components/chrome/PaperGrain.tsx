/**
 * Optional decorative grid overlay for sections.
 * Global paper grain is applied on `body::before` in globals.css.
 */
export function PaperGrain() {
  return <div className="gridlines" aria-hidden />;
}
