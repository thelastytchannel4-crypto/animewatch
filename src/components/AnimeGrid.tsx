"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Play, Info } from 'lucide-react';
import { Anime } from '@/hooks/useAnimeData';

interface AnimeGridProps {
  animeList: Anime[];
  onAction: () => void;
  title: string;
}

const AnimeGrid = ({ animeList, onAction, title }: AnimeGridProps) => {
  return (
    <section className="py-16">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl font-black flex items-center gap-3">
          <span className="w-2 h-10 bg-[#4ECDC4] rounded-full"></span>
          {title}
        </h2>
        <button onClick={onAction} className="text-sm font-black uppercase tracking-widest text-[#4ECDC4] hover:text-[#4ECDC4]/80 transition-colors">
          View All
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
        {animeList.map((anime, index) => (
          <motion.div
            key={anime.mal_id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
            onClick={onAction}
          >
            <div className="relative aspect-[2/3] rounded-2xl overflow-hidden mb-4 shadow-xl shadow-black/20 border border-white/5">
              <img 
                src={anime.images.webp.large_image_url} 
                alt={anime.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <div className="flex gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#FF6B6B] flex items-center justify-center shadow-lg shadow-[#FF6B6B]/40">
                    <Play size={14} fill="white" className="ml-0.5" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <Info size={14} className="text-white" />
                  </div>
                </div>
              </div>
              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 border border-white/10">
                <Star size={12} className="text-[#FFD93D]" fill="#FFD93D" />
                <span className="text-[10px] font-black text-white">{anime.score}</span>
              </div>
            </div>
            <h3 className="font-bold text-sm line-clamp-2 group-hover:text-[#FF6B6B] transition-colors mb-1">
              {anime.title}
            </h3>
            <div className="flex flex-wrap gap-1">
              {anime.genres.slice(0, 2).map(g => (
                <span key={g.name} className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">
                  {g.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AnimeGrid;