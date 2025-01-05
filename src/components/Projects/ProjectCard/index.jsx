import React from 'react';

const ProjectCard = ({ title, image, repoLink, liveLink }) => {
  return (
    <div className="bg-grayBg w-80 h-96 md:w-projectMdWidth md:h-projectMdHeight lg:w-96 lg:h-projectHeight gap-2 rounded-3xl flex flex-col items-center justify-center text-white border-4 border-darkGrayBg hover:scale-105 transition-all project">
      <img
        className="w-64 h-64 md:w-374px md:h-374px lg:w-72 lg:h-72 rounded-3xl"
        src={image}
        alt={title}
      />
      <h3 className="text-center text-xl md:text-xl">{title}</h3>
      <div className="flex gap-3 justify-center">
        <a target="_blank" rel="nonopenner referer noreferrer" href={repoLink}>
          <button className="bg-aboutBg text-softWhite h-11 p-3 flex items-center border-darkGrayBg border-solid border-x border-y rounded-3xl cursor-pointer m-1 transition-all hover:border-black hover:bg-softWhite hover:scale hover:text-black hover:scale-110">
            Repositório
          </button>
        </a>
        {liveLink && (
          <a
            target="_blank"
            rel="nonopenner referer noreferrer"
            href={liveLink}
          >
            <button className="bg-aboutBg text-softWhite h-11 p-3 flex items-center border-darkGrayBg border-solid border-x border-y rounded-3xl cursor-pointer m-1 transition-all hover:border-black hover:bg-softWhite hover:scale hover:text-black hover:scale-110">
              Abrir Projeto
            </button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
