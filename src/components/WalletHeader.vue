<template>
  <header>
    <section class="container">
      <div class="wallet__tag d-flex justify-content-between fs-5">
        <span>
          <img
            class="pb-1"
            src="@/assets/img/Wallet-1.svg"
            alt="wallet"
            width="23"
          />
          <b class="fw-semibold"> Kiếm tiền</b>
        </span>
        <img src="../assets/img/Notification-1.svg" alt="bell1" width="23" />
      </div>

      <div class="row mt-3">
        <div class="col-8">
          Chào, <b>{{ username }}!</b>
          <p>Chọn tài khoản kiếm tiền</p>
        </div>
        <div class="col-4 text-end">
          <img :src="avatar" class="img-fluid" width="48" />
        </div>
      </div>
    </section>
  </header>
</template>

<script>
export default {
  name: "WalletHeader",
  props: {
    username: String,
    avatar: String,
  },
};
</script>
