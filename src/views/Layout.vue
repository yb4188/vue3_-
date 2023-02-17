<template>
  <AppTopNav></AppTopNav>
  <AppHeader></AppHeader>
  <main>
    <!-- 二级路由 -->
    <router-view></router-view>
  </main>
  <AppFooter></AppFooter>
</template>

<script>
import AppTopNav from '../components/app-topNav.vue'
import AppHeader from '../components/app-header.vue'
import AppFooter from '../components/app-footer.vue'
export default {
  name: "xtx-Layout",
  components: {
    AppTopNav,
    AppHeader,
    AppFooter
  }
};
</script>

<style scoped lang="less">

</style>