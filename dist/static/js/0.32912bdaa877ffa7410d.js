webpackJsonp([0],{582:function(t,e,n){n(624);var i=n(9)(n(607),n(636),"data-v-79414a78",null);t.exports=i.exports},586:function(t,e,n){"use strict";function i(t,e,n){return t+=(t.indexOf("?")<0?"?":"&")+s(e),new o.a(function(e,i){l()(t,n,function(t,n){t?i(t):e(n)})})}function s(t){var e="";for(var n in t){var i=void 0!==t[n]?t[n]:"";e+="&"+n+"="+encodeURIComponent(i)}return e?e.substring(1):""}e.a=i;var r=n(66),o=n.n(r),a=n(587),l=n.n(a)},587:function(t,e,n){function i(){}function s(t,e,n){function s(){l.parentNode&&l.parentNode.removeChild(l),window[d]=i,c&&clearTimeout(c)}function a(){window[d]&&s()}"function"==typeof e&&(n=e,e={}),e||(e={});var l,c,u=e.prefix||"__jp",d=e.name||u+o++,A=e.param||"callback",f=null!=e.timeout?e.timeout:6e4,p=encodeURIComponent,h=document.getElementsByTagName("script")[0]||document.head;return f&&(c=setTimeout(function(){s(),n&&n(new Error("Timeout"))},f)),window[d]=function(t){r("jsonp got",t),s(),n&&n(null,t)},t+=(~t.indexOf("?")?"&":"?")+A+"="+p(d),t=t.replace("?&","?"),r('jsonp req "%s"',t),l=document.createElement("script"),l.src=t,h.parentNode.insertBefore(l,h),a}var r=n(588)("jsonp");t.exports=s;var o=0},588:function(t,e,n){(function(i){function s(){return!("undefined"==typeof window||!window.process||"renderer"!==window.process.type)||("undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))}function r(t){var n=this.useColors;if(t[0]=(n?"%c":"")+this.namespace+(n?" %c":" ")+t[0]+(n?"%c ":" ")+"+"+e.humanize(this.diff),n){var i="color: "+this.color;t.splice(1,0,i,"color: inherit");var s=0,r=0;t[0].replace(/%[a-zA-Z%]/g,function(t){"%%"!==t&&(s++,"%c"===t&&(r=s))}),t.splice(r,0,i)}}function o(){return"object"==typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function a(t){try{null==t?e.storage.removeItem("debug"):e.storage.debug=t}catch(t){}}function l(){var t;try{t=e.storage.debug}catch(t){}return!t&&void 0!==i&&"env"in i&&(t=n.i({NODE_ENV:"production"}).DEBUG),t}e=t.exports=n(589),e.log=o,e.formatArgs=r,e.save=a,e.load=l,e.useColors=s,e.storage="undefined"!=typeof chrome&&void 0!==chrome.storage?chrome.storage.local:function(){try{return window.localStorage}catch(t){}}(),e.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"],e.formatters.j=function(t){try{return JSON.stringify(t)}catch(t){return"[UnexpectedJSONParseError]: "+t.message}},e.enable(l())}).call(e,n(130))},589:function(t,e,n){function i(t){var n,i=0;for(n in t)i=(i<<5)-i+t.charCodeAt(n),i|=0;return e.colors[Math.abs(i)%e.colors.length]}function s(t){function n(){if(n.enabled){var t=n,i=+new Date,s=i-(c||i);t.diff=s,t.prev=c,t.curr=i,c=i;for(var r=new Array(arguments.length),o=0;o<r.length;o++)r[o]=arguments[o];r[0]=e.coerce(r[0]),"string"!=typeof r[0]&&r.unshift("%O");var a=0;r[0]=r[0].replace(/%([a-zA-Z%])/g,function(n,i){if("%%"===n)return n;a++;var s=e.formatters[i];if("function"==typeof s){var o=r[a];n=s.call(t,o),r.splice(a,1),a--}return n}),e.formatArgs.call(t,r);(n.log||e.log||console.log.bind(console)).apply(t,r)}}return n.namespace=t,n.enabled=e.enabled(t),n.useColors=e.useColors(),n.color=i(t),"function"==typeof e.init&&e.init(n),n}function r(t){e.save(t),e.names=[],e.skips=[];for(var n=("string"==typeof t?t:"").split(/[\s,]+/),i=n.length,s=0;s<i;s++)n[s]&&(t=n[s].replace(/\*/g,".*?"),"-"===t[0]?e.skips.push(new RegExp("^"+t.substr(1)+"$")):e.names.push(new RegExp("^"+t+"$")))}function o(){e.enable("")}function a(t){var n,i;for(n=0,i=e.skips.length;n<i;n++)if(e.skips[n].test(t))return!1;for(n=0,i=e.names.length;n<i;n++)if(e.names[n].test(t))return!0;return!1}function l(t){return t instanceof Error?t.stack||t.message:t}e=t.exports=s.debug=s.default=s,e.coerce=l,e.disable=o,e.enable=r,e.enabled=a,e.humanize=n(590),e.names=[],e.skips=[],e.formatters={};var c},590:function(t,e){function n(t){if(t=String(t),!(t.length>100)){var e=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(t);if(e){var n=parseFloat(e[1]);switch((e[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return n*u;case"days":case"day":case"d":return n*c;case"hours":case"hour":case"hrs":case"hr":case"h":return n*l;case"minutes":case"minute":case"mins":case"min":case"m":return n*a;case"seconds":case"second":case"secs":case"sec":case"s":return n*o;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n;default:return}}}}function i(t){return t>=c?Math.round(t/c)+"d":t>=l?Math.round(t/l)+"h":t>=a?Math.round(t/a)+"m":t>=o?Math.round(t/o)+"s":t+"ms"}function s(t){return r(t,c,"day")||r(t,l,"hour")||r(t,a,"minute")||r(t,o,"second")||t+" ms"}function r(t,e,n){if(!(t<e))return t<1.5*e?Math.floor(t/e)+" "+n:Math.ceil(t/e)+" "+n+"s"}var o=1e3,a=60*o,l=60*a,c=24*l,u=365.25*c;t.exports=function(t,e){e=e||{};var r=typeof t;if("string"===r&&t.length>0)return n(t);if("number"===r&&!1===isNaN(t))return e.long?s(t):i(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))}},597:function(t,e,n){"use strict";function i(){var t=o()({},l.a,{channel:"singer",page:"list",key:"all_all_all",pagesize:100,pagenum:1,hostUin:0,needNewCode:0,platform:"yqq"});return n.i(a.a)("https://c.y.qq.com/v8/fcg-bin/v8.fcg",t,l.c)}function s(t){var e=o()({},l.a,{g_tk:1664029744,hostUin:0,needNewCode:0,order:"listen",platform:"yqq",begin:0,num:100,sonstatus:1,singermid:t});return n.i(a.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg",e,l.c)}e.b=i,e.a=s;var r=n(128),o=n.n(r),a=n(586),l=n(127)},599:function(t,e,n){"use strict";var i=n(206),s=n.n(i),r=function t(e){var n=e.id,i=e.name;s()(this,t),this.id=n,this.name=i,this.avatar="https://y.gtimg.cn/music/photo_new/T001R300x300M000"+n+".jpg?max_age=2592000"};e.a=r},600:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(65),s=n.n(i),r=n(134);e.default={props:{data:{type:Array,default:[]}},data:function(){return{scrollY:-1,currentIndex:0,listHeight:[],diff:-1}},created:function(){this.touch={},this.listenScroll=!0,this.probeType=3},components:{Scroll:s.a},computed:{shortcuelist:function(){return this.data.map(function(t){return t.title.substr(0,1)})},fixedTitle:function(){return this.scrollY>0?"":this.data[this.currentIndex]?this.data[this.currentIndex].title:""}},methods:{selectItem:function(t){this.$emit("select",t)},onShortcutTouchStart:function(t){var e=n.i(r.b)(t.target,"index"),i=t.touches[0];this.touch.y1=i.pageY,this.touch.anchorIndex=e,this.scrollTo(e)},refresh:function(){this.$refs.listview.refresh()},onShortcutTouchMove:function(t){var e=t.touches[0];this.touch.y2=e.pageY;var n=(this.touch.y2-this.touch.y1)/18|0,i=1*this.touch.anchorIndex+n;this.scrollTo(i)},scrollTo:function(t){(t||0===t)&&(t<0?t=0:t>this.listHeight.length-2&&(t=this.listHeight.length-2),this.scrollY=this.listHeight[t],this.$refs.listview.scrollToElement(this.$refs.listgroup[t],0))},scroll:function(t){this.scrollY=t.y},_calculateHeight:function(){this.listHeight=[];var t=this.$refs.listgroup,e=0;this.listHeight.push(e);for(var n=0;n<t.length;n++){e+=-t[n].clientHeight,this.listHeight.push(e)}}},watch:{data:function(){var t=this;setTimeout(function(){t._calculateHeight()},20)},scrollY:function(t){var e=this.listHeight;if(t>=0)return void(this.currentIndex=0);for(var n=0;n<e.length-1;n++){var i=e[n],s=e[n+1];if(!s||t>s&&t<=i)return this.currentIndex=n,void(this.diff=-s+t)}this.currentIndex=e.length-2},diff:function(t){var e=t>0&&t<30?t-30:0;this.fixedTop!==e&&(this.fixedTop=e,this.$refs.fixed.style.transform="translate3d(0,"+e+"px,0)")}}}},607:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(133),s=n.n(i),r=n(132),o=n.n(r),a=n(57),l=n.n(a),c=n(597),u=n(127),d=n(599),A=n(630),f=n.n(A),p=n(49),h=n(86);e.default={mixins:[h.c],data:function(){return{singers:[]}},created:function(){this._getSingerList()},components:{Listview:f.a},methods:l()({handlePlaylist:function(t){var e=t.length>0?"60px":0;this.$refs.singer.style.bottom=e,this.$refs.list.refresh()},selectSinger:function(t){this.$router.push({path:"/singer/"+t.id}),this.setSinger(t)},_getSingerList:function(){var t=this;return o()(s.a.mark(function e(){var i;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.i(c.b)();case 2:i=e.sent,i.code===u.b?t.singers=t.normalizeSinger(i.data.list):alert(i.message);case 4:case"end":return e.stop()}},e,t)}))()},normalizeSinger:function(t){var e={hot:{title:"热门",items:[]}};t.forEach(function(t,n){n<10&&e.hot.items.push(new d.a({id:t.Fsinger_mid,name:t.Fsinger_name}));var i=t.Findex;e[i]?e[i].items.push(new d.a({id:t.Fsinger_mid,name:t.Fsinger_name})):e[i]={title:i,items:[]}});var n=[],i=[];for(var s in e){var r=e[s];r.title.match(/[a-zA-Z]/)?i.push(r):"热门"===r.title&&n.push(r)}return i.sort(function(t,e){return t.title.charCodeAt(0)-e.title.charCodeAt(0)}),n.concat(i)}},n.i(p.b)({setSinger:"SET_SINGER"}))}},614:function(t,e,n){e=t.exports=n(575)(!0),e.push([t.i,".singer[data-v-79414a78]{position:fixed;top:88px;bottom:0;width:100%}","",{version:3,sources:["F:/vue/src/components/singer/singer.vue"],names:[],mappings:"AACA,yBACE,eAAgB,AAChB,SAAU,AACV,SAAU,AACV,UAAY,CACb",file:"singer.vue",sourcesContent:["\n.singer[data-v-79414a78] {\n  position: fixed;\n  top: 88px;\n  bottom: 0;\n  width: 100%;\n}"],sourceRoot:""}])},617:function(t,e,n){e=t.exports=n(575)(!0),e.push([t.i,".listview[data-v-b5d153da]{position:relative;width:100%;height:100%;overflow:hidden;background:#222}.listview .list-group[data-v-b5d153da]{padding-bottom:30px}.listview .list-group .list-group-title[data-v-b5d153da]{height:30px;line-height:30px;padding-left:20px;font-size:12px;color:hsla(0,0%,100%,.5);background:#333}.listview .list-group .list-group-item[data-v-b5d153da]{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:20px 0 0 30px}.listview .list-group .list-group-item .avatar[data-v-b5d153da]{width:50px;height:50px;border-radius:50%}.listview .list-group .list-group-item .name[data-v-b5d153da]{margin-left:20px;color:hsla(0,0%,100%,.5);font-size:14px}.listview .list-shortcut[data-v-b5d153da]{position:absolute;z-index:30;right:0;top:50%;transform:translateY(-50%);width:20px;padding:20px 0;border-radius:10px;text-align:center;background:rgba(0,0,0,.3);font-family:Helvetica}.listview .list-shortcut .item[data-v-b5d153da]{padding:3px;line-height:1;color:hsla(0,0%,100%,.5);font-size:12px}.listview .list-shortcut .item.current[data-v-b5d153da]{color:#ffcd32}.listview .list-fixed[data-v-b5d153da]{position:absolute;top:0;left:0;width:100%}.listview .list-fixed .fixed-title[data-v-b5d153da]{height:30px;line-height:30px;padding-left:20px;font-size:12px;color:hsla(0,0%,100%,.5);background:#333}.listview .loading-container[data-v-b5d153da]{position:absolute;width:100%;top:50%;transform:translateY(-50%)}","",{version:3,sources:["F:/vue/src/base/listview/listview.vue"],names:[],mappings:"AACA,2BACE,kBAAmB,AACnB,WAAY,AACZ,YAAa,AACb,gBAAiB,AACjB,eAAiB,CAClB,AACD,uCACE,mBAAqB,CACtB,AACD,yDACE,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,eAAgB,AAChB,yBAA6B,AAC7B,eAAiB,CAClB,AACD,wDACE,oBAAqB,AACrB,aAAc,AACd,sBAAuB,AACnB,mBAAoB,AACxB,qBAAuB,CACxB,AACD,gEACE,WAAY,AACZ,YAAa,AACb,iBAAmB,CACpB,AACD,8DACE,iBAAkB,AAClB,yBAA6B,AAC7B,cAAgB,CACjB,AACD,0CACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,QAAS,AACT,2BAA4B,AAC5B,WAAY,AACZ,eAAgB,AAChB,mBAAoB,AACpB,kBAAmB,AACnB,0BAA4B,AAC5B,qBAAuB,CACxB,AACD,gDACE,YAAa,AACb,cAAe,AACf,yBAA6B,AAC7B,cAAgB,CACjB,AACD,wDACE,aAAe,CAChB,AACD,uCACE,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,UAAY,CACb,AACD,oDACE,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,eAAgB,AAChB,yBAA6B,AAC7B,eAAiB,CAClB,AACD,8CACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,0BAA4B,CAC7B",file:"listview.vue",sourcesContent:["\n.listview[data-v-b5d153da] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  background: #222;\n}\n.listview .list-group[data-v-b5d153da] {\n  padding-bottom: 30px;\n}\n.listview .list-group .list-group-title[data-v-b5d153da] {\n  height: 30px;\n  line-height: 30px;\n  padding-left: 20px;\n  font-size: 12px;\n  color: rgba(255,255,255,0.5);\n  background: #333;\n}\n.listview .list-group .list-group-item[data-v-b5d153da] {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  padding: 20px 0 0 30px;\n}\n.listview .list-group .list-group-item .avatar[data-v-b5d153da] {\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n}\n.listview .list-group .list-group-item .name[data-v-b5d153da] {\n  margin-left: 20px;\n  color: rgba(255,255,255,0.5);\n  font-size: 14px;\n}\n.listview .list-shortcut[data-v-b5d153da] {\n  position: absolute;\n  z-index: 30;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 20px;\n  padding: 20px 0;\n  border-radius: 10px;\n  text-align: center;\n  background: rgba(0,0,0,0.3);\n  font-family: Helvetica;\n}\n.listview .list-shortcut .item[data-v-b5d153da] {\n  padding: 3px;\n  line-height: 1;\n  color: rgba(255,255,255,0.5);\n  font-size: 12px;\n}\n.listview .list-shortcut .item.current[data-v-b5d153da] {\n  color: #ffcd32;\n}\n.listview .list-fixed[data-v-b5d153da] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n}\n.listview .list-fixed .fixed-title[data-v-b5d153da] {\n  height: 30px;\n  line-height: 30px;\n  padding-left: 20px;\n  font-size: 12px;\n  color: rgba(255,255,255,0.5);\n  background: #333;\n}\n.listview .loading-container[data-v-b5d153da] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n}"],sourceRoot:""}])},624:function(t,e,n){var i=n(614);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(576)("a376157a",i,!0)},627:function(t,e,n){var i=n(617);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(576)("dec84fac",i,!0)},630:function(t,e,n){n(627);var i=n(9)(n(600),n(639),"data-v-b5d153da",null);t.exports=i.exports},636:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"singer",staticClass:"singer"},[n("listview",{ref:"list",attrs:{data:t.singers},on:{select:t.selectSinger}}),t._v(" "),n("router-view")],1)},staticRenderFns:[]}},639:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("scroll",{ref:"listview",staticClass:"listview",attrs:{data:t.data,listenScroll:t.listenScroll,probeType:t.probeType},on:{scroll:t.scroll}},[n("ul",t._l(t.data,function(e,i){return n("li",{key:i,ref:"listgroup",refInFor:!0,staticClass:"list-group"},[n("h2",{staticClass:"list-group-title"},[t._v(t._s(e.title))]),t._v(" "),n("ul",{},t._l(e.items,function(e,i){return n("li",{key:i,staticClass:"list-group-item",on:{click:function(n){t.selectItem(e)}}},[n("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.avatar,expression:"item.avatar"}],staticClass:"avatar",attrs:{alt:""}}),t._v(" "),n("span",{staticClass:"name"},[t._v(t._s(e.name))])])}))])})),t._v(" "),n("div",{staticClass:"list-shortcut",on:{touchstart:function(e){e.stopPropagation(),e.preventDefault(),t.onShortcutTouchStart(e)},touchmove:function(e){e.stopPropagation(),e.preventDefault(),t.onShortcutTouchMove(e)}}},[n("ul",t._l(t.shortcuelist,function(e,i){return n("li",{key:i,staticClass:"item",class:{current:t.currentIndex===i},attrs:{"data-index":i}},[t._v(t._s(e))])}))]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.fixedTitle,expression:"fixedTitle"}],ref:"fixed",staticClass:"list-fixed"},[n("h1",{staticClass:"fixed-title"},[t._v(t._s(t.fixedTitle))])])])},staticRenderFns:[]}}});
//# sourceMappingURL=0.32912bdaa877ffa7410d.js.map