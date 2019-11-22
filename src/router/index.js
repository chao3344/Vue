import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from 'pages/Index'
import Movies from 'pages/index/OnMovie'

import AllMovie from 'pages/index/AllMovie'
import HotMovies from 'pages/index/HotMovies'
import ComingMovies from 'pages/index/ComingMovies'

import Theater from 'pages/Theater'
import Shop from 'pages/Shop'
import News from 'pages/News'

import CityList from 'pages/cityList/cityList'

import TheaterDetail from 'detail/TheaterDetail'
import MovieDetail from 'detail/MovieDetail'
import Comingmoviedetail from 'detail/Comingmoviedetail'

import New from 'news/new'
import Trailer from 'news/trailer'
import Toplist from 'news/toplist'
import Review from 'news/review'


Vue.use(VueRouter)

const routes = [
  {
    path :'/',
    redirect: '/index/movies'
  },
  {
    path: '/index',
    name: 'index',
    component: Index,
    children:[
      {
        path: 'movies',
        name: 'movies',
        component: Movies,
      },
      {
        path:'theater',
        name:'theater',
        component:Theater
      },
      {
        path:'shop',
        name:'shop',
        component:Shop
      },
      {
        path:'news',
        name:'news',
        component:News,
        redirect: '/index/news/new',
        children:[
          {
            path: 'new',
            name: 'new',
            component: New,
            
          },
          {
            path: 'trailer',
            name: 'trailer',
            component: Trailer,
          },
          {
            path: 'toplist',
            name: 'toplist',
            component: Toplist,
          },
          {
            path: 'review',
            name: 'review',
            component: Review,
          },
        ]
      },
    ]
  },
  {
    path:'/index/allmovie/hotmovie',
    name:'allmovie',
    component:AllMovie,
    children:[
      {
        path:'/index/allmovie/hotmovie',
        name:'hotmovie',
        component:HotMovies
      },
      {
        path:'/index/allmovie/comingmovie',
        name:'comingmovie',
        component:ComingMovies
      }
    ]
  },
  {
    path:'/city',
    name:'city',
    component:CityList
  },
  {
    path:'/theaterdetail',
    name:'theaterDetail',
    component:TheaterDetail
  },
  {
    path:'/moviedetail',
    name:'moviedetail',
    component:MovieDetail
  },
  {
    path:'/comingmoviedetail',
    name:'comingmoviedetail',
    component:Comingmoviedetail
  }
  
    
    
  
  
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
