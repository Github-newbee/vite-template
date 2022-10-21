import { createI18n } from 'vue-i18n';

// element-plus 国际化文件
import elementZhCn from 'element-plus/lib/locale/lang/zh-cn';
import elementEn from 'element-plus/lib/locale/lang/en';
import cache from '@/store/helper/cacheFun';
import zh from './lang/zh-CN';
import en from './lang/en-US';

// const zh = import.meta.glob('./lang/**/zh-CN.ts');
// const en = import.meta.glob('./lang/**/en-US.ts');

// 获取文件夹下文件
export const loadLang = (modules: Record<string, any>) => {
  console.log('modules: ', modules);
  const messages: { [key: string]: string } = {};
  Object.keys(modules).forEach((key) => {
    Object.assign(messages, { ...modules[key].default });
    console.log('messages: ', messages);
  });
  return messages;
};
export const messages: { [key: string]: any } = {
  'zh-CN': {
    langName: '简体中文',
    ...zh,
    el: {
      ...elementZhCn,
    },
  },
  'en-US': {
    langName: 'English',
    ...en,
    // ...loadLang(en),
    el: {
      ...elementEn,
    },
  },
};

// 返回当前语言
function getLanguage() {
  return cache.getLanguage();
}

export const i18n = createI18n({
  locale: getLanguage(),
  messages,
  // messages: {
  //   'zh-CN': {
  //     app: {
  //       title: 'Admin',
  //     },
  //   },
  //   'en-US': {
  //     app: {
  //       title: '后台',
  //     },
  //   },
  // },
});
