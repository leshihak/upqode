!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);window.openBurger=function(){let e=document.getElementById("myTopnav");"topnav"===e.className?e.className+=" responsive":e.className="topnav"};const o=document.querySelector(".comeback");o.addEventListener("click",()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0}),window.onscroll=function(){document.body.scrollTop>20||document.documentElement.scrollTop>20?o.style.display="block":o.style.display="none"};let i=document.createElement("script");i.src="https://www.youtube.com/iframe_api";let a=document.getElementsByTagName("script")[0];function s(e){e.target.playVideo(),e.target.setVolume(10)}a.parentNode.insertBefore(i,a),window.onYouTubeIframeAPIReady=function(){let e;e=new YT.Player("player",{width:1920,height:720,videoId:"a1aCwrR_DNU",playerVars:{playlist:"a1aCwrR_DNU",autoplay:1,autohide:1,disablekb:1,controls:0,showinfo:0,modestbranding:1,loop:1,fs:0,autohide:0,rel:0,enablejsapi:1},suggestedQuality:"hd1080",events:{onReady:s}})};const r=document.querySelector(".bellNext"),l=document.querySelector(".benNext"),c=document.querySelector(".juliaPrev"),d=document.querySelector(".bellPrev"),p=document.querySelector(".julia"),m=document.querySelector(".bell"),u=document.querySelector(".roberts-block"),x=document.querySelector(".julia-block"),f=document.querySelector(".bell-block"),h=document.querySelector(".roberts"),g=document.querySelector(".julia-img"),v=document.querySelector(".bell-img"),w=document.querySelector(".roberts-img");r.addEventListener("click",()=>{p.classList.remove("flex"),p.classList.add("unset"),x.classList.add("hide"),x.classList.remove("show"),f.classList.add("show"),f.classList.remove("hide"),m.classList.remove("unset"),m.classList.add("flex"),g.classList.remove("show"),g.classList.add("second-img"),v.classList.add("show"),v.classList.remove("second-img")}),c.addEventListener("click",()=>{p.classList.add("flex"),p.classList.remove("unset"),x.classList.remove("hide"),x.classList.add("show"),f.classList.remove("show"),f.classList.add("hide"),m.classList.add("unset"),m.classList.remove("flex"),g.classList.add("show"),g.classList.remove("second-img"),v.classList.remove("show"),v.classList.add("second-img")}),l.addEventListener("click",()=>{m.classList.remove("flex"),m.classList.add("unset"),f.classList.add("hide"),f.classList.remove("show"),u.classList.add("show"),u.classList.remove("hide"),h.classList.remove("unset"),h.classList.add("flex"),v.classList.remove("show"),v.classList.add("third-img"),w.classList.add("show"),w.classList.remove("third-img")}),d.addEventListener("click",()=>{m.classList.add("flex"),m.classList.remove("unset"),f.classList.remove("hide"),f.classList.add("show"),u.classList.remove("show"),u.classList.add("hide"),h.classList.add("unset"),h.classList.remove("flex"),v.classList.add("show"),v.classList.remove("third-img"),w.classList.remove("show"),w.classList.add("third-img")});const y=document.querySelector(".newYork"),b=document.querySelector(".losAngeles"),k=document.querySelector(".detroit"),L=document.querySelector(".boston"),S=document.querySelector(".current-address"),j=document.querySelector(".current-address-map"),T=document.querySelector(".address-map-city");window.initMap=function(){let e={lat:40.712772,lng:-74.00597},t=new google.maps.Map(document.getElementById("map"),{zoom:13,center:e});new google.maps.Marker({position:e,map:t})},y.addEventListener("click",(function(){let e={lat:40.712772,lng:-74.00597},t=new google.maps.Map(document.getElementById("map"),{zoom:13,center:e});new google.maps.Marker({position:e,map:t});S.innerText="2005 Stokes Isle Apt. 896, Venaville, New York 10010",j.innerText="2005 Stokes Isle Apt. 896, Venaville, New York 10010",T.innerText="New York"})),k.addEventListener("click",(function(){let e={lat:42.331429,lng:-83.045753},t=new google.maps.Map(document.getElementById("map"),{zoom:13,center:e});new google.maps.Marker({position:e,map:t});S.innerText="2005 Stokes Isle Apt. 896, Venaville, Detroit 10010",j.innerText="2005 Stokes Isle Apt. 896, Venaville, Detroit 10010",T.innerText="Detroit"})),b.addEventListener("click",(function(){let e={lat:34.052235,lng:-118.243683},t=new google.maps.Map(document.getElementById("map"),{zoom:13,center:e});new google.maps.Marker({position:e,map:t});S.innerText="2005 Stokes Isle Apt. 896, Venaville, Los Angeles 10010",j.innerText="2005 Stokes Isle Apt. 896, Venaville, Los Angeles 10010",T.innerText="Los Angeles"})),L.addEventListener("click",(function(){let e={lat:42.361145,lng:-71.057083},t=new google.maps.Map(document.getElementById("map"),{zoom:13,center:e});new google.maps.Marker({position:e,map:t});S.innerText="2005 Stokes Isle Apt. 896, Venaville, Boston 10010",j.innerText="2005 Stokes Isle Apt. 896, Venaville, Boston 10010",T.innerText="Boston"}))},function(e,t,n){var o=n(2),i=n(3);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1};o(i,a);e.exports=i.locals||{}},function(e,t,n){"use strict";var o,i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),s=[];function r(e){for(var t=-1,n=0;n<s.length;n++)if(s[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},o=[],i=0;i<e.length;i++){var a=e[i],l=t.base?a[0]+t.base:a[0],c=n[l]||0,d="".concat(l," ").concat(c);n[l]=c+1;var p=r(d),m={css:a[1],media:a[2],sourceMap:a[3]};-1!==p?(s[p].references++,s[p].updater(m)):s.push({identifier:d,updater:h(m,t),references:1}),o.push(d)}return o}function c(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var s=a(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(t)}return t}var d,p=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function m(e,t,n,o){var i=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=p(t,i);else{var a=document.createTextNode(i),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(a,s[t]):e.appendChild(a)}}function u(e,t,n){var o=n.css,i=n.media,a=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),a&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var x=null,f=0;function h(e,t){var n,o,i;if(t.singleton){var a=f++;n=x||(x=c(t)),o=m.bind(null,n,a,!1),i=m.bind(null,n,a,!0)}else n=c(t),o=u.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var i=r(n[o]);s[i].references--}for(var a=l(e,t),c=0;c<n.length;c++){var d=r(n[c]);0===s[d].references&&(s[d].updater(),s.splice(d,1))}n=a}}}},function(e,t,n){(t=n(4)(!1)).push([e.i,'.flex-center,.topnav,.content,.employee-carousel_block,.footer-block{display:flex;align-items:center}body{padding:0;margin:0 auto !important;width:100%;max-width:1920px;font-family:"Poppins",sans-serif !important}html{scroll-behavior:smooth}.container{width:100%;max-width:1200px}.comeback{width:40px;cursor:pointer;position:fixed;right:20px;bottom:20px}.topnav{width:100%;max-width:1920px;font-size:14px;padding-bottom:10px;z-index:1;position:absolute;margin:0 auto;margin-top:30px;justify-content:space-around}.header-links{max-width:430px;width:100%;display:flex;justify-content:space-evenly}.menu-open{width:30px;height:30px}.nav-links{font-weight:600;font-size:14px;line-height:24px;letter-spacing:0.2px;color:#fff;text-decoration:none}.nav-links:hover{color:#fff;text-decoration:underline}.logo-header{font-weight:bold;font-size:28px;line-height:32px;color:#fff;margin-left:60px}.topnav .icon{display:none}.video-background iframe{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.content{width:100%;max-width:1200px;padding:20px;height:100vh;justify-content:center}.carousel{color:#fff;text-align:center;height:60vh}span{font-size:6vw;line-height:8vw}p{font-size:2vw;line-height:3vw;letter-spacing:0.2px}.banner-btn{background:#00a031;border-radius:27px;max-width:172px;width:100%;height:54px;border:none;font-size:18px;line-height:22px;letter-spacing:0.1px;color:#fff;margin-top:54px;cursor:pointer}.banner-btn:hover{background:#02922d}.banner-btn:focus{outline:none}.team{margin-top:200px;position:relative}.employee{max-width:1165px;width:100%;display:flex;justify-content:space-between}.employee-details{max-width:550px;width:100%}.employee_name{font-weight:800;font-size:38px;line-height:51px;letter-spacing:0.4px;color:#00a031}.employee_job{margin-top:10px;font-size:16px;line-height:16px;letter-spacing:3px;text-transform:uppercase;color:#6c6c6c}.employee_description{margin-top:40px;font-weight:normal;font-size:16px;line-height:24px;letter-spacing:0.2px;color:#6c6c6c}.employee_contacts{display:flex}.employee-network{margin:60px 30px;font-size:16px;line-height:16px;letter-spacing:3px;text-transform:uppercase;color:#6c6c6c;cursor:pointer}.employee-network:hover{text-decoration:underline}.employee-carousel{display:flex;justify-content:space-between}.employee-carousel_block{cursor:pointer}.carousel-direction{font-size:16px;line-height:16px;letter-spacing:1px;text-transform:uppercase;color:#00a031}.carousel-block_btns{margin:0 20px}.team-direction-name{font-weight:600;font-size:18px;line-height:28px;letter-spacing:0.2px;color:#00a031}.arrow-team{height:8px;width:28px}.team-img{max-width:400px;width:100%;height:530px;object-fit:cover}.team-img-next{width:90px;height:130px;object-fit:cover}.hide{display:none;transition:linear 0.2s}.show{transition:linear 0.2s;display:block;top:0;right:0;opacity:1;z-index:1}.flex{display:flex;transition:linear 0.2s}.unset{display:unset;transition:linear 0.2s}.second-img{top:-25px;right:-25px;opacity:0.5;position:absolute;transition:linear 0.2s}.third-img{top:-50px;right:-50px;opacity:0.2;position:absolute;transition:linear 0.2s}.contact{position:relative;margin:200px 0}.contact-block{display:flex}.contact-address-map{width:100%;max-width:365px}.contact-address-cities-block{display:flex;justify-content:space-around;width:100%;max-width:330px;padding:25px;cursor:pointer}.contact-address-cities-block:hover{box-shadow:20px 20px 50px rgba(0,0,0,0.0758039);transition:linear 0.5s}.contact-address_title{font-weight:bold;font-size:52px;line-height:60px;width:100%;max-width:330px;color:#00a031}.contact-city{font-size:18px;line-height:28px;letter-spacing:0.2px;color:#00a031}.current-address,.current-address-map{width:100%;max-width:300px;margin-top:12px}.contact-address,.current-address{font-weight:normal;font-size:16px;line-height:24px;letter-spacing:0.2px;color:#6c6c6c}.company-address{display:flex;flex-direction:column;margin-left:20px}#map{position:absolute;height:670px;width:100%;max-width:750px}.address-map-block{position:absolute;right:-15%;bottom:15%;background-color:#fff;padding:30px;box-shadow:0px 40px 40px rgba(0,0,0,0.0758039)}.address-map-city{font-weight:800;font-size:38px;line-height:51px;letter-spacing:0.4px;color:#1c201e}.address-map_contacts{margin-top:30px}.address-map_header{display:flex}.address-map_title{margin-left:15px;font-weight:600;font-size:18px;line-height:28px;letter-spacing:0.2px;color:#1c201e}.address-map_subtitle{font-weight:normal;font-size:14px;line-height:24px;letter-spacing:0.2px;color:#999}.footer-block{width:100%;max-width:1920px;height:344px;background:#222;flex-direction:column;justify-content:space-evenly}.footer-nav{display:flex;justify-content:space-between;width:100%;max-width:490px}.footer-nav_link{font-size:16px;line-height:16px;letter-spacing:3px;text-transform:uppercase;color:#777;cursor:pointer}.footer-nav_link:hover{text-decoration:underline;color:#777}.footer-rights{font-size:14px;line-height:24px;letter-spacing:0.2px;color:#777}.logo-footer{font-weight:bold;font-size:46px;line-height:32px;color:#fff}@media (max-width: 1450px){.contact{display:flex;flex-direction:column}.address-map-block{position:unset;display:flex;flex-direction:column;align-items:center;text-align:center}}@media (max-width: 1200px){#map{max-width:600px;position:absolute}}@media (max-width: 1040px){.employee{flex-direction:column;align-items:center}.second-img,.third-img{display:none}.unset{position:absolute}#map{max-width:500px}.team-img{max-width:900px;margin-top:30px}.show{display:flex;flex-direction:column;align-items:center}}@media (max-width: 1000px){#map{max-width:400px}}@media (max-width: 860px){#map{max-width:300px;margin:0 auto}}@media (max-width: 770px){.contact-block{flex-direction:column}#map{position:relative;max-width:500px}.contact-address-map{margin:0 auto;text-align:center}}@media screen and (max-width: 600px){.topnav a:not(:first-child){display:none}.topnav a.icon{position:absolute;display:block;top:5%;right:10%}.topnav.responsive{display:block;background-color:black}.topnav.responsive a.icon{position:absolute;right:10%;top:3%}.topnav.responsive a{float:none;display:block;text-align:center}.nav-links{display:none}.header-links{margin:0 auto}section{height:none}.address-map-block{width:100%;height:fit-content;margin-top:10%;position:unset;right:0;bottom:0}.footer-nav{flex-direction:column;align-items:center}.employee_contacts{display:flex;flex-direction:column;align-items:center;margin:5px}}@media (max-width: 360px){.main-nav{display:flex;width:100%;margin:0px;padding:0}.active{display:block}}\n',""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=(s=o,r=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(l," */")),a=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([i]).join("\n")}var s,r,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(o)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(i[s]=!0)}for(var r=0;r<e.length;r++){var l=[].concat(e[r]);o&&i[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}}]);