<template>
  <div class="new-and-hotsearch">
    {{message}}
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: '我是新增热搜'
    };
  }
};
</script>

<style lang="stylus">
  .new-and-hotsearch
    height 50px
</style>
