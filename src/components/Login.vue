<template>
  <div class="login-container">
    <div class="login-box">
      <h2>Đăng nhập GoLike</h2>
      <button class="login-button" @click="runPuppeteer">Đăng nhập bằng Puppeteer</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    async runPuppeteer() {

      try {
        const res = await fetch("http://localhost:3000/api/puppeteer-login", {
          method: "POST",
        });

        const data = await res.json();
        if (data.success) {
          alert("Đăng nhập thành công! Trình duyệt mặc định sẽ được mở.");
        } else {
          alert(data.message || "Đăng nhập thất bại!");
        }
      } catch (err) {
        alert("Lỗi kết nối đến server!");
        console.error(err);
      }
    }
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #74ebd5, #9face6);
}

.login-box {
  background: white;
  padding: 2rem 3rem;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.login-box h2 {
  margin-bottom: 1.5rem;
  color: #333;
}

.login-button {
  background-color: #4A90E2;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button:hover {
  background-color: #357ABD;
}
</style>
