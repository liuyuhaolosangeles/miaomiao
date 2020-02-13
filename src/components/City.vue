<template>
    <div class="city_body">
        <div class="city_list">
            <div class="city_hot">
                <h2>热门城市</h2>
                <ul class="clearfix">
                    <li v-for="item in hotlist" :key="item.id">{{item.nm}}</li>
                  
                </ul>
            </div>
            <div class="city_sort" ref="city_sort">
                        <div v-for="item in cityList" :key="item.id">
                            <h2>{{item.index}}</h2>
                            <ul>
                                <li v-for="itemList in item.list" :key="itemList.id">{{itemList.nm}}</li>
                            </ul>
                        </div>

                </div>

            </div>
            <div class="city_index">
                    <ul>
                        <li v-for="(item,index) in cityList" :key="item.id" @click="handToIndex(index)">{{item.index}}</li>
                  
                    </ul>
            </div>
        </div>
    
   

       
        
    
</template>


<script>

export default {
    name:"City",
    data(){
        return{
            cityList : [],//首字母索引数组
            hotlist : []
        }
    },
    mounted(){

        var cityList = window.localStorage.getItem('cityList');
        var hotList = window.localStorage.getItem('hotList');
 
        if(cityList && hotList){
            this.cityList = JSON.parse(cityList);
            this.hotList = JSON.parse(hotList);
        }

        else{
            this.axios.get('/api/cityList').then((res)=>{
                        var msg = res.data.msg
                        if(msg === 'ok'){
                            var cities = res.data.data.cities
                            // console.log(cities)
                            var {cityList , hotlist} = this.formatCityList(cities)
                            this.cityList = cityList
                            this.hotlist = hotlist
                            
                        }
                    })
        }
        
        // console.log(this.cityList)
    },
    methods:{
        formatCityList(cities){//将所有cities里的城市按首字母分到相应的数组
            var cityList = []//首字母索引数组
            var hotlist = []

            for ( var h = 0;h<cities.length;h++){
                if(cities[h].isHot===1){
                    hotlist.push(cities[h]) 
                     
                       
                }
                
              
            }
                    // console.log(hotlist)
            for(var i = 0;i<cities.length;i++){
               var firstLetter = cities[i].py.substring(0,1).toUpperCase()
                if(toCom(firstLetter)){//新添加index
                    cityList.push({index:firstLetter , list:[{nm:cities[i].nm,id:cities[i].id}]})
                }
                else{ //已累加index
                    for( var j = 0;j<cityList.length;j++){
                        if(cityList[j].index === firstLetter){
                            cityList[j].list.push({nm:cities[i].nm,id:cities[i].id})
                        }
                    }
                }
            }
            cityList.sort((a,b)=>{
                if(a.index>b.index){
                    return 1;
                }
                else if(a.index<b.index){
                    return -1
                }else{
                    return 0
                }
            })


            function toCom(firstLetter){//判断是否存在该首字母城市索引
                for(var i = 0 ;i<cityList.length;i++){
                    if(cityList[i].index === firstLetter){//表示该城市首字母列表已存在

                        return false
                    }
                }
                return true

            }
        //    console.log(cityList)
            return {
                cityList,hotlist
            }
        },
        handToIndex(index){//跳转
            var h2 = this.$refs.city_sort.getElementsByTagName('h2')
            this.$refs.city_sort.parentNode.scrollTop=h2[index].offsetTop
        }
    }

}
</script>

<style scoped>
 .city_body {
    margin-top: 97px;
    display: flex;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
}



.city_body .city_list {
    -webkit-box-flex: 1;
    flex: 1 1 0%;
    overflow: auto;
    background: rgb(255, 245, 240);
}
.city_body .city_list::-webkit-scrollbar{
    background-color: transparent;
    width: 0
}

.city_body .city_index{
    width: 20px;
    display: flex;
    flex-direction: column;
    float: right;
    justify-content: center;
    text-align: center;
    border-left: 1px solid #e6e6e6;
}

.city_body .city_hot {
    margin-top: 20px;
}

.city_body .city_hot h2{
    padding-left: 15px;
    line-height: 30px;
    font-size: 14px;
    background: #f0f0f0;
    font-weight: 400;
}
.clearfix:after {
    content: "";
    display: block;
    clear: both;
}
.city_body .city_hot ul li {
    float: left;
    background: #fff;
    width: 29%;
    height: 33px;
    margin-top: 15px;
    margin-left: 3%;
    padding: 0 4px;
    border: 1px solid #e6e6e6;
    border-radius: 3px;
    line-height: 33px;
    text-align: center;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}
* {
    margin: 0;
    padding: 0;
}
.city_body .city_sort div {
    margin-top: 20px;
}

.city_body .city_sort h2 {
    padding-left: 15px;
    line-height: 30px;
    font-size: 14px;
    background: #f0f0f0;
    font-weight: 400;
}

.city_body .city_sort ul {
    padding-left: 10px;
    margin-top: 10px;
}

.city_body .city_sort ul li {
    line-height: 30px;
}
</style>