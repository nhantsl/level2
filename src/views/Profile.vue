<template>
  <ProfileHeader />
  <main class="pt-4">
    <ProfileBalance userName="Nguyễn Thành Dũng" balance="500.000đ" />
    <ProfileBankInfo pendingMoney="250.000.000đ" needRevision="350.000đ" />
    <ProfileFunction :functions="functions" />
  </main>
</template>

<script>
import ProfileHeader from "@/components/ProfileHeader.vue";
import ProfileBalance from "@/components/ProfileBalance.vue";
import ProfileBankInfo from "@/components/ProfileBankInfo.vue";
import ProfileFunction from "@/components/ProfileFunction.vue";

export default {
  name: "ProfileView",
  components: {
    ProfileHeader,
    ProfileBalance,
    ProfileBankInfo,
    ProfileFunction,
  },
  data() {
    return {
      functions: [
        {
          name: "Cài đặt tài khoản",
          icon: require("@/assets/img/Setting.svg"),
        },
        {
          name: "Quản lý tài khoản",
          icon: require("@/assets/img/qunalytk.svg"),
        },
        {
          name: "Cài đặt dòng tiền",
          icon: require("@/assets/img/qldongtien.svg"),
        },
        {
          name: "Lịch sử dòng tiền",
          icon: require("@/assets/img/lichsudongtien.svg"),
        },
        {
          name: "Đối soát dòng tiền",
          icon: require("@/assets/img/doisoatdongtien.svg"),
        },
        {
          name: "Nhật ký hoạt động",
          icon: require("@/assets/img/nhatkyhaotdong.svg"),
        },
      ],
    };
  },
};
</script>
