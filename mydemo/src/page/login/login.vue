<template>
    <div class="backgrounds">
        <div class="box">
            <div class="logo">
                <img src="../../../static/images/logo.png" alt="">
            </div>
            <div class="loginBox">
                <div class="title">
                    登录
                </div>
                <div class="inputBox">
                    <div class="boxs">
                        <div class="logo">
                            <img src="../../../static/images/user.png" alt="">
                        </div>
                        <input type="text" required='required' id='username' placeholder="请输入用户名" name="username">
                    </div>
                    <div class="line"></div>
                    <div class="boxs">
                        <div class="logo">
                            <img src="../../../static/images/pwd.png" alt="">
                        </div>
                        <input type="password" required='required' id='password' placeholder="请输入密码" name="password">
                        <div class="foundpwd">
                            找回密码
                        </div>
                    </div>
                </div>
                <button type="button" id='login'>登录</button>
                <div id="loginError">
                    <div></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
import MD5 from 'md5'


    function gettime(){
        var d = new Date();
        return d.Format("yyyyMMddhhmmss");
    }
    
    Date.prototype.Format = function (fmt) { //author: meizz
        var o = {
            "M+": this.getMonth() + 1, //月份
            "d+": this.getDate(), //日
            "h+": this.getHours(), //小时
            "m+": this.getMinutes(), //分
            "s+": this.getSeconds(), //秒
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
            "S": this.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    };
    


$(function(){
    var url = "http://user.zcom.gov.cn/idm";
    var servicecode = "xtbgmh";
    var servicepwd = "RtVUbvrv";
    var time = gettime();
    var sign = MD5(servicecode+servicepwd+time);
    //初始化配置
    idm.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert
        url: url,		// 必填，idm地址
        servicecode: servicecode, 				// 必填，接入代码
        time:time,
        sign: sign,	// 必填，签名
        success:function(e){	// 回调函数（成功）
		//alert("ok");
        },
        fail:function(r)	{	// 回调函数(失败)
            alert("idm.config fail！");
        }
    });



    //账号登出
    // $('').click(function(){
    //     idm.user.logout({
    //         success:function(){	// 回调函数（成功）
    //         },
    //         fail:function(r)	{	// 回调函数(失败)

    //         }
    //     })
    // })
    function setCookie(name,value,expiredays){
        var exdate=new Date();   
        exdate.setDate(exdate.getDate()+expiredays);
        document.cookie=name+ "=" +escape(value)+((expiredays==null) ? "" : ";expires="+exdate.toGMTString())+";path=/;";//创建cookie
    }
    

    //账号密码登陆   huangkx   /  zjs@123
    // uid: "ff80808167bece9d0167bf50b7dc0008"
    // uid: "ff80808167bece9d0167bf50b7dc0008"
    document.onmousedown=function(ev){
        $('#loginError').css('display','none')
    }
    $(document).on("keydown",function (event) {
        var e = event || window.event ||arguments.callee.caller.arguments[0];
        if(e && e.keyCode==13){
            console.log('keydown')
            loginFunc();
        }
    });

    $('#login').click(function (){
        loginFunc();

    });

    function loginFunc() {
        //var uid=$('#username').val()+'.tjg.swt';//获取页面中登录名和密码
		var uid=$('#username').val()
        var pwd=$('#password').val();
        console.log(uid,pwd)
        // console.log($(this))
        idm.user.login({
            loginname: uid,  //账号
            password: pwd,  //密码
            getticket:true,  //是否获取票据
            success:function(r){	// 回调函数（成功）
                console.log(r);
                r.ticket,	//票据，getticket为true时返回。（经过aes加密）
                    r.uid,	// 用户主键
                    r.showname	// 显示信息已脱敏（如果已经实名取姓名，未实名取手机号）
                var ticket=r.ticket;
                // var servicepwd=RtVUbvrv
                
                // console.log(ticket);
                setCookie('showname',r.showname)
                location.href='./index.html?ticket='+ticket+'&servicepwd=RtVUbvrv';
            },
            fail:function(r)	{	// 回调函数(失败)
                console.log(r.msg)
                r.code,	// 错误代码
                r.msg	// 错误信息
                $('.forget').css('display','block')
                $('#loginError').css('display','block')
                $('#loginError div').html(r.msg);
            }
        })
    }
    
})


