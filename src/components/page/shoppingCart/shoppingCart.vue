<template>
  <div class="shopping_box" >
   <div class="particulars">
    <dl class="shopping_dl">
        <dt><img :src="baseArr.shareImage" alt=""></dt>
        <dd>
            <h3>{{baseArr.title}}</h3>
            <p class="border">
                <span v-for="m in baseArr.price">￥{{m}}</span>
                <span>￥{{baseArr.listPrice}}</span>
                <span>{{baoyouArr.text}}</span>
                <span>{{ exchangeArr.text}}</span>
            </p>
        </dd>
    </dl>
   </div>
   <div class="aftersale">
        <p>
          <span v-for="(m,key) in aftersaleArr.items" v-if="key<3" :style="back(m.icon)" class="back">
            {{m.label}}
          </span>
        </p>
        <p >
          <span v-for="(m,key) in aftersaleArr.items" v-if="key>3" :style="back(m.icon)" class="back">
            {{m.label}}
          </span>
        </p>
   </div>
   <div class="shopping_store">
    <h3 class="store_title">
      <router-link :to="{path:'store',query:{id:store_titleArr.sellerId}}">
        <span style="backgroundImage:url('../../../../static/images/default_ico.png')" class="back">{{store_titleArr.name}}</span>
        <span>进店逛逛</span>
      </router-link>
    </h3>
    <div class="store_box">
      <crosswise-tuwen :crosswise_arr="store_Arr"></crosswise-tuwen>
    </div>
   </div>
   <div class="shopping_Purchase">
    <h3>购买此商品用户同时购买了</h3>
    <seach-list :exem_arr ="listArr"></seach-list>
   </div>
  </div>
</template>

<script>
/*纵向列表  图文混排*/
import seachList from '../../base/seach/List'
/*横向列表  图文混排*/
import crosswiseTuwen from '../../base/shopping/hengxiang_nav'

export default {
  name: 'he',
  data () {
    return {
        id : '',
        zid: '' ,
        baseArr     : [],
        profilesArr : [],
        baoyouArr   : [],
        exchangeArr : [],
        aftersaleArr: [],
        listArr     : [],
        store_titleArr: {},
        store_Arr    : [],
        store_Arr2    : []
    }
  },
  props:{
    exem_arr : {
      type:Array,
      default : function(){}
    }
  },
  components : {
    seachList,
    crosswiseTuwen
  },
  created () {

    if(this.$route.query.id ==null && this.$route.query.zid==null) return false
         this.id=this.$route.query.id
         this.zid = this.$route.query.zid
        this.getData()
        this.getData1()
        this.getData2()
        this.getData3()
        this.getData4()

        //console.log(this.$route.query.id)
  },
  methods: {
      getData (){
        let that=this
        this.$http.jsonp('http://m.zhe800.com/gateway/app/detail/product?productId='+this.zid+'&skuColor=&paid=1&dealId='+this.id).then(function(data){     
            this.baseArr = JSON.parse(data.body['/app/detail/product/base'])
            this.profilesArr =JSON.parse(data.body['/app/detail/product/profiles'])
        })

      },
      getData1 (){
        let that=this
        this.$http.jsonp('http://m.zhe800.com/gateway/app/detail/benefit?productId='+this.zid+'&paid=1&dealId='+this.id).then(function(data){    
            this.baoyouArr = JSON.parse(data.body['/app/detail/benefit/baoyou'])
            this.exchangeArr =JSON.parse(data.body['/app/detail/benefit/exchange'])
        })

      },
      getData2 (){
        let that=this
        this.$http.jsonp('http://m.zhe800.com/app/detail/promise/service?productId='+this.zid+'').then(function(data){           
          this.aftersaleArr= data.body
        })
      },
      getData3 (){
        let that=this
        this.$http.jsonp('http://m.zhe800.com/deals/recommend/v2?image_type=si2&id='+this.id).then(function(data){           
        this.listArr = data.body.objects
        //  console.log(data.body.objects)
        })
      },
      getData4 (){
        let that=this
        this.$http.jsonp('http://m.zhe800.com/gateway/app/detail/shop?productId='+this.zid+'&dealId='+this.id).then(function(data){

          this.store_titleArr = JSON.parse(data.body['/app/detail/shop/base'])
          this.store_Arr     = JSON.parse(data.body['/app/detail/shop/products'])
           this.store_Arr1   = JSON.parse(data.body['/app/detail/shop/statistics'])

            console.log(JSON.parse(data.body['/app/detail/shop/base']))

        })
      },
      back (src) {
        return 'backgroundImage:url('+src+')'
      }
    
  },
  watch : {
    '$route.query.id' () {
      if(this.$route.query.id ==null && this.$route.query.zid==null) return false
      this.id=this.$route.query.id
      this.zid = this.$route.query.zid
    //  console.log(this.id)
        this.getData()
        this.getData1()
        this.getData2()
        this.getData3()
        this.getData4()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.shopping_box{
  .particulars{
    .shopping_dl{
      dt{
        width:100%;
        img{
          display:block;
          width:100%;
        }
      }
      dd{
        padding:1rem 1.5rem;
        display:-webkit-box;
        width:100%;
        box-sizing:border-box;
        -webkit-box-orient:vertical;
        h3{
          font-size:1.6rem;
          color:#333;
        }
        p{
          width:100%;
          display:-webkit-box;
          height:4rem;
          -webkit-box-align:center;
          position:relative;
          &::after{
            width:100%;
            -webkit-transform:translate(0,0) scale(1,1);
          }
          span{
            display:block;
            margin-right:0.8rem;
            &:first-child{
              color:#e22525;
              font-size:2.4rem;
            }
            &:nth-child(2){
              color:#999;
              text-decoration: line-through;
            }
            &:nth-child(3){
                border:1px solid #e22525;
                padding:0.1rem 0.4rem 0;
                border-radius:0.4rem;
                color:#e22525;
                margin-right:0.4rem;
            }
            &:nth-child(4){
                border:1px solid #e22525;
                padding:0.1rem 0.4rem 0;
                border-radius:0.4rem;
                color:#e22525;
            }
          }
        }
      }
    }
  }
  .shopping_store{
    .store_title{
      height:5rem;
      width:100%;
      &>a{
        display:block;
        width:100%;
        display:-webkit-box;
        -webkit-box-pack:justify;
        padding:0 1.5rem;
        box-sizing:border-box;
        -webkit-box-align:center;
        color:#666;
      }
      span{
        display:block;
        height:100%;
        line-height:5rem;
        &:first-child{  
          background-position:left center;
          background-size:3.6rem;
          padding-left:4rem;
          font-size:1.4rem;
        }
        &:last-child{
          color:red;
          border:1px solid red;
          height:2.6rem;
          line-height:2.6rem;
          padding:0 1rem;
          border-radius:0.4rem;
        }
      }
    }
  }
  .aftersale{
    p{
      width:100%;
      display:-webkit-box;
      -webkit-box-pack:justify;
      padding:0.2rem 1.5rem;
      span{
        display:block;
        width:0;
        -webkit-box-flex:1;
        height:2rem;
        line-height:2rem;
        padding-left:1.8rem;
        text-align:left;
        margin-right:1rem;
        &.back{
          background-position:left center;
          background-size:1.4rem;
          background-repeat:no-repeat;
        }
      }
    }
  } 
  .shopping_Purchase{
    &>h3{
      height:4.4rem;
      text-align:center;
      line-height:4.4rem;
      font-size:1.4rem;
      color:#666;
      background:#f2f2f2;
    }
  }
}
</style>
