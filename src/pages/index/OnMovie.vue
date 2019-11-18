<template>
    <div class='content-wrap'>
        <div>

            <div class="search-box">
                <div class="search-box-city">
                    北京
                    <i class="yo-ico">&#xf031;</i>
                </div>
                <div class="search-box-input">
                    <span>影片/影院/影人，任你搜</span>
                </div>
            </div>
            <div class="movie-list">
                <div class="title-box">
                    <h1>正在热映(61部)</h1>
                    <router-link tag="i" to="/index/allmovie/hotmovie" class="yo-ico">&#xf07f;</router-link>
                </div>
                <ul class="list-on-movie">
                    <li class="list-movie">
                        <div class="list-movie-img">
                            <img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmt%2F2019%2F11%2F07%2F111315.58628907_1280X720X2.jpg&width=130&height=195&clipType=4" alt="">
                        </div>
                        <p>决战中途岛</p>
                    </li>
                    <li class="list-movie">
                        <div class="list-movie-img">
                            <img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmt%2F2019%2F11%2F07%2F111315.58628907_1280X720X2.jpg&width=130&height=195&clipType=4" alt="">
                        </div>
                        <p>决战中途岛</p>
                    </li>
                    <li class="list-movie">
                        <div class="list-movie-img">
                            <img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmt%2F2019%2F11%2F07%2F111315.58628907_1280X720X2.jpg&width=130&height=195&clipType=4" alt="">
                        </div>
                        <p>决战中途岛</p>
                    </li>
                    <li class="list-movie">
                        <div class="list-movie-img">
                            <img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmt%2F2019%2F11%2F07%2F111315.58628907_1280X720X2.jpg&width=130&height=195&clipType=4" alt="">
                        </div>
                        <p>决战中途岛</p>
                    </li>
                    <li class="list-movie">
                        <div class="list-movie-img">
                            <img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmt%2F2019%2F11%2F07%2F111315.58628907_1280X720X2.jpg&width=130&height=195&clipType=4" alt="">
                        </div>
                        <p>受益人</p>
                    </li>
                    <li class="list-movie">
                        <div class="list-movie-img">
                            <img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmt%2F2019%2F11%2F07%2F111315.58628907_1280X720X2.jpg&width=130&height=195&clipType=4" alt="">
                        </div>
                        <p>决战中途岛</p>
                    </li>
                    <li class="list-movie">
                        <div class="list-movie-img">
                            <img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmt%2F2019%2F11%2F07%2F111315.58628907_1280X720X2.jpg&width=130&height=195&clipType=4" alt="">
                        </div>
                        <p>大约在冬季</p>
                    </li>
                    <li class="list-movie">
                        <div class="list-movie-img">
                            <img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmt%2F2019%2F11%2F07%2F111315.58628907_1280X720X2.jpg&width=130&height=195&clipType=4" alt="">
                        </div>
                        <p>决战中途岛</p>
                    </li>
                </ul>
                <div class="coming-title-box">
                    <h1>即将上映(74部)</h1>
                    <router-link tag="i" to="/index/allmovie/comingmovie" class="yo-ico">&#xf07f;</router-link>
                </div>
            </div>
            <div class="todayhot-box">
                <h1>今日热点</h1>
                <TodayHot
                    v-for="(news,index) in newsList"
                    :key="news.recommendID"
                    :news="news"
                    :index="index"
                ></TodayHot>

                <!-- <TodayHotE
                    v-for="(news,index) in newsList"
                    v-if="news.styleType === 3"
                    :key="news.recommendID"
                    :news="news"
                    :index="index"
                >
                </TodayHotE> -->
                
            </div>
        </div>
    </div>
</template>

<script>
import TodayHot from './TodayHot'
import Vue from 'vue'
import BScroll from 'better-scroll'
import { get } from 'utils/http'
export default {
    data () {
        return {
            newsList:[]
        }
    },
    components: {
        TodayHot,
        
    },
    async mounted(){

        let result = await get({
            url:'/article/originalInfoList.api',
            
        })
        this.newsList = result.data.list
        console.log(this.newsList)





        let bScroll = new BScroll('.content-wrap', {
            pullUpLoad: true,
            click: true,
            probeType: 2
        })
    }

}
</script>

<style lang='stylus' scoped>
@import '~assets/stylus/border.styl';

.content-wrap
    background #fff
    overflow auto
    display block
    height 100%
    .search-box
        display flex
        background #f6f6f6
        padding .08rem .15rem .075rem
        border-bottom solid 0.02rem  #d8d8d8
        overflow hidden
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
    .movie-list
        padding .5em 1.5em .7em
        overflow hidden
        .title-box
            display flex
            justify-content space-between
            line-height 2
            h1
                flex 1
                font-weight 700
                font-size .22rem
            i
                font-weight 700
                font-size .22rem
                color #bbb
        .list-on-movie
            border-bottom .01rem solid #bbb
            display flex
            flex-wrap wrap
            .list-movie
                width 25%
                .list-movie-img
                    img
                        width .78rem
                        height 1.15rem
                p
                    padding-top .12rem
                    width .83rem
                    height .38rem
                    overflow hidden
                    margin-bottom .1rem
                    text-align center
                    font-size .16rem
    
        .coming-title-box
            display flex
            justify-content space-between
            line-height 2
            margin-top .15rem
            padding-bottom .1rem
            border-bottom .01rem solid #bbb
            h1
                flex 1
                font-weight 700
                font-size .22rem
            i
                font-weight 700
                font-size .22rem
                color #bbb

    .todayhot-box
        padding .05rem .15rem 0
        background #fff
        h1
            font-weight 700
            font-size .22rem
        

</style>