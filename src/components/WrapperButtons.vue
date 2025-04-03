<script setup>
import { store } from '../store/store.js'

function onClickNext() {
  console.log('heyyyy')
  if (store.step < store.steps) {
    store.fowardStep()
  }
}

function onClickBack() {
  console.log('heyyyy')
  if (store.step > 0) {
    store.backStep()
  }
}
</script>

<template>
  <div class="btn-wrapper">
    <button class="btn back" @click="onClickBack()">Voltar</button>
    <button class="btn submit" @click="onClickNext()">Continuar</button>
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
  width: 30%;
}
</style>
