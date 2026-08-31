const ProjectCard = ({
  title,
  image,
  repoLink,
  liveLink,
  description,
  stack,
  label,
}) => {
  return (
    <article className="overflow-hidden rounded-3xl border border-white/10 bg-[#101f31] shadow-xl">
      <img
        className="aspect-video w-full object-cover"
        src={image}
        alt={`Imagem do projeto ${title}`}
      />
      <div className="p-6">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
          {label}
        </p>
        <h3 className="mt-2 text-2xl font-bold text-white">{title}</h3>
        <p className="mt-3 min-h-[72px] leading-6 text-slate-300">
          {description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {stack.map(item => (
            <span
              key={item}
              className="rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={repoLink}
            className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-[#07111f]"
          >
            Repositório
          </a>
          {liveLink && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={liveLink}
              className="rounded-full bg-cyan-300 px-5 py-2 text-sm font-bold text-[#07111f] transition hover:bg-cyan-200"
            >
              Ver Projeto
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
