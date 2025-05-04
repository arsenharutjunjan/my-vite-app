import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import {
  Bars3Icon,
  XMarkIcon,
  UserIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current !== null) clearTimeout(timeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <nav className="container mx-auto flex items-center justify-between h-20 px-6">
        {/* Brand */}
        <Link to="/" className="text-2xl font-bold text-[#0A0A0A] uppercase">
          🚗 AutoVerkoop
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center space-x-8">
          <li><NavLink href="/">Home</NavLink></li>
          <li><NavLink href="/collection">Collectie</NavLink></li>
          <li
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink href="#" chevron isOpen={isDropdownOpen}>
              Diensten
            </NavLink>
            <ul
              className={`absolute top-full left-0 mt-2 w-56 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 ease-out origin-top ${
                isDropdownOpen
                  ? "opacity-100 scale-y-100"
                  : "opacity-0 scale-y-75 -translate-y-2"
              }`}
            >
              <li>
                <Link to="/collection" className="block px-5 py-3 hover:bg-gray-100">
                  Autoverkoop
                </Link>
              </li>
              <li>
                <Link to="/search" className="block px-5 py-3 hover:bg-gray-100">
                  Auto zoeken
                </Link>
              </li>
            </ul>
          </li>
          <li><NavLink href="/about">Over Ons</NavLink></li>
          <li><NavLink href="/contact">Contact</NavLink></li>
          <li>
            <NavLink href="#">
              <UserIcon className="w-5 h-5 mr-1" />
              Login
            </NavLink>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Bars3Icon className="w-8 h-8 text-[#0A0A0A]" />
        </button>

        {/* Mobile Backdrop */}
        <div
          className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <Link to="/" className="text-2xl font-bold text-[#0A0A0A] uppercase">
              🚗 AutoVerkoop
            </Link>
            <button onClick={() => setIsMobileMenuOpen(false)}>
              <XMarkIcon className="w-8 h-8 text-[#0A0A0A]" />
            </button>
          </div>
          <ul className="flex flex-col mt-4 space-y-4 px-6">
            <li><NavLink href="/">Home</NavLink></li>
            <li><NavLink href="/collection">Collectie</NavLink></li>
            <li>
              <button
                onClick={() => setIsMobileDropdownOpen(!isMobileDropdownOpen)}
                className="flex items-center justify-between w-full text-[#0A0A0A] font-medium uppercase tracking-wide"
              >
                Diensten
                <ChevronDownIcon
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isMobileDropdownOpen ? "rotate-180 text-[#1C448E]" : ""
                  }`}
                />
              </button>
              <ul className={`pl-4 mt-2 space-y-2 overflow-hidden transition-all duration-300 ${
                isMobileDropdownOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
              >
                <li><NavLink href="/collection">Autoverkoop</NavLink></li>
                <li><NavLink href="/search">Auto zoeken</NavLink></li>
              </ul>
            </li>
            <li><NavLink href="/about">Over Ons</NavLink></li>
            <li><NavLink href="/contact">Contact</NavLink></li>
            <li><NavLink href="#"><UserIcon className="w-5 h-5 mr-1" />Login</NavLink></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}