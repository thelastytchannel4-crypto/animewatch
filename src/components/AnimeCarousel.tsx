"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Anime } from '@/hooks/useAnimeData';

interface AnimeCarouselProps {
  animeList: Anime[];
  onAction: () => void;
}

const AnimeCarousel = ({ animeList, onAction }: AnimeCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const featured = animeList.slice(0, 5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featured.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featured.length]);

  if (featured.length === 0) return null;

  const current = featured[currentIndex];

  return (
    <div className="relative h-[500px] md:h-[700px] w-full overflow-hidden rounded-[2rem] md:rounded-[3rem] group cursor-pointer">
      <AnimatePresence mode="wait">
        <motion.div
          key={current.mal_id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
          onClick={onAction}
        >
          <img 
            src={current.trailer?.images?.maximum_image_url || current.images.webp.large_image_url} 
            alt={current.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent" />
          
          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20 max-w-4xl">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#FF6B6B] text-white text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">Featured</span>
                <div className="flex items-center gap-1 text-[#FFD93D]">
                  <Star size={14} fill="#FFD93D" />
                  <span className="text-sm font-bold">{current.score}</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-7xl font-black mb-6 leading-tight text-white">
                {current.title}
              </h1>
              <p className="text-slate-300 text-sm md:text-lg mb-8 line-clamp-3 max-w-2xl font-medium leading-relaxed">
                {current.synopsis}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-[#FF6B6B] hover:bg-[#ff5252] text-white px-8 py-6 text-lg font-black rounded-xl shadow-xl shadow-[#FF6B6B]/20"
                >
                  WATCH NOW <Play size={20} className="ml-2" fill="white" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white/10 bg-white/5 backdrop-blur-md text-white px-8 py-6 text-lg font-black rounded-xl hover:bg-white/10"
                >
                  DETAILS
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation - Stop propagation to prevent redirect when clicking arrows */}
      <div className="absolute bottom-10 right-10 flex gap-3 z-20">
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setCurrentIndex((prev) => (prev - 1 + featured.length) % featured.length);
          }}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            setCurrentIndex((prev) => (prev + 1) % featured.length);
          }}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Indicators - Stop propagation to prevent redirect when clicking dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {featured.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(i);
            }}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-8 bg-[#FF6B6B]' : 'w-2 bg-white/30'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimeCarousel;