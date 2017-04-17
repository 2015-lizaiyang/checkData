// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import MintUi from 'mint-ui'
import { Header, Search, InfiniteScroll, DatetimePicker, Button } from 'mint-ui'
import 'mint-ui/lib/style.css'
import Remote  from './plugins/remote'
Vue.component(Header.name, Header);
Vue.component(Search.name, Search);
Vue.component(DatetimePicker.name, DatetimePicker);
Vue.component(Button.name, Button);
Vue.use(router)
Vue.use(MintUi)
Vue.use(InfiniteScroll);
Vue.use(Remote, process.env.remote)

Vue.config.productionTip = false
window.Bus = new Vue();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  render: h => h(App)
})
