import axios from 'axios'
import QS from 'qs';
import { baseURL } from '@/global-config';
import { Toast,Indicator } from 'mint-ui';
import store from '@/store/user'

axios.defaults.timeout = 10000
axios.defaults.baseURL = baseURL

//http request 拦截器
axios.interceptors.request.use(
  config => {
    Indicator.open({
      spinnerType: 'fading-circle'
    });
    config.data = config.data
    config.headers = {
      'Content-Type':'application/x-www-form-urlencoded',
      'token': store.state.token
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  response => {
    Indicator.close();
    if(response.status == 200){
      if(response.data.code == 200){
        return Promise.resolve(response);
      }else if(response.data.code == 1){
        var toastResult = Toast({
          message: response.data.msg,
          duration: 1000
        })
        setTimeout(() => {
          toastResult.close()
          location.href = ''
        }, 1000);
      }else{
        Toast({
          message: response.data.msg,
          duration: 1000
        })
      }
      return false
    }else{
      return Promise.reject(response)
    }
  },
  error => {
    if(error.response.status){
      switch (error.response.status) {
        case 404:     
          Toast({
            message: '网络请求不存在',
            duration: 1500
          });     
          break;
        default:
          Toast({
            message: '请求错误',
            duration: 1500
          });  
          break;
      }
    }
    return Promise.reject(error.response);  
  }
)

//封装get方法
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  });
}

//封装post方法
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, QS.stringify(params))
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  });
}