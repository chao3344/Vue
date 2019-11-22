<template>
    <div class='content'>
        <div>
            <div class="cinema-header">
                <i class="cinema-back yo-ico" @click="back">&#xf07d;</i>
            </div>
            <div class="title-box">
                <ul>
                    <li class="t">
                        <h2>{{cinemaName}}</h2>
                        <p>
                            <i class="i_cine_01"></i>
                            <i class="i_cine_06"></i>
                            <i class="i_cine_05"></i>
                            <i class="i_cine_02"></i>
                        </p>
                    </li>
                    <li class="t-r"><i class="i-phone"></i></li>
                    <li class="t-r"><i class="i-address"></i></li>
                </ul>
            </div>
            <div class="Scrollpic">
                <div class="hotmovie">
                    <ul>
                        <li data-index="0"
                            v-for="(movie,index) in MovieList"
                            :id="movie.movieId"
                            @click="handclick(movie.movieId)"
                            
                        >
                            <a href="javascript:void(0)">
                                <b><img class="m_img img_box"
                                    :src="movie.img">
                                </b>
                                <p><span>{{movie.title}}</span></p>
                            </a>
                        </li>
                    
                    </ul>

                </div>
            </div>
            <div class="movie-list">
                <div class="movie-title" v-if="TitleList.length === 0">
                    <a href="">
                        <h2>{{FristMovie.title}}</h2>
                        <p><span> 明天上映</span> - <b>{{FristMovie.length}} - {{FristMovie.type}}</b></p>
                        
                    </a>
                </div>
                <div class="movie-title" v-else>
                    <a href="">
                        <h2>{{TitleList.title}}</h2>
                        <p><span> 明天上映</span> - <b>{{TitleList.length}} - {{TitleList.type}}</b></p>
                        
                    </a>
                </div>
                <div class="search-tab">
                    <ul>
                        <li 
                            v-if="TitleList.length === 0" 
                            v-for="time in FristMovie.showDates"
                            :data-time="time"
                            @click="changedate(time)"  
                            
                        >
                            <a  href="javascript:void(0)">
                                <span>{{time}}</span>
                            </a>
                        </li>
                        <li 
                            v-if="TitleList.length != 0" 
                            v-for="(newtime,index) in ShowTime" 
                            :data-time="newtime"
                            @click="changedate(newtime)"
                        >
                            <a  href="javascript:void(0)">
                                <span>{{newtime}}</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="movie-ticket">
                    <dl>

                        <dd
                            v-for="show in ShowList.list"
                        >
                            <div class="table_v_c">
                                <div class="mstime"><time>{{show.showDay | time('H')}}</time></div>
                                <div class="mstype td"><strong>{{show.versionDesc}} / {{show.language}}</strong>
                                    <p><b>{{show.hall}}</b></p>
                                </div>
                                <div class="msprice"><strong>￥{{show.salePrice | price('2')}}</strong></div>
                                <div class="msgo"><a href="" class="m_btn_orange"><span>购票</span></a></div>
                            </div>
                        </dd>
                        
                    </dl>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import{get} from 'utils/http'
import BScroll from 'better-scroll'
export default {
    data(){
        return{
            FristMovie:[],
            FristShowtime:[],
            DataList:[],
            MovieList:[],
            TitleList:[],
            movie:[],
            ShowTime:[],
            ShowList:{},
            cinemaId:null,
            cinemaName:null,
            ID:null,
            DATE:null,
            str:''
        }
    },
    
   
    
    methods: {
        back(){
            this.$router.go(-1)
        },
        handclick(ID){
            this.MovieList.forEach((item,index)=>{
                if(item.movieId === ID){
                    this.TitleList = item
                    this.ShowTime = item.showDates
                    this.ID = ID   
                }
            })
            this.str = this.ID + '_' + this.DATE
            this.DataList.showtimes.forEach((item,index)=>{
                if(item.moviekey === this.str){
                    this.ShowList = item
                    
                }
            })
            
            
        },
        changedate(Time){
            // 用户切换下列电影上映时间
            
            this.DATE = Time
            this.str = this.ID + '_' + this.DATE
            
            this.DataList.showtimes.forEach((item,index)=>{
                if(item.moviekey === this.str){
                    this.ShowList = item
                }
            })
            
        }
    },

    
    async mounted(){
        
        let bScroll = new BScroll('.hotmovie',{
            click:true,
            scrollX:true,
            startX : 120
        })
        // 给日期选择添加better-scroll
        let aScroll = new BScroll('.search-tab',{
            click:true,
            scrollX:true,
                
        })
        // 给电影场次列表添加better-scroll
        let cScroll = new BScroll('.content',{
            click:true,
            scrollY:true,
                
        })

        this.cinemaId = this.$route.query.id
        
        let result = await get({
            url:'/cinema/showtime.api',
            params: {
                t : '201911212123898473',
                cinemaId : this.cinemaId
            }
        })
        
        this.DataList = result.data
        
        this.cinemaName = result.data.cinema.name
        this.MovieList = this.DataList.movies
        // 当用户没有点击时存储第一个电影的数据
        this.FristMovie = this.DataList.movies[0]

        // 用户无点击时的初始化数据定义
        this.ID = this.DataList.movies[0].movieId
        this.DATE = this.DataList.movies[0].showDates[0]
        this.str = this.ID + '_' + this.DATE
        this.DataList.showtimes.forEach((item,index)=>{
            if(item.moviekey === this.str){
                this.ShowList = item
                
            }
        })
        
        
        

    },
    watch: {
        
    },

}
</script>

