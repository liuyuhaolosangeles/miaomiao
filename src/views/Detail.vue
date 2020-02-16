<template>
    <div id="detailContrainer" class="slide-enter-active">
       
        <Header title="影片详情" >
            <i class="iconfont icon-right detail_i" @click="handleToBack"></i>
        </Header>
        <Loading v-if="isLoading" />
        <div v-else id="content" class="contentDetail">
            <div class="detail_list">
                <div class="detail_list_bg"> </div>
                <div class="detail_list filter"></div>
                <div class="detail_list_content">
                    <div class="detail_list_img">
                        <!-- <img :src="detailMovie.img|setwh('128.180')" alt=""> -->
                    </div>
                    <div class="detail_list_info">
                        <h2>name</h2>
                        <p>ename</p>
                        <p>9.2</p>
                        <p>剧情</p>
                        <p>china</p>
                        <p>time</p>
                    </div>
                    <h1>movieId:{{movieId}}</h1>
                </div>

              
            </div>
            <div class="detail_intro">
                <p> *****</p>

            </div>
            <div class="detail_player swiper-container">
                <ul class="swiper-wrapper">
                    <li class="swiper-slide">
                        <div>
                            <img src="" alt="">
                        </div>
                        <p>w </p>
                        <p>n </p> 
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header'
export default {
    name:'Detail',
    data(){
        return{
            detailMovie:{},
            isLoading:true
        }
    },
    components:{
        Header,
    },
    props:['movieId'],//接收路由传递的动态参数
    methods:{
        handleToBack(){
            this.$router.back()
        }
    },
    mounted(){
        
        this.axios.get('/api/detailmovie?movieId='+this.movieId).then((res)=>{
            var msg = res.data.msg
            if(msg === 'ok'){
                this.detailMovie = res.data.data.detailMovie
                console.log(res.data.data)
                setTimeout(()=>{
                    this.isLoading = false
                },2000)
                
            }
        })
    }
}
</script>

<style scoped>
Header{
    line-height: 0
}
Header .detail_i{
    position: absolute;
    left: 5px;
    top: 50%;

    font-size: 26px;
}

@keyframes slideMovie{
    0%{transform: translateX(100%)};
    100%{transform: translateX(0%)}
}
/* //进入动画 */
.slide-enter-active{
    animation: 1s slideMovie;
}

#detailContrainer{
    position: absolute;
    left: 0;
    top: 0;
    z-index: 9;
    width: 100%;
    min-height: 100%;
    background: white

}

#content.contentDetail{display: block;margin-bottom: 0}
#content .detail_list{
    height: 200px;
    width: 100%;
    position: relative;
    overflow: hidden;
}
.detail_list .detail_list_bg{
    width: 100%;
    height: 100%;
    /* background: url(../image/) */
    filter: blur(20px);

}

.detail_list .detail_list_filter{
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #40454d;
    opacity: .55;

}
.detail_list .detail_list_content{
    display: flex;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;

}
h1{
    position:absolute
}
.detail_list .detail_list_img{
    width: 100%;
    height: 150px;
    border: solid 1px #f0f2f3;
    margin: 20px
}

.detail_list .detail_list_img img{
    width: 100%;
    height: 100%;
}
.detail_list .detail_list_info{
    margin-top: 20px;
}
.detail_list .detail_list_info h2{
    font-size: 20px;
    color: white;
    font-weight: normal;
    line-height: 40px;
}
.detail_list .detail_list_info p{
    color: white;
    line-height: 20px;
    font-size: 14px;
    color: #ccc;
  
}

  
</style>