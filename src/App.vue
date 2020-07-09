<template>
  <div>
    <header>
      <p-logo />
    </header>
    <main id="app">
      <router-view />
    </main>
  </div>
</template>

<script>
import { PLogo } from '@/components/PLogo'

export default {
  name: 'app',
  components: {
    PLogo
  }
}
</script>

<style lang="scss"></style>
