"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header/Header";

import "../globals.css";

export default function LayoutContent({ children }) {
  const pathname = usePathname();

  const hideHeader =
    pathname === "/s";

  return (
    <html lang="en">
      <body className="antialiased">
        {!hideHeader && <Header />}
        {children}
      </body>
    </html>
  );
}
