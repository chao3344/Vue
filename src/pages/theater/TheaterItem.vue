<template>
    <div class="T-item">
        <li class="T-li">
            <dl>
                <dt class="T-tit">
                    <p class="T-title"><span>{{cinema.cinameName}}</span></p>
                    <p class="T-price" v-if="cinema.minPrice != 0">
                        <b>{{cinema.minPrice | price(2)}}</b><span>元起</span>
                    </p>
                </dt>
                <dd class="T-ad">
                    <p>{{cinema.address}}</p>
                </dd>
                <dd class="T-small">
                    <i v-if="cinema.feature.has3D === 1">3D</i>
                    <i v-if="cinema.feature.hasIMAX === 1">IMAX</i>
                    <i v-if="cinema.feature.hasVIP === 1">VIP</i>
                    <i v-if="cinema.feature.hasFeature4K === 1">4K</i>
                    <i v-if="cinema.feature.hasLoveseat === 1">情侣座</i>
                    <i v-if="cinema.feature.hasFeatureDolby === 1">杜比</i>
                    <i v-if="cinema.feature.hasFeature4D === 1">4D</i>
                    <i v-if="cinema.feature.hasFeatureHuge === 1">巨幕</i>
                </dd>
                
            </dl>
            
        </li>
    </div>
</template>

<script>

export default {
    props:{
        cinema:Object,
        index:Number
    },
    

}
</script>

<style lang="stylus" scoped>
.T-item
    .T-li
        list-style none
        margin-left .08rem
        padding .09rem .09rem .09rem 0
        border-bottom 1px solid #d8d8d8
        dl
            .T-tit
                display flex
                font-size .16rem
                .T-title
                    flex 1
                .T-price
                    color #ff8600
                    b
                        font-size .18rem
                        font-weight bold
                    span
                        font-size .13rem
            .T-ad
                margin-top .04rem
                p
                    font-size .13rem
                    color #777
            .T-small
                display flex
                i
                    height .08rem
                    text-align center
                    margin-top .04rem
                    margin-right .03rem
                    font-size .05rem
                    color #6d8297
                    padding .02rem .02rem .1rem .02rem
                    border 1px solid #6d8297
                    vertical-align baseline
                    zoom 1
                        
</style>