<script setup>
import { store } from '../store/store.js'
import WrapperButtons from './WrapperButtons.vue'
</script>

<template>
  <div class="wrapper">
    <form @submit="(e) => e.preventDefault()">
      <div class="input">
        <label for="mail">Nome</label>
        <input type="text" id="name" name="name" />
      </div>
      <div class="input">
        <label for="doc_number">{{ store.personType === 'PF' ? 'CPF' : 'CNPJ' }}</label>
        <input type="text" name="doc_number" id="doc_number" />
      </div>
      <div class="input" v-if="store.personType === 'PF'">
        <label for="birth_date">Data de nascimento</label>
        <input type="datetime-local" name="birth_date" id="birth_date" />
      </div>
      <div class="input" v-else>
        <label for="opened_date">Data de abertura</label>
        <input type="datetime-local" name="opened_date" id="opened_date" />
      </div>
      <div class="input">
        <label for="phone">Telefone</label>
        <input type="text" name="phone" id="phone" />
      </div>
      <wrapper-buttons />
    </form>
  </div>
</template>

<style scoped>
.wrapper {
  width: 900px;
}
.input {
  display: flex;
  width: 30%;
  flex-direction: column;
  border-radius: 4px;
  line-height: 2rem;
  margin-top: 5px;
}

.input input {
  border-radius: 4px;
  line-height: 2rem;
  margin-top: 5px;
}
</style>
