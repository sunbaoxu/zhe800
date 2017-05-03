<template>
  <time class="time" >
    {{tiemText}}
  </time>
</template>
<!-- 头部 导航栏-->
<script>
export default {
  name: 'header_top',
  props: ['time'],
  components: {
  },
  data () {
    return {
      tiemText:''
    }
  },
  mounted () {
  //console.log(this.time.end_time)
      

      if(!this.tiemText){
        var date=this.tiemText=this.time.end_time-this.time.start_time;

        var str=''
       // var date = parseInt(this.tiemText)//.toFixed(2)

        var day = parseInt(date/(24*60*60)),
            hour= parseInt((date-day*24*60*60)/(60*60))-6;

            if(day<=0 && hour<=0){
              str=''
            }
            else{
              day=day<10?'0'+day:day
              hour=hour<10?'0'+hour:hour

              str+='还剩'+day+'天'+hour+'小时'
            }

            this.tiemText=str
      }

  },
  methods: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
