import React from 'react'
import { motion } from 'framer-motion'
import { Play, Info, MoreVertical, Plus } from 'lucide-react'

const MobileMockup: React.FC = () => {
    const playlists = [
        { name: 'Sports', count: '14872 Ch', color: 'linear-gradient(135deg, #6366f1 0%, #4338ca 100%)' },
        { name: 'Movies', count: '10941 Ch', color: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)' },
        { name: 'News', count: '1887 Ch', color: 'linear-gradient(135deg, #10b981 0%, #047857 100%)' },
        { name: 'Music', count: '13 Ch', color: 'linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)' },
    ]

    return (
        <div className="relative mx-auto w-[280px] h-[580px] bg-[#0f172a] rounded-[40px] border-[8px] border-[#1e293b] shadow-2xl overflow-hidden font-sans">
            {/* Camera Hole */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-6 h-6 bg-[#1e293b] rounded-full z-20" />

            {/* Header */}
            <div className="pt-10 px-4 flex justify-between items-center mb-6">
                <span className="text-white font-black text-sm tracking-tighter" style={{
                    background: 'linear-gradient(135deg, #fff 0%, #cbd5e1 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                }}>STREAMFLIX</span>
                <div className="flex gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#1e293b] flex items-center justify-center">
                        <Play size={10} fill="white" />
                    </div>
                    <div className="w-6 h-6 rounded-md bg-[#6366f1] flex items-center justify-center">
                        <span className="text-[8px]">👤</span>
                    </div>
                </div>
            </div>

            {/* Featured Section */}
            <div className="px-4 mb-6">
                <h1 className="text-3xl font-bold text-white mb-2">Sports</h1>
                <p className="text-[10px] text-slate-400 mb-4">14872 Channels • Recently Added • Trending</p>
                <div className="flex gap-2">
                    <button className="flex-1 bg-white text-black text-[12px] font-bold py-2 rounded-md flex items-center justify-center gap-1">
                        <div className="w-3 h-3 bg-black rounded-full flex items-center justify-center">
                            <Play size={8} fill="white" />
                        </div>
                        Play
                    </button>
                    <button className="flex-1 bg-[#1e293b] text-white text-[12px] font-bold py-2 rounded-md flex items-center justify-center gap-1">
                        <Info size={12} />
                        More Info
                    </button>
                </div>
            </div>

            {/* Playlists */}
            <div className="px-4">
                <h2 className="text-white font-bold text-sm mb-4">My Playlists</h2>
                <div className="grid grid-cols-2 gap-3">
                    {playlists.map((pl, i) => (
                        <div key={i} className="aspect-[4/3] rounded-lg p-3 relative flex flex-col justify-center items-center text-center" style={{ background: pl.color }}>
                            <div className="absolute top-1 right-1">
                                <MoreVertical size={12} className="text-white/50" />
                            </div>
                            <span className="text-white text-xs font-bold">{pl.name}</span>
                            <div className="absolute bottom-1 right-1 bg-black/30 px-1 py-0.5 rounded-[2px]">
                                <span className="text-[7px] text-white font-bold uppercase">{pl.count}</span>
                            </div>
                        </div>
                    ))}

                    {/* Add Button */}
                    <div className="aspect-[4/3] rounded-lg border border-white/10 bg-white/5 flex flex-col items-center justify-center gap-1">
                        <div className="w-8 h-8 rounded-full bg-[#6366f1] flex items-center justify-center shadow-lg shadow-indigo-500/20">
                            <Plus size={16} className="text-white" />
                        </div>
                        <span className="text-[9px] text-slate-400 font-bold uppercase">Add</span>
                    </div>
                </div>
            </div>

            {/* Navigation Bar (Mock) */}
            <div className="absolute bottom-0 left-0 right-0 h-10 bg-[#0f172a]/80 backdrop-blur-md flex items-center justify-center">
                <div className="w-20 h-1 bg-slate-700 rounded-full" />
            </div>
        </div>
    )
}

export default MobileMockup
