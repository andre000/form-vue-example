<template>
  <div class="form">
    <div class="form__line">
      <p-input placeholder="Titulo do Pedido" />
      <p-input placeholder="Sabor" />
      <p-input placeholder="R$" type="number" />
    </div>
  </div>
</template>

<script>
import { PInput } from '@/components/PInput'
export default {
  name: 'PForm',
  components: {
    PInput
  }
}
</script>

<style></style>
