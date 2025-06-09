import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import clsx from "clsx";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";

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
      <a href={href} className="flex">
        {label}
      </a>
      <div
        className={clsx(
          "absolute w-full h-[2px] rounded bg-black transition-transform group-hover:scale-x-100 origin-left",
          href == currentPathname ? "scale-x-100" : "scale-x-0",
        )}
      />
    </li>
  );
};

const PopoverHamburger = ({
  currentPathname,
}: {
  currentPathname?: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="flex-col items-start justify-center h-16 gap-1 cursor-pointer rounded-full"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span
            className={clsx(
              "w-8 h-1 bg-black transition-transform origin-center duration-300 rounded",
              isOpen && "translate-y-2 rotate-45",
            )}
          />

          <span
            className={clsx(
              "w-5 h-1 bg-black transition-all duration-300 rounded",
              isOpen && "opacity-0 w-0",
            )}
          />

          <span
            className={clsx(
              "w-8 h-1 bg-black transition-transform origin-center duration-300 rounded",
              isOpen && "-translate-y-2 -rotate-45",
            )}
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="bg-white shadow rounded-xl p-4 mr-4">
        <ul>
          {links.map((link) => (
            <li key={link.label} className="py-2">
              <NavItem {...link} currentPathname={currentPathname} />
            </li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
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
      <div className="container mx-auto px-4 flex items-center justify-between">
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

        <div className="lg:hidden">
          <PopoverHamburger currentPathname={currentPathname} />
        </div>

        <nav className="hidden lg:block">
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
