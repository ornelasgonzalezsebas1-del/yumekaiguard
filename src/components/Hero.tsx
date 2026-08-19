import { motion } from 'framer-motion';
import { Shield, Crown, Sparkles } from 'lucide-react';

const DISCORD_URL = 'https://discord.com/oauth2/authorize?client_id=1474703558678155406';
const STORE_URL = 'https://alyvex.tip4serv.com/';

export default function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold tracking-wider text-royal-200"
        >
          <Sparkles className="h-3.5 w-3.5 text-sakura-400" />
          FREE + PREMIUM
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl"
        >
          <span className="text-gradient">YumekaiGuard</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-4 font-display text-xl font-semibold text-white sm:text-2xl lg:text-3xl"
        >
          La protección que tu comunidad necesita.
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg"
        >
          Protege tu servidor de Discord contra raids, nukes, spam y amenazas con un sistema de seguridad diseñado para mantener tu comunidad protegida.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary group flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white sm:w-auto"
          >
            <Shield className="h-5 w-5 transition-transform group-hover:scale-110" />
            Añadir YumekaiGuard
          </a>
          <a
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-full items-center justify-center gap-2 rounded-full glass px-8 py-4 text-base font-semibold text-white transition-all hover:glow-pink sm:w-auto"
          >
            <Crown className="h-5 w-5 text-sakura-400 transition-transform group-hover:scale-110" />
            Obtener Premium
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-white/20 pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-2 w-1 rounded-full bg-gradient-to-b from-royal-400 to-sakura-400"
          />
        </div>
      </motion.div>
    </section>
  );
}
