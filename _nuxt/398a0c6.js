(window.webpackJsonp=window.webpackJsonp||[]).push([[4,7],{227:function(t,e,r){"use strict";r.r(e);var o={props:["id","label","level","value","tooltip"]},n=r(42),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.level?"ml-"+4*t.level:""},[r("div",{staticClass:"relative text-left inline-flex w-full"},[r("div",{staticClass:"w-full"},[r("label",{staticClass:"text-md font-semibold text-gray-700 w-auto mt-px hint--top hint--rounded hint--large",attrs:{"aria-label":t.tooltip}},[t._v(t._s(t.label)+":")]),t._v(" "),r("input",{staticClass:"inline-flex justify-center w-1/3 rounded-md border border-gray-500 shadow-sm px-4 py-1 mt-px mb-2 ml-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500",attrs:{id:t.id,type:"text"},domProps:{value:t.value}})])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Input:r(227).default})},231:function(t,e,r){var content=r(234);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(70).default)("4f75fab4",content,!0,{sourceMap:!1})},234:function(t,e,r){var o=r(69)(!1);o.push([t.i,'/*! Hint.css - v2.7.0 - 2021-10-01\n* https://kushagra.dev/lab/hint/\n* Copyright (c) 2021 Kushagra Gour */[class*=hint--]{position:relative;display:inline-block}[class*=hint--]:after,[class*=hint--]:before{position:absolute;transform:translateZ(0);visibility:hidden;opacity:0;z-index:1000000;pointer-events:none;transition:.3s ease;transition-delay:0ms}[class*=hint--]:hover:after,[class*=hint--]:hover:before{visibility:visible;opacity:1;transition-delay:.1s}[class*=hint--]:before{content:"";position:absolute;background:transparent;border:6px solid transparent;z-index:1000001}[class*=hint--]:after{background:#383838;color:#fff;padding:8px 10px;font-size:12px;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;line-height:12px;white-space:nowrap}[class*=hint--][aria-label]:after{content:attr(aria-label)}[class*=hint--][data-hint]:after{content:attr(data-hint)}[aria-label=""]:after,[aria-label=""]:before,[data-hint=""]:after,[data-hint=""]:before{display:none!important}.hint--top-left:before,.hint--top-right:before,.hint--top:before{border-top-color:#383838}.hint--bottom-left:before,.hint--bottom-right:before,.hint--bottom:before{border-bottom-color:#383838}.hint--left:before{border-left-color:#383838}.hint--right:before{border-right-color:#383838}.hint--top:before{margin-bottom:-11px}.hint--top:after,.hint--top:before{bottom:100%;left:50%}.hint--top:before{left:calc(50% - 6px)}.hint--top:after{transform:translateX(-50%)}.hint--top:hover:before{transform:translateY(-8px)}.hint--top:hover:after{transform:translateX(-50%) translateY(-8px)}.hint--bottom:before{margin-top:-11px}.hint--bottom:after,.hint--bottom:before{top:100%;left:50%}.hint--bottom:before{left:calc(50% - 6px)}.hint--bottom:after{transform:translateX(-50%)}.hint--bottom:hover:before{transform:translateY(8px)}.hint--bottom:hover:after{transform:translateX(-50%) translateY(8px)}.hint--right:before{margin-left:-11px;margin-bottom:-6px}.hint--right:after{margin-bottom:-14px}.hint--right:after,.hint--right:before{left:100%;bottom:50%}.hint--right:hover:after,.hint--right:hover:before{transform:translateX(8px)}.hint--left:before{margin-right:-11px;margin-bottom:-6px}.hint--left:after{margin-bottom:-14px}.hint--left:after,.hint--left:before{right:100%;bottom:50%}.hint--left:hover:after,.hint--left:hover:before{transform:translateX(-8px)}.hint--top-left:before{margin-bottom:-11px}.hint--top-left:after,.hint--top-left:before{bottom:100%;left:50%}.hint--top-left:before{left:calc(50% - 6px)}.hint--top-left:after{transform:translateX(-100%);margin-left:12px}.hint--top-left:hover:before{transform:translateY(-8px)}.hint--top-left:hover:after{transform:translateX(-100%) translateY(-8px)}.hint--top-right:before{margin-bottom:-11px}.hint--top-right:after,.hint--top-right:before{bottom:100%;left:50%}.hint--top-right:before{left:calc(50% - 6px)}.hint--top-right:after{transform:translateX(0);margin-left:-12px}.hint--top-right:hover:after,.hint--top-right:hover:before{transform:translateY(-8px)}.hint--bottom-left:before{margin-top:-11px}.hint--bottom-left:after,.hint--bottom-left:before{top:100%;left:50%}.hint--bottom-left:before{left:calc(50% - 6px)}.hint--bottom-left:after{transform:translateX(-100%);margin-left:12px}.hint--bottom-left:hover:before{transform:translateY(8px)}.hint--bottom-left:hover:after{transform:translateX(-100%) translateY(8px)}.hint--bottom-right:before{margin-top:-11px}.hint--bottom-right:after,.hint--bottom-right:before{top:100%;left:50%}.hint--bottom-right:before{left:calc(50% - 6px)}.hint--bottom-right:after{transform:translateX(0);margin-left:-12px}.hint--bottom-right:hover:after,.hint--bottom-right:hover:before{transform:translateY(8px)}.hint--large:after,.hint--medium:after,.hint--small:after{white-space:normal;line-height:1.4em;word-wrap:break-word}.hint--small:after{width:80px}.hint--medium:after{width:150px}.hint--large:after{width:300px}[class*=hint--]:after{text-shadow:0 -1px 0 #000;box-shadow:4px 4px 8px rgba(0,0,0,.3)}.hint--error:after{background-color:#b34e4d;text-shadow:0 -1px 0 #592726}.hint--error.hint--top-left:before,.hint--error.hint--top-right:before,.hint--error.hint--top:before{border-top-color:#b34e4d}.hint--error.hint--bottom-left:before,.hint--error.hint--bottom-right:before,.hint--error.hint--bottom:before{border-bottom-color:#b34e4d}.hint--error.hint--left:before{border-left-color:#b34e4d}.hint--error.hint--right:before{border-right-color:#b34e4d}.hint--warning:after{background-color:#c09854;text-shadow:0 -1px 0 #6c5328}.hint--warning.hint--top-left:before,.hint--warning.hint--top-right:before,.hint--warning.hint--top:before{border-top-color:#c09854}.hint--warning.hint--bottom-left:before,.hint--warning.hint--bottom-right:before,.hint--warning.hint--bottom:before{border-bottom-color:#c09854}.hint--warning.hint--left:before{border-left-color:#c09854}.hint--warning.hint--right:before{border-right-color:#c09854}.hint--info:after{background-color:#3986ac;text-shadow:0 -1px 0 #1a3c4d}.hint--info.hint--top-left:before,.hint--info.hint--top-right:before,.hint--info.hint--top:before{border-top-color:#3986ac}.hint--info.hint--bottom-left:before,.hint--info.hint--bottom-right:before,.hint--info.hint--bottom:before{border-bottom-color:#3986ac}.hint--info.hint--left:before{border-left-color:#3986ac}.hint--info.hint--right:before{border-right-color:#3986ac}.hint--success:after{background-color:#458746;text-shadow:0 -1px 0 #1a321a}.hint--success.hint--top-left:before,.hint--success.hint--top-right:before,.hint--success.hint--top:before{border-top-color:#458746}.hint--success.hint--bottom-left:before,.hint--success.hint--bottom-right:before,.hint--success.hint--bottom:before{border-bottom-color:#458746}.hint--success.hint--left:before{border-left-color:#458746}.hint--success.hint--right:before{border-right-color:#458746}.hint--always:after,.hint--always:before{opacity:1;visibility:visible}.hint--always.hint--top:before{transform:translateY(-8px)}.hint--always.hint--top:after{transform:translateX(-50%) translateY(-8px)}.hint--always.hint--top-left:before{transform:translateY(-8px)}.hint--always.hint--top-left:after{transform:translateX(-100%) translateY(-8px)}.hint--always.hint--top-right:after,.hint--always.hint--top-right:before{transform:translateY(-8px)}.hint--always.hint--bottom:before{transform:translateY(8px)}.hint--always.hint--bottom:after{transform:translateX(-50%) translateY(8px)}.hint--always.hint--bottom-left:before{transform:translateY(8px)}.hint--always.hint--bottom-left:after{transform:translateX(-100%) translateY(8px)}.hint--always.hint--bottom-right:after,.hint--always.hint--bottom-right:before{transform:translateY(8px)}.hint--always.hint--left:after,.hint--always.hint--left:before{transform:translateX(-8px)}.hint--always.hint--right:after,.hint--always.hint--right:before{transform:translateX(8px)}.hint--rounded:after{border-radius:4px}.hint--no-animate:after,.hint--no-animate:before{transition-duration:0ms}.hint--bounce:after,.hint--bounce:before{transition:opacity .3s ease,visibility .3s ease,transform .3s cubic-bezier(.71,1.7,.77,1.24)}.hint--no-shadow:after,.hint--no-shadow:before{text-shadow:none;box-shadow:none}.hint--no-arrow:before{display:none}',""]),t.exports=o},242:function(t,e,r){"use strict";r.r(e);r(231);var o={props:["id","label","level","value","tooltip"]},n=r(42),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.level?"ml-"+4*t.level:""},[r("label",{staticClass:"inline-flex items-center cursor-pointer"},[r("input",{staticClass:"form-checkbox text-gray-800 ml-1 w-5 h-6",staticStyle:{transition:"all 0.15s ease 0s"},attrs:{id:t.id,type:"checkbox"},domProps:{checked:t.value}}),r("span",{staticClass:"ml-2 text-md font-semibold text-gray-700 hint--top hint--rounded hint--large mt-px mb-px",attrs:{"aria-label":t.tooltip}},[t._v(t._s(t.label))])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Input:r(227).default})}}]);