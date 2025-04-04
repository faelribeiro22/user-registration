<script setup>
import { store } from '../store/store.js'

defineProps({
  loading: Boolean,
})

function onClickBack() {
  if (store.step > 0) {
    store.backStep()
  }
}
</script>

<template>
  <div class="btn-wrapper">
    <button class="btn back" @click="onClickBack()" v-if="store.step !== 1">Voltar</button>
    <button class="btn submit" @click="$emit('clickNext')" v-if="store.step !== 4">
      Continuar
    </button>
    <button class="btn submit" @click="$emit('create')" v-if="store.step === 4" :disabled="loading">
      {{ loading ? 'Cadastrando ...' : 'Cadastrar' }}
    </button>
  </div>
</template>

<style scoped>
.btn {
  border-radius: 4px;
  line-height: 2rem;
  margin-top: 20px;
  width: 100%;
}

.submit {
  background-color: #ff9900;
  color: #fff;
  cursor: pointer;
}

.back {
  border: 1px solid #ff9900;
  background-color: transparent;
  color: #ff9900;
  cursor: pointer;
}

.btn-wrapper {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 15rem;
}
</style>
