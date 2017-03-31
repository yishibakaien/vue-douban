<template>
  <div>
    <v-header></v-header>

    <div class="container">
      <div class="wrapper">
        <keep-alive>
          <router-view :movices="movices"></router-view>
        </keep-alive>
      </div>
    </div>

  </div>
</template>

<script>
import header from './components/header/header';
const ERR_OK = 200;
export default {
  data () {
    return {
      movices: []
    };
  },
  components: {
    vHeader: header
  },
  created () {
    this.$http.get('api/in_theaters').then((response) => {
      console.log(response.body);
      if (response.status === ERR_OK) {
        this.movices = this.movices.concat(response.body.subjects);
        console.log(this.movices);
      }
    });
  }
};
</script>

<style lang="stylus">
  .container
    .wrapper
      width 1200px
      margin 0 auto
</style>
