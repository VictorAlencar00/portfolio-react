import angularIcon from './imgs/angular-icon.jpg';
import cssIcon from './imgs/cssicon.png';
import gitIcon from './imgs/giticon.png';
import htmlIcon from './imgs/htmlicon.png';
import ionicIcon from './imgs/ionic-icon.svg';
import javaIcon from './imgs/javaIcon.png';
import javascriptIcon from './imgs/jsnewicon.png';
import reactIcon from './imgs/react-icon.png';
import sassIcon from './imgs/sass-icon.png';
import springIcon from './imgs/springIcon.png';
import tailwindIcon from './imgs/tailwind-logo.png';
import typescriptIcon from './imgs/typescript-icon.png';
const technologies = [
  {
    name: 'HTML',
    icon: htmlIcon,
    url: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML',
  },
  {
    name: 'CSS',
    icon: cssIcon,
    url: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS',
  },
  {
    name: 'Sass',
    icon: sassIcon,
    url: 'https://sass-lang.com/',
  },
  {
    name: 'JavaScript',
    icon: javascriptIcon,
    url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
  },
  { name: 'React', icon: reactIcon, url: 'https://react.dev' },
  {
    name: 'Ionic',
    icon: ionicIcon,
    url: 'https://ionicframework.com/',
  },
  { name: 'Angular', icon: angularIcon, url: 'https://angular.io' },
  {
    name: 'TypeScript',
    icon: typescriptIcon,
    url: 'https://www.typescriptlang.org',
  },
  {
    name: 'Java',
    icon: javaIcon,
    url: 'https://www.oracle.com/br/java/technologies/downloads/',
  },
  { name: 'Spring Boot', icon: springIcon, url: 'https://spring.io' },
  { name: 'Git', icon: gitIcon, url: 'https://git-scm.com' },
  { name: 'Tailwind CSS', icon: tailwindIcon, url: 'https://tailwindcss.com' },
];

const TechnologyIcon = ({ name, icon, url }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" title={name}>
    <img
      className="w-12 h-12 object-contain grayscale hover:grayscale-0 hover:scale-125 transition-all duration-300"
      src={icon}
      alt={`${name} logo`}
    />
  </a>
);

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-gradient-to-b from-spaceColor to-darkPurple flex items-center justify-center"
    >
      <div className="container max-w-5xl flex flex-col lg:flex-row items-center gap-12 lg:gap-16 bg-grayBg/50 backdrop-blur-md p-8 lg:p-12 rounded-2xl shadow-2xl">
        <div className="lg:w-1/2 text-gray-300">
          <h2 className="text-3xl font-bold text-white mb-6 text-center lg:text-left">
            Sobre Mim
          </h2>
          <p className="leading-relaxed text-justify indent-8">
            Formado em Análise e Desenvolvimento de Sistemas pela IESB, iniciei
            minha jornada em desenvolvimento web em 2023, com o objetivo de
            criar soluções completas e eficientes. Minha especialidade é o
            front-end, com profundo conhecimento em Angular e Ionic para a
            construção de interfaces reativas e aplicações multiplataforma. No
            back-end, possuo sólida experiência com Java, Spring Boot e
            PostgreSQL para o desenvolvimento de APIs RESTful. Essa combinação
            de habilidades me permite atuar de forma eficaz em todo o ciclo de
            vida de um projeto full stack. Sou fluente em inglês e também tenho
            conhecimento em React.
          </p>
        </div>

        <div className="lg:w-1/2 w-full">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Tecnologias
          </h3>
          <div className="flex flex-wrap gap-x-6 gap-y-8 sm:gap-x-8 justify-center">
            {technologies.map(tech => (
              <TechnologyIcon key={tech.name} {...tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
