import { motion } from 'framer-motion';
import { Shield, Crown } from 'lucide-react';

const DISCORD_URL = 'https://discord.com/oauth2/authorize?client_id=1474703558678155406';
const STORE_URL = 'https://alyvex.tip4serv.com/';

export default function FinalCTA() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border-gradient p-1"
        >
          <div className="relative rounded-[22px] bg-ink-800/90 p-8 text-center backdrop-blur-xl sm:p-16">
            {/* Glow */}
            <motion.div
              className="absolute -inset-10 rounded-3xl bg-gradient-to-r from-royal-500/20 to-sakura-500/20 blur-3xl"
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <div className="relative">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-3xl font-extrabold sm:text-5xl"
              >
                Protege tu comunidad <span className="text-gradient">hoy</span>
              </motion.h2>
              <p className="mx-auto mt-4 max-w-xl text-gray-400">
                Únete a miles de comunidades que buscan una protección más segura, rápida y confiable.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
                  Comprar Premium
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
