"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Play, Calendar, Info } from 'lucide-react';
import { Anime } from '@/hooks/useAnimeData';
import { Badge } from '@/components/ui/badge';

interface NewReleasesProps {
  animeList: Anime[];
  onAction: () => void;
}

const NewReleases = ({ animeList, onAction }: NewReleasesProps) => {
  return (
    <section className="py-16">
      <div className="flex items-center justify-between mb-10">
        <div className="flex flex-col gap-1">
          <h2 className="text-3xl font-black flex items-center gap-3">
            <span className="w-2 h-10 bg-[#FF6B6B] rounded-full"></span>
            🆕 New & Trending This Season
          </h2>
          <p className="text-slate-500 text-sm font-medium ml-5">Freshly aired episodes from the current season</p>
        </div>
        <button onClick={onAction} className="text-sm font-black uppercase tracking-widest text-[#FF6B6B] hover:text-[#FF6B6B]/80 transition-colors">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {animeList.map((anime, index) => (
          <motion.div
            key={anime.mal_id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            viewport={{ once: true }}
            className="group cursor-pointer bg-white/5 rounded-[2rem] overflow-hidden border border-white/5 hover:border-[#FF6B6B]/30 transition-all duration-500"
            onClick={onAction}
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img 
                src={anime.images.webp.large_image_url || anime.images.jpg.large_image_url} 
                alt={anime.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1578632292335-df3abbb0d586?q=80&w=1000&auto=format&fit=crop';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
              
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <Badge className="bg-[#FF6B6B] text-white border-none font-black text-[10px] px-2 py-0.5 rounded-md">NEW</Badge>
                {anime.status === "Currently Airing" && (
                  <Badge className="bg-[#4ECDC4] text-white border-none font-black text-[10px] px-2 py-0.5 rounded-md">AIRING</Badge>
                )}
              </div>

              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10">
                  <Star size={12} className="text-[#FFD93D]" fill="#FFD93D" />
                  <span className="text-[10px] font-black text-white">{anime.score || 'N/A'}</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#FF6B6B] flex items-center justify-center shadow-lg shadow-[#FF6B6B]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Play size={18} fill="white" className="ml-0.5" />
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-black text-lg line-clamp-1 group-hover:text-[#FF6B6B] transition-colors mb-2">
                {anime.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {anime.genres.slice(0, 3).map(g => (
                  <span key={g.name} className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter bg-white/5 px-2 py-0.5 rounded">
                    {g.name}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-slate-500">
                <div className="flex items-center gap-1.5">
                  <Calendar size={12} />
                  <span>{new Date(anime.aired.from).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <span>{anime.episodes || '?'} EPS</span>
              </div>

              <div className="mt-4 pt-4 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed italic">
                  {anime.synopsis}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default NewReleases;