/* eslint-disable prettier/prettier */
export default function Projects() {
  return (
    <section id="projects">
      <div class="projects_title">
        <p class="animated_object">Estes são os meus</p>
        <h1 class="animated_object">Projetos</h1>
      </div>
      <nav class="projects_nav">
        <div class="project animated_object">
          <img class="project_img" src="src/imgs/Netflix-new-icon.png" alt="" />
          <legend>Trainee</legend>
          <div class="project_buttons">
            <a href="">
              {' '}
              <button>Repositório</button>
            </a>
            <a href="">
              {' '}
              <button>Live</button>
            </a>
          </div>
        </div>
        <div class="project animated_object">
          <img class="project_img" src="src/imgs/Netflix-new-icon.png" alt="" />
          <legend>Netflix</legend>
          <div class="project_buttons">
            <a href="">
              {' '}
              <button>Repositório</button>
            </a>
            <a href="">
              {' '}
              <button>Live</button>
            </a>
          </div>
        </div>
        <div class="project animated_object">
          <img class="project_img" src="src/imgs/Netflix-new-icon.png" alt="" />
          <legend>Milao</legend>
          <div class="project_buttons">
            <a href="">
              {' '}
              <button>Repositório</button>
            </a>
            <a href="">
              {' '}
              <button>Live</button>
            </a>
          </div>
        </div>
      </nav>
    </section>
  );
}
