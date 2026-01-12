import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            <nav className="block w-full px-4 py-2 mx-auto text-white bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg lg:px-8 lg:py-3 border-b border-gray-700">
                <div className="container flex flex-wrap items-center justify-between mx-auto text-gray-100">
                    <Link to="/teamflow"
                        className="mr-4 block cursor-pointer py-1.5 text-xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text hover:from-blue-300 hover:to-purple-400 transition-all duration-300">
                        TaskFlow
                    </Link>
                    <div className="hidden lg:block">
                        <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                            <li className="flex items-center p-1 text-sm gap-x-2 text-gray-200 hover:text-white transition-colors duration-200">
                                <Link to="/teamflow/home" className="flex items-center hover:scale-105 transition-transform duration-200">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                    Home
                                </Link>
                            </li>
                            <li className="flex items-center p-1 text-sm gap-x-2 text-gray-200 hover:text-white transition-colors duration-200">
                                <a href="#about" className="flex items-center hover:scale-105 transition-transform duration-200">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    About Us
                                </a>
                            </li>
                            <li className="flex items-center p-1 text-sm gap-x-2 text-gray-200 hover:text-white transition-colors duration-200">
                                <Link to="/teamflow/login" className="flex items-center hover:scale-105 transition-transform duration-200">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                    </svg>
                                    Sign In
                                </Link>
                            </li>
                            <li className="flex items-center p-1 text-sm gap-x-2 text-gray-200 hover:text-white transition-colors duration-200">
                                <Link to="/teamflow/signup" className="flex items-center hover:scale-105 transition-transform duration-200 bg-gradient-to-r from-blue-500 to-purple-600 px-3 py-1 rounded-lg hover:from-blue-400 hover:to-purple-500 transition-all duration-300">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                    </svg>
                                    Sign Up
                                </Link>
                            </li>
                            <li className="flex items-center p-1 text-sm gap-x-2 text-gray-200 hover:text-white transition-colors duration-200">
                                <a href="#contact" className="flex items-center hover:scale-105 transition-transform duration-200">
                                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                    <button
                        onClick={toggleMobileMenu}
                        className="relative ml-auto h-8 max-h-[40px] w-8 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-inherit transition-all hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-700 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden border border-gray-600"
                        type="button">
                        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                            {isMobileMenuOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </span>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="lg:hidden mt-4 pb-4 border-t border-gray-700">
                        <ul className="flex flex-col gap-4 mt-4">
                            <li className="text-sm text-gray-200 hover:text-white transition-colors duration-200">
                                <Link to="/teamflow/home" className="flex items-center py-2 px-2 rounded hover:bg-gray-700 transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>
                                    <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                    Home
                                </Link>
                            </li>
                            <li className="text-sm text-gray-200 hover:text-white transition-colors duration-200">
                                <a href="#about" className="flex items-center py-2 px-2 rounded hover:bg-gray-700 transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>
                                    <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    About Us
                                </a>
                            </li>
                            <li className="text-sm text-gray-200 hover:text-white transition-colors duration-200">
                                <Link to="/teamflow/login" className="flex items-center py-2 px-2 rounded hover:bg-gray-700 transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>
                                    <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                    </svg>
                                    Sign In
                                </Link>
                            </li>
                            <li className="text-sm text-gray-200 hover:text-white transition-colors duration-200">
                                <Link to="/teamflow/signup" className="flex items-center py-2 px-2 rounded bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 transition-all duration-300 py-2 px-3" onClick={() => setIsMobileMenuOpen(false)}>
                                    <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                                    </svg>
                                    Sign Up
                                </Link>
                            </li>
                            <li className="text-sm text-gray-200 hover:text-white transition-colors duration-200">
                                <a href="#contact" className="flex items-center py-2 px-2 rounded hover:bg-gray-700 transition-colors duration-200" onClick={() => setIsMobileMenuOpen(false)}>
                                    <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </>
    )
}