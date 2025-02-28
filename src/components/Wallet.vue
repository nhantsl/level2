<template>
  <header>
    <section class="container">
      <div class="wallet__tag d-flex justify-content-between fs-5">
        <i class="bi bi-wallet-fill fw-semibold"> Kiếm tiền </i>
        <i class="bi bi-bell-fill text-secondary"></i>
      </div>

      <div class="row mt-3">
        <div class="col-8">
          Chào, <b>Dũng!</b>
          <p>Chọn tài khoản kiếm tiền</p>
        </div>
        <div class="col-4 text-end">
          <img src="@/assets/img/avatar1.svg" class="img-fluid" width="48" />
        </div>
      </div>
    </section>
  </header>

  <main>
    <section class="container">
      <div class="btn-group d-flex gap-3">
        <p class="btn color shadow-0 rounded-pill">Danh sách công việc</p>
        <p class="btn text-secondary shadow-0 rounded-pill">Lịch sử làm việc</p>
      </div>
    </section>

    <section class="container">
      <div class="d-flex rounded-4 shadow-0 p-2">
        <div class="text-center">
          <img src="@/assets/img/like-1.svg" class="img-fluid" /><br />
          <p class="badge text-bg-warning text-white m-2">+350đ</p>
        </div>
        <div class="flex-grow-1">
          <p class="fw-semibold mb-0">Like bài viết</p>
          <p class="text-secondary mb-0 fs-7">Thành Dũng vừa cập nhật</p>
          <div class="d-flex gap-2">
            <div class="progress-bar bg-light">
              <div class="progress w-25 bg-success"></div>
            </div>
            <p class="fs-7 text-muted mt-1">25%</p>
          </div>
        </div>
      </div>

      <div class="d-flex rounded-4 shadow-0 p-2 mt-2">
        <div class="text-center">
          <img src="@/assets/img/Share.svg" class="img-fluid" /><br />
          <span class="badge text-bg-warning text-white m-2">+500đ</span>
        </div>
        <div class="flex-grow-1">
          <p class="fw-semibold mb-0">Share bài viết</p>
          <p class="text-secondary mb-0 fs-7">Thành Dũng vừa cập nhật</p>
          <div class="d-flex gap-2">
            <div class="progress-bar bg-light">
              <div class="progress bg-success w-50"></div>
            </div>
            <p class="fs-7 text-muted mt-1">50%</p>
          </div>
        </div>
      </div>
    </section>

    <section class="container">
      <h5>Quảng cáo</h5>
      <img
        src="@/assets/img/banner1.svg"
        alt="Quảng cáo banner"
        class="img-fluid w-100"
      />
    </section>

    <section class="container">
      <div class="d-flex">
        <h5>Việc giá thấp</h5>
        <p class="ms-auto">Xem thêm</p>
      </div>
      <div class="d-flex overflow-auto">
        <img src="@/assets/img/tintuc1.svg" alt="" class="img-fluid w-100" />
        <img src="@/assets/img/tintuc1.svg" alt="" class="img-fluid w-100" />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "Wallet",
};
</script>

<style scoped>
@import "@/assets/style/global.css";
</style>
