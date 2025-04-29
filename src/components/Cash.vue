<template>
  <header class="cash__header rounded-bottom-4">
    <div class="d-flex">
      <router-link to="/home" class="custom-link">
        <i class="bi bi-arrow-left-short fs-2"></i>
      </router-link>
      <h5 class="m-auto pe-4">Rút tiền</h5>
    </div>
    <div class="d-flex justify-content-between mt-4">
      <div class="lh-0">
        <p class="mb-0">Số dư</p>
        <h4>{{ formattedBalance }}</h4>
      </div>
      <div class="ms-auto">
        <img src="@/assets/img/avatar1.svg" alt="" width="48" />
      </div>
    </div>

    <div class="cash__details shadow-0 rounded-4">
      <div class="text-center">
        <div class="d-flex justify-content-around">
          <div>
            <i class="bi bi-circle-fill text-warning fs-7"></i> Chờ rút
            <h6>{{ formattedPending }}</h6>
          </div>
          <div class="vr"></div>
          <div>
            <i class="bi bi-circle-fill text-success fs-7"></i> Đã rút
            <h6>{{ formattedWithdrawn }}</h6>
          </div>
        </div>
        <div>
          <hr />
          <p class="text-secondary fs-7 fst-italic">
            Thứ 7, Chủ nhật không làm việc nên sẽ rút tiền lâu hơn
          </p>
          <div class="d-grid">
            <button class="btn bg text-white fs-7" type="button">
              Lịch sử rút tiền
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
  <main class="cash__content container">
    <h5 class="fw-bold">Chọn phương thức rút</h5>
    <div class="row gap-3 mt-4 fw-semibold justify-content-center">
      <div class="box col-5 col-md-4 shadow-0">
        <img src="@/assets/img/Viettel Pay.svg" alt="" width="80" />
        <p class="mt-2">Viettel Pay</p>
      </div>
      <div class="box col-5 col-md-4 shadow-0">
        <img src="@/assets/img/Momo.svg" alt="" width="80" />
        <p class="mt-2">MoMo</p>
      </div>
      <div class="box col-5 col-md-4 shadow-0">
        <img src="@/assets/img/image 13.svg" alt="" width="80" />
        <p class="mt-2">Thẻ cào</p>
      </div>
      <div class="box col-5 col-md-4 shadow-0">
        <img src="@/assets/img/image 14.svg" alt="" width="80" />
        <p class="mt-2">Tên khác</p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Cash",
  data() {
    return {
      balance: 0,
      pendingAmount: 100000,
      withdrawnAmount: 200000,
    };
  },
  computed: {
    formattedBalance() {
      return this.balance.toLocaleString("vi-VN") + " VND";
    },
    formattedPending() {
      return this.pendingAmount.toLocaleString("vi-VN") + "đ";
    },
    formattedWithdrawn() {
      return this.withdrawnAmount.toLocaleString("vi-VN") + "đ";
    },
  },
  mounted() {
    const userData = localStorage.getItem('user')
    if (userData) {
      const user = JSON.parse(userData)
      this.username = user.username
      this.balance = user.balance || 0 
    }
  },
};
</script>

<style scoped>
@import "@/assets/style/global.css";
</style>
