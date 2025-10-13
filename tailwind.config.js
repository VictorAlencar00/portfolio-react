/** @type {import('tailwindcss').Config} */
module.exports = {
  // O seu "content" está um pouco repetitivo. Podemos simplificar para pegar tudo dentro de src.
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      // ADICIONADO: Família de fontes para usar globalmente
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      // Suas cores existentes + a cor do Angular
      colors: {
        aboutBg: 'rgb(45, 45, 45)',
        darkGrayBg: 'rgb(25, 25, 25)',
        grayBg: 'rgb(33, 33, 33)',
        softGrayBg: 'rgb(33, 33, 32)',
        softWhite: '#f0f0f0',
        darkPurple: '#001848',
        lightPurple: '#301860',
        spaceColor: '#08060A',
        angularColor: '#dd0031', // ADICIONADO: Cor para o texto do Angular
      },
      // Suas sombras customizadas (pode manter)
      boxShadow: {
        aboutContentBoxShadow: '0px 0px 10px 3px rgb(13, 12, 12)',
      },
      // Suas alturas e larguras fixas (pode manter para componentes antigos)
      height: {
        projectHeight: '460px',
        projectMdHeight: '598px',
        aboutHeight: '400px',
        '100vh': '100vh',
        '70vh': '70vh',
        '374px': '374px',
      },
      width: {
        projectMdWidth: '499px',
        aboutWidth: '900px',
        '100vw': '100vw',
        '374px': '374px',
        '70vw': '70vw',
      },
    },
  },
  plugins: [],
};
