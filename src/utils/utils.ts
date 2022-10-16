export default function handleRouter(routerList: any, res: object[] = []) {
  routerList.forEach((el: any) => {
    if (el.path && !el.hidden) {
      res.push({ path: el.path, name: el.name, title: el.meta.title, icon: el.meta?.icon });
    }
    if (el.children?.length > 1) {
      handleRouter(el.children, res);
    }
  });
  return res;
}
