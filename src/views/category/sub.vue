<template>
  <!-- 面包屑 -->
  <xtx-bread
    v-if="category.sub"
    :parentPath="`/category/${category.top.id}`"
    :parentName="category.top.name"
    >{{ category.sub.name }}</xtx-bread
  >
  <!-- 商品筛选 -->
  <SubFilter></SubFilter>
  <!-- 条件筛选栏 -->
  <SubSort></SubSort>
</template>
<script>
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { computed, ref } from "vue";
import SubFilter from "./sub-filter.vue";
import SubSort from "./sub-sort.vue";
export default {
  name: "SubCategory",
  setup() {
    // 注意：setup中this不是当前vue实例
    // 1. 获取二级分类的ID，在地址在路由中
    const route = useRoute();
    // 2. 获取vuex中的类目数据
    // store ===> this.$store
    const store = useStore();
    // 3. 通过计算属性得到，二级类目的名称和ID，一级类目的名称和ID
    const category = computed(() => {
      const obj = {};
      store.state.category.list.forEach((top) => {
        top.children &&
          top.children.forEach((sub) => {
            if (sub.id === route.params.id) {
              // 设置二级类目
              obj.sub = { id: sub.id, name: sub.name };
              // 设置一级类目
              obj.top = { id: top.id, name: top.name };
            }
          });
      });
      return obj;
    });

    //复选框数据
    const isAllchecked = ref(true);
    return {
      category,
      isAllchecked,
    };
  },
  components: { SubFilter, SubSort },
};
</script>

<style></style>
