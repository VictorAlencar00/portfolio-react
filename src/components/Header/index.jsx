import React, { useState } from 'react';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full h-24 p-5 items-center justify-end hidden sm:flex  ${isSticky ? 'fixed z-50' : 'absolute'}`}
    >
      <nav className="flex gap-12">
        <a
          className="transition-all hover:scale-110  hover:text-cyan-500 text-xl text-inherit"
          href="#about"
        >
          Sobre mim
        </a>
        <a
          className="transition-all hover:scale-110  hover:text-cyan-500 text-xl text-inherit"
          href="#projects"
        >
          Meus projetos
        </a>
        <a
          className="transition-all hover:scale-110  hover:text-cyan-500 text-xl text-inherit"
          href="#contacts"
        >
          Contatos
        </a>
      </nav>
    </header>
  );
};

export default Header;
