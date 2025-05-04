// src/components/Navbar.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon, UserIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative z-50">
      {/* Desktop Nav */}
      <nav className="mx-auto w-full lg:w-3/4 flex items-center justify-between h-20 bg-white shadow-md rounded-b-lg px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center cursor-pointer">
          <img
            src="/images/logo/logo-blue.svg"
            alt="AutoVerkoop Logo"
            className="h-8 w-auto"
          />
        </Link>
        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center space-x-8">
          <NavItem to="/">Home</NavItem>
          <NavItem to="/collection">Collectie</NavItem>
          <NavItem to="/search">Zoekopdracht</NavItem>
          <NavItem to="/about">Over Ons</NavItem>
          <NavItem to="/contact">Contact</NavItem>
          {/* Desktop Login als blauwe knop */}
          <li>
            <button
              onClick={() => {}}
              className="inline-flex items-center gap-1 px-4 py-2 bg-[#1C448E] hover:bg-[#17336e] text-white rounded-md transition-colors duration-300 cursor-pointer"
            >
              <UserIcon className="w-4 h-4" />
              <span className="font-medium">Login</span>
            </button>
          </li>
        </ul>
        {/* Hamburger (mobile) */}
        <button
          className="lg:hidden focus:outline-none cursor-pointer"
          onClick={() => setMobileOpen(true)}
        >
          <Bars3Icon className="w-8 h-8 text-[#0A0A0A] hover:text-[#1C448E] transition-colors duration-300 hover:scale-110" />
        </button>
      </nav>

      {/* Backdrop (mobile) */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:hidden z-50 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Mobile Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="flex items-center cursor-pointer"
          >
            <img
              src="/images/logo/logo-blue.svg"
              alt="AutoVerkoop Logo"
              className="h-8 w-auto"
            />
          </Link>
          <button
            className="focus:outline-none cursor-pointer"
            onClick={() => setMobileOpen(false)}
          >
            <XMarkIcon className="w-8 h-8 text-[#0A0A0A] hover:text-[#1C448E] transition-colors duration-300 hover:rotate-90" />
          </button>
        </div>
        {/* Mobile Links */}
        <ul className="flex flex-col px-6 py-4 space-y-4">
          <MobileItem to="/" onClick={() => setMobileOpen(false)}>
            Home
          </MobileItem>
          <MobileItem to="/collection" onClick={() => setMobileOpen(false)}>
            Collectie
          </MobileItem>
          <MobileItem to="/search" onClick={() => setMobileOpen(false)}>
            Zoekopdracht
          </MobileItem>
          <MobileItem to="/about" onClick={() => setMobileOpen(false)}>
            Over Ons
          </MobileItem>
          <MobileItem to="/contact" onClick={() => setMobileOpen(false)}>
            Contact
          </MobileItem>
          {/* Mobile Login als icon+tekst link */}
          <MobileItem to="#" onClick={() => setMobileOpen(false)}>
            <UserIcon className="w-5 h-5 mr-1 inline" />
            Login
          </MobileItem>
        </ul>
      </div>
    </header>
  );
}

// Desktop link met inline-flex en 2px underline
function NavItem({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-1 relative text-[#0A0A0A] font-medium transition-colors hover:text-[#1C448E] cursor-pointer
                 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#1C448E]
                 after:origin-bottom-left after:scale-x-0 after:transition-transform after:duration-300
                 hover:after:scale-x-100"
    >
      {children}
    </Link>
  );
}

// Mobile link met inline-flex en 2px underline
function MobileItem({
  to,
  onClick,
  children,
}: {
  to: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="
        self-start 
        inline-flex items-center gap-2 
        relative text-[#0A0A0A] font-medium 
        transition-colors hover:text-[#1C448E]
        after:absolute after:bottom-0 after:left-0 
        after:w-full after:h-[2px] after:bg-[#1C448E]
        after:origin-bottom-left after:scale-x-0 
        after:transition-transform after:duration-300 
        hover:after:scale-x-100
        cursor-pointer
      "
    >
      {children}
    </Link>
  );
}
