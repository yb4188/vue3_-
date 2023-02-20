<template>
  <!-- 首页入口 -->
  <div class="page-home">
    <div class="home-entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory />
        <!-- 轮播图 -->
        <HomeBanner></HomeBanner>
      </div>
    </div>
  </div>
</template>
<script>
import HomeCategory from "./home-category.vue";
import HomeBanner from "./home-banner.vue";
export default {
  name: "PageHome",
  components: { HomeCategory, HomeBanner },
};
</script>
<style scoped lang="less"></style>
