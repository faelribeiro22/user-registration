<script setup>
import { IsEmail } from '@/utils/IsEmail.js'
import { store } from '../store/store.js'

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
      <div class="input-mail" :class="{ 'mail-error': store.useDataFormErrors.email }">
        <label for="mail">Endereço de email</label>
        <input
          type="email"
          id="mail"
          name="mail"
          :class="{ error: store.useDataFormErrors.email }"
          :value="store.userData.email"
          @input="(event) => store.updateUserData('email', event.target.value)"
        />
        <p v-show="store.useDataFormErrors.email" class="mail-error">Digite um email válido</p>
      </div>
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
.input-mail {
  display: flex;
  width: 30%;
  flex-direction: column;
}

.input-mail input {
  flex: 1;
  border-radius: 4px;
  line-height: 2rem;
  margin-top: 5px;
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

.mail-error input {
  border-color: red;
}

.mail-error {
  color: red;
}
</style>
