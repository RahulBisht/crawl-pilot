import React from 'react'
import { motion } from 'framer-motion'
import { Plus, Search, Settings, Tv, Calendar, Zap, LayoutGrid, Download } from 'lucide-react'

const Guides: React.FC = () => {
    const guideItems = [
        {
            title: "Installation Guide",
            desc: "Learn how to install StreamFlix on Chrome as an unpacked extension or via the Web Store.",
            icon: <Download size={32} />,
            color: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)", // Purple
            category: "Basics"
        },
        {
            title: "Adding Playlists",
            desc: "Setup your first IPTV playlist using M3U URLs, local files, or direct text input.",
            icon: <Plus size={32} />,
            color: "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)", // Blue
            category: "Configuration"
        },
        {
            title: "Interface Navigation",
            desc: "Navigate through channels, use the grid view, and switch between favorites seamlessly.",
            icon: <LayoutGrid size={32} />,
            color: "linear-gradient(135deg, #f43f5e 0%, #be123c 100%)", // Red
            category: "User Experience"
        },
        {
            title: "Video Settings",
            desc: "Adjust resolution, adaptive bitrate (ABR) logic, and aspect ratios for smooth playback.",
            icon: <Settings size={32} />,
            color: "linear-gradient(135deg, #f59e0b 0%, #b45309 100%)", // Amber
            category: "Performance"
        },
        {
            title: "Xtream & Stalker",
            desc: "Connect your professional IPTV subscriptions using Xtream Codes API or Stalker MAC portals.",
            icon: <Zap size={32} />,
            color: "linear-gradient(135deg, #10b981 0%, #047857 100%)", // Green
            category: "Pro Features"
        },
        {
            title: "EPG & Schedules",
            desc: "Access real-time Electronic Program Guides to plan your viewing and check channel schedules.",
            icon: <Calendar size={32} />,
            color: "linear-gradient(135deg, #14b8a6 0%, #0f766e 100%)", // Teal
            category: "Information"
        },
        {
            title: "Search & Filtering",
            desc: "Find any channel quickly with our deep-search indexing and category-based filtering system.",
            icon: <Search size={32} />,
            color: "linear-gradient(135deg, #d946ef 0%, #a21caf 100%)", // Pink
            category: "Navigation"
        },
        {
            title: "Internal Player",
            desc: "Comprehensive support for HLS, DASH, and MPEG-TS streams with our optimized ArtPlayer core.",
            icon: <Tv size={32} />,
            color: "linear-gradient(135deg, #6366f1 0%, #4338ca 100%)", // Indigo
            category: "Core"
        }
    ]

    return (
        <div className="bg-radial min-h-screen py-24">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="hero-title text-center mb-4">
                        Resource <span className="text-highlight">Guides</span>
                    </h1>
                    <p className="hero-description text-center mx-auto mb-16 text-lg">
                        Master every feature of StreamFlix with our comprehensive documentation and step-by-step tutorials.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {guideItems.map((guide, idx) => (
                        <motion.div
                            key={idx}
                            className="guide-card"
                            style={{ background: guide.color }}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ y: -8, transition: { duration: 0.2 } }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                        >
                            <div className="guide-icon-box">
                                {guide.icon}
                            </div>
                            <h3 className="guide-card-title">{guide.title}</h3>
                            <p className="guide-card-desc">{guide.desc}</p>
                            <div className="guide-card-footer">
                                <span className="guide-card-tag">{guide.category}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="guide-contact-box mt-24">
                    <h2 className="guide-contact-title">Need more help?</h2>
                    <p className="guide-contact-desc">Our support team is here for any technical questions or feature inquiries.</p>
                    <a href="mailto:support@streamflix.pro" className="btn-primary-red no-underline">
                        Contact Support
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Guides
