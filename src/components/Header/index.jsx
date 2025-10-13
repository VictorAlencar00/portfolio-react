import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '#about', title: 'Sobre mim' },
    { href: '#projects', title: 'Projetos' },
    { href: '#contacts', title: 'Contatos' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full h-20 px-5 sm:px-10 flex items-center justify-between z-50 bg-spaceColor/80 backdrop-blur-sm shadow-lg">
      <a href="#home" className="text-2xl font-bold text-white">
        Victor Alencar
      </a>

      {/* Navegação Desktop */}
      <nav className="hidden sm:flex gap-10">
        {navLinks.map(link => (
          <a
            key={link.title}
            href={link.href}
            className="text-lg text-gray-300 transition-all hover:text-cyan-400 hover:scale-110"
          >
            {link.title}
          </a>
        ))}
      </nav>

      {/* Botão do Menu Mobile */}
      <div className="sm:hidden z-20">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <XMarkIcon className="h-8 w-8 text-white" />
          ) : (
            <Bars3Icon className="h-8 w-8 text-white" />
          )}
        </button>
      </div>

      {/* Menu Mobile Overlay  */}
      <nav
        className={`sm:hidden absolute top-0 left-0 w-full h-screen bg-darkPurple flex flex-col items-center justify-center gap-10 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {navLinks.map(link => (
          <a
            key={link.title}
            href={link.href}
            onClick={() => setIsMenuOpen(false)}
            className="text-3xl text-white transition-all hover:scale-110 hover:text-cyan-400"
          >
            {link.title}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
