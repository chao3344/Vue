<template>
    <div class='content-wrap'>
            
        <div>
            <div class="search-box">
                <router-link tag="div" class="search-box-city" to="/city">
                    {{CITYNAME}}
                    <i class="yo-ico">&#xf031;</i>
                </router-link>
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
                    <router-link tag="li" to="/moviedetail" class="list-movie" v-for="item in movieList">
                        <div class="list-movie-img">
                            <img :src="item.img" alt="">
                        </div>
                        <p>{{item.t}}</p>
                    </router-link>
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

                
                
            </div>
        </div>
    </div>
</template>

<script>
import TodayHot from './TodayHot'
import cityList from '../cityList/cityList'
// import Loading from '../Loading/loading'
import Vue from 'vue'
import BScroll from 'better-scroll'
import { get } from 'utils/http'


export default {
    data () {
        return {
            newsList:[],
            movieList:[],
            CITYID:null,
            CITYNAME:'北京',
        }
    },
    components: {
        TodayHot,
        cityList
    },
    async mounted(){
        
        // 更换城市信息
        this.CITYID = this.$store.state.CityId
        this.CITYNAME = this.$store.state.CityName

        

        let result = await get({
            url:'/article/originalInfoList.api',
            params:{
                locationId : this.CITYID,
                t:'2019111916152218638',
                
            }
            
        })
        this.newsList = result.data.list
        // console.log(this.newsList)

        let Movieresult = await get ({
            url:'/Service/callback.mi/Showtime/LocationMovies.api',
            params:{
                locationId:this.CITYID,
                t:'2019111916585764945'
            }
        })
        this.movieList = (Movieresult.ms).slice(0,8)
        // console.log(this.movieList)


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
            marign-top .1rem
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