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
  ExternalLink,
  Tv,
  Info
} from 'lucide-react';
import AdUnit from '@/components/AdUnit';
import FeatureCard from '@/components/FeatureCard';
import TrendingAnime from '@/components/TrendingAnime';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { MadeWithDyad } from '@/components/made-with-dyad';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const REDIRECT_URL = "https://animedekho.app";
const AUTO_REDIRECT_SECONDS = 15;

const Index = () => {
  const [timeLeft, setTimeLeft] = useState(AUTO_REDIRECT_SECONDS);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [showAdGuide, setShowAdGuide] = useState(false);

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
        {/* Top Banner Ad */}
        <div className="max-w-4xl mx-auto">
          <AdUnit slot="top-banner" format="horizontal" className="mt-8" />
        </div>

        {/* Hero Section */}
        <section className="py-12 md:py-20 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF6B6B]/10 blur-[120px] rounded-full -z-10" />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-7xl font-black mb-6 tracking-tight leading-[1.1]">
              Watch Thousands of <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF6B6B] via-[#7B68EE] to-[#4ECDC4]">
                Anime Episodes Free
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              Your Ultimate Anime Streaming Destination. Stream your favorite anime in HD with subtitles and dubs on any device.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                size="lg" 
                className="bg-[#FF6B6B] hover:bg-[#ff5252] text-white px-10 py-7 text-lg font-bold rounded-2xl shadow-xl shadow-[#FF6B6B]/20 group transition-all hover:scale-105"
                onClick={handleRedirect}
              >
                {isRedirecting ? "Redirecting..." : "Enter AnimeDekho"} 
                <ExternalLink size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <button 
                onClick={() => setShowAdGuide(!showAdGuide)}
                className="text-xs text-muted-foreground hover:text-white transition-colors flex items-center gap-1"
              >
                <Info size={12} /> AdSense Setup Guide
              </button>
            </div>
          </motion.div>
        </section>

        {/* AdSense Guide (Hidden by default) */}
        <AnimatePresence>
          {showAdGuide && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="max-w-2xl mx-auto mb-12 overflow-hidden"
            >
              <Alert className="bg-blue-500/10 border-blue-500/20 text-blue-200">
                <Info className="h-4 w-4" />
                <AlertTitle>How to add your AdSense code</AlertTitle>
                <AlertDescription className="text-xs space-y-2 mt-2">
                  <p>1. Open <code className="bg-black/30 px-1 rounded">src/components/AdUnit.tsx</code></p>
                  <p>2. Replace the placeholder div with your <code className="bg-black/30 px-1 rounded"><ins></code> tag from Google.</p>
                  <p>3. Add the AdSense script to your <code className="bg-black/30 px-1 rounded">index.html</code> head section.</p>
                </AlertDescription>
              </Alert>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Trending Section */}
        <div className="max-w-6xl mx-auto">
          <TrendingAnime onAction={handleRedirect} />
        </div>

        {/* In-Content Ad */}
        <div className="max-w-2xl mx-auto">
          <AdUnit slot="in-content" format="rectangle" label="Recommended for you" />
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
        <section className="py-12 max-w-4xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to start your journey?</h2>
              <p className="text-slate-400 mb-6">
                Access our complete collection of action, romance, fantasy, and slice-of-life anime instantly. No registration required.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <Smartphone size={16} className="text-[#4ECDC4]" /> Mobile Optimized
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <ShieldCheck size={16} className="text-[#FF6B6B]" /> Safe & Secure
                </div>
              </div>
            </div>
            <Button 
              variant="secondary" 
              size="lg" 
              className="rounded-xl px-8 py-6 font-bold"
              onClick={handleRedirect}
            >
              Start Watching Now
            </Button>
          </div>
        </section>

        {/* Bottom Ad */}
        <div className="max-w-4xl mx-auto">
          <AdUnit slot="bottom-banner" format="horizontal" />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 bg-black/40">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-6 opacity-50 grayscale hover:grayscale-0 transition-all">
            <Tv size={20} />
            <span className="font-bold tracking-tighter">AnimeDekho</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-md mx-auto mb-8">
            AnimeDekho does not store any files on our server. We only link to media which is hosted on 3rd party services.
          </p>
          <div className="flex justify-center gap-6 text-xs text-muted-foreground mb-8">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">DMCA</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p className="text-[10px] text-muted-foreground/30 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} AnimeDekho. All rights reserved.
          </p>
          <MadeWithDyad />
        </div>
      </footer>

      {/* Mobile Sticky Redirect Bar */}
      <AnimatePresence>
        {timeLeft > 0 && (
          <motion.div 
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 right-0 p-4 bg-black/80 backdrop-blur-md border-t border-white/10 md:hidden z-50"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="text-xs">
                <p className="text-slate-400">Redirecting in</p>
                <p className="font-bold text-[#4ECDC4]">{timeLeft} seconds...</p>
              </div>
              <Button 
                size="sm" 
                className="bg-[#FF6B6B] text-white font-bold rounded-lg"
                onClick={handleRedirect}
              >
                Continue Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;