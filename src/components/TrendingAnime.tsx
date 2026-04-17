"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Play } from 'lucide-react';

const TRENDING_DATA = [
  { 
    id: 1, 
    title: "Solo Leveling", 
    rating: "4.9", 
    image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx151807-m1M7u3S9Yv95.jpg", 
    color: "#4ECDC4" 
  },
  { 
    id: 2, 
    title: "One Piece", 
    rating: "5.0", 
    image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/nx21-Y9mS7uAs1Sps.jpg", 
    color: "#FF6B6B" 
  },
  { 
    id: 3, 
    title: "Jujutsu Kaisen", 
    rating: "4.8", 
    image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx113415-bbBWjS9PzZ1u.jpg", 
    color: "#7B68EE" 
  },
  { 
    id: 4, 
    title: "Demon Slayer", 
    rating: "4.9", 
    image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx101922-W9seL3nCS0Zq.jpg", 
    color: "#FFD93D" 
  },
  { 
    id: 5, 
    title: "Attack on Titan", 
    rating: "4.9", 
    image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx16498-73pe7m6Z2aY5.jpg", 
    color: "#A0522D" 
  },
  { 
    id: 6, 
    title: "Naruto Shippuden", 
    rating: "4.8", 
    image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx1735-v0i879yS2XvX.png", 
    color: "#FFA500" 
  },
  { 
    id: 7, 
    title: "Bleach: TYBW", 
    rating: "4.9", 
    image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx142329-999999999999.jpg", 
    color: "#4169E1" 
  },
  { 
    id: 8, 
    title: "Chainsaw Man", 
    rating: "4.7", 
    image: "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx127230-mY73uT9Yv95.jpg", 
    color: "#FF4500" 
  },
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
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-6">
        {TRENDING_DATA.map((anime, index) => (
          <motion.div
            key={anime.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -8 }}
            className="relative group cursor-pointer rounded-2xl overflow-hidden aspect-[2/3] shadow-2xl shadow-black/50"
            onClick={onAction}
          >
            <img 
              src={anime.image} 
              alt={anime.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
            
            <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 border border-white/10">
              <Star size={12} className="text-[#FFD93D]" fill="#FFD93D" />
              <span className="text-[10px] font-bold text-white">{anime.rating}</span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <h3 className="font-bold text-sm md:text-base line-clamp-1 mb-2 group-hover:text-[#FF6B6B] transition-colors">{anime.title}</h3>
              <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="w-8 h-8 rounded-full bg-[#FF6B6B] flex items-center justify-center shadow-lg shadow-[#FF6B6B]/40">
                  <Play size={14} fill="white" className="ml-0.5" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-white/80">Watch Now</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TrendingAnime;