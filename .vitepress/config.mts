import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(defineConfig({
  title: 'AEM Developer Notes',
  description: 'AEM 6.5 On-Premise — Technical notes for backend developers translated from Luca Nerlich Blog',
  lang: 'vi',

  base: '/aem-note/',

  lastUpdated: true,

  ignoreDeadLinks: [
    // localhost AEM links trong các file note
    /^http:\/\/localhost/,
  ],

  themeConfig: {
    logo: '/aem-logo.svg',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Content & Data', link: '/query-builder/content-and-data/1.aem-query-builder' },
      { text: 'Backend', link: '/query-builder/backend/osgi-configuration' },
      { text: 'Groovy Console', link: '/query-builder/groovy-console/groovy-console' },
      { text: 'UI', link: '/query-builder/ui/coral-ui' },
      { text: 'Guide', link: '/guide' },
    ],



    sidebar: [
      {
        text: 'Groovy Console',
        collapsed: false,
        items: [
          { text: 'Groovy Console', link: '/query-builder/groovy-console/groovy-console' },
        ],
      },
      {
        text: 'Content & Data',
        collapsed: false,
        items: [
          { text: 'AEM Query Builder', link: '/query-builder/content-and-data/1.aem-query-builder' },
          { text: 'Node Operations', link: '/query-builder/content-and-data/node-operation' },
          { text: 'Query Builder Notes', link: '/query-builder/content-and-data/2.query-builder-note' },
          { text: 'Content Fragments', link: '/query-builder/content-and-data/content-fragment' },
          { text: 'Headless GraphQL', link: '/query-builder/content-and-data/graphql' },
          { text: 'Replication & Activation', link: '/query-builder/content-and-data/replication-activation' },
          { text: 'Multi-Site Manager (MSM)', link: '/query-builder/content-and-data/multi-site-manager-msm' },
          { text: 'Modify & Query JCR', link: '/query-builder/content-and-data/modify-and-query-the-jcr' },
          { text: 'Tags & Taxonomies', link: '/query-builder/content-and-data/tags-taxonomies' },
          { text: 'i18n & Translation', link: '/query-builder/content-and-data/i18n-translation' },
          { text: 'Experience Fragments', link: '/query-builder/content-and-data/experience-fragment' },
        ],
      },
      {
        text: 'Backend',
        collapsed: false,
        items: [
          { text: 'OSGi Configuration', link: '/query-builder/backend/osgi-configuration' },
          { text: 'Servlets', link: '/query-builder/backend/servlets' },
          { text: 'Workflows', link: '/query-builder/backend/workflows' },
        ],
      },

      {
        text: 'UI',
        collapsed: false,
        items: [
          { text: 'Coral UI', link: '/query-builder/ui/coral-ui' },
          { text: 'Extending Responsive Grid', link: '/query-builder/ui/extending-responsive-grid' },
        ],
      },
      {
        text: 'Infrastructure',
        collapsed: false,
        items: [
          { text: 'ACLs and Permissions', link: '/query-builder/infrastructure/acl-permissions' },
        ],
      },
      {
        text: 'Guide',
        collapsed: false,
        items: [
          { text: 'Hướng dẫn thêm note', link: '/guide' },
        ],
      },
    ],

    search: {
      provider: 'local',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com' },
    ],

    editLink: {
      pattern: 'https://github.com/YOUR_USERNAME/aem-note/edit/main/:path',
      text: 'Edit this page on GitHub',
    },

    footer: {
      message: 'AEM 6.5 On-Premise Developer Notes',
      copyright: '© 2026',
    },

    outline: {
      level: [2, 3],
      label: 'On this page',
    },

    docFooter: {
      prev: 'Previous',
      next: 'Next',
    },

  },

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'one-dark-pro',
    },
    lineNumbers: true,
  },

  mermaid: {
    theme: 'neutral',
  },
}))
