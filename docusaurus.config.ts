import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Pipe Runner Dot Files",
  tagline: "My personal dot files for Ubuntu post install",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://lab.piperunner.in",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Pipe Runner Lab", // Usually your GitHub org/user name.
  projectName: "dotfiles", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ["rss", "atom"],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: "warn",
        //   onInlineAuthors: "warn",
        //   onUntruncatedBlogPosts: "warn",
        // },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Dot Files",
      logo: {
        alt: "Pipe Runner Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "defaultSideBar",
          position: "left",
          label: "Guide",
        },
        {
          href: "https://github.com/Pipe-Runner-Lab/dotfiles",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Guide",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "X",
              href: "https://x.com/pipe_runner",
            },
            {
              label: "LinkedIn",
              href: "https://www.linkedin.com/in/piperunner/",
            },
            {
              label: "Youtube",
              href: "https://www.youtube.com/@pipe_runner_lab",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Personal Website",
              to: "https://piperunner.in",
            },
            {
              label: "GitHub",
              href: "https://github.com/Pipe-Runner-Lab",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Pipe Runner Lab`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
