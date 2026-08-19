import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Menu, X, Crown } from 'lucide-react';

const LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Características', href: '#caracteristicas' },
  { label: 'Free', href: '#free' },
  { label: 'Premium', href: '#premium' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Soporte', href: '#soporte' },
];

const STORE_URL = 'https://alyvex.tip4serv.com/';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-strong shadow-lg shadow-black/30' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#inicio" className="group flex items-center gap-2">
          <motion.div
            whileHover={{ rotate: -10, scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="relative"
          >
            <Shield className="h-7 w-7 text-royal-400" fill="url(#logoGrad)" />
            <svg width="0" height="0">
              <defs>
                <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#ff3d97" />
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
          <span className="font-display text-lg font-bold tracking-tight">
            Yumekai<span className="text-gradient">Guard</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white"
            >
              {l.label}
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-royal-500 to-sakura-500 transition-all duration-300 group-hover:w-full hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white sm:flex"
          >
            <Crown className="h-4 w-4" />
            Comprar Premium
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-gray-300 hover:text-white lg:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden glass-strong lg:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-4">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-gray-300 hover:bg-white/5 hover:text-white"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="btn-primary mt-2 flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white"
              >
                <Crown className="h-4 w-4" />
                Comprar Premium
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
