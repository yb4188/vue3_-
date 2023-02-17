import { createStore } from "vuex";
//引入vuex-persistedstate插件进行vuex持久化
import createPersistedState from "vuex-persistedstate";

import cart from './modules/cart';
import user from "./modules/user";
import category from "./modules/category";

export default createStore({
  modules: {
    cart,
    user,
    category,
  },
  plugins: [createPersistedState({
    key: 'erabbit-client-pc-store',
    paths: ['user', 'cart']
  })],
})

