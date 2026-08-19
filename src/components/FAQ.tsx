import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  { q: '¿YumekaiGuard es gratis?', a: 'Sí. Existe una versión Free y una versión Premium.' },
  { q: '¿Cuánto cuesta Premium?', a: 'Actualmente Premium cuesta $5.00 USD.' },
  { q: '¿Dónde compro Premium?', a: 'En la tienda oficial de AlyvexCommunity.' },
  { q: '¿Dónde puedo pedir soporte?', a: 'En nuestro servidor oficial de soporte de Discord.' },
  { q: '¿Premium incluye nuevas funciones?', a: 'Sí. Premium incluye acceso anticipado a nuevas defensas y comandos.' },
];

function FaqItem({ item, index }: { item: typeof FAQS[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="glass overflow-hidden rounded-xl"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="font-medium text-white">{item.q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <ChevronDown className="h-5 w-5 shrink-0 text-royal-400" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-4 text-sm leading-relaxed text-gray-400">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
            Preguntas <span className="text-gradient">frecuentes</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <FaqItem key={f.q} item={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
