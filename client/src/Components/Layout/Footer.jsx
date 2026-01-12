import { Link } from "react-router-dom";

export const Footer = () => {
    return (
        <>
            <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-300 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-6 py-16">
                    {/* Top Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                        {/* Brand */}
                        <div className="lg:col-span-1">
                            <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text mb-4">
                                TaskFlow
                            </h2>
                            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                                Streamline your team's productivity with intelligent task management.
                                Built for modern teams who value efficiency and collaboration.
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                    </svg>
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                    </svg>
                                </a>
                                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Product */}
                        <div>
                            <h3 className="text-white font-semibold mb-6 flex items-center">
                                <svg className="w-5 h-5 mr-2 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                                Product
                            </h3>
                            <ul className="space-y-3 text-sm">
                                <li><Link to="/teamflow/home" className="hover:text-blue-400 transition-colors duration-200">Features</Link></li>
                                <li><a href="#pricing" className="hover:text-blue-400 transition-colors duration-200">Pricing</a></li>
                                <li><a href="#docs" className="hover:text-blue-400 transition-colors duration-200">Documentation</a></li>
                                <li><a href="#api" className="hover:text-blue-400 transition-colors duration-200">API</a></li>
                                <li><a href="#integrations" className="hover:text-blue-400 transition-colors duration-200">Integrations</a></li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h3 className="text-white font-semibold mb-6 flex items-center">
                                <svg className="w-5 h-5 mr-2 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                                Company
                            </h3>
                            <ul className="space-y-3 text-sm">
                                <li><a href="#about" className="hover:text-purple-400 transition-colors duration-200">About Us</a></li>
                                <li><a href="#careers" className="hover:text-purple-400 transition-colors duration-200">Careers</a></li>
                                <li><a href="#blog" className="hover:text-purple-400 transition-colors duration-200">Blog</a></li>
                                <li><a href="#press" className="hover:text-purple-400 transition-colors duration-200">Press</a></li>
                                <li><a href="#contact" className="hover:text-purple-400 transition-colors duration-200">Contact</a></li>
                            </ul>
                        </div>

                        {/* Support */}
                        <div>
                            <h3 className="text-white font-semibold mb-6 flex items-center">
                                <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Support
                            </h3>
                            <ul className="space-y-3 text-sm">
                                <li><a href="#help" className="hover:text-green-400 transition-colors duration-200">Help Center</a></li>
                                <li><a href="#community" className="hover:text-green-400 transition-colors duration-200">Community</a></li>
                                <li><a href="#status" className="hover:text-green-400 transition-colors duration-200">Status</a></li>
                                <li><a href="#security" className="hover:text-green-400 transition-colors duration-200">Security</a></li>
                                <li><a href="#feedback" className="hover:text-green-400 transition-colors duration-200">Feedback</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Newsletter Section */}
                    <div className="border-t border-gray-800 pt-8 pb-8">
                        <div className="max-w-md mx-auto text-center lg:mx-0 lg:text-left lg:flex lg:items-center lg:justify-between">
                            <div className="lg:flex-1">
                                <h3 className="text-lg font-semibold text-white mb-2">Stay Updated</h3>
                                <p className="text-gray-400 text-sm mb-4 lg:mb-0">Get the latest updates on new features and improvements.</p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-3 lg:ml-8">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-200 flex-1"
                                />
                                <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Section */}
                    <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
                        <p className="text-sm text-gray-400 mb-4 md:mb-0">
                            © {new Date().getFullYear()} TaskFlow. All rights reserved. Made with ❤️ for better team collaboration.
                        </p>
                        <div className="flex flex-wrap gap-6 text-sm">
                            <a href="#privacy" className="text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a>
                            <a href="#terms" className="text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</a>
                            <a href="#cookies" className="text-gray-400 hover:text-white transition-colors duration-200">Cookie Policy</a>
                            <a href="#gdpr" className="text-gray-400 hover:text-white transition-colors duration-200">GDPR</a>
                        </div>
                    </div>
                    </div>
              
            </footer>
        </>
    )
}