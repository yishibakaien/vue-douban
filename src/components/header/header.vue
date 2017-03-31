<template>
  <div class="header">
    <div class="top-wrapper">
      <div class="top">
        <div class="welcome">
          <span class="welcome-text">您好!欢迎</span>
        </div>
        <div class="userinfo">
          <div class="register info-item">
            <i class="iconfont"></i>
            <span>注册</span>
          </div>
          <div class="login info-item">
            <i class="iconfont"></i>
            <span>登录</span>
          </div>
          <div class="getapp info-item">
            <i class="iconfont"></i>
            <span class="">app下载</span>
          </div>
        </div>
      </div>
    </div>
    <div class="nav-wrapper">
      <div class="nav">
        <div class="brand">
        </div>
        <div class="nav-item" title="首页">
          <router-link class="nav-link" to="/movices">首页</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" to="/hot">蕾丝控</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" to="/newandhotsearch">新增热搜</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" to="/supplyandbuy">供应求购</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" to="/finding">大家在找</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" to="/settledmerchants">入驻商家</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" to="/news">实时资讯</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" to="/storemanagement">仓库管理</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus">
  .header
    .top-wrapper
      background #f1f1f1
      .top
        position relative
        width 1200px
        height 30px
        line-height 30px
        margin 0 auto
        .welcome
          float left
          font-size 12px
        .userinfo
          float right
          cursor pointer
          font-size 12px
          .info-item
            padding 0 8px
            display inline-block
    .nav-wrapper
      // border-bottom 1px solid #d9d9d9
      .nav
        display flex
        width 1200px
        height 90px
        margin 0 auto

        .brand
          flex 0 0 150px
          width 150px
          background blue
          background url('logo.png')
          background-repeat no-repeat
          background-position 0 10px
        .nav-item
          text-align center
          flex 1
          .nav-link
            display inline-block
            width 80px
            line-height 14px
            padding 10px 0
            margin-top: 30px
            border-radius 5px
            font-size 14px
            cursor pointer
            &.active
              background #3385ff
              color #fff
              box-shadow 0 0 2px rgba(0, 0, 0, .5)

</style>
