import React from "react";
import { Link } from "react-router-dom";

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  chevron?: boolean;
  isOpen?: boolean;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ to, children, chevron, isOpen, className }) => {
  return (
    <Link
      to={to}
      className={`relative inline-block text-lg text-[#0A0A0A] transition-colors duration-300 ease-in-out
                  after:block after:h-[2px] after:bg-[#1C448E] after:scale-x-0 after:transition-transform 
                  after:duration-300 after:origin-left hover:after:scale-x-100 hover:text-[#1C448E]
                  ${className || ""}`}
    >
      <span className="relative z-10 flex items-center gap-1">
        {children}
        {chevron && (
          <span
            className={`w-2 h-2 border-l-2 border-b-2 transform transition-transform duration-300 ${
              isOpen ? "rotate-45 border-[#1C448E]" : "-rotate-45 border-[#0A0A0A]"
            }`}
          />
        )}
      </span>
    </Link>
  );
};

export default NavLink;
