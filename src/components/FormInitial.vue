<script setup>
import { IsEmail } from '@/utils/IsEmail.js'
import { store } from '../store/store.js'
import InputForm from './InputForm.vue'

function validEmail() {
  if (!IsEmail(store.userData.email)) {
    store.updateUserDataError('email', true)
    return
  }
  store.updateUserDataError('email', false)
  return store.fowardStep()
}
</script>

<template>
  <div class="wrapper">
    <form @submit.prevent>
      <input-form
        type="email"
        label="Endereço de email"
        msg-error="Digite um email válido"
        name="email"
        store-value="email"
      />
      <div class="type-person">
        <div>
          <input type="radio" name="person_type" id="PF" value="PF" v-model="store.personType" />
          <label for="PF">Pessoa física</label>
        </div>
        <div>
          <input type="radio" name="person_type" id="PJ" value="PJ" v-model="store.personType" />
          <label for="PJ">Pessoa jurídica</label>
        </div>
      </div>
      <button class="btn-submit" @click="validEmail()">Continuar</button>
    </form>
  </div>
</template>

<style scoped>
.wrapper {
  width: 900px;
}

.type-person {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  width: 270px;
}

.btn-submit {
  line-height: 2rem;
  margin-top: 20px;
  width: 30%;
  background-color: #ff9900;
  border-radius: 4px;
  color: #fff;
}
</style>
