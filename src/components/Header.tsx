import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";
const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking on a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm py-2 shadow-sm"
          : "bg-slate-900/90 backdrop-blur-sm py-3"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-5">
        <nav className="flex justify-between items-center">
          {/* Logo */}
          <div
            className={`flex items-center gap-2 text-lg sm:text-xl font-bold transition-colors duration-300 ${
              isScrolled ? "text-slate-800" : "text-white"
            }`}
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 from-blue-600 to-blue-800 rounded-lg flex items-center justify-center font-bold text-white flex-shrink-0">
              <img
                src={logo}
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="hidden sm:inline">Sinapse HealthTech</span>
            <span className="sm:hidden">Sinapse</span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex list-none gap-6 lg:gap-8">
            <li>
              <a
                href="#inicio"
                className={`font-medium hover:text-blue-600 transition-colors ${
                  isScrolled ? "text-slate-700" : "text-white"
                }`}
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="#sobre"
                className={`font-medium hover:text-blue-600 transition-colors ${
                  isScrolled ? "text-slate-700" : "text-white"
                }`}
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#solucoes"
                className={`font-medium hover:text-blue-600 transition-colors ${
                  isScrolled ? "text-slate-700" : "text-white"
                }`}
              >
                Soluções
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className={`font-medium hover:text-blue-600 transition-colors ${
                  isScrolled ? "text-slate-700" : "text-white"
                }`}
              >
                Portfólio
              </a>
            </li>
            <li>
              <a
                href="#contato"
                className={`font-medium hover:text-blue-600 transition-colors ${
                  isScrolled ? "text-slate-700" : "text-white"
                }`}
              >
                Contato
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors duration-300 ${
              isScrolled ? "text-slate-800" : "text-white"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-slate-200 shadow-lg">
          <ul className="flex flex-col py-4">
            <li>
              <a
                href="#inicio"
                onClick={handleLinkClick}
                className="block px-6 py-3 text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="#sobre"
                onClick={handleLinkClick}
                className="block px-6 py-3 text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#solucoes"
                onClick={handleLinkClick}
                className="block px-6 py-3 text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
              >
                Soluções
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                onClick={handleLinkClick}
                className="block px-6 py-3 text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
              >
                Portfólio
              </a>
            </li>
            <li>
              <a
                href="#contato"
                onClick={handleLinkClick}
                className="block px-6 py-3 text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
