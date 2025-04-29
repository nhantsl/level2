<template>
  <div class="login-form">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="username">Username:</label>
        <input
          v-model="username"
          type="text"
          id="username"
          placeholder="Enter your username"
          required
        />
      </div>
      <div>
        <label for="password">Password:</label>
        <input
          v-model="password"
          type="password"
          id="password"
          placeholder="Enter your password"
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
  <p class="register-link">
      Chưa có tài khoản?
      <router-link to="/register">Đăng ký</router-link>
  </p>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: '',
    }
  },
  methods: {
    async handleLogin() {
      try {
        const response = await axios.post('http://localhost:3000/api/login', {
          username: this.username,
          password: this.password,
        })
        console.log('Login successful:', response.data)
        localStorage.setItem('user', JSON.stringify(response.data.user))
        this.$router.push('/home') 
      } catch (error) {
        if (error.response) {
          this.errorMessage = error.response.data.message || 'An error occurred'
        } else {
          console.error('Error:', error)
        }
      }
    },
  },
}
</script>

<style scoped>
.login-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

h2 {
  text-align: center;
}

label {
  display: block;
  margin-bottom: 8px;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 20px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.error {
  color: red;
  text-align: center;
}

.register-link {
  text-align: center;
  margin-top: 16px;
}
</style>
