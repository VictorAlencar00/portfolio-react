import githubIcon from './imgs/githubIcon.png';
import linkedinIcon from './imgs/linkedin-icon.png';
import profileImage from './imgs/profileImage.jpg';
import spaceBackGround from './imgs/space-backGround.jpg';

import { Cursor, useTypewriter } from 'react-simple-typewriter';
export default function Home() {
  const [text] = useTypewriter({
    words: ['Full-stack', 'Angular', 'Java', 'Ionic', 'React'],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-10 md:gap-16 px-6 pt-24 pb-12 text-white"
      style={{
        backgroundImage: `url(${spaceBackGround})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <img
        className="h-64 w-64 lg:h-80 lg:w-80 rounded-full object-cover border-4 border-cyan-400 shadow-lg shadow-cyan-500/30 hover:scale-105 transition-transform duration-300"
        src={profileImage}
        alt="Foto de perfil de Victor Alencar"
      />

      <div className="flex flex-col gap-6 text-center md:text-left items-center md:items-start">
        <div>
          <p className="text-lg text-gray-300">Olá, me chamo</p>
          <h1 className="text-4xl lg:text-6xl font-bold my-1">
            Victor de S. Alencar
          </h1>
          <h2 className="text-2xl lg:text-3xl text-gray-200 h-10">
            Desenvolvedor{' '}
            <span
              className={`font-semibold ${text.startsWith('A') ? 'text-angularColor' : 'text-cyan-400'}`}
            >
              {text}
            </span>
            <Cursor cursorStyle="_" />
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="https://drive.google.com/file/d/1NSCH2kSfazl9_79TjqNMUYKf43BSsicT/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-500 text-white font-bold py-3 px-8 rounded-full border-2 border-transparent hover:bg-transparent hover:border-cyan-500 hover:scale-105 transition-all"
          >
            Baixar Currículo
          </a>
          <a
            href="#contacts"
            className="bg-gray-700 text-white font-bold py-3 px-8 rounded-full border-2 border-transparent hover:bg-transparent hover:border-white hover:scale-105 transition-all"
          >
            Contato
          </a>
        </div>

        <div className="flex gap-4 mt-2">
          <a
            href="https://github.com/VictorAlencar00"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-10 h-10 grayscale hover:grayscale-0 hover:scale-125 transition-all"
              src={githubIcon}
              alt="GitHub"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/victor-de-sousa-alencar-9a80ba244"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-10 h-10 grayscale hover:grayscale-0 hover:scale-125 transition-all"
              src={linkedinIcon}
              alt="LinkedIn"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
