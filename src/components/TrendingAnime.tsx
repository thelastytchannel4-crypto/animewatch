"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Play } from 'lucide-react';

const TRENDING_DATA = [
  { id: 1, title: "Solo Leveling", rating: "4.9", image: "https://images.unsplash.com/photo-1578632292335-df3abbb0d586?q=80&w=500&auto=format&fit=crop", color: "#4ECDC4" },
  { id: 2, title: "One Piece", rating: "5.0", image: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?q=80&w=500&auto=format&fit=crop", color: "#FF6B6B" },
  { id: 3, title: "Jujutsu Kaisen", rating: "4.8", image: "https://images.unsplash.com/photo-1613373123719-40d0a50f1b42?q=80&w=500&auto=format&fit=crop", color: "#7B68EE" },
  { id: 4, title: "Demon Slayer", rating: "4.9", image: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=500&auto=format&fit=crop", color: "#FFD93D" },
];

const TrendingAnime = ({ onAction }: { onAction: () => void }) => {
  return (
    <section className="py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold flex items-center gap-2">
          <span className="w-2 h-8 bg-[#FF6B6B] rounded-full"></span>
          Trending Now
        </h2>
        <button onClick={onAction} className="text-sm text-[#4ECDC4] hover:underline font-medium">View All</button>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {TRENDING_DATA.map((anime, index) => (
          <motion.div
            key={anime.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -5 }}
            className="relative group cursor-pointer rounded-xl overflow-hidden aspect-[3/4]"
            onClick={onAction}
          >
            <img 
              src={anime.image} 
              alt={anime.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
            
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <div className="flex items-center gap-1 text-[#FFD93D] text-xs mb-1">
                <Star size={12} fill="currentColor" />
                <span>{anime.rating}</span>
              </div>
              <h3 className="font-bold text-sm md:text-base line-clamp-1">{anime.title}</h3>
              <div className="mt-2 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                  <Play size={14} fill="white" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider">Watch Now</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TrendingAnime;