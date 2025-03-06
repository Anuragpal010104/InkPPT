"use client";

import Link from "next/link";
import { motion } from "framer-motion"; // For animations
import { FaArrowRight, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // For arrow icon

export default function Home() {
  // Animation variants for the "Create Now" text
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        repeat: Infinity,
        repeatType: "reverse" as const,
      },
    },
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-50 to-blue-100">
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden">
        <div className="max-w-4xl w-full text-center space-y-8 relative z-10">
          {/* Hero Section */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight"
          >
            Welcome to <span className="text-blue-600">InkPPT</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto"
          >
            Transform your blueprints into stunning presentations effortlessly with InkPPT.
          </motion.p>

          {/* Animated "Create Now" Button */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="mt-10"
          >
            <Link
              href="/generateppt"
              className="inline-flex items-center gap-2 bg-blue-600 text-white text-lg md:text-xl font-semibold py-3 px-6 rounded-full hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Create Now
              <FaArrowRight className="text-white" />
            </Link>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 text-gray-500 text-sm md:text-base"
          >
            <p>Start today and turn your ideas into professional slides in minutes.</p>
            <p className="mt-2">
              Already a user?{" "}
              <Link href="/login" className="text-blue-600 hover:underline">
                Login
              </Link>{" "}
              or{" "}
              <Link href="/signup" className="text-blue-600 hover:underline">
                Sign Up
              </Link>
            </p>
          </motion.div>
        </div>

        {/* Decorative Wave */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0 before:content-[''] before:absolute before:bottom-0 before:left-0 before:right-0 before:h-20 before:bg-blue-600 before:opacity-10"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              <span className="text-blue-400">Ink</span>PPT
            </h3>
            <p className="text-gray-400 text-sm">
              Turning your blueprints into presentations, one slide at a time.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/generateppt" className="hover:text-blue-400 transition-colors">
                  Generate PPT
                </Link>
              </li>
              <li>
                <Link href="/login" className="hover:text-blue-400 transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/signup" className="hover:text-blue-400 transition-colors">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect With Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaGithub size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
          <p>&copy; {new Date().getFullYear()} InkPPT. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}