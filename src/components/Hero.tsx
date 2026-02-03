import React from 'react'
import { Play, Shield, Database, Zap, Plus, MoreHorizontal, Globe, Clock, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'

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
                            Premium & Private Player
                        </div>

                        <h1 className="hero-title">
                            The Ultimate <br />
                            <span className="text-highlight">IPTV Experience</span>
                        </h1>

                        <p className="hero-description">
                            Elevate your viewing with StreamFlix. A high-performance IPTV player built for speed, advanced playlist management, and local playback support—all while keeping your data strictly private.
                        </p>

                        <div className="flex gap-4">
                            <button className="btn-primary-red">
                                Get Started
                            </button>
                            <button
                                onClick={onReadPrivacy}
                                className="btn-secondary"
                            >
                                Privacy Policy
                            </button>
                        </div>
                    </motion.div>

                    {/* Right Side: App Screenshot */}
                    <motion.div
                        className="hero-screenshot-container"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <img
                            src="assets/app_screenshot.png"
                            alt="StreamFlix Premium Interface"
                            className="hero-screenshot"
                        />
                        <div className="screenshot-disclaimer">
                            * Interface shown for visual enhancement. StreamFlix does not provide or include any media or content. Users must provide their own content in adherence with copyright laws.
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
