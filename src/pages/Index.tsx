"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Zap, 
  Globe, 
  Smartphone, 
  ShieldCheck, 
  ChevronRight,
  Tv
} from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';
import TrendingAnime from '@/components/TrendingAnime';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';

const REDIRECT_URL = "https://animedekho.app";
const AUTO_REDIRECT_SECONDS = 15;

const Index = () => {
  const [timeLeft, setTimeLeft] = useState(AUTO_REDIRECT_SECONDS);
  const [isRedirecting, setIsRedirecting] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) {
      handleRedirect();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleRedirect = () => {
    setIsRedirecting(true);
    window.location.href = REDIRECT_URL;
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-slate-50 selection:bg-[#FF6B6B]/30">
      <SEO 
        title="AnimeDekho - Watch Free Anime Online | Stream HD Anime" 
        description="Stream thousands of anime episodes free on AnimeDekho. Watch latest anime with HD quality, subtitles, and dubs."
      />
      
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex items-center justify-between border-b border-white/5 sticky top-0 bg-[#0a0a0c]/80 backdrop-blur-xl z-40">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-[#FF6B6B] to-[#7B68EE] rounded-xl flex items-center justify-center shadow-lg shadow-[#FF6B6B]/20">
            <Tv className="text-white" size={22} />
          </div>
          <span className="text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            AnimeDekho
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <div className="text-xs text-muted-foreground bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
            Redirecting in <span className="text-[#4ECDC4] font-mono font-bold">{timeLeft}s</span>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className="rounded-full border-white/10 hover:bg-white/5"
            onClick={handleRedirect}
          >
            Skip <ChevronRight size={14} className="ml-1" />
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 pb-20">
        {/* Hero Section */}
        <section className="py-12 md:py-24 text-center relative overflow-hidden rounded-[3rem] mt-8">
          {/* Hero Background Image */}
          <div className="absolute inset-0 -z-10">
            <img 
              src="https://images.unsplash.com/photo-1541562232579-512a21360020?q=80&w=2000&auto=format&fit=crop" 
              className="w-full h-full object-cover opacity-20 grayscale"
              alt="Background"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0c] via-transparent to-[#0a0a0c]" />
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF6B6B]/10 blur-[150px] rounded-full -z-10" />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 px-4"
          >
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4ECDC4] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#4ECDC4]"></span>
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">Live Streaming Now</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tight leading-[1]">
              Watch Your Favorite <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B6B] via-[#7B68EE] to-[#4ECDC4]">
                Anime Free
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
              The ultimate destination for high-quality anime streaming. <br className="hidden md:block" />
              No ads during playback, just pure entertainment.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button 
                size="lg" 
                className="bg-[#FF6B6B] hover:bg-[#ff5252] text-white px-12 py-8 text-xl font-black rounded-2xl shadow-2xl shadow-[#FF6B6B]/30 group transition-all hover:scale-105 active:scale-95"
                onClick={handleRedirect}
              >
                {isRedirecting ? "Redirecting..." : "START WATCHING NOW"} 
                <Play size={24} className="ml-3 group-hover:scale-110 transition-transform" fill="white" />
              </Button>
              
              <div className="flex flex-col items-center sm:items-start">
                <div className="flex -space-x-3 mb-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-[#0a0a0c] bg-slate-800 overflow-hidden">
                      <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="User" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-[#0a0a0c] bg-[#7B68EE] flex items-center justify-center text-[10px] font-bold">
                    +10k
                  </div>
                </div>
                <p className="text-xs text-slate-500 font-medium">Join 100,000+ active viewers</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Trending Section */}
        <div className="max-w-7xl mx-auto">
          <TrendingAnime onAction={handleRedirect} />
        </div>

        {/* Features Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto py-12">
          <FeatureCard 
            icon={Zap}
            title="Latest Episodes"
            description="Huge anime library updated daily with the newest releases from Japan."
            color="#FF6B6B"
            delay={0.1}
          />
          <FeatureCard 
            icon={Play}
            title="HD Streaming"
            description="Crystal clear quality with multiple server options for smooth playback."
            color="#4ECDC4"
            delay={0.2}
          />
          <FeatureCard 
            icon={Globe}
            title="Multi-Language"
            description="Watch with high-quality subtitles or professional English dubs."
            color="#7B68EE"
            delay={0.3}
          />
        </section>

        {/* Secondary Features */}
        <section className="py-12 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#4ECDC4]/5 blur-[80px] rounded-full" />
            
            <div className="flex-1 relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">Ready to start your <br /> anime journey?</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Access our complete collection of action, romance, fantasy, and slice-of-life anime instantly. No registration required, just click and watch.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3 text-sm font-bold text-slate-300">
                  <div className="w-8 h-8 rounded-lg bg-[#4ECDC4]/20 flex items-center justify-center">
                    <Smartphone size={18} className="text-[#4ECDC4]" />
                  </div>
                  Mobile Optimized
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-slate-300">
                  <div className="w-8 h-8 rounded-lg bg-[#FF6B6B]/20 flex items-center justify-center">
                    <ShieldCheck size={18} className="text-[#FF6B6B]" />
                  </div>
                  Safe & Secure
                </div>
              </div>
            </div>
            <Button 
              variant="secondary" 
              size="lg" 
              className="rounded-2xl px-12 py-8 text-xl font-black bg-white text-black hover:bg-slate-200 transition-all shadow-xl"
              onClick={handleRedirect}
            >
              ENTER NOW
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-20 bg-black/60 backdrop-blur-xl">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-8 h-8 bg-gradient-to-br from-[#FF6B6B] to-[#7B68EE] rounded-lg flex items-center justify-center">
              <Tv className="text-white" size={18} />
            </div>
            <span className="text-xl font-black tracking-tighter">AnimeDekho</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            AnimeDekho is a community-driven platform. We do not store any files on our server. We only link to media which is hosted on 3rd party services.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-12">
            <a href="#" className="hover:text-[#FF6B6B] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#4ECDC4] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#7B68EE] transition-colors">DMCA</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <div className="h-px w-24 bg-white/10 mx-auto mb-8" />
          <p className="text-[10px] text-muted-foreground/30 uppercase tracking-[0.3em] mb-4">
            &copy; {new Date().getFullYear()} AnimeDekho Global
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
                  <Play size={20} fill="white" />
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