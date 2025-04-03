<script setup>
import StepsRegister from '@/components/StepsRegister.vue'
import FormInitial from './components/FormInitial.vue'
import FormInfos from './components/FormInfos.vue'
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
      <form-infos v-if="store.step === 2" />
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
