import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', title: 'Sobre' },
    { href: '#nexusfit', title: 'NexusFIT' },
    { href: '#projects', title: 'Projetos' },
    { href: '#contacts', title: 'Contato' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#07111f]/80 px-6 backdrop-blur-xl lg:px-10">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between">
        <a
          href="#home"
          className="flex items-center gap-3 font-semibold text-white"
        >
        <span className="hidden sm:block">Victor Alencar</span>
        </a>

        {/* Navegação Desktop */}
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Navegação principal"
        >
          {navLinks.map(link => (
            <a
              key={link.title}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-cyan-300"
            >
              {link.title}
            </a>
          ))}
        </nav>

        {/* Botão do Menu Mobile */}
        <div className="z-20 md:hidden">
          <button
            type="button"
            className="rounded-lg p-2 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-8 w-8 text-white" />
            ) : (
              <Bars3Icon className="h-8 w-8 text-white" />
            )}
          </button>
        </div>

        {/* Menu Mobile Overlay  */}
        <nav
          id="mobile-navigation"
          aria-label="Navegação mobile"
          className={`absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center gap-10 bg-[#07111f] transition-transform duration-300 ease-in-out md:hidden ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {navLinks.map(link => (
            <a
              key={link.title}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-3xl font-semibold text-white transition-colors hover:text-cyan-300"
            >
              {link.title}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
