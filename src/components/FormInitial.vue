<script setup>
import { store } from '../store/store.js'
</script>

<template>
  <div class="wrapper">
    <form @submit.prevent>
      <div class="input-mail">
        <label for="mail">Endereço de email</label>
        <input type="text" id="mail" name="mail" />
      </div>
      <div class="type-person">
        <div>
          <input type="radio" name="person_type" id="PF" value="PF" />
          <label for="PF">Pessoa física</label>
        </div>
        <div>
          <input type="radio" name="person_type" id="PJ" value="PJ" />
          <label for="PJ">Pessoa jurídica</label>
        </div>
      </div>
      <button class="btn-submit" @click="store.fowardStep()">Continuar</button>
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
</style>
