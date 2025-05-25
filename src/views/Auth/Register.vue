<template>
  <div class="register-form">
    <h2>Register</h2>
    <form @submit.prevent="handleRegister">
      <input v-model="username" placeholder="Username" required />
      <input v-model="password" type="password" placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/modules/user'
import avatar from '@/assets/img/avatar.svg'

const router = useRouter()
const userStore = useUserStore()

const username = ref('')
const password = ref('')
const errorMessage = ref('')

const handleRegister = () => {
  if (!username.value || !password.value) {
    errorMessage.value = 'Vui lòng điền đầy đủ thông tin.'
    return
  }

  userStore.register({
    username: username.value,
    password: password.value,
    image: avatar,
  })

  router.push('/home')
}

</script>

<style scoped>
.register-form {
  max-width: 400px;
  margin: 60px auto;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', sans-serif;
}

.register-form h2 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}

.register-form form {
  display: flex;
  flex-direction: column;
}

.register-form input {
  padding: 10px 14px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 16px;
  transition: border-color 0.2s;
}

.register-form input:focus {
  border-color: #409eff;
  outline: none;
}

.register-form button {
  padding: 12px;
  background-color: #409eff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.register-form button:hover {
  background-color: #297acc;
}

.error {
  color: red;
  margin-top: 10px;
  text-align: center;
  font-size: 14px;
}
</style>

