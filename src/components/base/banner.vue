<template>
  <div class='content swiper-container'>
    <ul  class="swiper-wrapper xiang_tu" >
      <li  class="swiper-slide" v-for="m in tuwen_tu">
        <a :href="m.link">
          <img :src="m.image">
        </a>
      </li>
    </ul>
    <div class="swiper-pagination"></div>
  </div>
</template>

<!-- 主体部分-->
<script>
export default {
  name: 'box_tuwen',
  props: {
    tuwen_tu : {
      type:Array,
      default:function(){
      }
    }
  },
  components: {
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
<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='scss' scoped>
.xiang_tu{         
  li{
    &>a{
      display:block;
      color:#000;
      img{
        display: block;
        width:100%;
        margin:0 auto;
      }
    }
  }
}

</style>
