import gmailIcon from './imgs/gmail-icon.png'
import whatsappIcon from './imgs/whatsapp-icon.png'
import linkedinIcon from './imgs/icons8-linkedin-48.png'
import githubIcon from './imgs/githubIcon.png'
import telegramIcon from './imgs/telegram-logo.png'

export default function Contacts() {
  return (
    <section className="flex flex-col justify-center items-center gap-10 bg-contactsBg p-10 h-full">
      <a href='wait' className='flex items-center gap-3 bg-aboutBg p-2 w-96 rounded-md justify-center'>
        <img className='w-9' src={whatsappIcon} alt="" /> Whatsapp</a>
      <a href='wait' className='flex items-center gap-3 bg-aboutBg p-2 w-96 rounded-md justify-center'>
        <img className='w-9' src={linkedinIcon} alt="" /> Linkedin</a>
      <a href='wait' className='flex items-center gap-3 bg-aboutBg p-2 w-96 rounded-md justify-center'>
        <img className='w-9' src={gmailIcon} alt="" /> Gmail</a>
      <a href='wait' className='flex items-center gap-3 bg-aboutBg p-2 w-96 rounded-md justify-center'>
        <img className='w-9' src={githubIcon} alt="" /> Github</a>
      <a href='wait' className='flex items-center gap-3 bg-aboutBg p-2 w-96 rounded-md justify-center'>
        <img className='w-9' src={telegramIcon} alt="" /> Telegram</a>
    </section>
  );
}
