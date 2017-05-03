<template>
  <div class="box_cont">
    <!-- 商品  -->
    <my-banner :tuwen_tu="arr"></my-banner>
    <div v-for="m in liebiaoArr">
      <!-- 横向 图文混排  -->
      <crosswise-tuwen v-bind:crosswise_arr = "m"></crosswise-tuwen>
      <!-- 列表图文混排  -->
      <liebiao-tuwen v-bind:liebiao_arr = "m"></liebiao-tuwen>
    </div>
  </div>
</template>
<script>
/*商品 */
import crosswiseTuwen from './home/crosswise_tuwen'

/*列表商品 */
import liebiaoTuwen from './home/liebiao_tuwen'
/*轮播图 */
import myBanner from './banner'
export default {
  name: 'navBox',
  data () {
    return {
      arr:[],
      crosswiseArr:[],
      liebiaoArr:[]
    }
  },
  components : {
    myBanner,
    crosswiseTuwen,
    liebiaoTuwen
  },
  props:{/*
  	nav_Id:{
  		type:String,
  		default:'2'
  	}*/
  },
  created () {
    this.$nextTick(function (){
      /*nav 数据请求 */
      this.getData()

      this.getData1() 
    })
  },
  methods: {
    getData()  {
      let that=this;
      this.$http.get('http://localhost:8080/mock/home_banner.json').then(function(data){
          //赋值给alllist数组,
          that.arr=data.body.list;
         // console.log(data.body.list)
      })
    },
    getData1()  {
      let that=this;
      this.$http.get('http://localhost:8080/mock/home/home_box.json').then(function(data){
          //赋值给alllist数组,
          that.liebiaoArr  = data.body.objects
          //console.log(data.body.objects)
      })
    },
    back (url) {
      return 'background-image:url('+url+')'
    }
  }
}




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.box_cont{
  padding-bottom:5rem;
  background-color: #F6F6F6;
  .box_cont_nav{
    width:100%;
    height:4.6rem;
    display: -webkit-box;
    a{
      display: block;
      width:0;
      -webkit-box-flex:1;
      display: -webkit-box;
      -webkit-box-pack:center;
      -webkit-box-align:center;
      span,i{
        display: block;
      }
      span{
        font-size: 1.2rem;
        color:#666;
      }
      i{
        height:2.6rem;
        width: 2.6rem;
        background-size:cover;
        background-position:center center;
        background-repeat: no-repeat;
      }
    }
  }
}
</style>
