<template>
  <div class="app">
    <header class="app__header">
      <p-header-background />
      <p-logo class="app__logo" />
    </header>
    <main class="app__main">
      <router-view />
    </main>
  </div>
</template>

<script>
import { PLogo } from '@/components/PLogo'
import { PHeaderBackground } from '@/components/PHeaderBackground'

export default {
  name: 'app',
  components: {
    PLogo,
    PHeaderBackground
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';

.app {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 100%;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 20%,
    rgba(255, 255, 255, 1) 50%,
    rgba(255, 255, 255, 1) 80%,
    rgba(255, 255, 255, 0) 100%
  );
  overflow: hidden;
  min-height: 100vh;

  .app__header {
    grid-area: 1 / 1 / 2 / 2;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    min-height: 346.31px;
    width: 100vw;
    margin-bottom: 60px;

    .app__logo {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100vw;
      margin-right: 12vw;
      svg {
        width: 80vw;
        max-width: 736px;
        position: relative;
        // margin-right: 225px;
        z-index: 10;
      }
    }
  }

  .app__main {
    grid-area: 2 / 1 / 3 / 2;
    position: relative;
    justify-content: center;
    align-items: flex-start;
    display: flex;
  }
}
</style>
