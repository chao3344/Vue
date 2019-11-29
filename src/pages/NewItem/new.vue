<template>
    <div class='new-box'>
        <div>

            <div class="big-pic">
                <a :title="TitleList.title">
                    <img :src="TitleList.imageUrl"
                        class="m_img " alt="《复仇者联盟4》重要彩蛋全解析">
                    <h2><b>{{TitleList.title}}</b></h2>
                </a>
            </div>
    
            <div class="new-content">
                <newItem
                    v-for="(item,index) in NewList"
                    :key="item.id"
                    :item="item"
                ></newItem>
            </div>

        </div>
    </div>

</template>

<script>
import newItem from './Item/newitem'
import BScroll from 'better-scroll'
import { get } from 'utils/http'

export default {
    data(){
        return{
            pageindex:1,
            NewList:[],
            ComingList:[],
            TitleList:[]
        }
    },
    async mounted(){

        // 获取头部大新闻
        let Titleresult = await get ({
            url:'/Service/callback.mi/PageSubArea/GetRecommendationIndexInfo.api',
            params:{
                t:'2019112221395688647',
            }
        })
        this.TitleList = Titleresult.news

        // 获取列表中的新闻
        let result = await get ({
            url:'/Service/callback.mi/News/NewsList.api',
            params:{
                t:'201911221534968949',
                pageIndex:this.pageindex
            }
        })
        this.NewList = result.newsList
        // console.log(this.NewList)

        let bScroll = new BScroll('.new-box',{
            pullUpLoad: true,
            click: true,
            probeType: 2
        })

        bScroll.on('pullingUp', async() => {
            this.pageindex++
            let result = await get({
                url: '/Service/callback.mi/News/NewsList.api',
                params: {
                    t:'2019112221245385514',
                    pageIndex:this.pageindex
                }
            })
            this.ComingList = result.newsList
            this.NewList = [
                ...this.NewList,
                ...this.ComingList
            ]
            // console.log(this.NewList)

            // 等待下一步执行
            await this.$nextTick()
            bScroll.refresh()
            

            bScroll.finishPullUp()
        })

    },
    components:{
        newItem
    }

}
</script>

<style lang="stylus" scoped>
.new-box
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
</style>