webpackJsonp([3],{579:function(e,n,t){t(621);var o=t(9)(t(604),t(633),"data-v-2014d272",null);e.exports=o.exports},586:function(e,n,t){"use strict";function o(e,n,t){return e+=(e.indexOf("?")<0?"?":"&")+i(n),new s.a(function(n,o){d()(e,t,function(e,t){e?o(e):n(t)})})}function i(e){var n="";for(var t in e){var o=void 0!==e[t]?e[t]:"";n+="&"+t+"="+encodeURIComponent(o)}return n?n.substring(1):""}n.a=o;var r=t(66),s=t.n(r),a=t(587),d=t.n(a)},587:function(e,n,t){function o(){}function i(e,n,t){function i(){d.parentNode&&d.parentNode.removeChild(d),window[A]=o,c&&clearTimeout(c)}function a(){window[A]&&i()}"function"==typeof n&&(t=n,n={}),n||(n={});var d,c,l=n.prefix||"__jp",A=n.name||l+s++,m=n.param||"callback",u=null!=n.timeout?n.timeout:6e4,f=encodeURIComponent,p=document.getElementsByTagName("script")[0]||document.head;return u&&(c=setTimeout(function(){i(),t&&t(new Error("Timeout"))},u)),window[A]=function(e){r("jsonp got",e),i(),t&&t(null,e)},e+=(~e.indexOf("?")?"&":"?")+m+"="+f(A),e=e.replace("?&","?"),r('jsonp req "%s"',e),d=document.createElement("script"),d.src=e,p.parentNode.insertBefore(d,p),a}var r=t(588)("jsonp");e.exports=i;var s=0},588:function(e,n,t){(function(o){function i(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type)||("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}function r(e){var t=this.useColors;if(e[0]=(t?"%c":"")+this.namespace+(t?" %c":" ")+e[0]+(t?"%c ":" ")+"+"+n.humanize(this.diff),t){var o="color: "+this.color;e.splice(1,0,o,"color: inherit");var i=0,r=0;e[0].replace(/%[a-zA-Z%]/g,function(e){"%%"!==e&&(i++,"%c"===e&&(r=i))}),e.splice(r,0,o)}}function s(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function a(e){try{null==e?n.storage.removeItem("debug"):n.storage.debug=e}catch(e){}}function d(){var e;try{e=n.storage.debug}catch(e){}return!e&&void 0!==o&&"env"in o&&(e=t.i({NODE_ENV:"production"}).DEBUG),e}n=e.exports=t(589),n.log=s,n.formatArgs=r,n.save=a,n.load=d,n.useColors=i,n.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(e){}}(),n.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],n.formatters.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}},n.enable(d())}).call(n,t(130))},589:function(e,n,t){function o(e){var t,o=0;for(t in e)o=(o<<5)-o+e.charCodeAt(t),o|=0;return n.colors[Math.abs(o)%n.colors.length]}function i(e){function t(){if(t.enabled){var e=t,o=+new Date,i=o-(c||o);e.diff=i,e.prev=c,e.curr=o,c=o;for(var r=new Array(arguments.length),s=0;s<r.length;s++)r[s]=arguments[s];r[0]=n.coerce(r[0]),"string"!=typeof r[0]&&r.unshift("%O");var a=0;r[0]=r[0].replace(/%([a-zA-Z%])/g,function(t,o){if("%%"===t)return t;a++;var i=n.formatters[o];if("function"==typeof i){var s=r[a];t=i.call(e,s),r.splice(a,1),a--}return t}),n.formatArgs.call(e,r);(t.log||n.log||console.log.bind(console)).apply(e,r)}}return t.namespace=e,t.enabled=n.enabled(e),t.useColors=n.useColors(),t.color=o(e),"function"==typeof n.init&&n.init(t),t}function r(e){n.save(e),n.names=[],n.skips=[];for(var t=("string"==typeof e?e:"").split(/[\s,]+/),o=t.length,i=0;i<o;i++)t[i]&&(e=t[i].replace(/\*/g,".*?"),"-"===e[0]?n.skips.push(new RegExp("^"+e.substr(1)+"$")):n.names.push(new RegExp("^"+e+"$")))}function s(){n.enable("")}function a(e){var t,o;for(t=0,o=n.skips.length;t<o;t++)if(n.skips[t].test(e))return!1;for(t=0,o=n.names.length;t<o;t++)if(n.names[t].test(e))return!0;return!1}function d(e){return e instanceof Error?e.stack||e.message:e}n=e.exports=i.debug=i.default=i,n.coerce=d,n.disable=s,n.enable=r,n.enabled=a,n.humanize=t(590),n.names=[],n.skips=[],n.formatters={};var c},590:function(e,n){function t(e){if(e=String(e),!(e.length>100)){var n=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);if(n){var t=parseFloat(n[1]);switch((n[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return t*l;case"days":case"day":case"d":return t*c;case"hours":case"hour":case"hrs":case"hr":case"h":return t*d;case"minutes":case"minute":case"mins":case"min":case"m":return t*a;case"seconds":case"second":case"secs":case"sec":case"s":return t*s;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return t;default:return}}}}function o(e){return e>=c?Math.round(e/c)+"d":e>=d?Math.round(e/d)+"h":e>=a?Math.round(e/a)+"m":e>=s?Math.round(e/s)+"s":e+"ms"}function i(e){return r(e,c,"day")||r(e,d,"hour")||r(e,a,"minute")||r(e,s,"second")||e+" ms"}function r(e,n,t){if(!(e<n))return e<1.5*n?Math.floor(e/n)+" "+t:Math.ceil(e/n)+" "+t+"s"}var s=1e3,a=60*s,d=60*a,c=24*d,l=365.25*c;e.exports=function(e,n){n=n||{};var r=typeof e;if("string"===r&&e.length>0)return t(e);if("number"===r&&!1===isNaN(e))return n.long?i(e):o(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},596:function(e,n,t){"use strict";function o(){var e=c()({},A.a,{platform:"h5",uin:0,needNewCode:1});return t.i(l.a)("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",e,A.c)}function i(){var e=f+"/personalized";return u.a.get(e).then(function(e){return a.a.resolve(e.data)})}function r(e){var n=f+"/playlist/detail?id="+e;return u.a.get(n).then(function(e){return a.a.resolve(e.data)})}n.b=o,n.c=i,n.a=r;var s=t(66),a=t.n(s),d=t(128),c=t.n(d),l=t(586),A=t(127),m=t(131),u=t.n(m),f="http://musicapi.yuiyu.cn"},601:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(134),i=t(207),r=t.n(i);n.default={name:"slider",props:{loop:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!0},interval:{type:Number,default:4e3}},data:function(){return{dots:[],currentPageIndex:0}},mounted:function(){var e=this;setTimeout(function(){e._setSliderWidth(),e._initDots(),e._initSlider(),e.autoPlay&&e._play()},20),window.addEventListener("resize",function(){e.slider&&(e._setSliderWidth(!0),e.slider.refresh())})},activated:function(){this.autoPlay&&this._play()},deactivated:function(){clearTimeout(this.timer)},beforeDestroy:function(){clearTimeout(this.timer)},methods:{_setSliderWidth:function(e){this.children=this.$refs.sliderGroup.children;for(var n=0,i=this.$refs.slider.clientWidth,r=0;r<this.children.length;r++){var s=this.children[r];t.i(o.c)(s,"slider-item"),s.style.width=i+"px",n+=i}this.loop&&!e&&(n+=2*i),this.$refs.sliderGroup.style.width=n+"px"},_initSlider:function(){var e=this;this.slider=new r.a(this.$refs.slider,{scrollX:!0,scrollY:!1,momentum:!1,snap:!0,snapLoop:this.loop,snapThreshold:.3,snapSpeed:400}),this.slider.on("scrollEnd",function(){var n=e.slider.getCurrentPage().pageX;e.loop&&(n-=1),e.currentPageIndex=n,e.autoPlay&&(clearTimeout(e.timer),e._play())}),this.slider.on("beforeScrollStart",function(){e.autoPlay&&clearTimeout(e.timer)})},_initDots:function(){this.dots=new Array(this.children.length)},_play:function(){var e=this,n=this.currentPageIndex+1;this.loop&&(n+=1),this.timer=setTimeout(function(){e.slider.goToPage(n,0,400)},this.interval)}}}},604:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t(57),i=t.n(o),r=t(203),s=t.n(r),a=t(65),d=t.n(a),c=t(631),l=t.n(c),A=t(596),m=t(127),u=t(86),f=t(49);n.default={mixins:[u.c],data:function(){return{recommends:[],discList:[]}},components:{Slider:l.a,Scroll:d.a,Loading:s.a},created:function(){this._getRecommend(),this._getDiscList()},methods:i()({handlePlaylist:function(e){var n=e.length>0?"60px":0;this.$refs.recommend.style.bottom=n,this.$refs.scroll.refresh()},_getRecommend:function(){var e=this;t.i(A.b)().then(function(n){n.code===m.b&&(e.recommends=n.data.slider)})},_getDiscList:function(){var e=this;t.i(A.c)().then(function(n){200===n.code&&(e.discList=n.result.splice(0,20))})},selectItem:function(e){this.$router.push({path:"recommend/"+e.id}),this.setDisc(e)},loadImage:function(){this.$refs.scroll.refresh()}},t.i(f.b)({setDisc:"SET_DISC"}))}},611:function(e,n,t){n=e.exports=t(575)(!0),n.push([e.i,".recommend[data-v-2014d272]{position:fixed;width:100%;top:88px;bottom:0}.recommend .recommend-content[data-v-2014d272]{height:100%;overflow:hidden}.recommend .recommend-content .slider-wrapper[data-v-2014d272]{position:relative;width:100%;overflow:hidden}.recommend .recommend-content .recommend-list .list-title[data-v-2014d272]{height:65px;line-height:65px;text-align:center;font-size:14px;color:#ffcd32}.recommend .recommend-content .recommend-list .item[data-v-2014d272]{display:-ms-flexbox;display:flex;box-sizing:border-box;-ms-flex-align:center;align-items:center;padding:0 20px 20px}.recommend .recommend-content .recommend-list .item .icon[data-v-2014d272]{-ms-flex:0 0 60px;flex:0 0 60px;width:60px;padding-right:20px}.recommend .recommend-content .recommend-list .item .text[data-v-2014d272]{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex:1;flex:1;line-height:20px;overflow:hidden;font-size:14px}.recommend .recommend-content .recommend-list .item .text .name[data-v-2014d272]{margin-bottom:10px;color:#fff}.recommend .recommend-content .recommend-list .item .text .desc[data-v-2014d272]{color:hsla(0,0%,100%,.3)}.recommend .recommend-content .loading-container[data-v-2014d272]{position:absolute;width:100%;top:50%;transform:translateY(-50%)}","",{version:3,sources:["F:/vue/src/components/recommend/recommend.vue"],names:[],mappings:"AACA,4BACE,eAAgB,AAChB,WAAY,AACZ,SAAU,AACV,QAAU,CACX,AACD,+CACE,YAAa,AACb,eAAiB,CAClB,AACD,+DACE,kBAAmB,AACnB,WAAY,AACZ,eAAiB,CAClB,AACD,2EACE,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,eAAgB,AAChB,aAAe,CAChB,AACD,qEACE,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACvB,sBAAuB,AACnB,mBAAoB,AACxB,mBAA0B,CAC3B,AACD,2EACE,kBAAmB,AACf,cAAe,AACnB,WAAY,AACZ,kBAAoB,CACrB,AACD,2EACE,oBAAqB,AACrB,aAAc,AACd,0BAA2B,AACvB,sBAAuB,AAC3B,qBAAsB,AAClB,uBAAwB,AAC5B,WAAY,AACR,OAAQ,AACZ,iBAAkB,AAClB,gBAAiB,AACjB,cAAgB,CACjB,AACD,iFACE,mBAAoB,AACpB,UAAY,CACb,AACD,iFACE,wBAA6B,CAC9B,AACD,kEACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,0BAA4B,CAC7B",file:"recommend.vue",sourcesContent:["\n.recommend[data-v-2014d272] {\n  position: fixed;\n  width: 100%;\n  top: 88px;\n  bottom: 0;\n}\n.recommend .recommend-content[data-v-2014d272] {\n  height: 100%;\n  overflow: hidden;\n}\n.recommend .recommend-content .slider-wrapper[data-v-2014d272] {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.recommend .recommend-content .recommend-list .list-title[data-v-2014d272] {\n  height: 65px;\n  line-height: 65px;\n  text-align: center;\n  font-size: 14px;\n  color: #ffcd32;\n}\n.recommend .recommend-content .recommend-list .item[data-v-2014d272] {\n  display: -ms-flexbox;\n  display: flex;\n  box-sizing: border-box;\n  -ms-flex-align: center;\n      align-items: center;\n  padding: 0 20px 20px 20px;\n}\n.recommend .recommend-content .recommend-list .item .icon[data-v-2014d272] {\n  -ms-flex: 0 0 60px;\n      flex: 0 0 60px;\n  width: 60px;\n  padding-right: 20px;\n}\n.recommend .recommend-content .recommend-list .item .text[data-v-2014d272] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: center;\n      justify-content: center;\n  -ms-flex: 1;\n      flex: 1;\n  line-height: 20px;\n  overflow: hidden;\n  font-size: 14px;\n}\n.recommend .recommend-content .recommend-list .item .text .name[data-v-2014d272] {\n  margin-bottom: 10px;\n  color: #fff;\n}\n.recommend .recommend-content .recommend-list .item .text .desc[data-v-2014d272] {\n  color: rgba(255,255,255,0.3);\n}\n.recommend .recommend-content .loading-container[data-v-2014d272] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n}"],sourceRoot:""}])},613:function(e,n,t){n=e.exports=t(575)(!0),n.push([e.i,".slider[data-v-78daa153]{min-height:1px}.slider .slider-group[data-v-78daa153]{position:relative;overflow:hidden;white-space:nowrap}.slider .slider-group .slider-item[data-v-78daa153]{float:left;box-sizing:border-box;overflow:hidden;text-align:center}.slider .slider-group .slider-item a[data-v-78daa153]{display:block;width:100%;overflow:hidden;text-decoration:none}.slider .slider-group .slider-item img[data-v-78daa153]{display:block;width:100%}.slider .dots[data-v-78daa153]{position:absolute;right:0;left:0;bottom:12px;text-align:center;font-size:0}.slider .dots .dot[data-v-78daa153]{display:inline-block;margin:0 4px;width:8px;height:8px;border-radius:50%;background:hsla(0,0%,100%,.5)}.slider .dots .dot.active[data-v-78daa153]{width:20px;border-radius:5px;background:hsla(0,0%,100%,.8)}","",{version:3,sources:["F:/vue/src/base/slider/slider.vue"],names:[],mappings:"AACA,yBACE,cAAgB,CACjB,AACD,uCACE,kBAAmB,AACnB,gBAAiB,AACjB,kBAAoB,CACrB,AACD,oDACE,WAAY,AACZ,sBAAuB,AACvB,gBAAiB,AACjB,iBAAmB,CACpB,AACD,sDACE,cAAe,AACf,WAAY,AACZ,gBAAiB,AACjB,oBAAsB,CACvB,AACD,wDACE,cAAe,AACf,UAAY,CACb,AACD,+BACE,kBAAmB,AACnB,QAAS,AACT,OAAQ,AACR,YAAa,AACb,kBAAmB,AACnB,WAAa,CACd,AACD,oCACE,qBAAsB,AACtB,aAAc,AACd,UAAW,AACX,WAAY,AACZ,kBAAmB,AACnB,6BAAkC,CACnC,AACD,2CACE,WAAY,AACZ,kBAAmB,AACnB,6BAAkC,CACnC",file:"slider.vue",sourcesContent:["\n.slider[data-v-78daa153] {\n  min-height: 1px;\n}\n.slider .slider-group[data-v-78daa153] {\n  position: relative;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.slider .slider-group .slider-item[data-v-78daa153] {\n  float: left;\n  box-sizing: border-box;\n  overflow: hidden;\n  text-align: center;\n}\n.slider .slider-group .slider-item a[data-v-78daa153] {\n  display: block;\n  width: 100%;\n  overflow: hidden;\n  text-decoration: none;\n}\n.slider .slider-group .slider-item img[data-v-78daa153] {\n  display: block;\n  width: 100%;\n}\n.slider .dots[data-v-78daa153] {\n  position: absolute;\n  right: 0;\n  left: 0;\n  bottom: 12px;\n  text-align: center;\n  font-size: 0;\n}\n.slider .dots .dot[data-v-78daa153] {\n  display: inline-block;\n  margin: 0 4px;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: rgba(255,255,255,0.5);\n}\n.slider .dots .dot.active[data-v-78daa153] {\n  width: 20px;\n  border-radius: 5px;\n  background: rgba(255,255,255,0.8);\n}"],sourceRoot:""}])},621:function(e,n,t){var o=t(611);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t(576)("4da7a43c",o,!0)},623:function(e,n,t){var o=t(613);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t(576)("41def63d",o,!0)},631:function(e,n,t){t(623);var o=t(9)(t(601),t(635),"data-v-78daa153",null);e.exports=o.exports},633:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{ref:"recommend",staticClass:"recommend"},[t("scroll",{ref:"scroll",staticClass:"recommend-content",attrs:{data:e.discList}},[t("div",[e.recommends.length>0?t("div",{staticClass:"slider-wrapper"},[t("slider",e._l(e.recommends,function(e,n){return t("div",{key:n},[t("a",{attrs:{href:e.linkUrl}},[t("img",{staticClass:"needsclick",attrs:{src:e.picUrl,alt:""}})])])}))],1):e._e(),e._v(" "),t("div",{staticClass:"recommend-list"},[t("h1",{staticClass:"list-title"},[e._v("热门歌单推荐")]),e._v(" "),t("ul",e._l(e.discList,function(n,o){return t("li",{key:o,staticClass:"item",on:{click:function(t){e.selectItem(n)}}},[t("div",{staticClass:"icon"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n.picUrl,expression:"item.picUrl"}],attrs:{alt:"",width:"60",height:"60"},on:{load:e.loadImage}})]),e._v(" "),t("div",{staticClass:"text"},[t("h2",{staticClass:"name",domProps:{innerHTML:e._s(n.name)}}),e._v(" "),t("p",{staticClass:"desc"},[e._v("🎧："+e._s(parseInt(n.playCount/1e3))+"万")])])])}))])]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.discList.length,expression:"!discList.length"}],staticClass:"loading-container"},[t("loading")],1)]),e._v(" "),t("router-view")],1)},staticRenderFns:[]}},635:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{ref:"slider",staticClass:"slider"},[t("div",{ref:"sliderGroup",staticClass:"slider-group"},[e._t("default")],2),e._v(" "),t("div",{staticClass:"dots"},e._l(e.dots,function(n,o){return t("span",{key:o,staticClass:"dot",class:{active:e.currentPageIndex===o}})}))])},staticRenderFns:[]}}});
//# sourceMappingURL=3.5e2bea9557b6197e7f40.js.map