export default {
    data() {
        return {
            
        }
    },
    mounted() {
        
    },
    methods: {
        
    },
    
}
</script>
<style scoped>
    @import '../../../static/css/page.css';
     .backgrounds{
        width: 100%;
        height:100%;
        background:url(../../../static/images/background.jpg) center center no-repeat;
        /* background: black; */
        background-size:cover;
        position: relative;
    }
    .box{
        width: 444px;
        height: 401px;
        position: absolute;
        margin:auto;
        /* background: red; */
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }
    .logo{
        width: 253px;
        height: 56px;
        margin-left: 96px;
        margin-bottom: 40px;
        box-sizing: border-box;
        
    }
    .logo img{
        display: block;
        width: 100%;
        height: 100%;
    }
    .loginBox{
        width: 444px;
        height: 305px;
        background: #313884;
        border:1px solid rgba(49,56,132,1);
        padding: 40px;
        box-sizing: border-box;
    }
    .title{
        width:100%;
        height:28px;
        font-size:24px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:28px;
        text-align: center;
        text-shadow:0px 0px 4px rgba(0,0,0,0.2);
        margin-bottom: 32px;
    }
    .inputBox{
        width: 316px;
        height: 89px;
        margin: auto;
        background: #fff;
        overflow: hidden;
        border-radius: 8px;
        border: 1px solid rgba(250,250,250,1);
        position: relative;
        margin-bottom: 34px
    }
    .boxs{
        overflow: hidden;
        width: 316px;
        height: 44px;
        float: left;
    }
    .line {
        position: absolute;
        width: 284px;
        height: 1px;
        left: 16px;
        right: 16px;
        top: 44px;
        bottom: 44px;
        margin: auto;
        background: #E8E8E8;
    }
    .boxs .logo{
        width: 20px;
        height: 20px;
        margin: 12px 12px 12px 16px;
        float: left;
    }
    .boxs .logo img{
        width: 100%;
        height: 100%;
        display: block;
    }
    .boxs input{
        float: left;
        width: 170px;
        height: 22px;
        margin: 11px 11px 11px 0px;
    }
    .boxs #pwd{
        margin-right: 0;
    }
    .box .foundpwd{
        width:56px;
        height:20px;
        font-size:14px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(24,144,255,1);
        line-height:20px;
        float: left;
        margin-left: 27px;
        margin-top: 10px;
    }
    #login{
        width:316px;
        height:44px;
        background:rgba(64,139,249,1);
        box-shadow:0px 0px 6px 0px rgba(88,88,88,0.5);
        border-radius:8px;
        text-align: center;
        line-height: 44px;
        border: none;
        font-size: 16px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(255,255,255,1);
        margin-left: 23px;
    }
    #loginError{
        display: none;
        position: absolute;
        top: 293px;
        left: 130px;
        color: red;
        font-size: 13px;
        /* margin: 0 auto; */
        width:144px;
        height:auto;
        background: #fff;
        border-radius: 8px;
        /* overflow: hidden; */
    }
    #loginError:after{
            content: "";
            position: absolute;
            right: 64px;
            bottom: 68px;
            width: 0;
            height: 0;
            border: 8px solid #fff;
            border-right-color: transparent;
            border-left-color: transparent;
            border-top-color: transparent;
    }
    #loginError div{
            width:100%;
            height:auto;
            font-size:14px;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(0,0,0,0.65);
            margin: 12px 0;
            line-height:22px;
            text-align: center;
    }
</style>
