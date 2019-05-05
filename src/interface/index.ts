export interface routerItem {
  name?: string;
  component?: any;
  path: string;
  icon?: string;
  hidden?: boolean;
  permission?: string | string[] | boolean;
  redirect?: string | object;
  children?: routerItem[];
  meta?: any;
  type?: string;
}
