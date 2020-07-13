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

    <icon-upload v-if="!image" class="image-upload__icon hide-sm hide-xs" />
    <span v-if="!image" class="image-upload__message">
      Jogue aqui o arquivo de imagem do seu pastel ou clique para localizar a
      pasta.
    </span>

    <img v-if="image && image.preview" :src="image.preview" alt="" />
  </div>
</template>

<script>
import iconUpload from '@/assets/img/upload.svg'

export default {
  name: 'PImageUpload',
  components: {
    iconUpload
  },
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
      this.handleUpload({ target: { files: event.dataTransfer.files } })
    },

    handleUpload(e) {
      if (!e.target.files.length) return
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
@import '@/assets/scss/variables.scss';

.image-upload {
  min-width: 100px;
  border: 1px solid $primary-text;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  cursor: pointer;
  padding: 20px;
  position: relative;
  background: #fff;

  .image-upload__input {
    display: none;
  }

  .image-upload__icon {
    height: 45px;
  }

  .image-upload__message {
    margin-top: 5px;
    font: 16px/21px Roboto;
    color: $primary-text;
  }

  img {
    object-fit: contain;
    width: calc(100% + 40px);
    height: 100%;
    border-radius: 10px;
  }

  &:hover {
    .upload-up-arrow {
      animation: updown 0.7s ease-in-out infinite alternate;
    }
  }
}

@keyframes updown {
  25% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(2px);
  }
}
</style>
