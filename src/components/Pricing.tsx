import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Crown, Sparkles, Zap, Lock, Flower2, ScrollText, Star, Rocket, Shield } from 'lucide-react';

const DISCORD_URL = 'https://discord.com/oauth2/authorize?client_id=1474703558678155406';
const STORE_URL = 'https://alyvex.tip4serv.com/';

const FREE_FEATURES = [
  'Protección Anti-Raid básica',
  'Anti-Spam',
  'Moderación',
  'Logs básicos',
  'Protección básica contra bots',
  'Sistema de advertencias',
  'Configuración básica',
];

const PREMIUM_FEATURES = [
  { icon: Zap, text: 'Velocidad de respuesta instantánea' },
  { icon: Lock, text: 'Anti-Nuke y Anti-Raid reforzados' },
  { icon: Flower2, text: 'Personalización de estilo anime' },
  { icon: ScrollText, text: 'Logs ilimitados y privados' },
  { icon: Star, text: 'Soporte VIP prioritario' },
  { icon: Rocket, text: 'Acceso anticipado a nuevas defensas y comandos' },
];

export default function Pricing() {
  const freeRef = useRef(null);
  const premRef = useRef(null);
  const freeInView = useInView(freeRef, { once: true, margin: '-50px' });
  const premInView = useInView(premRef, { once: true, margin: '-50px' });

  return (
    <div className="relative">
      {/* FREE section */}
      <section id="free" className="relative py-20" ref={freeRef}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={freeInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="glass relative overflow-hidden rounded-3xl p-8 text-center sm:p-12"
          >
            <div className="absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-royal-500/15 blur-3xl" />
            <div className="relative">
              <div className="mb-4 inline-flex rounded-2xl bg-gradient-to-br from-royal-500/20 to-sakura-500/20 p-4">
                <Shield className="h-8 w-8 text-royal-400" />
              </div>
              <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
                YumekaiGuard <span className="text-gradient">Free</span>
              </h2>
              <p className="mx-auto mt-4 max-w-md text-gray-400">
                Protección esencial para cualquier comunidad de Discord.
              </p>

              <div className="mt-6 inline-block">
                <span className="font-display text-5xl font-extrabold text-white">GRATIS</span>
              </div>

              <div className="mx-auto mt-8 grid max-w-md gap-3 text-left sm:grid-cols-2">
                {FREE_FEATURES.map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-gray-300">
                    <Check className="h-4 w-4 shrink-0 text-royal-400" />
                    {f}
                  </div>
                ))}
              </div>

              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-8 inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white"
              >
                <Shield className="h-5 w-5" />
                Añadir gratis
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PREMIUM section */}
      <section id="premium" className="relative py-20" ref={premRef}>
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={premInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7 }}
            className="border-gradient relative overflow-hidden rounded-3xl p-1"
          >
            {/* Inner glow particles */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute h-1 w-1 rounded-full bg-sakura-400"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 3,
                  }}
                />
              ))}
            </div>

            {/* Animated outer glow */}
            <motion.div
              className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-royal-500/30 to-sakura-500/30 blur-2xl"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            <div className="relative rounded-[22px] bg-ink-800/95 p-8 backdrop-blur-xl sm:p-12">
              {/* Badge */}
              <div className="absolute -top-px left-1/2 -translate-x-1/2">
                <div className="btn-primary rounded-b-xl px-6 py-1.5 text-xs font-bold tracking-widest text-white">
                  RECOMENDADO
                </div>
              </div>

              <div className="text-center">
                <div className="mb-4 inline-flex rounded-2xl bg-gradient-to-br from-sakura-500/30 to-royal-500/30 p-4">
                  <Crown className="h-8 w-8 text-sakura-400" />
                </div>

                <div className="mb-2 inline-flex items-center gap-2 rounded-full glass px-4 py-1 text-xs font-semibold tracking-wider text-sakura-300">
                  <Sparkles className="h-3 w-3" />
                  PREMIUM
                </div>

                <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
                  YumekaiGuard <span className="text-gradient-pink">Premium</span>
                </h2>
                <p className="mt-3 text-lg font-medium text-gray-300">
                  El escudo definitivo que nunca duerme.
                </p>

                <div className="mt-6">
                  <span className="font-display text-5xl font-extrabold text-gradient sm:text-6xl">
                    $5.00
                  </span>
                  <span className="text-lg font-medium text-gray-400"> USD</span>
                </div>
              </div>

              <div className="mx-auto mt-8 max-w-lg space-y-3">
                {PREMIUM_FEATURES.map((f) => {
                  const Icon = f.icon;
                  return (
                    <div
                      key={f.text}
                      className="flex items-center gap-3 rounded-xl glass px-4 py-3 transition-colors hover:bg-white/5"
                    >
                      <Icon className="h-5 w-5 shrink-0 text-sakura-400" />
                      <span className="text-sm text-gray-200">{f.text}</span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 text-center">
                <a
                  href={STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary group inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white sm:w-auto"
                >
                  <Crown className="h-5 w-5 transition-transform group-hover:scale-110" />
                  Comprar YumekaiGuard Premium
                </a>
                <p className="mt-4 text-xs text-gray-500">
                  Compra Premium de forma segura mediante AlyvexCommunity.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
