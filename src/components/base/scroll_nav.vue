<template>
    <div id="box_nav" class="box_nav border">
      <nav class="scroll_nav" id="scroll_nav">
       <aside>
        <a 
            href="javascript:;" 
            v-for="(m,key) in scroollNav_arr"
            :class="{'on':ind==key}"
            @click.capture = "nav_cls($event,key)"
            ref = "a"
            v-if="key==0"
            >
            <span>{{m.name}}</span>
          </a>
       </aside>
       <aside>
           <a 
            href="javascript:;" 
            v-for="(m,key) in scroollNav_arr"
            :class="{'on':ind==key}"
            @click.capture = "nav_cls($event,key)"
            ref = "a"
            v-if="key!=0"
            >
            <span>{{m.name}}</span>
          </a>
       </aside>
      </nav>
    </div>
</template>

<script>
/*引入外部插件  导航吸附*/
import {navtop} from '../../lib/navTop'
export default {
  name: 'header_top',
  props: {
    scroollNav_arr : {
      type:Array,
      default:function(){
      }
    }
  },
  components: {
  },
  data () {
    return {
      ind:0,
      arr : [],
      localhostArr  : {}
    }
  },
  mounted () {
    var app = document.getElementById('app'),
        main = document.getElementById('box_nav'),
        scroll_nav = document.getElementById('scroll_nav');
        navtop().Navtops(app,main,scroll_nav)
  },
  methods: {
    nav_cls (e,ind) {
      this.$emit('ind_arr',ind)
      this.ind=ind;
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
.box_nav{
  position: relative;
  height:4.6rem;
}
.scroll_nav{
  width:100%;
  position: absolute;
  display: -webkit-box;
  aside{
    &:first-child{
      width:5rem;
      a{
        width:100%;
      }
    }
    &:last-child{
      -webkit-box-flex:1;
      overflow-x:scroll;
      display:-webkit-box;
      &::-webkit-scrollbar{
        width:0;
        height:0;
      }
    }
    a{
      display: block;
      display: -webkit-box;
      width:24%;
      font-size: 1.4rem;
      color:#333;
      -webkit-box-pack:center;
      position: relative;
      z-index: 100;
      &.on{
        span{
          border-bottom:2px solid red;
        }
      }
      span{
        display: block;
        text-align: center;
        line-height: 4.4rem;
        border-bottom:2px solid transparent;
      }
    }
  }
}
.box_nav .fixed_nav{
  position: fixed;
  z-index: 100;
  background: #fff;
  border-bottom:2px solid #eee;
}
</style>
