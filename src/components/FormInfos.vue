<script setup>
import { validarCNPJ, validarCPF } from '@/utils/ValidDocNumber.js'
import { store } from '../store/store.js'
import WrapperButtons from './WrapperButtons.vue'
import InputForm from './InputForm.vue'
import { computed } from 'vue'

const messageError = computed(() => {
  return store.personType === 'PF' ? 'Digite um CPF válido' : 'Digite um CNPJ válido'
})

const nameDocument = computed(() => {
  return store.personType === 'PF' ? 'CPF' : 'CNPJ'
})

const labelDateBirth = computed(() => {
  return store.personType === 'PF' ? 'Data de aniversário' : 'Data de abertura'
})

function validateForm() {
  let isError = false
  if (!store.userData.name.length > 0) {
    store.updateUserDataError('name', true)
    isError = true
  } else {
    store.updateUserDataError('name', false)
  }

  if (store.personType === 'PF') {
    if (!store.userData.doc_number.length > 0 && !validarCPF(store.userData.doc_number)) {
      store.updateUserDataError('doc_number', true)
      isError = true
    } else {
      store.updateUserDataError('doc_number', false)
    }
  } else {
    if (!store.userData.doc_number.length > 0 && !validarCNPJ(store.userData.doc_number)) {
      store.updateUserDataError('doc_number', true)
      isError = true
    } else {
      store.updateUserDataError('doc_number', false)
    }
  }

  if (store.userData.phone < 9) {
    store.updateUserDataError('phone', true)
    isError = true
  } else {
    store.updateUserDataError('phone', false)
  }

  const dateInput = new Date(store.userData.birth_date)
  if (!store.userData.birth_date && !(dateInput > new Date())) {
    store.updateUserDataError('birth_date', true)
    isError = true
  } else {
    store.updateUserDataError('birth_date', false)
  }

  if (isError) return

  store.fowardStep()
}
</script>

<template>
  <div class="wrapper">
    <form @submit.prevent>
      <input-form
        type="text"
        label="Nome"
        msg-error="Digite um nome"
        name="name"
        store-value="name"
      />
      <input-form
        type="text"
        :label="nameDocument"
        :msg-error="messageError"
        name="doc_number"
        store-value="doc_number"
      />
      <input-form
        type="date"
        :label="labelDateBirth"
        msg-error="Digite uma data válida"
        name="birth_date"
        store-value="birth_date"
      />
      <input-form
        type="text"
        label="Telefone"
        msg-error="Digite um telefone válido"
        name="phone"
        store-value="phone"
      />
      <wrapper-buttons @click-next="validateForm()" />
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
