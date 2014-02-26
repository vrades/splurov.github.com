/**
* @preserve Copyright 2012 Twitter, Inc.
* @license http://www.apache.org/licenses/LICENSE-2.0.txt
*/
var Hogan={};(function(a,b){function i(a){return String(a===null||a===undefined?"":a)}function j(a){return a=i(a),h.test(a)?a.replace(c,"&amp;").replace(d,"&lt;").replace(e,"&gt;").replace(f,"&#39;").replace(g,"&quot;"):a}a.Template=function(a,c,d,e){this.r=a||this.r,this.c=d,this.options=e,this.text=c||"",this.buf=b?[]:""},a.Template.prototype={r:function(a,b,c){return""},v:j,t:i,render:function(b,c,d){return this.ri([b],c||{},d)},ri:function(a,b,c){return this.r(a,b,c)},rp:function(a,b,c,d){var e=c[a];return e?(this.c&&typeof e=="string"&&(e=this.c.compile(e,this.options)),e.ri(b,c,d)):""},rs:function(a,b,c){var d=a[a.length-1];if(!k(d)){c(a,b,this);return}for(var e=0;e<d.length;e++)a.push(d[e]),c(a,b,this),a.pop()},s:function(a,b,c,d,e,f,g){var h;return k(a)&&a.length===0?!1:(typeof a=="function"&&(a=this.ls(a,b,c,d,e,f,g)),h=a===""||!!a,!d&&h&&b&&b.push(typeof a=="object"?a:b[b.length-1]),h)},d:function(a,b,c,d){var e=a.split("."),f=this.f(e[0],b,c,d),g=null;if(a==="."&&k(b[b.length-2]))return b[b.length-1];for(var h=1;h<e.length;h++)f&&typeof f=="object"&&e[h]in f?(g=f,f=f[e[h]]):f="";return d&&!f?!1:(!d&&typeof f=="function"&&(b.push(g),f=this.lv(f,b,c),b.pop()),f)},f:function(a,b,c,d){var e=!1,f=null,g=!1;for(var h=b.length-1;h>=0;h--){f=b[h];if(f&&typeof f=="object"&&a in f){e=f[a],g=!0;break}}return g?(!d&&typeof e=="function"&&(e=this.lv(e,b,c)),e):d?!1:""},ho:function(a,b,c,d,e){var f=this.c,g=this.options;g.delimiters=e;var d=a.call(b,d);return d=d==null?String(d):d.toString(),this.b(f.compile(d,g).render(b,c)),!1},b:b?function(a){this.buf.push(a)}:function(a){this.buf+=a},fl:b?function(){var a=this.buf.join("");return this.buf=[],a}:function(){var a=this.buf;return this.buf="",a},ls:function(a,b,c,d,e,f,g){var h=b[b.length-1],i=null;if(!d&&this.c&&a.length>0)return this.ho(a,h,c,this.text.substring(e,f),g);i=a.call(h);if(typeof i=="function"){if(d)return!0;if(this.c)return this.ho(i,h,c,this.text.substring(e,f),g)}return i},lv:function(a,b,c){var d=b[b.length-1],e=a.call(d);if(typeof e=="function"){e=i(e.call(d));if(this.c&&~e.indexOf("{{"))return this.c.compile(e,this.options).render(d,c)}return i(e)}};var c=/&/g,d=/</g,e=/>/g,f=/\'/g,g=/\"/g,h=/[&<>\"\']/,k=Array.isArray||function(a){return Object.prototype.toString.call(a)==="[object Array]"}})(typeof exports!="undefined"?exports:Hogan)

// Copyright 2014 Mikhail Kalashnik
var part=function(){var t=!1,e=[],a={},n=function(t){return t.map(function(t){return a[t]})};return"undefined"!=typeof window?document.addEventListener("DOMContentLoaded",function(){for(t=!0;e.length;){var a=e.shift();a()}},!1):t=!0,function(r,i,o){var s=function(){"string"==typeof r?a[r]=o?o.apply(null,n(i)):i():i.apply(null,n(r))};t?s():e.push(s)}}();part("dom",function(){"use strict";var t,e="ontouchstart"in window,a=function(t,a){if(e){var n;t.addEventListener("touchstart",function(){n=!0},!1),t.addEventListener("touchmove",function(){n=!1},!1),t.addEventListener("touchcancel",function(){n=!1},!1),t.addEventListener("touchend",function(t){t.preventDefault(),n&&a(t)},!1)}t.addEventListener("click",function(t){a(t)},!1)},n=function(t,e,n){"universalClick"===e?a(t,n):"transitionend"===e?["transitionend","webkitTransitionEnd"].forEach(function(e){t.addEventListener(e,n,!1)}):"animationend"===e?["animationend","webkitAnimationEnd","MSAnimationEnd"].forEach(function(e){t.addEventListener(e,n,!1)}):t.addEventListener(e,n)},r=function(t,e,a){t.classList[a?"add":"remove"](e)},i=function(t){this.elements=t?t:[],this.iterate=function(t){for(var e=-1,a=this.elements.length;++e<a;)t(this.elements[e])},this.toggleClass=function(t,e){this.iterate(function(a){r(a,t,e)})},this.listen=function(t,e){this.iterate(function(a){n(a,t,e)})}},o=function(e){var a=e.target;"setSelectionRange"in a&&""!==a.value&&(clearTimeout(t),t=setTimeout(function(){a.setSelectionRange(0,a.value.length)},0))},s={},l=function(t){return s[t]||(s[t]=document.getElementById(t)),s[t]},c=function(){var t={},e={},a={text:function(t,e){t.textContent=e},html:function(t,e){t.innerHTML=e},display:function(t,e){t.style.display=e}},n=function(e,n,r){t[e]||(t[e]={type:null,value:null});var i=t[e];(i.type!==n||i.value!==r)&&(i.type=n,i.value=r,a[n](l(e),r))},r=function(){Object.keys(e).forEach(function(t){n(t,e[t].type,e[t].value)}),e={}};return{defer:function(t,a,n){e[t]={type:a,value:n}},runDeferred:function(){r()},instantly:n}}(),u={};return{id:l,find:function(t,e){return new i((e||document).querySelectorAll(t))},findCache:function(t){return u[t]||(u[t]=this.find(t)),u[t]},selectOnFocus:function(t,e){n(t,"focus",function(t){o(t),e&&e()})},toggleClass:r,updater:c,listen:n,trigger:function(t,e){var a=document.createEvent("HTMLEvents");a.initEvent(e,!0,!1),t.dispatchEvent(a)},listenCustom:function(t,e){n(window,t,function(t){e(t.detail)})},triggerCustom:function(t,e){var a=document.createEvent("CustomEvent");a.initCustomEvent(t,!1,!1,e||{}),window.dispatchEvent(a)},getPosition:function(t){var e=0,a=0;do e+=t.offsetTop,a+=t.offsetLeft;while(t=t.offsetParent);return{top:e,left:a}}}}),part("goal",["dom"],function(t){"use strict";var e,a=[],n={},r=!1,i=!0,o=function(){return r&&i},s=function(t,a){e.reachGoal(t,a)},l=function(){o()&&Object.keys(n).forEach(function(t){s(t,n[t])})};t.listen(window,"load",function(){i=!0,l()}),window.yandexMetrikaLoadCallback=function(t){r=!0,e=t,l()};var c=function(t,e){if(-1===a.indexOf(t)){a.push(t);var r=e||null;o()?s(t,r):n[t]=r}};return{reach:c}}),part("navigation",["dom"],function(t){"use strict";var e=15;if(!window.mkIsMobile){var a=12,n=15,r=t.id("menu"),i=r.offsetHeight;e+=i+a+n,t.id("menu-wrapper").style.height=i+"px";var o=t.getPosition(r).top-a,s=!1;t.listen(window,"scroll",function(){var t=window.pageYOffset;t>o?s||(r.classList.add("button-group_menu-fixed"),s=!0):s&&(r.classList.remove("button-group_menu-fixed"),s=!1)})}var l=function(a,n){var r=window.pageYOffset,i=t.getPosition(a).top-e,o=r>i,s=o?r-i:i-r,l=100+s/20,c=16,u=Math.round(s/(l/c));!function d(){setTimeout(function(){o?(r-=u,i>r&&(r=i)):(r+=u,r>i&&(r=i)),window.scrollTo(window.pageXOffset,r),r!==i?d():n&&n()},c)}()};return t.find(".js-anchor").listen("universalClick",function(e){e.preventDefault(),l(t.id(e.currentTarget.getAttribute("data-for")))}),{scrollTo:l}}),part("localStorageSet",["dom","goal","navigation"],function(t,e,a){"use strict";var n=["data5","light-boosted-1","light-boosted-2","light-boosted-3","light-boosted-4","dark-boosted-1","dark-boosted-2","spells-boosted"],r="storage-quota-exceeded",i=t.id(r);return function(o,s,l){void 0===l&&(l=-2);var c;try{localStorage.setItem(o,s)}catch(u){e.reach("QUOTA_EXCEEDED",{quotaExceededFavoritesCount:""+l});var d={};n.forEach(function(t){d[t]=localStorage.getItem(t)}),localStorage.clear(),Object.keys(d).forEach(function(t){d[t]&&localStorage.setItem(t,d[t])}),d=null;try{localStorage.setItem(o,s)}catch(u){if(c="<strong>Attention!</strong> Looks like we have exceeded the quota to store Clash Calc data.",l>0)e.reach("QUOTA_EXCEEDED_AGAIN",{quotaExceededAgainFavoritesCount:""+l}),c+=" Please remove unused army compositions from favorites.";else{var f=-1,p=localStorage.getItem(n[0]);p&&(f=p.length),e.reach("QUOTA_EXCEEDED_UNKNOWN",{quotaExceededDataLength:""+f}),c+=" Normally this shouldn’t have happened.Perhaps your browser is configured in a special way.To fix the problem please check the settings related to the Local Storage."}}}return c?(t.updater.instantly(r,"html",c),t.updater.instantly(r,"display",""),a.scrollTo(i),!1):(t.updater.instantly(r,"display","none"),!0)}}),part("common",function(){"use strict";return{objectCopy:function(t){var e=t.constructor();return Object.keys(t).forEach(function(a){e[a]=t[a]}),e},numberFormat:function(t){return(""+t).replace(/\B(?=(\d{3})+(?!\d))/g,",")},convertToTitle:function(t){return t.replace("_"," ").replace(/-/g,".")},getFormattedTime:function(t,e){var a="",n=t;if(n>3599&&(a+=Math.floor(n/3600)+"h&thinsp;",n%=3600,e=!0),n>59){var r=Math.floor(n/60);n%=60,e&&n&&r++,a+=r+"m&thinsp;"}else a+="0m&thinsp;";return""!==a&&e||(a+=n+"s"),a},Dict:function(t){this.data=t,this.get=function(t,e){var a=this.data[t];return void 0===e||void 0!==a&&null!==a?a:e},this.set=function(t,e){this.data[t]=e},this.getAll=function(){return this.data}}}}),part("converter",["goal"],function(t){"use strict";var e=function(t){var e=[28,29,30,31,32,33,34,35,36,37,54,55,56,57,62],a=63,n=0;e.forEach(function(e){void 0!==t[e-n]&&(t.splice(e-n,1),n++)}),void 0!==t[a-n]&&t.splice(a-n,1)},a=function(t){var e=[0,18,19,20,21,22,23,24,25,26,27,32,33,34,35,40,41,42,43,45,47];e.forEach(function(e){t[e]||(t[e]=0),t[e]++})};if(localStorage.getItem("data3")&&!localStorage.getItem("data4")){var n=JSON.parse(localStorage.getItem("data3"));n.forEach(function(t){e(t)}),localStorage.setItem("data4",JSON.stringify(n)),t.reach("CONVERTED3TO4")}if(localStorage.getItem("data4")&&!localStorage.getItem("data5")){var r=JSON.parse(localStorage.getItem("data4"));r.forEach(a),localStorage.setItem("data5",JSON.stringify(r)),t.reach("CONVERTED4TO5")}return["savedData","savedCalculations","data","data2","data3","data4","settingsMode"].forEach(function(t){localStorage.removeItem(t)}),{oldConvert3to4:e,oldConvert4to5:a}}),part("types",function(){"use strict";var t={light:{Barbarian:[20,[0,25,40,60,80,100,150],1,1,{1:1,3:2,5:3,7:4,8:5,9:6}],Archer:[25,[0,50,80,120,160,200,300],1,2,{1:1,3:2,5:3,7:4,8:5,9:6}],Goblin:[30,[0,25,40,60,80,100,150],1,3,{1:1,3:2,5:3,7:4,8:5,10:6}],Giant:[120,[0,500,1e3,1500,2e3,2500,3e3],5,4,{1:1,2:1,4:2,6:3,7:4,8:5,9:6}],Wall_Breaker:[120,[0,1e3,1500,2e3,2500,3e3,3500],2,5,{1:1,3:1,4:2,6:3,7:4,8:5,10:6}],Balloon:[480,[0,2e3,2500,3e3,3500,4e3,4500],5,6,{1:1,4:2,6:3,7:4,8:5,9:6}],Wizard:[480,[0,1500,2e3,2500,3e3,3500,4e3],4,7,{1:1,5:2,6:3,7:4,8:5,10:6}],Healer:[900,[0,5e3,6e3,8e3,1e4],14,8,{1:1,6:1,7:2,8:3,9:4}],Dragon:[1800,[0,25e3,3e4,36e3,42e3],20,9,{1:1,7:2,8:3,10:4}],"P-E-K-K-A-":[2700,[0,3e4,35e3,42e3,5e4],25,10,{1:1,8:3,10:4}]},dark:{Minion:[45,[0,6,7,8,9,10,11],2,1,{1:1,7:2,8:4,9:5,10:6}],Hog_Rider:[120,[0,40,45,52,58,65],5,2,{1:1,7:2,8:4,9:5}],Valkyrie:[900,[0,70,100,130,160],8,3,{1:1,7:1,8:2,9:4}],Golem:[2700,[0,450,525,600,675,750],30,4,{1:1,8:2,9:4,10:5}],Witch:[1200,[0,250,350],12,5,{1:1,9:2}]},spells:{Lightning:[1800,[0,15e3,16500,18e3,2e4,22e3,24e3],1,1,{1:1,5:4,8:5,10:6}],Healing:[1800,[0,15e3,16500,18e3,2e4,22e3,24e3],1,2,{1:1,6:3,7:4,8:5,9:6}],Rage:[2700,[0,23e3,25e3,27e3,3e4,33e3],1,3,{1:1,7:4,8:5}],Jump:[2700,[0,23e3,29e3],1,4,{1:1,9:2}],Freeze:[2700,[0,26e3,29e3,31e3,33e3,35e3],1,5,{1:1,10:5}]}};return{data:t,iterateTree:function(e){Object.keys(t).forEach(function(a){Object.keys(t[a]).forEach(function(n){e(a,n,t[a][n])})})},buildings:{light:{count:4,queue:[0,20,25,30,35,40,45,50,55,60,75],maxLevel:10,firstRequired:!0,th:{1:[3,0,0,0],2:[4,4,0,0],3:[5,5,0,0],4:[6,6,6,0],5:[7,7,7,0],6:[8,8,8,0],7:[9,9,9,9],8:[10,10,10,10]}},dark:{count:2,queue:[0,40,50,60,70,80],maxLevel:5,th:{1:[0,0],7:[2,0],8:[4,4],9:[5,5]}},spells:{max:5}}}}),part("storage",["common","localStorageSet"],function(t,e){"use strict";var a=["light-level-1","light-level-2","light-level-3","light-level-4","dark-level-1","dark-level-2","army-camps","spells-level","Barbarian","Archer","Goblin","Giant","Wall_Breaker","Balloon","Wizard","Healer","Dragon","P-E-K-K-A-","Barbarian-level","Archer-level","Goblin-level","Giant-level","Wall_Breaker-level","Balloon-level","Wizard-level","Healer-level","Dragon-level","P-E-K-K-A--level","Lightning","Healing","Rage","Jump","Lightning-level","Healing-level","Rage-level","Jump-level","Minion","Hog_Rider","Valkyrie","Golem","Minion-level","Hog_Rider-level","Valkyrie-level","Golem-level","Freeze","Freeze-level","Witch","Witch-level"],n=function(t){var e=[];return a.forEach(function(a){var n;n=t.hasOwnProperty(a)?t[a]:0,e.push(n)}),e},r=function(t){var e={};return a.forEach(function(a,n){e[a]=void 0===t[n]?0:t[n]}),e},i="data5",o=function(t){var e=localStorage.getItem(i);return e=e&&JSON.parse(e)||[],t?e:e=e.map(r)},s=o().map(function(e){return new t.Dict(e)});return{getRaw:function(){return o(!0)},all:s,current:s[0]||new t.Dict({}),save:function(){s[0]=this.current;var t=s.map(function(t){return t.getAll()}),a=t.map(n);return e(i,JSON.stringify(a),s.length-1)},dataArrayToObject:r,dataObjectToArray:n}}),part("calculate",["storage","types","dom","goal"],function(t,e,a,n){"use strict";var r={};Object.keys(e.data).forEach(function(t){r[t]=[],Object.keys(e.data[t]).forEach(function(a){r[t].unshift(e.data[t][a].concat(a))})});var i=function(t,e){var a=t.getActualTime(),n=e.getActualTime();return n>a?-1:a>n?1:t.space<e.space?-1:t.space>e.space?1:t.maxSpace<e.maxSpace?-1:t.maxSpace>e.maxSpace?1:0},o=function(t,e){return t.level<e.level?-1:t.level>e.level?1:i(t,e)},s=function(t,e,a,n,r){var s=t.filter(function(t){return t.level>=e&&t.space+a<=t.maxSpace});if(!s.length)return null;if(s.length>1){if(1===a){var l=s.filter(function(t){return t.getActualTime()+n<=r});if(l.length)return l.length>1&&l.sort(o),l[0]}s.sort(i)}return s[0]},l=function(t,e,a,n){var r=!0,i=0,o=0;e.forEach(function(t){r&&t[1]%n!==0&&(r=!1),i=Math.max(t[2],i),o+=t[1]*t[4]});var l=!0,c=0,u=[];t.forEach(function(e){if(0!==e.level){var a=e.isBoosted===t[0].isBoosted;!r||e.level>=i&&a||(r=!1),!l||e.level===t[0].level&&a||(l=!1),u.push(e.num),c+=e.maxSpace}}),r=r&&c>=o;for(var d=!1;e.length;){var f=e.shift(),p=f[0],v=f[1],m=f[2],h=f[3],g=f[4];if(r){var b=v/n,y=b*h,T=b*g;t.forEach(function(t){0!==t.level&&(t.units[p]=b,t.time+=y,t.space+=T)})}else for(var C=null;v--;){var S=!0;if(C){var E=C.getActualTime()+h,k=C.space+g;1===g&&a>=E&&k<=C.maxSpace&&(S=!1)}if(S&&(C=s(t,m,g,h,a)),null===C){d=!0;break}C.units[p]?C.units[p]++:C.units[p]=1,C.time+=h,C.space+=g}}return d||!l||r||(t.sort(function(t,e){return e.getActualTime()-t.getActualTime()}),t.forEach(function(t,e){0!==t.level&&(t.num=u[e])})),!d},c=function(t,i){var o;if("spells"===t)o=i.storage.get("spells-level");else{for(var s=[],c=0;++c<=e.buildings[t].count;)s.push(i.storage.get(t+"-level-"+c));o=Math.max.apply(null,s)}for(var u={capLevel:i.capLevel,levelValue:o,objects:[]},d=0,f=0,p=0,v=0,m=0,h=[],g=-1,b=r[t].length;++g<b;){var y={},T=r[t][g];if(!(T[3]>o)){var C=T[5],S=i.storage.get(C,0),E=i.storage.get(C+"-level"),k=T[1][E],x=k*S;if(y.name=C,y.summaryCost=x,y.level=E,y.minBarrackLevel=T[3],d+=x,p+=T[2]*S,"spells"===t)v+=T[0]*S;else{var w=0;i.current&&(w=parseInt(a.id(C+"-subtract").value,10)||0),w&&n.reach("SUBTRACT"),S-=w,0>S&&(S=0),S&&(h.push([g,S,T[3],T[0],T[2]]),m=Math.max(m,T[0]),v+=T[0]*S),f+=k*S}y.quantity=S,u.objects.push(y)}}if(u.typesSortedLevel=r[t],u.totalCost=d,u.totalSpace=p,"spells"===t)u.totalTime=v;else{var L=s.map(function(a,n){var r=n+1,o=!1;return i.current&&(o="yes"===localStorage.getItem(t+"-boosted-"+r)),{num:r,time:0,space:0,maxSpace:e.buildings[t].queue[a],units:{},level:a,isBoosted:o,getActualTime:function(){return this.isBoosted?Math.floor(this.time/4):this.time}}}),A=L.filter(function(t){return t.isBoosted===!0}).length;A&&(m=Math.ceil(m/4));var j=L.filter(function(t){return t.level>0}).length,O=j+4*A,D=Math.max(Math.ceil(v/O),m);u.fillSuccess=l(L,h,D,j),u.barracksQueue=L,u.subtractedCost=f}return u},u=function(t){var a={params:t};return a.armyCampsSpace=t.storage.get("army-camps"),["light","dark","spells"].forEach(function(n){var r;r="spells"===n?e.buildings.spells.max:e.buildings[n].maxLevel,a[n]=c(n,{storage:t.storage,current:t.current,capLevel:r})}),a};return u}),part("calculateCurrent",["storage","dom","types","common","calculate"],function(t,e,a,n,r){"use strict";var i=function(t,a,n){var r=t-a;0>r&&(r='<span class="limit-exceeded">'+(""+r).replace("-","&minus;")+"</span>"),e.updater.defer(n+"-quantity","html",r);var i=a;a>t&&(i='<span class="limit-exceeded">'+a+"</span>"),i=i+"&thinsp;/&thinsp;"+("light"===n?"":t),e.updater.defer(n+"-space","html",i)},o=function(t,a){var r=[];if(t.fillSuccess){e.updater.defer(a+"-exceeded","display","none");for(var i=0,o=1;t.barracksQueue.length;){var s=t.barracksQueue.shift();for(var l in s.units)s.units[l]&&e.updater.defer("quantity-"+t.typesSortedLevel[l][5]+"-"+s.num,"text","×"+s.units[l]);var c=s.getActualTime();c>i&&(i=c,o=parseInt(s.num,10));var u=c?n.getFormattedTime(c):"";s.isBoosted&&(u='<span class="boosted">'+u+"</span>"),r[s.num]=u;var d="";0!==s.maxSpace&&(d=s.space+" / "),e.updater.defer(a+"-space-"+s.num,"text",d)}r.forEach(function(t,n){n===o&&(t='<span class="result">'+t+"</span>"),e.updater.defer(a+"-time-"+n,"html",t)})}else{e.updater.defer(a+"-exceeded","display","");for(var f=[],p=0;t.barracksQueue.length;){var s=t.barracksQueue.shift();e.updater.defer(a+"-time-"+s.num,"text",""),f[s.num]=s.space,p+=s.space}f.forEach(function(n,r){var i=a+"-space-"+r;0===n?e.updater.defer(i,"text",""):1===r?(n+=t.totalSpace-p,e.updater.defer(i,"html",'<span class="limit-exceeded result">'+n+"</span> / ")):e.updater.defer(i,"text",n+" / ")})}},s=e.find(".js-dark-object"),l=e.find(".js-spells-object");return e.listenCustom("calculateDone",function(t){if(("all"===t.params.type||"barrack-dark"===t.params.type)&&s.toggleClass("inactive",0===t.dark.levelValue),"all"===t.params.type||"spells"!==t.params.type){var r=t.light.totalSpace+t.dark.totalSpace;i(t.armyCampsSpace,r,"light"),i(t.armyCampsSpace,r,"dark")}if("all"===t.params.type||"spells"===t.params.type){i(t.spells.levelValue,t.spells.totalSpace,"spells");var c="spells-time",u="";t.spells.totalTime&&(u="yes"===localStorage.getItem("spells-boosted")?'<span class="boosted">'+n.getFormattedTime(Math.floor(t.spells.totalTime/4),!0)+"</span>":n.getFormattedTime(t.spells.totalTime,!0)),e.updater.defer(c,"html",u),l.toggleClass("inactive",0===t.spells.levelValue)}["light","dark","spells"].forEach(function(r){if(-1!==["all","barrack-"+r,r].indexOf(t.params.type)){for(var i=t[r].capLevel+1;--i>0;){var s=r+"-building-level-"+i,l=e.id(r+"-building-level-"+i);i>t[r].levelValue?(e.updater.instantly(s,"display","none"),e.find("td.changed-animation",l).iterate(function(t){t.classList.remove("changed-animation")})):e.updater.instantly(s,"display","")}if(t[r].objects.forEach(function(t){if(e.updater.defer(t.name+"-summary","text",t.summaryCost?n.numberFormat(t.summaryCost):""),"spells"!==r)for(var i=0,o=a.buildings[r].count;++i<=o;)e.updater.defer("quantity-"+t.name+"-"+i,"text","")}),e.updater.defer(r+"-cost","text",n.numberFormat(t[r].totalCost)),"spells"!==r){o(t[r],r);var c=r+"-subtracted-cost";t[r].subtractedCost===t[r].totalCost?e.updater.defer(c,"text",""):e.updater.defer(c,"html","−&thinsp;"+n.numberFormat(t[r].totalCost-t[r].subtractedCost)+'&thinsp;=&thinsp;<span class="result">'+n.numberFormat(t[r].subtractedCost)+"</span>")}}}),e.updater.defer("grand-total","text",n.numberFormat(t.light.totalCost+t.spells.totalCost)),e.updater.runDeferred()}),function(a){var n={type:a,storage:t.current,current:!0},i=r(n);t.save()&&e.triggerCustom("calculateDone",i)}}),part("collection",["dom","storage","calculateCurrent"],function(t,e,a){"use strict";var n=function(){var n={},r=function(t,n,r,i){Array.isArray(i)&&(i=i[n.index-1]),e.current.set(t,parseInt(i,10)),"dom"===r&&a(n.calculateType);var o=""+i;"storage"!==r&&"settings"!==r||n.el.value===o||(n.el.value=o,"settings"===r&&n.el.parentNode.classList.add("changed-animation")),n.onUpdate&&n.onUpdate(t,n)};return{add:function(e,a){a.el=t.id(e),t.listen(a.el.parentNode,"animationend",function(t){t.target.classList.remove("changed-animation")}),"__fromAttr"===a.calculateType&&(a.calculateType=a.el.getAttribute("data-type")),a.update||(a.update=r),n[e]=a},update:function(t){var e=n[t];e.update(t,e,"dom",e.el.value)},updateFromStorage:function(){Object.keys(n).forEach(function(t){var a=n[t];a.update(t,a,"storage",e.current.get(t,a.el.value))})},updateSetting:function(t,e){Object.keys(n).forEach(function(a){var r=n[a];r.update(a,r,"settings",e(t,r.th))})}}}();return t.listenCustom("storageUpdated",n.updateFromStorage),n}),part("boostedCollection",["dom","goal","calculateCurrent","localStorageSet","storage"],function(t,e,a,n,r){"use strict";var i=function(){var i={};return{add:function(e,a){var n={type:a,el:t.id(e)};i[e]=n,"yes"===localStorage.getItem(e)&&(n.el.checked=!0)},update:function(t){var o=n(t,i[t].el.checked?"yes":"no",r.all.length-1);o&&(e.reach("BOOSTED",{boostedType:i[t].type}),a(i[t].type))}}}();return i}),part(["dom","goal","collection","calculateCurrent","localStorageSet","storage"],function(t,e,a,n){"use strict";var r=function(t,e){for(;!e.hasOwnProperty(t)&&t>0;)t--;return e[t]},i=function(t){a.updateSetting(t,r),e.reach("SETTINGS_TH",{settingsLevel:""+t}),n("all")};t.find(".js-settings-level").listen("universalClick",function(t){i(parseInt(t.currentTarget.textContent,10))})}),part("favorites",["storage","dom","calculate","common","navigation","goal","calculateCurrent"],function(t,e,a,n,r,i,o){"use strict";var s=function(){e.updater.instantly("view-shared","display","none")},l=e.id("light-anchor"),c=e.id("favorites"),u=new Hogan.Template(function(t,e,a){var n=this;return n.b(a=a||""),n.b('<div class="favorite js-favorite" data-num="'),n.b(n.v(n.f("index",t,e,0))),n.b('">'),n.b("\n"+a),n.s(n.f("types",t,e,1),t,e,0,66,462,"{{ }}")&&(n.rs(t,e,function(t,e,n){n.s(n.f("totalCapacity",t,e,1),t,e,0,85,178,"{{ }}")&&(n.rs(t,e,function(t,e,a){a.b('<div class="favorite__capacity">'),a.b(a.v(a.f("totalCapacity",t,e,0))),a.b("&thinsp;/&thinsp;"),a.b(a.v(a.f("maximumCapacity",t,e,0))),a.b("</div>"),a.b("\n")}),t.pop()),n.b('<table class="favorite__objects">'),n.b("\n"+a),n.s(n.f("items",t,e,1),t,e,0,241,309,"{{ }}")&&(n.rs(t,e,function(t,e,n){n.b("<tr>"),n.b("\n"+a),n.b('<td class="number">×'),n.b(n.v(n.f("quantity",t,e,0))),n.b("</td>"),n.b("\n"+a),n.b("<td>"),n.b(n.v(n.f("name",t,e,0))),n.b("</td>"),n.b("\n"+a),n.b("</tr>"),n.b("\n")}),t.pop()),n.b("</table>"),n.b("\n"+a),n.b('<div class="favorite__time">'),n.b(n.t(n.f("time",t,e,0))),n.b("</div>"),n.b("\n"+a),n.b('<div class="favorite__cost">'),n.b("\n"+a),n.b('<span class="icon-'),n.b(n.v(n.f("costModifier",t,e,0))),n.b('">'),n.b(n.v(n.f("cost",t,e,0))),n.b("</span>"),n.b("\n"+a),n.b("</div>"),n.b("\n")}),t.pop()),n.b('<button class="button js-favorite-load" data-num="'),n.b(n.v(n.f("index",t,e,0))),n.b('">Load</button>'),n.b("\n"+a),n.b('<button class="button js-favorite-delete" data-num="'),n.b(n.v(n.f("index",t,e,0))),n.b('">Remove</button>'),n.b("\n"+a),n.b("</div>"),n.fl()}),d=function(a){i.reach("LOAD_SAVED");var c=n.objectCopy(t.all[a.currentTarget.getAttribute("data-num")].getAll());t.current=new n.Dict(c),e.triggerCustom("storageUpdated"),o("all"),s(),r.scrollTo(l)},f=function(a){i.reach("DELETE_SAVED");var n=a.currentTarget.getAttribute("data-num"),r=c.querySelector('.js-favorite[data-num="'+n+'"]');e.listen(r,"transitionend",function(){r.parentNode.removeChild(r),e.find(".js-favorite",c).iterate(function(t){var a=parseInt(t.getAttribute("data-num"),10);if(a>n){var r=""+(a-1);t.setAttribute("data-num",r),e.find("[data-num]",t).iterate(function(t){t.setAttribute("data-num",r)})}})}),r.classList.add("favorite_deleted"),t.all.splice(n,1),t.save()},p=function(t){t.currentTarget.classList.remove("favorite_added")},v=function(t,a){e.find(".js-favorite-load",t).listen("universalClick",d),e.find(".js-favorite-delete",t).listen("universalClick",f),a?e.listen(t,"animationend",p):e.find(".js-favorite",t).listen("animationend",p)},m=function(t,e){if(0!==e){var r={index:e,types:[]},i=a({type:"all",current:!1,storage:t}),o={light:"elixir",dark:"dark-elixir",spells:"elixir"};["light","dark","spells"].forEach(function(t){var e=[];if("spells"!==t&&i[t].objects.sort(function(t,e){return t.minBarrackLevel-e.minBarrackLevel}),i[t].objects.forEach(function(t){t.quantity&&e.push({name:n.convertToTitle(t.name),quantity:t.quantity})}),e.length){var a={items:e,cost:n.numberFormat(i[t].totalCost),costModifier:o[t]};if("spells"===t)a.totalCapacity=i[t].totalSpace,a.maximumCapacity=i[t].levelValue,a.time=n.getFormattedTime(i[t].totalTime,!0);else{var s;i[t].fillSuccess&&(s=Math.max.apply(null,i[t].barracksQueue.map(function(t){return t.time})),s=n.getFormattedTime(s)),a.time=s}r.types.push(a)}});var s=i.light.totalSpace+i.dark.totalSpace;return s&&(r.types[0].totalCapacity=s,r.types[0].maximumCapacity=i.armyCampsSpace),u.render(r)}},h=function(t){var e=c.querySelector('.js-favorite[data-num="'+t+'"]');r.scrollTo(e,function(){e.classList.add("favorite_added")})},g=function(){var e={},a=t.getRaw();if(a[0]){for(var r=JSON.stringify(a[0]),i=0,o=a.length;++i<o;){var s=JSON.stringify(a[i]);if(r===s)return e.exists=!0,e.index=i,e}var l=t.all.length,u=new n.Dict(n.objectCopy(t.current.getAll()));t.all.push(u),t.save()?(c.insertAdjacentHTML("beforeend",m(u,l)),v(c.lastChild,!0),e.added=!0,e.index=l):t.all.pop()}return e};e.find(".js-favorite-add").listen("universalClick",function(t){t.preventDefault();var e=g(!0);e.added&&i.reach("SAVE_COMPOSITION",{favoriteButton:t.target.textContent}),e.index&&h(e.index)}),setTimeout(function(){c.innerHTML=t.all.map(m).join(""),v(c)},0);var b=t.all.length;return window.yandexMetrikaParams.favoritesCount=""+(b?b-1:0),{addBeforeShare:function(){var t=g();(t.added||t.exists)&&(e.listen(e.id("view-shared"),"universalClick",s),e.updater.instantly("view-shared","display",""))}}}),part(["storage","dom","common","converter","favorites","goal"],function(t,e,a,n,r,i){"use strict";var o=0;if(-1!==location.search.indexOf("?l=")?o=1:-1!==location.search.indexOf("?s=")?o=2:-1!==location.search.indexOf("?s3=")&&(o=3),0!==o){var s=location.search.substr(3===o?4:3);s=decodeURIComponent(s);var l={};l["shareV"+o]=s,i.reach("SHARE",l),s=s.replace(/[a-z]/g,","),s=s.replace(/,(?=,)/g,",0"),","===s[0]&&(s="0"+s),s="["+s+"]";try{s=JSON.parse(s)}catch(c){s=!1}history.replaceState({},"",location.protocol+"//"+location.host+location.pathname),s&&(1===o?n.oldConvert3to4(s):2===o&&n.oldConvert4to5(s),s=t.dataArrayToObject(s),r.addBeforeShare(),t.current=new a.Dict(s),t.save())}var u=e.find(".js-share-link"),d=e.id("share-permalink");e.selectOnFocus(d,function(){i.reach("SHARE_LINK")});var f,p=function(){var e="http://mkln.ru/clash-of-clans/?s3=",n=a.objectCopy(t.current.getAll());n=t.dataObjectToArray(n),n=JSON.stringify(n),n=n.replace(/\b(?:null|0)\b/g,""),n=n.substr(1,n.length-2),n=n.replace(/,+$/,"");var r=97;n=n.replace(/,/g,function(){var t=String.fromCharCode(r);return 122===r?r=97:r++,t}),d.value=e+n;var i=encodeURIComponent(e+n);u.iterate(function(t){t.setAttribute("href",t.getAttribute("data-share-link").replace("{url}",i))})},v=e.find(".js-share"),m=function(t){var e="",a=["light","dark","spells"].some(function(e){return t[e].totalCost?!0:void 0});a?p():e="none",v.iterate(function(t){t.style.display=e})};e.listenCustom("calculateDone",function(t){clearTimeout(f),f=setTimeout(function(){m(t)},300)})}),part(["storage","types","dom","collection","boostedCollection","calculateCurrent"],function(t,e,a,n,r,i){"use strict";a.listen(document.body,"change",function(t){t.target.classList.contains("js-comp-level")?n.update(t.target.getAttribute("id")):t.target.classList.contains("js-comp-boosted")&&r.update(t.target.getAttribute("id"))}),n.add("army-camps",{calculateType:"all",th:{1:20,2:30,3:70,4:80,5:135,6:150,7:200,9:220,10:240}}),n.add("spells-level",{calculateType:"spells",th:{1:0,5:1,6:2,7:3,9:4,10:5},onUpdate:function(e){a.updater.instantly("spells-boosted-wrapper","display",0===t.current.get(e)?"none":"")}}),r.add("spells-boosted","spells"),["light","dark"].forEach(function(i){for(var o=e.buildings[i],s=0;++s<=o.count;)n.add(i+"-level-"+s,{index:s,calculateType:"barrack-"+i,th:o.th,onUpdate:function(e,n){var r="",s=t.current.get(e);0!==s&&(r=o.queue[s]),a.updater.instantly(i+"-maxSpace-"+n.index,"text",r),a.updater.instantly(i+"-barrack-info-"+n.index,"display",0===s?"none":"")}}),r.add(i+"-boosted-"+s,i)}),e.iterateTree(function(t,e,a){n.add(e+"-level",{calculateType:"__fromAttr",th:a[4],attachEvent:!1})}),a.listen(document.body,"input",function(e){var a=e.target,n=a.classList.contains("js-comp-quantity"),r=a.classList.contains("js-comp-subtract");if(n||r){var o=parseInt(a.value,10)||0;0>o&&(o=0),a.value=o||"",n&&t.current.set(a.getAttribute("id"),o),i(a.getAttribute("data-type"))}}),a.listenCustom("storageUpdated",function(){e.iterateTree(function(e,n){a.id(n).value=t.current.get(n)||""})}),a.triggerCustom("storageUpdated"),i("all")}),part(["dom"],function(t){"use strict";var e=function(e,a){var n=parseInt(e.value,10);e.value="+"===a?isNaN(n)?1:++n:isNaN(n)||1>=n?"":--n,t.trigger(e,"input")},a=function(t){var e=this;this.target=t.target,this.click=!0,this.x=t.screenX,this.y=t.screenY,this.firstTimeout=setTimeout(function(){e.click=!1,function t(){e.secondTimeout=setTimeout(function(){e.allowPrevent=!0,e.run(),t()},100)}()},300)};a.prototype.run=function(){var a=t.id(this.target.getAttribute("data-for"));e(a,this.target.textContent)},a.prototype.isMoved=function(t,e){var a=Math.abs(t.screenX-this.x)/e,n=Math.abs(t.screenY-this.y)/e;return a>16||n>16?!0:!1},a.prototype.destroy=function(){this.target=null,clearTimeout(this.firstTimeout),clearTimeout(this.secondTimeout)};var n={items:{},start:function(t){for(var e=!1,n=0,r=t.length;r>n;n++){var i=t[n];i.target.classList.contains("js-spinner")&&(0===Object.keys(this.items).length&&(e=!0),this.items[i.identifier]=new a(i))}return e},move:function(t,e){e=e||1;for(var a=!1,n=0,r=t.length;r>n;n++){var i=t[n];i.identifier in this.items&&(this.items[i.identifier].click=!1,this.items[i.identifier].isMoved(i,e)?(this.items[i.identifier].destroy(),delete this.items[i.identifier]):this.items[i.identifier].allowPrevent&&(a=!0))}return a},end:function(t){for(var e=0,a=t.length;a>e;e++){var n=t[e];n.identifier in this.items&&(this.items[n.identifier].click&&this.items[n.identifier].run(),this.items[n.identifier].destroy(),delete this.items[n.identifier])}}},r="ontouchstart"in window;if(window.mkIsMobile&&r||(t.listen(document.body,"mousedown",function(t){t.identifier="mouse",n.start([t])}),t.listen(document.body,"mousemove",function(t){t.identifier="mouse",n.move([t])}),t.listen(document.body,"mouseup",function(t){t.identifier="mouse",n.end([t])})),r){var i=0;t.listen(document.body,"touchstart",function(t){n.start(t.changedTouches)&&(t.timeStamp-i<=300&&t.preventDefault(),i=t.timeStamp)}),t.listen(document.body,"touchmove",function(t){n.move(t.changedTouches,2)&&t.preventDefault()}),["touchend","touchcancel"].forEach(function(e){t.listen(document.body,e,function(t){n.end(t.changedTouches)})})}t.listen(document.body,"keydown",function(t){!t.target.classList.contains("js-number")||t.metaKey||t.shiftKey||t.ctrlKey||t.altKey||-1===[38,40].indexOf(t.keyCode)||(e(t.target,38===t.keyCode?"+":"-"),t.preventDefault())}),t.find(".js-number").iterate(t.selectOnFocus)}),part(["dom","goal"],function(t,e){"use strict";t.find(".js-reset").listen("universalClick",function(a){var n=a.currentTarget.getAttribute("data-reset"),r=a.currentTarget.getAttribute("data-scope");t.findCache("input.js-comp-"+r+'[data-type="'+n+'"]').iterate(function(e){e.value="",t.trigger(e,"input")}),e.reach("RESET",{resetType:n})})}),part(["dom"],function(t){"use strict";var e,a,n="help-tooltip",r=n+"_visible",i=n+"_right",o="-999px",s=15,l=7,c=!1,u=function(){e=document.createElement("div"),e.classList.add(n),e.style.left=o,document.body.appendChild(e),t.listen(e,"transitionend",function(){e.classList.contains(r)||(e.style.left=o)});var i;t.listen(window,"touchstart",function(t){i=t.target!==e,i&&e.classList.contains(r)&&(a=setTimeout(function(){e.classList.remove(r)},300))}),t.listen(window,"touchmove",function(){i=!1}),t.listen(window,"touchend",function(){clearTimeout(a),i&&e.classList.remove(r)}),["mousedown","resize"].forEach(function(a){t.listen(window,a,function(t){t.target!==e&&e.classList.remove(r)})})};t.find(".js-help-link").listen("universalClick",function(n){n.stopPropagation(),c||(u(),c=!0),clearTimeout(a);var d=n.currentTarget;e.style.left=o,e.innerHTML=d.querySelector(".js-help-content").innerHTML;var f=e.offsetWidth,p=window.scrollX,v=window.innerWidth,m=t.getPosition(d),h=m.left-s;h+f>p+v&&h-p>v/2?(h=m.left-f+d.offsetWidth+s,e.classList.add(i)):e.classList.remove(i),e.style.top=m.top+d.offsetHeight+l+"px",e.style.left=h+"px",e.classList.add(r)})});