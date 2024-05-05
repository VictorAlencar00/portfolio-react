import reactIcon from './imgs/react-icon.png';
import gitIcon from './imgs/giticon.png';
import htmlIcon from './imgs/htmlicon.png';
import javascriptIcon from './imgs/jsnewicon.png';
import cssIcon from './imgs/cssicon.png';
import tailwindIcon from './imgs/tailwind-logo.png';
import typescriptIcon from './imgs/typescript-icon.png';
import angularIcon from './imgs/angular-icon.jpg';

export default function About() {
  return (
    <section
      id="about"
      className="flex items-center justify-center bg-gradient-to-br from-black to-aboutBg h-100vh p-6 md:h-70vh lg:h-100vh lg:p-0"
    >
      <div className="flex flex-col content-between bg-grayBg shadow-aboutContentShadow p-6 lg:p-12 rounded-3xl shadow-aboutContentBoxShadow gap-14 lg:w-aboutWidth lg:h-aboutHeight">
        <div>
          <p className="leading-5 indent-5 mb-1">
            Sou um desenvolvedor Front-End fluente em inglês, cursante de
            Análise e Desenvolvimento de sistemas e estudante de francês.
            Comecei os meus estudos de desenvolvimento web em 2023, e logo
            participei de projetos front-end colaborativos. Tenho conhecimento
            em React, e atualmente estou focado no amplo ecossistema Angular.
          </p>
        </div>
        <div class="w-full text-center flex flex-col gap-4">
          <span>Tecnologias:</span>
          <div className="w-full justify-center flex gap-2 sm:gap-3 technologies">
            <a
              target="_blank"
              href="https://developer.mozilla.org/pt-BR/docs/Web/HTML"
              rel="nonopenner referer noreferrer"
            >
              <img
                className="w-10 h-10 hover:scale-125 transition-all"
                src={htmlIcon}
                alt="HTML logo"
              />
            </a>
            <a
              target="_blank"
              href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
              rel="nonopenner referer noreferrer"
            >
              <img
                className="w-10 h-10 hover:scale-125 transition-all"
                src={cssIcon}
                alt="CSS Logo"
              />
            </a>
            <a
              target="_blank"
              href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
              rel="nonopenner referer noreferrer"
            >
              <img
                className="w-10 h-10 hover:scale-125 transition-all"
                src={javascriptIcon}
                alt="Javascript Logo"
              />
            </a>
            <a
              target="_blank"
              href="https://git-scm.com"
              rel="nonopenner referer noreferrer"
            >
              <img
                className="w-10 h-10 hover:scale-125 transition-all"
                src={gitIcon}
                alt="Git Logo"
              />
            </a>
            <a
              target="_blank"
              href="https://tailwindcss.com"
              rel="nonopenner referer noreferrer"
            >
              <img
                className="h-10 w-13 p-1 hover:scale-125 transition-all"
                src={tailwindIcon}
                alt="Tailwind Logo"
              />
            </a>
            <a
              target="_blank"
              href="https://react.dev"
              rel="nonopenner referer noreferrer"
            >
              <img
                className="h-9 w-10 hover:scale-125 transition-all"
                src={reactIcon}
                alt="React Logo"
              />
            </a>
            <a
              target="_blank"
              href="https://angular.io"
              rel="nonopenner referer noreferrer"
            >
              <img
                className="h-10 w-10 hover:scale-125 transition-all"
                src={angularIcon}
                alt="Angular Icon"
              />
            </a>
            <a
              target="_blank"
              href="https://www.typescriptlang.org"
              rel="nonopenner referer noreferrer"
            >
              <img
                className="w-10 h-10 hover:scale-125 transition-all"
                src={typescriptIcon}
                alt="Typescript Logo"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
