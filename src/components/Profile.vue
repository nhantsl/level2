<template>
  <header class="profile__header">
    <img
      src="@/assets/img/Union.svg"
      alt="Union Background"
      class="profile__header--union"
    />
    <div class="profile__header--content">
      <div class="d-flex px-3">
        <h5 class="m-auto ps-3">Cá nhân</h5>
        <i class="bi bi-three-dots-vertical"></i>
      </div>
      <div class="m-auto mt-3">
        <img src="@/assets/img/Avatar.svg" alt="Avatar" />
      </div>
    </div>
  </header>

  <main class="pt-4">
    <section class="text-center">
      <b class="mb-1">Nguyễn Thành Dũng</b><br />
      <b class="text-success fw-bold">500.000đ</b>
    </section>

    <section class="row justify-content-center gap-3 mt-3">
      <div class="profile__bank col-5 shadow-0">
        <img
          src="@/assets/img/Tiền chờ duyệt.svg"
          width="40"
          alt="Pending Money"
        />
        <div class="fs-7">
          <p class="text-muted mb-0">Tiền chờ duyệt</p>
          <p class="text-primary-emphasis fw-semibold mb-0">250.000.000đ</p>
        </div>
      </div>
      <div class="profile__bank col-5 shadow-0">
        <img src="@/assets/img/icon.svg" width="40" alt="Needs Revision" />
        <div class="fs-7">
          <p class="text-muted mb-0">Cần làm lại</p>
          <p class="text-danger fw-semibold mb-0">350.000đ</p>
        </div>
      </div>
    </section>

    <section class="container">
      <ul id="profile-function" class="list-group gap-2">
        <li class="list-group-item shadow-0 d-flex align-items-center">
          <img
            src="@/assets/img/Setting.svg"
            alt="Cài đặt tài khoản"
            width="40"
          />
          <p class="m-2 flex-grow-1">Cài đặt tài khoản</p>
          <i class="bi bi-play-fill text-body-tertiary pe-2"></i>
        </li>
        <li class="list-group-item shadow-0 d-flex align-items-center">
          <img
            src="@/assets/img/qunalytk.svg"
            alt="Quản lý tài khoản"
            width="40"
          />
          <p class="m-2 flex-grow-1">Quản lý tài khoản</p>
          <i class="bi bi-play-fill text-body-tertiary pe-2"></i>
        </li>
        <li class="list-group-item shadow-0 d-flex align-items-center">
          <img
            src="@/assets/img/qldongtien.svg"
            alt="Cài đặt dòng tiền"
            width="40"
          />
          <p class="m-2 flex-grow-1">Cài đặt dòng tiền</p>
          <i class="bi bi-play-fill text-body-tertiary pe-2"></i>
        </li>
        <li class="list-group-item shadow-0 d-flex align-items-center">
          <img
            src="@/assets/img/lichsudongtien.svg"
            alt="Lịch sử dòng tiền"
            width="40"
          />
          <p class="m-2 flex-grow-1">Lịch sử dòng tiền</p>
          <i class="bi bi-play-fill text-body-tertiary pe-2"></i>
        </li>
        <li class="list-group-item shadow-0 d-flex align-items-center">
          <img
            src="@/assets/img/doisoatdongtien.svg"
            alt="Đối soát dòng tiền"
            width="40"
          />
          <p class="m-2 flex-grow-1">Đối soát dòng tiền</p>
          <i class="bi bi-play-fill text-body-tertiary pe-2"></i>
        </li>
        <li class="list-group-item shadow-0 d-flex align-items-center">
          <img
            src="@/assets/img/nhatkyhaotdong.svg"
            alt="Nhật ký hoạt động"
            width="40"
          />
          <p class="m-2 flex-grow-1">Nhật ký hoạt động</p>
          <i class="bi bi-play-fill text-body-tertiary pe-2"></i>
        </li>
      </ul>
    </section>
  </main>
</template>

<script>
export default {
  name: "Profile",
};
</script>

<style scoped>
@import "@/assets/style/global.css";
</style>
