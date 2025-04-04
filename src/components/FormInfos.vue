<script setup>
import { validarCNPJ, validarCPF } from '@/utils/ValidDocNumber.js'
import { store } from '../store/store.js'
import WrapperButtons from './WrapperButtons.vue'
import InputForm from './InputForm.vue'
import RadioTypePerson from './RadioTypePerson.vue'
import { computed, ref } from 'vue'
import { IsEmail } from '@/utils/IsEmail.js'

const successMessage = ref('')
const errorMessage = ref('')
const loading = ref(false)

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

  if (store.step === 1 || store.step === 4) {
    if (!IsEmail(store.userData.email)) {
      store.updateUserDataError('email', true)
      return
    }
    store.updateUserDataError('email', false)
  }
  if (store.step === 2 || store.step === 4) {
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

    if (store.userData.phone.length < 9) {
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
  }

  if (store.step === 3 || store.step === 4) {
    if (store.userData.password.length < 8) {
      store.updateUserDataError('password', true)
      isError = true
    } else {
      store.updateUserDataError('password', false)
    }
  }

  if (isError) return

  store.fowardStep()
}

async function submitForm() {
  try {
    store.setLoading(true)
    const response = await fetch('/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ personType: store.personType, ...store.userData }),
    })

    const data = await response.json()
    store.setLoading(false)
    if (response.ok) {
      successMessage.value = 'Cadastro realizado com sucesso!'
      store.updateUserData(data)
      store.fowardStep()
    } else {
      successMessage.value = 'Erro ao cadastrar. Tente novamente.'
    }
  } catch (error) {
    console.error('Error:', error)
    successMessage.value = error.message
  }
}
</script>

<template>
  <div>
    <div v-if="successMessage" class="success-message">
      {{ successMessage }}
    </div>
    <div v-if="errorMessage" class="error-message">
      {{ errorMessage }}
    </div>
    <form @submit.prevent>
      <input-form
        type="email"
        label="Endereço de email"
        msg-error="Digite um email válido"
        name="email"
        store-value="email"
        v-if="store.step === 1 || store.step === 4"
      />
      <radio-type-person v-if="store.step === 1" />

      <input-form
        type="text"
        label="Nome"
        msg-error="Digite um nome"
        name="name"
        store-value="name"
        v-if="store.step === 2 || store.step === 4"
      />
      <input-form
        type="text"
        :label="nameDocument"
        :msg-error="messageError"
        name="doc_number"
        store-value="doc_number"
        v-if="store.step === 2 || store.step === 4"
      />
      <input-form
        type="date"
        :label="labelDateBirth"
        msg-error="Digite uma data válida"
        name="birth_date"
        store-value="birth_date"
        v-if="store.step === 2 || store.step === 4"
      />
      <input-form
        type="text"
        label="Telefone"
        msg-error="Digite um telefone válido"
        name="phone"
        store-value="phone"
        v-if="store.step === 2 || store.step === 4"
      />
      <input-form
        type="password"
        label="Sua senha"
        msg-error="Digite uma senha maior que 8 caracteres"
        name="password"
        store-value="password"
        v-if="store.step === 3 || store.step === 4"
      />
      <wrapper-buttons @click-next="validateForm()" @create="async () => await submitForm()" />
    </form>
  </div>
</template>

<style scoped></style>
