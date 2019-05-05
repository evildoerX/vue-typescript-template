import Vue from 'vue';
import Router, { RouterOptions } from 'vue-router';
import { routers } from '@/config/router.config';

Vue.use(Router);

export default new Router({
  routes: routers
});
