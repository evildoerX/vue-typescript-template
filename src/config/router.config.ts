import { routerItem } from '@/interface';
import hellow from '../components/HelloWorld.vue';

export const appRouter: routerItem[] = [
  {
    path: '/',
    name: '',
    meta: { title: '首页' },
    component: hellow
  }
];

export const routers = [...appRouter];
