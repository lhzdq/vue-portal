<template>
    <div class="backgrounds">
        <div class="nav">
            <div class="navs">
                <div class="logo">
                    <img src="../../../static/images/logo.png" alt="">
                </div>
                <div class="navLi">
                    <div class="navli indexs">首页</div>
                    <div class="navli cockpit">领导驾驶舱</div>
                </div>
                <div class="username">
                    <img src="../../../static/images/user.png" alt="">
                    <div class="usernames">测试账号测试账号测试账号</div>
                </div>
            </div>
        </div>
        <div class="Box">
            <div class="box">
                <div class="title">常用业务系统</div>
                <div class="businese">
                    <div class="busineseBox">
                        <div class="round">
                            <div class="Icon">
                                <img src="../../../static/images/OA.png" alt="">
                            </div>
                        </div>
                        <div class="businesename">OA办公系统</div>
                    </div>
                    <div class="busineseBox">
                        <div class="round">
                            <div class="Icon">
                                <img src="../../../static/images/old.png" alt="">
                            </div>
                        </div>
                        <div class="businesename">厅政务网系统</div>
                    </div>
                    <div class="busineseBox1">
                        <div class="close"></div>
                        <div class="round">
                            <div class="Icon">
                                <img src="../../../static/images/old.png" alt="">
                            </div>
                        </div>
                        <div class="businesename">OA办公系统</div>
                    </div>
                    <div class="busineseBox1">
                        <div class="round">
                            <div class="Icon">
                                <img src="../../../static/images/old.png" alt="">
                            </div>
                        </div>
                        <div class="businesename">海外商务信息管理啊</div>
                    </div>
                    <div class="busineseBox1">
                        <div class="round">
                            <div class="Icon">
                                <img src="../../../static/images/old.png" alt="">
                            </div>
                        </div>
                        <div class="businesename">海外商务信息管理</div>
                    </div>
                    <div class="busineseBox1">
                        <div class="round">
                            <div class="Icon">
                                <img src="../../../static/images/old.png" alt="">
                            </div>
                        </div>
                        <div class="businesename">OA办公系统</div>
                    </div>
                    <div class="busineseBox1">
                        <div class="round">
                            <div class="Icon">
                                <img src="../../../static/images/old.png" alt="">
                            </div>
                        </div>
                        <div class="businesename">OA办公系统</div>
                    </div>
                </div>
                <div class="title">全部业务系统</div>
                <div class="allBusinese">
                    <div class="allBox">
                        <div class="allBoxleft">
                            <div class="allBoxtitle">商务服务</div>
                            <div class="visits"><div class="fwl">访问量</div><div class="num">1024</div></div>
                        </div>
                        <div class="allBoxright">
                            <img src="../../../static/images/xm1.png" alt="">
                        </div>
                    </div>
                    <div class="allBox">
                        <div class="allBoxleft">
                            <div class="allBoxtitle">备案审批</div>
                            <div class="visits"><div class="fwl">访问量</div><div class="num">1024</div></div>
                        </div>
                        <div class="allBoxright">
                            <img src="../../../static/images/xm2.png" alt="">
                        </div>
                    </div>
                    <div class="allBox">
                        <div class="allBoxleft">
                            <div class="allBoxtitle">政策规划</div>
                            <div class="visits"><div class="fwl">访问量</div><div class="num">1024</div></div>
                        </div>
                        <div class="allBoxright">
                            <img src="../../../static/images/xm3.png" alt="">
                        </div>
                    </div>
                    <div class="allBox">
                        <div class="allBoxleft">
                            <div class="allBoxtitle">商务情况监测预警</div>
                            <div class="visits"><div class="fwl">访问量</div><div class="num">1024</div></div>
                        </div>
                        <div class="allBoxright">
                            <img src="../../../static/images/xm4.png" alt="">
                        </div>
                    </div>
                    <div class="allBox">
                        <div class="allBoxleft">
                            <div class="allBoxtitle">事中事后监管</div>
                            <div class="visits"><div class="fwl">访问量</div><div class="num">1024</div></div>
                        </div>
                        <div class="allBoxright">
                            <img src="../../../static/images/xm5.png" alt="">
                        </div>
                    </div>
                    <div class="allBox">
                        <div class="allBoxleft">
                            <div class="allBoxtitle">业务支撑</div>
                            <div class="visits"><div class="fwl">访问量</div><div class="num">1024</div></div>
                        </div>
                        <div class="allBoxright">
                            <img src="../../../static/images/xm6.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="clickNext">
            <img src="../../../static/images/clickNext.png" alt="">
        </div>
    </div>
</template>
<script>

