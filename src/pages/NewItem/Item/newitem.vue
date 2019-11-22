<template>
    <div class='item'>
        <li  v-if="item.type === 0">
            <div class="item-box">
                <div class="today-img">
                    <img :src="item.image" alt="">
                </div>
                <div class="today-title">
                    <h2>{{item.title}}</h2>
                    <p>1小时前</p>
                </div>
            </div>
        </li>
        <li v-if="item.type === 2">
            <div class="item-box" >
                <div class="today-img">
                    <i class="i_video"></i>
                    <img :src="item.image" alt="">
                </div>
                <div class="today-title">
                    <h2>{{item.title}}</h2>
                    <p>1小时前</p>
                </div>
            </div>
        </li>
        <li class="E" v-if="item.type === 1">
                <div>
                    <div class="today-title-E">
                        <h2>{{item.title}}</h2>
                    </div>
                    <div class="today-img-E">
                        <img :src="item.images[0].url1" alt="">
                        <img :src="item.images[1].url1" alt="">
                        <img :src="item.images[2].url1" alt="">
                    </div>
                    <div class="show-time">
                        <p>1小时前</p>
                    </div>
                </div>
            </li>

    </div>
</template>

<script>
export default {
    props:{
        item:Object,
        
    }

}
</script>

<style lang="stylus" scoped>
.item  
    padding-left .17rem
    li
        list-style none
        .item-box
            padding .18rem 0 .18rem 0
            border-bottom .01rem solid #d8d8d8
            overflow hidden
            display flex
            .today-img
                width .9rem
                height .9rem
                display block
                overflow hidden
                position relative
                i
                    width .35rem
                    height .35rem
                    bottom .05rem
                    right .05rem
                    display inline-block
                    background url(//static1.mtime.cn/html5/20191022151144/images/2014/viceoplay.png) no-repeat center center
                    background-size cover
                    position absolute
                img
                    width .9rem
                    height .9rem
                    display block
            .today-title
                flex 1
                padding 0 .15rem
                h2
                    padding-bottom .04rem
                    font-size .20rem
                    line-height 1
                p
                    margin-top .12rem
                    font-size .12rem
                    color #999
                    line-height 1
                    padding .1rem 0
    .E
        padding .16rem  .16rem 0 0
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
        .show-time
            p
               color #999
</style>