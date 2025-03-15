<template>
  <header>
    <section class="container">
      <div class="wallet__tag d-flex justify-content-between fs-5">
        <i class="bi bi-wallet-fill fw-semibold"> Kiếm tiền </i>
        <i class="bi bi-bell-fill text-secondary"></i>
      </div>

      <div class="row mt-3">
        <div class="col-8">
          Chào, <b>{{ userName }}!</b>
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
    userName: String,
    avatar: String,
  },
};
</script>