<style lang="stylus" scoped>
.content
    display flex
    flex-direction column
    font-family "helvetica neue","微软雅黑"
    color #333
    background #fff
    height 100%
    .cinema-header
        background #1c2635
        height .52rem
        width 100%
        display flex
        .cinema-back
            font-size .22rem
            color #fff
            display inline-block
            width .52rem
            height .52rem
            line-height .52rem
            text-align center
    .title-box
        padding .15rem .05rem .11rem .15rem
        ul
            display flex
            line-height 1
            align-items center
            .t
                flex 1
                padding 0 .1rem
                h2
                    font-size .19rem
                p
                    margin-top .1rem
                    line-height 1
                    i
                        display inline-block
                        width .21rem
                        height .21rem
                        margin-right .05rem
                        margin-bottom .02rem
                    .i_cine_01
                        background url(//static1.mtime.cn/html5/20191022151144/images/2014/i_cine_01.png) no-repeat
                        background-size cover
                    .i_cine_06
                        background url(//static1.mtime.cn/html5/20191022151144/images/2014/is_cine_06.png) no-repeat
                        background-size cover
                    .i_cine_05
                        background url(//static1.mtime.cn/html5/20191022151144/images/2014/i_cine_05.png) no-repeat
                        background-size cover
                    .i_cine_02
                        background url(//static1.mtime.cn/html5/20191022151144/images/2014/i_cine_02.png) no-repeat
                        background-size cover
            .t-r
                border-left 1px solid #d8d8d8
                padding 0 .12rem
                cursor pointer
                height .26rem
                display inline-block
                .i-address
                    display block
                    height .26rem
                    width .2rem
                    background url(//static1.mtime.cn/html5/20191022151144/images/2014/i_address_01.png) no-repeat
                    background-size cover
                .i-phone
                    display block
                    height .26rem
                    width .2rem
                    background url(//static1.mtime.cn/html5/20191022151144/images/2014/i_tel_01.png) no-repeat
                    background-size cover
    .Scrollpic
        background #828282
        height 1.8rem
        width 100%
        .hotmovie
            padding: .15rem 0 0;
           
            ul
                width max-content
                position relative
                left 120px
                display flex
                .curr
                    b::after
                        content ''
                        display block
                        position absolute
                        left 0
                        top 0
                        bottom 0
                        right 0
                        width .9rem
                        height 1.25rem
                        background rgba(0,0,0,0.4)
                        z-index 2
                li
                    margin-left .1rem
                    margin-right .1rem
                    a
                        display block
                        width 100%
                        height 100%
                        b
                            display block
                            width .9rem
                            height 1.25rem
                            position relative
                            .img_box
                                width .9rem
                                height 1.25rem
                        p
                            text-align center
                            span
                                color #fff
    .movie-list
        
        .movie-title
            a
                display block
                padding .13rem .13rem .13rem 0
                position relative
                text-align center
                border-bottom 1px solid #d8d8d8
                h2
                    font-size .19rem
                    color #333
                p
                    span
                        color #ff8600
                        font-size .15rem
                    b
                        color #777
                        font-size .15rem
        .search-tab
            ul
                width max-content
                display flex
                .on
                    font-weight bold
                    a
                        color #1e7dd7
                li
                    width 1.5rem
                    
                    a
                        padding .145rem 0 .15rem
                        background #f6f6f6
                        text-align center
                        border-bottom 1px solid #dfdfdf
                        color #333
                        display block
                        font-size .17rem
        .movie-ticket
            dl
                dd
                    
                    text-align center
                    border-bottom 1px solid #d8d8d8
                    padding .13rem 0 .13rem 0
                    margin-left .15rem
                    .table_v_c
                        display flex
                        .mstime
                            display flex
                            align-items center
                            time
                                max-width .67rem
                                font-size .24rem
                                font-weight bold
                                
                        .mstype
                            flex 1
                            strong
                                font-weight normal
                                font-size .16rem
                            p
                                margin-top .05rem
                                b
                                    color #333
                                    font-size .16rem
                                    font-weight normal
                        .msprice
                            font-weight bold
                            width .9rem
                            line-height 1
                            
                            display flex
                            align-items center
                            text-align center
                            strong
                                display block
                                width 100%
                                font-size .2rem
                                color #ff8600
                                font-weight bold
                        .msgo
                            width .9rem
                            margin-right .19rem
                            display flex
                            align-items center
                            .m_btn_orange
                                min-width .9rem
                                background #ff8600
                                color #fff
                                border 1px solid #ff8600
                                display inline-block
                                padding .45em 0
                                border-radius .4rem
                                text-align center
                                span
                                    font-size .16rem
</style>