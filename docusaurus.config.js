// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Apuntes de Python',
  tagline: 'Técnicas de Programación',
  favicon: '/python/img/py-favicon.png',

  future: {
    v4: true,
  },

  url: 'https://luchourtubey.github.io/',
  baseUrl: '/python/',
  organizationName: 'LuchoUrtubey',
  projectName: 'python',
  trailingSlash: false,   // para github pages
  onBrokenLinks: 'warn',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          //editUrl:
          //  'https://github.com/luchourtubey/python/tree/main/',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],  
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Apuntes de Python',
        logo: {
          alt: 'Python Logo',
          src: '/python/img/py-logo.png',
        },
        items: [
          {
            type: 'docSidebar',     // Le dice que controle la barra lateral
            sidebarId: 'tutorialSidebar', // El ID de tu barra lateral (de sidebars.js)
            position: 'left',
            label: 'Contenido',
            className: 'mobile-sidebar-toggle',   // El texto que tendrá el enlace
          },
          {
            href: 'https://luchourtubey.github.io/', // Tu web principal
            label: 'Otros Apuntes',
            position: 'left',
            className: 'navbar-link-extra-margin',
          },
          {
            type: 'html',
            position: 'left',
            value: `
              <a href="https://github.com/luchourtubey" target="_blank" rel="noopener noreferrer" class="navbar-github-icon">
                <img src="/python/img/github.svg" alt="Repositorio en GitHub" width="24" height="24" />
              </a>
            `,
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/unidad-01/requisitos',
              },
            ],
          },
          {
            title: 'Mis Redes',
            items: [
           {
              html: `
              <div class="social-icons-container">
                  <a href="https://github.com/LuchoUrtubey" target="_blank" rel="noreferrer noopener" aria-label="GitHub icon">
                    <img src="/python/img/github.svg" alt="GitHUb icon" height="36" />
                  </a>
                  <a href="https://www.youtube.com/@luchourtubey" target="_blank" rel="noreferrer noopener" aria-label="Youtube icon">
                    <img src="/python/img/youtube-icon.svg" alt="Youtube icon" height="36" />
                  </a>
                  <a href="https://www.twitch.tv/luchourtubey" target="_blank" rel="noreferrer noopener" aria-label="Twitch icon">
                    <img src="/python/img/twitch-icon.svg" alt="Twitch icon" height="36" />
                  </a>
                  <a href="https://www.linkedin.com/in/luisgerardourtubey" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn icon">
                    <img src="/python/img/linkedin-tile.svg" alt="LinkedIn icon" height="36" />
                  </a>
              </div>    
                `,
            },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} code by Lucho Urtubey.`,
      },
      docs: { 
        sidebar: { 
          hideable: true, 
          autoCollapseCategories: true 
        } 
      },
      prism: {
        theme: prismThemes.dracula,
        darkTheme: prismThemes.dracula,
        additionalLanguages: [
          'php', 
          'typescript', 
          'jsx', 
          'tsx', 
          'json', 
          'sql', 
          'markdown',
          'yaml',
          'bash',
        ],
      },
    }),
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ], 
};

export default config;
