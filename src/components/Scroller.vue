<template>
    <div class="wrapper" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name:'Scroller',
    props:{
        handToScroll:{
            default:function(){}
        },
        handToTouchEnd:{
            default:function(){}
        }
    },
    mounted(){
   
            var scroll= new BScroll(this.$refs.wrapper,{
                        tap:true,
                        probeType:1
            });
            this.scroll = scroll

            scroll.on('scroll',(pos)=>{
                this.handToScroll(pos)
            })
            
            scroll.on('touchEnd',(pos)=>{
                this.handToTouchEnd(pos)
            })

      
    },
    methods:{
        handToScrollTop(y){
            this.scroll.scrollTo(0,y)
        }
    }
    
    
}
</script>

<style scoped>
.wrapper{
    height: 100%;
    width: 100%
}
</style>