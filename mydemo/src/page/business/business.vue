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
        <div class="con">
            <div class="title">
                <div class="titleLog">
                    <img src="../../../static/images/xm1.png" alt="">
                </div>
                <div class="titlename">商务服务</div>
                <div class="close">
                    <img src="../../../static/images/close1.png" alt="">
                </div>
            </div>
            <div class="line"></div>
            <div class="content">
                <div class="conBox">
                    <div class="ding"></div>
                    <div class="contentLogo">
                        <img src="../../../static/images/wu.png" alt="">
                    </div>
                    <div class="conTitle contentTitle">开放型经济结构分析与外向型企业发展状况评估</div>
                    <div class="wujiaox">
                        <div class="wujiao">
                            <img src="../../../static/images/ding.png" alt="">
                        </div>
                    </div>
                    
                </div>
                <div class="conBox">
                    <div class="contentLogo">
                        <img src="../../../static/images/wu.png" alt="">
                    </div>
                    <div class="conTitle contentTitle">浙江省国际性展会绩效综合评估</div>
                    <div class="wujiaox">
                        <div class="wujiao">
                            <img src="../../../static/images/noding.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="conBox"></div>
                <div class="conBox"></div>
                <div class="conBox"></div>
                <div class="conBox"></div>
            </div>
        </div>
    </div>
</template>
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
    .con{
        width: 1152px;
        margin: 0 auto;
        margin-top: 24px;
    }
    .title{
        width: 100%;
        height: 34px;
        margin-bottom: 16px;
    }
    .titleLog{
        width: 34px;
        height: 34px;
        float: left;
    }
    .titleLog{
        width: 34px;
        height: 34px;
        display: block;
    }
    .titlename{
        margin-left: 8px;
        height:34px;
        font-size:16px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:34px;
        float: left;
    }
    .close{
        width: 21px;
        height: 21px;
        float: right;
        margin-top: 4px;
    }
    .close img{
        width: 21px;
        height: 21px;
        display: block;
    }
    .line{
        width: 100%;
        height: 1px;
        background:rgba(123,142,191,1);
        margin-bottom: 24px;
    }
    .content{
        width: 1152px;
    }
    .conBox{
        width:368px;
        height:70px;
        background:rgba(30,90,213,0.2);
        border:1px solid rgba(49,56,132,1);
        float: left;
        margin-right: 24px;
        margin-bottom: 24px;
        position: relative;
    }
    .conBox:nth-child(3n){
        margin-right: 0;
    }
    .conBox:hover{
        background:rgba(30,90,213,0.35);
    }
    .ding{
        width:2px;
        height:70px;
        background:rgba(24,144,255,1);
        position: absolute;
        left: 0;
        top: 0;
    }
    .contentLogo{
        width:32px;
        height:32px;
        margin: 19px 8px 19px 16px;
        border-radius: 50%;
        background: #fff;
        float: left;
    }
    .conTitle{
        width:296px;
        font-size:16px;
        height: 44px;
        font-family:PingFangSC-Regular;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:22px;
        float: left;
        margin-top: 13px;
    }
/*flex垂直居中对齐*/
    .contentTitle{
        display: flex;
        /* align-items: center; */
        justify-content: space-around;
        flex-direction: column;
    }
    .wujiao{
        width: 30px;
        height: 30px;
    }
    .wujiaox{
        width:54px;
        height:68px;
        background:linear-gradient(90deg,rgba(24,46,116,0) 0%,rgba(24,46,116,1) 100%);
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        padding: 19px 12px;
    }
</style>
