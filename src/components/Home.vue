<template>
  <header class="home__header rounded-bottom-3 bg">
    <div class="d-flex align-items-center justify-content-between">
      <div class="d-flex">
        <img
          src="@/assets/img/Avatar.svg"
          class="img-fluid ms-2"
          alt="Avatar"
          width="32"
        />
        <div class="text-white ms-3">
          <h6 class="mb-0">Nguyễn Thành Dũng</h6>
          <p class="fs-7 mb-0">Số dư: 100.000.000đ</p>
        </div>
      </div>
      <i class="bi bi-bell fs-5 text-white me-2"></i>
    </div>
    <div class="carousel slide" id="carouselExampleIndicators">
      <div class="carousel-inner">
        <div class="carousel-item">
          <img
            src="@/assets/img/banner.svg"
            class="img-fluid w-100"
            alt="Promotional banner"
          />
        </div>
        <div class="carousel-item active">
          <img
            src="@/assets/img/banner.svg"
            class="img-fluid w-100"
            alt="Promotional banner"
          />
        </div>
        <div class="carousel-item">
          <img
            src="@/assets/img/banner.svg"
            class="img-fluid w-100"
            alt="Promotional banner"
          />
        </div>
      </div>
      <div class="carousel-indicators">
        <button
          class="custom-indicator"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          class="active custom-indicator"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          class="custom-indicator"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
    </div>
  </header>

  <main>
    <section class="text-center fs-7">
      <div id="function-list" class="row row-cols-3 row-cols-lg-6 g-3">
        <div class="col text-center">
          <img src="@/assets/img/Mời bạn.svg" alt="Mời bạn" class="img-fluid" />
          <p class="pt-1">Mời bạn</p>
        </div>
        <div class="col text-center">
          <img src="@/assets/img/Hỗ trợ.svg" alt="Hỗ trợ" class="img-fluid" />
          <p class="pt-1">Hỗ trợ</p>
        </div>
        <div class="col text-center">
          <img
            src="@/assets/img/Rút tiền.svg"
            alt="Rút tiền"
            class="img-fluid"
          />
          <p class="pt-1">Rút tiền</p>
        </div>
        <div class="col text-center">
          <img
            src="@/assets/img/Cộng đồng.svg"
            alt="Cộng đồng"
            class="img-fluid"
          />
          <p class="pt-1">Cộng đồng</p>
        </div>
        <div class="col text-center">
          <img
            src="@/assets/img/Nhiệm vụ.svg"
            alt="Nhiệm vụ"
            class="img-fluid"
          />
          <p class="pt-1">Nhiệm vụ</p>
        </div>
        <div class="col text-center">
          <img
            src="@/assets/img/Tài khoản.svg"
            alt="Tài khoản"
            class="img-fluid"
          />
          <p class="pt-1">Tài khoản</p>
        </div>
      </div>
    </section>

    <section>
      <h5 class="fw-bold">Tin tức mới</h5>
      <div class="row">
        <div class="col-12 col-md-4">
          <img
            src="@/assets/img/tintuc.svg"
            alt="News article"
            class="img-fluid w-100"
          />
        </div>
        <div class="col-12 col-md-4">
          <img
            src="@/assets/img/tintuc2.svg"
            alt="News article"
            class="img-fluid w-100"
          />
        </div>
        <div class="col-12 col-md-4">
          <img
            src="@/assets/img/tintuc.svg"
            alt="News article"
            class="img-fluid w-100"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
@import "@/assets/style/global.css";
</style>
