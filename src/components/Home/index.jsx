import profileImage from './imgs/profileImage.jpg';
import githubIcon from './imgs/githubIcon.png';
import linkedinIcon from './imgs/linkedin-icon.png';
import spaceBackGround from './imgs/space-backGround.jpg';

import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

export default function Home() {
  const [text, cursor] = useTypewriter({
    words: ['Front-End', 'React', 'Angular'],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 120,
  });

  return (
    <section
      id="home"
      className="flex justify-center items-center gap-24 bg-cover h-100vh"
      style={{ backgroundImage: `url(${spaceBackGround})` }}
    >
      <img
        className="h-64 w-64 lg:h-96 lg:w-96 rounded-full border-solid border-white border-2 hover:scale-110 transition-all profile_image md:mx-4 lg:mx-0"
        src={profileImage}
        alt="profile"
      />
      <div className="flex flex-col gap-5 ">
        <div className="sm:text-3xl">
          <p className="hidden text-sm sm:text-l">Olá, me chamo</p>
          <h2 className="text-center text-2xl sm:text-3xl lg:text-5xl">
            Victor de S. Alencar
          </h2>
          <p className="hidden text-sm sm:text-lg">e sou um</p>
          <h3 className="w-80 text-2xl sm:text-2x2">
            Desenvolvedor
            <span
              className={`text-cyan-500 ml-2 ${text[0] === 'F' ? 'text-white' : ''} ${text[0] === 'A' ? 'text-angularColor' : ''}`}
            >
              {text}
              <Cursor cursorBlinking={cursor} />
            </span>
          </h3>
        </div>
        <div className="flex gap-2 justify-center sm:justify-normal">
          <a
            href="https://drive.google.com/file/d/1oocnpNG_hKmnTsbACJ7pNFN3oJ6uvq02/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-950 text-white h-12 p-1 rounded-3xl border border-solid hover:scale-110 transition-all hidden hover:bg-softWhite hover:text-black sm:flex items-center"
          >
            <span className="p-2">Baixar Currículo</span>
          </a>
          <a
            href="https://drive.google.com/file/d/1oocnpNG_hKmnTsbACJ7pNFN3oJ6uvq02/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-zinc-950 text-white h-12 p-1 rounded-3xl border border-solid hover:scale-110 transition-all sm:hidden hover:bg-softWhite hover:text-black flex items-center"
          >
            <span className="p-2">Currículo</span>
          </a>
          <a
            href="#contacts"
            className="bg-zinc-950 text-white p-1 rounded-3xl border border-solid hover:scale-110 transition-all hover:bg-softWhite hover:text-black
            flex items-center"
          >
            <span className="p-2">Contato</span>
          </a>
        </div>
        <div className="flex gap-1 justify-center sm:justify-normal">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/VictorAlencar00"
          >
            <img
              className="w-12 h-12 hover:scale-110 transition-all"
              src={githubIcon}
              alt="user github"
            />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/victor-de-sousa-alencar-9a80ba244"
          >
            <img
              className="w-12 h-12 hover:scale-110 transition-all"
              src={linkedinIcon}
              alt="user linkedin"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
