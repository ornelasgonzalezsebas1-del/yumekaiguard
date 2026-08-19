import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const STATS = [
  { value: '99.9%', label: 'Protección' },
  { value: '24/7', label: 'Seguridad' },
  { value: 'Anti-Raid', label: 'Sistema avanzado' },
  { value: 'FREE + PREMIUM', label: 'Planes disponibles' },
];

function StatCard({ stat, index }: { stat: typeof STATS[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass group relative overflow-hidden rounded-2xl p-6 text-center transition-all hover:border-royal-500/30 hover:glow-purple"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-royal-500/0 to-sakura-500/0 opacity-0 transition-opacity duration-300 group-hover:from-royal-500/10 group-hover:to-sakura-500/10 group-hover:opacity-100" />
      <div className="relative">
        <div className="font-display text-3xl font-extrabold text-gradient sm:text-4xl">
          {stat.value}
        </div>
        <div className="mt-2 text-sm font-medium text-gray-400">
          {stat.label}
        </div>
      </div>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
