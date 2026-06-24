"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header/Header";

import "../globals.css";

export default function LayoutContent({ children }) {
  const pathname = usePathname();

  const hideHeader = pathname === "/home";

  return (
    <html lang="en">
      <body className="h-dvh overflow-hidden">
        {!hideHeader && <Header className="h-[90px]" />}

        <main className="pt-[72px] h-full overflow-hidden flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
