import React, { useState } from 'react'
import Hero from './components/Hero'
import PrivacyPolicy from './components/PrivacyPolicy'
import { Rocket, Shield } from 'lucide-react'

function App() {
    const [view, setView] = useState<'home' | 'privacy'>('home')

    return (
        <div className="bg-radial min-h-screen selection:bg-blue-500/30">
            {/* Navigation */}
            <nav className="nav-netflix">
                <div
                    className="logo-text"
                    onClick={() => setView('home')}
                >
                    STREAMFLIX
                </div>
                <div className="flex gap-8 items-center font-medium">
                    <button
                        onClick={() => setView('home')}
                        className={`hover:text-white transition-colors border-none bg-transparent cursor-pointer font-bold ${view === 'home' ? 'text-white border-b-2 border-blue-500 pb-1' : 'text-gray-400'}`}
                    >
                        Home
                    </button>
                    <button
                        onClick={() => setView('privacy')}
                        className={`flex items-center gap-2 hover:text-white transition-colors border-none bg-transparent cursor-pointer font-bold ${view === 'privacy' ? 'text-white border-b-2 border-blue-500 pb-1' : 'text-gray-400'}`}
                    >
                        <Shield size={18} />
                        Privacy
                    </button>
                </div>
            </nav>

            {/* Content */}
            <main>
                {view === 'home' ? <Hero onReadPrivacy={() => setView('privacy')} /> : <PrivacyPolicy />}
            </main>

            {/* Footer */}
            <footer className="py-20 border-t border-gray-800/30 mt-20">
                <div className="container flex flex-col items-center gap-8">
                    <div className="text-gray-500 text-sm">© 2026 CrawlPilot. Designed for StreamFlix Extension.</div>
                    <div className="flex gap-8 text-sm text-gray-600">
                        <button onClick={() => setView('home')} className="hover:text-white border-none bg-transparent cursor-pointer transition-colors">Home</button>
                        <button onClick={() => setView('privacy')} className="hover:text-white border-none bg-transparent cursor-pointer transition-colors">Privacy Policy</button>
                        <a href="mailto:crawlpilot6365@gmail.com" className="hover:text-white transition-colors no-underline">Support</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default App
