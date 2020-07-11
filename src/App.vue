<template>
  <div class="app">
    <header class="app__header">
      <background-header class="app__header__background" />
      <p-logo class="app__logo" />
    </header>
    <main class="app__main">
      <router-view />
    </main>
  </div>
</template>

<script>
import { PLogo } from '@/components/PLogo'
import BackgroundHeader from '@/assets/img/wave.svg'

export default {
  name: 'app',
  components: {
    PLogo,
    BackgroundHeader
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';

.app {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  overflow-x: hidden;

  .app__header {
    grid-area: 1 / 1 / 2 / 2;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    min-height: 346.31px;
    width: 100vw;

    .app__logo svg {
      max-width: 736px;
      width: 80vw;
      position: relative;
    }

    .app__header__background {
      position: absolute;
      width: 100vw;
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
