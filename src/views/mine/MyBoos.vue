<template>
  <div class="body">
    <card-div :cardData="$store.state.user.myBoos"></card-div>
  </div>
</template>

<script>
import CardDiv from 'components/home/CardDiv';
import { mapActions } from 'vuex';
export default {
  components: { CardDiv },
  methods: {
    ...mapActions([
      "getBoos"
    ])
  },
  created() {
    this.getBoos()
  }
}
</script>

<style lang="less" scoped>
.body{
  overflow: auto;
  min-height: calc(100vh - 113px);
  background-color: #f6f6f6;
}
</style>