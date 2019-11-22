<template>
    <div class='T-content'>
        <div>
            <!-- <div class="T-city-list" v-if="Changeshow">
                <div>
                    <cityList
                        
                    ></cityList>
                </div>
            </div> -->
            <div class="T-search-box">
                <div class="T-search">
                    <router-link tag="div" class="T-city" to="/city">
                        {{CITYNAME}}
                        <i class="yo-ico">&#xf031;</i>
                    </router-link>
                    <div class="T-input">
                        <input type="text" placeholder="筛选影院" >
                    </div>
                    <div class="T-search-btn">
                        <span>搜索</span>
                    </div>
                </div>
            </div>
            <div class="T-menu">
                <!-- <ul>
                    <li>
                        <a href="" class="T-menu-one T-border T-menu-a">
                            <span>离我最近</span><i class="yo-ico">&#xf033;</i>
                        </a>
                    </li>
                    <li>
                        <a href="" class="T-menu-two T-border T-menu-a">
                            <span>全城</span><i class="yo-ico">&#xf033;</i>
                        </a>
                    </li>
                    <li>
                        <a href="" class="T-menu-Thr T-menu-a">
                            <span>影厅特效</span><i class="yo-ico">&#xf033;</i>
                        </a>
                    </li>
                </ul> -->
                <van-dropdown-menu active-color="#ee0a24" class="van-menu">
                    <van-dropdown-item v-model="value1" :options="option1" />
                    <van-dropdown-item v-model="value2" :options="option2" />
                    <!-- <van-dropdown-item v-model="value3" :options="option3" /> -->
                </van-dropdown-menu>
            </div>
            <div class="T-warp">
                <TheaterItem
                    v-for="(cinema,index) in cinemaList"
                    :key="cinema.cinemaId"
                    :cinema="cinema"
                    :index="index"
                ></TheaterItem>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import TheaterItem from './theater/TheaterItem'
import cityList from './cityList/cityList'
import BScroll from 'better-scroll'
import {get} from 'utils/http'
import { DropdownMenu, DropdownItem } from 'vant';

Vue.use(DropdownMenu).use(DropdownItem);
export default {
    data () {
        return {
            CITYID:290,
            CITYNAME:'北京',
            cinemaList:[],
            Changeshow:'',
            value1: 0,
            value2: 'a',
            option1: [
                { text: '离我最近', value: 0 },
                { text: '价格最低', value: 1 }
            ],
            option2: [
                { text: '不限', value: 'a' },
                { text: '3D', value: 'b' },
                { text: 'IMAX', value: 'c' },
                { text: 'vip', value: 'i' },
                { text: '4D', value: 'd' },
                { text: '巨幕', value: 'e' },
                { text: '4K', value: 'f' },
                { text: '杜比', value: 'g' },
                { text: '情侣座', value: 'h' },
            ]
            /* option3: [
                { text: '影厅特效', value: 'x' },
                { text: '好评排序', value: 'y' },
                { text: '销量排序', value: 'z' },
            ] */
        }
    },
    components:{
        TheaterItem,
        cityList
    },
    
    async mounted(){
        // 更换城市信息
        this.CITYID = this.$store.state.CityId
        this.CITYNAME = this.$store.state.CityName
        let result = await get({
            url:'/api/proxy/ticket/onlineCinemasByCity.api',
            params:{
                locationId : this.CITYID,
                _:'1574063120060'
            }
        })
        // console.log(result)
        this.cinemaList = result.data.cinemaList

        let bScroll = new BScroll('.T-content', {
            pullUpLoad: true,
            click: true,
            probeType: 2
        })

        // console.log(this.$options.getTime(1574216700,'H'))
    },
    methods: {
        
    },
    watch:{
        
        
    }

}
</script>

<style lang="stylus" scoped>
.T-content
    height 100%
    .T-search-box
        background #f6f6f6
        padding .08rem .15rem .08rem
        border-bottom 1px solid #d8d8d8
        margin-top .01rem
        .T-search
            display flex
            justify-content space-between
            align-items center
            .T-city
                font-size .15rem
                line-height 2.65
                display flex
                white-space nowrap
                i
                    display inline-block
                
            .T-input
                flex 1
                line-height 2
                marigin-left .2rem
                padding-left .2rem
                font-size .16rem
                padding-top .04rem
                input
                    border 1px solid #bbb
                    border-radius .05rem
                    text-align center
            .T-search-btn
                color #333
                width .72rem
                height .33rem
                line-height .33rem
                maigin-right .05rem
                text-align center
    .T-menu
        border-bottom 1px solid #d8d8d8
        .van-menu
            background #f6f6f6
        ul
            display flex
            li
                text-align center
                flex 1
                padding .13rem 0
                .T-border
                    border-right 1px solid #d8d8d8
                .T-menu-a
                    display block
                    text-align center
                    color #777
                    span 
                        font-size .14rem
                        margin-right .05rem

                    

</style>