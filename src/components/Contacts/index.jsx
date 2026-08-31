import githubIcon from './imgs/githubForWhiteBackground.png';
import gmailIcon from './imgs/gmail-icon.png';

import linkedinIcon from './imgs/icons8-linkedin-48.png';
import whatsappIcon from './imgs/whatsapp-icon.png';

const contactLinks = [
  { name: 'Whatsapp', icon: whatsappIcon, href: 'https://wa.me/61995274573' },
  {
    name: 'LinkedIn',
    icon: linkedinIcon,
    href: 'https://www.linkedin.com/in/victor-de-sousa-alencar-9a80ba244',
  },
  {
    name: 'Gmail',
    icon: gmailIcon,
    href: 'mailto:victordesousaa@gmail.com?subject=Contato%20pelo%20Portfólio',
  },
  {
    name: 'GitHub',
    icon: githubIcon,
    href: 'https://github.com/VictorAlencar00',
  },
];

export default function Contacts() {
  return (
    <section
      id="contacts"
      className="bg-[#07111f] px-6 py-24 text-center lg:px-10"
    >
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-300/10 to-indigo-500/10 px-6 py-14 sm:px-12">
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
          Contato
        </p>
        <h2 className="mt-4 text-4xl font-bold text-white sm:text-5xl">
          Vamos construir algo relevante?
        </h2>
        <p className="mx-auto mb-10 mt-5 max-w-2xl leading-7 text-slate-300">
          Estou aberto a projetos, oportunidades e conversas sobre produtos
          digitais. Escolha o canal mais conveniente para você.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {contactLinks.map(contact => (
            <a
              key={contact.name}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:border-cyan-300/50 hover:bg-white/10 sm:w-auto sm:min-w-[180px]"
            >
              <img
                className="w-7 h-7"
                src={contact.icon}
                alt={`${contact.name} icon`}
              />
              <span>{contact.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
