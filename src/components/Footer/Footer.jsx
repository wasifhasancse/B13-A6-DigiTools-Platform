import React from 'react';
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#0F1117] text-white">
      <div className="container mx-auto px-4 md:px-6 py-14 md:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-6 md:gap-6">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-white">DigiTools</h2>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-xs">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Templates
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">
              Social Links
            </h3>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-[#1E2030] flex items-center justify-center hover:bg-[#2a2d45] transition-colors duration-200"
              >
                <FaYoutube className="text-white text-base" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-[#1E2030] flex items-center justify-center hover:bg-[#2a2d45] transition-colors duration-200"
              >
                <FaFacebook className="text-white text-base" />
              </a>
              <a
                href="#"
                className="h-10 w-10 rounded-full bg-[#1E2030] flex items-center justify-center hover:bg-[#2a2d45] transition-colors duration-200"
              >
                <FaXTwitter className="text-white text-base" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 Digitools. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
