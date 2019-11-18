<template>
    <div class="item">
        <div class="item-box">
            <div class="item-img">
                <img 
                :src="movie.img | wh('128.180')"/>
            </div>
            <div class="item-text">
                <dl>
                    <dt>{{movie.nm}}</dt>
                    <dd>
                        <p>{{movie.star}}</p>
                    </dd>
                </dl>
                <div class="item-btn">
                    <p>{{movie.showInfo}}</p>
                    <a href=""><span>购票</span></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {
    props:{
       movie:{
           type:Object
       },
       index:Number
    },
    
}
</script>

<style lang='stylus' scoped>
.item
    padding-bottom .08rem
    padding .15rem 0 .14rem 0
    border-bottom 1px solid #d8d8d8
    .item-box
        width 100%
        display flex
        .item-img
            width .78rem
            height 1.17rem
            margin-right .15rem
            img
                width .78rem
                height 1.17rem
    .item-text
        flex 1
        dl
            min-height .67rem
            padding-top .005rem
            line-height 1
            dt
                color #333
                font-size .18rem
                font-weight bold
                vertical-align middle
            dd
                padding-top .15rem
                p
                    color #659D0E
                    font-size .16rem
    .item-btn
        display flex
        margin-top .1rem
        p
            flex 1
            font-size .14rem
            color #999
        a
            display inline-block
            min-width .75rem
            height .15rem
            margin-right .1rem
            background #ff8600
            color #fff
            border .1rem solid #ff8600
            border-radius .4rem
            text-align center
            font-size .16rem

</style>