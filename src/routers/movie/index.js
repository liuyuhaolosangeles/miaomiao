
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
            path:'/movie',
            redirect:'/movie/NowPlaying'
          }


    ]
}

