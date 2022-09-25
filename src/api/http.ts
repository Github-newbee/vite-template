import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';
import NProgress from 'nprogress';
import showCodeMessage from '@/api/code';
import { formatJsonToUrlParams, instanceObject } from '@/utils/format';
import { userStoreFun } from '@/store/modules/user';

const BASE_PREFIX = import.meta.env.VITE_API_BASEURL;
const API_URL = import.meta.env.VITE_API_URL;
// const APP_ID = import.meta.env.VITE_GLOB_APP_ID;
// 创建实例
const axiosInstance: AxiosInstance = axios.create({
  // 请求路径
  baseURL: `${API_URL}${BASE_PREFIX}`,
  // 超时
  timeout: 1000 * 30,
  // 请求头
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
});

// 请求拦截器
axiosInstance.interceptors.request.use(
  (config: any) => {
    console.log('config: ', config);
    NProgress.start();
    // 添加token
    const store = userStoreFun();
    if (store.token) {
      config.headers.Authorization = store.token;
    }
    // 追加时间戳，防止GET请求缓存
    if (config.method?.toUpperCase() === 'GET') {
      config.params = { ...config.params, t: new Date().getTime() };
    }

    // 请求AppId
    // config.headers['Xi-App-Id'] = APP_ID;
    // TODO 在这里可以加上想要在请求发送前处理的逻辑
    // TODO 比如 loading 等
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status === 200) {
      if (response.data.ErrMsg && response.data.ErrCode !== 0) {
        ElMessage.error(response.data.ErrMsg);
      }
      return response.data;
    }

    ElMessage.info(JSON.stringify(response.status));
    return response;
  },
  (error: AxiosError) => {
    const { response } = error;
    if (response) {
      ElMessage.error(showCodeMessage(response.status));
      return Promise.reject(response.data);
    }
    ElMessage.warning('网络连接异常,请稍后再试!');
    return Promise.reject(error);
  },
);
const service = {
  get<T = any>(url: string, data?: object): Promise<T> {
    return axiosInstance.get(url, { params: data });
  },

  post<T = any>(url: string, data?: object): Promise<T> {
    return axiosInstance.post(url, data);
  },

  put<T = any>(url: string, data?: object): Promise<T> {
    return axiosInstance.put(url, data);
  },

  delete<T = any>(url: string, data?: object): Promise<T> {
    return axiosInstance.delete(url, data);
  },

  upload: (url: string, file: FormData | File) =>
    axiosInstance.post(url, file, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
  download: (url: string, data: instanceObject) => {
    window.location.href = `${BASE_PREFIX}/${url}?${formatJsonToUrlParams(data)}`;
  },
};

export default service;
