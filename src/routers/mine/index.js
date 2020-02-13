export default {
    
    path: '/mine',

    component: ()=> import('../../views/Mine.vue')
    ,children : [
        {
            path:'center',
            component : ()=> import('../../views/center.vue')
        },
        {
            path:'login',
            component : ()=> import('../../components/Login')
        },
        {
            path:'register',
            component : ()=> import('../../components/register')
        },
        {
            path:'findPassword',
            component : ()=> import('../../components/findPassword')
        },
        {
            path:'/mine',
            redirect:'/mine/center'
          }
    ]
}

