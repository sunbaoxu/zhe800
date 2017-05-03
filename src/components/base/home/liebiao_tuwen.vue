<template>
  <div class='liebiao_tuwen' v-if="liebiao_arr.type==1">
    <section class="liebiao_box">
      <ul>
        <li>
          <a :href="liebiao_arr.product.detail_url">
            <dl>
                <dt><img v-lazy="liebiao_arr.product.image"></dt>
                <dd>
                    <h3>{{liebiao_arr.product.title}}</h3>
                    <aside>
                        <p>
                            <span>￥{{liebiao_arr.product.price}}</span>
                            <span>￥{{liebiao_arr.product.shop_price}}</span>
                            <span>已拼{{liebiao_arr.product.sales_number}}件</span>
                        </p>
                        <p><span>去开团</span></p>
                    </aside>
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
  props: ['liebiao_arr'],
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
.liebiao_tuwen{
    .liebiao_box{
        ul{
            li{
                background:#fff;
                margin-bottom:1rem;
                a{
                    display:block;
                    dl{
                        dt{
                            img{
                                display:block;
                                width:100%;
                            }
                        }
                        dd{
                            padding-top:1rem;
                            h3{
                                font-size:1.6rem;
                                line-height:2rem;
                                color:#333;
                                padding-left:1.5rem;
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
                                            margin-right:0.8rem;
                                            &:first-child{
                                                color:#ff4545;
                                                font-size:2rem;
                                                font-weight:bold;
                                            }
                                            &:nth-child(2){
                                                color:#999;
                                                text-decoration: line-through;
                                                font-size:1.4rem;
                                            }
                                            &:last-child{
                                                color:#999;
                                                font-size:1.4rem;
                                            }
                                        }
                                    }
                                    &:last-child{
                                        span{
                                            background:#ff4545;
                                            display:block;
                                            padding:0.8rem 2rem;
                                            color:#fff;
                                            font-size:1.3rem;
                                            border-radius:0.4rem;
                                        }
                                    }
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
