webpackJsonp([0],{"47V9":function(t,e,i){"use strict";(function(t){var s=i("tbx3"),a=i("ThLP");e.a={components:{prizeBox:s.a,progresser:a.a},data:function(){return{countball:0,balls:[{run:!1},{run:!1},{run:!1},{run:!1},{run:!1},{run:!1},{run:!1},{run:!1}],ballIndex:0,names:["赵钱","孙李","周吴","郑王"],isModel:!1,remainDayCount:8,token:"",isClick:!1,rotateDeg:0,transitionStyle:"transform 3s ease-out",prizeTag:1,extraDeg:[22.5,67.5,112.5,157.5,202.5,247.5,292.5,337.5],degIndex:0,index:"",interPackage:{},thindex:0,prizes:[{prizeName:"奖品1",prizeImage:"",hasOwner:0},{prizeName:"奖品2",prizeImage:"",hasOwner:0},{prizeName:"奖品3",prizeImage:"",hasOwner:0},{prizeName:"奖品4",prizeImage:"",hasOwner:0},{prizeName:"奖品5",prizeImage:"",hasOwner:0},{prizeName:"奖品6",prizeImage:"",hasOwner:0},{prizeName:"奖品7",prizeImage:"",hasOwner:0},{prizeName:"奖品8",prizeImage:"",hasOwner:0}],positions:[{top:"74px",left:"172px"},{top:"74px",left:"216px"},{top:"111px",left:"246px"},{top:"148px",left:"247px"},{top:"184px",left:"215px"},{top:"184px",left:"172px"},{top:"151px",left:"143px"},{top:"106px",left:"143px"}],initPos:[{top:"198px",left:"56px"},{top:"252px",left:"126px"},{top:"257px",left:"231px"},{top:"199px",left:"306px"}],prizeType:"",money:"0.00",score:0,divIndex:0,forDivIndex:0,countSecound:3}},computed:{notRun:function(){return this.balls.filter(function(t){return!t.run})}},watch:{ballIndex:function(t){this.ballIndex=t==this.balls.length?0:t}},methods:{showAnimate:function(){t(".pox .nac").children("p").eq(0).fadeIn(200).css({height:"70%"}),t(".pox .nac").eq(1).css({width:"100%"}),t(".pox .nac").eq(1).children("p").fadeIn(300).css({width:"50%",color:"#000"}),t(".pox .nac").children("p").eq(2).fadeIn(200).css({height:"70%"})},reTime:function(){var t=this,e=setInterval(function(){t.countSecound--,0==t.countSecound&&t.doSomeThing(),t.countSecound<0&&(clearInterval(e),t.countSecound=30,30==t.countSecound&&t.reTime())},1e3)},doSomeThing:function(){var e=this;this.thindex=4,this.isModel=!0,setTimeout(function(){e.thindex=3,e.showAnimate()},2e3),setTimeout(function(){e.thindex=0,e.isModel=!1,e.shake(t(".awards-3"),"red",3),e.shake(t(".awards-7"),"red",3)},3e3)},hasPos:function(){var e=this,i=this.initPos[this.divIndex];t(".neidiv-1").eq(this.divIndex).css({top:i.top,left:i.left}),setTimeout(function(){t(".neidiv-1").eq(e.divIndex).css({display:"block"})},1e3)},addthe:function(e){var i=this,s=e+1;8==s&&(s=0);var a=this.positions[s];if(this.remainDayCount<=0)return this.remainDayCount=0,this.thindex=2,void(this.isModel=!0);t(".neidiv-1").eq(this.divIndex).css({top:a.top,left:a.left}),this.prizes[e].hasOwner++,this.remainDayCount--;var n=this;setTimeout(function(){t(".neidiv-1").eq(i.divIndex).css({display:"none"}),n.hasPos()},600)},hasInner:function(t){this.divIndex=t,console.log(t,"index")},initData:function(){this.rotateDeg="rotate(0deg)",this.transitionStyle="transform 0s ease-out",this.isClick=!1;for(var t=this.prizes,e=0;e<t.length;e++)t[e].prizeName.length>5&&(t[e].prizeName=t[e].prizeName.substring(0,6)),2===t[e].prizeType?t[e].isActive=!1:t[e].isActive=!0;t.length>8?this.prizes=t.slice(0,8):this.prizes=t},handleClick:function(){var t=this;this.transitionStyle="transform 3s ease-out";var e=this.extraDeg[5];this.rotateDeg="rotate("+(2880+e)+"deg)",setTimeout(function(){t.thindex=1,t.isModel=!0,t.remainDayCount+=8},3500)},shake:function(t,e,i){var s=0,a=!1,n=t.attr("class"),l="";i=i||2;a||(a=setInterval(function(){l=++s%2?n+" "+e:n,t.attr("class",l),s==2*i&&(clearInterval(a),t.removeClass(e))},200))},parabola:function(t,e,i,s){var a=this;s=s||800;var n=this.offset(t),l=e.left-n.left,o=i,r=(e.top-n.top-o*l*l)/l,c=+new Date,d=setInterval(function(){var e=Math.min(+new Date-c,s),i=e*l/s,v=o*i*i+r*i+0;a.offset(t,{left:i+n.left,top:v+n.top}),e===s&&clearInterval(d)},1e3/60)},offset:function(t,e){if(void 0===e){for(var i=0,s=0;null!==t;)i+=t.offsetTop,s+=t.offsetLeft,t=t.offsetParent;return{top:i,left:s}}i=0,s=0;for(var a=t.offsetParent;null!==a;)i+=a.offsetTop,s+=a.offsetLeft,a=a.offsetParent;s=e.left-s,i=e.top-i,t.style.left=s+"px",t.style.top=i+"px"},showposdiv:function(t){var e=t.target.getBoundingClientRect(),i=e.left,s=e.top;console.log(i,s,"lefttop")},addBond:function(){var e=this;8==this.countball&&(this.countball=0),this.countball++;var i="awards"+this.countball,s=(t("."+i),this.ballIndex);console.log(s),this.balls[s].run=!0;var a="hideball"+(s+1);this.parabola(this.$refs.ball[s],this.offset(this.$refs[a]),.001,800),setTimeout(function(){e.balls[s].run=!1,e.$refs.ball[s].style.top="",e.$refs.ball[s].style.left=""},850),this.ballIndex++},closeModel:function(){this.isModel=!1,this.initData()}},mounted:function(){this.initData(),this.reTime()},created:function(){}}}).call(e,i("fu2u"))},KWNv:function(t,e){},"PI+d":function(t,e){},QZjB:function(t,e){},ThLP:function(t,e,i){"use strict";var s=i("f9pP"),a={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"loading"})},staticRenderFns:[]};var n=function(t){i("QZjB")},l=i("C7Lr")(s.a,a,!1,n,null,null);e.a=l.exports},U4oG:function(t,e,i){t.exports=i.p+"static/img/luckywheel.d776037.png"},UGiG:function(t,e,i){t.exports=i.p+"static/img/guide.d63b1d0.png"},XTIO:function(t,e,i){t.exports=i.p+"static/img/wheelBg02.5b6e52b.png"},dZHx:function(t,e,i){"use strict";(function(t){e.a={name:"prizeBox",props:{},data:function(){return{count:1}},mounted:function(){var t=this;this.$nextTick(function(){t._makeStyle()})},methods:{_makeStyle:function(){},turn:function(){this.count++,t(".div1").css({"animation-iteration-count":""+this.count})}}}}).call(e,i("fu2u"))},f9pP:function(t,e,i){"use strict";(function(t){e.a={name:"progresser",mounted:function(){this.redo()},methods:{redo:function(){t(".loading").animate({width:"10%"},150),t(".loading").animate({width:"50%"},150),t(".loading").animate({width:"70%"},150),t(".loading").animate({width:"100%"},150),t(function(){t(".loading").fadeOut()})}}}}).call(e,i("fu2u"))},"hmA+":function(t,e,i){t.exports=i.p+"static/img/wheelBg01.cb0df6e.png"},liuI:function(t,e,i){t.exports=i.p+"static/img/luckyResult.4a0db8c.png"},tbx3:function(t,e,i){"use strict";var s=i("dZHx"),a={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"prizeBox",on:{click:function(e){t.turn()}}},[t._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hasShowPrize"},[i("div",{staticClass:"kaleidoscope"},[i("div",{staticClass:"divs div1"},[i("div",[t._v("1")]),t._v(" "),i("div",[t._v("2")]),t._v(" "),i("div",[t._v("3")]),t._v(" "),i("div",[t._v("4")]),t._v(" "),i("div",[t._v("5")]),t._v(" "),i("div",[t._v("6")])]),t._v(" "),i("h2",[t._v("横向滚动")])]),t._v(" "),i("div",{staticClass:"kaleidoscope"},[i("div",{staticClass:"divs div1"},[i("div",[t._v("1")]),t._v(" "),i("div",[t._v("2")]),t._v(" "),i("div",[t._v("3")]),t._v(" "),i("div",[t._v("4")]),t._v(" "),i("div",[t._v("5")]),t._v(" "),i("div",[t._v("6")])]),t._v(" "),i("h2",[t._v("横向滚动")])]),t._v(" "),i("div",{staticClass:"kaleidoscope"},[i("div",{staticClass:"divs div1"},[i("div",[t._v("1")]),t._v(" "),i("div",[t._v("2")]),t._v(" "),i("div",[t._v("3")]),t._v(" "),i("div",[t._v("4")]),t._v(" "),i("div",[t._v("5")]),t._v(" "),i("div",[t._v("6")])]),t._v(" "),i("h2",[t._v("横向滚动")])])])}]};var n=function(t){i("PI+d")},l=i("C7Lr")(s.a,a,!1,n,"data-v-6fa61972",null);e.a=l.exports},"y+Uo":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("47V9"),a={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"container"},[s("progresser"),t._v(" "),s("div",{ref:"hideball1",staticClass:"hideball1 hideball"}),t._v(" "),s("div",{ref:"hideball2",staticClass:"hideball2 hideball"}),t._v(" "),s("div",{ref:"hideball3",staticClass:"hideball3 hideball"}),t._v(" "),s("div",{ref:"hideball4",staticClass:"hideball4 hideball"}),t._v(" "),s("div",{ref:"hideball5",staticClass:"hideball5 hideball"}),t._v(" "),s("div",{ref:"hideball6",staticClass:"hideball6 hideball"}),t._v(" "),s("div",{ref:"hideball7",staticClass:"hideball7 hideball"}),t._v(" "),s("div",{ref:"hideball8",staticClass:"hideball8 hideball"}),t._v(" "),s("img",{staticClass:"bg",attrs:{src:i("hmA+"),alt:""}}),t._v(" "),s("div",{staticClass:"info"},[t._v("抽奖次数："),s("span",[t._v(t._s(t.remainDayCount))])]),t._v(" "),s("div",{staticClass:"infos"},[t._v("距离开奖还有："),s("span",[t._v(t._s(t.countSecound))]),t._v("秒")]),t._v(" "),s("img",{staticClass:"bg",attrs:{src:i("XTIO"),alt:""}}),t._v(" "),s("div",{staticClass:"luckyWheel"},[s("div",{staticClass:"wheelBack",style:{transform:t.rotateDeg,transition:t.transitionStyle}},[s("img",{staticClass:"wheelImg",attrs:{src:i("U4oG"),alt:""}}),t._v(" "),s("ul",{staticClass:"turntable-rotate"},t._l(t.prizes,function(e,i){return s("li",{key:i,ref:"awards-"+(i+1),refInFor:!0,class:"awards-"+(i+1),on:{click:function(e){t.showposdiv(e),t.addthe(i)}}},[s("div",{staticClass:"prizeName"},[t._v(t._s(e.prizeName)+"++"+t._s(e.hasOwner))]),t._v(" "),s("div",{staticClass:"prizeImage"},[s("img",{class:e.isActive?"big":"",attrs:{src:e.prizeImage}})])])}))]),t._v(" "),s("img",{ref:"guide",staticClass:"guide",attrs:{src:i("UGiG"),alt:""},on:{click:t.handleClick}}),t._v(" "),t._l(t.names,function(e,i){return s("div",{key:e,staticClass:"persons",class:"per-"+(i+1),on:{click:function(e){t.hasInner(i)}}},[s("p",[t._v(t._s(e))])])}),t._v(" "),s("div",{staticClass:"persons Boz",on:{click:t.addBond}},[s("p",[t._v("Boz")]),t._v(" "),t._l(t.balls,function(t,e){return s("div",{key:e,ref:"ball",refInFor:!0,staticClass:"inner",class:{show:!t.run}})})],2),t._v(" "),t._l(t.names,function(t,e){return s("div",{key:e,staticClass:"neidiv-1",class:"per-"+(e+1)})})],2)],1),t._v(" "),t.isModel?s("div",{staticClass:"resultModel"},[s("div",{staticClass:"resultbg"}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:1==t.thindex,expression:"thindex==1"}],staticClass:"lucky"},[s("img",{staticClass:"luckyImg",attrs:{src:i("liuI"),alt:""}}),t._v(" "),1===t.prizeType?s("div",{staticClass:"text"},[t._v("抽中"),s("span",[t._v(t._s(t.money))]),t._v("元现金奖励")]):t._e(),t._v(" "),2===t.prizeType?s("div",{staticClass:"text"},[t._v("抽中"),s("span",[t._v(t._s(t.score))]),t._v("个奖励")]):t._e(),t._v(" "),s("div",{staticClass:"btn",on:{click:t.closeModel}})]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:2==t.thindex,expression:"thindex==2"}],staticClass:"lucky"},[s("img",{staticClass:"luckyImg",staticStyle:{visibility:"hidden"},attrs:{src:i("liuI"),alt:""}}),t._v(" "),s("div",{staticClass:"text",on:{click:t.closeModel}},[t._v("请充值再投")])])]):t._e(),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:3==t.thindex,expression:"thindex==3"}],staticClass:"alldiv",on:{click:function(e){t.closeModel(),t.thindex=0,t.isModel=!1}}},[t._m(0)]),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:4==t.thindex,expression:"thindex==4"}],staticClass:"alldiv",on:{click:function(e){t.thindex=4}}},[s("div",{staticClass:"box"},[s("div",{staticClass:"pox"},[s("prize-box")],1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"box"},[e("div",{staticClass:"pox"},[e("div",{staticClass:"nac"},[e("p",[this._v("寿星临门寿安康")])]),this._v(" "),e("div",{staticClass:"nac"},[e("p",[e("span",[this._v("金童贺岁")])])]),this._v(" "),e("div",{staticClass:"nac"},[e("p",[this._v("快马加鞭奔富图")])])])])}]};var n=function(t){i("KWNv")},l=i("C7Lr")(s.a,a,!1,n,"data-v-43600248",null);e.default=l.exports}});
//# sourceMappingURL=0.59153df36e1585742ced.js.map