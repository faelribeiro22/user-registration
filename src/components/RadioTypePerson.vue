<script setup>
import { store } from '../store/store.js'
</script>

<template>
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
</template>

<style scoped>
.type-person {
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  width: 270px;
}
</style>
