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
                <div class="boxli">
                    <div class="boxtitle">浙江省经济运行监测分析数字化平台</div>
                    <div class="boximg" @click="szhpt">
                        <img src="../../../static/images/szhpt.png" alt="">
                    </div>
                </div>
                <div class="boxli">
                    <div class="boxtitle">浙江省商务地图</div>
                    <div class="boximg" @click='swtdt'>
                        <img src="../../../static/images/swtdt.png" alt="">
                    </div>
                </div>
                <div class="boxli">
                    <div class="boxtitle">浙江省对外贸易“订单+清单”预警预判监测平台</div>
                    <div class="boximg" @click="jcpt">
                        <img src="../../../static/images/jcpt.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="box1">
            <div class="boxli">
                <div class="boxtitle">浙江省散装水泥车专用车辆安全共治系统</div>
                <div class="boximg" @click="gzxt">
                    <img src="../../../static/images/gzxt.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
      return {
        szhpt: 'https://www.baidu.com/',
        swtdt:'https://www.qingting.fm/channels/140992/programs/3934927/',
        jcpt:'https://123.sogou.com/',
        gzxt:'https://lanhuapp.com/web/#/item/project/board/detail?pid=729cf8fe-fd50-4839-87c9-ab16b10727c9&project_id=729cf8fe-fd50-4839-87c9-ab16b10727c9&image_id=b55800e6-628e-418b-a0a1-da6779797914'
      };
    },
    methods: {
      szhpt() {
        console.log(this.szhpt)
        window.location.href = this.szhpt;
      },
      swtdt(){
        window.location.href = this.swtdt;
      },
      jcpt(){
        window.location.href = this.jcpt;
      },
      gzxt(){
        window.location.href = this.gzxt;
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
    .cockpit{
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
    /*@media (max-width:1366px ) {
        .navs{
            width: 100%;
        }
        .box{
            width: 1152px;
            height: 264px;
            padding: 24px 1% 0 10%;
            box-sizing: border-box;
             overflow: hidden; 
            margin-bottom: 24px;
        }
        .box1{
            width: 1152px;
            height: 264px;
            padding: 0px 1% 0 10%;
            box-sizing: border-box;
            overflow: hidden;
            margin-bottom: 24px;
        }
        .boxli{
            width: 350px;
            height: 240px;
            background:rgba(30,90,213,0.2);
            order:1px solid rgba(49,56,132,1);
            float: left;
            margin-right: 24px;
            overflow: hidden;
        }
        .box div:nth-child(3){
            margin-right: 0px;
        }
        .box1 div:nth-child(3){
            margin-right: 0px;
        }
        .boxtitle{
            width:100%;
            height:20px;
            font-size:14px;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(255,255,255,1);
            line-height:20px;
            margin-top: 13px;
            margin-bottom: 13px;
            text-align: center;
        }
        .boximg{
            width: 326px;
            height: 180px;
            margin-left: 13px;
        }
    }*/
    
    
    /* @media (min-width:1367px ) { */
        .navs{
            width: 100%;
            height: 100%;
            margin: 0 auto;
        }
        .Box{
            width: 1152px;
            height: 306px;
            margin: 0 auto;
        }
        .box{
            width: 100%;
            max-width: 1152px;
            height: 282px;
            /* padding: 24px 1% 0 144px; */
            padding-top: 24px;
            box-sizing: unset;
            /* overflow: hidden; */
            margin: 0 auto;
            /* margin-bottom: 24px; */

        }
        .box1{
            width: 1152px;
            height: 282px;
            /* padding: 0px 1% 0 144px; */
            box-sizing: border-box;
            overflow: hidden;
            margin: auto;
            /* margin-bottom: 24px; */
        }
        .boxli{
            width: 368px;
            height: 258px;
            background:rgba(30,90,213,0.2);
            order:1px solid rgba(49,56,132,1);
            float: left;
            margin-right: 24px;
            overflow: hidden;
        }
        .box div:nth-child(3){
            margin-right: 0px;
        }
        .box1 div:nth-child(3){
            margin-right: 0px;
        }
        .boxtitle{
            width:100%;
            height:20px;
            font-size:14px;
            font-family:PingFangSC-Regular;
            font-weight:400;
            color:rgba(255,255,255,1);
            line-height:20px;
            margin-top: 13px;
            margin-bottom: 13px;
            text-align: center;
        }
        .boximg{
            width: 336px;
            height: 190px;
            margin-left: 16px;
        }
    /* } */
</style>
