<template>
    <div class="content">
        <div class="nav-wrap">
            <div class="nav-head">
                <div class="nav-menu">
                    <router-link class="yo-ico" tag="i" to="/index/movies">&#xf07d;</router-link>
                    <div class="nav-change">
                        <ul>
                            <router-link to="/index/allmovie/hotmovie" tag="li" active-class="active">正在上映</router-link>
                            <router-link to="/index/allmovie/comingmovie" tag="li" active-class="active">即将上映</router-link>
                        </ul>
                    </div>
                    
                </div>
            </div>
            <div class="search-box">
                <div class="search-box-city">
                    北京
                    <i class="yo-ico">&#xf031;</i>
                </div>
                <div class="search-box-input">
                    <span>影片/影院/影人，任你搜</span>
                </div>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    

}
</script>

<style lang='stylus' scoped>
.content
    height 100%
    display flex
    flex-direction column
    .nav-wrap
        background #fff
        display flex
        flex-direction column
        .nav-head
            height 100%
            background #1c2635
            .nav-menu
                height 100%
                line-height .44rem
                display flex
                i
                    width .44rem
                    height .46rem
                    display inline-block
                    color #fff
                    font-size .22rem
                    margin-left .05rem
                    text-align center
                .nav-change
                    
                    ul
                        border-radius .4rem
                        background #0d121a
                        border 1px solid #0d121a
                        li
                            color #999
                            display inline-block
                            padding 0 .35rem
                            border-radius .4rem
                            text-algin center
                        .active
                            color #fff
                            background #1c2635
        .search-box
            display flex
            background #f6f6f6
            padding .08rem .15rem .075rem
            border-bottom solid 0.02rem  #d8d8d8
            
            .search-box-city
                height .35rem
                line-height .35rem
                font-size .18rem
                margin-right .15rem
            .search-box-input
                flex 1
                line-height .35rem
                font-size .16rem
                color #777
                border .01rem solid #bbb
                border-radius .1rem
                text-indent .2rem
                        
</style>