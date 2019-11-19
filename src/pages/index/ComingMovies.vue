<template>
    <div class="coming-movie-wrap">
        <ul class="coming-tab-content">
            <h2 class="coming-title">即将上映(48部)</h2>
            <ComingItem
                v-for="(movie,index) in ComingList"
                :key="movie.id"
                :movie="movie"
                :index="index"
            ></ComingItem>
        </ul>
    </div>
</template>

<script>
import Vue from 'vue'
import ComingItem from './ComingItem'
import BScroll from 'better-scroll'
import { get } from 'utils/http'
export default {
    data () {
        return {
            ComingList:[]
        }
    },
    components:{
        ComingItem
    },
    async mounted () {
        let result = await get ({
            url:'/Service/callback.mi/Movie/MovieComingNew.api',
            params:{
                locationId:'290',
                t:'201911189444351190'
            }
        })
        
        this.ComingList = result.moviecomings

        let bScroll = new BScroll('.coming-movie-wrap', {
            pullUpLoad: true,
            click: true,
            probeType: 2
        })
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