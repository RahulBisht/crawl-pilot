import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Globe, Clock, Shield } from 'lucide-react'

const PrivacyPolicy: React.FC = () => {
    return (
        <motion.div
            className="container mx-auto px-6 py-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-4xl mx-auto glass-morphism p-8 md:p-12 border-slate-800/50">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 border border-indigo-500/20">
                        <Shield size={24} />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold">Privacy Policy</h1>
                        <p className="text-slate-500 flex items-center gap-2 text-sm mt-1">
                            <Clock size={14} /> Last Updated: February 03, 2026
                        </p>
                    </div>
                </div>

                <div className="space-y-12 text-slate-300 leading-relaxed">
                    <section className="p-0 border-none">
                        <p className="text-lg">
                            CrawlPilot ("we," "us," or "our") operates the StreamFlix mobile application (the "App"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our App and the choices you have associated with that data.
                        </p>
                        <p className="mt-4">
                            We use your data to provide and improve the App. By using the App, you agree to the collection and use of information in accordance with this policy.
                        </p>
                    </section>

                    <div>
                        <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-indigo-500 pl-4">1. Information Collection and Use</h2>
                        <p className="mb-6">We collect several different types of information for various purposes to provide and improve our service to you.</p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50">
                                <h3 className="font-bold text-indigo-400 mb-2">Personal Data</h3>
                                <p className="text-sm">While using our App, we may ask you to provide us with certain personally identifiable information. This includes your email address and cookies.</p>
                            </div>
                            <div className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50">
                                <h3 className="font-bold text-indigo-400 mb-2">Usage Data</h3>
                                <p className="text-sm">We automatically collect device information, including IP address, operating system, and diagnostic data to improve app performance.</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-indigo-500 pl-4">2. IPTV Content and Links</h2>
                        <p>
                            StreamFlix is an IPTV Player. It does not provide, host, or own any media content. Users are responsible for providing their own content (e.g., M3U playlists). StreamFlix does not have any affiliation with third-party providers.
                        </p>
                        <div className="mt-4 p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/10 text-indigo-200 italic">
                            "Any M3U links or playlist data you enter into the app are stored locally on your device or in your private secure storage."
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold text-white mb-6 border-l-4 border-indigo-500 pl-4">3. Advertising</h2>
                        <p>
                            We use <strong>Google AdMob</strong> to display advertisements. Google uses cookies to serve ads based on your visit to our App or other apps on the Internet.
                        </p>
                        <a
                            href="https://www.google.com/settings/ads"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors"
                        >
                            <Globe size={18} /> Opt-out of personalized advertising
                        </a>
                    </div>

                    <div className="pt-8 border-t border-slate-800">
                        <h2 className="text-2xl font-bold text-white mb-6">Contact Us</h2>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-indigo-400">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500">Email Address</p>
                                    <p className="font-medium text-white">crawlpilot6365@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-indigo-400">
                                    <Globe size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500">Website</p>
                                    <p className="font-medium text-white">https://rahulbisht.github.io/crawl-pilot/</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default PrivacyPolicy
