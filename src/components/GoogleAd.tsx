"use client";

import React from 'react';

interface GoogleAdProps {
  slot: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  className?: string;
  label?: string;
}

const GoogleAd = ({ slot, format = 'auto', className = "", label = "Advertisement" }: GoogleAdProps) => {
  return (
    <div className={`flex flex-col items-center my-6 w-full ${className}`}>
      <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">{label}</span>
      <div 
        className="bg-muted/30 border border-dashed border-border rounded-lg flex items-center justify-center overflow-hidden min-h-[90px] w-full"
        style={{ minHeight: format === 'rectangle' ? '250px' : '90px' }}
      >
        {/* 
          INSTRUCTIONS FOR USER:
          Replace this div with your actual Google AdSense code.
          Example:
          <ins className="adsbygoogle"
               style={{ display: 'block' }}
               data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
               data-ad-slot={slot}
               data-ad-format={format}
               data-full-width-responsive="true"></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        */}
        <div className="text-center p-4">
          <p className="text-sm font-medium text-muted-foreground">Ad Slot: {slot}</p>
          <p className="text-xs text-muted-foreground/60">Google AdSense Placeholder</p>
        </div>
      </div>
    </div>
  );
};

export default GoogleAd;