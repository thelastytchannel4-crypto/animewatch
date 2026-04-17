"use client";

import React, { useState, useEffect } from 'react';
import { Play, Zap, Globe, Smartphone, ShieldCheck, ArrowRight, Tv } from 'lucide-react';
import { Button } from "@/components/ui/button";
import GoogleAd from '@/components/GoogleAd';
import FeatureCard from '@/components/FeatureCard';
import { MadeWithDyad } from "@/components/made-with-dyad";

const REDIRECT_URL = "https://animedekho.app";
const REDIRECT_TIMEOUT = 15; // seconds

const Index = () => {
  const [timeLeft, setTimeLeft] = useState(REDIRECT_TIMEOUT);

  useEffect(() => {
    if (timeLeft <= 0) {
      window.location.href = REDIRECT_URL;
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleManualRedirect = () => {
    window.location.href = REDIRECT_URL;
  };

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-slate-50 selection:bg-primary/30">
      {/* SEO Meta Tags would typically go in index.html or a Head component */}
      
      {/* Top Banner Ad */}
      <div className="container mx-auto px-4 pt-4">
        <GoogleAd slot="top-banner" className="max-w-4xl mx-auto" />
      </div>

      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 group cursor-pointer" onClick={handleManualRedirect}>
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Tv className="text-primary-foreground w-6 h-6" />
          </div>
          <h1 className="text-2xl font-black tracking-tighter italic">
            ANIME<span className="text-primary">DEKHO</span>
          </h1>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-sm font-medium text-muted-foreground bg-muted/20 px-4 py-2 rounded-full border border-border/50">
            Redirecting in <span className="text-primary font-bold tabular-nums">{timeLeft}s</span>
          </div>
          <Button 
            onClick={handleManualRedirect}
            className="rounded-full font-bold px-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20"
          >
            Continue Now <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="relative rounded-3xl overflow-hidden mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0c] via-[#0a0a0c]/80 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1578632292335-df3abbb0d586?q=80&w=1920&auto=format&fit=crop" 
            alt="Anime Background" 
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          
          <div className="relative z-20 py-20 px-8 md:px-16 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
              <Zap className="w-3 h-3" /> Join 100K+ Anime Fans
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Watch Thousands of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
                Anime Episodes Free
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl leading-relaxed">
              Stream your favorite anime in HD with subtitles and dubs. Your ultimate destination for the latest seasonal hits and all-time classics.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                onClick={handleManualRedirect}
                className="rounded-xl h-14 px-8 text-lg font-bold bg-primary hover:bg-primary/90 shadow-xl shadow-primary/30"
              >
                <Play className="mr-2 fill-current" /> Start Watching Now
              </Button>
              <p className="w-full text-sm text-muted-foreground mt-2 italic">
                Click to access our complete anime collection instantly.
              </p>
            </div>
          </div>
        </section>

        {/* In-Content Ad */}
        <GoogleAd slot="mid-content" format="rectangle" className="max-w-md mx-auto mb-16" />

        {/* Features Grid */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose AnimeDekho?</h2>
            <p className="text-muted-foreground">The best streaming experience for true anime lovers.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              icon={Tv} 
              title="Huge Library" 
              description="Access thousands of episodes from the latest seasonal releases to legendary classics."
              color="bg-blue-500"
            />
            <FeatureCard 
              icon={Zap} 
              title="HD Quality" 
              description="Crystal clear 1080p streaming with adaptive bitrate for smooth playback on any connection."
              color="bg-yellow-500"
            />
            <FeatureCard 
              icon={Globe} 
              title="Multi-Language" 
              description="Choose between high-quality subtitles or professional dubs in multiple languages."
              color="bg-green-500"
            />
            <FeatureCard 
              icon={Smartphone} 
              title="Any Device" 
              description="Optimized for mobile, tablet, and desktop. Watch your anime anywhere, anytime."
              color="bg-purple-500"
            />
            <FeatureCard 
              icon={ShieldCheck} 
              title="Free Forever" 
              description="No subscriptions, no hidden fees. Just pure anime entertainment for everyone."
              color="bg-red-500"
            />
            <div className="bg-primary/5 border border-primary/20 p-6 rounded-2xl flex flex-col items-center justify-center text-center group hover:bg-primary/10 transition-colors">
              <h3 className="text-xl font-bold mb-2 text-primary">Ready to Dive In?</h3>
              <Button variant="link" onClick={handleManualRedirect} className="text-primary font-bold group-hover:translate-x-1 transition-transform">
                Enter AnimeDekho <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Bottom Ad */}
        <GoogleAd slot="bottom-banner" className="max-w-4xl mx-auto mb-16" />
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/30 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="flex items-center gap-2">
                <Tv className="text-primary w-5 h-5" />
                <span className="text-xl font-black tracking-tighter italic">ANIME<span className="text-primary">DEKHO</span></span>
              </div>
              <p className="text-sm text-muted-foreground">Your Ultimate Anime Streaming Destination</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">DMCA</a>
              <a href="#" className="hover:text-primary transition-colors">Contact Us</a>
            </div>
            
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} AnimeDekho. All rights reserved.
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border/20 text-center text-[10px] text-muted-foreground/40 max-w-2xl mx-auto">
            Disclaimer: AnimeDekho does not store any files on its server. All contents are provided by non-affiliated third parties. This page is a pre-landing portal for monetization and redirection purposes.
          </div>
        </div>
      </footer>
      
      <MadeWithDyad />
    </div>
  );
};

export default Index;