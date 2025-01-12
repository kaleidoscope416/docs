import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "kaleidoscop416",
  description: "a vitepress web",
  base: "/docs/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: {
      '/CN':{
        text: 'CN',link: '/CN/chapter 1.md'
      },
      '/rust':{
        text: 'rust',link: '/rust/1.md'
      }
    },

    sidebar: {
      '/CN':{
        text: 'CN',
        items: [
          { text: 'chapter 1', link: '/CN/chapter 1.md'},
        {text: 'chapter 2', link: '/CN/chapter 2.md'}
           
        ]
      },
      '/rust':{
        text: 'rust',
        items: [
          { text: '1', link: '/rust/1.md'},
        {text: '2', link: '/rust/2.md'}
           
        ]
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kaleidoscope416' }
    ],
    footer:{
      copyright: "Copyright @ 2025 kaleido"
    }
    
  }
 
})
