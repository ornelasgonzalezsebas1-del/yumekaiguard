import { motion } from 'framer-motion';
import { MessageCircle, ShoppingBag } from 'lucide-react';

const DISCORD_URL = 'https://discord.gg/9yGwxX9CRW';
const STORE_URL = 'https://alyvex.tip4serv.com/';

export default function Support() {
  return (
    <section id="soporte" className="relative py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass relative overflow-hidden rounded-3xl p-8 text-center sm:p-14"
        >
          {/* Glow */}
          <div className="absolute -top-20 left-1/2 h-40 w-60 -translate-x-1/2 rounded-full bg-royal-500/15 blur-3xl" />
          <div className="absolute -bottom-20 left-1/2 h-40 w-60 -translate-x-1/2 rounded-full bg-sakura-500/15 blur-3xl" />

          <div className="relative">
            <div className="mb-4 inline-flex rounded-2xl bg-gradient-to-br from-royal-500/20 to-sakura-500/20 p-4">
              <MessageCircle className="h-8 w-8 text-royal-400" />
            </div>

            <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
              ¿Necesitas <span className="text-gradient">ayuda?</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-400">
              Nuestro equipo está disponible para ayudarte con la configuración y problemas relacionados con YumekaiGuard.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white sm:w-auto"
              >
                <MessageCircle className="h-5 w-5 transition-transform group-hover:scale-110" />
                Ir al soporte
              </a>
              <a
                href={STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-full items-center justify-center gap-2 rounded-full glass px-8 py-4 text-base font-semibold text-white transition-all hover:glow-pink sm:w-auto"
              >
                <ShoppingBag className="h-5 w-5 text-sakura-400 transition-transform group-hover:scale-110" />
                Ver Premium
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
