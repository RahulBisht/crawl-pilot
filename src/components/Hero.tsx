import React from 'react'
import { Play, Shield, Database, Zap, Plus, MoreHorizontal, Globe, Clock, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'

import MobileMockup from './MobileMockup'

interface HeroProps {
    onReadPrivacy: () => void
}

const Hero: React.FC<HeroProps> = ({ onReadPrivacy }) => {
    return (
        <div className="bg-radial">
            <div className="container">
                <div className="hero-grid">
                    {/* Left Side: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="pill-badge">
                            <ShieldCheck size={14} fill="currentColor" />
                            Premium & Private IPTV Player
                        </div>

                        <h1 className="hero-title">
                            The Ultimate <br />
                            <span className="text-highlight">Streaming Hub</span>
                        </h1>

                        <p className="hero-description">
                            Experience IPTV like never before with StreamFlix. A high-performance player built for speed, advanced playlist management, and local playback—crafted with a premium Indigo design that keeps your privacy first.
                        </p>

                        <div className="flex gap-4">
                            <button className="btn-primary-red">
                                Get StreamFlix
                            </button>
                            <button
                                onClick={onReadPrivacy}
                                className="btn-secondary"
                            >
                                Privacy Policy
                            </button>
                        </div>
                    </motion.div>

                    {/* Right Side: App Mockup */}
                    <motion.div
                        className="flex justify-center lg:justify-end"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative">
                            <MobileMockup />
                            <div className="screenshot-disclaimer mt-8 max-w-[280px] mx-auto rounded-lg border border-white/5 bg-[#0f172a]/50 backdrop-blur-sm">
                                * Interface shown for visual demonstration. StreamFlix does not provide any media content. Users must provide their own playlists.
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Features Grid Refined */}
                <div className="features-grid">
                    <motion.div
                        className="feature-card card-red"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Clock className="absolute top-4 right-4 text-white/30" />
                        <h3 className="feature-title">Ultra Latency</h3>
                        <p className="feature-desc">Engineered for lightning-fast stream loading and buffer-free playback.</p>
                        <div className="feature-tag">Pro Performance</div>
                    </motion.div>

                    <motion.div
                        className="feature-card card-yellow"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <Globe className="absolute top-4 right-4 text-white/30" />
                        <h3 className="feature-title">Global Support</h3>
                        <p className="feature-desc">Seamlessly import local M3U8 files and remote streams with ease.</p>
                        <div className="feature-tag">Local & Remote</div>
                    </motion.div>

                    <motion.div
                        className="feature-card card-gray"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <ShieldCheck className="absolute top-4 right-4 text-white/30" />
                        <h3 className="feature-title">Privacy First</h3>
                        <p className="feature-desc">No tracking, no logs. Your playlists and viewing history stay on your device.</p>
                        <div className="feature-tag">100% Private</div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Hero
