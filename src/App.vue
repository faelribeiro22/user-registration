<script setup>
import StepsRegister from '@/components/StepsRegister.vue'
import FormInitial from './components/FormInitial.vue'
import FormPerson from './components/FormPerson.vue'
import FormCompany from './components/FormCompany.vue'
import FormPassword from './components/FormPassword.vue'
import FormCheckInformations from './components/FormCheckInformations.vue'
import { store } from './store/store'
</script>

<template>
  <div class="wrapper">
    <header>
      <div>
        <steps-register />
      </div>
    </header>

    <main>
      <form-initial v-show="store.step === 1" />
      <form-person v-if="store.step === 2 && store.personType === 'PF'" />
      <form-company v-if="store.step === 2 && store.personType !== 'PF'" />
      <form-password v-if="store.step === 3" />
      <form-check-informations v-if="store.step === 4" />
    </main>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>
