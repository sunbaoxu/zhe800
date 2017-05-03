<template>
  <div class="store_wrap">
    <header class="store_header">
        <dl>
            <dt>
             <img src="../../../../static/images/seller_bg.jpg" alt="">
            </dt>
            <dd>
                <h3 class="border">{{arr.nick_name}}</h3>
                <span><i style="backgroundImage:url('../../../../static/images/default_ico.jpg')" class="back"></i></span>
            </dd>
        </dl>
    </header>
    <div class="store_box">
      <nav class="storeBox_nav border">
        <a href="javascript:;" class="on"><i></i><span>全部商品</span></a>
        <a href="javascript:;"><i></i><span>验5货时推荐</span></a>
      </nav>
      <component v-bind:is="currentView"  :exem_arr ="arr1" ></component>
    </div>
  </div>
</template>

<script>
/*nav 导航栏*/
import allCommodity from '../../base/store/store_allCommodity'

export default {
  name: 'hello',
  props:['footer_nav'],
  components: {
    allCommodity
  },
  data () {
    return {
        id:'', 
        arr : [],
        arr1 : [],
        currentView : 'allCommodity'
    }
  },
  mounted () {
    
  },
  created () {
      if(this.$route.query.id ==null ) return false
         this.id=this.$route.query.id
         this.getData ()
         this.getData1 ()
  },
  updated () {
      
  },
  methods: {
    getData ()  {
      let that=this
      this.$http.jsonp('http://th5.m.zhe800.com/h5/shopindexjson?seller_id='+this.id+'&id='
      ).then(function(data){
        this.arr = data.body.seller_info
        //console.log(data.body.seller_info)
         
      })
    },
    getData1 ()  {
      let that=this
      this.$http.jsonp('http://th5.m.zhe800.com/h5/api/getshopdeals?shop_id=813150&recommend=&size=10&page=1&order=&dealid=&invoke_source=2'
      ).then(function(data){
       this.arr1 = data.body.response.docs
        console.log(data.body.response.docs) 
      })
    }
  },
  watch (){
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.store_wrap{
  .store_header{
    &>dl{
      dt{
        width:100%;
        img{
          display:block;
          width:100%;
        }
      }
      dd{
        position:relative;
        span{
          position:absolute;
          height:6rem;
          width:6rem;
          top:-2rem;
          left:1rem;
          background:#fff;
          i{
            display:block;
            width:100%;
            height:100%;
          }
        }
        h3{
            position:relative;
            height:5rem;
            line-height:3rem;
            padding-left:8rem;
            font-size:1.4rem;
        }
      }
    }
  }
  .store_box{
    .storeBox_nav{
      display:-webkit-box;
      width:100%;
      -webkit-box-pack:justify;
      position:relative;
      &::after{
        -webkit-transform:translate(-10%,0) scale(1,1);
        background:#9d9d9d;
      }
      a{
        display:block;
        -webkit-box-flex:1;
        width:0;
        display:-webkit-box;
        -webkit-box-orient:vertical;
        height:5rem;
        -webkit-box-align:center;
        -webkit-box-pack:center;
        color:#666;
        &.on{
          color:red;
        }
        span{
          display:block;
        }
      }
    }
  }
}
</style>
