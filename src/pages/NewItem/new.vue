<template>
    <div class='new-box'>
        <div>

            <div class="big-pic">
                <a title="《复仇者联盟4》重要彩蛋全解析">
                    <img src="//imgproxy.mtime.cn/get.ashx?uri=http%3A%2F%2Fimg5.mtime.cn%2Fmg%2F2019%2F07%2F18%2F102211.29411290.jpg"
                        class="m_img " alt="《复仇者联盟4》重要彩蛋全解析">
                    <h2><b>《复仇者联盟4》重要彩蛋全解析</b></h2>
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
            NewList:[]
        }
    },
    async mounted(){
        let result = await get ({
            url:'/Service/callback.mi/News/NewsList.api',
            params:{
                t:'201911221534968949',
                pageIndex:this.pageindex
            }
        })
        this.NewList = result.newsList
        console.log(this.NewList)

        let bScroll = new BScroll('.new-box',{
            pullUpLoad: true,
            click: true,
            probeType: 2
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