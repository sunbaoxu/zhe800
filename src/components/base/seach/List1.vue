<template>
  <div class="List_box"  v-Srcolls="upload">
    <nav class="List_nav">
      <a href="javascript:;" v-for="(m,key) in exem_arr" :class="cls(key)">
          <dl class="List_dl">
            <dt><img v-lazy="m.wireless_banner_image"></dt>
            <dd>
              <aside>
                <p>
                  <span>{{m.minimal_discount}}折起</span>
                  <span>{{m.title}}</span>
                </p>
                <p>
                  <span>{{m.begin_time}}</span>
                </p>
              </aside>
            </dd>
          </dl>
      </a>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'he',
  data () {
    return {
    }
  },
  props:{
    exem_arr : {
      type:Array,
      default : function(){}
    }
  },
  components : {
    
  },
  created () {
    // console.log(this.box_arr)
  },
  methods: {
    cls (ind) {
      if(ind%2==0){
        return 'left'
      }
      else{
        return 'right'
      }
    },
    back (url) {
      return 'backgroundImage:url('+url+')'
    },
    //  滚动加载  数据
    upload (obj) {
       
       this.$emit('jiaZai','true')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.List_box{
  overflow-y:scroll;
  -webkit-box-flex:1;
  padding-bottom:5rem;
  .List_nav{
    background:#f1f1f1;
    &>a{
      display:block;
      width:100%;
      margin-bottom:0.6rem;
      background:#fff;
      .List_dl{
        dt{
          img[lazy=loading]{
            display:block;
            width:10%;
          }
          img[lazy=error] {
            display:block;
            width:10%;
          }
          img[lazy=loaded] {
            display:block;
            width:100%;
          }
        }
        dd{
          padding-bottom:1rem;
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
                          margin-right:0.4rem;
                          &:first-child{
                              color:#ff4545;
                              font-size:1.6rem;
                              font-weight:bold;
                          }
                          &:nth-child(2){
                              color:#999;
                              font-size:1.4rem;
                          }
                      }
                  }
                  &:last-child{
                      span{
                          display:block;
                          color:#666;
                          font-size:1.2rem;
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
