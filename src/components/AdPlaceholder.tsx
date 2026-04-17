"use client";

import React from 'react';

interface AdPlaceholderProps {
  type: 'banner' | 'rectangle' | 'leaderboard';
  className?: string;
}

const AdPlaceholder = ({ type, className = "" }: AdPlaceholderProps) => {
  const dimensions = {
    banner: "h-[90px] w-full max-w-[728px]",
    rectangle: "h-[250px] w-[300px]",
    leaderboard: "h-[90px] w-full max-w-[970px]"
  };

  return (
    <div className={`mx-auto flex flex-col items-center justify-center bg-white/5 border border-dashed border-white/20 rounded-lg overflow-hidden ${dimensions[type]} ${className}`}>
      <span className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-1">Advertisement</span>
      <div className="text-xs text-white/10 font-medium">Google Ad Section</div>
    </div>
  );
};

export default AdPlaceholder;