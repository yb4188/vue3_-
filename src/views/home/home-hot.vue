<template>
  <HomePanel title="人气推荐" sub-title="人气爆款 不容错过">
    <!-- 面板内容 -->
    <transition name="fade">
      <ul  class="goods-list" v-if="goods.length">
        <li v-for="item in goods" :key="item.id">
          <RouterLink to="/">
            <img :src="item.picture" alt="" />
            <p class="name">{{ item.title }}</p>
            <p class="desc">{{ item.alt }}</p>
          </RouterLink>
        </li>
      </ul>
      <HomeSekleton v-else></HomeSekleton>
    </transition>
  </HomePanel>
</template>

<script>
import { ref } from "vue";
import { findHot } from "@/api/home";
import HomePanel from "./home-panel.vue";
import HomeSekleton from "./home-sekleton.vue";
import { useIntersectionObserver } from "@vueuse/core";
import { useLazyData } from "@/hooks";
export default {
  name: "HomeHot",
  components: {
    HomePanel,
    HomeSekleton,
  },
  setup() {
    // 获取商品数据
    const goods = ref([]);
    findHot().then((data) => {
      goods.value = data.result;
    });
    //获取商品数据 使用懒加载
    return {
      goods,
      
    };
  },
};
</script>

<style scoped lang="less">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 426px;
  li {
    width: 306px;
    height: 406px;
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding-top: 12px;
      text-align: center;
    }
    .desc {
      color: #999;
      font-size: 18px;
    }
  }
}
</style>
