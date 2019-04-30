import Vue from 'vue';
// 自定义全局组件
import App from '@/App';
import router from '@/router';
import store from '@/store';
import { message } from 'ant-design-vue';
import i18n from './lang';
import './styles/global.less';

Vue.prototype.$message = message;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
