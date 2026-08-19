import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Shield,
  Bomb,
  Bot,
  Ban,
  Webhook,
  ScrollText,
  Zap,
  Settings,
} from 'lucide-react';

const FEATURES = [
  { icon: Shield, title: 'Anti-Raid', desc: 'Detecta y bloquea ataques coordinados contra tu servidor.', color: 'text-royal-400' },
  { icon: Bomb, title: 'Anti-Nuke', desc: 'Protección contra eliminación masiva de canales, roles y otros elementos.', color: 'text-sakura-400' },
  { icon: Bot, title: 'Anti-Bot', desc: 'Detección de bots sospechosos.', color: 'text-royal-300' },
  { icon: Ban, title: 'Anti-Spam', desc: 'Evita mensajes masivos y comportamiento abusivo.', color: 'text-sakura-300' },
  { icon: Webhook, title: 'Protección de Webhooks', desc: 'Protección contra abuso de webhooks.', color: 'text-royal-400' },
  { icon: ScrollText, title: 'Logs', desc: 'Registra las acciones importantes para mantener el control de tu servidor.', color: 'text-sakura-400' },
  { icon: Zap, title: 'Respuesta rápida', desc: 'Detecta amenazas rápidamente para minimizar daños.', color: 'text-royal-300' },
  { icon: Settings, title: 'Configuración', desc: 'Personaliza el sistema de seguridad según las necesidades de tu comunidad.', color: 'text-sakura-300' },
];

function FeatureCard({ feature, index }: { feature: typeof FEATURES[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="glass group relative overflow-hidden rounded-2xl p-6 transition-all hover:border-royal-500/30"
    >
      {/* Glow on hover */}
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-royal-500/0 via-transparent to-sakura-500/0 opacity-0 blur transition-opacity duration-500 group-hover:from-royal-500/20 group-hover:to-sakura-500/20 group-hover:opacity-100" />

      <div className="relative">
        <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-royal-500/20 to-sakura-500/20 p-3 transition-transform group-hover:scale-110">
          <Icon className={`h-6 w-6 ${feature.color}`} />
        </div>
        <h3 className="mb-2 font-display text-lg font-bold text-white">
          {feature.title}
        </h3>
        <p className="text-sm leading-relaxed text-gray-400">
          {feature.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section id="caracteristicas" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Todo lo que necesitas para <span className="text-gradient">proteger tu servidor</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
