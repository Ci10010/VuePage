import axios from 'axios'

export function request(config) {
  // 创建axios实例
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:3000',
    timeout: 10000
  });
  // 发送网络请求
  return instance(config);
}