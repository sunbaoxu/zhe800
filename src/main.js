 // The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import VueLazyload from 'vue-lazyload'
Vue.use(Vuex)

Vue.use(VueResource)

Vue.config.productionTip = false

Vue.directive('Srcolls',{
  bind: function(el,binding){

    
    el.onscroll = function(){
      var elH   = el.offsetHeight;
      var scrollTop = el.scrollTop;
      var boxH = el.children[0].offsetHeight
      if(scrollTop+elH>=boxH-40){ 
         binding.value()
        //el.className="fixedNav main_nav"
      }else{
        //el.className="staticNav main_nav"
      console.log()
      }
    },
    el.addEventListener("touchmove",function(){
      var elH   = el.offsetHeight;
      var scrollTop = el.scrollTop;
      var boxH = el.children[0].offsetHeight
      if(scrollTop+elH>=boxH-40){
       
        console.log("Fdfdfdfd")
       // el.className="fixedNav main_nav"
      }else{
         //el.className="staticNav main_nav"
      }
    })
  }
})



var store = new Vuex.Store({
  state: {
    loadingShow:false,
    commodityArr : []
  },
  mutations: {
    getDatas (s,json) {
      store.state.loadingShow=json
    },
    setListsArr (s,data) {
      store.state.commodityArr=data
    },
    addCartList (s,data) {

      store.state.commodityArr.push(data)

      window.localStorage['cartList'] = JSON.stringify(store.state.commodityArr)
    },
    removeCartList (s,data){
      var arr=store.state.commodityArr

      for(var i=0;i<arr.length;i++){

        if(arr[i].SkuID==data){
          arr.splice(i,1)
        }
      }

     window.localStorage['cartList'] = JSON.stringify(arr)
    }
  },
  actions: {
    getListsArr (context) {
      var data =JSON.parse( window.localStorage['cartList'] );
        if(data){
          context.commit('setListsArr',data)
        }
    }
  }

})

Vue.http.interceptors.push((request, next)  =>{
 store.commit('getDatas',true)
  next((response) => {
   store.commit('getDatas',false)
    return response;
  });
});

// 懒加载
Vue.use(VueLazyload, {
  error: '../static/images/loading.gif',
  loading: '../static/images/loading.gif',
  try: 3 // default 1
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  created () {
    this.$store.dispatch ('getListsArr')
  }
})
