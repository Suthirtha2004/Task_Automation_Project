import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const productLinks = [
    { label: "Features", href: "/teamflow/home", isLink: true },
    { label: "Pricing", href: "#pricing", isLink: false },
    { label: "Documentation", href: "#docs", isLink: false },
    { label: "API Reference", href: "#api", isLink: false },
    { label: "Integrations", href: "#integrations", isLink: false },
  ];

  const companyLinks = [
    { label: "About Us", href: "#about" },
    { label: "Careers", href: "#careers" },
    { label: "Blog", href: "#blog" },
    { label: "Press Kit", href: "#press" },
    { label: "Contact Sales", href: "#contact" },
  ];

  const supportLinks = [
    { label: "Help Center", href: "#help" },
    { label: "Community", href: "#community" },
    { label: "System Status", href: "#status" },
    { label: "Security Hub", href: "#security" },
    { label: "Developer Forum", href: "#feedback" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Cookie Policy", href: "#cookies" },
    { label: "GDPR Compliance", href: "#gdpr" },
  ];

  return (
    <footer className="bg-[#09090b] text-gray-400 border-t border-[#1f1f23] relative overflow-hidden">
      {/* Decorative Minimal Grid Subtle Effect */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
        backgroundSize: '24px 24px'
      }} />

      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-12">
        
        {/* Main Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/teamflow" className="flex items-center space-x-2 group">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-teal-400 to-indigo-600 flex items-center justify-center shadow-[0_0_15px_rgba(45,212,191,0.2)]">
                <svg className="w-3.5 h-3.5 text-[#09090b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-white font-medium tracking-tight text-lg">TaskFlow</span>
            </Link>
            <p className="text-sm font-light text-gray-400 leading-relaxed max-w-sm">
              Streamline your team's productivity with an engineered approach to workflow automation and real-time sprint analytics.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-3">
              {['X', 'GitHub', 'LinkedIn'].map((platform, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-lg bg-[#141416] hover:bg-[#1f1f23] border border-[#1f1f23] flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200">
                  <span className="text-xs font-light">{platform[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Product Directory */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-white tracking-wider uppercase">Product</h4>
            <ul className="space-y-2.5 text-sm font-light">
              {productLinks.map((link, idx) => (
                <li key={idx}>
                  {link.isLink ? (
                    <Link to={link.href} className="hover:text-white transition-colors duration-200">{link.label}</Link>
                  ) : (
                    <a href={link.href} className="hover:text-white transition-colors duration-200">{link.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Company Directory */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-white tracking-wider uppercase">Company</h4>
            <ul className="space-y-2.5 text-sm font-light">
              {companyLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-white transition-colors duration-200">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Directory */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium text-white tracking-wider uppercase">Resources</h4>
            <ul className="space-y-2.5 text-sm font-light">
              {supportLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-white transition-colors duration-200">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Inline Horizontal Newsletter Section */}
        <div className="border-t border-[#1f1f23] py-10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="max-w-md text-center lg:text-left">
            <h4 className="text-sm font-medium text-white">Subscribe to the product changelog</h4>
            <p className="text-xs font-light text-gray-400 mt-1">No marketing fluff. Just technical notes on core system releases.</p>
          </div>
          <div className="flex w-full max-w-sm bg-[#141416] border border-[#1f1f23] p-1 rounded-xl focus-within:border-gray-700 transition-colors duration-200">
            <input
              type="email"
              placeholder="work@email.com"
              className="px-3 bg-transparent text-sm text-white placeholder-gray-600 focus:outline-none flex-1 font-light"
            />
            <button className="px-4 py-1.5 bg-teal-400 text-[#09090b] rounded-lg font-medium text-xs hover:bg-teal-300 transition-all duration-200">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Base Metadata */}
        <div className="border-t border-[#1f1f23] pt-8 flex flex-col-reverse md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-light text-gray-500 text-center md:text-left">
            &copy; {currentYear} TaskFlow Inc. Architected with precision for enterprise scaling teams.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center text-xs font-light">
            {legalLinks.map((link, idx) => (
              <a key={idx} href={link.href} className="text-gray-500 hover:text-white transition-colors duration-200">
                {link.label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
};