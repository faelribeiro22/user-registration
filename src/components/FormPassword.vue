<script setup>
import { store } from '../store/store.js'
import WrapperButtons from './WrapperButtons.vue'
</script>

<template>
  <div class="wrapper">
    <form @submit.prevent>
      <div class="input">
        <label for="password">Sua senha</label>
        <input
          type="password"
          id="password"
          name="password"
          :value="store.userData.password"
          @input="(event) => store.updateUserData('password', event.target.value)"
        />
      </div>
      <div class="input">
        <label for="repeat_password">Repita sua senha</label>
        <input type="password" id="repeat_password" name="repeat_password" />
      </div>
      <wrapper-buttons />
    </form>
  </div>
</template>

<style scoped></style>
