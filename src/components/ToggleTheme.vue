<script setup lang="ts">
import { toggleDark } from '~/logics'
</script>

<template>
  <a class="select-none" title="Toggle Color Scheme" @click="toggleDark">
    <div
      i-line-md-moon-to-sunny-outline-loop-transition
      dark:i-line-md-moon-alt-loop
    />
  </a>
</template>
