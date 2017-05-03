<template>
  <div class="List_box" v-Srcolls="upload">
    <nav class="List_nav" id="List_nav">
      <router-link :to="{path:'shoppingCart',query:{id:m.id,zid:m.zid}}" v-for="(m,key) in exem_arr" :class="cls(key)" :key="key">
          <dl class="List_dl">
            <dt :style="back(m)" class="back"></dt>
            <dd>
              <h3>{{m.short_title!=null?m.short_title:m.title}}</h3>
              <aside>
                <p>
                  <span v-html = "zhi(m)"></span>
                  <span v-if="m.list_price">￥{{m.list_price}}</span>
                </p>
                <p>
                  <span>{{zhe(m)}}</span>
                </p>
              </aside>
            </dd>
          </dl>
      </router-link>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'he',
  data () {
    return {
    }
  },
  props:{
    exem_arr : {
      type:Array,
      default : function(){}
    }
  },
  components : {
    
  },
  created () {
    // console.log(this.box_arr)
  },
  methods: {
    // 根据下标  添加class名
    cls (ind) {
      if(ind%2==0){
        return 'left'
      }
      else{
        return 'right'
      }
    },
    //  添加背景图片
    back (url) {
      if(url.image){
        var url = url.image
      }
      else if(url.image_url){
        var url = url.image_url
      }
      else if(url.image_big){
        var url = url.image_big
      }
      return 'backgroundImage:url('+url+')'
    },
    //  滚动加载  数据
    upload (obj) {
       
       this.$emit('jiaZai','true')
    },
    zhi (num) {
      if(num.price!=null){
        return num.price
      }
      else if(num.deal.price!=null){
        var zhi =(num.deal.price/100).toString().split('.')

     //   console.log(num.deal.price)
         if(zhi.length>1){
            return '￥<i class="lef" style="font-size:1.6rem">'+zhi[0]+'</i>.<i class="rig" style="font-size:1rem">'+zhi[1]+'</i>'
         }
         else{
            return '￥<i class="lef" style="font-size:1.6rem">'+zhi[0]+'</i>'
         }
      }
    },
    zhe (m) {
      if(m.discount!=null){
        return m.discount+'折'
      }
      else{
        return m.deal.promotion_text
      }
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.List_box{
  overflow-y:scroll;
  -webkit-box-flex:1;
  padding-bottom:5rem;
  .List_nav{
    background:#f3f0f0;
    overflow:hidden;
    &>a{
      width:49%;
      margin-bottom:0.6rem;
      background:#fff;
      &.left{
        float:left;
      }
      &.right{
        float:right;
      }
      .List_dl{
        dt{
          height:15rem;
          overflow:hidden;
          background-size:90%;
        }
        dd{
          padding-top:1rem;
          h3{
              font-size:1.2rem;
              line-height:2rem;
              color:#333;
              padding-left:1.5rem;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
          }
          aside{
              width:100%;
              display:-webkit-box;
              -webkit-box-pack:justify;
              padding:1rem 1.5rem;
              box-sizing:border-box;
              -webkit-box-align:center;
              p{
                  &:first-child{
                      span{
                          margin-right:0.4rem;
                          &:first-child{
                              color:#ff4545;
                              font-size:1.6rem;
                              font-weight:bold; 
                          }
                          &:nth-child(2){
                              color:#999;
                              text-decoration: line-through;
                              font-size:1rem;
                          }
                      }
                  }
                  &:last-child{
                      span{
                          display:block;
                          color:#666;
                          font-size:1.2rem;
                      }
                  }
              }
          }
         }
      }
    }
  }
}
</style>
