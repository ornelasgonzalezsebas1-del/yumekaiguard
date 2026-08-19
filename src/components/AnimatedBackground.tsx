import { useMemo } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  color: string;
}

const COLORS = ['#8b5cf6', '#ff3d97', '#c4a3ff', '#ff9ac9', '#a878ff'];

export default function AnimatedBackground() {
  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 5,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-ink-900">
      {/* Deep gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-900 via-[#0a0a18] to-ink-900" />

      {/* Radial glow top-left purple */}
      <div className="absolute -top-1/4 -left-1/4 h-[600px] w-[600px] rounded-full bg-royal-600/20 blur-[120px] animate-glow-pulse" />

      {/* Radial glow bottom-right pink */}
      <div className="absolute -bottom-1/4 -right-1/4 h-[700px] w-[700px] rounded-full bg-sakura-500/15 blur-[130px] animate-glow-pulse" style={{ animationDelay: '1.5s' }} />

      {/* Center subtle glow */}
      <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-royal-500/10 blur-[100px]" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-glow bg-[size:60px_60px] opacity-40" />

      {/* Floating orbs */}
      <div className="absolute top-[15%] left-[10%] h-40 w-40 rounded-full bg-royal-500/10 blur-2xl animate-float-slow" />
      <div className="absolute top-[60%] left-[80%] h-56 w-56 rounded-full bg-sakura-500/10 blur-2xl animate-float-medium" />
      <div className="absolute top-[80%] left-[20%] h-32 w-32 rounded-full bg-royal-400/10 blur-xl animate-float-slow" style={{ animationDelay: '2s' }} />

      {/* Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
            animation: `float ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
            opacity: 0.6,
          }}
        />
      ))}

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-ink-900/60" style={{ background: 'radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(8,8,18,0.8) 100%)' }} />
    </div>
  );
}
