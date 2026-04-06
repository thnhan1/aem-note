import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'AEM Developer Notes',
  description: 'AEM 6.5 On-Premise — Technical notes for backend developers',
  lang: 'vi',

  base: '/aem-note/',

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
        text: 'Content & Data',
        collapsed: false,
        items: [
          { text: 'AEM Query Builder', link: '/query-builder/content-and-data/1.aem-query-builder' },
          { text: 'Query Builder Notes', link: '/query-builder/content-and-data/2.query-builder-note' },
          { text: 'Node Operations', link: '/query-builder/content-and-data/node-operation' },
          { text: 'Replication & Activation', link: '/query-builder/content-and-data/replication-activation' },
          { text: 'Content Fragments', link: '/query-builder/content-and-data/content-fragment' },
          { text: 'Tags & Taxonomies', link: '/query-builder/content-and-data/tags-taxonomies' },
        ],
      },
      {
        text: 'Backend',
        collapsed: false,
        items: [
          { text: 'OSGi Configuration', link: '/query-builder/backend/osgi-configuration' },
          { text: 'Servlets', link: '/query-builder/backend/servlets' },
          { text: 'Workflows', link: '/query-builder/backend/workflows' },
          { text: 'ACL & Permissions', link: '/query-builder/backend/acl-permissions' },
        ],
      },
      {
        text: 'Groovy Console',
        collapsed: false,
        items: [
          { text: 'Groovy Console', link: '/query-builder/groovy-console/groovy-console' },
        ],
      },
      {
        text: 'UI',
        collapsed: false,
        items: [
          { text: 'Coral UI', link: '/query-builder/ui/coral-ui' },
        ],
      },
      {
        text: 'Meta',
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
      dark: 'github-dark',
    },
    lineNumbers: true,
  },
})
