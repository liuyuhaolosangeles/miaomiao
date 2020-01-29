<template>
    <div>
        <Header title="喵喵影院"/>
        <div id="content">
            <div class="city_switch">
                全城 
            </div>
            <div class="brand_switch">品牌

            </div>
            <div class="feature_switch">特色</div>
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

<style lang="stylus" scoped>

</style>