import type { Metadata } from "next";
import { Inter, Caveat, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/chrome/TopBar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-caveat",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  title: "Web mapping support at the ready",
  description:
    "Geografa is a dev web-mapping shop founded by Rafa Gutierrez. Twenty years of geospatial experience, optimizing digital mapping applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${caveat.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@300,400,500,600,700&f[]=cabinet-grotesk@400,500,700,800&display=swap"
          rel="stylesheet"
        />
      </head>
      {/* suppressHydrationWarning: browser extensions (e.g. ColorZilla) inject attrs like cz-shortcut-listen on <body> before React loads */}
      <body suppressHydrationWarning>
        <TopBar />
        <main className="site-main">{children}</main>
      </body>
    </html>
  );
}
