import React from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  chevron?: boolean;
  isOpen?: boolean;
  className?: string; // ✅ Extra prop voor extra styling vanuit Navbar.tsx
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, chevron, isOpen, className }) => {
  return (
    <a
      href={href}
      className={`relative flex items-center gap-2 text-lg text-[#0A0A0A] transition-colors duration-600 ease-[cubic-bezier(0.65_0.05_0.36_1)]
                 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#0A0A0A] 
                 after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 
                 hover:after:origin-bottom-left hover:after:scale-x-100 hover:after:bg-[#1C448E] hover:text-[#1C448E] 
                 ${className || ""}`} // ✅ Voeg hier extra Tailwind klassen toe
    >
      {children}

      {chevron && (
        <div
          className={`w-2 h-2 border-l-2 border-b-2 border-[#0A0A0A] transition-transform duration-300 ${
            isOpen ? "rotate-[135deg] mt-[2px] border-[#1C448E]" : "rotate-[-45deg]"
          }`}
        />
      )}
    </a>
  );
};

export default NavLink;
