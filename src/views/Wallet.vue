<template>
  <WalletHeader :username="username" :userImage="userImage" />
  <main>
    <WalletTabs @tabChanged="handleTabChange" />
    <WalletList v-if="activeTab === 'tasks'" :tasks="tasks" />
    <template v-if="activeTab === 'tasks'">
      <WalletAd :adBanner="banner" />
      <WalletJobs :jobs="lowPriceJobs" />
    </template>
    <WalletHistory v-if="activeTab === 'history'" :history="history" />
  </main>
</template>

<script>
import WalletHeader from "@/components/WalletHeader.vue";
import WalletTabs from "@/components/WalletTabs.vue";
import WalletList from "@/components/WalletList.vue";
import WalletHistory from "@/components/WalletHistory.vue";
import WalletAd from "@/components/WalletAd.vue";
import WalletJobs from "@/components/WalletJobs.vue";

// Import các hình ảnh bạn cần sử dụng
import avatarImage from "@/assets/img/avatar1.svg";
import bannerImage from "@/assets/img/banner1.svg";
import likeIcon from "@/assets/img/like-1.svg";
import shareIcon from "@/assets/img/Share.svg";
import newsImage from "@/assets/img/tintuc1.svg";

export default {
  name: "WalletView",
  components: {
    WalletHeader,
    WalletTabs,
    WalletList,
    WalletHistory,
    WalletAd,
    WalletJobs,
  },
  data() {
    return {
      username: '',
      userImage: '',
      activeTab: "tasks",
      avatar: avatarImage,  // Sử dụng hình ảnh đã import
      banner: bannerImage,
      tasks: [
        {
          title: "Like bài viết",
          description: "Thành Dũng vừa cập nhật",
          icon: likeIcon,
          reward: "350đ",
          progress: 25,
        },
        {
          title: "Share bài viết",
          description: "Thành Dũng vừa cập nhật",
          icon: shareIcon,
          reward: "500đ",
          progress: 50,
        },
      ],
      history: [
        {
          title: "Hoàn thành nhiệm vụ Like bài viết",
          description: "Bạn đã nhận được tiền thưởng",
          icon: likeIcon,
          reward: "350đ",
        },
        {
          title: "Hoàn thành nhiệm vụ Share bài viết",
          description: "Bạn đã nhận được tiền thưởng",
          icon: shareIcon,
          reward: "500đ",
        },
      ],
      lowPriceJobs: [
        { image: newsImage },
        { image: newsImage },
      ],
    };
  },
  methods: {
    handleTabChange(tab) {
      this.activeTab = tab;
    },
  },
  mounted() {
    const userData = localStorage.getItem('user')
    if (userData) {
      const user = JSON.parse(userData)
      this.username = user.username
      this.userImage = user.image;
      // this.balance = user.balance || 0
    //   const userId = user.id;

    // // Gọi API để lấy danh sách người dùng
    // fetch('https://dummyjson.com/users')
    //   .then(res => res.json())
    //   .then(data => {
    //     const matchedUser = data.users.find(u => u.id === userId);
    //     const cardNumber = matchedUser?.bank?.cardNumber;

    //     console.log('Card Number:', cardNumber);

    //     // Nếu muốn lưu lại trong component
    //     this.cardNumber = Number(cardNumber);
    //   }) 
    }
  },
};
</script>
