<template>
  <div class="handpick_main">
    <!-- 轮播图-->
    <div class='handpick_banner swiper-container' v-if="localhostArr.bannerArr">
      <ul  class="swiper-wrapper handpick_ul" >
        <li  class="swiper-slide" v-for="m in localhostArr.bannerArr">
          <a href="http://h5.jumei.com/s/act/ppt_nike_170419_app.html?fp=home&fpa=luxury_pindao">
            <img :src="m.src">
          </a>
        </li>
      </ul>
      <div class="swiper-pagination"></div>
    </div>
    <!-- 图片导航-->
    <div class="handpick_navPic" v-if="localhostArr.navArr">
      <nav>
        <a href="javascript:;" v-for="m in localhostArr.navArr">
          <img :src="m.src" alt="">
        </a>
      </nav>
    </div>

    <!-- 内容-->
    <div class="handpick_box">
      <ul>
        <li v-for="m in handpick_arr">
          <dl>
            <dt>
              <img :src="m.image_url_set.main[320]" alt="">
              <span>{{m.discount_string}}</span>
            </dt>
            <dd>
              <aside>
                <h3>
                  <span>{{m.title}}</span>
                </h3>
                <p>
                  <my-time :time='m' class="box_time"></my-time>
                </p>
              </aside>
              <aside><img :src="m.image_url_set.brand[320]" alt=""></aside>
            </dd>
          </dl>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
/*时间倒计时*/
import myTime from './time'
export default {
  name: 'header_top',
  props: {
    handpick_arr : {
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
  components: {
    myTime
  },
  data () {
    return {
    }
  },
  mounted () {
   var swiper = new Swiper(".swiper-container", {
      pagination: '.swiper-pagination',
        autoplay: 2500,
        autoplayDisableOnInteraction: false,
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween:0,
        loop: true
    });
  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.handpick_main{
  background: #eee;
  .handpick_banner{
    background: #fff;
    .handpick_ul{
      &>li{
        img{
          display: block;
          width: 100%;
        }
      }
    }
  }
  .handpick_navPic{
    background: #fff;
    margin-bottom: 1rem;
    &>nav{
      width:100%;
      display: -webkit-box;
      height:10rem;
      a{
        display: block;
        width:0;
        -webkit-box-flex:1;
        img{
          display: block;
          width:100%;
        }
      }
    }
  }
  .handpick_box{
    background: #fff;
    ul{
      padding-bottom: 5rem;
      &>li{
        dl{
          dt{
            width:100%;
            height:auto;
            position: relative;
            img{
              display: block;
              width:100%;
            }
            span{
              position:absolute;
              left:0.2rem;
              bottom:1rem;
              background: #000;
              color:#fff;
              padding:0.2rem 0.6rem;
            }
          }
          dd{
            padding:1.5rem;
            display: -webkit-box;
            box-sizing: border-box;
            -webkit-box-pack:justify;
            aside{
              &:first-child{
                h3{
                  font-size:1.5rem;
                }
                p{
                  color:#666;
                  line-height: 2rem;
                  font-size: 1.2rem;
                }
              };
              &:last-child{
                width:8rem;
                img {
                  display:block;
                  width: 100%;
                  background-size: cover;
                  background-repeat: no-repeat;
                  background-position: center center;
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
