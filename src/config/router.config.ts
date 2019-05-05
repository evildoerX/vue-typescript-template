import { routerItem } from '@/interface';

export const appRouter: routerItem[] = [
  {
    path: '/',
    name: '',
    meta: { title: '首页' },
    component: () => import('@/views/Home/')
  }
];

export const routers = [...appRouter];
