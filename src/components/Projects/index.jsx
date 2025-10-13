import gamestore from './imgs/gamestore.png';
import netflix from './imgs/netflix_gamified.png';
import trainee from './imgs/trainee.png';
import ProjectCard from './ProjectCard';

const projectData = [
  {
    title: 'Gamestore',
    image: gamestore,
    repoLink: 'https://github.com/VictorAlencar00/angular-gamestore',
    liveLink: 'https://angular-gamestore.vercel.app/',
  },
  {
    title: 'Trainee',
    image: trainee,
    repoLink: 'https://github.com/VictorAlencar00/trainee',
    liveLink: null,
  },
  {
    title: 'Netflix',
    image: netflix,
    repoLink: 'https://github.com/VictorAlencar00/netflix-gamified',
    liveLink: null,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-gradient-to-b from-darkPurple to-lightPurple"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-16">Meus Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {projectData.map(project => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
