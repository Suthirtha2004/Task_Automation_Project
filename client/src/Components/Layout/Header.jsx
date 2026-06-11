import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const { isLoggedIn } = useAuth();

  const navLinks = [
    { label: "Home", to: isLoggedIn ? "/teamflow/home" : "/teamflow/login", isLink: true },
    { label: "About Us", to: "#about", isLink: false },
    { label: "Contact Us", to: "#contact", isLink: false },
  ];

  return (
    // Clean matte dark navigation header matching the main landing layout view frame
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-900 bg-[#070708]/90 backdrop-blur-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Typography Element matching Vetra header styles */}
        <Link to="/teamflow" className="flex items-center gap-2 group">
          <div className="w-2.5 h-2.5 rounded-full bg-[#f96232] transition-transform duration-300 group-hover:scale-110" />
          <span className="text-white font-bold tracking-tight text-md">TaskFlow</span>
        </Link>

        {/* Desktop Central Navigation Structure */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link, idx) =>
            link.isLink ? (
              <Link key={idx} to={link.to} className="text-xs font-semibold text-zinc-400 hover:text-white transition duration-150 tracking-wide">
                {link.label}
              </Link>
            ) : (
              <a key={idx} href={link.to} className="text-xs font-semibold text-zinc-400 hover:text-white transition duration-150 tracking-wide">
                {link.label}
              </a>
            )
          )}
        </div>

        {/* Desktop High-Contrast Conversion Buttons */}
        <div className="hidden lg:flex items-center space-x-5">
          <Link to="/teamflow/login">
            <button className="text-xs font-semibold text-zinc-400 hover:text-white transition duration-150 tracking-wide py-2">
              Sign In
            </button>
          </Link>
          <Link to="/teamflow/signup">
            <button className="text-xs font-bold bg-[#f96232] hover:bg-[#e05328] text-white px-4 py-2 rounded-lg transition duration-150 tracking-wide shadow-sm">
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile View Navigation Toggle Button */}
        <button
          onClick={toggleMobileMenu}
          className="p-2 text-zinc-400 hover:text-white bg-[#111113] border border-zinc-800 rounded-lg lg:hidden transition duration-150"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu Overlays */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#070708] border-b border-zinc-900 px-6 py-5 space-y-5 shadow-xl animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link, idx) =>
              link.isLink ? (
                <Link key={idx} to={link.to} className="text-sm font-medium text-zinc-400 hover:text-white py-0.5" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.label}
                </Link>
              ) : (
                <a key={idx} href={link.to} className="text-sm font-medium text-zinc-400 hover:text-white py-0.5" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.label}
                </a>
              )
            )}
          </div>
          
          <div className="h-[1px] bg-zinc-900 w-full" />
          
          <div className="flex flex-col space-y-2.5">
            <Link to="/teamflow/login" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="w-full text-center py-2 bg-[#111113] border border-zinc-800 text-zinc-300 rounded-lg font-semibold text-xs">
                Sign In
              </button>
            </Link>
            <Link to="/teamflow/signup" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="w-full text-center py-2.5 bg-[#f96232] text-white rounded-lg font-bold text-xs shadow-sm">
                Get Started Free
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};