<template>
    <div class='top-item' @click="Godetail(item.id)">
        <li class="_link"><a href="javascript:void(0);">
                <div class="toptxt">
                    <h2><b>{{item.topListNameCn}}</b></h2>
                    <p class="txt_elli"><span>{{item.summary}}</span></p>
                </div><i class="yo-ico">&#xf07f;</i>
            </a>
        </li>
    </div>
</template>

<script>
export default {
    props:{
        item:Object,
        ID:Number
    },
    methods: {
        Godetail(ID){
            
            this.$store.commit('setTopID',{
                topid:ID
            })
            this.$router.push('/index/news/topdetail')
        }
    },

}
</script>

<style lang="stylus" scoped>
.top-item
    padding-top .21rem
    
    ._link
        padding-left .15rem
        text-align center
        border-top 1px solid #d8d8d8
        list-style none
        position relative
        a
            display block
            text-align left
            padding .17rem 0
            position relative
            border-bottom 1px solid #d8d8d8
            color #333
            .toptxt
                border-sizing border-box
                h2
                    margin-right 3em
                    line-height 1.4
                    b
                        font-size .18rem
                .txt_elli
                    margin-top .06rem
                    padding 0 .45rem 0 0
                    height .19rem
                    color #777
                    font-size .15rem
                    overflow hidden
                    white-space nowrap
                    text-overflow ellipsis
            i
                font-size .15rem
                margin-top -0.35rem
                line-height 1
                position absolute
                right .2rem


</style>