<template>
  <HeaderComponent
    username="Nguyễn Thành Dũng"
    :balance="100000000"
    :banners="banners"
  />
  <FeatureList :features="features" />
  <NewsList :newsList="newsList" />
</template>

<script>
import HeaderComponent from "@/components/HomeHeader.vue";
import FeatureList from "@/components/HomeFunction.vue";
import NewsList from "@/components/HomeNews.vue";

export default {
  name: "Home",
  components: {
    HeaderComponent,
    FeatureList,
    NewsList,
  },
  data() {
    return {
      banners: [
        require("@/assets/img/banner.svg"),
        require("@/assets/img/banner.svg"),
        require("@/assets/img/banner.svg"),
      ],
      features: [
        { name: "Mời bạn", icon: require("@/assets/img/Mời bạn.svg") },
        { name: "Hỗ trợ", icon: require("@/assets/img/Hỗ trợ.svg") },
        { name: "Rút tiền", icon: require("@/assets/img/Rút tiền.svg") },
        { name: "Cộng đồng", icon: require("@/assets/img/Cộng đồng.svg") },
        { name: "Nhiệm vụ", icon: require("@/assets/img/Nhiệm vụ.svg") },
        { name: "Tài khoản", icon: require("@/assets/img/Tài khoản.svg") },
      ],
      newsList: [
        { title: "News 1", image: require("@/assets/img/tintuc.svg") },
        { title: "News 2", image: require("@/assets/img/tintuc2.svg") },
        { title: "News 3", image: require("@/assets/img/tintuc.svg") },
      ],
    };
  },
};
</script>
