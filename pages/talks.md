---
title: Talks - Anthony Fu
display: ''
plum: true
items:
  - title: 'ViteConf 2023 / TBA'
    date: '2023-10-05'
    path: 'https://viteconf.org/23/'
  - title: 'Nuxt Nation 2023 / TBA'
    date: '2023-10-18'
    path: 'https://nuxtnation.com/'
  - title: 'Vue Fes Japan 2023 / In Person / TBA'
    date: '2023-10-25'
    inperson: true
    path: 'https://vuefes.jp/2023/'
---

<!-- <SubNav /> -->

<div slide-enter>
  <div i-ri:presentation-line mr-1 />
  <RouterLink to="/giving-talks" op50>Available for giving talks!</RouterLink>
</div>

<ListPosts type="talk" :extra="frontmatter.items" />
