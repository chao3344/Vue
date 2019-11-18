<template>
    <div>

        <li v-if="news.styleType === 1">
            <div>
                <div class="today-img">
                    <img :src="news.images[0].imgUrl" alt="">
                </div>
                <div class="today-title">
                    <h2>{{news.title}}</h2>
                    <p>1小时前</p>
                </div>
            </div>
        </li>  
        
        <li class="E" v-if="news.styleType === 3">
            <div>
                <div class="today-title-E">
                    <h2>{{news.title}}</h2>
                </div>
                <div class="today-img-E">
                    <img :src="news.images[0].imgUrl" alt="">
                    <img :src="news.images[1].imgUrl" alt="">
                    <img :src="news.images[2].imgUrl" alt="">
                </div>
            </div>
        </li>
        
    </div>
    
</template>

<script>
export default {
   props:{
       news:Object,
       index:Number
   }

}
</script>

<style lang='stylus' scoped>
@import '~assets/stylus/border.styl';
li
    padding .13rem 0 .13rem 0
    border-bottom .01rem solid #d8d8d8
    overflow hidden
    list-style none
    .today-img
        margin-bottom .15rem
        display block
        overflow hidden
        img
            width 100%
            height 1.4rem
            display block
    .today-title
        h2
            padding-bottom .04rem
            font-size .20rem
            line-height 1
        p
            font-size .12rem
            color #999
            line-height 1
            padding .1rem 0
.E
    padding .13rem 0 .13rem 0
    border-bottom .01rem solid #d8d8d8
    overflow hidden
    list-style none
    .today-img-E
        margin-top .15rem
        margin-bottom .15rem
        display flex
        overflow hidden
        img
            width 33%
            height .78rem
            margin-right .04rem
    .today-title-E
        h2
            padding-bottom .04rem
            font-size .20rem
            line-height 1
        p
            font-size .12rem
            color #999
            line-height 1
            padding .1rem 0
</style>