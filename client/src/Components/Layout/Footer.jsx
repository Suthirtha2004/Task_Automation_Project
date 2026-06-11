import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const legalLinks = [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Cookie Policy", href: "#cookies" },
    { label: "GDPR Compliance", href: "#gdpr" },
  ];

  return (
    // Clean matte-black footer surface using Vetra dark variables
    <footer className="bg-[#070708] text-zinc-400 border-t border-zinc-900/80 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-10">
        
        {/* Top Tier: Brand Identifier & Minimalist Changelog Form */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-4">
          
          {/* Minimalist Logo Anchor */}
          <div className="space-y-2">
            <Link to="/teamflow" className="flex items-center gap-2 group">
              <div className="w-2.5 h-2.5 rounded-full bg-[#f96232]" />
              <span className="text-white font-bold tracking-tight text-md">Taskflow</span>
            </Link>
            <p className="text-xs text-zinc-500 font-normal">
              Accelerating project production with precision workflow scaling.
            </p>
          </div>

          {/* Integrated Horizontal Changelog Input */}
          <div className="w-full max-w-sm">
            <p className="text-xs font-medium text-white mb-2">Subscribe to our technical changelog</p>
            <div className="flex bg-[#111113] border border-zinc-800 p-1 rounded-xl focus-within:border-zinc-700 transition duration-150">
              <input
                type="email"
                placeholder="work@email.com"
                className="px-3 bg-transparent text-xs text-white placeholder-zinc-600 focus:outline-none flex-1 font-normal"
              />
              <button className="px-4 py-1.5 bg-[#f96232] hover:bg-[#e05328] text-white rounded-lg font-semibold text-xs transition duration-150 shadow-sm">
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Tier: Metadata & Legal Node Arrays */}
        <div className="border-t border-zinc-900 pt-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
          
          {/* Copyright Assertions */}
          <p className="text-[11px] font-normal text-zinc-600 tracking-wide text-center sm:text-left">
            &copy; {currentYear} TaskFlow Inc. All rights reserved.
          </p>
          
          {/* Linear Text Links Container */}
          <div className="flex flex-wrap gap-x-5 gap-y-1.5 justify-center text-[11px] font-medium">
            {legalLinks.map((link, idx) => (
              <a key={idx} href={link.href} className="text-zinc-500 hover:text-zinc-300 transition duration-150">
                {link.label}
              </a>
            ))}
          </div>

        </div>

      </div>
    </footer>
  );
};