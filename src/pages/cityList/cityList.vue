<template>
    <div class="city-content">
        <div class="city-header">
            <i class="city-back yo-ico" @click="back">&#xf07d;</i>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    props:{
        
    },
    data () {
        return {
            
        }
    },
    mounted () {
        
        
    
    },
    methods: {
    },

}
</script>

<style lang="stylus" scoped>
.city-content
    height 9rem
    width 100%
    background #000
    .city-header
        background #1c2635
        height .52rem
        width 100%
        .city-back
            font-size .22rem
            color #fff


</style>