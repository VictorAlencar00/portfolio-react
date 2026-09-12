import angularIcon from './imgs/angular-icon.jpg';
import cssIcon from './imgs/cssicon.png';
import dockerIcon from './imgs/docker-icon.png';
import gitIcon from './imgs/giticon.png';
import htmlIcon from './imgs/htmlicon.png';
import ionicIcon from './imgs/ionic-icon.svg';
import javaIcon from './imgs/javaIcon.png';
import javascriptIcon from './imgs/jsnewicon.png';
import nextIcon from './imgs/next-icon.png';
import postgresIcon from './imgs/postgresql-icon.svg';
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
    name: 'JavaScript',
    icon: javascriptIcon,
    url: 'https://developer.mozilla.org/pt-BR/docs/Web/JavaScript',
  },
  {
    name: 'TypeScript',
    icon: typescriptIcon,
    url: 'https://www.typescriptlang.org',
  },
  { name: 'React', icon: reactIcon, url: 'https://react.dev' },
  { name: 'Next.js', icon: nextIcon, url: 'https://nextjs.org/' },
  { name: 'Angular', icon: angularIcon, url: 'https://angular.io' },
  {
    name: 'Ionic',
    icon: ionicIcon,
    url: 'https://ionicframework.com/',
  },
  {
    name: 'Java',
    icon: javaIcon,
    url: 'https://www.oracle.com/br/java/technologies/downloads/',
  },
  { name: 'Spring Boot', icon: springIcon, url: 'https://spring.io' },
  {
    name: 'PostgreSQL',
    icon: postgresIcon,
    url: 'https://www.postgresql.org/',
  },
  { name: 'Docker', icon: dockerIcon, url: 'https://docker.com' },
  { name: 'Git', icon: gitIcon, url: 'https://git-scm.com' },
  {
    name: 'Sass',
    icon: sassIcon,
    url: 'https://sass-lang.com/',
  },
  { name: 'Tailwind CSS', icon: tailwindIcon, url: 'https://tailwindcss.com' },
];

const TechnologyIcon = ({ name, icon }) => (
  <div
    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
    title={name}
  >
    <img className="h-7 w-7 object-contain" src={icon} alt="" />
    <span className="text-sm font-medium text-slate-200">{name}</span>
  </div>
);

export default function About() {
  return (
    <section id="about" className="bg-[#0a1626] px-6 py-24 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
            Sobre mim
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
            Tecnologia com visão de produto.
          </h2>
          <p className="mt-6 leading-8 text-slate-300">
            Sou formado em Análise e Desenvolvimento de Sistemas pelo IESB e
            trabalho em todo o ciclo de uma aplicação: da experiência do usuário
            à API, banco de dados e publicação. Minha trajetória começou com
            HTML, CSS e JavaScript, evoluiu para Angular e Java e hoje inclui a
            criação de produtos completos com Next.js.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <strong className="block text-xl text-white">Full-stack</strong>
              <span className="mt-1 block text-sm text-slate-400">
                Front-end, Back-end, Banco de dados relacional e implantação.
              </span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <strong className="block text-xl text-white">
                Inglês fluente
              </strong>
              <span className="mt-1 block text-sm text-slate-400">
                Comunicação e documentação.
              </span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-7 text-xl font-semibold text-white">
            Tecnologias que utilizo
          </h3>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {technologies.map(tech => (
              <TechnologyIcon key={tech.name} {...tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
