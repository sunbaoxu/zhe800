<template>
  <hand-pick :handpick_arr= "exem_arr" :localhostArr="localhostArr"></hand-pick>
</template>

<script>
/*精选活动  页面*/
import handPick from '../handpick'

export default {
  name: 'he',
  data () {
    return {
    }
  },
  props:{
    exem_arr : {
      type : Array,
      default : function(){

      }
    },
    localhostArr : {
      type : Object,
      default : function(){
      }
    }
  },
  components : {
   handPick
  },
  beforeUpdate () {
   // console.log(this.exem_arr)
  },
  updated () {
    //console.log(this.exem_arr)
  },
  methods: {
  
  }
}




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.box_ul{
  background: #eee;
  padding-bottom: 5rem;
  li{
    margin-bottom:0.8rem;
    .box_dl{
      width:100%;
      dt{
        width:100%;
        img{
          display:block;
          width: 100%;
        }
      }
      dd{
        width: 100%;
        display: -webkit-box;
        padding:1rem 1.5rem;
        box-sizing: border-box;
        -webkit-box-orient:vertical;
        background: #fff;
        h3{
          font-size:1.5rem;
          line-height: 2rem;
        }
        p{
          color:#999;
          line-height: 2rem;
        }
      }
    }
  }
}
</style>
