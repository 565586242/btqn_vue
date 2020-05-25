<template>
  <div class="body">
    <label for="changeFile">
      <img :src="imgUrl?imgUrl:rootImg" alt="" srcset="">
      <p>点击修改头像</p>
      <input type="file" id="changeFile" style="display:none" @change="fileChange($event)">
    </label>
    <input-tile title="昵称" placeholder="请输入昵称" @inputChange="inputChange"></input-tile>
    <block-button @click.native="submitClock()">保存修改</block-button>
  </div>
</template>

<script>
import InputTile from "components/common/InputTile";
import BlockButton from 'components/common/BlockButton';
import { baseURL } from '@/global-config';
import { mapActions } from 'vuex';
import { Toast } from 'mint-ui';
export default {
  components: { InputTile,BlockButton },
  data() {
    return {
      rootUrl: baseURL,
      rootImg: require('assets/image/img_touxiang@2x.png'),
      imgUrl: '',
      nickname: ''
    }
  },
  methods: {
    ...mapActions([
      "changeInfo"
    ]),
    fileChange(e){
      const _this = this
      let file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64 = e.target.result
        _this.imgUrl = base64
      };
      reader.readAsDataURL(file);
    },
    inputChange(data) {
      this.nickname = data
    },
    submitClock() {
      const _this = this
      this.changeInfo({
        user_name: this.nickname,
        user_head: this.imgUrl.indexOf('data:image') == '-1'?'':this.imgUrl
      }).then(res => {
        if(res && res.code == 200){
          Toast({
            message: res.msg,
            duration: 1000
          })
          _this.$router.back()
        }
      })
    }
  },
  created() {
    this.imgUrl = this.$store.state.user.userInfo.user_head?this.rootUrl + '/' + this.$store.state.user.userInfo.user_head: ''
  }
}
</script>

<style lang="less" scoped>
.body{
  box-sizing: border-box;
  min-height: calc(100vh - 113px);
  background-color: #f6f6f6;
  padding-top: 0.8rem;
  img{
    display: block;
    width: 2.6667rem;
    height: 2.6667rem;
    border-radius: 50%;
    margin: auto;
  }
  p{
    text-align: center;
    font-size: 0.3733rem;
    color: #263F7A;
  }
}
</style>