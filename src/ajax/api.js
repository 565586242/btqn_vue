import {get, post} from './http';
//登录接口
export const homelogin = p => post('/homelogin', p)
//注册
export const homeregister = p => post('/homeregister', p)
//获取手机号验证码
export const getphonecode = p => post('/getphonecode', p)
//修改密码
export const homeresetpass = p => post('/homeresetpass', p)

//获取首页数据
export const homeindex = p => get('/homeindex', p)
//获取问题详情
export const homeissues = p => get('/homeissues', p)

//申请抱团页面
export const homeorder = p => get('/homeorder', p)
//申请抱团提交
export const ordersubmit = p => post('/ordersubmit', p)
//抱团申请问题页
export const homeanswer = p => get('/homeanswer', p)
//提交申请页(问题)
export const buyorderlist = p => get('/buyorderlist', p)
//修改支付方式
export const changepaytype = p => post('/changepaytype', p)
//上传支付方式
export const uploadimage = p => post('/uploadimage', p)

//审核抱团页面
export const auditMeans = p => get('/auditMeans', p)
//确认收款页面
export const orderDetails = p => get('/orderDetails', p)
//确认收款
export const confirmReceipt = p => get('/confirmReceipt', p)
//确认打款
export const confirmMoney = p => post('/confirmMoney', p)

//我的团队
export const myTeam = p => get('/myTeam', p)
//我的上级
export const highuper = p => get('/highuper', p)
//收款信息
export const paymentpost = p => post('/payment', p)
//我的信息修改
export const myinfoget = p => get('/homemine', p)
export const myinfopost = p => post('/myinfo', p)
//我的邀请
export const homeinvite = p => get('/homeinvite', p)
//修改微信号
export const wechatnumberpost = p => post('/wechatnumber', p)
//退出账户
export const homelogout = p => post('/homelogout', p)
