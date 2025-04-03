<script setup>
import { store } from '../store/store.js'
import WrapperButtons from './WrapperButtons.vue'
</script>

<template>
  <div class="wrapper">
    <form @submit.prevent>
      <div class="input">
        <label for="name">Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          :value="store.userData.name"
          @input="(event) => store.updateUserData('name', event.target.value)"
        />
      </div>
      <div class="input">
        <label for="doc_number">CNPJ</label>
        <input
          type="text"
          name="doc_number"
          id="doc_number"
          :value="store.userData.doc_number"
          @input="(event) => store.updateUserData('doc_number', event.target.value)"
        />
      </div>
      <div class="input">
        <label for="opened_date">Data de abertura</label>
        <input
          type="date"
          name="opened_date"
          id="opened_date"
          :value="store.userData.opened_date"
          @input="(event) => store.updateUserData('opened_date', event.target.value)"
        />
      </div>
      <div class="input">
        <label for="phone">Telefone</label>
        <input
          type="text"
          name="phone"
          id="phone"
          :value="store.userData.phone"
          @input="(event) => store.updateUserData('phone', event.target.value)"
        />
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
