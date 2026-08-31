import gamestore from './imgs/gamestore.png';
import netflix from './imgs/netflix_gamified.png';
import trainee from './imgs/trainee.png';
import ProjectCard from './ProjectCard';
import {
  BanknotesIcon,
  ChartBarIcon,
  ChatBubbleLeftRightIcon,
  CheckBadgeIcon,
  CreditCardIcon,
  DevicePhoneMobileIcon,
  LinkIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

const nexusFeatures = [
  {
    title: 'Controle financeiro',
    description:
      'Faturamento esperado, recebido e inadimplência em uma visão clara.',
    icon: BanknotesIcon,
  },
  {
    title: 'Cobrança via WhatsApp',
    description:
      'Mensagens amigáveis de cobrança geradas com apenas um clique.',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    title: 'Gestão de alunos',
    description:
      'Cadastros, filtros, planos, modalidades e status sempre organizados.',
    icon: UserGroupIcon,
  },
  {
    title: 'Métricas e relatórios',
    description: 'Gráficos de retenção de alunos e evolução da receita.',
    icon: ChartBarIcon,
  },
  {
    title: 'Integração Mercado Pago',
    description:
      'Pagamentos via PIX ou cartão com baixa automática no sistema.',
    icon: CreditCardIcon,
  },
  {
    title: 'Link de auto-cadastro',
    description: 'O aluno se matricula pelo celular e o gestor apenas aprova.',
    icon: LinkIcon,
  },
  {
    title: 'Bolsas e múltiplos planos',
    description:
      'Descontos, bolsistas, professores e modalidades sem limitações.',
    icon: CheckBadgeIcon,
  },
  {
    title: '100% mobile-first',
    description: 'Feito para funcionar no tatame, na recepção ou em casa.',
    icon: DevicePhoneMobileIcon,
  },
];

const projectData = [
  {
    title: 'Gamestore',
    image: gamestore,
    label: 'Projeto Angular',
    description:
      'Experiência inspirada na Epic Games, com catálogo de jogos, simulação visual de compra e favoritos persistidos em cache.',
    stack: ['Angular', 'TypeScript', 'Responsivo'],
    repoLink: 'https://github.com/VictorAlencar00/angular-gamestore',
    liveLink: 'https://angular-gamestore.vercel.app/',
  },
  {
    title: 'Trainee',
    image: trainee,
    label: 'Projeto inicial',
    description:
      'Interface educacional criada no início da minha jornada para praticar layouts, componentização visual e responsividade.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    repoLink: 'https://github.com/VictorAlencar00/trainee',
    liveLink: null,
  },
  {
    title: 'Netflix Gamified',
    image: netflix,
    label: 'Projeto inicial',
    description:
      'Conceito visual de uma plataforma de streaming gamificada, desenvolvido para aprofundar fundamentos de front-end.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    repoLink: 'https://github.com/VictorAlencar00/netflix-gamified',
    liveLink: null,
  },
];

export default function Projects() {
  return (
    <>
      <section id="nexusfit" className="bg-[#07111f] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
                Projeto em destaque • SaaS
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">
                Nexus<span className="text-emerald-300">FIT</span>
              </h2>
              <p className="mt-5 max-w-2xl text-xl leading-8 text-slate-300">
                Gestão simples e inteligente para academias de artes marciais.
                Um site completo que centraliza alunos, pagamentos, cobranças
                e indicadores em uma experiência pensada para o celular dos alunos.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {['Next.js', 'SaaS', 'Pagamentos', 'Mobile-first'].map(item => (
                  <span
                    key={item}
                    className="rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm font-semibold text-emerald-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <p className="mt-8 max-w-xl leading-7 text-slate-400">
                Desenvolvido a partir de um problema real: reduzir o trabalho
                manual de gestores e permitir que eles foquem no crescimento da
                academia e na experiência dos alunos.
              </p>
            </div>

            <div className="rounded-[2rem] border border-emerald-300/20 bg-gradient-to-br from-emerald-300/10 to-cyan-300/5 p-5">
              <div className="flex aspect-[4/3] flex-col items-center justify-center rounded-[1.45rem] border border-dashed border-emerald-200/30 bg-[#0a1626] px-8 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-300 text-xl font-black text-[#07111f]">
                  NF
                </span>
                <p className="mt-6 font-semibold text-white">
                  Prévia do NexusFIT
                </p>
                <p className="mt-2 max-w-xs text-sm leading-6 text-slate-400">
                  Espaço preparado para receber as imagens reais do dashboard e
                  da experiência mobile.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {nexusFeatures.map(feature => {
              const Icon = feature.icon;
              return (
                <article
                  key={feature.title}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition hover:-translate-y-1 hover:border-emerald-300/30"
                >
                  <Icon
                    className="h-7 w-7 text-emerald-300"
                    aria-hidden="true"
                  />
                  <h3 className="mt-4 font-bold text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="projects" className="bg-[#0a1626] px-6 py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-300">
              Evolução técnica
            </p>
            <h2 className="mt-4 text-4xl font-bold text-white">
              Outros projetos
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              Uma seleção que mostra minha evolução dos fundamentos do front-end
              à construção de experiências com Angular.
            </p>
          </div>
          <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {projectData.map(project => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
