<template>
  <div
    class="image-upload"
    @click="handleClick"
    @dragover.stop.prevent="handleDrag"
    @drop.stop.prevent="handleDrop"
  >
    <input
      ref="image-order"
      type="file"
      accept=".png, .jpg, .jpeg"
      name="image-order"
      class="image-upload__input"
      @change="handleUpload"
    />

    <img v-if="image && image.preview" :src="image.preview" alt="" />
  </div>
</template>

<script>
export default {
  name: 'PImageUpload',
  props: {
    image: null
  },

  watch: {
    image() {
      if (this.image === null) {
        this.$refs['image-order'].value = ''
      }
    }
  },

  methods: {
    handleClick() {
      this.$refs['image-order'].click()
    },

    handleDrag() {},

    handleDrop(event) {
      this.$refs['image-order'].files = event.dataTransfer.files
      this.handleUpload()
    },

    handleUpload() {
      if (!this.$refs['image-order'].files.length) return
      this.generatePreview()
    },

    generatePreview() {
      const reader = new FileReader()
      reader.onload = e => {
        this.$emit('upload', {
          preview: e.target.result,
          file: this.$refs['image-order'].files[0]
        })
      }
      reader.readAsDataURL(this.$refs['image-order'].files[0])
    }
  }
}
</script>

<style lang="scss" scoped>
.image-upload {
  height: 100px;
  width: 100px;
  border: 3px dashed red;

  .image-upload__input {
    display: none;
  }
}
</style>
