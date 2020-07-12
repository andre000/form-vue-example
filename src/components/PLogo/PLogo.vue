<template>
  <figure>
    <logo />
  </figure>
</template>

<script>
import Logo from '@/assets/img/Logo.svg'

export default {
  components: {
    Logo
  }
}
</script>

<style scoped lang="scss">
@import '@/assets/scss/variables.scss';

@media #{$screen-xs} {
  .logo-type {
    transform: translateX(-60px);
  }
}

.ae {
  fill: #ea473c;
}

.a {
  fill: #9e341d;
}

.b {
  fill: #fbca28;
}

.bi {
  fill: #5a5e69;
}

.ap {
  fill: #565a64;
}

.l,
.o,
.n {
  fill: #ecad28;
}

.logo-mascot__left-hand {
  animation: wave-hand 2s ease-in-out infinite alternate;
}

@keyframes wave-hand {
  0% {
    transform: translate(0px, 0px) rotate(0deg);
  }
  100% {
    transform: translate(15px, -11px) rotate(6deg);
  }
}
</style>
