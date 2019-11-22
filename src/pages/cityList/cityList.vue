<template>
    <div class="city-warp">
        <div class="city-content">
            <div class="city-header">
                <i class="city-back yo-ico" @click="back">&#xf07d;</i>
                <div class="title">选择城市</div>
            </div>
            <div class="city-search-box">
                <input type="text" placeholder="请输入搜索关键词">
            </div>
            <div class="city-box">
                <dd>
                    <p>热门城市:</p>
                    <ul>
                        <li 
                            v-for="item in Hotcity"
                            :data-id="item.id"
                            :name="item.n"
                            ref="Cityli"
                            @click="changecity(item.n,item.id)"
                        >{{item.n}}</li>
                    </ul>
                </dd>
                <dd v-for="(city,key) in CityList">
                    <p>{{key}}</p>
                    <ul>
                        <li
                            v-for="name in city"
                            :data-id="name.id"
                            :name="name.n"
                            ref="Cityli"
                            @click="changecity(name.n,name.id)"
                        >{{name.n}}</li>
                    </ul>
                </dd>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import{get} from 'utils/http'
import BScroll from 'better-scroll'
import _ from 'lodash'

export default {
    props:{
        
    },
    data () {
        return {
            CityList:[],
            Hotcity:[]
        }
    },
    async mounted () {
    let result = await get({
      url:'/Service/callback.mi/Showtime/HotCitiesByCinema.api',
      params: {
        t: '2019111917124647528'
      }
    })
    
    this.Hotcity = result.p.slice(0,9)
    

    //按首字母分类装填
    let chunkedResult = _.groupBy(result.p,(value)=>{
        return value.pinyinFull.substr(0,1)
    })
    

    // 按首字母排好顺序再放入一个新数组中
    let reduceResult = Object.keys(chunkedResult).sort().reduce((obj,key) =>{
        obj[key] = chunkedResult[key]
        return obj
    },{})
    
    this.CityList = reduceResult

    let bScroll = new BScroll('.city-warp',{
        click:true,
        scrollY:true
    })

       
},
    methods: {
        back(){
            this.$router.back()
        },
        changecity(name,id){
            
            this.$store.commit('setCityid',{
                cityid : id,
                cityname : name
            })
            this.$router.go(-1)
        }
    }
    

}
</script>

<style lang="stylus" scoped>
.city-warp
    height 100%
    .city-content
        width 100%
        .city-header
            background #1c2635
            height .52rem
            width 100%
            display flex
            .city-back
                font-size .22rem
                color #fff
                display inline-block
                width .52rem
                height .52rem
                line-height .52rem
                text-align center
            .title
                flex 1
                line-height .52rem
                text-indent 1rem
                color #fff
                font-size .20rem
        .city-search-box
            padding .09rem .5rem .09rem
            border-bottom 1px solid #d8d8d8
            input
                width 100%
                border 1px solid #bbb
                border-radius .1rem
                height .35rem
                font-size .16rem
                text-indent .4rem
        .city-box
            dd
                p
                    color #777
                    background #ebebeb
                    padding 0 1em
                    line-height 2em
                    height 2em
                    box-shadow 0 1px 1px rgba(51,51,51,0.1) inset
                    font-size .18rem
                ul
                    padding 0 1.5em .9em
                    display flex
                    background #fff
                    flex-wrap wrap
                    li
                        width 25%
                        padding .8em 0 0
                        color #333
                        font-size .18rem
                        color #333
                        


</style>