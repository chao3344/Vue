<template>
    <div class="n-wrap">
        <div class="nav">
            <ul>
                <router-link tag="li" to="/index/news/new" active-class="nrr">新闻</router-link>
                <router-link tag="li" to="/index/news/trailer" active-class="nrr">预告片</router-link>
                <router-link tag="li" to="/index/news/toplist" active-class="nrr">排行榜</router-link>
                <router-link tag="li" to="/index/news/review" active-class="nrr">影评</router-link>
            </ul>
        </div>
        <router-view></router-view>
        
        
    </div>
</template>

<script>


export default {
    


}
</script>

<style lang="stylus" scoped>
.n-wrap
    height 100%
    display flex
    flex-direction column
    .nav
        width 100%
        height .48rem
        ul
            display flex
            .nrr
                color #1e7dd7
                font-weight bold
            li
                width 25%
                font-size .16rem
                text-align center
                line-height .48rem
                height .48rem
    


</style>