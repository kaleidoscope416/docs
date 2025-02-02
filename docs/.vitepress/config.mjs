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
      '/rustlings':{
        text: 'rustlings',link: '/rustlings/variable.md'
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
        text: 'rustlings',
        items: [
        { text: 'variable', link: '/rustlings/variable.md'},
        {text: 'function', link: '/rustlings/function.md'},
        {text: 'if', link: '/rustlings/if.md'} ,
        {text: 'primitive-types', link: '/rustlings/primitive-types.md'},
        {text: 'move_semantics', link: '/rustlings/move_semantics.md'} ,
        {text: 'vector', link: '/rustlings/vec.md'} ,
        {text: 'struct', link: '/rustlings/struct.md'} ,
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
