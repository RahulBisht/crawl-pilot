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
                <div className="hero-grid-vertical">
                    {/* Content Section */}
                    <motion.div
                        className="text-center max-w-3xl mx-auto mb-16 pt-24"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="pill-badge mx-auto">
                            <ShieldCheck size={14} fill="currentColor" />
                            Premium & Private IPTV Experience
                        </div>

                        <h1 className="hero-title">
                            The Evolution of <br />
                            <span className="text-highlight">Browser Streaming</span>
                        </h1>

                        <p className="hero-description mx-auto">
                            Experience IPTV like never before with StreamFlix. A high-performance player built for speed, advanced playlist management, and local playback—crafted with a premium Indigo design that keeps your privacy first.
                        </p>

                        <div className="flex gap-4 justify-center">
                            <button className="btn-primary-red">
                                Download StreamFlix
                            </button>
                            <button
                                onClick={onReadPrivacy}
                                className="btn-secondary"
                            >
                                Privacy Policy
                            </button>
                        </div>
                    </motion.div>

                    {/* App Screenshot Section */}
                    <motion.div
                        className="hero-desktop-container"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="browser-frame">
                            <div className="browser-header">
                                <div className="browser-dots">
                                    <div className="dot" style={{ background: '#ff5f56' }} />
                                    <div className="dot" style={{ background: '#ffbd2e' }} />
                                    <div className="dot" style={{ background: '#27c93f' }} />
                                </div>
                                <div className="browser-address">StreamFlix Dashboard</div>
                            </div>
                            <img
                                src="assets/dashboard_preview.png"
                                alt="StreamFlix Dashboard Preview"
                                className="hero-screenshot"
                            />
                        </div>
                        <div className="screenshot-disclaimer mt-8 text-center max-w-xl mx-auto rounded-lg border border-white/5 bg-[#0f172a]/50 backdrop-blur-sm">
                            * Interface shown for visual demonstration. StreamFlix does not provide any media content. Users must provide their own playlists.
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
