var W=Object.defineProperty,X=Object.defineProperties;var Z=Object.getOwnPropertyDescriptors;var M=Object.getOwnPropertySymbols;var P=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var _=(e,t,s)=>t in e?W(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,h=(e,t)=>{for(var s in t||(t={}))P.call(t,s)&&_(e,s,t[s]);if(M)for(var s of M(t))T.call(t,s)&&_(e,s,t[s]);return e},f=(e,t)=>X(e,Z(t));var L=(e,t)=>{var s={};for(var l in e)P.call(e,l)&&t.indexOf(l)<0&&(s[l]=e[l]);if(e!=null&&M)for(var l of M(e))t.indexOf(l)<0&&T.call(e,l)&&(s[l]=e[l]);return s};import{l as v,c as u,j as k,R as D,u as ee,a as te,b as i,o as g,d as y,r as V,e as d,f as re}from"./vendor.e163c3ac.js";const ie=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function s(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerpolicy&&(n.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?n.credentials="include":a.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(a){if(a.ep)return;a.ep=!0;const n=s(a);fetch(a.href,n)}};ie();const se={x:0,y:0,x2:0,y2:0,width:1,height:1,width2:1,height2:1,rotation_angle:0,rotation_x:0,rotation_y:0,labels:[],textColor:[],textSize:[],default:{textColor:"#000000",textSize:3},color:"#cccccc",profile:"",nub:!1,ghost:!1,stepped:!1,decal:!1,sm:"",sb:"",st:""},ae={backcolor:"#eeeeee",name:"",author:"",notes:"",background:void 0,radii:"",switchMount:"",switchBrand:"",switchType:""},le=[[0,6,2,8,9,11,3,5,1,4,7,10],[1,7,-1,-1,9,11,4,-1,-1,-1,-1,10],[3,-1,5,-1,9,11,-1,-1,4,-1,-1,10],[4,-1,-1,-1,9,11,-1,-1,-1,-1,-1,10],[0,6,2,8,10,-1,3,5,1,4,7,-1],[1,7,-1,-1,10,-1,4,-1,-1,-1,-1,-1],[3,-1,5,-1,10,-1,-1,-1,4,-1,-1,-1],[4,-1,-1,-1,10,-1,-1,-1,-1,-1,-1,-1]];function ne(){return v.exports.cloneDeep(se)}function oe(){return v.exports.cloneDeep(ae)}function C(e,t){throw new Error(`Error: ${e}${t?`:
  ${JSON.stringify(t)}`:""}`)}function B(e,t,s){const l=[];for(let a=s?1:0;a<e.length;++a)l[le[t][a]]=e[a];return l}function ce(e){const t=ne(),s=oe(),l=[],a={x:0,y:0};let n=4;for(let o=0;o<e.length;++o)e[o]instanceof Array?(e[o].forEach((r,p)=>{if(typeof r=="string"){const c=v.exports.cloneDeep(t);c.width2=c.width2===0?t.width:t.width2,c.height2=c.height2===0?t.height:t.height2,c.labels=B(r.split(`
`),n),c.textSize=B(c.textSize,n);for(let m=0;m<12;++m)c.labels[m]||(c.textSize[m]=void 0,c.textColor[m]=void 0),c.textSize[m]==c.default.textSize&&(c.textSize[m]=void 0),c.textColor[m]==c.default.textColor&&(c.textColor[m]=void 0);l.push(c),t.x+=t.width,t.width=t.height=1,t.x2=t.y2=t.width2=t.height2=0,t.nub=t.stepped=t.decal=!1}else{if(r.r!=null&&(p!=0&&C("'r' can only be used on the first key in a row",r),t.rotation_angle=r.r),r.rx!=null&&(p!=0&&C("'rx' can only be used on the first key in a row",r),t.rotation_x=a.x=r.rx,v.exports.merge(t,a)),r.ry!=null&&(p!=0&&C("ry' can only be used on the first key in a row",r),t.rotation_y=a.y=r.ry,v.exports.merge(t,a)),r.a!=null&&(n=r.a),r.f&&(t.default.textSize=r.f,t.textSize=[]),r.f2)for(let c=1;c<12;++c)t.textSize[c]=r.f2;if(r.fa&&(t.textSize=r.fa),r.p&&(t.profile=r.p),r.c&&(t.color=r.c),r.t){const c=r.t.split(`
`);t.default.textColor=c[0],t.textColor=B(c,n)}r.x&&(t.x+=r.x),r.y&&(t.y+=r.y),r.w&&(t.width=t.width2=r.w),r.h&&(t.height=t.height2=r.h),r.x2&&(t.x2=r.x2),r.y2&&(t.y2=r.y2),r.w2&&(t.width2=r.w2),r.h2&&(t.height2=r.h2),r.n&&(t.nub=r.n),r.l&&(t.stepped=r.l),r.d&&(t.decal=r.d),r.g!=null&&(t.ghost=r.g),r.sm&&(t.sm=r.sm),r.sb&&(t.sb=r.sb),r.st&&(t.st=r.st)}}),t.y++):typeof e[o]=="object"&&(o!==0&&C("keyboard metadata must the be first element",e[o]),v.exports.merge(s,e[o])),t.x=t.rotation_x;return{meta:s,keys:l}}function he(e){const[t,s,l]=u(e).hsv().array();return`{${[Math.round(t/360*255),Math.round(s/100*255),Math.round(l/100*255)].join(",")}}`}function K(e){let t=[];try{t=JSON.parse(e)}catch{try{t=k(`[${e}]`)}catch{}}return ce(t)}const Y="qmk-matrix-configurator",J=v.exports.range(360).filter(e=>e%16===0).map(e=>u.hsl(e,100,50)).concat([u.hsv(0,0,100),u.hsv(0,100,0)]);function de(){return{activeLayer:0,activeColor:J[0],input:"",layers:[],layerCount:4,layoutError:"",lightsOff:!0,displayLabels:!1,isEditingLayout:!1,get asQMK(){return`const uint8_t PROGMEM rgb_matrix_led_map[][DRIVER_LED_TOTAL][${this.layerCount}] = {
${this.layers.map(e=>`   { ${e.map(he).join(", ")} }`).join(`,
`)}
};`},get isLayoutEmpty(){return this.layout.keys.length===0||this.layers.length==0},get isLayoutValid(){return!this.layoutError},setActiveColor(e){this.activeColor=e},setActiveLayer(e){this.activeLayer=e},toggleRGBColor(e){this.layers[this.activeLayer][e]===this.activeColor?this.layers[this.activeLayer][e]=u.hsv(0,0,0):this.layers[this.activeLayer][e]=this.activeColor},fillLayer(e){this.layers[this.activeLayer].forEach((t,s)=>{this.layers[this.activeLayer][s]=e})},toggleLabels(){this.displayLabels=!this.displayLabels},toggleLights(){this.lightsOff=!this.lightsOff},toggleEditingLayout(){this.isEditingLayout=!this.isEditingLayout},setInput(e){this.input=e,this.resetLayers()},get layout(){try{return K(this.input)}catch(e){return this.layoutError=e.message,{meta:{},keys:[]}}},resetLayers(){this.layers=v.exports.range(this.layerCount).map(()=>new Array(this.layout.keys.length).map(()=>u.hsv(0,0,0)))},setLayerCount(e){this.activeLayer>=e&&(this.activeLayer=e-1),e>this.layerCount&&(this.activeLayer=e-1),this.layers=v.exports.range(e).map(t=>v.exports.range(this.layout.keys.length).map(s=>{var l;return(l=this.layers[t]&&this.layers[t][s])!=null?l:u.hsv(0,0,0)})),this.layerCount=e},loadFile(e){const[t]=e.target.files;if(!t)return;const s=new FileReader;s.onload=l=>{const a=K(l.target.result);if(a.keys&&a.keys.length===0){const n=JSON.parse(l.target.result);n.layouts&&n.layouts.keymap&&this.setInput(JSON.stringify(n.layouts.keymap))}else this.setInput(l.target.result)},s.readAsText(t)},async paste(){this.setInput(await navigator.clipboard.readText())},restoreState(){const e=localStorage.getItem(Y);e&&Object.assign(this,JSON.parse(e))},persistState(){localStorage.setItem(Y,JSON.stringify({input:this.input,layerCount:this.layerCount,layers:this.layers.map(e=>e.map(t=>u(t).hsl().toString())),lightsOff:this.lightsOff,displayLabels:this.displayLabels}))}}}const q=D.createContext(null),ue=({children:e})=>{const t=ee(de);return t.restoreState(),te(()=>{t.persistState()}),i(q.Provider,{value:t,children:e})},fe=()=>D.useContext(q),pe=({activeColor:e,colors:t,onSelectColor:s})=>i("div",{className:"flex flex-wrap space-x-2",children:t.map(l=>i("button",{className:y("rounded w-8 h-8",{outline:e==l}),style:{backgroundColor:l},onClick:()=>s(l)},l))});var me=g(pe);const ve=["items-start justify-start","items-start justify-center","items-start justify-end","items-center justify-start","items-center justify-center ","items-center justify-end","items-end justify-start","items-end justify-center","items-end justify-end"],xe=({x:e,y:t,width:s,height:l,keySize:a,padding:n,color:o,rgbColor:r=u.hsv(0,0,0),onClick:p,labels:c,legendColor:m,textColor:N,title:b,lightsOff:$=!1,displayLabels:G=!1})=>{const E=a*s,j=a*l,S=a/4,R=E-S,Q=j-S;o=u(o).fade($?.96:0),r=u(r),v.exports.isEqual(r.hsv().array(),[0,0,0])&&(r=u("transparent"));const x=a*.1,U=["bottom","left"];return i("a",{onClick:p,title:b,className:"absolute text-xs cursor-copy select-none",style:{borderRadius:x,width:E-n,height:j-n,top:a*t,left:a*e,background:[`linear-gradient(${o}, ${o}) no-repeat border-box`,...U.map(w=>`radial-gradient(circle at ${w}, ${o.darken(.2)} 90%, transparent 70%) no-repeat border-box`),o],boxShadow:[`inset ${u("black").alpha(.2)} 0px ${a*.05}px ${Math.round(a*.1)}px`,`inset ${r.alpha(.25)} 0px -${a*.05}px ${Math.round(a*.1)}px`,...r&&[`inset ${r.alpha(.1)} 0px 0px ${Math.round(a*.3)}px `,`inset ${r.alpha(.5)} 0px -${a*.05}px ${Math.round(a*.1)}px`,`${r} 0px 0px ${Math.round(a*.1)}px ${a*.04}px`]]},children:i("div",{className:"relative border",style:{top:a*.05,left:(E-n-R)/2,width:R,height:Q,color:m,borderColor:o.lighten(.05),boxShadow:[`inset ${u("white").alpha(.2)} 0px 0px ${Math.round(a*.1)}px`],background:[`linear-gradient(${o}, ${o}) no-repeat border-box`,`linear-gradient(${o}, ${o.darken(.1)}) no-repeat border-box`,`radial-gradient(circle at center, ${o}, ${o}, ${o.darken(.2)}) no-repeat border-box`],borderRadius:x},children:G&&c.map((w,A)=>w&&i("span",{className:y("absolute flex overflow-hidden",ve[A]),style:{top:x/2,left:x/2,bottom:x/2,right:x/2,color:N[A]},children:w},A))})})};var ge=g(xe);const ye=({layout:e,keySize:t=64,padding:s=5,onClickKey:l,rgbColor:a,lightsOff:n,displayLabels:o})=>e.keys.length===0?null:i("div",{className:"flex overflow-x-auto overflow-y-visible items-center justify-center p-1 text-black",children:i("div",{className:"relative",style:{height:Math.max(...e.keys.map(r=>(r.y+r.height)*t-s)),width:Math.max(...e.keys.map(r=>(r.x+r.width)*t-s))},children:e.keys.map((r,p)=>i(ge,f(h({},r),{keySize:t,padding:s,lightsOff:n,displayLabels:o,rgbColor:a(p),onClick:()=>{l(p)}}),p))})});var be=g(ye);const Le=e=>i("svg",f(h({preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},e),{children:i("path",{fill:"currentColor",d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"})})),we=o=>{var r=o,{value:e,showCopy:t,minRows:s=4,maxRows:l=10,onChange:a}=r,n=L(r,["value","showCopy","minRows","maxRows","onChange"]);const p=V.exports.useRef(null),[c,m]=V.exports.useState(s);return V.exports.useEffect(()=>{const{scrollHeight:N}=p.current;let{lineHeight:b}=getComputedStyle(p.current);b=Number(b.replace(/px$/,""));const $=Math.ceil(N/b);m(Math.min(l,Math.max($,s)))},[e,l,s]),d("div",{className:"relative",children:[i("textarea",h({ref:p,rows:c,className:"px-2 py-1 w-full font-mono text-xs whitespace-pre bg-neutral-900 rounded outline-none",value:e,onChange:a},n)),t&&i("a",{className:"block absolute right-0 top-0 m-2 p-2 bg-neutral-600 rounded cursor-pointer",onClick:()=>navigator.clipboard.writeText(e),children:i(Le,{})})]})};var I=g(we);const Me=e=>i("svg",f(h({preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},e),{children:i("path",{fill:"currentColor",d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})})),Ce=e=>i("svg",f(h({preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},e),{children:i("path",{fill:"currentColor",d:"M19 12.998H5v-2h14z"})})),H=s=>{var l=s,{className:e}=l,t=L(l,["className"]);return i("a",f(h({},t),{className:y("cursor-pointer w-8 h-8 flex items-center justify-center rounded",e)}))},ze=({layers:e,activeLayer:t,onSelect:s,onChangeLayerCount:l})=>d("div",{className:"flex",children:[e.map((a,n)=>i(H,{className:y({"font-bold bg-neutral-700 ":t===n}),onSelect:s,onClick:()=>{s(n)},children:n},n)),i(H,{onClick:()=>{l(1)},children:i(Me,{})}),e.length>1&&i(H,{onClick:()=>{l(-1)},children:i(Ce,{})})]});var Ne=g(ze);const O=e=>i("svg",f(h({preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},e),{children:i("path",{fill:"currentColor",d:"M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-1 2H5v-2h2v2zm0-3H5V8h2v2zm9 7H8v-2h8v2zm0-4h-2v-2h2v2zm0-3h-2V8h2v2zm3 3h-2v-2h2v2zm0-3h-2V8h2v2z"})})),$e=e=>i("svg",f(h({preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},e),{children:i("path",{fill:"currentColor",d:"M9 21c0 .5.4 1 1 1h4c.6 0 1-.5 1-1v-1H9v1zm3-19C8.1 2 5 5.1 5 9c0 2.4 1.2 4.5 3 5.7V17c0 .5.4 1 1 1h6c.6 0 1-.5 1-1v-2.3c1.8-1.3 3-3.4 3-5.7c0-3.9-3.1-7-7-7z"})})),Ee=e=>i("svg",f(h({preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},e),{children:i("path",{fill:"currentColor",d:"M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"})})),Ae=e=>i("svg",f(h({preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},e),{children:i("path",{fill:"currentColor",d:"M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"})})),Ve=e=>i("svg",f(h({preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},e),{children:i("path",{fill:"currentColor",d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34a.996.996 0 0 0-1.41 0l-1.83 1.83l3.75 3.75l1.83-1.83z"})})),Be=e=>d("svg",f(h({preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},e),{children:[i("path",{fill:"currentColor",d:"M3 2h8v2H3zm3 9h2V7h3V5H3v2h3zm6.404 9.182l7.778-7.778l1.414 1.414l-7.778 7.778z"}),i("circle",{cx:14.5,cy:14.5,r:1.5,fill:"currentColor"}),i("circle",{cx:19.5,cy:19.5,r:1.5,fill:"currentColor"}),i("path",{fill:"currentColor",d:"M15.5 11A2.5 2.5 0 0 0 18 8.5V4h3V2h-4v4.51c-.42-.32-.93-.51-1.5-.51a2.5 2.5 0 0 0 0 5zm-5.76 4.96l-1.41 1.41l-.71-.71l.35-.35a2.499 2.499 0 0 0-1.77-4.27a2.499 2.499 0 0 0-1.77 4.27l.35.35l-1.06 1.06c-.98.98-.98 2.56 0 3.54c.5.5 1.14.74 1.78.74s1.28-.24 1.77-.73l1.06-1.06l1.41 1.41l1.41-1.41l-1.41-1.41l1.41-1.41l-1.41-1.43zM5.85 14.2c.12-.12.26-.15.35-.15s.23.03.35.15c.19.2.19.51 0 .71l-.35.35l-.35-.36a.501.501 0 0 1 0-.7zm0 5.65c-.12.12-.26.15-.35.15s-.23-.03-.35-.15a.513.513 0 0 1 0-.71l1.06-1.06l.71.71l-1.07 1.06z"})]})),He=e=>i("svg",f(h({preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},e),{children:i("path",{fill:"currentColor",d:"M16.56 8.94L7.62 0L6.21 1.41l2.38 2.38l-5.15 5.15a1.49 1.49 0 0 0 0 2.12l5.5 5.5c.29.29.68.44 1.06.44s.77-.15 1.06-.44l5.5-5.5c.59-.58.59-1.53 0-2.12zM5.21 10L10 5.21L14.79 10H5.21zM19 11.5s-2 2.17-2 3.5c0 1.1.9 2 2 2s2-.9 2-2c0-1.33-2-3.5-2-3.5zM2 20h20v4H2v-4z"})})),Oe=e=>i("svg",f(h({preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},e),{children:i("path",{fill:"currentColor",d:"M7 5h2V3H7v2zm0 8h2v-2H7v2zm0 8h2v-2H7v2zm4-4h2v-2h-2v2zm0 4h2v-2h-2v2zm-8 0h2v-2H3v2zm0-4h2v-2H3v2zm0-4h2v-2H3v2zm0-4h2V7H3v2zm0-4h2V3H3v2zm8 8h2v-2h-2v2zm8 4h2v-2h-2v2zm0-4h2v-2h-2v2zm0 8h2v-2h-2v2zm0-12h2V7h-2v2zm-8 0h2V7h-2v2zm8-6v2h2V3h-2zm-8 2h2V3h-2v2zm4 16h2v-2h-2v2zm0-8h2v-2h-2v2zm0-8h2V3h-2v2z"})})),z=l=>{var a=l,{className:e,as:t="button"}=a,s=L(a,["className","as"]);return i(t,h({className:y("inline-block p-2 font-medium bg-neutral-700 rounded",e,{"hover:bg-neutral-600 cursor-pointer":!s.disabled})},s))},F=l=>{var a=l,{value:e,className:t}=a,s=L(a,["value","className"]);return i(z,h({className:y({"text-neutral-500":!e})},s))},je=()=>{const e=fe(),t="readText"in navigator.clipboard;return d("div",{className:"container flex flex-col mx-auto px-16 py-8 space-y-8 min-h-screen",children:[d("div",{className:"flex space-x-1",children:[d(z,{as:"label",children:[i(Ee,{}),i("input",{type:"file",hidden:!0,onChange:e.loadFile})]}),i(z,{disabled:!t,title:!t&&"Your browser does not allow to read clipboard content",className:{"opacity-25":!t},onClick:e.paste,children:i(Ae,{})}),i(z,{onClick:e.toggleEditingLayout,children:i(Ve,{})})]}),e.isEditingLayout&&d("div",{children:[i(I,{value:e.input,onChange:s=>{e.setInput(s.target.value)}}),d("div",{className:"flex items-center justify-end ml-auto text-right text-xs",children:[i(O,{}),"\xA0",e.layout.keys.length," keys"]})]}),e.isLayoutEmpty&&d("div",{className:"flex flex-auto flex-col items-center justify-center text-xl rounded-2xl border-2 border-dashed border-neutral-700",children:[i(O,{className:"h-64 w-64 text-neutral-700"}),d("span",{children:["Open or paste a"," ",i("a",{className:"text-amber-500 underline",target:"_blank",href:"http://www.keyboard-layout-editor.com/",rel:"noreferrer",children:"KBL"})," ","layout to get started"]})]}),!e.isLayoutEmpty&&!e.isLayoutValid&&d("div",{className:"flex flex-auto flex-col items-center justify-center text-xl rounded-2xl border-2 border-dashed border-neutral-700",children:[i(O,{className:"h-64 w-64 text-neutral-700"}),i("span",{children:e.layoutError})]}),!e.isLayoutEmpty&&e.isLayoutValid&&d("div",{className:"flex flex-col justify-center space-y-8",children:[i("div",{className:"flex-col space-y-4 f",children:i(be,{layout:e.layout,displayLabels:e.displayLabels,lightsOff:e.lightsOff,rgbColor:s=>e.layers[e.activeLayer][s],onClickKey:s=>{e.toggleRGBColor(s)}})}),d("div",{className:"flex items-center",children:[i(Ne,{activeLayer:e.activeLayer,layers:e.layers,onSelect:e.setActiveLayer,onChangeLayerCount:s=>{e.setLayerCount(e.layerCount+s)}}),d("div",{className:"flex ml-auto space-x-1",children:[i(F,{value:e.displayLabels,onClick:e.toggleLabels,children:i(Be,{})}),i(F,{value:!e.lightsOff,onClick:e.toggleLights,children:i($e,{})})]})]}),d("div",{className:"flex",children:[i(me,{activeColor:e.activeColor,colors:J,onSelectColor:e.setActiveColor}),d("div",{className:"flex items-center ml-auto space-x-1",children:[i("a",{className:"flex items-center justify-center h-8 w-8 cursor-pointer",onClick:()=>{e.fillLayer(e.activeColor)},children:i(He,{})}),i("a",{className:"flex items-center justify-center h-8 w-8 cursor-pointer",onClick:()=>{e.fillLayer(u.hsv(0,0,0))},children:i(Oe,{})})]})]}),i(I,{showCopy:!0,disabled:!0,value:e.asQMK})]})]})};var Se=g(je);const Re=re(document.getElementById("root"));Re.render(i(ue,{children:i(Se,{})}));
//# sourceMappingURL=index.569f898c.js.map
