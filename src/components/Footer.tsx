import Link from "next/link";
import React from "react";

const routes = [
  {
    path: "/terms-conditions",
    linkText: "Terms & Conditions",
  },
  {
    path: "/privacy-policy",
    linkText: "Privacy Policy",
  },
];

const Footer = () => {
  return (
    <footer className="mt-auto flex items-center justify-between h-16 border-t border-white/10 px-3 sm:px-9 text-xs text-white/25">
      <small className="text-xs">
        &copy; 2024 Jürgen Janos Brinkmann All Rights Reserved
      </small>

      <ul className="flex gap-x-3 sm:gap-x-8">
        {routes.map((route) => (
          <li key={route.path}>
            <Link href={route.path}>{route.linkText}</Link>
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default Footer;
