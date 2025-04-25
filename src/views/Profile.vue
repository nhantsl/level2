<template>
  <ProfileHeader />
  <main class="pt-4">
    <ProfileBalance userName="Nguyễn Thành Dũng" :balance="500000" />
    <ProfileBankInfo :pendingMoney="250000000" :needRevision="350000" />
    <ProfileFunction :functions="functions" />
  </main>
</template>

<script>
import ProfileHeader from "@/components/ProfileHeader.vue";
import ProfileBalance from "@/components/ProfileBalance.vue";
import ProfileBankInfo from "@/components/ProfileBankInfo.vue";
import ProfileFunction from "@/components/ProfileFunction.vue";
import settingIcon from "@/assets/img/Setting.svg";
import manageIcon from "@/assets/img/qunalytk.svg";
import cashSettingIcon from "@/assets/img/qldongtien.svg";
import cashHistoryIcon from "@/assets/img/lichsudongtien.svg";
import cashVerifyIcon from "@/assets/img/doisoatdongtien.svg";
import activityLogIcon from "@/assets/img/nhatkyhaotdong.svg";

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
        { name: "Cài đặt tài khoản", icon: settingIcon },
        { name: "Quản lý tài khoản", icon: manageIcon },
        { name: "Cài đặt dòng tiền", icon: cashSettingIcon },
        { name: "Lịch sử dòng tiền", icon: cashHistoryIcon },
        { name: "Đối soát dòng tiền", icon: cashVerifyIcon },
        { name: "Nhật ký hoạt động", icon: activityLogIcon },
      ],
    };
  },
};
</script>
