<template>
    <div>
        <Header title="喵喵电影" />
        <div id="content">
            <div class="movie_menu">
                <router-link class="city_name" tag="div" to="/movie/city">
                    <span>潜江</span>
                </router-link>
                <div class="hot_switch" >
                    <router-link class="hot_item " tag="div" to="/movie/NowPlaying">正在热映</router-link>
                    <router-link class="hot_item" tag="div" to="/movie/ComingSoon">即将上映</router-link>

                </div>
                <router-link class="search_entry" tag="div" to="/movie/Search">
                   <i class="icon iconfont icon-sousu"></i>
                
                </router-link>
                
            </div>
        </div>
        <TabBar />

        <keep-alive>
            <router-view />

        </keep-alive>
    </div>
</template>

<script>

import Header from '../components/Header'
import TabBar from '../components/TabBar'

export default {
    name:'Movie',
    components:{
        Header,
        TabBar,
 
    }
}
</script>

<style  scoped>
.movie_menu .hot_item.router-link-active{
    color : skyblue;
    border-bottom: 2px skyblue;
}
.movie_menu .city_name.router-link-active{
    color : skyblue;
    border-bottom: 2px skyblue;
}
.movie_menu .search_entry.router-link-active{
    color : skyblue;
    border-bottom: 2px skyblue;
}
#content{
    flex: 1;
    overflow: auto;
    margin-bottom: 50px;
    position: relative;
    display: flex;
    flex-direction: row
}
#content .movie_menu{
    width: 100%;
    height:45px;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    overflow: hidden;
    justify-content: space-around
}
.movie_menu .city_name{
    margin-left: 20px;
    height:100%;
    line-height: 45px
}

.movie_menu .city_name.active{
    color:#ef4238 ; border-bottom: 2px #ef4238 solid;

}
.movie_menu .hot_switch{
    display: flex;
    height: 100%;
    line-height: 45px;
    margin-left: 45px;
}

.movie_menu .hot_item{
    font-size: 15px;
    color: #666;
    width: 80px;
    text-align: center;
    margin: 0 40px
}
.movie_menu .hot_item.active{
    color:  #ef4238;
    border-bottom: 2px #ef4238 solid;
    
}
.search_entry{
    margin-right: 20px;
    height: 100%;
    line-height: 45px;
    margin-left: 65px;
    float: right;
}
.search_entry.active{
    color :#ef4238;
    border-bottom: 2px  #ef4238 solid;
}
.search_entry i{
    font-size: 24px;
    color: red;
}
</style>