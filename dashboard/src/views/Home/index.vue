<template>
  <custom-header @create-account="handleCreateAccount" @login="handleLogin" />
  <contact />
  <div class="flex justify-center py-10 bg-brand-grey">
    <p class="font-medium text-center text-gray-800">Feedbacker © 2024</p>
  </div>
</template>
<script>
import { onMounted } from 'vue'
import CustomHeader from './CustomHeader.vue'
import Contact from './Contact.vue'
import { useRouter } from 'vue-router'

import useModal from '../../hooks/useModal'
export default {
  components: { CustomHeader, Contact },
  setup() {
    const router = useRouter()
    const modal = useModal()
    onMounted(() => {
      const token = window.localStorage.getItem('token')
      if (token) {
        router.push({ name: 'Feedbacks' })
      }
    })

    function handleLogin() {
      modal.open({ component: 'ModalLogin' })
    }
    function handleCreateAccount() {
      modal.open({ component: 'ModalCreateAccount', props: {} })
    }

    return {
      handleLogin,
      handleCreateAccount
    }
  }
}
</script>
