<template>
  <div class='crosswise_tuwen' >
    <nav class="storeAll_nav">
      <a href="javascript:;" v-for="m in arr">{{m.name}}</a>
      </nav>
    <seach-list :exem_arr ="exem_arr"></seach-list>
  </div>
</template>

<!-- 主体部分-->
<script>
/*纵向列表  图文混排*/
import seachList from '..//seach/List'
export default {
  name: 'box_tuwen',
  props: ['exem_arr'],
  components: {
      seachList
  },
  data () {
    return {
       arr : [
         {'name':'默认'},
         {'name':'销量'},
         {'name':'价格'},
         {'name':'最新'}
       ]
    }
  },
  mounted () {
     console.log(this.$el)
  },
  methods: {

   
   
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.storeAll_nav{
  width:100%;
  display:-webkit-box;
  -webkit-box-align:center;
  a{
    display:block;
    width:0;
    -webkit-box-flex:1;
    border-right:1px solid #eee;
    text-align:center;
    line-height:5rem;
  }
}
</style>
