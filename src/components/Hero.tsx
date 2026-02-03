import React from 'react'
import { ChevronRight, Play, Server, ShieldCheck, Zap } from 'lucide-react'
import { motion } from 'framer-motion'

interface HeroProps {
    onReadPrivacy: () => void
}

const Hero: React.FC<HeroProps> = ({ onReadPrivacy }) => {
    return (
        <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16 py-20">
                <motion.div
                    className="flex-1 text-center lg:text-left"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-semibold mb-8 border border-indigo-500/20">
                        <Zap size={16} />
                        <span>Next-Gen IPTV Player</span>
                    </div>
                    <h1 className="text-5xl lg:text-7xl font-extrabold mb-6 leading-tight">
                        The Ultimate <br />
                        <span className="text-indigo-500">Streaming</span> Experience
                    </h1>
                    <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0">
                        Elevate your entertainment with StreamFlix. A premium, interactive IPTV player designed for performance, security, and a stunning interface.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <button className="primary-button group">
                            Get Started <ChevronRight size={20} className="transition-all" />
                        </button>
                        <button
                            onClick={onReadPrivacy}
                            className="secondary-button"
                        >
                            <ShieldCheck size={20} className="text-indigo-400" />
                            Privacy Policy
                        </button>
                    </div>

                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
                        <div className="flex flex-col items-center lg:items-start gap-2">
                            <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-indigo-400">
                                <Play size={20} />
                            </div>
                            <h3 className="font-bold">Fast Playback</h3>
                            <p className="text-sm text-slate-500">Zero lag streaming for all channels.</p>
                        </div>
                        <div className="flex flex-col items-center lg:items-start gap-2">
                            <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-indigo-400">
                                <Server size={20} />
                            </div>
                            <h3 className="font-bold">M3U Support</h3>
                            <p className="text-sm text-slate-500">Easily import your own playlists.</p>
                        </div>
                        <div className="flex flex-col items-center lg:items-start gap-2">
                            <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-indigo-400">
                                <ShieldCheck size={20} />
                            </div>
                            <h3 className="font-bold">Private & Secure</h3>
                            <p className="text-sm text-slate-500">Your data stays on your device.</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="flex-1 relative"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    <div className="absolute -inset-4 bg-indigo-500/20 blur-3xl rounded-full opacity-50 animate-pulse"></div>
                    <div className="glass-morphism overflow-hidden relative border-slate-700/50">
                        <div className="absolute top-0 left-0 right-0 h-8 bg-slate-800/80 flex items-center px-4 gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-amber-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-emerald-500/50"></div>
                        </div>
                        <img
                            src="https://images.unsplash.com/photo-1593784991095-a20503947206?auto=format&fit=crop&q=80&w=1200"
                            alt="StreamFlix Dashboard"
                            className="mt-8 rounded-b-lg w-full h-auto opacity-90 shadow-2xl"
                        />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero
