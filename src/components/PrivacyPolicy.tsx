import React from 'react'
import { motion } from 'framer-motion'

const PrivacyPolicy: React.FC = () => {
    return (
        <motion.div
            className="pp-container"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <header className="pp-section">
                <h1 className="pp-title">Privacy Policy</h1>
                <div className="pp-content">
                    <p className="pp-point">Last Updated: February 3, 2026</p>
                    <p className="pp-point">
                        Your privacy is critically important to us. This Privacy Policy describes how SteamFlix ("we," "us," or "our") handles information when you use our IPTV Player extension.
                    </p>
                </div>
            </header>

            <section className="pp-section">
                <h2 className="pp-heading-2">1. Local-Only Processing</h2>
                <div className="pp-content">
                    <p className="pp-point">
                        StreamFlix is designed as a **local-processing** tool. This means:
                    </p>
                    <ul className="pp-list">
                        <li className="pp-list-item">Your playlists and stream URLs are stored locally on your device.</li>
                        <li className="pp-list-item">We do not operate central servers to store your personal streaming data.</li>
                        <li className="pp-list-item">All decoding and playback happen directly within your browser environment.</li>
                    </ul>
                </div>
            </section>

            <section className="pp-section">
                <h2 className="pp-heading-2">2. Information We Do Not Collect</h2>
                <div className="pp-content">
                    <p className="pp-point">
                        Broadly speaking, we do not collect personal information. Specifically:
                    </p>
                    <ul className="pp-list">
                        <li className="pp-list-item">**No Tracking**: We do not track your viewing history or channel preferences.</li>
                        <li className="pp-list-item">**No Accounts**: You are not required to create an account to use the basic player features.</li>
                        <li className="pp-list-item">**No Cookies**: We do not use tracking cookies to identify you across the web.</li>
                    </ul>
                </div>
            </section>

            <section className="pp-section">
                <h2 className="pp-heading-2">3. Data Security</h2>
                <div className="pp-content">
                    <p className="pp-point">
                        Because your data remains on your device, its security is as strong as your device's security. We recommend:
                    </p>
                    <ul className="pp-list">
                        <li className="pp-list-item">Using secure, private playlists from trusted sources.</li>
                        <li className="pp-list-item">Keeping your browser updated to the latest security standards.</li>
                    </ul>
                </div>
            </section>

            <section className="pp-section">
                <h2 className="pp-heading-2">4. Third-Party Content</h2>
                <div className="pp-content">
                    <p className="pp-point">
                        Please note that the streaming content you choose to load via M3U8 or other formats is hosted by third parties. We are not responsible for the privacy practices of external content providers.
                    </p>
                </div>
            </section>

            <section className="pp-section border-none">
                <h2 className="pp-heading-2">5. Contact Us</h2>
                <div className="pp-content">
                    <p className="pp-point">
                        If you have any questions about this Privacy Policy, please contact us at:
                    </p>
                    <p className="pp-point font-bold text-white">
                        crawlpilot6365@gmail.com
                    </p>
                </div>
            </section>
        </motion.div>
    )
}

export default PrivacyPolicy
