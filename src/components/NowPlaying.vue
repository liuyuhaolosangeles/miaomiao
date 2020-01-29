<template>
    <div class="movie_body">
        <ul>
            <li>
                <div class="pic_show"><img src="" alt=""></div>
                <div class="info_list">
                    <h2>
                        毒液
                    </h2>
                    <p>观众评<span class="grade">9.3</span></p>
                    <p>主演:劳资</p>
                    <p>今日有108家影院放映244场</p>
                </div>
                <div class="btn_mail">
                    购票
                </div>

            </li>
            <li>
                <div class="pic_show"><img src="" alt=""></div>
                <div class="info_list">
                    <h2>
                        吴文东西
                    </h2>
                    <p>观众评<span class="grade">9。9</span></p>
                    <p>主演:劳资</p>
                    <p>今日有108家影院放映242场</p>
                </div>
                <div class="btn_mail">
                    购票
                </div>

            </li>

        </ul>
    </div>
</template>


<script>
export default {
    name:"NowPlaying"

}
</script>

<style scoped>
#content .movie_body{
    flex:1;
}
</style>