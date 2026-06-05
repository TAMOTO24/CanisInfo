import Link from "next/link";
import { StarOutlined, SearchOutlined } from "@ant-design/icons";

export default function Header() {
  const pages = [
    { to: "/", label: "home" },
    { to: "/about", label: "about us" },
    { to: "/info", label: "pets" },
    { to: "/breeds", label: "breeds" },
  ];

  return (
    <header className="site-header manga-header flex items-center px-[10vw] py-3 gap-6 justify-between">
      <div className="flex items-center gap-3">
        <img
          src="/IMG/logo/canisinfo_face.png"
          alt="Canis Info Logo"
          className="h-10 w-10 object-cover mono-image"
        />
        <span className="font-extrabold text-4xl">CANISINFO</span>
      </div>

      <nav className="flex font-semibold gap-6">
        {pages.map((page) => (
          <Link
            key={page.label}
            href={page.to}
            className="nav-link transition-colors"
          >
            {page.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
