<template>
  <div class="container mt-5">
    <h2 class="text-center mb-4">Đăng ký</h2>

    <form @submit.prevent="register">
      <div class="mb-3">
        <label class="form-label">Tên đăng nhập</label>
        <input v-model="username" type="text" class="form-control" required />
      </div>

      <div class="mb-3">
        <label class="form-label">Mật khẩu</label>
        <input v-model="password" type="password" class="form-control" required />
      </div>

      <div class="mb-3">
        <label class="form-label">Xác nhận mật khẩu</label>
        <input v-model="confirmPassword" type="password" class="form-control" required />
      </div>

      <div v-if="errorMessage" class="alert alert-danger">
        {{ errorMessage }}
      </div>

      <button type="submit" class="btn btn-primary w-100">Đăng ký</button>

      <p class="mt-3 text-center">
        Đã có tài khoản? 
        <router-link to="/login">Đăng nhập</router-link>
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const username = ref('')
const password = ref('')
const confirmPassword = ref('')
const errorMessage = ref('')
const router = useRouter()

const register = async () => {
  if (password.value !== confirmPassword.value) {
    errorMessage.value = 'Mật khẩu xác nhận không khớp.'
    return
  }

  try {
    const response = await axios.post('http://localhost:3000/api/register', {
      username: username.value,
      password: password.value,
    })

    console.log('Đăng ký thành công:', response.data)
    // Sau khi đăng ký thành công, chuyển sang trang login
    router.push('/login')
  } catch (error) {
    console.error('Lỗi đăng ký:', error)
    errorMessage.value = error.response?.data?.message || 'Đăng ký thất bại.'
  }
}
</script>

<style scoped>
.container {
  max-width: 400px;
}
</style>
