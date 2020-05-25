<template>
  <div style="height: 49px;margin: 0" v-if="$route.meta.hasTab">
    <div class="tab-div">
      <div class="tab-item" :class="[tabIndex == index?'tab-item-select':'']" v-for="(item,index) in tabArr" :key="index"
        @click="$emit('tabItemClick',index)"
      >
        <img :src="tabIndex != index?item.icon:item.selectIcon" alt="" srcset="">
        <p>{{item.title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabIndex: {
      default: 0
    },
    tabArr: {
      type: Array,
      default: []
    }
  }
}
</script>

<style lang="less" scoped>
.tab-div{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  .tab-item{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 49px;
    &.tab-item-select{
      p{
        color: #1F2A65;
      }
    }
    img{
      width: 21px;
      height: 21px;
      object-fit: contain;
    }
    p{
      margin: 0;
      color: #7c7c7c;
    }
  }
  
}
</style>