<template>
    <div id="main">
        <header id="header">
            <h1>登录</h1>
        </header>
        <div class="content">
            <div class="login_body">
                <div>
                    <input type="text" class="login_text" placeholder="手机号">
                </div>
                <div>
                    <input type="password" class="login_text" placeholder="密码">
                </div>
                <div class="login_btn">
                    <input type="submit"  value="登录">
                </div>
                <div class="login_link">
                    <a href="#">立即注册</a>
                    <a href="#">找回密码</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
    name:'Login'
}
</script>
<style scoped>

</style>