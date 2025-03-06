"use client";

import Link from "next/link";
import { HiMiniPresentationChartBar } from "react-icons/hi2";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <HiMiniPresentationChartBar className="text-4xl text-blue-600" />
          <span className="ml-2 text-2xl font-bold text-gray-800 hidden md:inline">
            <span className="text-blue-600">Ink</span>PPT
          </span>
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-600 hover:text-blue-600 focus:outline-none"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/generateppt"
            className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
          >
            Generate PPT
          </Link>
          <Link
            href="/login"
            className="text-gray-600 font-medium py-2 px-4 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="text-gray-600 font-medium py-2 px-4 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden overflow-hidden bg-white border-t border-gray-200"
      >
        <div className="px-4 py-4 flex flex-col gap-4">
          <Link
            href="/generateppt"
            onClick={toggleMenu}
            className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
          >
            Generate PPT
          </Link>
          <Link
            href="/login"
            onClick={toggleMenu}
            className="text-gray-600 font-medium py-2 px-4 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 text-center"
          >
            Login
          </Link>
          <Link
            href="/signup"
            onClick={toggleMenu}
            className="text-gray-600 font-medium py-2 px-4 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 text-center"
          >
            Sign Up
          </Link>
        </div>
      </motion.div>
    </nav>
  );
}