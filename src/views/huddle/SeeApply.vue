<template>
  <div class="body">
    <apply-list 
      v-for="(item,index) in $store.state.huddle.submitApplyList" 
      :key="index"
      :applyData="item"
    ></apply-list>
  </div>
</template>

<script>
import ApplyList from 'components/huddle/ApplyList';
import { mapActions } from 'vuex';
export default {
  methods: {
    ...mapActions([
      "seeBuyorderlist"
    ]),
  },
  components: {
    ApplyList
  },
  created() {
    this.seeBuyorderlist()
  }
}
</script>

<style lang="less" scoped>
.body{
  overflow: auto;
  min-height: calc(100vh - 64px);
  background-color: #f6f6f6;
}
</style>