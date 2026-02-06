import React, { useState } from 'react'
import Hero from './components/Hero'
import PrivacyPolicy from './components/PrivacyPolicy'
import Guides from './components/Guides'
import { Play, Shield, BookOpen } from 'lucide-react'

function App() {
    const [view, setView] = useState<'home' | 'privacy' | 'guides'>('home')

    return (
        <div className="bg-radial min-h-screen selection:bg-red-500/30">
            {/* App Style Banner Header */}
            <nav className="nav-netflix">
                <div
                    className="logo-text"
                    onClick={() => setView('home')}
                >
                    STREAMFLIX
                </div>

                <div className="flex gap-6 items-center">
                    <div
                        className={`cursor-pointer transition-colors ${view === 'home' ? 'text-[#ffffff]' : 'text-[#b3b3b3]'}`}
                        onClick={() => setView('home')}
                        title="Home"
                    >
                        <Play size={24} fill={view === 'home' ? 'white' : 'transparent'} />
                    </div>
                    <div
                        className={`cursor-pointer transition-colors ${view === 'guides' ? 'text-[#ffffff]' : 'text-[#b3b3b3]'}`}
                        onClick={() => setView('guides')}
                        title="Guides"
                    >
                        <BookOpen size={24} />
                    </div>
                    <div
                        className={`nav-profile-box cursor-pointer hover:opacity-80 transition-opacity`}
                        onClick={() => setView('privacy')}
                        title="Privacy Policy"
                    >
                        <Shield size={18} />
                    </div>
                </div>
            </nav>

            {/* Content */}
            <main>
                {view === 'home' && <Hero onReadPrivacy={() => setView('privacy')} />}
                {view === 'privacy' && <PrivacyPolicy />}
                {view === 'guides' && <Guides />}
            </main>

            {/* Footer */}
            <footer className="py-20 border-t border-white/5 mt-20">
                <div className="container flex flex-col items-center gap-8">
                    <div className="text-gray-600 text-sm font-medium">© 2026 StreamFlix Pro. Premium IPTV Solutions.</div>
                    <div className="flex gap-8 text-sm text-gray-400">
                        <button onClick={() => setView('home')} className="hover:text-red-600 border-none bg-transparent cursor-pointer transition-colors font-bold uppercase tracking-widest text-[10px]">Home</button>
                        <button onClick={() => setView('guides')} className="hover:text-red-600 border-none bg-transparent cursor-pointer transition-colors font-bold uppercase tracking-widest text-[10px]">User Guides</button>
                        <button onClick={() => setView('privacy')} className="hover:text-red-600 border-none bg-transparent cursor-pointer transition-colors font-bold uppercase tracking-widest text-[10px]">Privacy Policy</button>
                        <a href="mailto:support@streamflix.pro" className="hover:text-red-600 transition-colors no-underline font-bold uppercase tracking-widest text-[10px]">Support</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default App
