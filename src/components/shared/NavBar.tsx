'use client'
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathName = usePathname()

  return (
    <nav className="bg-green-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white text-xl font-bold">
              MyLogo
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link href="/" className="text-white hover:text-gray-200">Home</Link>
            <Link href="/about" className={pathName === '/about'? "text-yellow-500 font-semibold underline" :"text-white hover:text-gray-200"}>About</Link>
            <Link href="/Blogs" className="text-white hover:text-gray-200">Blogs</Link>
            <Link href="/contact" className="text-white hover:text-gray-200">Contact</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              {isOpen ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700">
          <Link href="/" className="block px-4 py-2 text-white">Home</Link>
          <Link href="/about" className="block px-4 py-2 text-white">About</Link>
          <Link href="/services" className="block px-4 py-2 text-white">Services</Link>
          <Link href="/contact" className="block px-4 py-2 text-white">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
