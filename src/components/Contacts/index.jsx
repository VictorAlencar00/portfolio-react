import githubIcon from './imgs/githubForWhiteBackground.png';
import gmailIcon from './imgs/gmail-icon.png';

import linkedinIcon from './imgs/icons8-linkedin-48.png';
import telegramIcon from './imgs/telegram-logo.png';
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
  {
    name: 'Telegram',
    icon: telegramIcon,
    href: 'https://t.me/victoralencar00',
  },
];

export default function Contacts() {
  return (
    <section id="contacts" className="py-24 px-6 bg-gray-100 text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Entre em Contato
        </h2>
        <p className="text-gray-600 mb-12 max-w-lg mx-auto">
          Estou disponível para novas oportunidades e colaborações. Sinta-se à
          vontade para me contatar através dos canais abaixo.
        </p>
        <div className="flex flex-wrap justify-center gap-5">
          {contactLinks.map(contact => (
            <a
              key={contact.name}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white py-3 px-6 w-full sm:w-auto sm:min-w-[200px] justify-center rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all text-gray-700 font-semibold border"
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
