import React, { useState, useEffect } from "react";
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-sm py-2 shadow-sm"
          : "bg-slate-900/90 backdrop-blur-sm py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5">
        <nav className="flex justify-between items-center">
          <div
            className={`flex items-center gap-2 text-xl font-bold transition-colors duration-300 ${
              isScrolled ? "text-slate-600" : "text-white"
            }`}
          >
            <div className="w-12 h-12 from-blue-600 to-blue-800 rounded-lg flex items-center justify-center font-bold text-white">
              <img src={logo} alt="" />
            </div>
            Sinapse HealthTech
          </div>

          <ul
            className={`md:flex list-none gap-8 ${
              isMenuOpen
                ? "fixed top-16 left-0 right-0 bg-white flex-col p-8 transform translate-y-0 shadow-lg"
                : "hidden md:flex transform -translate-y-full md:translate-y-0"
            } transition-transform duration-300`}
          >
            <li>
              <a
                href="#inicio"
                className={`font-medium hover:text-blue-600 transition-colors ${
                  isScrolled || isMenuOpen ? "text-slate-700" : "text-white"
                }`}
              >
                Início
              </a>
            </li>
            <li>
              <a
                href="#sobre"
                className={`font-medium hover:text-blue-600 transition-colors ${
                  isScrolled || isMenuOpen ? "text-slate-700" : "text-white"
                }`}
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#solucoes"
                className={`font-medium hover:text-blue-600 transition-colors ${
                  isScrolled || isMenuOpen ? "text-slate-700" : "text-white"
                }`}
              >
                Soluções
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className={`font-medium hover:text-blue-600 transition-colors ${
                  isScrolled || isMenuOpen ? "text-slate-700" : "text-white"
                }`}
              >
                Portfólio
              </a>
            </li>
            <li>
              <a
                href="#contato"
                className={`font-medium hover:text-blue-600 transition-colors ${
                  isScrolled || isMenuOpen ? "text-slate-700" : "text-white"
                }`}
              >
                Contato
              </a>
            </li>
          </ul>

          <button
            className={`md:hidden bg-none text-2xl transition-colors duration-300 ${
              isScrolled ? "text-slate-800" : "text-white"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
