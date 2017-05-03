<template>
  <div class="wraps">
  <header class="header border">
    <aside>
      <input type="text" placeholder="搜索商品 分类 功效">
    </aside>
    <aside> 
      <i class="sou" @click="aside_nav"></i>
    </aside>
  </header>
  <main class="main">
    <scroll-nav :scroollNav_arr="scroollNav_arr" v-on:ind_arr='ind_arr'></scroll-nav>
    <div class="main_box">
      <component v-bind:is="currentView"  :exem_arr = "arr" :localhostArr ="localhostArr" ></component>
    </div>

  </main>
  <footer-nav v-bind:footer_nav="footer_nav"></footer-nav>
  <aside-nav :class="{'aside_nav':true,'aside_left':asideNav_async}" :asideNav_arr="asideNav_arr" :asideNav_async="asideNav_async" id="aside_left" v-on:aside_nav="aside_nav"></aside-nav>
  </div>
</template>

<script>
/*nav 导航栏*/
import footerNav from '../../base/Footer'
/*侧边 导航栏*/
import asideNav from '../../base/aside_nav'
/*横向 导航栏*/
import scrollNav from '../../base/scroll_nav'
/*引入外部插件  导航吸附*/
import {navtop} from '../../../lib/navTop'
/*分类  box 内容*/
import navBox from '../../base/nav_box'
/*免税  页面*/
import exemPtion from '../../base/home/exemption'

export default {
  name: 'hello',
  props:['footer_nav'],
  components: {
    footerNav,
    asideNav,
    scrollNav,
    navBox,
    exemPtion
  },
  data () {
    return {
      asideNav_arr   : [],
      asideNav_async : false,
      scroollNav_arr : [
        {name:'推荐'},
        {name:'服饰'},
        {name:'美食'},
        {name:'居家'},
        {name:'母婴儿童'},
        {name:'鞋包'},
        {name:'美妆'}
      ],
      currentView: 'navBox',
      arr:[],
      localhostArr:{}
    }
  },
  created () {
    this.$nextTick(function (){
      /*nav 数据请求 */
      this.getData()  
    })

    
  },
  mounted () {
    
  },
  methods: {
    getData()  {
      let that=this;
        this.$http.get('http://localhost:8080/mock/aside_nav.json').then(function(data){
          //赋值给alllist数组,
        that.asideNav_arr=data.body.data
      //  console.log(data.body.data)
      })
    },
    aside_nav (async){
      this.asideNav_async=!this.asideNav_async
    },
    ind_arr (ind) {
     // console.log(ind)
      if(ind==0){
          this.currentView='navBox'
      }
      else{
        this.currentView='exemPtion'
        if(ind==1){
          this.ajaxArr('muying')
          this.localhostArr ={}
        }
        else if(ind==2){
          this.ajaxArr('muying')
          this.localhostArr ={}
        }
        else if(ind==3){
          this.ajaxArr('entryLux')
          this.localhostArr ={
            'bannerArr':[
              {'src':'../../static/images/entrylux/banner1.jpg'},
              {'src':'../../static/images/entrylux/banner2.jpg'}
            ],
            'navArr' : [
              {'src':'../../static/images/entrylux/nav1.jpg'},
              {'src':'../../static/images/entrylux/nav2.jpg'},
              {'src':'../../static/images/entrylux/nav3.jpg'},
              {'src':'../../static/images/entrylux/nav4.jpg'}
            ]
          }
        }
        else if(ind==4){
          this.ajaxArr('barganinPice')
          this.localhostArr ={}
        }
      }
    },
    ajaxArr  (name) {
      let that=this;
      this.$http.get('http://localhost:8080/mock/'+name+'.json').then(function(data){
        //赋值给alllist数组,
        that.arr=data.body.item_list
        //console.log(data.body.item_list)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header{
  display:-webkit-box;
  width:100%;
  padding:0 1rem;
  box-sizing: border-box;
  height:4.4rem;
  -webkit-box-pack:justify;
  position: relative;
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
      i{
        display: block;
        width:70%;
        height:50%;
        background: red;
        background: url(../../../../static/images/search_list2.png) no-repeat;
        background-size:100%;
      }
    };
  }
}
.main{
  .nav{

  }
}
</style>
