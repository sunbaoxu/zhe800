<template>
  <div :class="{'aside_nav':true,'aside_left':asideNav_async}" @click.self="aside_nav1">
    <div class="aside_box" >
      <header class="header">
        <aside>
          <input type="text" placeholder="搜索商品 分类 功效">
        </aside>
        <aside> 
          <span class="sou" @click="aside_nav1">返回</span>
        </aside>
      </header>
      <main class="main">
        <ul class="ul">
          <li v-for="(m,key) in asideNav_arr">
            <h3 @click="down_ul($event,key)" ref="h">
              {{m.name}}
              <i></i>
            </h3>
            <ol class="ol" v-show="key===ind?true:false">
              <li v-for="item in m.sub_categories">{{item.name}}</li>
            </ol>
          </li>
        </ul>
      </main>
    </div>
  </div>
</template>
<!-- 头部 导航栏-->
<script>
export default {
  name: 'header_top',
  props: {
    asideNav_arr : {
      type:Array,
      default:function(){
      }
    },
    asideNav_async : {
      type:Boolean,
      default:''
    }
  },
  components: {
  },
  data () {
    return {
      // 是否显示 分类产品 尖角
      async : true,
      ind   : false
    }
  },
  mounted () {
   // console.log(this.asideNav_async)
  },
  methods: {
    /*是否显示侧边栏*/
    aside_nav1 (){    
      this.$emit('aside_nav',false)
    },
    /*是否显示 分类产品 ul*/
    down_ul   (e,ind) {
      var lis= e.target;
      var arr=this.asideNav_arr;
      var that=this;
     // console.log(this.$refs)
      this.$refs.h.forEach(function(val,i){
        if(lis==val) {
          that.ind= i
          return false
        }
          val.className = ''
      })

      if(e.target.className=='on'){
        lis.className = ''
        this.ind = false
      }
      else{
        lis.className = 'on'
      }      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main{
  -webkit-box-flex:1;
  overflow-y: scroll;
  padding-bottom: 5rem;
  .ul{
    margin-top:1rem;
    border-top:1px solid #eee;
    &>li{
      position: relative;
      font-size: 1.4rem;
      color:#666;
      overflow: hidden;
      h3{
        position: relative;
        height: 4.6rem;
        line-height: 4.6rem;
        padding-left:1.5rem;
         &:after{
          content:'';
          position: absolute;
          bottom:0;
          width:200%;
          height:1px;
          background: #eee;
          overflow: hidden;
          left:0;
          -webkit-transform:translate(-10%,0) scale(1,0.8);
        };
        &.on{
          color:red;
          i{
             -webkit-transform:rotate(-136deg);
          }
        }
        i{
          position: absolute;
          width:1.2rem;
          height:1.2rem;
          border-right:2px solid #eee;
          border-bottom:2px solid #eee;
          right:2rem;
          top:50%;
          margin-top:-0.7rem;
          -webkit-transform:rotate(42deg);
        }
      }
      ol{
        li{
          padding-left:3.5rem;
          height:4rem;
          margin-bottom: 0.1rem;
          background:#f5f5f5;
          line-height: 4rem;
        }
      }
    }
  }
}
.aside_nav{
  position: fixed;
  top:0;
  left:100%;
  height:100%;
  width:100%;
  background: rgba(0,0,0,0.4);
  z-index: 200;
  .aside_box{
    width: 80%;
    margin-left:100%;
    height:100%;
    background: #fff;
    display: -webkit-box;
    -webkit-box-orient:vertical;
    .header{
      display:-webkit-box;
      width:100%;
      padding:0 1rem;
      box-sizing: border-box;
      height:4.4rem;
      -webkit-box-pack:justify;
      aside{
        height: 100%;
        &:first-child{
          -webkit-box-flex:1;
          display: -webkit-box;
          -webkit-box-pack:center;
          -webkit-box-align:center;
          input{
            display: block;
            width:80%;
            height:60%;
            padding-left:1rem;
            border:none;
            border-radius: 1rem;
            background: #f5f5f5;
            text-align: center;
          }
        };
        &:last-child{
          width:4rem;
          display: -webkit-box;
          -webkit-box-pack:center;
          -webkit-box-align:center;
          span{
            display: block;
            width:100%;
            height:100%;
            text-align: center;
            line-height: 4.4rem;
            font-size: 1.4rem;
          }
        };
      }
    }
  }
}
.aside_left{
  left: 0;
  .aside_box{
    
    -webkit-animation:left 1s forwards;
  }
}
@-webkit-keyframes left {
  0%{
    margin-left: 100%
  }
  100%{
    margin-left: 20%
  }
}
</style>
