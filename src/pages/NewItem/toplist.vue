<template>
    <div class='top-box'>
        <div>

            <div class="big-pic">
                <a :title="TitleList.title">
                    <img :src="TitleList.imageUrl"
                        class="m_img " :alt="TitleList.title">
                    <h2><b>{{TitleList.title}}</b></h2>
                </a>
            </div>
            
            <div class="topmenu">
                <ul class="table_vh_c">
                    <li class="td _link l1" ><a href="javascript:void(0);"><i class="top01"></i>
                            <p><span>时光Top100</span></p>
                        </a></li>
                    <li class="td _link l2" ><a href="javascript:void(0);"><i class="top02"></i>
                            <p><span>华语Top100</span></p>
                        </a></li>
                    <li class="td _link" ><a href="javascript:void(0);"><i class="top03"></i>
                            <p><span>全球票房榜</span></p>
                        </a></li>
                </ul>
            </div>
            
            <Topitem
                v-for="item in TopList"
                :item="item"
                :ID="item.id"
                :key="item.id"
            ></Topitem>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import BScroll from 'better-scroll'
import { get } from 'utils/http'
import Topitem from './Item/TopItem'
export default {
    data(){
        return{
            
            TitleList:[],
            TopList:[],
            pageindex:1,
            ComingList:[]
        }
    },
    async mounted(){
        // 获取头部大新闻
        let Titleresult = await get ({
            url:'/Service/callback.mi/PageSubArea/GetRecommendationIndexInfo.api',
            params:{
                t:'2019112221395688647',
                pageIndex:this.pageindex
            }
        })
        this.TitleList = Titleresult.topList

        let result = await get ({
            url:'/Service/callback.mi/TopList/TopListOfAll.api',
            params:{
                t:'201911231459543959',
                pageIndex:1
            }
        })
        this.TopList = result.topLists
         

        let bScroll = new BScroll('.top-box',{
            pullUpLoad: true,
            click: true,
            probeType: 2
        })

        // 下拉加载
        bScroll.on('pullingUp', async() => {
            this.pageindex++
            let result = await get({
                url: '/Service/callback.mi/TopList/TopListOfAll.api',
                params: {
                    t:'201911231459543959',
                    pageIndex:this.pageindex
                }
            })
            this.ComingList = result.topLists
            this.TopList = [
                ...this.TopList,
                ...this.ComingList
            ]
            // console.log(this.TopList)

            // 等待下一步执行
            await this.$nextTick()
            bScroll.refresh()
            

            bScroll.finishPullUp()
        })
        
    },
    
    components:{
        Topitem
    }

}
</script>

<style lang="stylus" scoped>
.top-box
    height 100%
    flex 1
    overflow hidden
    .big-pic
        a  
            display block
            height 2.2rem
            position relative
            img
                width 100%
                height 2.2rem
            h2
                background rgba(0,0,0,0.4)
                position absolute
                left 0
                right 0
                bottom 0
                padding .12rem 0 .12rem
                text-align center
                b
                    color #fff
                    font-size .18rem
                    display block
    .topmenu
        padding-top .25rem
        ul
            display flex
            .l1
                p
                    color #1498c9
            .l2
                p
                    color #3bc7c2
            li
                text-align center
                flex 1
                a
                    .top01
                        background url(//static1.mtime.cn/html5/20191022151144/images/2014/top01.png) no-repeat
                        background-size cover
                    .top02
                        background url(//static1.mtime.cn/html5/20191022151144/images/2014/top02.png) no-repeat
                        background-size cover
                    .top03
                        background url(//static1.mtime.cn/html5/20191022151144/images/2014/top03.png) no-repeat
                        background-size cover
                    i
                        display block
                        width .58rem
                        height .58rem
                        border-radius .4rem
                        margin auto
                    p
                        padding .14rem 0 0
                        font-size .14rem
                        color #ffc12d
            



</style>