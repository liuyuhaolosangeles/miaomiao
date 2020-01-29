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
</style>