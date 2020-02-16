
export default {
    
    path: '/movie',

    component: ()=> import('../../views/Movie.vue'),
    children:[
        {
            path:'city',
            component: ()=> import('../../components/City.vue'),
        },
        {
            path:'NowPlaying',
            component: ()=> import('../../components/NowPlaying.vue'),
        },
        {
            path:'Search',
            component: ()=> import('../../components/Search.vue'),
        },
        {
            path:'ComingSoon',
            component: ()=> import('../../components/ComingSoon.vue'),
        },
        {
            path:'detail/1/:movieId',
            components:{
                default:()=>import('../../components/NowPlaying.vue'),
                detail:()=>import('../../views/Detail.vue')
            },
            props:{//多个vue时配置 配置后将动态参数传到其他组件
                detail:true
            }
        },
        {
            path:'detail/2/:movieId',
            components:{
                default:()=>import('../../components/Search.vue'),
                detail:()=>import('../../views/Detail.vue')
            },
            props:{//多个vue时配置 配置后将动态参数传到其他组件
                detail:true
            }
        },
        {
            path:'/movie',
            redirect:'/movie/NowPlaying'
          }


    ]
}

