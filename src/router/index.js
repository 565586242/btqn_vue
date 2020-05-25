import Vue from 'vue'
import VueRouter from 'vue-router'

const LoginPwd = () => import('views/init/LoginPwd.vue') //登录
const Register = () => import('views/init/Register.vue') //注册
const ForgetPwd = () => import('views/init/ForgetPwd.vue') //修改密码
const Index = () => import('views/home/Index.vue') //首页
const CommonQus = () => import('views/home/CommonQus.vue') //常见问题
const ApplyUnity = () => import('views/huddle/ApplyUnity.vue') //申请抱团
const CheckHuddle = () => import('views/huddle/CheckHuddle.vue') //审核抱团
const SubmitApply = () => import('views/huddle/SubmitApply.vue') //提交问题
const SeeApply = () => import('views/huddle/SeeApply.vue') //查看申请
const ConfirmGet = () => import('views/huddle/ConfirmGet.vue') //确认收款
const ConfirmSend = () => import('views/huddle/ConfirmSend.vue') //确认打款
const Mine = () => import('views/mine/Mine.vue') //我的
const MyInfo = () => import('views/mine/MyInfo.vue') //我的
const MyBoos = () => import('views/mine/MyBoos.vue') //我的上级
const MyAccount = () => import('views/mine/MyAccount.vue') //收款账户
const ChangeWechat = () => import('views/mine/ChangeWechat.vue') //微信号修改
const MyTeam = () => import('views/mine/MyTeam.vue') //我的团队
const MyInvite = () => import('views/mine/MyInvite.vue') //我的邀请码
const ChangePwd = () => import('views/mine/ChangePwd.vue') //我的邀请码

const SeeOverImage = () => import('components/common/SeeOverImage.vue') //查看图片大图

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    meta: {
      title: "登录"
    },
    component: LoginPwd
  },
  {
    path: '/register',
    meta: {
      title: "注册",
      hasNav: true,
      notFirst: true
    },
    component: Register
  },
  {
    path: '/forgetPwd',
    meta: {
      title: "忘记密码",
      hasNav: true,
      notFirst: true
    },
    component: ForgetPwd
  },
  {
    path: '/home',
    meta: {
      title: "首页",
      hasTab: true
    },
    component: Index
  },
  {
    path: '/commonqus',
    meta: {
      notFirst: true,
      title: "常见问题"
    },
    component: CommonQus
  },
  {
    path: '/applyUnity',
    meta: {
      title: '申请抱团',
      hasTab: true
    },
    component: ApplyUnity
  },
  {
    path: '/checkhuddle',
    meta: {
      title: "审核抱团",
      hasTab: true
    },
    component: CheckHuddle
  },
  {
    path: '/submitApply',
    meta: {
      title: '提交申请',
      hasNav: true,
      notFirst: true,
    },
    component: SubmitApply
  },
  {
    path: '/seeapply',
    meta: {
      hasNav: true,
      notFirst: true,
      title: '查看申请'
    },
    component: SeeApply
  },
  {
    path: '/confirmGet',
    meta: {
      hasNav: true,
      notFirst: true,
      title: '订单详情',
    },
    component: ConfirmGet
  },
  {
    path: '/confirmSend',
    meta: {
      hasNav: true,
      notFirst: true,
      title: '订单详情',
    },
    component: ConfirmSend
  },
  {
    path: '/mine',
    meta: {
      title: '个人中心',
      hasTab: true
    },
    component: Mine
  },
  {
    path: "/myinfo",
    meta: {
      title: "个人信息",
      hasNav: true,
      notFirst: true
    },
    component: MyInfo
  },
  {
    path: '/myboos',
    meta: {
      title: '上级信息',
      hasNav: true,
      notFirst: true
    },
    component: MyBoos
  },
  {
    path: '/myaccount',
    meta: {
      title: '收款账号',
      hasNav: true,
      notFirst: true
    },
    component: MyAccount
  },
  {
    path: '/changewechat',
    meta: {
      title: '微信号修改',
      hasNav: true,
      notFirst: true
    },
    component: ChangeWechat
  },
  {
    path: '/myteam',
    meta: {
      title: '我的团队',
      hasNav: true,
      notFirst: true
    },
    component: MyTeam
  },
  {
    path: '/myinvite',
    meta: {
      title: "我的邀请码",
      notFirst: true
    },
    component: MyInvite
  },
  {
    path: '/changepwd',
    meta: {
      title: "修改密码",
      hasNav: true,
      notFirst: true
    },
    component: ChangePwd
  },
  {
    path: '/seeOverImage',
    component: SeeOverImage
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  routes
})

export default router
