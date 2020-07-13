<template>
  <div class="app">
    <img
      src="@/assets/img/pastel-paralax.png"
      class="app__paralax hide-xs hide-sm hide-md hide-lg"
    />
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
  },

  mounted() {
    window.addEventListener('mousemove', e => {
      const { screenX } = e
      const { width } = window.screen

      document.querySelector(
        '.app__paralax'
      ).style.transform = `translateX(${(screenX / width) * 40}px)`

      document.querySelector(
        '.form__pasteis'
      ).style.transform = `translateX(-${(screenX / width) * 20}px)`
    })
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

  .app__paralax {
    position: absolute;
    z-index: 100;
    width: 30vw;
    clip-path: polygon(52% 10%, 81% 35%, 47% 91%, 14% 60%);
  }

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
