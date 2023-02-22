<template>
  <!-- 首页入口 -->
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
        <!-- 轮播图 -->
        <HomeBanner></HomeBanner>
        <!-- 新鲜好物 -->
        <HomeNew></HomeNew>
        <!-- 人气推荐 -->
        <HomeHot></HomeHot>
        <!-- 热门品牌 -->
        <HomeBrand></HomeBrand>
        <!-- 商品区域 -->
        <HomeProduct></HomeProduct>
        <!-- 最新专题 -->
        <HomeSpecial></HomeSpecial>
      </div>
    </div>
  </div>
</template>
<script>
import HomeCategory from "./home-category.vue";
import HomeBanner from "./home-banner.vue";
import HomeNew from "./home-new.vue";
import HomeHot from "./home-hot.vue";
import HomeBrand from "./home-brand.vue";
import HomeProduct from "./home-product.vue";
import HomeSpecial from "./home-special.vue";
export default {
  name: "PageHome",
  components: {
    HomeCategory,
    HomeBanner,
    HomeNew,
    HomeHot,
    HomeBrand,
    HomeProduct,
    HomeSpecial,
  },
};
</script>
<style scoped lang="less"></style>
