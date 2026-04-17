"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  delay?: number;
}

const FeatureCard = ({ icon: Icon, title, description, color, delay = 0 }: FeatureCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-card/50 backdrop-blur-sm border border-border/50 p-6 rounded-2xl hover:border-primary/50 transition-colors group"
    >
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`} style={{ backgroundColor: `${color}20`, color: color }}>
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;