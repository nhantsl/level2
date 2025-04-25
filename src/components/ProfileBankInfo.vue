<template>
  <section class="d-flex justify-content-between gap-3 mt-3">
    <div class="profile__bank flex-fill shadow-0">
      <img
        src="@/assets/img/Tiền chờ duyệt.svg"
        width="40"
        alt="Pending Money"
      />
      <div class="fs-7">
        <p class="text-muted mb-0">Tiền chờ duyệt</p>
        <p class="text-primary-emphasis fw-semibold mb-0">
          {{ formattedPendingMoney }}
        </p>
      </div>
    </div>
    <div class="profile__bank flex-fill shadow-0">
      <img src="@/assets/img/icon.svg" width="40" alt="Needs Revision" />
      <div class="fs-7">
        <p class="text-muted mb-0">Cần làm lại</p>
        <p class="text-danger fw-semibold mb-0">{{ formattedNeedRevision }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProfileBankInfo",
  props: {
    pendingMoney: Number,
    needRevision: Number,
  },
  computed: {
    formattedPendingMoney() {
      return this.pendingMoney?.toLocaleString("vi-VN") + "đ" || "0đ";
    },
    formattedNeedRevision() {
      return this.needRevision?.toLocaleString("vi-VN") + "đ" || "0đ";
    },
  },
};
</script>
