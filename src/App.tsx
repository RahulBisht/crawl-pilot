import React, { useState } from 'react'
import Hero from './components/Hero'
import PrivacyPolicy from './components/PrivacyPolicy'
import { Rocket, Shield } from 'lucide-react'

function App() {
    const [view, setView] = useState<'home' | 'privacy'>('home')

    return (
        <div className="min-h-screen">
            {/* Navigation */}
            <nav className="nav-fixed py-6 px-10 flex justify-between items-center border-none glass-morphism">
                <div
                    className="text-2xl font-bold cursor-pointer flex items-center gap-2"
                    onClick={() => setView('home')}
                >
                    <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
                        <Rocket className="text-white" size={24} />
                    </div>
                    <span className="gradient-text">
                        Stream<span className="text-indigo-500">Flix</span>
                    </span>
                </div>
                <div className="flex gap-8 items-center font-medium">
                    <button
                        onClick={() => setView('home')}
                        className={`hover:text-indigo-400 transition-colors ${view === 'home' ? 'text-indigo-400' : 'text-slate-300'}`}
                    >
                        Home
                    </button>
                    <button
                        onClick={() => setView('privacy')}
                        className={`flex items-center gap-2 hover:text-indigo-400 transition-colors ${view === 'privacy' ? 'text-indigo-400' : 'text-slate-300'}`}
                    >
                        <Shield size={18} />
                        Privacy
                    </button>
                </div>
            </nav>

            {/* Content */}
            <main className="pt-24">
                {view === 'home' ? <Hero onReadPrivacy={() => setView('privacy')} /> : <PrivacyPolicy />}
            </main>

            {/* Footer */}
            <footer className="py-12 border-t border-slate-800/50 mt-20">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-2">
                        <Rocket className="text-indigo-500" size={20} />
                        <span className="font-semibold text-slate-400">© 2026 CrawlPilot</span>
                    </div>
                    <div className="flex gap-6 text-sm text-slate-500">
                        <button onClick={() => setView('home')} className="hover:text-white transition-colors">Home</button>
                        <button onClick={() => setView('privacy')} className="hover:text-white transition-colors">Privacy Policy</button>
                        <a href="mailto:crawlpilot6365@gmail.com" className="hover:text-white transition-colors">Support</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default App
