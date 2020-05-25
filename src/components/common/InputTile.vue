<template>
  <div class="input-tile">
    <p>{{title}}</p>
    <div>
      <input type="text" :placeholder="placeholder" @input="inputChange($event.target.value)">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: '',
      type: String
    },
    placeholder: {
      default: "",
      type: String
    }
  },
  methods: {
    inputChange(value) {
      this.$emit('inputChange',value)
    }
  }
}
</script>

<style lang="less" scoped>
.input-tile{
  box-sizing: border-box;
  display: flex;
  align-items: center;
  height: 1.3333rem;
  padding: 0 0.3467rem;
  background-color: #fff;
  font-size: 0.3733rem;
  p{
    width: 1.6667rem;
    color: #282828;
  }
  div{
    flex: 1;
    input{
      display: block;
      width: 100%;
      outline: none;
    }
  }
}
</style>