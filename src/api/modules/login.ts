import service from '@/api/http';

const loginApi = {
  // 验证登录实例
  postVerification: (params: object) => service.post(`/auth/admin_login/`, params),
};

export default loginApi;
