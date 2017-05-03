<template>
  <ul class="box_ul">
    <li v-for="m in box_arr">
      <a :href="m.url">
        <dl class="box_dl">
          <dt><img :src="m.image_url_set.main[320]" alt=""></dt>
          <dd>
            <h3>
              <span>{{m.marketing_title}}</span>
              <my-time :time='m' class="box_time"></my-time>
            </h3>
            <p>{{m.marketing_word}}</p>
          </dd>
        </dl>
      </a>
    </li>
  </ul>
</template>

<script>
/*时间倒计时*/
import myTime from '../time'

export default {
  name: 'he',
  data () {
    return {
    }
  },
  props:['box_arr'],
  components : {
    myTime
  },
  created () {
    // console.log(this.box_arr)
  },
  methods: {
  
  }
}




</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.box_ul{
  background: #eee;
  li{
    margin-bottom:0.8rem;
    a{
      display: block;
    }
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
          display: -webkit-box;
          -webkit-box-pack:justify;
          color: #333;
          span{
            display: block;
          }
          .box_time{
            color:#999;
            font-size: 1.2rem;
          }
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
