import githubIcon from './imgs/githubIcon.png';
import linkedinIcon from './imgs/linkedin-icon.png';
import profileImage from './imgs/profileImage.jpg';
export default function Home() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#07111f] px-6 pb-20 pt-32 text-white sm:pt-40 lg:px-10 lg:pb-28"
    >
      <div className="absolute left-1/2 top-0 -z-10 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="max-w-4xl">
          <p className="mb-6 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-cyan-200">
            Desenvolvedor full-stack
          </p>
          <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            Eu construo produtos digitais{' '}
            <span className="text-cyan-300">do problema ao deploy.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Olá, sou o Victor! Transformo processos reais em aplicações
            completas. Como o NexusFIT, meu SaaS para a gestão de academias de
            artes marciais.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#nexusfit"
              className="rounded-full bg-cyan-300 px-7 py-3.5 text-center font-bold text-[#07111f] transition hover:bg-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            >
              Conhecer o NexusFIT
            </a>
            <a
              href="#contacts"
              className="rounded-full border border-white/20 px-7 py-3.5 text-center font-bold text-white transition hover:border-white/50 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Vamos conversar
            </a>
          </div>

          <div className="mt-9 flex items-center gap-5 text-sm text-slate-400">
            <span>Minhas redes:</span>
            <a
              href="https://github.com/VictorAlencar00"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition hover:text-white"
            >
              <img className="h-6 w-6" src={githubIcon} alt="" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/victor-de-sousa-alencar-9a80ba244"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition hover:text-white"
            >
              <img className="h-6 w-6" src={linkedinIcon} alt="" /> LinkedIn
            </a>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-300/25 to-indigo-500/10 blur-2xl" />
          <div className="relative rounded-[2rem] border border-white/15 bg-white/5 p-3 shadow-2xl backdrop-blur">
            <img
              className="aspect-[4/5] w-full rounded-[1.45rem] object-cover object-center"
              src={profileImage}
              alt="Victor Alencar"
            />
            <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/15 bg-[#07111f]/85 p-4 backdrop-blur-xl">
              <p className="text-sm font-semibold text-white">Victor Alencar</p>
              <p className="mt-1 text-xs text-slate-300">
                Next.js • Angular • Java • Spring Boot
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
