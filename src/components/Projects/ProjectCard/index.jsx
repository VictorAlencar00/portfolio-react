const ProjectCard = ({ title, image, repoLink, liveLink }) => {
  return (
    <div className="group relative w-full h-80 rounded-2xl overflow-hidden shadow-lg border-2 border-gray-700/50">
      <img
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        src={image}
        alt={`Imagem do projeto ${title}`}
      />
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center gap-4 p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <div className="flex gap-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={repoLink}
            className="bg-gray-800 text-white py-2 px-5 rounded-full hover:bg-white hover:text-black transition-colors duration-300"
          >
            Repositório
          </a>
          {liveLink && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={liveLink}
              className="bg-cyan-500 text-white py-2 px-5 rounded-full hover:bg-cyan-400 transition-colors duration-300"
            >
              Ver Projeto
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
