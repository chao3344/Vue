<template>
  <div class="hot-movie-wrap">
    <ul class="tab-content">
      <HotItem
        v-for="(movie,index) in movielist"
        :key="movie.id"
        :movie="movie"
        :index="index"
      ></HotItem>
      
    </ul>
  </div>
</template>

<script>
import HotItem from "./HotItem";
import _ from 'lodash'
import Vue from 'vue'
import BScroll from 'better-scroll'
import { get } from 'utils/http'
import { Loading, Toast } from 'vant'
Vue.use(Loading).use(Toast)

export default {
    data(){
        return{
            movielist:[]
        }
    },

    async mounted(){
        let result = await get({
            url:'/ajax/movieOnInfoList',
            params:{
                token:''
            }
        })
        
        this.movielist = result.movieList
        let movieIds = _.chunk(result.movieIds.slice('12'),10)

        let bScroll = new BScroll('.hot-movie-wrap',{
            pullUpLoad: true,
            click: true,
            probeType: 2
        })

        let page = 0
        bScroll.on('pullingUp',async()=>{
            if( page < movieIds.length ){
                let result = await get({
                    url: '/ajax/moreComingList',
                    params:{
                        ci:1,
                        token:'',
                        movieIds: movieIds[page].join(',')
                    }
                })
                this.movielist = [
                    ...this.movielist,
                    ...result.coming
                ]
                // console.log(this.movielist)
                
                await this.$nextTick()
                bScroll.refresh()

                page++
            }else{
                Toast({
                    message:'到底了~',
                    position: 'bottom',
                    duration: 1000
                })
            }
            bScroll.finishPullUp()
        })

        
    },
    components: {
        HotItem
    }
}
</script>

<style lang="stylus" scoped>
.hot-movie-wrap
    padding .12rem .15rem .15rem .15rem
    flex 1
    overflow hidden
    .tab-content
        overflow hidden
</style>
