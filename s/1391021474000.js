/**
* @preserve Copyright 2012 Twitter, Inc.
* @license http://www.apache.org/licenses/LICENSE-2.0.txt
*/
var Hogan={};(function(a,b){function i(a){return String(a===null||a===undefined?"":a)}function j(a){return a=i(a),h.test(a)?a.replace(c,"&amp;").replace(d,"&lt;").replace(e,"&gt;").replace(f,"&#39;").replace(g,"&quot;"):a}a.Template=function(a,c,d,e){this.r=a||this.r,this.c=d,this.options=e,this.text=c||"",this.buf=b?[]:""},a.Template.prototype={r:function(a,b,c){return""},v:j,t:i,render:function(b,c,d){return this.ri([b],c||{},d)},ri:function(a,b,c){return this.r(a,b,c)},rp:function(a,b,c,d){var e=c[a];return e?(this.c&&typeof e=="string"&&(e=this.c.compile(e,this.options)),e.ri(b,c,d)):""},rs:function(a,b,c){var d=a[a.length-1];if(!k(d)){c(a,b,this);return}for(var e=0;e<d.length;e++)a.push(d[e]),c(a,b,this),a.pop()},s:function(a,b,c,d,e,f,g){var h;return k(a)&&a.length===0?!1:(typeof a=="function"&&(a=this.ls(a,b,c,d,e,f,g)),h=a===""||!!a,!d&&h&&b&&b.push(typeof a=="object"?a:b[b.length-1]),h)},d:function(a,b,c,d){var e=a.split("."),f=this.f(e[0],b,c,d),g=null;if(a==="."&&k(b[b.length-2]))return b[b.length-1];for(var h=1;h<e.length;h++)f&&typeof f=="object"&&e[h]in f?(g=f,f=f[e[h]]):f="";return d&&!f?!1:(!d&&typeof f=="function"&&(b.push(g),f=this.lv(f,b,c),b.pop()),f)},f:function(a,b,c,d){var e=!1,f=null,g=!1;for(var h=b.length-1;h>=0;h--){f=b[h];if(f&&typeof f=="object"&&a in f){e=f[a],g=!0;break}}return g?(!d&&typeof e=="function"&&(e=this.lv(e,b,c)),e):d?!1:""},ho:function(a,b,c,d,e){var f=this.c,g=this.options;g.delimiters=e;var d=a.call(b,d);return d=d==null?String(d):d.toString(),this.b(f.compile(d,g).render(b,c)),!1},b:b?function(a){this.buf.push(a)}:function(a){this.buf+=a},fl:b?function(){var a=this.buf.join("");return this.buf=[],a}:function(){var a=this.buf;return this.buf="",a},ls:function(a,b,c,d,e,f,g){var h=b[b.length-1],i=null;if(!d&&this.c&&a.length>0)return this.ho(a,h,c,this.text.substring(e,f),g);i=a.call(h);if(typeof i=="function"){if(d)return!0;if(this.c)return this.ho(i,h,c,this.text.substring(e,f),g)}return i},lv:function(a,b,c){var d=b[b.length-1],e=a.call(d);if(typeof e=="function"){e=i(e.call(d));if(this.c&&~e.indexOf("{{"))return this.c.compile(e,this.options).render(d,c)}return i(e)}};var c=/&/g,d=/</g,e=/>/g,f=/\'/g,g=/\"/g,h=/[&<>\"\']/,k=Array.isArray||function(a){return Object.prototype.toString.call(a)==="[object Array]"}})(typeof exports!="undefined"?exports:Hogan)

// Copyright 2014 Mikhail Kalashnik
var part=function(){var e=!1,t=[],a={},n=function(e){return e.map(function(e){return a[e]})};return"undefined"!=typeof window?document.addEventListener("DOMContentLoaded",function(){for(e=!0;t.length;){var a=t.shift();a()}},!1):e=!0,function(r,i,l){var o=function(){"string"==typeof r?a[r]=l?l.apply(null,n(i)):i():i.apply(null,n(r))};e?o():t.push(o)}}();part("dom",function(){"use strict";var e,t=function(e,t){var a,n="ontouchstart"in window;if(n){var r;e.addEventListener("touchstart",function(){"mouse"===a?(a=null,r=!1):(a="touch",r=!0)},!1),e.addEventListener("touchmove",function(){r=!1},!1),e.addEventListener("touchcancel",function(){r=!1},!1),e.addEventListener("touchend",function(e){r&&t(e)},!1)}window.mkIsMobile&&n||e.addEventListener("click",function(e){"touch"===a?a=null:(a="mouse",t(e))},!1)},a=function(e,a,n){"universalClick"===a?t(e,n):"transitionend"===a?["transitionend","webkitTransitionEnd"].forEach(function(t){e.addEventListener(t,n,!1)}):"animationend"===a?["animationend","webkitAnimationEnd","MSAnimationEnd"].forEach(function(t){e.addEventListener(t,n,!1)}):e.addEventListener(a,n)},n=function(e,t,a){e.classList[a?"add":"remove"](t)},r=function(e){this.elements=e?e:[],this.iterate=function(e){for(var t=-1,a=this.elements.length;++t<a;)e(this.elements[t])},this.toggleClass=function(e,t){this.iterate(function(a){n(a,e,t)})},this.listen=function(e,t){this.iterate(function(n){a(n,e,t)})}},i=function(t){var a=t.target;"setSelectionRange"in a&&""!==a.value&&(clearTimeout(e),e=setTimeout(function(){a.setSelectionRange(0,a.value.length)},0))},l={},o=function(e){return l[e]||(l[e]=document.getElementById(e)),l[e]},s=function(){var e={},t={},a={text:function(e,t){e.textContent=t},html:function(e,t){e.innerHTML=t},display:function(e,t){e.style.display=t}},n=function(t,n,r){e[t]||(e[t]={type:null,value:null});var i=e[t];(i.type!==n||i.value!==n)&&(i.type=n,i.value=r,a[n](o(t),r))},r=function(){Object.keys(t).forEach(function(e){n(e,t[e].type,t[e].value)}),t={}};return{defer:function(e,a,n){t[e]={type:a,value:n}},runDeferred:function(){r()},instantly:n}}();return{id:o,find:function(e,t){return new r((t||document).querySelectorAll(e))},selectOnFocus:function(e){a(e,"focus",i)},listen:a,toggleClass:n,updater:s}}),part("goal",["dom"],function(e){"use strict";var t,a=[],n={},r=!1,i=!0,l=function(){return r&&i},o=function(e,a){t.reachGoal(e,a)},s=function(){l()&&Object.keys(n).forEach(function(e){o(e,n[e])})};e.listen(window,"load",function(){i=!0,s()}),window.yandexMetrikaLoadCallback=function(e){r=!0,t=e,s()};var c=function(e,t){if(-1===a.indexOf(e)){a.push(e);var r=t||null;l()?o(e,r):n[e]=r}};return e.find(".js-goal").listen("universalClick",function(e){c(e.currentTarget.getAttribute("data-goal"))}),{reach:c}}),part("common",function(){"use strict";return{objectCopy:function(e){var t=e.constructor();return Object.keys(e).forEach(function(a){t[a]=e[a]}),t},numberFormat:function(e){return(""+e).replace(/\B(?=(\d{3})+(?!\d))/g,",")},convertToTitle:function(e){return e.replace("_"," ").replace(/-/g,".")},getFormattedTime:function(e,t){var a="",n=e;if(n>3599&&(a+=Math.floor(n/3600)+"h&thinsp;",n%=3600,t=!0),n>59){var r=Math.floor(n/60);n%=60,t&&n&&r++,a+=r+"m&thinsp;"}else a+="0m&thinsp;";return""!==a&&t||(a+=n+"s"),a},Dict:function(e){this.data=e,this.get=function(e,t){var a=this.data[e];return void 0===t||void 0!==a&&null!==a?a:t},this.set=function(e,t){this.data[e]=t},this.getAll=function(){return this.data}}}}),part("events",function(){"use strict";return{events:{},future:{},trigger:function(e,t,a){this.events[e]?this.events[e].forEach(function(e){e(t)}):a&&(this.future[e]||(this.future[e]=[]),this.future[e].push(t||{}))},watch:function(e,t){this.events[e]||(this.events[e]=[]),this.events[e].push(t),this.future[e]&&this.future[e].forEach(t)}}}),part("converter",["goal"],function(e){"use strict";var t=function(e,t){var a=[28,29,30,31,32,33,34,35,36,37,54,55,56,57,62],n=63,r=0;a.forEach(function(t){void 0!==e[t-r]&&(e.splice(t-r,1),r++)}),void 0!==e[n-r]&&(t&&localStorage.setItem("settingsMode",2===e[n-r]?"off":"on"),e.splice(n-r,1))};if(localStorage.getItem("data3")&&!localStorage.getItem("data4")){var a=JSON.parse(localStorage.getItem("data3"));a.forEach(function(e,a){t(e,0===a)}),localStorage.setItem("data4",JSON.stringify(a)),e.reach("CONVERTED3TO4")}return["savedData","savedCalculations","data","data2","data3"].forEach(function(e){localStorage.removeItem(e)}),{oldConvert3to4:t}}),part("types",function(){"use strict";var e={light:{Barbarian:[20,[25,40,60,80,100,150],1,1,{1:1,3:2,5:3,7:4,8:5,9:6}],Archer:[25,[50,80,120,160,200,300],1,2,{1:1,3:2,5:3,7:4,8:5,9:6}],Goblin:[30,[25,40,60,80,100,150],1,3,{1:1,3:2,5:3,7:4,8:5,10:6}],Giant:[120,[500,1e3,1500,2e3,2500,3e3],5,4,{1:1,2:1,4:2,6:3,7:4,8:5,9:6}],Wall_Breaker:[120,[1e3,1500,2e3,2500,3e3,3500],2,5,{1:1,3:1,4:2,6:3,7:4,8:5,10:6}],Balloon:[480,[2e3,2500,3e3,3500,4e3,4500],5,6,{1:1,4:2,6:3,7:4,8:5,9:6}],Wizard:[480,[1500,2e3,2500,3e3,3500,4e3],4,7,{1:1,5:2,6:3,7:4,8:5,10:6}],Healer:[900,[5e3,6e3,8e3,1e4],14,8,{1:1,6:1,7:2,8:3,9:4}],Dragon:[1800,[25e3,3e4,36e3,42e3],20,9,{1:1,7:2,8:3,10:4}],"P-E-K-K-A-":[2700,[3e4,35e3,42e3,5e4],25,10,{1:1,8:3,10:4}]},dark:{Minion:[45,[6,7,8,9,10,11],2,1,{1:1,7:2,8:4,9:5,10:6}],Hog_Rider:[120,[39,45,52,58,65],5,2,{1:1,7:2,8:4,9:5}],Valkyrie:[900,[70,100,130,160],8,3,{1:1,7:1,8:2,9:4}],Golem:[2700,[450,525,600,675,750],30,4,{1:1,8:2,9:4,10:5}],Witch:[1200,[250,350],12,5,{1:1,9:2}]},spells:{Lightning:[1800,[15e3,16500,18e3,2e4,22e3,24e3],1,1,{1:1,5:4,8:5,10:6}],Healing:[1800,[15e3,16500,18e3,2e4,22e3,24e3],1,2,{1:1,6:3,7:4,8:5,9:6}],Rage:[2700,[23e3,25e3,27e3,3e4,33e3],1,3,{1:1,7:4,8:5}],Jump:[2700,[23e3,29e3],1,4,{1:1,9:2}],Freeze:[2700,[26e3,29e3,31e3,33e3,35e3],1,5,{1:1,10:5}]}};return{data:e,iterateTree:function(t){Object.keys(e).forEach(function(a){Object.keys(e[a]).forEach(function(n){t(a,n,e[a][n])})})}}}),part("savedData",["common"],function(e){"use strict";var t=["light-level-1","light-level-2","light-level-3","light-level-4","dark-level-1","dark-level-2","army-camps","spells-level","Barbarian","Archer","Goblin","Giant","Wall_Breaker","Balloon","Wizard","Healer","Dragon","P-E-K-K-A-","Barbarian-level","Archer-level","Goblin-level","Giant-level","Wall_Breaker-level","Balloon-level","Wizard-level","Healer-level","Dragon-level","P-E-K-K-A--level","Lightning","Healing","Rage","Jump","Lightning-level","Healing-level","Rage-level","Jump-level","Minion","Hog_Rider","Valkyrie","Golem","Minion-level","Hog_Rider-level","Valkyrie-level","Golem-level","Freeze","Freeze-level","Witch","Witch-level"],a=function(e){var a=[];return t.forEach(function(t){var n;n=e.hasOwnProperty(t)?e[t]:0,a.push(n)}),a},n=function(e){var a={};return t.forEach(function(t,n){a[t]=void 0===e[n]?0:e[n]}),a},r=function(e){this.key=e,this.load=function(e){var t=localStorage.getItem(this.key);return t=t&&JSON.parse(t)||[],e?t:t=t.map(n)},this.save=function(e){var t=e.map(a);localStorage.setItem(this.key,JSON.stringify(t))}},i=new r("data4"),l=i.load().map(function(t){return new e.Dict(t)});return{storage:i,all:l,current:l[0]||new e.Dict({}),save:function(){this.all[0]=this.current,i.save(this.all.map(function(e){return e.getAll()}))},dataArrayToObject:n,dataObjectToArray:a}});var DOM_ENABLED=!0;part("armyCamps",["dom","events","savedData"],function(e,t,a){"use strict";var n={base:[20,30,40,50],step:5,max:240,th:{1:20,2:30,3:70,4:80,5:135,6:150,7:200,9:220,10:240}};if(DOM_ENABLED){var r=e.id("army-camps"),i=function(e){a.current.set("army-camps",parseInt(e,10))},l=function(){t.trigger("elChange",r,!0)};e.listen(r,"change",function(){i(r.value),l(),t.trigger("calculate",{type:"all"})}),t.watch("updateFromSaved",function(){r.value=a.current.get("army-camps",r.value),i(r.value),l()}),t.watch("updateSetting",function(e){var t=e.helper(e.th,n.th);r.value=t,i(t),l()})}return n});var DOM_ENABLED=!0;part("spellFactory",["dom","events","savedData","goal"],function(e,t,a,n){"use strict";var r={max:5,th:{1:0,5:1,6:2,7:3,9:4,10:5}};if(DOM_ENABLED){var i=e.id("spells-level"),l=e.id("spells-boosted"),o=function(e){a.current.set("spells-level",parseInt(e,10))},s=function(){t.trigger("elChange",i,!0)};e.listen(i,"change",function(){o(i.value),s(),t.trigger("calculate",{type:"spells"})}),e.listen(l,"change",function(){n.reach("BOOSTED",{boostedType:r.type}),localStorage.setItem("spells-boosted",l.checked?"yes":"no"),t.trigger("calculate",{type:"spells"})}),t.watch("updateFromSaved",function(){i.value=a.current.get("spells-level",i.value),o(i.value),s(),l.checked="yes"===localStorage.getItem("spells-boosted")}),t.watch("updateSetting",function(e){var t=e.helper(e.th,r.th);i.value=t,o(t),s()})}return r});var DOM_ENABLED=!0;part("barracks",["dom","savedData","events","goal"],function(e,t,a,n){"use strict";var r=function(r){this.data=r;var i=[],l=function(t,a){var n="";0!==a&&(n=r.queue[a]),e.updater.instantly(r.type+"-maxSpace-"+t,"text",n)},o=function(e){t.current.set(e.getAttribute("id"),e.selectedIndex)};if(DOM_ENABLED){for(var s=0;++s<=r.count;){var c=e.id(r.type+"-level-"+s);i.push(c),e.listen(c,"change",function(e){var t=e.currentTarget;o(t),a.trigger("elChange",t),l(t.getAttribute("data-num"),t.value),a.trigger("calculate",{type:"barrack-"+r.type})});var u=r.type+"-boosted-"+s,d=e.id(u);"yes"===localStorage.getItem(u)&&(d.checked=!0),e.listen(d,"change",function(e){n.reach("BOOSTED",{boostedType:r.type});var t=e.currentTarget;localStorage.setItem(t.getAttribute("id"),t.checked?"yes":"no"),a.trigger("calculate",{type:r.type})})}a.watch("updateFromSaved",function(){i.forEach(function(e){var n=t.current.get(e.getAttribute("id"),e.selectedIndex);e.options[n].selected=!0,o(e),a.trigger("elChange",e,!0),l(e.getAttribute("data-num"),e.value)})}),a.watch("updateSetting",function(e){var t=e.helper(e.th,r.th);i.forEach(function(e){e.value=t,o(e),a.trigger("elChange",e,!0),l(e.getAttribute("data-num"),e.value)})})}};return{light:new r({type:"light",count:4,queue:[0,20,25,30,35,40,45,50,55,60,75],maxLevel:10,firstRequired:!0,th:{1:3,2:4,3:5,4:6,5:7,6:8,7:9,8:10}}),dark:new r({type:"dark",count:2,queue:[0,40,50,60,70,80],maxLevel:5,th:{1:0,7:2,8:4,9:5}})}}),part("calculate",["spellFactory","savedData","types","dom","barracks","goal"],function(e,t,a,n,r,i){"use strict";var l={};Object.keys(a.data).forEach(function(e){l[e]=[],Object.keys(a.data[e]).forEach(function(t){l[e].unshift(a.data[e][t].concat(t))})});var o=function(e,t){var a=e.getActualTime(),n=t.getActualTime();return n>a?-1:a>n?1:e.space<t.space?-1:e.space>t.space?1:e.maxSpace<t.maxSpace?-1:e.maxSpace>t.maxSpace?1:0},s=function(e,t){return e.level<t.level?-1:e.level>t.level?1:o(e,t)},c=function(e,t,a,n,r){var i=e.filter(function(e){return e.level>=t&&e.space+a<=e.maxSpace});if(!i.length)return null;if(i.length>1){if(1===a){var l=i.filter(function(e){return e.getActualTime()+n<=r});if(l.length)return l.length>1&&l.sort(s),l[0]}i.sort(o)}return i[0]},u=function(e,t,a,n){var r=!0,i=0,l=0;t.forEach(function(e){r&&e[1]%n!==0&&(r=!1),i=Math.max(e[2],i),l+=e[1]*e[4]});var o=!0,s=0,u=[];e.forEach(function(t){if(0!==t.level){var a=t.isBoosted===e[0].isBoosted;!r||t.level>=i&&a||(r=!1),!o||t.level===e[0].level&&a||(o=!1),u.push(t.num),s+=t.maxSpace}}),r=r&&s>=l;for(var d=!1;t.length;){var f=t.shift(),v=f[0],p=f[1],m=f[2],g=f[3],h=f[4];if(r){var b=p/n,y=b*g,k=b*h;e.forEach(function(e){0!==e.level&&(e.units[v]=b,e.time+=y,e.space+=k)})}else for(var T=null;p--;){var S=!0;if(T){var C=T.getActualTime()+g,x=T.space+h;1===h&&a>=C&&x<=T.maxSpace&&(S=!1)}if(S&&(T=c(e,m,h,g,a)),null===T){d=!0;break}T.units[v]?T.units[v]++:T.units[v]=1,T.time+=g,T.space+=h}}return d||!o||r||(e.sort(function(e,t){return t.getActualTime()-e.getActualTime()}),e.forEach(function(e,t){0!==e.level&&(e.num=u[t])})),!d},d=function(e,t){var a;if("spells"===e)a=t.savedData.get("spells-level");else{for(var o=[],s=0;++s<=r[e].data.count;){var c=t.savedData.get(e+"-level-"+s);1===s&&r[e].data.firstRequired&&(c+=1),o.push(c)}a=Math.max.apply(null,o)}for(var d={capLevel:t.capLevel,levelValue:a,objects:[]},f=0,v=0,p=0,m=0,g=0,h=[],b=-1,y=l[e].length;++b<y;){var k={},T=l[e][b];if(!(T[3]>a)){var S=T[5],C=t.savedData.get(S,0),x=t.savedData.get(S+"-level"),E=T[1][x],w=E*C;if(k.name=S,k.summaryCost=w,k.level=x+1,k.minBarrackLevel=T[3],f+=w,p+=T[2]*C,"spells"===e)m+=T[0]*C;else{var A=0;t.current&&(A=parseInt(n.id(S+"-subtract").value,10)||0),A&&i.reach("SUBTRACT"),C-=A,0>C&&(C=0),C&&(h.push([b,C,T[3],T[0],T[2]]),g=Math.max(g,T[0]),m+=T[0]*C),v+=E*C}k.quantity=C,d.objects.push(k)}}if(d.typesSortedLevel=l[e],d.totalCost=f,d.totalSpace=p,"spells"===e)d.totalTime=m;else{var D=o.map(function(a,n){var i=n+1,l=!1;return t.current&&(l="yes"===localStorage.getItem(e+"-boosted-"+i)),{num:i,time:0,space:0,maxSpace:r[e].data.queue[a],units:{},level:a,isBoosted:l,getActualTime:function(){return this.isBoosted?Math.floor(this.time/4):this.time}}}),j=D.filter(function(e){return e.isBoosted===!0}).length;j&&(g=Math.ceil(g/4));var O=D.filter(function(e){return e.level>0}).length,L=O+4*j,M=Math.max(Math.ceil(m/L),g);d.fillSuccess=u(D,h,M,O),d.barracksQueue=D,d.subtractedCost=v}return d},f=function(t){var a={params:t};return a.armyCampsSpace=t.savedData.get("army-camps"),["light","dark","spells"].forEach(function(n){var i;i="spells"===n?e.max:r[n].data.maxLevel,a[n]=d(n,{savedData:t.savedData,current:t.current,capLevel:i})}),a};return f}),part("navigation",["events","dom"],function(e,t){"use strict";var a=function(e){var t=0;do t+=e.offsetTop;while(e=e.offsetParent);return t},n=t.id("menu-wrapper"),r=t.id("menu"),i=a(r),l=r.offsetHeight;n.style.height=l+"px";var o=15;window.mkIsMobile||(o+=l,t.listen(window,"scroll",function(){t.toggleClass(r,"menu_fixed",window.pageYOffset>=i)}));var s=function(e,t){var n=window.pageYOffset,r=a(e)-o,i=n>r,l=i?n-r:r-n,s=100+l/20,c=16,u=Math.round(l/(s/c));!function d(){setTimeout(function(){i?(n-=u,r>n&&(n=r)):(n+=u,n>r&&(n=r)),window.scrollTo(window.pageXOffset,n),n!==r?d():t&&t()},c)}()};return t.find(".js-anchor").listen("universalClick",function(e){s(t.id(e.currentTarget.getAttribute("data-for")))}),{scrollTo:s}}),part("favorites",["savedData","events","dom","calculate","common","navigation","goal"],function(e,t,a,n,r,i,l){"use strict";var o=document.createElement("div"),s=a.id("light-anchor"),c=a.id("favorites"),u=new Hogan.Template(function(e,t,a){var n=this;return n.b(a=a||""),n.b('<div class="favorite js-favorite" data-num="'),n.b(n.v(n.f("index",e,t,0))),n.b('">'),n.b("\n"+a),n.s(n.f("types",e,t,1),e,t,0,66,467,"{{ }}")&&(n.rs(e,t,function(e,t,n){n.s(n.f("totalCapacity",e,t,1),e,t,0,85,178,"{{ }}")&&(n.rs(e,t,function(e,t,a){a.b('<div class="favorite__capacity">'),a.b(a.v(a.f("totalCapacity",e,t,0))),a.b("&thinsp;/&thinsp;"),a.b(a.v(a.f("maximumCapacity",e,t,0))),a.b("</div>"),a.b("\n")}),e.pop()),n.b('<table class="favorite__objects">'),n.b("\n"+a),n.s(n.f("items",e,t,1),e,t,0,241,309,"{{ }}")&&(n.rs(e,t,function(e,t,n){n.b("<tr>"),n.b("\n"+a),n.b('<td class="number">×'),n.b(n.v(n.f("quantity",e,t,0))),n.b("</td>"),n.b("\n"+a),n.b("<td>"),n.b(n.v(n.f("name",e,t,0))),n.b("</td>"),n.b("\n"+a),n.b("</tr>"),n.b("\n")}),e.pop()),n.b("</table>"),n.b("\n"+a),n.b('<div class="favorite__time">'),n.b(n.t(n.f("time",e,t,0))),n.b("</div>"),n.b("\n"+a),n.b('<div class="favorite__cost">'),n.b("\n"+a),n.b('<span class="cost cost_'),n.b(n.v(n.f("costModifier",e,t,0))),n.b('">'),n.b(n.v(n.f("cost",e,t,0))),n.b("</span>"),n.b("\n"+a),n.b("</div>"),n.b("\n")}),e.pop()),n.b('<div class="favorite__actions">'),n.b("\n"+a),n.b('<button class="button js-favorite-load" data-num="'),n.b(n.v(n.f("index",e,t,0))),n.b('" title="Current composition will be lost">'),n.b("\n"+a),n.b("Load"),n.b("\n"+a),n.b("</button>"),n.b("\n"+a),n.b('<button class="button js-favorite-delete" data-num="'),n.b(n.v(n.f("index",e,t,0))),n.b('">Delete</button>'),n.b("\n"+a),n.b("</div>"),n.b("\n"+a),n.b("</div>"),n.fl()}),d=function(a){l.reach("LOAD_SAVED");var n=r.objectCopy(e.all[a.currentTarget.getAttribute("data-num")].getAll());e.current=new r.Dict(n),t.trigger("updateFromSaved"),t.trigger("calculate",{type:"all"}),t.trigger("loaded"),i.scrollTo(s)},f=function(t){l.reach("DELETE_SAVED");var n=t.currentTarget.getAttribute("data-num"),r=c.querySelector('.js-favorite[data-num="'+n+'"]');a.listen(r,"transitionend",function(){r.parentNode.removeChild(r),a.find(".js-favorite",c).iterate(function(e){var t=parseInt(e.getAttribute("data-num"),10);if(t>n){var r=""+(t-1);e.setAttribute("data-num",r),a.find("[data-num]",e).iterate(function(e){e.setAttribute("data-num",r)})}})}),r.classList.add("favorite_deleted"),e.all.splice(n,1),e.save()},v=function(e){e.currentTarget.classList.remove("favorite_added")},p=function(e){a.find(".js-favorite-load",e).listen("universalClick",d),a.find(".js-favorite-delete",e).listen("universalClick",f),a.find(".js-favorite",e).listen("animationend",v)},m=function(e,t){if(0!==t){var a={index:t,types:[]},i=n({type:"all",current:!1,savedData:e}),l={light:"elixir",dark:"dark-elixir",spells:"elixir"};["light","dark","spells"].forEach(function(e){var t=[];if("spells"!==e&&i[e].objects.sort(function(e,t){return e.minBarrackLevel-t.minBarrackLevel}),i[e].objects.forEach(function(e){e.quantity&&t.push({name:r.convertToTitle(e.name),quantity:e.quantity})}),t.length){var n={items:t,cost:r.numberFormat(i[e].totalCost),costModifier:l[e]};if("spells"===e)n.totalCapacity=i[e].totalSpace,n.maximumCapacity=i[e].levelValue,n.time=r.getFormattedTime(i[e].totalTime,!0);else{var o;i[e].fillSuccess&&(o=Math.max.apply(null,i[e].barracksQueue.map(function(e){return e.time})),o=r.getFormattedTime(o)),n.time=o}a.types.push(n)}});var o=i.light.totalSpace+i.dark.totalSpace;return o&&(a.types[0].totalCapacity=o,a.types[0].maximumCapacity=i.armyCampsSpace),u.render(a)}},g=function(e){var t=c.querySelector('.js-favorite[data-num="'+e+'"]');i.scrollTo(t,function(){t.classList.add("favorite_added")})},h=function(){var t={},a=e.storage.load(!0);if(a[0]){for(var n=JSON.stringify(a[0]),i=0,l=a.length;++i<l;){var s=JSON.stringify(a[i]);if(n===s)return t.exists=!0,t.index=i,t}var u=e.all.length,d=new r.Dict(r.objectCopy(e.current.getAll()));e.all.push(d),e.save(),o.innerHTML=m(d,u),p(o),c.appendChild(o.firstChild),t.added=!0,t.index=u}return t};a.find(".js-save-composition").listen("universalClick",function(){var e=h(!0);e.added&&l.reach("SAVE_COMPOSITION"),e.index&&g(e.index)}),setTimeout(function(){c.innerHTML=e.all.map(m).join(""),p(c)},0);var b=e.all.length;return window.yandexMetrikaParams.favoritesCount="fc"+(b?b-1:0),{add:function(){var e=h();return e.added||e.exists}}}),part(["savedData","types","events","dom","barracks","common","calculate"],function(e,t,a,n,r,i,l){"use strict";var o=function(e,t,a){var r=e-t;0>r&&(r='<span class="limit-exceeded">'+r+"</span>"),n.updater.defer(a+"-quantity","html","("+r+" free)");var i=t;t>e&&(i='<span class="limit-exceeded">'+t+"</span>"),i=i+"&thinsp;/&thinsp;"+("light"===a?"":e),n.updater.defer(a+"-space","html",i)},s=function(e,t){var a=[];if(e.fillSuccess){n.updater.defer(t+"-exceeded","display","none");for(var r=0,l=1;e.barracksQueue.length;){var o=e.barracksQueue.shift();for(var s in o.units)o.units[s]&&n.updater.defer("quantity-"+e.typesSortedLevel[s][5]+"-"+o.num,"text","×"+o.units[s]);var c=o.getActualTime();c>r&&(r=c,l=parseInt(o.num,10));var u=c?i.getFormattedTime(c):"";o.isBoosted&&(u='<span class="boosted">'+u+"</span>"),a[o.num]=u;var d="";0!==o.maxSpace&&(d=o.space+" / "),n.updater.defer(t+"-space-"+o.num,"text",d)}a.forEach(function(e,a){a===l&&(e='<span class="result">'+e+"</span>"),n.updater.defer(t+"-time-"+a,"html",e)})}else{n.updater.defer(t+"-exceeded","display","");for(var f=[],v=0;e.barracksQueue.length;){var o=e.barracksQueue.shift();n.updater.defer(t+"-time-"+o.num,"text",""),f[o.num]=o.space,v+=o.space}var p=!0;f.forEach(function(a,r){var i=t+"-space-"+r;0===a?n.updater.defer(i,"text",""):p?(a+=e.totalSpace-v,n.updater.defer(i,"html",'<span class="limit-exceeded result">'+a+"</span> / "),p=!1):n.updater.defer(i,"text",a+" / ")})}},c=n.find(".js-dark-object"),u=n.find(".js-spells-object");a.watch("calculateDone",function(e){if(("all"===e.params.type||"barrack-dark"===e.params.type)&&c.toggleClass("setting-mode-empty",0===e.dark.levelValue),"all"===e.params.type||"spells"!==e.params.type){var t=e.light.totalSpace+e.dark.totalSpace;o(e.armyCampsSpace,t,"light"),o(e.armyCampsSpace,t,"dark")}if("all"===e.params.type||"spells"===e.params.type){if(o(e.spells.levelValue,e.spells.totalSpace,"spells"),e.spells.totalTime){var a,l="spells-time";a="yes"===localStorage.getItem("spells-boosted")?'<span class="boosted">'+i.getFormattedTime(Math.floor(e.spells.totalTime/4),!0)+"</span>":i.getFormattedTime(e.spells.totalTime,!0),n.updater.defer(l,"html",a)}u.toggleClass("setting-mode-empty",0===e.spells.levelValue)}["light","dark","spells"].forEach(function(t){if(-1!==["all","barrack-"+t,t].indexOf(e.params.type)){for(var a=e[t].capLevel+1;--a>0;)n.updater.defer(t+"-building-level-"+a,"display",a>e[t].levelValue?"none":"");if(e[t].objects.forEach(function(e){if(n.updater.defer(e.name+"-summary","text",e.summaryCost?i.numberFormat(e.summaryCost):""),"spells"!==t)for(var a=0,l=r[t].data.count;++a<=l;)n.updater.defer("quantity-"+e.name+"-"+a,"text","")}),n.updater.defer(t+"-cost","text",i.numberFormat(e[t].totalCost)),"spells"!==t){s(e[t],t);var l=t+"-subtracted-cost";e[t].subtractedCost===e[t].totalCost?n.updater.defer(l,"text",""):n.updater.defer(l,"html","−&thinsp;"+i.numberFormat(e[t].totalCost-e[t].subtractedCost)+'&thinsp;=&thinsp;<span class="result">'+i.numberFormat(e[t].subtractedCost)+"</span>")}}}),n.updater.runDeferred()}),a.watch("calculate",function(t){t.savedData=e.current,t.current=!0,a.trigger("calculateDone",l(t)),e.save()})}),part(["savedData","events","dom","common","converter","favorites","goal"],function(e,t,a,n,r,i,l){"use strict";var o,s;if(-1!==location.search.indexOf("?l=")?(o=!0,s=!0):-1!==location.search.indexOf("?s=")&&(o=!0),o){var c=location.search.substr(3);c=decodeURIComponent(c);var u={};u[s?"shareV1":"shareV2"]=c,l.reach("SHARE",u),c=c.replace(/[a-z]/g,","),c=c.replace(/,(?=,)/g,",0"),","===c[0]&&(c="0"+c),c="["+c+"]";try{c=JSON.parse(c)}catch(d){c=!1}if(history.replaceState({},"",location.protocol+"//"+location.host+location.pathname),c){s&&r.oldConvert3to4(c),c=e.dataArrayToObject(c);var f=i.add();if(e.current=new n.Dict(c),e.save(),f){var v=a.id("view-shared"),p=function(){v.style.display="none"};a.listen(v,"universalClick",p),v.style.display="",t.watch("loaded",function(){p()})}}}var m=a.id("share-twitter"),g=a.id("share-facebook"),h=a.id("share-permalink");a.selectOnFocus(h);var b=function(){var t="http://mkln.ru/clash-of-clans/?s=",a=n.objectCopy(e.current.getAll());a.settingsMode=1,a=e.dataObjectToArray(a),a=JSON.stringify(a),a=a.replace(/\b(?:null|0)\b/g,""),a=a.substr(1,a.length-2),a=a.replace(/,+$/,"");var r=97;a=a.replace(/,/g,function(){var e=String.fromCharCode(r);return 122===r?r=97:r++,e}),h.value=t+a;var i=encodeURIComponent(t+a);m.setAttribute("href","https://twitter.com/share?url="+i+"&via=ClashCalc&hashtags=ClashOfClans"),g.setAttribute("href","https://www.facebook.com/sharer/sharer.php?u="+i)},y=a.id("share-text");a.selectOnFocus(y);var k,T={1:"¹",2:"²",3:"³",4:"⁴",5:"⁵",6:"⁶",7:"⁷",8:"⁸",9:"⁹"},S={light:"Elixir",dark:"Dark Elixir",spells:"Elixir"},C=function(e){var t=[],a=[];return["light","dark","spells"].forEach(function(r){e[r]&&(e[r].objects.forEach(function(e){e.summaryCost&&t.push(n.convertToTitle(e.name)+T[e.level]+" ×"+e.quantity)}),e[r].totalCost&&a.push(n.numberFormat(e[r].totalCost)+" "+S[r]))}),t.length?(y.value=t.join(", ")+" — "+a.join(", "),!0):!1},x=a.find(".js-share"),E=function(e){var t="";C(e)?b():t="none",x.iterate(function(e){e.style.display=t})};t.watch("calculateDone",function(e){clearTimeout(k),k=setTimeout(function(){E(e)},300)})}),part(["savedData","types","events","dom"],function(e,t,a,n){"use strict";var r=function(t){e.current.set(t.getAttribute("id"),t.selectedIndex)},i=function(e,t){e.options[t].selected=!0},l=function(e){a.trigger("elChange",e,!0)};a.watch("updateFromSaved",function(){t.iterateTree(function(t,a){var o=a+"-level",s=n.id(o);i(s,e.current.get(o,s.selectedIndex)),r(s),l(s)})}),a.watch("updateSetting",function(e){t.iterateTree(function(t,a,o){var s=n.id(a+"-level");i(s,e.helper(e.th,o[4])-1),r(s),l(s)})}),n.listen(document.body,"change",function(e){e.target.classList.contains("js-comp-level")&&(r(e.target),l(e.target),a.trigger("calculate",{type:e.target.getAttribute("data-type")}))});var o=function(t){var n=t.el.classList.contains("js-comp-quantity"),r=t.el.classList.contains("js-comp-subtract");if(n||r){var i=parseInt(t.el.value,10)||0;0>i&&(i=0),t.el.value=i||"",n&&e.current.set(t.el.getAttribute("id"),i),t.calculate&&a.trigger("calculate",{type:t.el.getAttribute("data-type")})}};n.listen(document.body,"input",function(e){o({el:e.target,calculate:!0})}),a.watch("valueChange",o),a.watch("updateFromSaved",function(){t.iterateTree(function(t,a){n.id(a).value=e.current.get(a)||""})}),a.trigger("updateFromSaved"),a.trigger("calculate",{type:"all"},!0)}),part(["events","dom","goal"],function(e,t,a){"use strict";e.watch("elChange",function(e){t.updater.instantly(e.getAttribute("id")+"-text","text",e.options[e.selectedIndex].textContent)});var n=t.id("settings-toggle-mode"),r=function(){t.toggleClass(document.documentElement,"setting-mode-disabled",!n.checked),t.toggleClass(document.documentElement,"setting-mode-enabled",n.checked),localStorage.setItem("settingsMode",n.checked?"on":"off"),t.toggleClass(n.parentNode,"button_pressed",n.checked)};t.listen(n,"change",function(){r(),a.reach("SETTINGS_SWITCH")});var i=localStorage.getItem("settingsMode");"off"!==i&&(i="on"),n.checked="on"===i,r(),window.yandexMetrikaParams.settingsMode=i;var l=function(e,t){for(;!t.hasOwnProperty(e)&&e>0;)e--;return t[e]},o=function(t){a.reach("SETTINGS_TH",{settingsLevel:"th"+t}),e.trigger("updateSetting",{th:t,helper:l}),e.trigger("calculate",{type:"all"})};t.find(".js-settings-level").listen("universalClick",function(e){o(parseInt(e.currentTarget.textContent,10))})}),part(["dom"],function(e){"use strict";e.find(".js-fold").iterate(function(t){e.listen(t.querySelector(".fold__switcher"),"universalClick",function(){t.classList.toggle("fold_opened")})})}),part(["events","dom"],function(e,t){"use strict";var a=function(t,a){var n=parseInt(t.value,10);t.value="+"===a?isNaN(n)?1:++n:isNaN(n)||1>=n?"":--n,e.trigger("valueChange",{el:t,calculate:!0})},n={target:null,click:!1,firstTimeout:null,secondTimeout:null,x:0,y:0},r=function(){var e=t.id(n.target.getAttribute("data-for"));a(e,n.target.textContent)},i=function(e){n.target=e,n.click=!0,n.firstTimeout=setTimeout(function(){n.click=!1,function e(){n.secondTimeout=setTimeout(function(){r(),e()},100)}()},500)},l=function(e,t){(e>16||t>16)&&(n.target=null,n.click=!1,clearTimeout(n.firstTimeout),clearTimeout(n.secondTimeout))},o=function(){n.target&&(n.click&&r(),n.target=null,clearTimeout(n.firstTimeout),clearTimeout(n.secondTimeout))},s="ontouchstart"in window;if(window.mkIsMobile&&s||(t.listen(document.body,"mousedown",function(e){e.target.classList.contains("js-spinner")&&(n.x=e.screenX,n.y=e.screenY,i(e.target))}),t.listen(document.body,"mousemove",function(e){if(n.target){var t=Math.abs(e.screenX-n.x),a=Math.abs(e.screenY-n.y);l(t,a)}}),t.listen(document.body,"mouseup",function(){o()})),s){var c=0;t.listen(document.body,"touchstart",function(e){e.target.classList.contains("js-spinner")&&(e.timeStamp-c<500&&e.preventDefault(),c=e.timeStamp,n.x=e.touches[0].screenX,n.y=e.touches[0].screenY,i(e.target))}),t.listen(document.body,"touchmove",function(e){if(n.target){var t=Math.abs(e.touches[0].screenX-n.x)/2,a=Math.abs(e.touches[0].screenY-n.y)/2;l(t,a)}}),t.listen(document.body,"touchcancel",function(){o()}),t.listen(document.body,"touchend",function(){o()})}t.listen(document.body,"keydown",function(e){!e.target.classList.contains("js-number")||e.metaKey||e.shiftKey||e.ctrlKey||e.altKey||-1===[38,40].indexOf(e.keyCode)||(a(e.target,38===e.keyCode?"+":"-"),e.preventDefault())}),t.find(".js-number").iterate(t.selectOnFocus)}),part(["events","dom","goal"],function(e,t,a){"use strict";t.find(".js-reset").listen("universalClick",function(n){var r=n.currentTarget.getAttribute("data-reset"),i=n.currentTarget.getAttribute("data-scope");t.find("input.js-comp-"+i+'[data-type="'+r+'"]').iterate(function(t){t.value="",e.trigger("valueChange",{el:t,calculate:!1})}),e.trigger("calculate",{type:r}),a.reach("RESET")})});