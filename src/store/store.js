import { reactive } from 'vue'

export const store = reactive({
  step: 4,
  steps: 4,
  personType: 'PJ',
  userData: {
    name: '',
    email: '',
    doc_number: '',
    birth_date: null,
    phone: '',
    password: '',
  },
  useDataFormErrors: {
    name: false,
    email: false,
    doc_number: false,
    birth_date: false,
    phone: false,
    password: false,
  },
  updateUserData(field, data) {
    store.userData[field] = data
  },
  updateUserDataError(field, isError) {
    store.useDataFormErrors[field] = isError
  },
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
