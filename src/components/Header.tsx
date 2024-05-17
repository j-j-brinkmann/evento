"use client";

import Link from "next/link";
import React from "react";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion } from "framer-motion";

const routes = [
  {
    path: "/",
    linkText: "Home",
  },
  {
    path: "/events/all",
    linkText: "All Events",
  },
];

const Header = () => {
  const activePath = usePathname();
  return (
    <header className="flex justify-between items-center border-b border-white/10 h-14 px-3 sm:px-9">
      <Link href="/">
        <Logo />
      </Link>
      <nav className="h-full">
        <ul className="flex gap-x-6 text-sm h-full">
          {routes.map((link) => (
            <li
              key={link.path}
              className={clsx(
                "hover:text-white flex items-center relative transition",
                {
                  "text-white": activePath === link.path,
                  "text-white/50": activePath !== link.path,
                }
              )}
            >
              <Link href={link.path}>{link.linkText}</Link>
              {activePath === link.path && (
                <motion.div
                  layoutId="header-active-link"
                  className="bg-accent h-1 w-full absolute bottom-0"
                ></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
