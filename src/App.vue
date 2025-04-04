<script setup>
import StepsRegister from '@/components/StepsRegister.vue'
import FormInfos from './components/FormInfos.vue'
</script>

<template>
  <div class="wrapper">
    <header>
      <div>
        <steps-register />
      </div>
    </header>

    <main>
      <form-infos />
    </main>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}
.wrapper {
  max-width: 480px;
}
</style>
