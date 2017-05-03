<template>
  <div class="min_wrap">
    <header class="min_header">
      <header class="header_title">
        <aside ><a href="javascript:;" class="fa fa-angle-left"></a></aside>
        <aside>我的聚美</aside>
        <aside ><a href="javascript:;" class="fa fa-home"></a></aside>
      </header>
      <main class="header_main">
        <aside></aside>
        <aside>
          <a href="javascript:;">注册</a>
          <a href="javascript:;">登录</a>
        </aside>
      </main>
    </header>
    <div class="min_main">
      <div class="tabmess">
        <p class="btn">
          <span><i class="fa fa-file-text-o"></i>我的订单</span>

          <span>查看我的全部订单</span>
        </p>
        <div class="foot">
          <a href="#">
            <i class="fa fa-credit-card"></i>
            <span>代付款</span>
          </a>
          <a href="#">
            <i class="fa fa-inbox"></i>
            <span>代收货</span>
          </a>
          <a href="#">
            <i class="fa fa-comments"></i>
            <span>代评价</span>
          </a>
          <a href="#">
            <i class="fa fa-rmb (alias)"></i>
            <span>退货/退款</span>
          </a>
        </div>
      </div>
      <div class="zichan">
        <p class="btn">
          <span><i class="fa fa-rmb (alias)"></i>我的资产</span>
        </p>
        <div class="foot">
          <a href="#">
            
            <span>现金券</span>
          </a>
          <a href="#">
            
            <span>红包</span>
          </a>
          <a href="#">
            
            <span>聚美优品</span>
          </a>
          <a href="#">
            
            <span>礼品卡</span>
          </a>
        </div>
      </div>
      <div class="tabcont">
        <p class="btn">
          <span><i class="fa fa-rotate-right (alias)"></i>售后服务</span>

          <span></span>
        </p>
        <p class="btn">
          <span><i class="fa fa-paste (alias)"></i>意见反馈</span>
  
          <span></span>
        </p>
        <p class="btn">
          <span><i class="fa fa-truck"></i>收货地址</span>
       
          <span></span>
        </p>
        <p class="btn">
          <span><i class="fa fa-sign-in"></i>退出登录</span>
         
          <span></span>
        </p>
        <p class="btn">
          <span><i class="fa fa-file-text-o"></i>400-123-8888</span>
         
          <span></span>
        </p>
      </div>
      <div class="bot">
        <span>客服全天24小时在线 拨打前请记录您的UID O</span>
      </div>
    </div>
    <footer-nav v-bind:footer_nav="footer_nav"></footer-nav>
  </div>
  
</template>

<script>
/*nav 导航栏*/
import footerNav from '../../base/Footer'
export default {
  name: 'hello',
  props:['footer_nav'],
  components: {
    footerNav
  },
  data () {
    return {
        
    }
  },
  mounted: function() {
  },
  methods: {
     
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.min_wrap{
  padding-bottom: 5rem;
  .min_header{
    background-image: linear-gradient(-204deg,#FD465F 0,#FC5E9F 100%);
    .header_title{
      height:4.6rem;
      width:100%;
      display: -webkit-box;
      -webkit-box-pack:justify;
      aside{
        height:4.6rem;
        line-height: 4.6rem;
        color:#fff;
        font-size: 1.4rem;
        &:first-child{
          width:5rem;
          text-align: center;
          font-size:3rem;
          a{
            color:#fff;
          }
        };
        &:last-child{
          width:5rem;
          text-align: center;
          font-size:3rem;
          a{
            color:#fff;
          }
        };
      }
    }
    .header_main{
      width: 100%;
      height:15.8rem;
      display: -webkit-box;
      -webkit-box-orient:vertical;
      -webkit-box-pack:center;
      -webkit-box-align:center;
      aside{
        margin:1rem 0;
        &:first-child{
          width:6rem;
          height:6rem;
          background: #eee;
          background: url(../../../../static/images/user.png) no-repeat center center;
          background-size:cover;
        };
        &:last-child{
          display: -webkit-box;
          -webkit-box-pack:justify;
          a{
            display: block;
            color:#fff;
            font-size:1.4rem;
            padding:0 1rem;
            &:first-child{
              border-right:1px solid #fff;
            };
          }
        };
      }
    }
  }
  .min_main{
    background: #eee;
    .tabmess{
      width: 100%;
      font-size: 1.4rem;
      background: #fff;
      margin-bottom: 1.5rem;
      .btn{
        width: 100%;
        display: -webkit-box;
        -webkit-box-align:center;
        -webkit-box-pack:justify;
        padding: 1rem;
        box-sizing: border-box;
        border-bottom: 1px solid #eaeaea;
        
        span{
          display: block;
          &:nth-child(1){
            color: #000;
            i{
              font-size: 2.0rem;
              color: #666;
              margin-right: 1.5rem;
            }
          }
          &:last-child{
            position: relative;
            i{
              position: absolute;
              width:1.2rem;
              height:1.2rem;
              border-right:2px solid #999;
              border-bottom:2px solid #999;
              right:2rem;
              top:50%;
              margin-top:-0.7rem;
              -webkit-transform:rotate(-42deg)
            }
          }
        }
      }
      .foot{
        width: 100%;
        display: -webkit-box;
        -webkit-box-align:center;
        -webkit-box-pack:center;
        padding: 1.5rem 0;
        a{
          display: block;
          -webkit-box-flex:1;
          text-align: center;
          color: #666;
          i{
            display: block;
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
          }
          span{
            display: block;
          }
        }
      }
    }
    .zichan{
      width: 100%;
      font-size: 1.4rem;
      background: #fff;
      margin-bottom: 1.5rem;
      .btn{
        width: 100%;
        display: -webkit-box;
        -webkit-box-align:center;
        padding: 1rem;
        box-sizing: border-box;
        border-bottom: 1px solid #eaeaea;
        span{
          display: block;
          &:nth-child(1){
            color: #000;
            i{
              font-size: 2.0rem;
              color: #666;
              margin-right: 1.5rem;
            }
          }
        }
      }
      .foot{
        width: 100%;
        display: -webkit-box;
        -webkit-box-align:center;
        -webkit-box-pack:center;
        padding: 1.5rem 0;
        a{
          display: block;
          -webkit-box-flex:1;
          text-align: center;
          color: #666;
          i{
            display: block;
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
          }
          span{
            display: block;
          }
        }
      }
    }
    .tabcont{
      width: 100%;
      font-size: 1.4rem;
      background: #fff;
      .btn{
        width: 100%;
        display: -webkit-box;
        -webkit-box-align:center;
        -webkit-box-pack:justify;
        padding: 1rem;
        box-sizing: border-box;
        border-bottom: 1px solid #eaeaea;
        position:relative;
        span{
          display: block;
          &:nth-child(1){
            color: #000;
            i{
              font-size: 2.0rem;
              color: #666;
              margin-right: 1.5rem;
            }
          }
          &:last-child{
            position: absolute;
            width:1.2rem;
            height:1.2rem;
            border-right:2px solid #999;
            border-bottom:2px solid #999;
            right:2rem;
            top:50%;
            margin-top:-0.7rem;
            -webkit-transform:rotate(-42deg)
          }
        }
      }
    }
    .bot{
      width: 100%;
      padding: 2rem 1.5rem;
      box-sizing: border-box;
      font-size: 1.2rem;
      color: #999;
      
    }
  }
}
</style>
