<template>
    <div class="movie_body" ref="movie_body">
        <Loading v-if="isLoading" />
        <Scroller  :handToScroll="handToScroll" :handToTouchEnd="handToTouchEnd">   
                

                <ul>
                    <li class="pullDown">{{pullDown}}</li>
                  
                    <li v-for="item in movieList" :key="item.id">
                        <div class="pic_show" @tap="handToDetail(item.id)"><img :src="item.img|setwh('128.180')" alt=""></div>
                        <div class="info_list">
                            <h2 @tap="handToDetail(item.id)">
                            {{item.nm}}    <img v-if="item.version" src="@/assets/3dmaxs.png">
                            </h2>
                        
                            <p>观众评<span class="grade">{{item.sc}}</span></p>
                            <p>主演:{{item.star}}</p>
                            <p>{{item.showInfo}}</p>
                        </div>
                        <div class="btn_mail">
                                <span>购票</span>
                        </div>

                    </li>
                

                </ul>
         
        </Scroller>
    </div>
</template>


<script>
import BScroll from 'better-scroll'
export default {

    name:"NowPlaying",
    data(){
        return {
            movieList:[],
            pullDown:'',
            isLoading:true,
            prevCityId : -1
        }
    },
    activated(){//activated渲染一次页面调用一次 mounted是打开页面刷新一次
        var cityId = this.$store.state.city.id
        if(cityId === this.prevCityId){return} //当城市没有改变时 return 城市改变时进行下面axios操作
        this.isLoading = true
        console.log('nowPlaying')
        this.axios.get('/api/movieOnInfoList?cityId=' + cityId).then((res)=>{
            var msg = res.data.msg
            if(msg ==='ok'){
                this.movieList = res.data.data.movieList
                this.isLoading = false
                this.prevCityId = cityId
            }

            
        })

   
        
       
    },
    methods:{
        handToDetail(movieId){
            this.$router.push('/movie/detail/1/'+movieId)
        },
        handToScroll(pos){
            if(pos.y>30){
                this.pullDown='正在更新中.....'
                }

        },
        handToTouchEnd(pos){
            if(pos.y>30){
                this.axios.get('/api/movieOnInfoList?cityId=10').then((res)=>{
                    var msg = res.data.msg
                    if(msg ==='ok'){
                        this.pullDown='更新成功'
                        setTimeout(()=>{
                            this.movieList = res.data.data.movieList
                            this.pullDown = ''
                        },1000)
                                                
                    }
                                        
                })
                            
            }
        }
    }

}
</script>

<style scoped>
 .movie_body{
    flex:1;
    overflow: auto;
    margin-top: -50px;
    margin-bottom: 60px;
    height: 700px
   
    

}
.movie_body ul {
    margin:0 12px;
    overflow: hidden;
}
.movie_body ul li {
    margin-top: 12px;
    display: flex;
    align-items: center;
    border-bottom: 1px #e6e6e6 solid;
    padding-bottom: 10px
}
.movie_body .pic_show{
    width:64px;
    height:89.6px;
}
.movie_body .pic_show img{
    width: 100%;
    height: 100%;
}
.movie_body .info_list{
    margin-left:10px;
    flex: 1;
    position: relative;
}
.movie_body .info_list h2{
    font-size: 17px;
    line-height: 24px;
    width: auto;
    overflow: hidden;
    white-space: nowrap;
    /* text-overflow: initial; */
}
.movie_body .info_list p{
    font-size: 13px;
    color: #666;
    line-height: 22px;
    width: auto;
    overflow: hidden;
    white-space: nowrap;
    /* text-overflow: inherit; */

}
.movie_body .info_list .grade{
    font-weight: 700;
    color: #faaf00;
    font-size: 15px;
}
.movie_body .info_list img{
    width: 50px;
    position: absolute;
    right: 10px;
    top: 5px;
}

.movie_body .btn_mail,.movie_body .btn_pre{
    width: 47px;
    height: 27px;
    line-height: 28px;
    text-align: center;
    background-color: #faaf00;
    cursor: pointer;
    
   
}
.movie_body .btn_mail span{
    color: white;
    text-decoration-line: none;
    cursor: pointer;
       
    
}

.movie_body .btn_pre{
    background-color: #3c9fe6
}

.pullDown{margin: 0;padding: 0;border:none }
</style>