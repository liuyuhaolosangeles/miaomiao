<template>
    <div >
        <div>个人中心: </div> 
        <div>当前用户：{{$store.state.user.name}}<a href="javascript:;" @click="handToLogout">退出</a></div>
        <div v-if="$store.state.user.isAdmin">当前身份：管理员 <router-link to="/admin" target="_blank">进入管理界面</router-link></div>
        <div v-else>当前身份：vip</div>
        <div>
            <input  type="file" name="file" value="上传头像" @change="changeHead">
            <img class="userHead" :src="$store.state.user.userHead" >
        </div>
    </div>
</template>

<script>

import axios from 'axios'
export default {
    name : 'center',
    methods:{
        handToLogout(){
            this.axios.get('/api2/users/logout')
                .then((res)=>{
                    var status = res.data.status
                    if(status===0){
                    localStorage.removeItem('username')
                    localStorage.removeItem('isAdmin')
                        this.$alert('账户已退出', '信息', {
                            confirmButtonText: '确定',
                            callback: action => {
                                             this.$store.commit('user/USER_NAME',{name : '',isAdmin : false,userHead:''})
                                             this.$router.push('/mine/login')             
                                }
                            })
 
                  
                    }
                })
        },

        changeHead(ev){
            var file = ev.target.files[0]
            var param = new FormData()
            param.append('file',file,file.name)
            
            var config = {
                headers : {
                    'Content-Type':'multipart/form-data'
                }
            }
            this.axios.post('/api2/users/uploadUserHead',param,config)
                .then((res)=>{
                    var status = res.data.status
            
                    if(status === 0){
                        console.log("上传成功")
                        this.$store.commit('user/USER_NAME',{
                            name : this.$store.state.user.name , 
                            isAdmin : this.$store.state.user.isAdmin,                            
                            userHead:res.data.data.userHead + '?' + Math.random()
                        })
                    }else{
                         console.log("上传失败")
                    }
                })


        }
    },
    //导航守卫
    beforeRouteEnter(to,from,next){
        axios.get('/api2/users/getUser').then((res)=>{
            var status = res.data.status
            console.log(res.data.data)
            if(status === 0){
                next(vm =>{
                    
                    localStorage.setItem('username',res.data.data.username)
                    localStorage.setItem('isAdmin',res.data.data.isAdmin)
                    vm.$store.commit('user/USER_NAME',{ 
                        name : res.data.data.username , 
                        isAdmin : res.data.data.isAdmin,
                        userHead : res.data.data.userHead
                        })
                })
            }
            else{
                next('/mine/login')
            }
        })
    } 
}
</script>

<style scoped>
.userHead{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    display: flex
}
</style>