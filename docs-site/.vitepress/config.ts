import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Elements UI',
  description: 'An experimental component library exploring AI-assisted development workflows. 49+ React components built by university students with Radix UI and Tailwind CSS.',
  base: '/elements/',
  ignoreDeadLinks: true,

  head: [
    ['link', { rel: 'icon', href: '/elements/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3b82f6' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:locale', content: 'en' }],
    ['meta', { name: 'og:site_name', content: 'Elements UI' }],
    ['meta', { name: 'og:title', content: 'Elements UI - AI-Assisted Component Library Experiment' }],
    ['meta', { name: 'og:description', content: 'A university student project exploring how AI tools like Claude Code can transform open source development. 49+ React components optimized for agentic workflows.' }],
    ['meta', { name: 'og:url', content: 'https://bitbybit-b3.github.io/elements/' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'Elements UI - AI-Assisted Component Library' }],
    ['meta', { name: 'twitter:description', content: 'Experimental React components optimized for AI-assisted workflows with Claude Code, Cursor, and similar tools.' }],
    ['meta', { name: 'keywords', content: 'react, components, tailwind, tailwindcss, ui library, radix ui, typescript, design system, component library, ai assisted, claude code, agentic workflows, automation' }],
    ['meta', { name: 'author', content: 'BitByBit-B3' }],
  ],

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Components', link: '/components/' },
      { text: 'GitHub', link: 'https://github.com/BitByBit-B3/elements' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Usage', link: '/guide/usage' }
          ]
        }
      ],
      '/components/': [
        {
          text: 'Components',
          items: [
            { text: 'Overview', link: '/components/' },
            { text: 'Button', link: '/components/button' },
            { text: 'Card', link: '/components/card' },
            { text: 'Dialog', link: '/components/dialog' },
            { text: 'Form', link: '/components/form' },
            { text: 'Input', link: '/components/input' },
            { text: 'Select', link: '/components/select' },
            { text: 'Table', link: '/components/table' },
            { text: 'All Components', link: '/components/all' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/BitByBit-B3/elements' }
    ],

    footer: {
      message: 'Released under the Apache 2.0 License.',
      copyright: 'Copyright © 2024-present BitByBit-B3'
    },

    search: {
      provider: 'local'
    }
  },

  sitemap: {
    hostname: 'https://bitbybit-b3.github.io/elements/'
  }
})
