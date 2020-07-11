<template>
  <svg xmlns="http://www.w3.org/2000/svg" height="546.316" class="background">
    <path class="a" :d="path" transform="translate(0 1.579)" />
  </svg>
</template>

<script>
export default {
  data: () => ({
    path:
      'M0,544.737C337.9,366.316,1196.843,568.421,1920,300c1.579,0,0-301.579,0-301.579H0Z'
  }),

  mounted() {
    this.path = this.resizedPath()
    window.addEventListener('resize', () => {
      this.path = this.resizedPath()
    })
  },

  methods: {
    resizedPath() {
      const { width } = window.screen
      return `M0,544.737C337.9,366.316,1196.843,568.421,${width},300c1.579,0,0-301.579,0-301.579H0Z`
    }
  }
}
</script>

<style lang="scss" scoped>
.background {
  position: absolute;
  width: 100vw;
  top: 0;
  left: 0;
}

.a {
  fill: #e43636;
}
</style>
