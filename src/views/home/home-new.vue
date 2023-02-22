<template>
  <div class="home-new" ref="target">
    <HomePanel title="新鲜好物" sub-title="新鲜出炉 品质靠谱">
      <template #right><XtxMore path="/" /></template>
      <!-- 面板内容 -->
      <transition name="fade">
        <ul class="goods-list" v-if="goods.length">
          <li v-for="item in goods" :key="item.id">
            <RouterLink :to="`/product/${item.id}`">
              <img :src="item.picture" alt="" />
              <p class="name ellipsis">{{ item.name }}</p>
              <p class="price">&yen;{{ item.price }}</p>
            </RouterLink>
          </li>
        </ul>
        <HomeSekleton bg="#f0f9f4" v-else></HomeSekleton>
      </transition>
    </HomePanel>
  </div>
</template>
<script>
import { ref } from "vue";
import HomePanel from "./home-panel";
import HomeSekleton from "./home-sekleton.vue";
import { findNew } from "@/api/home";
import { useLazyData } from "@/hooks";
export default {
  name: "HomeNew",
  components: { HomePanel, HomeSekleton },
  setup() {
    const goods = ref([]);
    //获取商品数据
    findNew().then((data) => {
      goods.value = data.result;
    });

    //使用懒加载 加载商品数据
    //const { target, result: goods } = useLazyData(findNew);
    return { goods };
  },
};
</script>
<style scoped lang="less">
.goods-list {
  display: flex;
  justify-content: space-between;
  height: 406px;
  li {
    width: 306px;
    height: 406px;
    background: #f0f9f4;
    .hoverShadow();
    img {
      width: 306px;
      height: 306px;
    }
    p {
      font-size: 22px;
      padding: 12px 30px 0 30px;
      text-align: center;
    }
    .price {
      color: @priceColor;
    }
  }
}
</style>
