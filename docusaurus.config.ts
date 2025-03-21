import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Chain Masters',
  tagline: "Building Africa's Blockchain Future",
  favicon: 'img/masters.png',

  // Set the production url of your site here
  url: 'https://Chain-Master-s.github.io',
  baseUrl: '/documentation/',

  // GitHub pages deployment config
  organizationName: 'Chain-Master-s',
  projectName: 'documentation',

  onBrokenLinks: 'warn' as const,
  onBrokenMarkdownLinks: 'warn' as const,

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/Chain-Master-s/documentation/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/Chain-Master-s/documentation/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/banner.png',
    navbar: {
      title: 'Chain Masters',
      logo: {
        alt: 'Chain Masters Logo',
        src: 'img/masters.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/docs/rust-learning/week1-ownership',
          label: 'Rust Course',
          position: 'left',
        },
        {
          to: '/docs/blockchain/networking',
          label: 'Blockchain',
          position: 'left',
        },
        {
          to: '/blog',
          label: 'Updates',
          position: 'left',
        },
        {
          href: 'https://github.com/Chain-Master-s',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started',
            },
            {
              label: 'Rust Course',
              to: '/docs/rust-learning/week1-ownership',
            },
            {
              label: 'Blockchain',
              to: '/docs/blockchain/networking',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/chainmasters',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/chainmasters',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Chain-Master-s',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Chain Masters. Building Africa's Blockchain Future.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
} satisfies Config;

export default config;