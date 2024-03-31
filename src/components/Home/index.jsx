import profileImage from './imgs/profileImage.jpg'
import githubIcon from './imgs/githubIcon.png'
import linkedinIcon from './imgs/linkedin-icon.png'
import spaceBackGround from './imgs/space-backGround.jpg'

export default function Home() {
  return (
    <section 
      id="home" 
      className="flex justify-center items-center gap-24 bg-cover"
      style={{backgroundImage: `url(${spaceBackGround})`}}
      >
      <img className="h-96 w-96 rounded-full border-solid border-white border-2 hover:scale-110 transition-all" src={profileImage} alt="profile" />
      <div className="flex flex-col gap-5">
        <div className="text-3xl">
          <p className='text-lg'>Olá, me chamo</p>
          <h2 className='text-5xl'>Victor de S. Alencar</h2>
          <h3 className='text-2x2'>
            Desenvolvedor 
            <span className='text-cyan-500 ml-2'>Front-End</span>
          </h3>
        </div>
        <div className='flex gap-2'>
          <button className="bg-zinc-950 text-white h-12 p-2 rounded-3xl border border-solid hover:scale-110 transition-all">Baixar Currículo</button>
          <button className="bg-zinc-950 text-white h-12 p-2 rounded-3xl border border-solid hover:scale-110 transition-all">Contato</button>
        </div>
        <div className="flex gap-1">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/VictorAlencar00"
          >
            <img className='w-12 h-12 hover:scale-110 transition-all' src={githubIcon} alt="user github" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/victor-alencar-9a80ba244/"
          >
            <img className='w-12 h-12 hover:scale-110 transition-all'src={linkedinIcon} alt="user linkedin" />
          </a>
        </div>
      </div>
    </section>
  );
}
