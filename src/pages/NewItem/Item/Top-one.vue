<template>
    <div class='one'>
            <li>
                <p class="glotop"><span>01</span></p>
                <div class="table _movieinfo" data-url="#!/movie/10419/" data-toplistid="10419">
                    <div class="glotop_pic"><a href="javascript:void(0)"><img class="m_img img_box"
                                :src="item.posterUrl"
                                :alt="item.name"></a></div>
                    <dl class="td">
                        <dt><a href="javascript:void(0)"><strong>{{item.name}}({{item.decade}})</strong><em class="m_score"><i>{{item.rating}}</i></em></a></dt>
                        <dd class="entitle">
                            <p>{{item.nameEn}}</p>
                        </dd>
                        <dd class="glo_movieinfo"><a href="javascript:void(0)">
                                <p>导演：{{item.director}}</p>
                                <p>主演：{{item.actor}}&nbsp;&nbsp;{{item.actor2}}</p>
                                <p>{{item.releaseDate}} {{item.releaseLocation}}</p>
                            </a></dd>
                    </dl>
                </div>
                <!--end-->
                <aside class="glo_tip _resonContent">
                    <div class="table">
                        <p class="_displayResonContent">{{item.remark}}</p>
                    </div>
                    <p class="_resonText" style="display:none;">四十二名学生由班主任带领，被逼到一荒岛参加大逃杀死亡游戏，只能有一人生存。为求活命，这班学生的真本性彻底表露出来。</p>
                </aside>
                <p class="glo_line"></p>
            </li>
    </div>
</template>

<script>
export default {
    props:{
        item:Object,
        name:String,
        Topsummary:String,
    },
    mounted () {
        
    }

}
</script>

<style lang="stylus" scoped>
.one   
    li
        position relative
        
        .glotop
            background #ff8600
            position absolute
            left .05rem
            top 0
            width .23rem
            height .23rem
            border-radius .23rem
            background #bbb
            text-align center
            line-height .23rem
            span
                display block
                color #fff
                font-size .14rem
        .table
            width 100%
            display flex
            .glotop_pic
                margin-left: .33rem;
                margin-right: .25rem;
                a
                    display block
                    width .87rem
                    img
                        width 100%
                        height auto
                        display block
            .td
                margin-right: .15rem;
                flex 1
                dt
                    strong
                        font-size .19rem
                        color #333
                    .m_score
                        border-radius 0
                        margin-left .1rem
                        background #659d0e
                        width .24rem
                        height .22rem
                        color #fff
                        display inline-block
                        vertical-align middle
                        overflow hidden
                        line-height .22rem
                        text-align center
                .entitle
                    padding-top .05rem
                    color #bbb
                    line-height 1.2
                .glo_movieinfo
                    margin-top .16rem
                    p
                        font-size: .14rem;
                        line-height .17rem
                        height .17rem
                        color #333
        .glo_tip
            margin .115rem .15rem 0 .33rem
            background #f6f6f6
            padding .05rem .06rem
            border-radius .02rem
            color #777
            

</style>