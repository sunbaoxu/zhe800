//(function(win){
function navtop(){
  function Navtop (parentId,childId,navId){
    this.parentId = parentId;
    this.childId  = childId ;
    this.nav      = navId;
    this.navHei = this.childId.offsetHeight;


    this.init()
  }

  Navtop.prototype = {
    init () {
      //创建 元素
      this.createHtml (this.childId,this.navHei)

      //调用滚动条事件
      this.scrollList (this.parentId)
      //调用拖动事件
      this.moveList()
    },
    //创建背景 元素
    createHtml (child,navHei) {
      var newback = document.createElement('div')
          newback.className = 'back'
          newback.id = 'back'
          newback.style.height = navHei+'px'

        child.appendChild(newback)
    },
    //滚动条事件
    scrollList (parent) {
      var that = this;
      parent.onscroll = function(e){
        //console.log(e)
        var el = e.target || window.event.srcElement;
        //判断 导航栏是否停止 吸附
       that.navFixed(el,that.childId,that.nav)

        //console.log(that.nav)
      }
    },
    //拖动事件
    moveList (parent) {
      var that = this;
      document.addEventListener("touchmove",function(e){
        
        var el = e.target || window.event.srcElement;
        //判断 导航栏是否停止 吸附
          that.navFixed(el,that.childId,that.nav)

        //console.log(el)
      })
    },
    //判断 导航栏是否停止 吸附
    navFixed (el,child,nav) {
      var ellTop = el.scrollTop;
      var navscr = child.offsetTop;

      if(ellTop!=0){
        if(ellTop>=navscr){ 
          nav.className="scroll_nav fixed_nav"
          nav.style.top = 0+'px'
          //nav.style.height = this.navHei+'px'
        }else{
         nav.className="scroll_nav"
         // nav.style.top = 0+'px'
        }
      } 
      
    }
  }

  var Navtops = function(parentId,childId,navId){
    return new Navtop(parentId,childId,navId)
  }

  return {
    Navtops : Navtops
  }
}
//})(window)

export { //很关键
  navtop
}

/*
var parent = document.getElementById('main');
var child = document.getElementById('box_nav');
var nav = document.getElementById('nav');*/

