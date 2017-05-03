<template>
  <div class="seach_wrap">
    <main class="seach_main">
      <nav class="seach_nav border" ref="nav">
        <a href="javascript:;" @click="clsName($event,0)"  class="on">热卖爆款</a>
        <a href="javascript:;" @click="clsName($event,1)">热门品牌</a>
      </nav>
      <component v-bind:is="currentView"  :exem_arr ="arr" v-on:jiaZai='jiaZai'></component>
    </main>
    <footer-nav v-bind:footer_nav="footer_nav"></footer-nav>
  </div>
</template>

<script>
/*nav 导航栏*/
import footerNav from '../../base/Footer'
/*纵向列表  图文混排*/
import seachList from '../../base/seach/List'
/*横向列表  图文混排*/
import seachCrosswise from '../../base/seach/List1'
export default {
  name: 'hello',
  props:['footer_nav'],
  components: {
    footerNav,
    seachList,
    seachCrosswise
  },
  data () {
    return {
      page:1,
      dealtype:1,
      async:false,
      currentView: 'seachList',
      loadAsync:true,
      arr : []
    }
  },
  mounted () {
    this.getData ()
  },
  updated () {
    if(this.async){
      this.getData ()
      this.async = false
    }
  },
  methods: {
    getData ()  {
      let that=this
      this.$http.jsonp('http://m.zhe800.com/mz/api/get_page_deal?page='+this.page+'&perPage=20&tagId=0&vtype=home&dealtype='+this.dealtype+'&hasNext=true'
      ).then(function(data){
        if(that.arr.length==0){
            that.arr = data.body.dealJson
           // console.log(data.body.dealJson)
        }
        else{

          for(var i=0;i<data.body.dealJson.length;i++){
            that.arr.push(data.body.dealJson[i])    
          }

          this.loadAsync =true
        }
         
      })
    },
    clsName (e,num) {
      var e= e.target;
      var lis = this.$refs.nav.children;
      var that = this;
        for(var i=0;i<lis.length;i++){
          (function(ind){
              if(lis[ind]==e) return false
              lis[ind].className=''
              that.async=true
            
          })(i)
        }
        e.className='on'
        if(num==0){
          this.arr = []
          this.page=1;
          this.dealtype=1;
          this.currentView='seachList'
        }
        else{
          this.arr = []
          this.page=1;
          this.dealtype=2;
          this.currentView='seachCrosswise';
        }
    },
    jiaZai (ind) {

      if(!this.loadAsync) return false
        this.loadAsync = false
        this.page++
       this.getData ()
    }
  },
  watch (){
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.seach_wrap{
  height:100%;
  overflow:hidden;
  .seach_main{
    width:100%;
    height:100%;
    display:-webkit-box;
    -webkit-box-orient:vertical;
    .seach_nav{
      display:-webkit-box;
      position:relative;
      width:100%;
      a{
        display:block;
        -webkit-box-flex:1;
        width:0;
        line-height:4.4rem;
        text-align:center;
        font-size:1.4rem;
        color:#666;

        &.on{
          color:red;
        }
      }
    }
  }
}
</style>
