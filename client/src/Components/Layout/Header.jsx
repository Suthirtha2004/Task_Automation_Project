import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { label: "Home", to: "/teamflow/home", isLink: true },
    { label: "About Us", to: "#about", isLink: false },
    { label: "Contact Us", to: "#contact", isLink: false },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#1f1f23] bg-black backdrop-blur-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo Group */}
        <Link to="/teamflow" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-teal-400 to-indigo-600 flex items-center justify-center shadow-[0_0_15px_rgba(45,212,191,0.2)] group-hover:scale-105 transition-transform duration-300">
            <svg className="w-4 h-4 text-[#09090b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-white font-medium tracking-tight text-lg">TaskFlow</span>
        </Link>

        {/* Desktop Central Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link, idx) => (
            link.isLink ? (
              <Link key={idx} to={link.to} className="text-sm font-light text-gray-400 hover:text-white transition-colors duration-200">
                {link.label}
              </Link>
            ) : (
              <a key={idx} href={link.to} className="text-sm font-light text-gray-400 hover:text-white transition-colors duration-200">
                {link.label}
              </a>
            )
          ))}
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link to="/teamflow/login">
            <button className="text-sm font-light text-gray-400 hover:text-white transition-colors duration-200 px-3 py-2">
              Sign In
            </button>
          </Link>
          <Link to="/teamflow/signup">
            <button className="text-sm font-medium bg-teal-400 text-[#09090b] px-4 py-2 rounded-xl hover:bg-teal-300 shadow-[0_0_20px_rgba(45,212,191,0.15)] transition-all duration-300">
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile Menu Action Toggle */}
        <button
          onClick={toggleMobileMenu}
          className="p-2 text-gray-400 hover:text-white hover:bg-[#18181b] border border-transparent hover:border-[#27272a] rounded-xl lg:hidden transition-all duration-200"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Clean Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#09090b] border-b border-[#1f1f23] px-6 py-6 space-y-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link, idx) => (
              link.isLink ? (
                <Link key={idx} to={link.to} className="text-base font-light text-gray-300 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.label}
                </Link>
              ) : (
                <a key={idx} href={link.to} className="text-base font-light text-gray-300 hover:text-white py-1" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.label}
                </a>
              )
            ))}
          </div>
          
          <div className="h-[1px] bg-[#1f1f23] w-full" />
          
          <div className="flex flex-col space-y-3">
            <Link to="/teamflow/login" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="w-full text-center py-3 bg-[#18181b] border border-[#27272a] text-gray-300 rounded-xl font-light text-sm hover:text-white">
                Sign In
              </button>
            </Link>
            <Link to="/teamflow/signup" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="w-full text-center py-3 bg-teal-400 text-[#09090b] rounded-xl font-medium text-sm shadow-[0_0_20px_rgba(45,212,191,0.1)]">
                Get Started Free
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};