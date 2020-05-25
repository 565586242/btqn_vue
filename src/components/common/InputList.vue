<template>
  <div class="input-list">
    <img :src="iconUrl" alt="" srcset="">
    <!-- <input :type="type" 
      :placeholder="placeholder" 
      :value="inputData" 
      @input.self="inputChange(name ,$event.target.value)"
    > -->
    <input :type="type" 
      :placeholder="placeholder" 
      :value="inputData" 
      @input.self="inputChange($event.target.value)"
    >
  </div>
</template>

<script>
export default {
  model: {
    prop: "inputData",
    event: "inputChange"
  },
  props: {
    inputData: {
      type: String,
      default: ''
    },
    iconUrl: {
      type: String
    },
    type: {
      default: "text",
      type: String
    },
    placeholder: {
      default: '',
      required: false,
      type: String
    },
  },
  /* props: {
    placeholder: {
      default: '',
      required: false,
      type: String
    },
    name: {
      type: String,
      default: ''
    },
    iconUrl: {
      type: String
    },
    type: {
      default: "text",
      type: String
    },
    val: {
      default: '',
      type: String
    }
  }, */
  methods: {
    inputChange(value) {
      this.$emit('inputChange',value)
    }
    /* inputChange(key, value) {
      this.$emit('inputChange',value)
      if(key){
        this.$store.commit({
          type: 'setVal',
          key: key,
          value: value
        })
      }
    } */
  }
}
</script>

<style lang="less" scoped>
.input-list{
  position: relative;
  width: 100%;
  margin-top: 0.5333rem;
  img{
    position: absolute;
    top: 0;
    bottom: 0;
    width: 0.2933rem;
    height: 0.44rem;
    margin: auto;
    object-fit: contain;
  }
  input{
    display: block;
    width: 100%;
    height: 1.0667rem;
    border: none;
    border-bottom: 1px solid #ccc;
    text-indent: 0.6rem;
    outline: none;
    font-size: 0.4rem;
  }
}
</style>