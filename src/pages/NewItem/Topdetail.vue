<template>
    <div class='detail-box'>
        <div>

            <div class="city-header">
                <i class="city-back yo-ico" @click="back">&#xf07d;</i>
            </div>
            <div class="filmpeople">
                <div class="peopletitle">
                    <h2>{{TopName}}</h2>
                </div>
                <p id="divSummaryContent" :allcontent="Topsummary">{{Topsummary}}</p>
            </div>
            <ul>
                <Item
                    v-for="item in TOPITEM"
                    :key="item.id"
                    :item="item"
                    
                ></Item>
            </ul>
        </div>
        </div>
</template>

<script>
import Item from './Item/Top-one'
import Vue from 'vue'
import BScroll from 'better-scroll'
import { get } from 'utils/http'

export default {
    data () {
        return {
            topID:null,
            TOPITEM:[],
            TopName:'',
            Topsummary:''
        }
    },
    async mounted () {
        console.log(this.$store.state.TopID)
        this.topID = this.$store.state.TopID
        //获取数据
        let result = await get({
            url:'/Service/callback.mi/TopList/TopListDetails.api',
            params:{
                t:'2019112319515833061',
                pageIndex:'1',
                type:'2',
                toplistId:this.topID,
                pageSubAreaID:this.topID
                
            }
            
        })
        console.log(result)
        this.TOPITEM = result.movies
        this.TopName = result.topList.name
        this.Topsummary = result.topList.summary

        let bScroll = new BScroll('.detail-box', {
            pullUpLoad: true,
            click: true,
            probeType: 2
        })
    },
    methods: {
        back(){
            this.$router.back()
        },
        
    },
    components:{
        Item
    }

}
</script>

<style lang="stylus" scoped>
.detail-box
    flex 1
    height 100%
    .city-header
        height .52rem
        width 100%
        display flex
        .city-back
            font-size .22rem
            color #000
            display inline-block
            width .52rem
            height .52rem
            line-height .52rem
            text-align center
    .filmpeople
        background #f6f6f6
        border-bottom 1px solid #dfdfdf
        padding .135rem .15rem .13rem
        .peopletitle
            h2
                font-size .22rem
                text-align center
        #divSummaryContent
            color #777
            font-size .13rem
    ul
        padding-top .17rem
</style>