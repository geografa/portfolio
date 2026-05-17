"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";

export function TopBar() {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "";
  const isExamples = pathname.startsWith("/examples");

  return (
    <header className="topbar">
      <div className="container topbar-inner">
        <Link href="/" className="brand">
          <Logo />
          <span>Geografa</span>
        </Link>
        <nav className="nav">
          <Link href="/#work" className={isHome ? "active" : ""}>
            Work
          </Link>
          <Link href="/examples/" className={isExamples ? "active" : ""}>
            Archive
          </Link>
          <Link href="/#approach">Approach</Link>
          <Link href="/#about">About</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
