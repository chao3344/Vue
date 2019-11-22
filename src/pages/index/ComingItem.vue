<template>
    <router-link tag="div" to="/comingmoviedetail" class="c-item"> 
        <div class="coming-time">
            <span>{{movie.rMonth}}月{{movie.rDay}}日</span>
        </div>
        <div class="coming-movie">
            <div class="movie-img">
                <img :src="movie.image" alt="">
            </div>
            <div class="movie-text">
                <dl>
                    <dt>{{movie.title}}</dt>
                    <dd>
                        <p class="text-ceil"><b>{{movie.wantedCount}}</b> 人想看 - 剧情</p>
                        <p class="text-ceil">{{movie.director}}</p>
                    </dd>
                </dl>
                <div class="btns" v-if="movie.isVideo">
                    <a href="">
                        <span>预告片</span>
                    </a>
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    props:{
        movie:Object,
        index:Number
    }

}
</script>

<style lang="stylus" scoped>
.c-item
    padding .15rem 0 .14rem 0
    margin-left .4rem 
    position relative
    .coming-time
        position absolute
        left -.4rem
        top .12rem
    .coming-movie
        width 100%
        display flex
        margin-left .1rem
        .movie-img
            width .78rem
            height 1.17rem
            margin-right .15rem
            img
                width .78rem
                height 1.17rem
        .movie-text
            flex 1
            dl
                min-height .05rem
                padding-top .005rem
                dt
                    font-size .18rem
                    font-weight bold
                dd
                    padding-top .02rem
                    margin-bottom .05rem
                    .text-ceil
                        font-size .14rem
                        line-height 1.65
                        b
                            color #FF8600
            .btns
                a
                    display inline-block
                    margin-right .08rem
                    border 1px solid #659c0d
                    color #659c0d
                    border-radius 4rem
                    padding .065rem 0
                    min-width 1rem
                    text-align center
                    span
                        font-size .16rem

</style>