<template>
    <div class="coming-movie-wrap">
        <ul class="coming-tab-content">
            <h2 class="coming-title">即将上映(48部)</h2>
            <ComingItem>

            </ComingItem>
        </ul>
    </div>
</template>

<script>
import ComingItem from './ComingItem'
export default {
    components:{
        ComingItem
    }
}
</script>

<style lang="stylus" scoped>
.coming-movie-wrap
    padding .12rem .15rem .15rem .15rem
    flex 1
    overflow hidden
    .coming-tab-content
        overflow hidden
        .coming-title
            display block
            font-size .20rem
            font-weight bold
            margin-bottom .15rem
            border-bottom .01rem solid #bbb

</style>