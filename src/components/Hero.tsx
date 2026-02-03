import React from 'react'
import { Play, Shield, Database, Zap, ChevronRight } from 'lucide-react'
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
                            <Zap size={14} fill="currentColor" />
                            Next-Gen IPTV Player
                        </div>

                        <h1 className="hero-title">
                            The Ultimate <br />
                            <span className="text-gradient">Streaming Experience</span>
                        </h1>

                        <p className="hero-description">
                            Elevate your entertainment with StreamFlix. A premium, interactive IPTV player designed for performance, security, and a stunning interface.
                        </p>

                        <div className="flex gap-4">
                            <button className="btn-primary-blue">
                                Get Started <ChevronRight size={20} />
                            </button>
                            <button
                                onClick={onReadPrivacy}
                                className="btn-outline"
                            >
                                <Shield size={20} /> Privacy Policy
                            </button>
                        </div>
                    </motion.div>

                    {/* Right Side: App Screenshot */}
                    <motion.div
                        className="hero-screenshot-container"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <img
                            src="assets/app_screenshot.png"
                            alt="StreamFlix Dashboard"
                            className="hero-screenshot"
                        />
                    </motion.div>
                </div>

                {/* Features Grid */}
                <div className="features-grid">
                    <motion.div
                        className="feature-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="feature-icon-wrapper">
                            <Play size={24} fill="currentColor" />
                        </div>
                        <h3 className="feature-title">Fast Playback</h3>
                        <p className="feature-desc">Zero lag streaming for all channels, optimized for high-speed delivery.</p>
                    </motion.div>

                    <motion.div
                        className="feature-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="feature-icon-wrapper">
                            <Database size={24} />
                        </div>
                        <h3 className="feature-title">M3U Support</h3>
                        <p className="feature-desc">Easily import your own playlists and manage your favorites effortlessly.</p>
                    </motion.div>

                    <motion.div
                        className="feature-card"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="feature-icon-wrapper">
                            <Shield size={24} />
                        </div>
                        <h3 className="feature-title">Private & Secure</h3>
                        <p className="feature-desc">Your data stays on your device. We prioritize your privacy above all.</p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Hero
