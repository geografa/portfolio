import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="foot">
      <div className="container foot-row">
        <div>
          <div className="brand" style={{ marginBottom: 4 }}>
            <Logo />
            <span>Geografa</span>
          </div>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--t-xs)",
              color: "var(--muted-2)",
            }}
          >
            © {new Date().getFullYear()} · Portland, OR · made on warm paper
          </span>
        </div>
        <div className="links">
          <Link href="/#work">Work</Link>
          <Link href="/examples/">Archive</Link>
          <Link href="/#approach">Approach</Link>
          <Link href="/#about">About</Link>
          <a
            href="https://github.com/geografa"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a href="mailto:rafa@geografa.io">Email</a>
        </div>
      </div>
    </footer>
  );
}
