<template>
  <div class="image-upload" @click="handleClick">
    <input
      ref="image-order"
      type="file"
      accept=".png, .jpg, .jpeg"
      name="image-order"
      class="image-upload__input"
      @change="generatePreview"
    />

    <img v-if="preview" :src="preview" alt="" />
  </div>
</template>

<script>
export default {
  name: 'PimageUpload',
  data: () => ({
    file: null,
    preview: null
  }),

  methods: {
    handleClick() {
      this.$refs['image-order'].click()
    },

    generatePreview() {
      if (!this.$refs['image-order'].files.length) return

      const reader = new FileReader()
      reader.onload = e => (this.preview = e.target.result)
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
