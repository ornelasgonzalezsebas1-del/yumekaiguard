import { Shield } from 'lucide-react';

const INTERNAL_LINKS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Características', href: '#caracteristicas' },
  { label: 'Premium', href: '#premium' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Soporte', href: '#soporte' },
];

const DISCORD_URL = 'https://discord.gg/9yGwxX9CRW';
const STORE_URL = 'https://alyvex.tip4serv.com/';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-ink-800/50 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center gap-2 md:justify-start">
              <Shield className="h-6 w-6 text-royal-400" />
              <span className="font-display text-lg font-bold">
                Yumekai<span className="text-gradient">Guard</span>
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-gray-500">
              Protección inteligente para comunidades de Discord.
            </p>
          </div>

          {/* Internal links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {INTERNAL_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-gray-400 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* External links */}
          <div className="flex flex-col items-center gap-2 md:items-end">
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 transition-colors hover:text-royal-300"
            >
              Discord
            </a>
            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 transition-colors hover:text-sakura-300"
            >
              Tienda Premium
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6 text-center">
          <p className="text-xs text-gray-600">
            © 2026 YumekaiGuard. Todos los derechos reservados.
          </p>
          <p className="mt-2 text-xs text-gray-700">
            YumekaiGuard no está afiliado oficialmente con Discord.
          </p>
        </div>
      </div>
    </footer>
  );
}
