import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'WWUI',
  description: 'vite vue3 element-pluse',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/button.md' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: {
      '/markdown-examples': [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' }
          ]
        }
      ],
      "/components/": [
        {
          text: '基础',
          items: [{ text: 'Button', link: '/components/button.md' }]
        },
        {
          text: '表单',
          items: [{ text: 'Form', link: '/components/form.md' }]
        }
      ]
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }]
  }
});
