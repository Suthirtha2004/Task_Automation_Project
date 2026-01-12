import { Link } from "react-router-dom";

export const LandingPage = () => {
    return (
        <>
            <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white overflow-hidden">
                {/* Animated Background */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
                    <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
                </div>

                {/* Hero Section */}
                <section className="relative flex flex-col items-center justify-center text-center px-6 py-32 lg:py-40">
                    <div className="max-w-4xl mx-auto">
                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 mb-8">
                            <span className="text-sm text-blue-400 font-medium">🚀 New: Advanced Task Analytics</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                            <span className="text-transparent bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text">
                                TaskFlow
                            </span>
                            <span className="block text-3xl md:text-5xl text-indigo-400 font-medium mt-2">
                                Manage your Team & Tasks efficiently
                            </span>
                        </h1>

                        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Streamline your workflow with intelligent task management.
                            Built for modern teams who demand efficiency, collaboration, and real-time insights.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                            <Link to="/teamflow/signup">
                                <button className="group px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
                                    <span className="flex items-center">
                                        Get Started Free
                                        <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </span>
                                </button>
                            </Link>
                            <button className="px-8 py-4 rounded-xl border-2 border-slate-600 hover:border-slate-400 hover:bg-slate-800/50 transition-all duration-300 font-semibold text-lg backdrop-blur-sm">
                                Watch Demo
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-400 mb-1">10K+</div>
                                <div className="text-sm text-slate-400">Active Teams</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-purple-400 mb-1">1M+</div>
                                <div className="text-sm text-slate-400">Tasks Completed</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-green-400 mb-1">99.9%</div>
                                <div className="text-sm text-slate-400">Uptime</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-yellow-400 mb-1">24/7</div>
                                <div className="text-sm text-slate-400">Support</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="relative px-6 py-24 max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
                                Powerful Features
                            </span>
                        </h2>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            Everything you need to manage tasks, collaborate with your team, and boost productivity.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="group p-8 rounded-2xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-white">Lightning Fast Setup</h3>
                            <p className="text-slate-300 leading-relaxed">
                                Get started in minutes with our intuitive onboarding process.
                                No complex configurations or steep learning curves.
                            </p>
                        </div>

                        <div className="group p-8 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-white">Team Collaboration</h3>
                            <p className="text-slate-300 leading-relaxed">
                                Real-time collaboration tools that keep your team connected and productive.
                                Share updates, assign tasks, and track progress effortlessly.
                            </p>
                        </div>

                        <div className="group p-8 rounded-2xl bg-gradient-to-br from-green-600/20 to-blue-600/20 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl font-semibold mb-4 text-white">Advanced Analytics</h3>
                            <p className="text-slate-300 leading-relaxed">
                                Gain insights into your team's performance with detailed analytics and reporting.
                                Make data-driven decisions to optimize productivity.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="relative px-6 py-24">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="p-12 rounded-3xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 backdrop-blur-sm">
                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Ready to Transform Your Workflow?
                            </h2>
                            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                                Join thousands of teams already using TaskFlow to streamline their operations and boost productivity.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/teamflow/signup">
                                    <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
                                        Start Free Trial
                                    </button>
                                </Link>
                                <Link to="/teamflow/login">
                                    <button className="px-8 py-4 rounded-xl border-2 border-slate-600 hover:border-slate-400 hover:bg-slate-800/50 transition-all duration-300 font-semibold text-lg">
                                        Sign In
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}