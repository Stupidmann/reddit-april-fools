(function(e){function t(t){for(var r,c,a=t[0],i=t[1],l=t[2],d=0,f=[];d<a.length;d++)c=a[d],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&f.push(s[c][0]),s[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);u&&u(t);while(f.length)f.shift()();return n.push.apply(n,l||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],r=!0,a=1;a<o.length;a++){var i=o[a];0!==s[i]&&(r=!1)}r&&(n.splice(t--,1),e=c(c.s=o[0]))}return e}var r={},s={app:0},n=[];function c(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=e,c.c=r,c.d=function(e,t,o){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(o,r,function(t){return e[t]}.bind(null,r));return o},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/reddit-april-fools/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=i;n.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";o("85ec")},"31fe":function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("2b0e"),s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("link",{attrs:{href:"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",rel:"stylesheet",integrity:"sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3",crossorigin:"anonymous"}}),o("link",{attrs:{rel:"stylesheet",href:"//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons"}}),o("Home")],1)},n=[],c=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("section",{staticClass:"container pt-3"},[o("Counter")],1)},a=[],i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("h2",[e._v("Segundos restantes:")]),o("div",{staticClass:"d-flex flex-column"},[o("div",{staticClass:"minute mb-2"},[e._v(" "+e._s(e.second)+" ")]),o("div",{staticClass:"d-none"},[o("CustomButton",{on:{click:e.resetTimer}})],1),o("div",{staticClass:"mb-4"},[o("CustomButton",{class:e.selectedColor,attrs:{disabled:e.disabled},on:{click:e.stopTimer}},[e._v(" Detener ")])],1),e.showAverageTable&&Object.keys(e.average).length?o("div",[o("table",{staticClass:"table"},[e._m(0),o("tbody",[o("tr",[o("th",{attrs:{scope:"row"}},[e._v("#")]),e._l(e.average,(function(t,r){return o("td",{key:r},[e._v(e._s(t))])}))],2)])])]):e._e(),e.showResetButton?o("div",[o("CustomButton",{attrs:{size:"sm"},on:{click:e.deleteMyClick}},[e._v("Reset")])],1):e._e()])])},l=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("thead",[o("tr",[o("th",{attrs:{scope:"col"}},[e._v("Cantidad")]),o("th",{attrs:{scope:"col"}},[e._v("Purpura")]),o("th",{attrs:{scope:"col"}},[e._v("Azul")]),o("th",{attrs:{scope:"col"}},[e._v("Verde")]),o("th",{attrs:{scope:"col"}},[e._v("Amarillo")]),o("th",{attrs:{scope:"col"}},[e._v("Naranja")]),o("th",{attrs:{scope:"col"}},[e._v("Rojo")]),o("th",{attrs:{scope:"col"}},[e._v("Gris")])])])}],u=(o("159b"),function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("button",{staticClass:"btn",class:["btn--"+e.color,"btn-"+e.size],attrs:{disabled:e.disabled,type:e.action},on:{click:function(t){return e.clickButton()}}},[e._t("default"),e.icon?o("md-icon",[e._v(e._s(e.icon))]):e._e()],2)}),d=[],f={name:"custom-button",props:{color:{type:String,default:"info"},size:{type:String,default:"md"},action:{type:String,default:"button"},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},icon:{type:String}},methods:{clickButton:function(){this.$emit("click")}}},h=f,p=(o("a3af"),o("2877")),m=Object(p["a"])(h,u,d,!1,null,"6aa22f3c",null),b=m.exports,g={components:{CustomButton:b},data:function(){return{timer:void 0,second:60,selectedColor:"",disabled:!1,average:{},showResetButton:!1,showAverageTable:!1}},watch:{second:function(){this.second!==this.generatedNumber&&0!==this.second||(this.resetTimer(),this.generatedNumber=this.generateRandomNumber())}},methods:{startTimer:function(){var e=this;this.timer=setInterval((function(){e.second--}),1e3)},setColor:function(){var e="";switch(!0){case this.second>=52:e="btn--purple";break;case this.second>=42:e="btn--blue";break;case this.second>=32:e="btn--green";break;case this.second>=22:e="btn--yellow";break;case this.second>=12:e="btn--orange";break;case this.second>0:e="btn--red";break;default:e="btn--grey";break}this.selectedColor=e},stopTimer:function(){var e=JSON.parse(localStorage.getItem("clicks"));e.push(this.second),localStorage.setItem("clicks",JSON.stringify(e)),localStorage.setItem("myClick",JSON.stringify({myClick:!0})),clearInterval(this.timer),this.setColor(),this.disabled=!0,this.countClicks()},resetTimer:function(){this.countClicks();var e=JSON.parse(localStorage.getItem("clicks"));e.push(this.second),localStorage.setItem("clicks",JSON.stringify(e)),this.setColor(),this.second=60},deleteMyClick:function(){localStorage.setItem("myClick",JSON.stringify({myClick:!1})),localStorage.setItem("clicks",JSON.stringify([])),this.disabled=!1,this.showResetButton=!1,this.showAverageTable=!1,this.timer=void 0,this.second=60,this.selectedColor="",this.startTimer()},generateRandomNumber:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:60;return Math.floor(Math.random()*(t-e+1))+e},countClicks:function(){var e=JSON.parse(localStorage.getItem("clicks")),t={colorPurple:0,colorBlue:0,colorGreen:0,colorYellow:0,colorOrange:0,colorRed:0,colorWhite:0};e.forEach((function(e){switch(!0){case e>=52:t.colorPurple++;break;case e>=42:t.colorBlue++;break;case e>=32:t.colorGreen++;break;case e>=22:t.colorYellow++;break;case e>=12:t.colorOrange++;break;case e>0:t.colorRed++;break;default:t.colorWhite++;break}})),this.average=t,this.showResetButton=!0,this.showAverageTable=!0}},created:function(){this.startTimer();var e=JSON.parse(localStorage.getItem("myClick"));e&&(this.disabled=e.myClick,this.disabled&&(this.countClicks(),this.showAverageTable=!0)),this.generatedNumber=this.generateRandomNumber()}},v=g,k=(o("9400"),Object(p["a"])(v,i,l,!1,null,"311aa4dc",null)),y=k.exports,_={name:"ButtonContainer",components:{Counter:y},beforeMount:function(){localStorage.getItem("clicks")||localStorage.setItem("clicks",JSON.stringify([])),localStorage.getItem("clicks")||localStorage.setItem("myClick",JSON.stringify({myClick:!1}))}},C=_,S=Object(p["a"])(C,c,a,!1,null,null,null),O=S.exports,w={name:"App",components:{Home:O}},j=w,B=(o("034f"),Object(p["a"])(j,s,n,!1,null,null,null)),N=B.exports,T=o("43f9"),I=o.n(T);o("51de"),o("e094"),o("7b17");r["default"].use(I.a),r["default"].config.productionTip=!1,new r["default"]({render:function(e){return e(N)}}).$mount("#app")},"5e48":function(e,t,o){},"85ec":function(e,t,o){},9400:function(e,t,o){"use strict";o("31fe")},a3af:function(e,t,o){"use strict";o("5e48")}});
//# sourceMappingURL=app.46137556.js.map