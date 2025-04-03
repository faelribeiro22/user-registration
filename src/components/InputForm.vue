<script setup>
import { store } from '../store/store.js'

defineProps({
  type: String,
  name: String,
  storeValue: String,
  label: String,
  msgError: String,
})
</script>

<template>
  <div class="input" :class="{ error: store.useDataFormErrors[storeValue] }">
    <label :for="name">{{ label }}</label>
    <input
      :type="type"
      :id="name"
      :name="name"
      :value="store.userData[storeValue]"
      :class="{ error: store.useDataFormErrors[storeValue] }"
      @input="(event) => store.updateUserData(storeValue, event.target.value)"
    />
    <p v-show="store.useDataFormErrors[storeValue]" class="error">{{ msgError }}</p>
  </div>
</template>

<style scoped>
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

.error {
  border-color: red;
}

.error {
  color: red;
}
</style>
