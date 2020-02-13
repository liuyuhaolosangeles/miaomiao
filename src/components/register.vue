<template>
<div>
    <div>
        邮箱 : <input type="text" v-model="email"> 
        <button @click="handToVerify" :disabled="disabled" >{{verifyInfo}}</button>
    </div>
    <div>
        用户名 <input type="text" v-model="username">
    </div>
    <div>
        密码 <input type="password" v-model="password">
    </div>
    <div>
        确认密码 <input type="password" v-model="newpassword" >
    </div>
    <div>
        验证码 <input type="text" v-model="verify">
    </div>
    <div>
         <button @click="handToRegister" >注册</button>
    </div>
    <div class="login_link">
                    <router-link to="/mine/login">立即登录</router-link>
                    <router-link to="/mine/findPassword">找回密码</router-link>
                    <!-- <a href="#">立即注册</a> -->
                    <!-- <a href="#">找回密码</a> -->
                </div>
</div>
    
</template>

<script>
export default {
    name : 'register',
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
        handToRegister(){
           if(this.newpassword === this.password ){
                this.axios.post('/api2/users/register',{
                email : this.email,
                username : this.username,
                password : this.password,
                verify : this.verify
            }).then((res)=>{
                var status = res.data.status
                if(status === 0){
                    this.$alert('注册成功', '信息', {
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
                            console.log(res.data.msg)
                            }
                        })
                
                }
            })
           } else{
                      this.$alert("两次密码不相符", '信息', {
                        confirmButtonText: '确定',
                        callback: action => {            
                            }
                        })
                
                }
     
        },
        
    }
}
</script>