<template>
  <header class="people__header">
    <router-link to="/" class="custom-link">
      <i class="bi bi-arrow-left-short fs-1"></i>
    </router-link>
    <h5 class="m-auto pe-5">Chi tiết</h5>
  </header>
  <main class="container">
    <section>
      <div class="d-flex justify-content-between">
        <h3 class="color fw-bold">Like bài viết</h3>
        <img src="@/assets/img/More Square.svg" alt="" />
      </div>
      <div class="row">
        <div class="col">
          <p class="text-secondary mb-1">Ngày hết hạn</p>
          <i class="bi bi-calendar3 text-secondary"></i> <b>20/09/2020</b>
        </div>
        <div class="col">
          <p class="text-secondary mb-1">Còn lại</p>
          <b>321</b>
        </div>
      </div>
    </section>
    <section>
      <div class="people__tag">
        <div class="text-secondary">
          <p>Nền tảng</p>
          <p>Tiền cộng</p>
        </div>
        <div class="ms-3">
          <p class="badge bg-primary">Facebook</p>
          <br />
          <p class="badge bg-info">+500</p>
        </div>
      </div>
    </section>
    <section>
      <h5>Mô tả:</h5>
      <p class="text-secondary lh-1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
        aliquiddoloribus
      </p>
    </section>
    <section>
      <h5>Làm việc</h5>
      <div class="row justify-content-around mt-3">
        <div class="box col-5 col-md-4 shadow-0">
          <img src="@/assets/img/Facebook.svg" alt="" />
          <p>Facebook</p>
          <p class="badge bg-warning">Mở app</p>
        </div>
        <div class="box col-5 col-md-4 shadow-0">
          <img src="@/assets/img/chrome.svg" alt="" />
          <p>Trình duyệt</p>
          <p class="badge bg-warning">Mở Trình đuyệt</p>
        </div>
      </div>
    </section>

    <section class="people__popup">
      <div class="d-flex bg-success bg-opacity-75 rounded-4 gap-2 p-1">
        <div>
          <img src="@/assets/img/like.svg" alt="" class="ms-2 pt-2" />
        </div>
        <div class="pt-1">
          <p class="mb-0">Hoàn thành công việc</p>
          <p class="mb-0">Nhận tiền sau khi thực hiện</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "People",
};
</script>

<style scoped>
@import "@/assets/style/global.css";
</style>
