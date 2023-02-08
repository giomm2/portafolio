var Fe=(e,r)=>()=>(r||e((r={exports:{}}).exports,r),r.exports);var dr=Fe((gr,qe)=>{(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();function je(){window.location.href="./src/portafolio/home/home.html"}setTimeout(je,1e4);(()=>{const e=document.querySelector("#tech1"),r=document.querySelector("#tech2"),n=document.querySelector("#tech3"),a=document.querySelector("#tech4"),t=document.querySelector("#m1"),o=document.querySelector("#m2"),u=document.querySelector("#m3"),c=document.querySelector("#m4"),i=(s,f)=>{let g=document.querySelector("#projects"),x=document.querySelector("#experience"),m=document.querySelector("#contact"),d=document.querySelector("#skills"),b=document.querySelector(`#${s}`),p=document.querySelector("#title"),v=document.querySelector(`#${f}`);switch(g.style.display="none",x.style.display="none",m.style.display="none",d.style.display="none",b.style.display="block",t.style.backgroundColor="white",t.style.color="#34495e",t.style.fontSize="100%",o.style.backgroundColor="white",o.style.color="#34495e",o.style.fontSize="100%",u.style.backgroundColor="white",u.style.color="#34495e",u.style.fontSize="100%",c.style.backgroundColor="white",c.style.color="#34495e",c.style.fontSize="100%",v.style.color="white",v.style.backgroundColor="#34495e",v.style.fontSize="120%",s){case"experience":p.textContent="About";break;case"projects":p.textContent="Projects";break;case"skills":p.textContent="Technologies";break;case"contact":p.textContent="Contact";break}},y=(s,f)=>{let g=document.querySelector("#languages"),x=document.querySelector("#frameworks"),m=document.querySelector("#db"),d=document.querySelector("#others"),b=document.querySelector(`#${s}`),p=document.querySelector(`#${f}`);g.style.display="none",x.style.display="none",m.style.display="none",d.style.display="none",b.style.display="block",e.style.color="white",e.style.backgroundColor="#34495e",r.style.color="white",r.style.backgroundColor="#34495e",n.style.color="white",n.style.backgroundColor="#34495e",a.style.color="white",a.style.backgroundColor="#34495e",p.style.color="black",p.style.backgroundColor="white"};return e.addEventListener("click",()=>{y("languages","tech1")}),r.addEventListener("click",()=>{y("frameworks","tech2")}),n.addEventListener("click",()=>{y("db","tech3")}),a.addEventListener("click",()=>{y("others","tech4")}),t.addEventListener("click",()=>{i("experience","m1")}),o.addEventListener("click",()=>{i("skills","m2")}),u.addEventListener("click",()=>{i("projects","m3")}),c.addEventListener("click",()=>{i("contact","m4")}),y("languages","tech1"),i("experience","m1"),""})();var ye={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},Y={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},Ve=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],H={CSS:{},springs:{}};function P(e,r,n){return Math.min(Math.max(e,r),n)}function z(e,r){return e.indexOf(r)>-1}function Q(e,r){return e.apply(null,r)}var l={arr:function(e){return Array.isArray(e)},obj:function(e){return z(Object.prototype.toString.call(e),"Object")},pth:function(e){return l.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||l.svg(e)},str:function(e){return typeof e=="string"},fnc:function(e){return typeof e=="function"},und:function(e){return typeof e>"u"},nil:function(e){return l.und(e)||e===null},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return l.hex(e)||l.rgb(e)||l.hsl(e)},key:function(e){return!ye.hasOwnProperty(e)&&!Y.hasOwnProperty(e)&&e!=="targets"&&e!=="keyframes"}};function me(e){var r=/\(([^)]+)\)/.exec(e);return r?r[1].split(",").map(function(n){return parseFloat(n)}):[]}function pe(e,r){var n=me(e),a=P(l.und(n[0])?1:n[0],.1,100),t=P(l.und(n[1])?100:n[1],.1,100),o=P(l.und(n[2])?10:n[2],.1,100),u=P(l.und(n[3])?0:n[3],.1,100),c=Math.sqrt(t/a),i=o/(2*Math.sqrt(t*a)),y=i<1?c*Math.sqrt(1-i*i):0,s=1,f=i<1?(i*c+-u)/y:-u+c;function g(m){var d=r?r*m/1e3:m;return i<1?d=Math.exp(-d*i*c)*(s*Math.cos(y*d)+f*Math.sin(y*d)):d=(s+f*d)*Math.exp(-d*c),m===0||m===1?m:1-d}function x(){var m=H.springs[e];if(m)return m;for(var d=1/6,b=0,p=0;;)if(b+=d,g(b)===1){if(p++,p>=16)break}else p=0;var v=b*d*1e3;return H.springs[e]=v,v}return r?g:x}function ze(e){return e===void 0&&(e=10),function(r){return Math.ceil(P(r,1e-6,1)*e)*(1/e)}}var Re=function(){var e=11,r=1/(e-1);function n(s,f){return 1-3*f+3*s}function a(s,f){return 3*f-6*s}function t(s){return 3*s}function o(s,f,g){return((n(f,g)*s+a(f,g))*s+t(f))*s}function u(s,f,g){return 3*n(f,g)*s*s+2*a(f,g)*s+t(f)}function c(s,f,g,x,m){var d,b,p=0;do b=f+(g-f)/2,d=o(b,x,m)-s,d>0?g=b:f=b;while(Math.abs(d)>1e-7&&++p<10);return b}function i(s,f,g,x){for(var m=0;m<4;++m){var d=u(f,g,x);if(d===0)return f;var b=o(f,g,x)-s;f-=b/d}return f}function y(s,f,g,x){if(!(0<=s&&s<=1&&0<=g&&g<=1))return;var m=new Float32Array(e);if(s!==f||g!==x)for(var d=0;d<e;++d)m[d]=o(d*r,s,g);function b(p){for(var v=0,h=1,S=e-1;h!==S&&m[h]<=p;++h)v+=r;--h;var E=(p-m[h])/(m[h+1]-m[h]),w=v+E*r,O=u(w,s,g);return O>=.001?i(p,w,s,g):O===0?w:c(p,v,v+r,s,g)}return function(p){return s===f&&g===x||p===0||p===1?p:o(b(p),f,x)}}return y}(),be=function(){var e={linear:function(){return function(a){return a}}},r={Sine:function(){return function(a){return 1-Math.cos(a*Math.PI/2)}},Circ:function(){return function(a){return 1-Math.sqrt(1-a*a)}},Back:function(){return function(a){return a*a*(3*a-2)}},Bounce:function(){return function(a){for(var t,o=4;a<((t=Math.pow(2,--o))-1)/11;);return 1/Math.pow(4,3-o)-7.5625*Math.pow((t*3-2)/22-a,2)}},Elastic:function(a,t){a===void 0&&(a=1),t===void 0&&(t=.5);var o=P(a,1,10),u=P(t,.1,2);return function(c){return c===0||c===1?c:-o*Math.pow(2,10*(c-1))*Math.sin((c-1-u/(Math.PI*2)*Math.asin(1/o))*(Math.PI*2)/u)}}},n=["Quad","Cubic","Quart","Quint","Expo"];return n.forEach(function(a,t){r[a]=function(){return function(o){return Math.pow(o,t+2)}}}),Object.keys(r).forEach(function(a){var t=r[a];e["easeIn"+a]=t,e["easeOut"+a]=function(o,u){return function(c){return 1-t(o,u)(1-c)}},e["easeInOut"+a]=function(o,u){return function(c){return c<.5?t(o,u)(c*2)/2:1-t(o,u)(c*-2+2)/2}},e["easeOutIn"+a]=function(o,u){return function(c){return c<.5?(1-t(o,u)(1-c*2))/2:(t(o,u)(c*2-1)+1)/2}}}),e}();function G(e,r){if(l.fnc(e))return e;var n=e.split("(")[0],a=be[n],t=me(e);switch(n){case"spring":return pe(e,r);case"cubicBezier":return Q(Re,t);case"steps":return Q(ze,t);default:return Q(a,t)}}function xe(e){try{var r=document.querySelectorAll(e);return r}catch{return}}function $(e,r){for(var n=e.length,a=arguments.length>=2?arguments[1]:void 0,t=[],o=0;o<n;o++)if(o in e){var u=e[o];r.call(a,u,o,e)&&t.push(u)}return t}function N(e){return e.reduce(function(r,n){return r.concat(l.arr(n)?N(n):n)},[])}function le(e){return l.arr(e)?e:(l.str(e)&&(e=xe(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function X(e,r){return e.some(function(n){return n===r})}function ee(e){var r={};for(var n in e)r[n]=e[n];return r}function _(e,r){var n=ee(e);for(var a in e)n[a]=r.hasOwnProperty(a)?r[a]:e[a];return n}function U(e,r){var n=ee(e);for(var a in r)n[a]=l.und(e[a])?r[a]:e[a];return n}function He(e){var r=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);return r?"rgba("+r[1]+",1)":e}function $e(e){var r=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,n=e.replace(r,function(c,i,y,s){return i+i+y+y+s+s}),a=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n),t=parseInt(a[1],16),o=parseInt(a[2],16),u=parseInt(a[3],16);return"rgba("+t+","+o+","+u+",1)"}function Ne(e){var r=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),n=parseInt(r[1],10)/360,a=parseInt(r[2],10)/100,t=parseInt(r[3],10)/100,o=r[4]||1;function u(g,x,m){return m<0&&(m+=1),m>1&&(m-=1),m<1/6?g+(x-g)*6*m:m<1/2?x:m<2/3?g+(x-g)*(2/3-m)*6:g}var c,i,y;if(a==0)c=i=y=t;else{var s=t<.5?t*(1+a):t+a-t*a,f=2*t-s;c=u(f,s,n+1/3),i=u(f,s,n),y=u(f,s,n-1/3)}return"rgba("+c*255+","+i*255+","+y*255+","+o+")"}function Ue(e){if(l.rgb(e))return He(e);if(l.hex(e))return $e(e);if(l.hsl(e))return Ne(e)}function L(e){var r=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(r)return r[1]}function We(e){if(z(e,"translate")||e==="perspective")return"px";if(z(e,"rotate")||z(e,"skew"))return"deg"}function J(e,r){return l.fnc(e)?e(r.target,r.id,r.total):e}function I(e,r){return e.getAttribute(r)}function re(e,r,n){var a=L(r);if(X([n,"deg","rad","turn"],a))return r;var t=H.CSS[r+n];if(!l.und(t))return t;var o=100,u=document.createElement(e.tagName),c=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;c.appendChild(u),u.style.position="absolute",u.style.width=o+n;var i=o/u.offsetWidth;c.removeChild(u);var y=i*parseFloat(r);return H.CSS[r+n]=y,y}function ke(e,r,n){if(r in e.style){var a=r.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),t=e.style[r]||getComputedStyle(e).getPropertyValue(a)||"0";return n?re(e,t,n):t}}function te(e,r){if(l.dom(e)&&!l.inp(e)&&(!l.nil(I(e,r))||l.svg(e)&&e[r]))return"attribute";if(l.dom(e)&&X(Ve,r))return"transform";if(l.dom(e)&&r!=="transform"&&ke(e,r))return"css";if(e[r]!=null)return"object"}function we(e){if(l.dom(e)){for(var r=e.style.transform||"",n=/(\w+)\(([^)]*)\)/g,a=new Map,t;t=n.exec(r);)a.set(t[1],t[2]);return a}}function Ze(e,r,n,a){var t=z(r,"scale")?1:0+We(r),o=we(e).get(r)||t;return n&&(n.transforms.list.set(r,o),n.transforms.last=r),a?re(e,o,a):o}function ne(e,r,n,a){switch(te(e,r)){case"transform":return Ze(e,r,a,n);case"css":return ke(e,r,n);case"attribute":return I(e,r);default:return e[r]||0}}function ae(e,r){var n=/^(\*=|\+=|-=)/.exec(e);if(!n)return e;var a=L(e)||0,t=parseFloat(r),o=parseFloat(e.replace(n[0],""));switch(n[0][0]){case"+":return t+o+a;case"-":return t-o+a;case"*":return t*o+a}}function Me(e,r){if(l.col(e))return Ue(e);if(/\s/g.test(e))return e;var n=L(e),a=n?e.substr(0,e.length-n.length):e;return r?a+r:a}function ie(e,r){return Math.sqrt(Math.pow(r.x-e.x,2)+Math.pow(r.y-e.y,2))}function Ke(e){return Math.PI*2*I(e,"r")}function Qe(e){return I(e,"width")*2+I(e,"height")*2}function _e(e){return ie({x:I(e,"x1"),y:I(e,"y1")},{x:I(e,"x2"),y:I(e,"y2")})}function Se(e){for(var r=e.points,n=0,a,t=0;t<r.numberOfItems;t++){var o=r.getItem(t);t>0&&(n+=ie(a,o)),a=o}return n}function Je(e){var r=e.points;return Se(e)+ie(r.getItem(r.numberOfItems-1),r.getItem(0))}function Te(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return Ke(e);case"rect":return Qe(e);case"line":return _e(e);case"polyline":return Se(e);case"polygon":return Je(e)}}function Ye(e){var r=Te(e);return e.setAttribute("stroke-dasharray",r),r}function Ge(e){for(var r=e.parentNode;l.svg(r)&&l.svg(r.parentNode);)r=r.parentNode;return r}function Ce(e,r){var n=r||{},a=n.el||Ge(e),t=a.getBoundingClientRect(),o=I(a,"viewBox"),u=t.width,c=t.height,i=n.viewBox||(o?o.split(" "):[0,0,u,c]);return{el:a,viewBox:i,x:i[0]/1,y:i[1]/1,w:u,h:c,vW:i[2],vH:i[3]}}function Xe(e,r){var n=l.str(e)?xe(e)[0]:e,a=r||100;return function(t){return{property:t,el:n,svg:Ce(n),totalLength:Te(n)*(a/100)}}}function er(e,r,n){function a(s){s===void 0&&(s=0);var f=r+s>=1?r+s:0;return e.el.getPointAtLength(f)}var t=Ce(e.el,e.svg),o=a(),u=a(-1),c=a(1),i=n?1:t.w/t.vW,y=n?1:t.h/t.vH;switch(e.property){case"x":return(o.x-t.x)*i;case"y":return(o.y-t.y)*y;case"angle":return Math.atan2(c.y-u.y,c.x-u.x)*180/Math.PI}}function de(e,r){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,a=Me(l.pth(e)?e.totalLength:e,r)+"";return{original:a,numbers:a.match(n)?a.match(n).map(Number):[0],strings:l.str(e)||r?a.split(n):[]}}function oe(e){var r=e?N(l.arr(e)?e.map(le):le(e)):[];return $(r,function(n,a,t){return t.indexOf(n)===a})}function Pe(e){var r=oe(e);return r.map(function(n,a){return{target:n,id:a,total:r.length,transforms:{list:we(n)}}})}function rr(e,r){var n=ee(r);if(/^spring/.test(n.easing)&&(n.duration=pe(n.easing)),l.arr(e)){var a=e.length,t=a===2&&!l.obj(e[0]);t?e={value:e}:l.fnc(r.duration)||(n.duration=r.duration/a)}var o=l.arr(e)?e:[e];return o.map(function(u,c){var i=l.obj(u)&&!l.pth(u)?u:{value:u};return l.und(i.delay)&&(i.delay=c?0:r.delay),l.und(i.endDelay)&&(i.endDelay=c===o.length-1?r.endDelay:0),i}).map(function(u){return U(u,n)})}function tr(e){for(var r=$(N(e.map(function(o){return Object.keys(o)})),function(o){return l.key(o)}).reduce(function(o,u){return o.indexOf(u)<0&&o.push(u),o},[]),n={},a=function(o){var u=r[o];n[u]=e.map(function(c){var i={};for(var y in c)l.key(y)?y==u&&(i.value=c[y]):i[y]=c[y];return i})},t=0;t<r.length;t++)a(t);return n}function nr(e,r){var n=[],a=r.keyframes;a&&(r=U(tr(a),r));for(var t in r)l.key(t)&&n.push({name:t,tweens:rr(r[t],e)});return n}function ar(e,r){var n={};for(var a in e){var t=J(e[a],r);l.arr(t)&&(t=t.map(function(o){return J(o,r)}),t.length===1&&(t=t[0])),n[a]=t}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}function ir(e,r){var n;return e.tweens.map(function(a){var t=ar(a,r),o=t.value,u=l.arr(o)?o[1]:o,c=L(u),i=ne(r.target,e.name,c,r),y=n?n.to.original:i,s=l.arr(o)?o[0]:y,f=L(s)||L(i),g=c||f;return l.und(u)&&(u=y),t.from=de(s,g),t.to=de(ae(u,s),g),t.start=n?n.end:0,t.end=t.start+t.delay+t.duration+t.endDelay,t.easing=G(t.easing,t.duration),t.isPath=l.pth(o),t.isPathTargetInsideSVG=t.isPath&&l.svg(r.target),t.isColor=l.col(t.from.original),t.isColor&&(t.round=1),n=t,t})}var Ie={css:function(e,r,n){return e.style[r]=n},attribute:function(e,r,n){return e.setAttribute(r,n)},object:function(e,r,n){return e[r]=n},transform:function(e,r,n,a,t){if(a.list.set(r,n),r===a.last||t){var o="";a.list.forEach(function(u,c){o+=c+"("+u+") "}),e.style.transform=o}}};function Le(e,r){var n=Pe(e);n.forEach(function(a){for(var t in r){var o=J(r[t],a),u=a.target,c=L(o),i=ne(u,t,c,a),y=c||L(i),s=ae(Me(o,y),i),f=te(u,t);Ie[f](u,t,s,a.transforms,!0)}})}function or(e,r){var n=te(e.target,r.name);if(n){var a=ir(r,e),t=a[a.length-1];return{type:n,property:r.name,animatable:e,tweens:a,duration:t.end,delay:a[0].delay,endDelay:t.endDelay}}}function ur(e,r){return $(N(e.map(function(n){return r.map(function(a){return or(n,a)})})),function(n){return!l.und(n)})}function Ee(e,r){var n=e.length,a=function(o){return o.timelineOffset?o.timelineOffset:0},t={};return t.duration=n?Math.max.apply(Math,e.map(function(o){return a(o)+o.duration})):r.duration,t.delay=n?Math.min.apply(Math,e.map(function(o){return a(o)+o.delay})):r.delay,t.endDelay=n?t.duration-Math.max.apply(Math,e.map(function(o){return a(o)+o.duration-o.endDelay})):r.endDelay,t}var ve=0;function cr(e){var r=_(ye,e),n=_(Y,e),a=nr(n,e),t=Pe(e.targets),o=ur(t,a),u=Ee(o,n),c=ve;return ve++,U(r,{id:c,children:[],animatables:t,animations:o,duration:u.duration,delay:u.delay,endDelay:u.endDelay})}var C=[],Oe=function(){var e;function r(){!e&&(!ge()||!k.suspendWhenDocumentHidden)&&C.length>0&&(e=requestAnimationFrame(n))}function n(t){for(var o=C.length,u=0;u<o;){var c=C[u];c.paused?(C.splice(u,1),o--):(c.tick(t),u++)}e=u>0?requestAnimationFrame(n):void 0}function a(){k.suspendWhenDocumentHidden&&(ge()?e=cancelAnimationFrame(e):(C.forEach(function(t){return t._onDocumentVisibility()}),Oe()))}return typeof document<"u"&&document.addEventListener("visibilitychange",a),r}();function ge(){return!!document&&document.hidden}function k(e){e===void 0&&(e={});var r=0,n=0,a=0,t,o=0,u=null;function c(v){var h=window.Promise&&new Promise(function(S){return u=S});return v.finished=h,h}var i=cr(e);c(i);function y(){var v=i.direction;v!=="alternate"&&(i.direction=v!=="normal"?"normal":"reverse"),i.reversed=!i.reversed,t.forEach(function(h){return h.reversed=i.reversed})}function s(v){return i.reversed?i.duration-v:v}function f(){r=0,n=s(i.currentTime)*(1/k.speed)}function g(v,h){h&&h.seek(v-h.timelineOffset)}function x(v){if(i.reversePlayback)for(var S=o;S--;)g(v,t[S]);else for(var h=0;h<o;h++)g(v,t[h])}function m(v){for(var h=0,S=i.animations,E=S.length;h<E;){var w=S[h],O=w.animatable,B=w.tweens,D=B.length-1,M=B[D];D&&(M=$(B,function(Be){return v<Be.end})[0]||M);for(var q=P(v-M.start-M.delay,0,M.duration)/M.duration,R=isNaN(q)?1:M.easing(q),T=M.to.strings,W=M.round,Z=[],Ae=M.to.numbers.length,A=void 0,F=0;F<Ae;F++){var j=void 0,ue=M.to.numbers[F],ce=M.from.numbers[F]||0;M.isPath?j=er(M.value,R*ue,M.isPathTargetInsideSVG):j=ce+R*(ue-ce),W&&(M.isColor&&F>2||(j=Math.round(j*W)/W)),Z.push(j)}var se=T.length;if(!se)A=Z[0];else{A=T[0];for(var V=0;V<se;V++){T[V];var fe=T[V+1],K=Z[V];isNaN(K)||(fe?A+=K+fe:A+=K+" ")}}Ie[w.type](O.target,w.property,A,O.transforms),w.currentValue=A,h++}}function d(v){i[v]&&!i.passThrough&&i[v](i)}function b(){i.remaining&&i.remaining!==!0&&i.remaining--}function p(v){var h=i.duration,S=i.delay,E=h-i.endDelay,w=s(v);i.progress=P(w/h*100,0,100),i.reversePlayback=w<i.currentTime,t&&x(w),!i.began&&i.currentTime>0&&(i.began=!0,d("begin")),!i.loopBegan&&i.currentTime>0&&(i.loopBegan=!0,d("loopBegin")),w<=S&&i.currentTime!==0&&m(0),(w>=E&&i.currentTime!==h||!h)&&m(h),w>S&&w<E?(i.changeBegan||(i.changeBegan=!0,i.changeCompleted=!1,d("changeBegin")),d("change"),m(w)):i.changeBegan&&(i.changeCompleted=!0,i.changeBegan=!1,d("changeComplete")),i.currentTime=P(w,0,h),i.began&&d("update"),v>=h&&(n=0,b(),i.remaining?(r=a,d("loopComplete"),i.loopBegan=!1,i.direction==="alternate"&&y()):(i.paused=!0,i.completed||(i.completed=!0,d("loopComplete"),d("complete"),!i.passThrough&&"Promise"in window&&(u(),c(i)))))}return i.reset=function(){var v=i.direction;i.passThrough=!1,i.currentTime=0,i.progress=0,i.paused=!0,i.began=!1,i.loopBegan=!1,i.changeBegan=!1,i.completed=!1,i.changeCompleted=!1,i.reversePlayback=!1,i.reversed=v==="reverse",i.remaining=i.loop,t=i.children,o=t.length;for(var h=o;h--;)i.children[h].reset();(i.reversed&&i.loop!==!0||v==="alternate"&&i.loop===1)&&i.remaining++,m(i.reversed?i.duration:0)},i._onDocumentVisibility=f,i.set=function(v,h){return Le(v,h),i},i.tick=function(v){a=v,r||(r=a),p((a+(n-r))*k.speed)},i.seek=function(v){p(s(v))},i.pause=function(){i.paused=!0,f()},i.play=function(){i.paused&&(i.completed&&i.reset(),i.paused=!1,C.push(i),f(),Oe())},i.reverse=function(){y(),i.completed=!i.reversed,f()},i.restart=function(){i.reset(),i.play()},i.remove=function(v){var h=oe(v);De(h,i)},i.reset(),i.autoplay&&i.play(),i}function he(e,r){for(var n=r.length;n--;)X(e,r[n].animatable.target)&&r.splice(n,1)}function De(e,r){var n=r.animations,a=r.children;he(e,n);for(var t=a.length;t--;){var o=a[t],u=o.animations;he(e,u),!u.length&&!o.children.length&&a.splice(t,1)}!n.length&&!a.length&&r.pause()}function sr(e){for(var r=oe(e),n=C.length;n--;){var a=C[n];De(r,a)}}function fr(e,r){r===void 0&&(r={});var n=r.direction||"normal",a=r.easing?G(r.easing):null,t=r.grid,o=r.axis,u=r.from||0,c=u==="first",i=u==="center",y=u==="last",s=l.arr(e),f=parseFloat(s?e[0]:e),g=s?parseFloat(e[1]):0,x=L(s?e[1]:e)||0,m=r.start||0+(s?f:0),d=[],b=0;return function(p,v,h){if(c&&(u=0),i&&(u=(h-1)/2),y&&(u=h-1),!d.length){for(var S=0;S<h;S++){if(!t)d.push(Math.abs(u-S));else{var E=i?(t[0]-1)/2:u%t[0],w=i?(t[1]-1)/2:Math.floor(u/t[0]),O=S%t[0],B=Math.floor(S/t[0]),D=E-O,M=w-B,q=Math.sqrt(D*D+M*M);o==="x"&&(q=-D),o==="y"&&(q=-M),d.push(q)}b=Math.max.apply(Math,d)}a&&(d=d.map(function(T){return a(T/b)*b})),n==="reverse"&&(d=d.map(function(T){return o?T<0?T*-1:-T:Math.abs(b-T)}))}var R=s?(g-f)/b:f;return m+R*(Math.round(d[v]*100)/100)+x}}function lr(e){e===void 0&&(e={});var r=k(e);return r.duration=0,r.add=function(n,a){var t=C.indexOf(r),o=r.children;t>-1&&C.splice(t,1);function u(g){g.passThrough=!0}for(var c=0;c<o.length;c++)u(o[c]);var i=U(n,_(Y,e));i.targets=i.targets||e.targets;var y=r.duration;i.autoplay=!1,i.direction=r.direction,i.timelineOffset=l.und(a)?y:ae(a,y),u(r),r.seek(i.timelineOffset);var s=k(i);u(s),o.push(s);var f=Ee(o,e);return r.delay=f.delay,r.endDelay=f.endDelay,r.duration=f.duration,r.seek(0),r.reset(),r.autoplay&&r.play(),r},r}k.version="3.2.1";k.speed=1;k.suspendWhenDocumentHidden=!0;k.running=C;k.remove=sr;k.get=ne;k.set=Le;k.convertPx=re;k.path=Xe;k.setDashoffset=Ye;k.stagger=fr;k.timeline=lr;k.easing=G;k.penner=be;k.random=function(e,r){return Math.floor(Math.random()*(r-e+1))+e};qe.exports=k});export default dr();
