// 路由变成单数组(不嵌套)
export default function handleRouter(routerList: any, res: object[] = []) {
  routerList.forEach((el: any) => {
    if (el.path && !el.hidden) {
      res.push({ path: el.path, name: el.name, title: el.meta.title, icon: el.meta?.icon, no: el.meta.sort });
    }
    if (el.children?.length > 1) {
      handleRouter(el.children, res);
    }
  });
  return res;
}
