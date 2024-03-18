/* eslint-disable prettier/prettier */
export default function Home() {
  return (
    <section id="home">
      <img class="home-picture" src="profileImage.jpg" alt="" />
      <div class="home_info">
        <div class="info_description">
          <p>Olá, me chamo</p>
          <h2>Victor de S. Alencar</h2>
          <h3>
            Desenvolvedor <span>Front-End</span>
          </h3>
        </div>
        <div class="info_buttons">
          <button>Baixar Currículo</button>
          <button>Contato</button>
        </div>
        <div class="info_redirect">
          <a href="https://github.com/VictorAlencar00">
            <img src="/imgs/githubIcon.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/victor-alencar-9a80ba244/">
            <img src="src/imgs/linkedinIcon.png" alt="" />
          </a>
        </div>
      </div>
    </section>
  );
}
