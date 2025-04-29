<template>
  <ProfileHeader />
  <main class="pt-4">
    <ProfileBalance :username="username" :balance="balance" />
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
      username: '',
      balance: 0,
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
