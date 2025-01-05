import netflix from './imgs/netflix_gamified.png';
import trainee from './imgs/trainee.png';
import gamestore from './imgs/gamestore.png';
import ProjectCard from './ProjectCard';

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col items-center p-3  bg-gradient-to-b from-darkPurple to-lightPurple md:pb-9 lg:pb-0"
    >
      <div className="w-52 text-center text-2xl p-6">
        <h1>Meus Projetos</h1>
      </div>
      <nav class="h-full flex flex-col md:flex lg:flex-row gap-12 justify-center items-center">
        <ProjectCard
          title="Gamestore"
          image={gamestore}
          repoLink="https://github.com/VictorAlencar00/angular-gamestore"
          liveLink="https://angular-gamestore.vercel.app/"
        />
        <ProjectCard
          title="Trainee"
          image={trainee}
          repoLink="https://github.com/VictorAlencar00/trainee"
        />
        <ProjectCard
          title="Netflix"
          image={netflix}
          repoLink="https://github.com/VictorAlencar00/netflix-gamified"
        />
      </nav>
    </section>
  );
}
