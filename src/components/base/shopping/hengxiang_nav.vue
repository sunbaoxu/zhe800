<template>
  <div class='crosswise_tuwen' >
    <section class="crosswise_box">
      <ul>
        <li v-for="m in crosswise_arr">
          <a :href="m.url">
            <dl>
              <dt><img  v-lazy="m.image"></dt>
              <dd>
                <span>￥{{m.price}}</span>
                <span>￥{{m.listPrice}}</span>
              </dd>
            </dl>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<!-- 主体部分-->
<script>
export default {
  name: 'box_tuwen',
  props: ['crosswise_arr'],
  components: {
  },
  data () {
    return {
       
    }
  },
  mounted () {
    
  },
  methods: {
   
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.crosswise_tuwen{
  background:#fff;
  .crosswise_title{
      height:4.4rem;
      line-height:4.4rem;
      padding-left:1.5rem;
      font-size:1.4rem;
      color:#666;
  }
  .crosswise_box{
    margin-bottom:1rem;
    &>ul{
      display: -webkit-box;
      overflow-x : scroll;
      &::-webkit-scrollbar{width:0px}
      li{
        width:36%;
        margin-left:1rem;
        &>a{
          display:block;
          width:100%;
          color:#333;
        }
        dl{
          dt{
            img{
                display: block;
                width:100%;
            }
          }
          dd{
            padding-top:1.2rem;
            font-size:1.4rem;
            line-height: 2rem;
            span{
                &:first-child{
                    color:red;
                    font-size:1.6rem;
                    margin-right:1rem;
                    font-weight:bold;
                }

                &:last-child{
                    text-decoration: line-through;
                    font-size:1rem;
                    color:#999;
                }
            }
          }
        }
      }
    }
  }
}
</style>
