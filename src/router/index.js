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
        component:News
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
  
  
    
    
  
  
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
