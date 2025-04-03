import { reactive } from 'vue'

export const store = reactive({
  step: 1,
  steps: 4,
  personType: 'PJ',
  fowardStep() {
    if (store.step < store.steps) {
      store.step++
    }
  },
  backStep() {
    if (store.step > 1) {
      store.step--
    }
  },
})
