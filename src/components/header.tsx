const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/profile",
    label: "Profile",
  },
  {
    href: "/prestasi",
    label: "Prestasi",
  },
  {
    href: "/ppdb",
    label: "PPDB",
  },
];

const NavItem = ({ href, label }: { href: string; label: string }) => {
  return (
    <li key={label} className="group relative">
      <a href={href}>{label}</a>
      <div className="absolute w-full h-[2px] rounded bg-black scale-x-0 transition-transform group-hover:scale-x-100 origin-left" />
    </li>
  );
};

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-24 bg-transparent py-2">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex gap-1">
          <h1>Logo</h1>
        </div>

        <nav>
          <ul className="flex items-center gap-6">
            {links.map((link, _) => (
              <NavItem key={link.label} {...link} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
