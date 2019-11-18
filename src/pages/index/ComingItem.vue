<template>
    <div class="c-item"> 
        <div class="coming-time">
            <span>20日</span>
        </div>
        <div class="coming-movie">
            <div class="movie-img">
                <img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmt%2F2019%2F08%2F20%2F184519.87782615_1280X720X2.jpg&width=130&height=195&clipType=4" alt="">
            </div>
            <div class="movie-text">
                <dl>
                    <dt>小Q</dt>
                    <dd>
                        <p class="text-ceil"><b>111</b> 人想看 - 剧情</p>
                        <p class="text-ceil">导演：罗永昌</p>
                    </dd>
                </dl>
                <div class="btns">
                    <a href="">
                        <span>预告片</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'name'

}
</script>

<style lang="stylus" scoped>
.c-item
    padding .15rem 0 .14rem 0
    margin-left .3rem 
    position relative
    .coming-time
        position absolute
        left -.3rem
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
                dd
                    padding-top .02rem
                    margin-bottom .05rem
                    .text-ceil
                        font-size .14rem
                        line-height 1.65
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