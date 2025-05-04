import { ChevronDownIcon } from "@heroicons/react/24/outline";
import React from "react";

interface NavLinkProps {
  href: string;
  chevron?: boolean;
  isOpen?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function NavLink({
  href,
  chevron = false,
  isOpen = false,
  children,
  onClick,
}: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="flex items-center uppercase tracking-wide text-[#0A0A0A] font-medium text-lg transition-colors duration-300 hover:text-[#1C448E]"
    >
      {children}
      {chevron && (
        <ChevronDownIcon
          className={`w-5 h-5 ml-1 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-[#1C448E]" : ""
          }`}          
        />
      )}
    </a>
  );
}