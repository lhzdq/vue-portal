
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
    



    var url = "http://user.zcom.gov.cn/idm";
    var servicecode = "xtbgmh";
    var servicepwd = "RtVUbvrv";
    var time = gettime();
    // console.log(MD5('aaa'))
    var sign = MD5(servicecode+servicepwd+time);
    //初始化配置
    idm.config({
        debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert
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
    
