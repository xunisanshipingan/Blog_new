(function(){"use strict";var e={940:function(e,t,n){var o=n(963),i=n(252);function r(e,t,n,o,r,s){const a=(0,i.up)("Navbar"),l=(0,i.up)("router-view");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(a),(0,i.Wm)(l)],64)}var s=n(577);function a(e,t,n,o,r,a){const l=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",null,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.navlist,(e=>((0,i.wg)(),(0,i.iD)("span",{key:e.id},[(0,i.Wm)(l,{to:e.host},{default:(0,i.w5)((()=>[(0,i.Uk)((0,s.zw)(e.name),1)])),_:2},1032,["to"])])))),128))])}var l={name:"NavBar",setup(){const e=[{id:"1",name:"浮生四梦",host:"bloglist"},{id:"2",name:"姻缘一线",host:"subscribe"},{id:"3",name:"摘叶飞花",host:"anthology"}],t={navlist:e};return t}},u=n(744);const c=(0,u.Z)(l,[["render",a],["__scopeId","data-v-71b1f559"]]);var d=c,f={name:"home",components:{Navbar:d}};const h=(0,u.Z)(f,[["render",r]]);var p=h,m=n(119);const g=[{path:"/",component:()=>n.e(910).then(n.bind(n,436))},{path:"/anthology",name:"anthology",component:()=>n.e(640).then(n.bind(n,640))},{path:"/bloglist",name:"bloglist",component:()=>n.e(910).then(n.bind(n,436))},{path:"/subscribe",name:"subscribe",component:()=>n.e(866).then(n.bind(n,866))}],b=(0,m.p7)({history:(0,m.r5)(),routes:g});var w=b,v=n(907),y=(0,v.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}});const L=function(){let e,t,n,o,i,r,s=!1,a=0;const l=["#F73859","#14FFEC","#00E0FF","#FF99FE","#FAF15D"],u=document.createElement("canvas");document.body.appendChild(u),u.setAttribute("style","width: 100%; height: 100%; top: 0; left: 0; z-index: 99999; position: fixed; pointer-events: none;");const c=document.createElement("span");function d(){u.width=2*window.innerWidth,u.height=2*window.innerHeight,u.style.width=window.innerWidth+"px",u.style.height=window.innerHeight+"px",r.scale(2,2),t=u.width=window.innerWidth,n=u.height=window.innerHeight,o={x:t/2,y:n/2},i={x:t/2,y:n/2}}c.classList.add("pointer"),document.body.appendChild(c),u.getContext&&window.addEventListener?(r=u.getContext("2d"),d(),window.addEventListener("resize",d,!1),m(),window.addEventListener("mousedown",(function(t){h(p(10,20),t.clientX,t.clientY),document.body.classList.add("is-pressed"),e=setTimeout((function(){document.body.classList.add("is-longpress"),s=!0}),500)}),!1),window.addEventListener("mouseup",(function(t){clearInterval(e),1==s&&(document.body.classList.remove("is-longpress"),h(p(50+Math.ceil(a),100+Math.ceil(a)),t.clientX,t.clientY),s=!1),document.body.classList.remove("is-pressed")}),!1),window.addEventListener("mousemove",(function(e){let t=e.clientX,n=e.clientY;c.style.top=n+"px",c.style.left=t+"px"}),!1)):console.log("canvas or addEventListener is unsupported!");class f{constructor(e=o.x,t=o.y){this.x=e,this.y=t,this.angle=2*Math.PI*Math.random(),this.multiplier=1==s?p(14+a,15+a):p(6,12),this.vx=(this.multiplier+.5*Math.random())*Math.cos(this.angle),this.vy=(this.multiplier+.5*Math.random())*Math.sin(this.angle),this.r=p(8,12)+3*Math.random(),this.color=l[Math.floor(Math.random()*l.length)]}update(){this.x+=this.vx-i.x,this.y+=this.vy-i.y,i.x=-2/window.innerWidth*Math.sin(this.angle),i.y=-2/window.innerHeight*Math.cos(this.angle),this.r-=.3,this.vx*=.9,this.vy*=.9}}function h(e=1,t=o.x,n=o.y){for(let o=0;o<e;o++)balls.push(new f(t,n))}function p(e,t){return Math.floor(Math.random()*t)+e}function m(){r.fillStyle="rgba(255, 255, 255, 0)",r.clearRect(0,0,u.width,u.height);for(let e=0;e<balls.length;e++){let t=balls[e];t.r<0||(r.fillStyle=t.color,r.beginPath(),r.arc(t.x,t.y,t.r,0,2*Math.PI,!1),r.fill(),t.update())}1==s?a+=.2:!s&&a>=0&&(a-=.4),g(),requestAnimationFrame(m)}function g(){for(let e=0;e<balls.length;e++){let o=balls[e];(o.x+o.r<0||o.x-o.r>t||o.y+o.r<0||o.y-o.r>n||o.r<0)&&balls.splice(e,1)}}};var x={install:L};const O={debounce:function(e,t,n){let o;return function(){const i=this,r=arguments,s=function(){o=null,n||e.apply(i,r)},a=n&&!o;clearTimeout(o),o=setTimeout(s,t),a&&e.apply(i,r)}},throttle:function(e,t,n){let o,i,r,s=0;n||(n={});const a=function(){s=!1===n.leading?0:(new Date).getTime(),o=null,e.apply(i,r),o||(i=r=null)},l=function(){const l=(new Date).getTime();s||!1!==n.leading||(s=l);const u=t-(l-s);i=this,r=arguments,u<=0||u>t?(o&&(clearTimeout(o),o=null),s=l,e.apply(i,r),o||(i=r=null)):o||!1===n.trailing||(o=setTimeout(a,u))};return l},sidebarPaddingR:()=>{const e=window.innerWidth,t=document.body.clientWidth,n=e-t;e!==t&&(document.body.style.paddingRight=n+"px")},snackbarShow:(e,t,n)=>{const o="undefined"!==typeof t&&t,i="undefined"!==typeof n?n:2e3,r=GLOBAL_CONFIG.Snackbar.position,s="light"===document.documentElement.getAttribute("data-theme")?GLOBAL_CONFIG.Snackbar.bgLight:GLOBAL_CONFIG.Snackbar.bgDark;Snackbar.show({text:e,backgroundColor:s,showAction:o,duration:i,pos:r})},initJustifiedGallery:function(e){e instanceof jQuery||(e=$(e)),e.each((function(e,t){$(this).is(":visible")&&$(this).justifiedGallery({rowHeight:220,margins:4})}))},diffDate:(e,t=!1)=>{const n=new Date,o=new Date(e),i=n.getTime()-o.getTime(),r=6e4,s=60*r,a=24*s,l=30*a;let u;if(t){const e=i/l,t=i/a,n=i/s,c=i/r;u=e>12?o.toLocaleDateString().replace(/\//g,"-"):e>=1?parseInt(e)+" "+GLOBAL_CONFIG.date_suffix.month:t>=1?parseInt(t)+" "+GLOBAL_CONFIG.date_suffix.day:n>=1?parseInt(n)+" "+GLOBAL_CONFIG.date_suffix.hour:c>=1?parseInt(c)+" "+GLOBAL_CONFIG.date_suffix.min:GLOBAL_CONFIG.date_suffix.just}else u=parseInt(i/a);return u},loadComment:(e,t)=>{if("IntersectionObserver"in window){const n=new IntersectionObserver((e=>{e[0].isIntersecting&&(t(),n.disconnect())}),{threshold:[0]});n.observe(e)}else t()},scrollToDest:(e,t)=>{if(e<0||t<0)return;const n=window.scrollY||window.screenTop;if(n>e&&(e-=70),"CSS"in window&&CSS.supports("scroll-behavior","smooth"))return void window.scrollTo({top:e,behavior:"smooth"});let o=null;t=t||500,window.requestAnimationFrame((function i(r){if(o=o||r,n<e){const s=r-o;window.scrollTo(0,(e-n)*s/t+n),s<t?window.requestAnimationFrame(i):window.scrollTo(0,e)}else{const s=r-o;window.scrollTo(0,n-(n-e)*s/t),s<t?window.requestAnimationFrame(i):window.scrollTo(0,e)}}))},fadeIn:(e,t)=>{e.style.cssText=`display:block;animation: to_show ${t}s`},fadeOut:(e,t)=>{e.addEventListener("animationend",(function t(){e.style.cssText="display: none; animation: '' ",e.removeEventListener("animationend",t)})),e.style.animation=`to_hide ${t}s`},getParents:(e,t)=>{for(;e&&e!==document;e=e.parentNode)if(e.matches(t))return e;return null},siblings:(e,t)=>[...e.parentNode.children].filter((n=>t?n!==e&&n.matches(t):n!==e)),wrap:function(e,t,n="",o=""){const i=document.createElement(t);n&&(i.id=n),o&&(i.className=o),e.parentNode.insertBefore(i,e),i.appendChild(e)},unwrap:function(e){const t=e.parentNode;t!==document.body&&(t.parentNode.insertBefore(e,t),t.parentNode.removeChild(t))},isJqueryLoad:e=>{"undefined"===typeof jQuery?getScript(GLOBAL_CONFIG.source.jQuery).then(e):e()},isHidden:e=>0===e.offsetHeight&&0===e.offsetWidth,getEleTop:e=>{let t=e.offsetTop,n=e.offsetParent;while(null!==n)t+=n.offsetTop,n=n.offsetParent;return t}};var C={btf:O};const T=(0,o.ri)(p);T.use(y).use(w).use(x),T.provide("$btf",C),T.mount("#app")}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={exports:{}};return e[o](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,i,r){if(!o){var s=1/0;for(c=0;c<e.length;c++){o=e[c][0],i=e[c][1],r=e[c][2];for(var a=!0,l=0;l<o.length;l++)(!1&r||s>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[l])}))?o.splice(l--,1):(a=!1,r<s&&(s=r));if(a){e.splice(c--,1);var u=i();void 0!==u&&(t=u)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[o,i,r]}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{640:"13e12cab",866:"718a0ee2",910:"df4790bc"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".eb2f85b5.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="blog:";n.l=function(o,i,r,s){if(e[o])e[o].push(i);else{var a,l;if(void 0!==r)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+r){a=d;break}}a||(l=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+r),a.src=o),e[o]=[i];var f=function(t,n){a.onerror=a.onload=null,clearTimeout(h);var i=e[o];if(delete e[o],a.parentNode&&a.parentNode.removeChild(a),i&&i.forEach((function(e){return e(n)})),t)return t(n)},h=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),l&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var e=function(e,t,n,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var r=function(r){if(i.onerror=i.onload=null,"load"===r.type)n();else{var s=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=s,l.request=a,i.parentNode.removeChild(i),o(l)}};return i.onerror=i.onload=r,i.href=t,document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var i=n[o],r=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(r===e||r===t))return i}var s=document.getElementsByTagName("style");for(o=0;o<s.length;o++){i=s[o],r=i.getAttribute("data-href");if(r===e||r===t)return i}},o=function(o){return new Promise((function(i,r){var s=n.miniCssF(o),a=n.p+s;if(t(s,a))return i();e(o,a,i,r)}))},i={143:0};n.f.miniCss=function(e,t){var n={910:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=o(e).then((function(){i[e]=0}),(function(t){throw delete i[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,o){var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)o.push(i[2]);else{var r=new Promise((function(n,o){i=e[t]=[n,o]}));o.push(i[2]=r);var s=n.p+n.u(t),a=new Error,l=function(o){if(n.o(e,t)&&(i=e[t],0!==i&&(e[t]=void 0),i)){var r=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.src;a.message="Loading chunk "+t+" failed.\n("+r+": "+s+")",a.name="ChunkLoadError",a.type=r,a.request=s,i[1](a)}};n.l(s,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var i,r,s=o[0],a=o[1],l=o[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(i in a)n.o(a,i)&&(n.m[i]=a[i]);if(l)var c=l(n)}for(t&&t(o);u<s.length;u++)r=s[u],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},o=self["webpackChunkblog"]=self["webpackChunkblog"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(940)}));o=n.O(o)})();
//# sourceMappingURL=app.c1846893.js.map