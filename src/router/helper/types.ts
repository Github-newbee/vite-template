import type { RouteRecordRaw, RouteMeta } from 'vue-router';

interface IRouteMeta extends RouteMeta {
  // roles?: RoleEnum[];
  sort?: number;
}

export interface AppRouteRecordRaw extends Omit<RouteRecordRaw, 'meta'> {
  name: string;
  meta: IRouteMeta;
  // children?: AppRouteRecordRaw[];
  hidden?: boolean;
  // 是否为三级菜单
  isThree?: boolean;
}

export type AppRouteModule = AppRouteRecordRaw;
