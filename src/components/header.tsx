import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import clsx from "clsx";
import { useRef } from "react";
import { Button } from "./ui/button";

type TLink = {
  label: string;
  href?: string;
  children?: TLink[];
  currentPathname?: string;
};

const links: TLink[] = [
  {
    href: "/",
    label: "Beranda",
  },
  {
    href: "/profil",
    label: "Profil",
  },
  {
    href: "/prestasi",
    label: "Prestasi",
  },
  {
    href: "/ppdb",
    label: "PPDB",
  },
  // {
  //   label: "Unit",
  //   children: [
  //     {
  //       label: "SDIT",
  //       href: "/unit/sdit",
  //     },
  //     {
  //       label: "SMPIT",
  //       href: "/unit/smpit",
  //     },
  //     {
  //       label: "TK",
  //       href: "/unit/tk",
  //     },
  //     {
  //       label: "RQ",
  //       href: "/unit/rq",
  //     },
  //   ],
  // },
];

const NavItemDropdown = ({ label, children }: TLink) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="cursor-pointer text-base font-normal"
        >
          <span>{label}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col gap-4 w-28 p-4 rounded-md bg-white shadow-md">
        {children?.map((child) => (
          <DropdownMenuItem
            key={child.label}
            asChild
            className="flex justify-center hover:underline"
          >
            <a href={child.href}>{child.label}</a>
          </DropdownMenuItem>
        )) ?? null}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const NavItem = ({ href, label, children, currentPathname }: TLink) => {
  if (href === undefined) {
    return NavItemDropdown({ label, children });
  }
  return (
    <li key={label} className="group relative">
      <a href={href}>{label}</a>
      <div
        className={clsx(
          "absolute w-full h-[2px] rounded bg-black transition-transform group-hover:scale-x-100 origin-left",
          href == currentPathname ? "scale-x-100" : "scale-x-0",
        )}
      />
    </li>
  );
};

export const Header = ({ currentPathname }: { currentPathname?: string }) => {
  const ref = useRef<HTMLHeadElement>(null);

  return (
    <header
      ref={ref}
      className={clsx(
        "fixed top-0 left-0 w-full h-24 bg-transparent py-2 border-b border-b-gray-200 flex items-center",
        "z-50 bg-white/50 backdrop-blur-sm",
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex gap-2">
          <a
            href="/"
            className="inline-flex w-[52px] aspect-square rounded-full"
          >
            <img src="/sditlatahzan.png" alt="Logo SDIT LaTahzan" />
          </a>
          <a
            href="https://jsit.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-[52px] aspect-square rounded-full"
          >
            <img src="/jsit.png" alt="Logo SDIT LaTahzan" />
          </a>
        </div>

        <nav>
          <ul className="flex items-center gap-6">
            {links.map((link, _) => (
              <NavItem
                key={link.label}
                {...link}
                currentPathname={currentPathname}
              />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
