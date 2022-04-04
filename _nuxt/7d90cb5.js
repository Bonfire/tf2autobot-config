/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{231:function(t,e,r){var content=r(234);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(70).default)("4f75fab4",content,!0,{sourceMap:!1})},234:function(t,e,r){var o=r(69)(!1);o.push([t.i,'/*! Hint.css - v2.7.0 - 2021-10-01\n* https://kushagra.dev/lab/hint/\n* Copyright (c) 2021 Kushagra Gour */[class*=hint--]{position:relative;display:inline-block}[class*=hint--]:after,[class*=hint--]:before{position:absolute;transform:translateZ(0);visibility:hidden;opacity:0;z-index:1000000;pointer-events:none;transition:.3s ease;transition-delay:0ms}[class*=hint--]:hover:after,[class*=hint--]:hover:before{visibility:visible;opacity:1;transition-delay:.1s}[class*=hint--]:before{content:"";position:absolute;background:transparent;border:6px solid transparent;z-index:1000001}[class*=hint--]:after{background:#383838;color:#fff;padding:8px 10px;font-size:12px;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;line-height:12px;white-space:nowrap}[class*=hint--][aria-label]:after{content:attr(aria-label)}[class*=hint--][data-hint]:after{content:attr(data-hint)}[aria-label=""]:after,[aria-label=""]:before,[data-hint=""]:after,[data-hint=""]:before{display:none!important}.hint--top-left:before,.hint--top-right:before,.hint--top:before{border-top-color:#383838}.hint--bottom-left:before,.hint--bottom-right:before,.hint--bottom:before{border-bottom-color:#383838}.hint--left:before{border-left-color:#383838}.hint--right:before{border-right-color:#383838}.hint--top:before{margin-bottom:-11px}.hint--top:after,.hint--top:before{bottom:100%;left:50%}.hint--top:before{left:calc(50% - 6px)}.hint--top:after{transform:translateX(-50%)}.hint--top:hover:before{transform:translateY(-8px)}.hint--top:hover:after{transform:translateX(-50%) translateY(-8px)}.hint--bottom:before{margin-top:-11px}.hint--bottom:after,.hint--bottom:before{top:100%;left:50%}.hint--bottom:before{left:calc(50% - 6px)}.hint--bottom:after{transform:translateX(-50%)}.hint--bottom:hover:before{transform:translateY(8px)}.hint--bottom:hover:after{transform:translateX(-50%) translateY(8px)}.hint--right:before{margin-left:-11px;margin-bottom:-6px}.hint--right:after{margin-bottom:-14px}.hint--right:after,.hint--right:before{left:100%;bottom:50%}.hint--right:hover:after,.hint--right:hover:before{transform:translateX(8px)}.hint--left:before{margin-right:-11px;margin-bottom:-6px}.hint--left:after{margin-bottom:-14px}.hint--left:after,.hint--left:before{right:100%;bottom:50%}.hint--left:hover:after,.hint--left:hover:before{transform:translateX(-8px)}.hint--top-left:before{margin-bottom:-11px}.hint--top-left:after,.hint--top-left:before{bottom:100%;left:50%}.hint--top-left:before{left:calc(50% - 6px)}.hint--top-left:after{transform:translateX(-100%);margin-left:12px}.hint--top-left:hover:before{transform:translateY(-8px)}.hint--top-left:hover:after{transform:translateX(-100%) translateY(-8px)}.hint--top-right:before{margin-bottom:-11px}.hint--top-right:after,.hint--top-right:before{bottom:100%;left:50%}.hint--top-right:before{left:calc(50% - 6px)}.hint--top-right:after{transform:translateX(0);margin-left:-12px}.hint--top-right:hover:after,.hint--top-right:hover:before{transform:translateY(-8px)}.hint--bottom-left:before{margin-top:-11px}.hint--bottom-left:after,.hint--bottom-left:before{top:100%;left:50%}.hint--bottom-left:before{left:calc(50% - 6px)}.hint--bottom-left:after{transform:translateX(-100%);margin-left:12px}.hint--bottom-left:hover:before{transform:translateY(8px)}.hint--bottom-left:hover:after{transform:translateX(-100%) translateY(8px)}.hint--bottom-right:before{margin-top:-11px}.hint--bottom-right:after,.hint--bottom-right:before{top:100%;left:50%}.hint--bottom-right:before{left:calc(50% - 6px)}.hint--bottom-right:after{transform:translateX(0);margin-left:-12px}.hint--bottom-right:hover:after,.hint--bottom-right:hover:before{transform:translateY(8px)}.hint--large:after,.hint--medium:after,.hint--small:after{white-space:normal;line-height:1.4em;word-wrap:break-word}.hint--small:after{width:80px}.hint--medium:after{width:150px}.hint--large:after{width:300px}[class*=hint--]:after{text-shadow:0 -1px 0 #000;box-shadow:4px 4px 8px rgba(0,0,0,.3)}.hint--error:after{background-color:#b34e4d;text-shadow:0 -1px 0 #592726}.hint--error.hint--top-left:before,.hint--error.hint--top-right:before,.hint--error.hint--top:before{border-top-color:#b34e4d}.hint--error.hint--bottom-left:before,.hint--error.hint--bottom-right:before,.hint--error.hint--bottom:before{border-bottom-color:#b34e4d}.hint--error.hint--left:before{border-left-color:#b34e4d}.hint--error.hint--right:before{border-right-color:#b34e4d}.hint--warning:after{background-color:#c09854;text-shadow:0 -1px 0 #6c5328}.hint--warning.hint--top-left:before,.hint--warning.hint--top-right:before,.hint--warning.hint--top:before{border-top-color:#c09854}.hint--warning.hint--bottom-left:before,.hint--warning.hint--bottom-right:before,.hint--warning.hint--bottom:before{border-bottom-color:#c09854}.hint--warning.hint--left:before{border-left-color:#c09854}.hint--warning.hint--right:before{border-right-color:#c09854}.hint--info:after{background-color:#3986ac;text-shadow:0 -1px 0 #1a3c4d}.hint--info.hint--top-left:before,.hint--info.hint--top-right:before,.hint--info.hint--top:before{border-top-color:#3986ac}.hint--info.hint--bottom-left:before,.hint--info.hint--bottom-right:before,.hint--info.hint--bottom:before{border-bottom-color:#3986ac}.hint--info.hint--left:before{border-left-color:#3986ac}.hint--info.hint--right:before{border-right-color:#3986ac}.hint--success:after{background-color:#458746;text-shadow:0 -1px 0 #1a321a}.hint--success.hint--top-left:before,.hint--success.hint--top-right:before,.hint--success.hint--top:before{border-top-color:#458746}.hint--success.hint--bottom-left:before,.hint--success.hint--bottom-right:before,.hint--success.hint--bottom:before{border-bottom-color:#458746}.hint--success.hint--left:before{border-left-color:#458746}.hint--success.hint--right:before{border-right-color:#458746}.hint--always:after,.hint--always:before{opacity:1;visibility:visible}.hint--always.hint--top:before{transform:translateY(-8px)}.hint--always.hint--top:after{transform:translateX(-50%) translateY(-8px)}.hint--always.hint--top-left:before{transform:translateY(-8px)}.hint--always.hint--top-left:after{transform:translateX(-100%) translateY(-8px)}.hint--always.hint--top-right:after,.hint--always.hint--top-right:before{transform:translateY(-8px)}.hint--always.hint--bottom:before{transform:translateY(8px)}.hint--always.hint--bottom:after{transform:translateX(-50%) translateY(8px)}.hint--always.hint--bottom-left:before{transform:translateY(8px)}.hint--always.hint--bottom-left:after{transform:translateX(-100%) translateY(8px)}.hint--always.hint--bottom-right:after,.hint--always.hint--bottom-right:before{transform:translateY(8px)}.hint--always.hint--left:after,.hint--always.hint--left:before{transform:translateX(-8px)}.hint--always.hint--right:after,.hint--always.hint--right:before{transform:translateX(8px)}.hint--rounded:after{border-radius:4px}.hint--no-animate:after,.hint--no-animate:before{transition-duration:0ms}.hint--bounce:after,.hint--bounce:before{transition:opacity .3s ease,visibility .3s ease,transform .3s cubic-bezier(.71,1.7,.77,1.24)}.hint--no-shadow:after,.hint--no-shadow:before{text-shadow:none;box-shadow:none}.hint--no-arrow:before{display:none}',""]),t.exports=o},240:function(t,e,r){"use strict";(function(t){var r="undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof navigator,o=function(){for(var t=["Edge","Trident","Firefox"],i=0;i<t.length;i+=1)if(r&&navigator.userAgent.indexOf(t[i])>=0)return 1;return 0}();var n=r&&window.Promise?function(t){var e=!1;return function(){e||(e=!0,window.Promise.resolve().then((function(){e=!1,t()})))}}:function(t){var e=!1;return function(){e||(e=!0,setTimeout((function(){e=!1,t()}),o))}};function f(t){return t&&"[object Function]"==={}.toString.call(t)}function l(element,t){if(1!==element.nodeType)return[];var e=element.ownerDocument.defaultView.getComputedStyle(element,null);return t?e[t]:e}function h(element){return"HTML"===element.nodeName?element:element.parentNode||element.host}function c(element){if(!element)return document.body;switch(element.nodeName){case"HTML":case"BODY":return element.ownerDocument.body;case"#document":return element.body}var t=l(element),e=t.overflow,r=t.overflowX,o=t.overflowY;return/(auto|scroll|overlay)/.test(e+o+r)?element:c(h(element))}function d(t){return t&&t.referenceNode?t.referenceNode:t}var m=r&&!(!window.MSInputMethodContext||!document.documentMode),v=r&&/MSIE 10/.test(navigator.userAgent);function w(t){return 11===t?m:10===t?v:m||v}function x(element){if(!element)return document.documentElement;for(var t=w(10)?document.body:null,e=element.offsetParent||null;e===t&&element.nextElementSibling;)e=(element=element.nextElementSibling).offsetParent;var r=e&&e.nodeName;return r&&"BODY"!==r&&"HTML"!==r?-1!==["TH","TD","TABLE"].indexOf(e.nodeName)&&"static"===l(e,"position")?x(e):e:element?element.ownerDocument.documentElement:document.documentElement}function y(t){return null!==t.parentNode?y(t.parentNode):t}function E(t,e){if(!(t&&t.nodeType&&e&&e.nodeType))return document.documentElement;var r=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING,o=r?t:e,n=r?e:t,f=document.createRange();f.setStart(o,0),f.setEnd(n,0);var element,l,h=f.commonAncestorContainer;if(t!==h&&e!==h||o.contains(n))return"BODY"===(l=(element=h).nodeName)||"HTML"!==l&&x(element.firstElementChild)!==element?x(h):h;var c=y(t);return c.host?E(c.host,e):E(t,y(e).host)}function O(element){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",e="top"===t?"scrollTop":"scrollLeft",r=element.nodeName;if("BODY"===r||"HTML"===r){var html=element.ownerDocument.documentElement,o=element.ownerDocument.scrollingElement||html;return o[e]}return element[e]}function L(rect,element){var t=arguments.length>2&&void 0!==arguments[2]&&arguments[2],e=O(element,"top"),r=O(element,"left"),o=t?-1:1;return rect.top+=e*o,rect.bottom+=e*o,rect.left+=r*o,rect.right+=r*o,rect}function M(t,e){var r="x"===e?"Left":"Top",o="Left"===r?"Right":"Bottom";return parseFloat(t["border"+r+"Width"])+parseFloat(t["border"+o+"Width"])}function T(t,body,html,e){return Math.max(body["offset"+t],body["scroll"+t],html["client"+t],html["offset"+t],html["scroll"+t],w(10)?parseInt(html["offset"+t])+parseInt(e["margin"+("Height"===t?"Top":"Left")])+parseInt(e["margin"+("Height"===t?"Bottom":"Right")]):0)}function k(t){var body=t.body,html=t.documentElement,e=w(10)&&getComputedStyle(html);return{height:T("Height",body,html,e),width:T("Width",body,html,e)}}var D=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},N=function(){function t(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),e}}(),F=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},Y=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t};function H(t){return Y({},t,{right:t.left+t.width,bottom:t.top+t.height})}function C(element){var rect={};try{if(w(10)){rect=element.getBoundingClientRect();var t=O(element,"top"),e=O(element,"left");rect.top+=t,rect.left+=e,rect.bottom+=t,rect.right+=e}else rect=element.getBoundingClientRect()}catch(t){}var r={left:rect.left,top:rect.top,width:rect.right-rect.left,height:rect.bottom-rect.top},o="HTML"===element.nodeName?k(element.ownerDocument):{},n=o.width||element.clientWidth||r.width,f=o.height||element.clientHeight||r.height,h=element.offsetWidth-n,c=element.offsetHeight-f;if(h||c){var d=l(element);h-=M(d,"x"),c-=M(d,"y"),r.width-=h,r.height-=c}return H(r)}function A(t,e){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=w(10),n="HTML"===e.nodeName,f=C(t),h=C(e),d=c(t),m=l(e),v=parseFloat(m.borderTopWidth),x=parseFloat(m.borderLeftWidth);r&&n&&(h.top=Math.max(h.top,0),h.left=Math.max(h.left,0));var y=H({top:f.top-h.top-v,left:f.left-h.left-x,width:f.width,height:f.height});if(y.marginTop=0,y.marginLeft=0,!o&&n){var E=parseFloat(m.marginTop),O=parseFloat(m.marginLeft);y.top-=v-E,y.bottom-=v-E,y.left-=x-O,y.right-=x-O,y.marginTop=E,y.marginLeft=O}return(o&&!r?e.contains(d):e===d&&"BODY"!==d.nodeName)&&(y=L(y,e)),y}function B(element){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],html=element.ownerDocument.documentElement,e=A(element,html),r=Math.max(html.clientWidth,window.innerWidth||0),o=Math.max(html.clientHeight,window.innerHeight||0),n=t?0:O(html),f=t?0:O(html,"left"),l={top:n-e.top+e.marginTop,left:f-e.left+e.marginLeft,width:r,height:o};return H(l)}function S(element){var t=element.nodeName;if("BODY"===t||"HTML"===t)return!1;if("fixed"===l(element,"position"))return!0;var e=h(element);return!!e&&S(e)}function W(element){if(!element||!element.parentElement||w())return document.documentElement;for(var t=element.parentElement;t&&"none"===l(t,"transform");)t=t.parentElement;return t||document.documentElement}function P(t,e,r,o){var n=arguments.length>4&&void 0!==arguments[4]&&arguments[4],f={top:0,left:0},l=n?W(t):E(t,d(e));if("viewport"===o)f=B(l,n);else{var m=void 0;"scrollParent"===o?"BODY"===(m=c(h(e))).nodeName&&(m=t.ownerDocument.documentElement):m="window"===o?t.ownerDocument.documentElement:o;var v=A(m,l,n);if("HTML"!==m.nodeName||S(l))f=v;else{var w=k(t.ownerDocument),x=w.height,y=w.width;f.top+=v.top-v.marginTop,f.bottom=x+v.top,f.left+=v.left-v.marginLeft,f.right=y+v.left}}var O="number"==typeof(r=r||0);return f.left+=O?r:r.left||0,f.top+=O?r:r.top||0,f.right-=O?r:r.right||0,f.bottom-=O?r:r.bottom||0,f}function X(t){return t.width*t.height}function j(t,e,r,o,n){var f=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===t.indexOf("auto"))return t;var l=P(r,o,f,n),h={top:{width:l.width,height:e.top-l.top},right:{width:l.right-e.right,height:l.height},bottom:{width:l.width,height:l.bottom-e.bottom},left:{width:e.left-l.left,height:l.height}},c=Object.keys(h).map((function(t){return Y({key:t},h[t],{area:X(h[t])})})).sort((function(a,b){return b.area-a.area})),d=c.filter((function(t){var e=t.width,o=t.height;return e>=r.clientWidth&&o>=r.clientHeight})),m=d.length>0?d[0].key:c[0].key,v=t.split("-")[1];return m+(v?"-"+v:"")}function I(t,e,r){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,n=o?W(e):E(e,d(r));return A(r,n,o)}function R(element){var t=element.ownerDocument.defaultView.getComputedStyle(element),e=parseFloat(t.marginTop||0)+parseFloat(t.marginBottom||0),r=parseFloat(t.marginLeft||0)+parseFloat(t.marginRight||0);return{width:element.offsetWidth+r,height:element.offsetHeight+e}}function U(t){var e={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,(function(t){return e[t]}))}function V(t,e,r){r=r.split("-")[0];var o=R(t),n={width:o.width,height:o.height},f=-1!==["right","left"].indexOf(r),l=f?"top":"left",h=f?"left":"top",c=f?"height":"width",d=f?"width":"height";return n[l]=e[l]+e[c]/2-o[c]/2,n[h]=r===h?e[h]-o[d]:e[U(h)],n}function z(t,e){return Array.prototype.find?t.find(e):t.filter(e)[0]}function G(t,data,e){return(void 0===e?t:t.slice(0,function(t,e,r){if(Array.prototype.findIndex)return t.findIndex((function(t){return t[e]===r}));var o=z(t,(function(t){return t[e]===r}));return t.indexOf(o)}(t,"name",e))).forEach((function(t){t.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var e=t.function||t.fn;t.enabled&&f(e)&&(data.offsets.popper=H(data.offsets.popper),data.offsets.reference=H(data.offsets.reference),data=e(data,t))})),data}function _(){if(!this.state.isDestroyed){var data={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};data.offsets.reference=I(this.state,this.popper,this.reference,this.options.positionFixed),data.placement=j(this.options.placement,data.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),data.originalPlacement=data.placement,data.positionFixed=this.options.positionFixed,data.offsets.popper=V(this.popper,data.offsets.reference,data.placement),data.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",data=G(this.modifiers,data),this.state.isCreated?this.options.onUpdate(data):(this.state.isCreated=!0,this.options.onCreate(data))}}function J(t,e){return t.some((function(t){var r=t.name;return t.enabled&&r===e}))}function K(t){for(var e=[!1,"ms","Webkit","Moz","O"],r=t.charAt(0).toUpperCase()+t.slice(1),i=0;i<e.length;i++){var o=e[i],n=o?""+o+r:t;if(void 0!==document.body.style[n])return n}return null}function Z(){return this.state.isDestroyed=!0,J(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[K("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function Q(element){var t=element.ownerDocument;return t?t.defaultView:window}function $(t,e,r,o){var n="BODY"===t.nodeName,f=n?t.ownerDocument.defaultView:t;f.addEventListener(e,r,{passive:!0}),n||$(c(f.parentNode),e,r,o),o.push(f)}function tt(t,e,r,o){r.updateBound=o,Q(t).addEventListener("resize",r.updateBound,{passive:!0});var n=c(t);return $(n,"scroll",r.updateBound,r.scrollParents),r.scrollElement=n,r.eventsEnabled=!0,r}function et(){this.state.eventsEnabled||(this.state=tt(this.reference,this.options,this.state,this.scheduleUpdate))}function ot(){var t,e;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(t=this.reference,e=this.state,Q(t).removeEventListener("resize",e.updateBound),e.scrollParents.forEach((function(t){t.removeEventListener("scroll",e.updateBound)})),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e))}function nt(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}function it(element,t){Object.keys(t).forEach((function(e){var r="";-1!==["width","height","top","right","bottom","left"].indexOf(e)&&nt(t[e])&&(r="px"),element.style[e]=t[e]+r}))}var at=r&&/Firefox/i.test(navigator.userAgent);function ft(t,e,r){var o=z(t,(function(t){return t.name===e})),n=!!o&&t.some((function(t){return t.name===r&&t.enabled&&t.order<o.order}));if(!n){var f="`"+e+"`",l="`"+r+"`";console.warn(l+" modifier is required by "+f+" modifier in order to work, be sure to include it before "+f+"!")}return n}var st=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],lt=st.slice(3);function ht(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=lt.indexOf(t),o=lt.slice(r+1).concat(lt.slice(0,r));return e?o.reverse():o}var pt="flip",ct="clockwise",ut="counterclockwise";function mt(t,e,r,o){var n=[0,0],f=-1!==["right","left"].indexOf(o),l=t.split(/(\+|\-)/).map((function(t){return t.trim()})),h=l.indexOf(z(l,(function(t){return-1!==t.search(/,|\s/)})));l[h]&&-1===l[h].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var c=/\s*,\s*|\s+/,d=-1!==h?[l.slice(0,h).concat([l[h].split(c)[0]]),[l[h].split(c)[1]].concat(l.slice(h+1))]:[l];return d=d.map((function(t,o){var n=(1===o?!f:f)?"height":"width",l=!1;return t.reduce((function(a,b){return""===a[a.length-1]&&-1!==["+","-"].indexOf(b)?(a[a.length-1]=b,l=!0,a):l?(a[a.length-1]+=b,l=!1,a):a.concat(b)}),[]).map((function(t){return function(t,e,r,o){var n=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),f=+n[1],l=n[2];if(!f)return t;if(0===l.indexOf("%")){return H("%p"===l?r:o)[e]/100*f}if("vh"===l||"vw"===l)return("vh"===l?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*f;return f}(t,n,e,r)}))})),d.forEach((function(t,e){t.forEach((function(r,o){nt(r)&&(n[e]+=r*("-"===t[o-1]?-1:1))}))})),n}var bt={shift:{order:100,enabled:!0,fn:function(data){var t=data.placement,e=t.split("-")[0],r=t.split("-")[1];if(r){var o=data.offsets,n=o.reference,f=o.popper,l=-1!==["bottom","top"].indexOf(e),h=l?"left":"top",c=l?"width":"height",d={start:F({},h,n[h]),end:F({},h,n[h]+n[c]-f[c])};data.offsets.popper=Y({},f,d[r])}return data}},offset:{order:200,enabled:!0,fn:function(data,t){var e=t.offset,r=data.placement,o=data.offsets,n=o.popper,f=o.reference,l=r.split("-")[0],h=void 0;return h=nt(+e)?[+e,0]:mt(e,n,f,l),"left"===l?(n.top+=h[0],n.left-=h[1]):"right"===l?(n.top+=h[0],n.left+=h[1]):"top"===l?(n.left+=h[0],n.top-=h[1]):"bottom"===l&&(n.left+=h[0],n.top+=h[1]),data.popper=n,data},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(data,t){var e=t.boundariesElement||x(data.instance.popper);data.instance.reference===e&&(e=x(e));var r=K("transform"),o=data.instance.popper.style,n=o.top,f=o.left,l=o[r];o.top="",o.left="",o[r]="";var h=P(data.instance.popper,data.instance.reference,t.padding,e,data.positionFixed);o.top=n,o.left=f,o[r]=l,t.boundaries=h;var c=t.priority,d=data.offsets.popper,m={primary:function(e){var r=d[e];return d[e]<h[e]&&!t.escapeWithReference&&(r=Math.max(d[e],h[e])),F({},e,r)},secondary:function(e){var r="right"===e?"left":"top",o=d[r];return d[e]>h[e]&&!t.escapeWithReference&&(o=Math.min(d[r],h[e]-("right"===e?d.width:d.height))),F({},r,o)}};return c.forEach((function(t){var e=-1!==["left","top"].indexOf(t)?"primary":"secondary";d=Y({},d,m[e](t))})),data.offsets.popper=d,data},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(data){var t=data.offsets,e=t.popper,r=t.reference,o=data.placement.split("-")[0],n=Math.floor,f=-1!==["top","bottom"].indexOf(o),l=f?"right":"bottom",h=f?"left":"top",c=f?"width":"height";return e[l]<n(r[h])&&(data.offsets.popper[h]=n(r[h])-e[c]),e[h]>n(r[l])&&(data.offsets.popper[h]=n(r[l])),data}},arrow:{order:500,enabled:!0,fn:function(data,t){var e;if(!ft(data.instance.modifiers,"arrow","keepTogether"))return data;var r=t.element;if("string"==typeof r){if(!(r=data.instance.popper.querySelector(r)))return data}else if(!data.instance.popper.contains(r))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),data;var o=data.placement.split("-")[0],n=data.offsets,f=n.popper,h=n.reference,c=-1!==["left","right"].indexOf(o),d=c?"height":"width",m=c?"Top":"Left",v=m.toLowerCase(),w=c?"left":"top",x=c?"bottom":"right",y=R(r)[d];h[x]-y<f[v]&&(data.offsets.popper[v]-=f[v]-(h[x]-y)),h[v]+y>f[x]&&(data.offsets.popper[v]+=h[v]+y-f[x]),data.offsets.popper=H(data.offsets.popper);var E=h[v]+h[d]/2-y/2,O=l(data.instance.popper),L=parseFloat(O["margin"+m]),M=parseFloat(O["border"+m+"Width"]),T=E-data.offsets.popper[v]-L-M;return T=Math.max(Math.min(f[d]-y,T),0),data.arrowElement=r,data.offsets.arrow=(F(e={},v,Math.round(T)),F(e,w,""),e),data},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(data,t){if(J(data.instance.modifiers,"inner"))return data;if(data.flipped&&data.placement===data.originalPlacement)return data;var e=P(data.instance.popper,data.instance.reference,t.padding,t.boundariesElement,data.positionFixed),r=data.placement.split("-")[0],o=U(r),n=data.placement.split("-")[1]||"",f=[];switch(t.behavior){case pt:f=[r,o];break;case ct:f=ht(r);break;case ut:f=ht(r,!0);break;default:f=t.behavior}return f.forEach((function(l,h){if(r!==l||f.length===h+1)return data;r=data.placement.split("-")[0],o=U(r);var c=data.offsets.popper,d=data.offsets.reference,m=Math.floor,v="left"===r&&m(c.right)>m(d.left)||"right"===r&&m(c.left)<m(d.right)||"top"===r&&m(c.bottom)>m(d.top)||"bottom"===r&&m(c.top)<m(d.bottom),w=m(c.left)<m(e.left),x=m(c.right)>m(e.right),y=m(c.top)<m(e.top),E=m(c.bottom)>m(e.bottom),O="left"===r&&w||"right"===r&&x||"top"===r&&y||"bottom"===r&&E,L=-1!==["top","bottom"].indexOf(r),M=!!t.flipVariations&&(L&&"start"===n&&w||L&&"end"===n&&x||!L&&"start"===n&&y||!L&&"end"===n&&E),T=!!t.flipVariationsByContent&&(L&&"start"===n&&x||L&&"end"===n&&w||!L&&"start"===n&&E||!L&&"end"===n&&y),k=M||T;(v||O||k)&&(data.flipped=!0,(v||O)&&(r=f[h+1]),k&&(n=function(t){return"end"===t?"start":"start"===t?"end":t}(n)),data.placement=r+(n?"-"+n:""),data.offsets.popper=Y({},data.offsets.popper,V(data.instance.popper,data.offsets.reference,data.placement)),data=G(data.instance.modifiers,data,"flip"))})),data},behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(data){var t=data.placement,e=t.split("-")[0],r=data.offsets,o=r.popper,n=r.reference,f=-1!==["left","right"].indexOf(e),l=-1===["top","left"].indexOf(e);return o[f?"left":"top"]=n[e]-(l?o[f?"width":"height"]:0),data.placement=U(t),data.offsets.popper=H(o),data}},hide:{order:800,enabled:!0,fn:function(data){if(!ft(data.instance.modifiers,"hide","preventOverflow"))return data;var t=data.offsets.reference,e=z(data.instance.modifiers,(function(t){return"preventOverflow"===t.name})).boundaries;if(t.bottom<e.top||t.left>e.right||t.top>e.bottom||t.right<e.left){if(!0===data.hide)return data;data.hide=!0,data.attributes["x-out-of-boundaries"]=""}else{if(!1===data.hide)return data;data.hide=!1,data.attributes["x-out-of-boundaries"]=!1}return data}},computeStyle:{order:850,enabled:!0,fn:function(data,t){var e=t.x,r=t.y,o=data.offsets.popper,n=z(data.instance.modifiers,(function(t){return"applyStyle"===t.name})).gpuAcceleration;void 0!==n&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var f=void 0!==n?n:t.gpuAcceleration,l=x(data.instance.popper),h=C(l),c={position:o.position},d=function(data,t){var e=data.offsets,r=e.popper,o=e.reference,n=Math.round,f=Math.floor,l=function(t){return t},h=n(o.width),c=n(r.width),d=-1!==["left","right"].indexOf(data.placement),m=-1!==data.placement.indexOf("-"),v=t?d||m||h%2==c%2?n:f:l,w=t?n:l;return{left:v(h%2==1&&c%2==1&&!m&&t?r.left-1:r.left),top:w(r.top),bottom:w(r.bottom),right:v(r.right)}}(data,window.devicePixelRatio<2||!at),m="bottom"===e?"top":"bottom",v="right"===r?"left":"right",w=K("transform"),y=void 0,E=void 0;if(E="bottom"===m?"HTML"===l.nodeName?-l.clientHeight+d.bottom:-h.height+d.bottom:d.top,y="right"===v?"HTML"===l.nodeName?-l.clientWidth+d.right:-h.width+d.right:d.left,f&&w)c[w]="translate3d("+y+"px, "+E+"px, 0)",c[m]=0,c[v]=0,c.willChange="transform";else{var O="bottom"===m?-1:1,L="right"===v?-1:1;c[m]=E*O,c[v]=y*L,c.willChange=m+", "+v}var M={"x-placement":data.placement};return data.attributes=Y({},M,data.attributes),data.styles=Y({},c,data.styles),data.arrowStyles=Y({},data.offsets.arrow,data.arrowStyles),data},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(data){var element,t;return it(data.instance.popper,data.styles),element=data.instance.popper,t=data.attributes,Object.keys(t).forEach((function(e){!1!==t[e]?element.setAttribute(e,t[e]):element.removeAttribute(e)})),data.arrowElement&&Object.keys(data.arrowStyles).length&&it(data.arrowElement,data.arrowStyles),data},onLoad:function(t,e,r,o,n){var f=I(n,e,t,r.positionFixed),l=j(r.placement,f,e,t,r.modifiers.flip.boundariesElement,r.modifiers.flip.padding);return e.setAttribute("x-placement",l),it(e,{position:r.positionFixed?"fixed":"absolute"}),r},gpuAcceleration:void 0}},gt={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:bt},vt=function(){function t(e,r){var o=this,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};D(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(o.update)},this.update=n(this.update.bind(this)),this.options=Y({},t.Defaults,l),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=e&&e.jquery?e[0]:e,this.popper=r&&r.jquery?r[0]:r,this.options.modifiers={},Object.keys(Y({},t.Defaults.modifiers,l.modifiers)).forEach((function(e){o.options.modifiers[e]=Y({},t.Defaults.modifiers[e]||{},l.modifiers?l.modifiers[e]:{})})),this.modifiers=Object.keys(this.options.modifiers).map((function(t){return Y({name:t},o.options.modifiers[t])})).sort((function(a,b){return a.order-b.order})),this.modifiers.forEach((function(t){t.enabled&&f(t.onLoad)&&t.onLoad(o.reference,o.popper,o.options,t,o.state)})),this.update();var h=this.options.eventsEnabled;h&&this.enableEventListeners(),this.state.eventsEnabled=h}return N(t,[{key:"update",value:function(){return _.call(this)}},{key:"destroy",value:function(){return Z.call(this)}},{key:"enableEventListeners",value:function(){return et.call(this)}},{key:"disableEventListeners",value:function(){return ot.call(this)}}]),t}();vt.Utils=("undefined"!=typeof window?window:t).PopperUtils,vt.placements=st,vt.Defaults=gt,e.a=vt}).call(this,r(34))}}]);