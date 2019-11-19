import Vue from 'vue'

Vue.filter('price',(value,num)=>{
    value = value.toString()
    return value.slice(0,num)
})