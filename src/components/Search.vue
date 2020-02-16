<template>
    <div class="search_body">
        <div class="search_input">
            <div class="search_input_wrapper">
                <i class="icon iconfont icon-sousu"></i>
                <input type="text" v-model="message">
            </div>
        </div>
        <div class="search_result">
            <h3>电影</h3>
            <ul>
                <li v-for="item in movieList" :key="item.id" @click="handTodetail(item.id)">
                    <div class="img"><img :src="item.img|setwh('128.180')" alt="" ></div>
                    <div class="info" >
                        <p ><span>{{item.nm}}</span><span>{{item.sc}}</span></p>
                        <p>{{item.enm}}</p>
                        <p>{{item.cat}}</p>
                        <p>{{item.rt}}</p>
                    </div>
                </li>
            </ul>
        </div>

    </div>
</template>
<script>
export default {
    name:"Search",
    data(){
        return {
            message:'',
            movieList:[],
        }
    },
    watch:{
        message(newVal){
            // console.log(newVal)
            // clearTimeout()
            // setTimeout()
            var that = this
            var cityId = this.$store.state.city.id
            this.cancelRequest()
            this.axios.get('/api/searchList?cityId='+cityId+'&kw='+newVal,{
                cancelToken:new this.axios.CancelToken(function(c) {
                    that.source = c;
             })
            }).then((res)=>{
                var msg = res.data.msg
                var movies = res.data.data.movies
                // console.log(movies)
                if(msg && movies){
                    this.movieList = res.data.data.movies.list
                }
            }).catch((err) => {
                if (this.axios.isCancel(err)) {
                    console.log('Rquest canceled', err.message); //请求如果被取消，这里是返回取消的message
                } else {
                    //handle error
                    console.log(err);
                }
            })       
        }
        },
    
    methods:{
        cancelRequest(){
            if(typeof this.source ==='function'){
                this.source('终止请求')
            }
        },
        handTodetail(movieId){
              this.$router.push('/movie/detail/2/'+movieId)
            // console.log(movieId)
        }
    }

}
</script>
<style scoped>
.search_body {
  margin-bottom: 60px
    
}
.movie_menu {
    width: 250px;
    height: 45px;
    border-bottom: 1px solid #e6e6e6;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: #fff;
    z-index: 10;
}

.search_body .search_result .img {
    width: 60px;
    float: left;
}
.search_body .search_result .info {
    float: left;
    margin-left: 15px;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
}

.search_body .search_result .img img {
    width: 100%;
}
.search_body .search_result li {
    border-bottom: 1px dashed #c9c9c9;
    padding: 5px ;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-left: -25px;
}

.search_body .search_result h3 {
    font-size: 15px;
    color: #999;
    padding: 9px 15px;
    border-bottom: 1px solid #e6e6e6;
    padding-top: 0;
}

#content .search_body {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    overflow: auto;
}
ul, menu, dir {
    display: block;
    list-style-type: disc;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 40px;
}

.search_body .search_input {
    padding: 8px 10px;
    background-color: skyblue;
    border-bottom: 1px solid #e5e5e5;
    margin-top: -40px;
}
.search_body .search_input_wrapper {
    padding: 0 10px;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    background-color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    line-height: 20px;
}
.search_body .search_input_wrapper {
    padding: 0 10px;
    border: 1px solid #e6e6e6;
    border-radius: 5px;
    background-color: #fff;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    line-height: 20px;
}
.iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.search_body .search_input_wrapper i {
    font-size: 16px;
    padding: 4px 0;
}
.search_body .search_result h3 {
    font-size: 15px;
    color: #999;
    padding: 9px 15px;
    border-bottom: 1px solid #e6e6e6;
     padding-top: 0;
}
.search_body .search_result .info {
    float: left;
    margin-left: 15px;
    flex: 1;
}
.search_result .info p{
    height: 22px;
    display: flex;
    line-height: 22px;
    font-size: 12px
}
.search_result .info p:nth-of-type(1) span:nth-of-type(1){
    font-size: 18px;
    flex: 1
}
.search_result .info p:nth-of-type(1) span:nth-of-type(2){
    font-size: 16px;
    color: #fc7103
}

.search_body .search_input_wrapper input {
    border: none;
    font-size: 13px;
    color: #333;
    padding: 4px 0;
    outline: none;
    margin-left: 5px;
    width: 100%;
}
</style>

