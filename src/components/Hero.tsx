import React from 'react'
import { Play, Shield, Database, Zap, Plus, MoreHorizontal } from 'lucide-react'
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
                            Pro IPTV Experience
                        </div>

                        <h1 className="hero-title">
                            The Ultimate <br />
                            <span className="text-highlight">Streaming Player</span>
                        </h1>

                        <p className="hero-description">
                            Experience entertainment like never before with StreamFlix. High-performance playback, advanced playlist management, and total privacy in one sleek package.
                        </p>

                        <div className="flex gap-4">
                            <button className="btn-primary-red">
                                <Play size={20} fill="currentColor" /> Play Now
                            </button>
                            <button
                                onClick={onReadPrivacy}
                                className="btn-secondary"
                            >
                                More Info
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
                            alt="StreamFlix App Header"
                            className="hero-screenshot"
                        />
                    </motion.div>
                </div>

                {/* Features Grid modeled after App Playlist Cards */}
                <div className="features-grid">
                    <motion.div
                        className="feature-card card-red"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <MoreHorizontal className="absolute top-4 right-4 text-white/50" />
                        <h3 className="feature-title">Live TV</h3>
                        <p className="feature-desc">14872+ Channels with zero lag playback.</p>
                        <div className="feature-tag">14872 Ch</div>
                    </motion.div>

                    <motion.div
                        className="feature-card card-yellow"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <MoreHorizontal className="absolute top-4 right-4 text-white/50" />
                        <h3 className="feature-title">Movies</h3>
                        <p className="feature-desc">Import and stream your favorite playlists.</p>
                        <div className="feature-tag">10941 Ch</div>
                    </motion.div>

                    <motion.div
                        className="feature-card card-gray"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <MoreHorizontal className="absolute top-4 right-4 text-white/50" />
                        <h3 className="feature-title">Secure</h3>
                        <p className="feature-desc">Encrypted playback and local data storage.</p>
                        <div className="feature-tag">Privacy 100%</div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Hero
