"use client";

import React from 'react';

interface AdUnitProps {
  slot: string;
  format?: 'auto' | 'fluid' | 'rectangle' | 'horizontal' | 'vertical';
  className?: string;
  label?: string;
}

const AdUnit = ({ slot, format = 'auto', className = "", label = "Advertisement" }: AdUnitProps) => {
  return (
    <div className={`flex flex-col items-center my-6 w-full ${className}`}>
      <span className="text-[10px] uppercase tracking-widest text-muted-foreground mb-2">{label}</span>
      <div 
        className="bg-muted/30 border border-dashed border-muted-foreground/30 rounded-lg flex items-center justify-center overflow-hidden min-h-[90px] w-full"
        style={{ minHeight: format === 'rectangle' ? '250px' : '90px' }}
      >
        {/* 
          Google AdSense Integration:
          Replace the div below with your actual AdSense code.
          Example:
          <ins className="adsbygoogle"
               style={{ display: 'block' }}
               data-ad-client="ca-pub-XXXXXX"
               data-ad-slot={slot}
               data-ad-format={format}
               data-full-width-responsive="true"></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        */}
        <div className="text-muted-foreground/50 text-sm font-mono text-center p-4">
          <p>[Google AdSense Unit]</p>
          <p className="text-[10px] mt-1">Slot: {slot} | Format: {format}</p>
        </div>
      </div>
    </div>
  );
};

export default AdUnit;