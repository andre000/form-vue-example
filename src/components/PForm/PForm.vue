<template>
  <div class="form">
    <div class="form__line">
      <p-input placeholder="Titulo do Pedido" />
      <p-input placeholder="Sabor" />
      <p-input placeholder="R$" type="number" />
    </div>

    <div class="form__line">
      <p-text-area />
    </div>

    <div class="form__line">
      <p-image-upload />
    </div>
  </div>
</template>

<script>
import { PInput } from '@/components/PInput'
import { PTextArea } from '@/components/PTextArea'
import { PImageUpload } from '@/components/PImageUpload'

export default {
  name: 'PForm',
  components: {
    PInput,
    PTextArea,
    PImageUpload
  }
}
</script>

<style></style>
