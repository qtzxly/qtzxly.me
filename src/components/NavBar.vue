<script setup lang="ts">
function toTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

const { y: scroll } = useWindowScroll()
</script>

<template>
  <header class="header z-40">
    <RouterLink
      class="w-12 h-12 absolute xl:fixed m-5 select-none outline-none"
      to="/"
      focusable="false"
    >
      <Logo />
    </RouterLink>
    <button
      title="Scroll to top"
      fixed
      right-3
      bottom-3
      w-10
      h-10
      hover:op100
      rounded-full
      hover-bg-hex-8883
      transition
      duration-300
      z-100
      print:hidden
      :class="scroll > 300 ? 'op30' : 'op0! pointer-events-none'"
      @click="toTop()"
    >
      <div i-ri-arrow-up-line />
    </button>
    <nav class="nav">
      <div class="spacer" />
      <div class="right" print:op0>
        <RouterLink to="/posts" title="Blog">
          <span class="lt-md:hidden">Blog</span>
          <div i-line-md-text-box-multiple md:hidden />
        </RouterLink>

        <!-- <RouterLink to="/projects" title="Projects">
          <span class="lt-md:hidden">Projects</span>
          <div i-line-md-laptop class="md:hidden" />
        </RouterLink>
        <RouterLink to="/talks" title="Talks">
          <span class="lt-md:hidden">Talks</span>
          <div i-line-md-emoji-grin class="md:hidden" />
        </RouterLink>

        <RouterLink to="/podcasts" title="Podcasts">
          <span class="lt-md:hidden">Podcasts</span>
          <div i-line-md-marker class="md:hidden" />
        </RouterLink>

        <RouterLink to="/streams" title="streams">
          <span class="lt-md:hidden">Streams</span>
          <div i-line-md-play class="md:hidden" />
        </RouterLink> -->
        <!-- 
        <RouterLink to="/demos" title="Demos">
          <span class="lt-md:hidden">Demos</span>
          <div i-line-md-lightbulb class="md:hidden" />
        </RouterLink> -->

        <!-- <RouterLink to="/chat" title="Let's Chat">
          <div i-ri-chat-1-line />
        </RouterLink>
        <RouterLink to="/sponsors-list" title="Sponsors">
          <div i-ri-user-heart-line />
        </RouterLink>
        <a
          href="https://twitter.com/antfu7"
          target="_blank"
          title="Twitter"
          class="lt-md:hidden"
        >
          <feather-twitter />
        </a>
        <a
          href="https://github.com/antfu"
          target="_blank"
          title="GitHub"
          class="lt-md:hidden"
        >
          <div i-uil-github-alt />
        </a>
        <a href="/feed.xml" target="_blank" title="RSS" class="lt-md:hidden">
          <div
            i-la-rss-square
            style="font-size: 1.25rem; margin: 0 -0.125rem"
          />
        </a> -->
        <toggle-theme />
      </div>
    </nav>
  </header>
</template>

<style scoped>
.header h1 {
  margin-bottom: 0;
}

.logo {
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
}

.nav {
  padding: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: auto max-content;
  box-sizing: border-box;
}

.nav > * {
  margin: auto;
}

.nav img {
  margin-bottom: 0;
}

.nav a {
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: opacity 0.2s ease;
  opacity: 0.6;
  outline: none;
}

.nav a:hover {
  opacity: 1;
  text-decoration-color: inherit;
}

.nav .right {
  display: grid;
  grid-gap: 1.2rem;
  grid-auto-flow: column;
}

.nav .right > * {
  margin: auto;
}
</style>
