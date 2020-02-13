export default {
    
    path: '/admin',

    component: ()=> import('../../views/admin.vue')
    ,children : [
        {
            path:'admin-cinema',
            component : ()=> import('../../views/admin-cinema.vue')
        },
        {
            path:'admin-movie',
            component : ()=> import('../../views/admin-movie')
        },
        {
            path:'admin-users',
            component : ()=> import('../../views/admin-users')
        },
        {
            path:'/admin',
            redirect:'/admin/admin-users'
          }
    ]
}