import reactIcon from './imgs/react-icon.png';
import gitIcon from './imgs/giticon.png';
import htmlIcon from './imgs/htmlicon.png';
import javascriptIcon from './imgs/jsnewicon.png';
import cssIcon from './imgs/cssicon.png';
import tailwindIcon from './imgs/tailwind-logo.png'

export default function About() {
  return (
    <section id='about' className='flex items-center justify-center bg-gradient-to-br from-black to-aboutBg'>
        <div className="flex flex-col content-between bg-grayBg shadow-aboutContentShadow p-12 rounded-3xl shadow-aboutContentBoxShadow gap-14"
        style={{width: '900px', height: '400px'}}>
          <div class="">
            Sou um desenvolvedor FrontEnd cursante de Análise e Desenvolvimento
            de sistemas, com conclusão em julho de 2025.
            <br></br>
            Comecei os meus estudos em 2023, fiz cursos, aprendi e utilizei em
            grupo os meus conhecimentos em HTML, CSS e Javascript. Agora, busco
            estudar React e suas bibliotecas, para aprimorar a eficácia e
            funcionamento das minhas aplicações.
          </div>
          <div class="w-full text-center flex flex-col gap-4">
            <span>Meus conhecimentos:</span>
            <div className="w-full justify-center flex gap-2">
              <a target="_blank" href="https://developer.mozilla.org/pt-BR/docs/Web/HTML" rel="nonopenner referer noreferrer">
                <img className='w-10 h-10 hover:scale-125 transition-all' src={htmlIcon} alt="HTML logo" />
              </a>
              <a target="_blank" href="https://developer.mozilla.org/pt-BR/docs/Web/CSS" rel="nonopenner referer noreferrer">
                <img className='w-10 h-10 hover:scale-125 transition-all' src={cssIcon} alt="CSS Logo" />
              </a>
              <a target="_blank" href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript" rel="nonopenner referer noreferrer">
                <img className='w-10 h-10 hover:scale-125 transition-all' src={javascriptIcon} alt="Javascript Logo" />
              </a>
              <a target="_blank" href="https://git-scm.com" rel="nonopenner referer noreferrer">
                <img className='w-10 h-10 hover:scale-125 transition-all' src={gitIcon} alt="Git Logo" />
              </a>
              <a target="_blank" href="https://tailwindcss.com" rel="nonopenner referer noreferrer">
                <img className='h-10 w-13 p-1 hover:scale-125 transition-all' src={tailwindIcon} alt="Tailwind Logo" />
              </a>
              <a target="_blank" href="https://react.dev" rel="nonopenner referer noreferrer" >
                <img className='h-9 w-10 hover:scale-125 transition-all' src={reactIcon} alt="React Logo" />
              </a>
            </div>
          </div>
        </div>
    </section>
  );
}
