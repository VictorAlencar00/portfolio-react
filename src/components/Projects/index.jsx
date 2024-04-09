import milao from './imgs/milao.png';
import netflix from './imgs/netflix_gamified.png';
import trainee from './imgs/trainee.png';

export default function Projects() {
  return (
    <section className='flex flex-col items-center'>
      <div className="w-52 text-center text-3xl p-12">
        <p className="text-lg">Estes são os meus</p>
        <h1>Projetos</h1>
      </div>
      <nav class="h-full flex gap-12 justify-center items-center">
        <div className="bg-grayBg animated_object w-96 h-projectHeight gap-2 rounded-3xl flex flex-col items-center justify-center text-white border-4 border-darkGrayBg">
          <img className="w-11/12 h-2/3 rounded-3xl" src={netflix} alt="" />
          <legend className="text-center text-2xl">Trainee</legend>
          <div className="flex gap-3">
            <a href="1">
              {' '}
              <button className='bg-black text-softWhite h-12 p-3 border-softWhite border-solid border-x border-y rounded-3xl cursor-pointer m-1 transition-all hover:border-black hover:bg-softWhite hover:scale hover:text-black'>Repositório</button>
            </a>
          </div>
        </div>
        <div className="bg-grayBg animated_object w-96 h-projectHeight gap-2 rounded-3xl flex flex-col items-center justify-center text-white border-4 border-darkGrayBg">
          <img className="w-11/12 h-2/3 rounded-3xl" src={trainee} alt="" />
          <legend className="text-center text-2xl ">Netflix</legend>
          <div className="flex gap-3">
            <a href="1">
              {' '}
              <button className='bg-black text-softWhite h-12 p-3 border-softWhite border-solid border-x border-y rounded-3xl cursor-pointer m-1 transition-all hover:border-black hover:bg-softWhite hover:scale hover:text-black'>Repositório</button>
            </a>
          </div>
        </div>
        <div className="bg-grayBg animated_object w-96 h-projectHeight gap-2 rounded-3xl flex flex-col items-center justify-center text-white border-4 border-darkGrayBg">
          <img className="w-11/12 h-2/3 rounded-3xl" src={milao} alt="" />
          <legend className="text-center text-2xl">Milao</legend>
          <div className="flex gap-3">
            <a href="1">
              {' '}
              <button className='bg-black text-softWhite h-12 p-3 border-softWhite border-solid border-x border-y rounded-3xl cursor-pointer m-1 transition-all hover:border-black hover:bg-softWhite hover:scale hover:text-black'>Repositório</button>
            </a>
          </div>
        </div>
      </nav>
    </section>
  );
}
