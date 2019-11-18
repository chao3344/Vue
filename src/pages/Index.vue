<template>
    <div class="all-content">
      <header>
        <ul>
          <li class="logo">
            <a href=""><i class="logo-mtime"></i></a>
          </li>
          <router-link tag="li" to="/index/movies" class="nav-li" active-class="active">首页</router-link>
          <router-link tag="li" class="nav-li" to="/index/theater" active-class="active">购票</router-link>
          <router-link tag="li" class="nav-li" to="/index/shop" active-class="active">商城</router-link>
          <router-link tag="li" class="nav-li" to="/index/news" active-class="active">发现</router-link>
          <li class="nav-ico">
            <a href=""><i><span class="yo-ico">&#xe8bc;</span></i></a>
          </li>
        </ul>
      </header>
      <main>
        <router-view></router-view>
      </main>
      <footer></footer>
    </div>
  </template>
  
  <style lang="stylus">
.all-content
    display flex
    flex-direction column
    height 100%
  header
    width 100%
    height .528rem
    background #1c2635
    ul
      display flex
      height: 100%
      justify-content space-around
      .nav-li
        flex 1
        text-align center
        display inline-block
        box-sizing border-box
        height 100%
        color #bbb
        font-size .15rem
        font-weight bold
        line-height .52rem
      .active
        border-bottom .03rem solid #fff
        color #fff
      .logo
        
        text-align center
        line-height .528rem
        flex 2
        a
          display inline-block
          line-height .528rem
          height 100%
          .logo-mtime
            display inline-block
            width .67rem
            height .21rem
            background url('../assets/images/logo.png') no-repeat
            background-size contain
      .nav-ico
        flex 1
        text-align center
        a
          color #bbb
          font-size .15rem
          font-weight bold
          height 100%
          width 100%
          display block
          line-height .528rem
          i
            font-size .24rem
            width .14rem
            height .18rem
            display inline-block
  main
    flex 1
    overflow hidden
  
  </style>
  