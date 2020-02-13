<template>
    <div>
        <Header title="喵喵影院"/>
        <div id="content">
            <div class="cinema_menu">
                <div class="city_switch">
                    全城 
                </div>
                <div class="brand_switch">品牌

                </div>
            <div class="feature_switch">特色</div></div>
            <Clist />
        </div>
        <TabBar />
    </div>
</template>

<script>

import Header from '../components/Header'
import TabBar from '../components/TabBar'
import Clist from '../components/CList'
export default {
    name:'Movie',
    components:{
        Header,
        TabBar,
        Clist
    }
}
</script>

<style  scoped>
#content .cinema_menu{
    width :100%;
    height: 45px;
    border-bottom: 1px solid #e6e6e6;display: flex;
    align-items: center;
    background: white;
    justify-content: space-around
}

</style>