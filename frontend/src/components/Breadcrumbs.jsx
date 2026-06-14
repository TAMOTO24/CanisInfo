"use client";

import { Breadcrumb } from "antd";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Breadcrumbs() {
  const pathname = usePathname();
  const pathSegments = pathname
    .split("/").filter(Boolean);

  const items = [
    {
      title: <Link href="/">home</Link>,
    },
    ...pathSegments.map((segment, index) => {
      const href = "/" + pathSegments.slice(0, index + 1).join("/");

      return {
        title: (
          <Link href={href}>
            {segment}
          </Link>
        ),
      };
    }),
  ];

  return <Breadcrumb items={items} />;
}