//js格式数字
function thousands(num){
    var str = num.toString();
    var reg = str.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
    return str.replace(reg,"$1,");
}
export default {
    data() {
        return {
            times:null,
        }
    },
    mounted() {
        this.setIntervals()
    },
    methods: {
        setIntervals:function(){
            var that=this
            that.times=setInterval(function(){
                
            },2000)
        }
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
    .nav{
        width:100%;
        height:64px;
        margin: 0 auto;
        background:rgba(19,21,41,1);
    }
    .logo{
        width: 159px;
        height: 36px;
        margin:14px 96px 14px 4%;
        float: left;
    }
    .logo img{
        width: 100%;
        height: 100%;
        display: block;
    }
    @media (max-width: 1152px) {
        .backgrounds{
            width: 1152px;
            height:100%;
            background:url(../../../static/images/background.jpg) center center no-repeat;
            /* background: black; */
            background-size:cover;
            position: relative;
        }
        .nav{
            width:1152px;
            height:64px;
            margin: 0 auto;
            background:rgba(19,21,41,1);
        }
    }
    .navLi{
        float: left;
        height: 20px;
        font-size:14px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(123,142,191,1);
        line-height:20px;
        margin-top: 22px;
        margin-bottom: 22px;
    
    }
    .navLi div{
        float: left;
        margin-right: 32px;
    }
    .indexs{
        color: #fff;
    }
    .username{
        float: right;
        margin-right: 6%;
        width:auto;
        height: 22px;
        line-height:20px;
        margin-top: 22px;
        margin-bottom: 22px;
    }
    .username img{
        margin-right: 7px;
        float: left;
    }
    .username .usernames{
        font-size:14px;
        float: left;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(123,142,191,1);
    }
    .Box{
        width: 100%;
        /* height: 100%; */
    }
    .box{
        width: 1152px;
        margin: 0 auto;
        
    }
    .box .title {
        width:100%;
        height:52px;
        font-size:16px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(24,144,255,1);
        line-height:22px;
        padding: 16px 0;
    }
    .businese{
        width: 1152px;
        height:194px;
        margin: 0 auto;
        background:rgba(30,90,213,0.2);
        border:1px solid rgba(49,56,132,1);
        padding: 12px 0px 12px 20px;
        overflow: hidden;
    }
    .busineseBox{
        width: 144px;
        height: 170px;
        border-radius:4px;
        float: left;
        padding: 8px 12px 0 12px;
        margin-right: 20px;
    }
    .busineseBox1{
        width: 144px;
        height: 170px;
        border-radius:4px;
        float: left;
        padding: 8px 12px 0 12px;
        margin-right: 20px;
        position: relative;
    }
    .busineseBox1:last-child{
        margin-right: 0px;
    }
    .busineseBox:hover{
        background:rgba(19,21,41,0.25);
    }
    .busineseBox1:hover{
        background:rgba(19,21,41,0.25);
    }
    .round{
        width: 120px;
        height: 120px;
        background:linear-gradient(180deg,rgba(255,255,255,1) 0%,rgba(219,219,219,1) 100%);
        box-shadow:0px 0px 4px 0px rgba(0,0,0,0.06);
        border-radius: 50%;
        overflow: hidden;
    }
    .Icon{
        width: 68px;
        height: 68px;
        margin:26px;
        overflow: hidden;
    }
    .Icon img{
        width: 100%;
        height: 100%;
        display: block;

    }
    .businesename{
        width:128px;
        height:46px;
        font-size:16px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:22px;
        margin: 0 auto;
        padding: 12px 0;
        text-align: center;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
    }
    .close{
        width: 24px;
        height: 24px;
        position: absolute;
        right: 4px;
        top: 4px;
        background: url(../../../static/images/close.png)
    }
    .close:hover{
        background: url(../../../static/images/closeClick.png)

    }
    .allBusinese{
        width: 1152px;

    }
    .allBox{
        width:368px;
        height:194px;
        background:rgba(30,90,213,0.2);
        border:1px solid rgba(49,56,132,1);
        float: left;
        margin-right: 24px;
        margin-bottom: 24px;
        padding: 28px 32px;
        box-sizing: border-box;
    }
    .allBox:nth-child(3n){
        margin-right: 0px;
    }
    .allBox:hover{
        background:rgba(30,90,213,0.35);
    }
    .allBoxleft{
        width: 152px;
        height: 100%;
        float: left;
    }
    .allBoxright{
        width: 150px;
        height: 100%;
        float: left;
        padding: 4px 0 0 0 ;
    }
    .allBoxtitle{
        width:152px;
        height:66px;
        font-size:24px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:33px;
        margin-bottom: 50px;
    }
    .visits{
        width:152px;
        height:22px;
        font-size:14px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(123,142,191,1);
        line-height:22px;
    }
    .visits .fwl{
        float: left;
    }
    .visits .num{
        float: left;
    }
    .allBoxright img{
        width: 130px;
        height: 130px;
        display: block;
        float: right;
    }
    .clickNext{
        width:48px;
        height:48px;
        background:rgba(30,90,213,0.65);
        position: absolute;
        bottom: 32px;
        left: 0;
        right: 0;
        margin: auto;
        padding: 12px;
        border-radius: 50%;
    }
    .clickNext img{
        width: 100%;
        height: 100%;
        display: block;
    }
</style>
