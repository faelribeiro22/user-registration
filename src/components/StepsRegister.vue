<script setup>
import { computed } from 'vue'
import { store } from '../store/store.js'

const mainTitle = computed(() => {
  const personType = store.personType === 'PF' ? 'Pessoa Física' : 'Pessoa Jurídica'
  const msg = {
    1: 'Seja bem vindo(a)',
    2: personType,
    3: 'Senha de acesso',
    4: 'Revise suas informações',
  }
  return msg[store.step]
})
</script>

<template>
  <div class="wrapper">
    <p>
      Etapa <span class="step">{{ store.step }}</span> de {{ store.steps }}
    </p>
    <h1>{{ mainTitle }}</h1>
  </div>
</template>

<style scoped>
.step {
  color: #ff9900;
}
.wrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
}
</style>
