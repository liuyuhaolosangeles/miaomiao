<template>
    <div>
        <div>
        邮箱 : <input type="text" v-model="email"> 
        <button @click="handToVerify" :disabled="disabled" >{{verifyInfo}}</button>
    </div>
    <div>
        新密码 <input type="password" v-model="password">
    </div>
    <div>
        确认密码 <input type="password" v-model="newpassword">
    </div>
    <div>
        验证码 <input type="text" v-model="verify">
    </div>
    <div>
         <button  @click="handToFindPassword">确认修改</button>
    </div>
    <div class="login_link">
                    <router-link to="/mine/login">立即登录</router-link>
                    <router-link to="/mine/register">立即注册</router-link>
                    <!-- <a href="#">立即注册</a> -->
                    <!-- <a href="#">找回密码</a> -->
                </div>
    </div>
</template>

<script>
export default {
    name : 'findPassword',

        data(){
        return {
            email:'',
            password:'',
            verify:'',
            username:'',
            newpassword:'',
            verifyInfo:'发送验证码',
            disabled:false
        }
    },
    methods:{
    handToVerify(){
            if(this.disabled){return;}
            
            this.axios.get('/api2/users/verify?email='+ this.email)
                .then((res)=>{
                    var This = this
                    var status = res.data.status
                    console.log(res.data)
                    if(status === 0){
                        this.$alert('验证码发送成功', '信息', {
                        confirmButtonText: '确定',
                        callback: action => {
                                This.countDown()
                            }
                        })
                    }else{
                        this.$alert('验证码发送失败', '信息', {
                        confirmButtonText: '确定',
                        callback: action => {
                                
                            }
                        })
                    }
                })
        },
    handToFindPassword(){
                if(this.newpassword === this.password )
                {
                    this.axios.post('/api2/users/findPassword',{
                    password:this.password,
                    verify:this.verify,
                    email:this.email
                }).then((res)=>{
                    var status = res.data.status
                    if(status === 0){
                                this.$alert('修改密码成功', '信息', {
                                confirmButtonText: '确定',
                                callback: action => {
                                                 this.$router.push("/mine/login")
                                            }
                                        })
                       
                    }
                    else{
                                this.$alert(res.data.msg, '信息', {
                                confirmButtonText: '确定',
                                callback: action => {
                                                
                                            }
                                        })
                    }
                })
                }
                else{
                                        this.$alert('两次密码不相符', '信息', {
                                        confirmButtonText: '确定',
                                        callback: action => {
                                                
                                            }
                                        })
                }
  
            }
    },
           
    
}
</script>