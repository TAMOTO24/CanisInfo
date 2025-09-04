import Link from "next/link";

export default function Header() {
  const pages = [
    { to: "/", label: "Home" },
    { to: "/info", label: "All about pets" },
    { to: "", label: "Dog breeds" },
  ];

  return (
    <header className="flex items-center px-[24vw] py-2 gap-6 justify-between bg-white border-b-2 border-[#2ac481]">
      <div className="flex items-center gap-3">
        <img
          src="/IMG/logo/canisinfo_face.png"
          alt="Canis Info Logo"
          className="h-20 w-20 object-cover"
        />
        <span className="font-bold font-bebas text-7xl">CANISINFO</span>
      </div>

      <nav className="flex gap-6">
        {pages.map((page) => (
          <Link
            key={page.label}
            href={page.to}
            className="hover:text-[#2ac481] transition-colors"
          >
            {page.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
