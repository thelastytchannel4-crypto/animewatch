"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Tv, 
  Clock, 
  ChevronRight, 
  ExternalLink, 
  Zap, 
  ShieldCheck, 
  Smartphone,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import SEO from '@/components/SEO';
import AnimeCarousel from '@/components/AnimeCarousel';
import AnimeGrid from '@/components/AnimeGrid';
import NewReleases from '@/components/NewReleases';
import { useAnimeData, useNewReleases } from '@/hooks/useAnimeData';

const REDIRECT_URL = "https://animedekho.app";
const AUTO_REDIRECT_SECONDS = 20;

const Index = () => {
  const [timeLeft, setTimeLeft] = useState(AUTO_REDIRECT_SECONDS);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const { data: animeList, isLoading: isPopularLoading } = useAnimeData();
  const { data: newReleases, isLoading: isNewLoading } = useNewReleases();

  useEffect(() => {
    if (timeLeft <= 0) {
      handleRedirect();
      return;
    }
    const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleRedirect = () => {
    setIsRedirecting(true);
    window.location.href = REDIRECT_URL;
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-slate-50 selection:bg-[#FF6B6B]/30 font-sans">
      <SEO 
        title="Free Anime - Watch Free Anime Online | Stream HD Anime" 
        description="Stream thousands of anime episodes free on Free Anime. Watch latest anime with HD quality, subtitles, and dubs."
      />
      
      {/* Redirect Notice Banner */}
      <div className="bg-gradient-to-r from-[#FF6B6B] to-[#7B68EE] text-white py-3 px-4 text-center relative z-50">
        <div className="container mx-auto flex items-center justify-center gap-3">
          <Clock size={18} className="animate-pulse" />
          <p className="text-sm md:text-base font-black tracking-tight">
            Redirecting to <span className="underline decoration-2 underline-offset-4">FreeAnime.app</span> in <span className="bg-white text-[#FF6B6B] px-2 py-0.5 rounded-md font-mono">{timeLeft}s</span>
          </p>
          <button 
            onClick={handleRedirect}
            className="hidden md:flex items-center gap-1 text-xs font-black uppercase tracking-widest bg-black/20 hover:bg-black/40 px-3 py-1 rounded-full transition-colors ml-4"
          >
            Skip Now <ChevronRight size={14} />
          </button>
        </div>
      </div>

      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex items-center justify-between border-b border-white/5 sticky top-0 bg-[#0a0a0c]/80 backdrop-blur-xl z-40">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-[#FF6B6B] to-[#7B68EE] rounded-xl flex items-center justify-center shadow-lg shadow-[#FF6B6B]/20">
            <Tv className="text-white" size={22} />
          </div>
          <span className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            Free Anime
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <Button 
            variant="outline" 
            size="sm" 
            className="rounded-full border-white/10 hover:bg-white/5 text-xs font-bold uppercase tracking-widest"
            onClick={handleRedirect}
          >
            Go to Main Site <ExternalLink size={14} className="ml-2" />
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 pb-20">
        {/* Hero Carousel Section */}
        <section className="mt-8 mb-12">
          {isPopularLoading ? (
            <div className="h-[500px] md:h-[700px] w-full bg-white/5 animate-pulse rounded-[3rem] flex items-center justify-center">
              <Tv size={48} className="text-white/10 animate-bounce" />
            </div>
          ) : (
            <AnimeCarousel animeList={animeList || []} onAction={handleRedirect} />
          )}
        </section>

        {/* New Releases Section */}
        {isNewLoading ? (
          <div className="py-16">
            <div className="h-10 w-64 bg-white/5 animate-pulse rounded-lg mb-10" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="aspect-[16/10] bg-white/5 animate-pulse rounded-[2rem]" />
              ))}
            </div>
          </div>
        ) : (
          <NewReleases animeList={newReleases || []} onAction={handleRedirect} />
        )}

        {/* Popular Anime Grid */}
        {isPopularLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="aspect-[2/3] bg-white/5 animate-pulse rounded-2xl" />
            ))}
          </div>
        ) : (
          <AnimeGrid 
            title="All-Time Popular" 
            animeList={animeList || []} 
            onAction={handleRedirect} 
          />
        )}

        {/* Features Section */}
        <div className="flex flex-col md:flex-row gap-12 justify-center items-center my-24 py-12 border-y border-white/5">
          <div className="max-w-md text-center md:text-left">
            <h3 className="text-3xl font-black mb-6">Why choose Free Anime?</h3>
            <ul className="space-y-6">
              <li className="flex items-center gap-4 text-slate-300 font-medium text-lg">
                <div className="w-10 h-10 rounded-full bg-[#FF6B6B]/20 flex items-center justify-center shrink-0">
                  <Zap size={20} className="text-[#FF6B6B]" />
                </div>
                Ultra-fast streaming servers
              </li>
              <li className="flex items-center gap-4 text-slate-300 font-medium text-lg">
                <div className="w-10 h-10 rounded-full bg-[#4ECDC4]/20 flex items-center justify-center shrink-0">
                  <ShieldCheck size={20} className="text-[#4ECDC4]" />
                </div>
                No intrusive pop-up ads
              </li>
              <li className="flex items-center gap-4 text-slate-300 font-medium text-lg">
                <div className="w-10 h-10 rounded-full bg-[#7B68EE]/20 flex items-center justify-center shrink-0">
                  <Smartphone size={20} className="text-[#7B68EE]" />
                </div>
                Perfect for mobile viewing
              </li>
            </ul>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#FF6B6B] to-[#7B68EE] rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
            <img 
              src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=1000&auto=format&fit=crop" 
              className="relative w-full max-w-md rounded-[2rem] shadow-2xl border border-white/10"
              alt="Anime Experience"
            />
          </div>
        </div>

        {/* Final CTA */}
        <section className="py-20 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-br from-[#FF6B6B] to-[#7B68EE] rounded-[3rem] p-12 md:p-24 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
            <h2 className="text-4xl md:text-7xl font-black mb-8 relative z-10">Ready to dive in?</h2>
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto font-medium relative z-10">
              Join thousands of fans and start streaming your favorite anime in HD today.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-slate-100 px-12 py-8 text-2xl font-black rounded-2xl shadow-2xl transition-all hover:scale-105 active:scale-95 relative z-10"
              onClick={handleRedirect}
            >
              {isRedirecting ? "REDIRECTING..." : "EXPLORE FULL COLLECTION"} <ArrowRight size={28} className="ml-3" />
            </Button>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-20 bg-black/60 backdrop-blur-xl">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-8 h-8 bg-gradient-to-br from-[#FF6B6B] to-[#7B68EE] rounded-lg flex items-center justify-center">
              <Tv className="text-white" size={18} />
            </div>
            <span className="text-xl font-black tracking-tighter">Free Anime</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            Free Anime is a community-driven platform. We do not store any files on our server. We only link to media which is hosted on 3rd party services.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-12">
            <a href="https://myanimelist.net/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Data: MyAnimeList</a>
            <a href="https://jikan.moe/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">API: Jikan</a>
            <a href="#" className="hover:text-white transition-colors">DMCA</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>

          <div className="h-px w-24 bg-white/10 mx-auto mb-8" />
          <p className="text-[10px] text-muted-foreground/30 uppercase tracking-[0.3em]">
            &copy; {new Date().getFullYear()} Free Anime Global &bull; Powered by Jikan API
          </p>
        </div>
      </footer>

      {/* Mobile Sticky Redirect Bar */}
      <AnimatePresence>
        {timeLeft > 0 && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 p-4 bg-black/90 backdrop-blur-xl border-t border-white/10 md:hidden z-50"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#FF6B6B] rounded-xl flex items-center justify-center">
                  <Tv size={20} className="text-white" />
                </div>
                <div className="text-xs">
                  <p className="text-slate-400 font-bold uppercase tracking-tighter">Redirecting in</p>
                  <p className="font-black text-[#4ECDC4] text-lg leading-none">{timeLeft}s</p>
                </div>
              </div>
              <Button 
                size="sm" 
                className="bg-[#FF6B6B] hover:bg-[#ff5252] text-white font-black rounded-xl px-6"
                onClick={handleRedirect}
              >
                CONTINUE
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;