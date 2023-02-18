<template>
  <AppTopNav></AppTopNav>
  <AppHeader></AppHeader>
  <AppHeaderSticky></AppHeaderSticky>
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
import AppHeaderSticky from '../components/app-header-sticky.vue'
import { useStore } from 'vuex';

export default {
  name: "xtx-Layout",
  components: {
    AppTopNav,
    AppHeader,
    AppFooter,
    AppHeaderSticky
  },
  setup(){
    const store = useStore()
    store.dispatch('category/getList')
    return
  }
};
</script>

<style scoped lang="less">

</style>