import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container" style={{ padding: "var(--s-10) 0" }}>
      <h1 className="section-title">Page not found</h1>
      <p className="section-sub">
        That route doesn&apos;t exist. Try the{" "}
        <Link href="/">home page</Link> or the{" "}
        <Link href="/examples/">archive</Link>.
      </p>
    </div>
  );
}
