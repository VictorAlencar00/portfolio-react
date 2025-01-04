import milao from './imgs/milao.png';
import netflix from './imgs/netflix_gamified.png';
import trainee from './imgs/trainee.png';

export default function Projects() {
  return (
    <section
      id="projects"
      className="flex flex-col items-center p-3  bg-gradient-to-b from-darkPurple to-lightPurple md:pb-9 lg:pb-0"
    >
      <div className="w-52 text-center text-3xl p-6">
        <h1>Meus Projetos</h1>
      </div>
      <nav class="h-full flex flex-col md:flex lg:flex-row gap-12 justify-center items-center">
        <div className="bg-grayBg w-80 h-96 md:w-projectMdWidth md:h-projectMdHeight lg:w-96 lg:h-projectHeight gap-2 rounded-3xl flex flex-col items-center justify-center text-white border-4 border-darkGrayBg hover:scale-110 transition-all project">
          <img
            className="w-64 h-64 md:w-374px md:h-374px lg:w-72 lg:h-72 rounded-3xl"
            src={trainee}
            alt=""
          />
          <h3 className="text-center text-xl md:text-2xl">Trainee</h3>
          <div className="flex gap-3">
            <a
              target="_blank"
              rel="nonopenner referer noreferrer"
              href="https://github.com/VictorAlencar00/trainee"
            >
              {' '}
              <button className="bg-aboutBg text-softWhite h-11 p-3 flex items-center border-darkGrayBg border-solid border-x border-y rounded-3xl cursor-pointer m-1 transition-all hover:border-black hover:bg-softWhite hover:scale hover:text-black hover:scale-110">
                Repositório
              </button>
            </a>
          </div>
        </div>
        <div className="bg-grayBg w-80 h-96 md:w-projectMdWidth md:h-projectMdHeight lg:w-96 lg:h-projectHeight gap-2 rounded-3xl flex flex-col items-center justify-center text-white border-4 border-darkGrayBg hover:scale-110 transition-all project">
          <img
            className="w-64 h-64 md:w-374px md:h-374px lg:w-72 lg:h-72 rounded-3xl"
            src={netflix}
            alt=""
          />
          <h3 className="text-center text-xl md:text-2xl">Netflix</h3>
          <div className="flex gap-3">
            <a
              target="_blank"
              rel="nonopenner referer noreferrer"
              href="https://github.com/VictorAlencar00/netflix-gamified"
            >
              {' '}
              <button className="bg-aboutBg text-softWhite h-11 p-3 flex items-center border-darkGrayBg border-solid border-x border-y rounded-3xl cursor-pointer m-1 transition-all hover:border-black hover:bg-softWhite hover:scale hover:text-black hover:scale-110">
                Repositório
              </button>
            </a>
          </div>
        </div>
        <div className="bg-grayBg w-80 h-96 md:w-projectMdWidth md:h-projectMdHeight lg:w-96 lg:h-projectHeight gap-2 rounded-3xl flex flex-col items-center justify-center text-white border-4 border-darkGrayBg hover:scale-110 transition-all project">
          <img
            className="w-64 h-64 md:w-374px md:h-374px lg:w-72 lg:h-72 rounded-3xl"
            src={milao}
            alt=""
          />
          <h3 className="text-center text-xl md:text-2xl">Milao</h3>
          <div className="flex gap-3">
            <a
              target="_blank"
              rel="nonopenner referer noreferrer"
              href="https://github.com/VictorAlencar00/milao"
            >
              {' '}
              <button className="bg-aboutBg text-softWhite h-11 p-3 flex items-center border-darkGrayBg border-solid border-x border-y rounded-3xl cursor-pointer m-1 transition-all hover:border-black hover:bg-softWhite hover:scale hover:text-black hover:scale-110">
                Repositório
              </button>
            </a>
          </div>
        </div>
      </nav>
    </section>
  );
}
