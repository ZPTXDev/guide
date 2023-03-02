// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const organizationName = "ZPTXDev";
const projectName = "guide";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ZPTX Guide',
  tagline: 'Guide for ZPTX bots',
  favicon: 'img/favicon.png',

  // Set the production url of your site here
  url: `https://guide.zptx.dev`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: `/`,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName, // Usually your GitHub org/user name.
  projectName, // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'af', 'ar', 'bg', 'ca', 'ceb', 'zh', 'hr', 'cs', 'da', 'nl', 'fil', 'fi', 'fr', 'de', 'el', 'he', 'hi', 'hu', 'it', 'ja', 'ko', 'lt', 'no', 'pl', 'pt', 'ro', 'ru', 'es', 'sv', 'th', 'tr', 'uk', 'vi'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            `https://github.com/${organizationName}/${projectName}/edit/master/`,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/social-card.png',
      navbar: {
        title: 'ZPTX Guide',
        logo: {
          alt: 'ZPTX Logo',
          src: 'img/logo.svg',
        },
        items: [
          { to: "https://devguide.zptx.dev", label: "ZPTX DevGuide", position: "left" },
          {
            href: 'https://github.com/ZPTXDev/guide',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          }
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: true,
      }
    }),
};

module.exports = config;
