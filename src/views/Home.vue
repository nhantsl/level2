<template>
  <HeaderComponent
    :username="username"
    :balance="cardNumber"
    :banners="banners"
    :userImage="userImage"
  />
  <FeatureList :features="features" />
  <NewsList :newsList="newsList" />
</template>

<script>
import HeaderComponent from "@/components/HomeHeader.vue";
import FeatureList from "@/components/HomeFunction.vue";
import NewsList from "@/components/HomeNews.vue";

// Import các hình ảnh và gán vào các biến
import bannerImage from "@/assets/img/banner.svg";
import inviteIcon from "@/assets/img/Mời bạn.svg";
import supportIcon from "@/assets/img/Hỗ trợ.svg";
import withdrawIcon from "@/assets/img/Rút tiền.svg";
import communityIcon from "@/assets/img/Cộng đồng.svg";
import taskIcon from "@/assets/img/Nhiệm vụ.svg";
import accountIcon from "@/assets/img/Tài khoản.svg";
import newsImage from "@/assets/img/tintuc.svg";
import newsImage2 from "@/assets/img/tintuc2.svg";

export default {
  name: "Home",
  components: {
    HeaderComponent,
    FeatureList,
    NewsList,
  },
  data() {
    return {
      username: '',
      cardNumber: 0,
      userImage: '',
      banners: [
        bannerImage,
        bannerImage,
        bannerImage,
      ],
      features: [
        { name: "Mời bạn", icon: inviteIcon },
        { name: "Hỗ trợ", icon: supportIcon },
        { name: "Rút tiền", icon: withdrawIcon },
        { name: "Cộng đồng", icon: communityIcon },
        { name: "Nhiệm vụ", icon: taskIcon },
        { name: "Tài khoản", icon: accountIcon },
      ],
      newsList: [
        { title: "News 1", image: newsImage },
        { title: "News 2", image: newsImage2 },
        { title: "News 3", image: newsImage },
      ],
    };
  },
  mounted() {
    const userData = localStorage.getItem('user')
    if (userData) {
      const user = JSON.parse(userData)
      this.username = user.username
      this.userImage = user.image;
      // this.balance = user.balance || 0
      const userId = user.id;

    // Gọi API để lấy danh sách người dùng
    fetch('https://dummyjson.com/users')
      .then(res => res.json())
      .then(data => {
        const matchedUser = data.users.find(u => u.id === userId);
        const cardNumber = matchedUser?.bank?.cardNumber;

        console.log('Card Number:', cardNumber);

        // Nếu muốn lưu lại trong component
        this.cardNumber = Number(cardNumber);
      }) 
    }
  },
};
</script>
