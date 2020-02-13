<template>
    <div class="search_body">
        <div class="search_input">
            <div class="search_input_wrapper">
                <i class="icon iconfont icon-sousu"></i>
                <input type="text">
            </div>
        </div>
        <div class="search_result">
            <h3>电影</h3>
            <ul>
                <li>
                    <div class="img"></div>
                    <div class="info">
                        <p><span>无名之辈</span><span>8.25</span></p>
                        <p>A cool fish</p>
                        <p>剧情，喜剧，犯罪</p>
                        <p>2018-11-16</p>
                    </div>
                </li>
            </ul>
        </div>

    </div>
</template>
<script>
export default {
    name:"Search"
}
</script>
<style scoped>
#content {
    flex: 1;
    overflow: auto;
    margin-bottom: 50px;
    position: relative;
    display: flex;
    flex-direction: column;
}
#content .movie_menu {
    width: 100%;
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

#content .search_body {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    overflow: auto;
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

