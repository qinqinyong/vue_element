import Vue from 'vue'
import App from './App.vue'

//完整引入ui库
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';

// 按需引入
import { Button, Select } from 'element-ui';

// Vue.use(ElementUI);

Vue.use(Button);

Vue.config.productionTip = false

 


new Vue({
  render: h => h(App),
}).$mount('#app')
