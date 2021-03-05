import axios from 'axios';
import store from '../store';
import {getToken} from './auth';
import showToast from './toast';

// create an axios instance
const service = axios.create({
  baseURL: 'http://192.168.2.92:6673/learn',
  timeout: 5000, // request timeout
});

// request interceptor
service.interceptors.request.use(
  (config) => {
    if (store.token) {
      config.headers['X-Token'] = getToken();
    }
    return config;
  },
  (error) => {
    showToast('请求失败');
    return Promise.reject(error);
  },
);

// response interceptor
service.interceptors.response.use(
  (response) => {
    const res = response.data;

    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 200) {
      showToast(res.message || '请求失败');
      return Promise.reject(new Error(res.message || 'Error'));
    } else {
      return res;
    }
  },
  (error) => {
    console.log('err: ' + error); // for debug
    showToast(error.message || '请求失败');
    return Promise.reject(error);
  },
);

export default service;
