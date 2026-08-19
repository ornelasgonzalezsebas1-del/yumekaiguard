import { motion } from 'framer-motion';
import { Check, Minus } from 'lucide-react';

const ROWS = [
  { feature: 'Anti-Raid', free: 'Básico', premium: 'Avanzado' },
  { feature: 'Anti-Nuke', free: 'Básico', premium: 'Reforzado' },
  { feature: 'Anti-Spam', free: true, premium: true },
  { feature: 'Anti-Bot', free: 'Básico', premium: 'Avanzado' },
  { feature: 'Logs', free: 'Básicos', premium: 'Ilimitados' },
  { feature: 'Personalización Anime', free: false, premium: true },
  { feature: 'Soporte VIP', free: false, premium: true },
  { feature: 'Acceso anticipado', free: false, premium: true },
];

function Cell({ value, isPremium }: { value: boolean | string; isPremium?: boolean }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center justify-center">
        <Check className={`h-5 w-5 ${isPremium ? 'text-sakura-400' : 'text-royal-400'}`} />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex items-center justify-center">
        <Minus className="h-5 w-5 text-gray-600" />
      </span>
    );
  }
  return (
    <span className={`text-sm font-medium ${isPremium ? 'text-sakura-300' : 'text-gray-300'}`}>
      {value}
    </span>
  );
}

export default function Comparison() {
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
            Compara <span className="text-gradient">planes</span>
          </h2>
        </motion.div>

        {/* Desktop table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden overflow-hidden rounded-2xl glass md:block"
        >
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-6 py-5 text-left font-display text-base font-bold text-white">Característica</th>
                <th className="px-6 py-5 text-center font-display text-base font-bold text-royal-300">Free</th>
                <th className="px-6 py-5 text-center font-display text-base font-bold text-sakura-300">Premium</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr
                  key={row.feature}
                  className={`border-b border-white/5 transition-colors hover:bg-white/5 ${i % 2 === 0 ? 'bg-white/[0.02]' : ''}`}
                >
                  <td className="px-6 py-4 text-left text-sm font-medium text-gray-200">{row.feature}</td>
                  <td className="px-6 py-4 text-center"><Cell value={row.free} /></td>
                  <td className="px-6 py-4 text-center"><Cell value={row.premium} isPremium /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile cards */}
        <div className="space-y-3 md:hidden">
          {ROWS.map((row, i) => (
            <motion.div
              key={row.feature}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass rounded-xl p-4"
            >
              <div className="mb-3 font-display text-sm font-bold text-white">{row.feature}</div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-royal-300 font-semibold">Free:</span>
                  <Cell value={row.free} />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sakura-300 font-semibold">Premium:</span>
                  <Cell value={row.premium} isPremium />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
