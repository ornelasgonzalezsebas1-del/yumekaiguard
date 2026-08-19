import { motion } from 'framer-motion';
import { Flower2, Sparkles, Star } from 'lucide-react';

export default function AnimeSection() {
  const floatIcons = [
    { Icon: Flower2, top: '15%', left: '8%', delay: 0, color: 'text-sakura-400' },
    { Icon: Sparkles, top: '25%', left: '85%', delay: 0.5, color: 'text-royal-300' },
    { Icon: Star, top: '65%', left: '12%', delay: 1, color: 'text-sakura-300' },
    { Icon: Flower2, top: '75%', left: '80%', delay: 1.5, color: 'text-royal-400' },
    { Icon: Sparkles, top: '45%', left: '5%', delay: 0.8, color: 'text-sakura-400' },
    { Icon: Star, top: '35%', left: '92%', delay: 1.2, color: 'text-royal-300' },
  ];

  return (
    <section className="relative overflow-hidden py-24">
      {/* Glow backdrop */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[400px] w-[400px] rounded-full bg-gradient-to-r from-royal-600/15 to-sakura-500/15 blur-[100px]" />
      </div>

      {/* Floating icons */}
      {floatIcons.map((item, i) => {
        const Icon = item.Icon;
        return (
          <motion.div
            key={i}
            className="absolute"
            style={{ top: item.top, left: item.left }}
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: item.delay }}
          >
            <Icon className={`h-6 w-6 ${item.color}`} />
          </motion.div>
        );
      })}

      {/* Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`p-${i}`}
          className="absolute h-1 w-1 rounded-full bg-white/40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex rounded-2xl bg-gradient-to-br from-sakura-500/20 to-royal-500/20 p-4"
        >
          <Flower2 className="h-8 w-8 text-sakura-400" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl"
        >
          Protección con <span className="text-gradient-pink">estilo</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg"
        >
          YumekaiGuard combina seguridad avanzada con una estética anime única para que proteger tu comunidad también se vea increíble.
        </motion.p>
      </div>
    </section>
  );
}
