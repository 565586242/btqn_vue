import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'mint-ui/lib/style.css'

import 'normalize.css/normalize.css'
import 'lib-flexible';

Vue.config.productionTip = false

import { Navbar, TabItem } from 'mint-ui';
import { TabContainer, TabContainerItem } from 'mint-ui';
import { Radio } from 'mint-ui';

Vue.component(Radio.name, Radio);
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
