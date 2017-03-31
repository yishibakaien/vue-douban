<template>
  <div class="movices">
    <loading v-if="movices.length===0"></loading>
    <div v-else>
      <h1>{{ msg }}</h1>
      <div v-for="(item, index) in movices">{{movices[index].title}}</div>
    </div>
  </div>
</template>

<script>
import loading from '../loading/loading.vue';
export default {
  components: {
    loading
  },
  props: {
    movices: {
      type: Array
    }
  },
  data() {
    return {
      msg: '这里是电影列表'
    };
  },
  created() {
    // console.log(this.movices)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus">

</style>
