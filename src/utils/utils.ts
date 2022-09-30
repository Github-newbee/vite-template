export default function handleRouter(routerList: any, res: string[] = []) {
  routerList.forEach((el: any) => {
    if (el.path) {
      res.push(el.path);
    }
    if (el.children?.length) {
      handleRouter(el.children, res);
    }
  });
  return res;
}
