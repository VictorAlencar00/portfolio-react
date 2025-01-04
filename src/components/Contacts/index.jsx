import gmailIcon from './imgs/gmail-icon.png';
import whatsappIcon from './imgs/whatsapp-icon.png';
import linkedinIcon from './imgs/icons8-linkedin-48.png';
import githubIcon from './imgs/githubIcon.png';
import telegramIcon from './imgs/telegram-logo.png';

export default function Contacts() {
  return (
    <section
      id="contacts"
      className="flex flex-col justify-center items-center gap-10 bg-softGrayBg p-14 h-full"
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://wa.me/61995274573"
        className="flex items-center gap-3 bg-aboutBg p-2 w-70vw sm:w-96 rounded-md justify-center hover:scale-110 transition-all"
      >
        <img className="w-9" src={whatsappIcon} alt="" /> Whatsapp
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/victor-de-sousa-alencar-9a80ba244"
        className="flex items-center gap-3 bg-aboutBg p-2 w-70vw sm:w-96 rounded-md justify-center hover:scale-110 transition-all"
      >
        <img className="w-9" src={linkedinIcon} alt="" /> Linkedin
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="mailto:victordesousaa@gmail.com?subject=Contratação&body="
        className="flex items-center gap-3 bg-aboutBg p-2 w-70vw sm:w-96 rounded-md justify-center hover:scale-110 transition-all"
      >
        <img className="w-9" src={gmailIcon} alt="" /> Gmail
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/VictorAlencar00"
        className="flex items-center gap-3 bg-aboutBg p-2 w-70vw sm:w-96 rounded-md justify-center hover:scale-110 transition-all"
      >
        <img className="w-9" src={githubIcon} alt="" /> Github
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://t.me/victoralencar00?phone=61995274573"
        className="flex items-center gap-3 bg-aboutBg p-2 w-70vw sm:w-96 rounded-md justify-center hover:scale-110 transition-all"
      >
        <img className="w-9" src={telegramIcon} alt="" /> Telegram
      </a>
    </section>
  );
}
