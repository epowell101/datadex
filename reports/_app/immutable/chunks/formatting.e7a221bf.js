import{B as l,f as I,i as x,a as _,s as w,b as h}from"./VennDiagram.svelte_svelte_type_style_lang.15ed26fd.js";import{O as b}from"./index.f13c6880.js";const O="customFormattingSettings",L="_inputs";function T(e,...t){if(typeof e=="function")throw new Error("You must supply the data as the first argument to tidy()");let r=e;for(const n of t)n&&(r=n(r));return r}function y(e){return r=>{const n=[];for(const i of r){const f={...i};for(const s in e){const a=e[s],o=typeof a=="function"?a(f):a;f[s]=o}n.push(f)}return n}}function d(e){if(e&&typeof e=="string"){let t=e.split(" ");e.includes(":")||(e=e+"T00:00:00"),t.length>2&&(e=t[0]+" "+t[1]);const r=/\.([^\s]+)/;e=e.replace(r,""),e=e.replace("Z",""),e=e.replace(" ","T")}return e}function R(e,t){return e=T(e,y({[t]:r=>r[t]?new Date(d(r[t])):null})),e}function D(e,t){return e=T(e,y({[t]:r=>d(r[t])})),e}const g="axis",u="value",C=()=>{var e;return((e=b(O))==null?void 0:e.getCustomFormats())||[]},$=(e,t,r)=>{let n=N(e);if(t.evidenceType==="string")return;if(n){let f=C(),s=[...l,...f].find(a=>{var o,c;return((o=a.formatTag)==null?void 0:o.toLowerCase())===((c=n==null?void 0:n.toLowerCase)==null?void 0:c.call(n))});if(s)return s}let i=I(e,t,r);if(i)return i};function V(e,t=void 0){let r=e,n=C(),i=[...l,...n].find(s=>{var a,o;return((a=s.formatTag)==null?void 0:a.toLowerCase())===((o=r==null?void 0:r.toLowerCase)==null?void 0:o.call(r))}),f={};return i||(f={formatTag:"custom",formatCode:r},t&&(f.valueType=t),f)}const z=(e,t=void 0,r=void 0)=>{try{return p(e,t,r,u)}catch(n){return console.warn(`Unexpected error calling applyFormatting(${e}, ${t}, ${u}, ${r}). Error=${n}`),e}},M=(e,t=void 0,r=void 0)=>{try{return p(e,t,r,g)}catch{}return e},X=(e,t)=>{let r=e;if(e&&(t!=null&&t.formatTag)){let n=e.toLowerCase().lastIndexOf(`_${t.formatTag.toLowerCase()}`),i="";n>0&&(typeof(t==null?void 0:t.titleTagReplacement)=="string"&&(i=t.titleTagReplacement),r=e.substring(0,n)+i)}return r},E=e=>{switch(e){case"number":return 1234;case"date":return"2022-01-03";default:return}},G=e=>{var n,i;let r=((n=e.userInput)==null?void 0:n.trim())||e.exampleInput||E(e.valueType);if(r)try{let f;if(e.valueType==="number"){let s=Number(r);f={min:s,max:s,median:s,maxDecimals:((i=s.toString().split(".")[1])==null?void 0:i.length)||0,unitType:"number"}}return p(r,e,f,u)}catch{}return""};function p(e,t=void 0,r=void 0,n=u){if(e==null)return"-";let i;if(t)try{let f=m(t,n),s;try{t.valueType==="date"&&typeof e=="string"?s=new Date(d(e)):e instanceof Date?s=new Date(e.toISOString().slice(0,-1)):t.valueType==="number"&&typeof e!="number"&&!Number.isNaN(e)?s=Number(e):s=e}catch{s=e}if(x(t,f))try{i=_(s,t,r)}catch(a){console.warn(`Unexpected error applying auto formatting. Error=${a}`)}else i=w.format(f,s)}catch(f){console.warn(`Unexpected error applying formatting ${f}`)}return i===void 0&&(i=h(e)),i}function m(e,t=u){return typeof e=="string"?e:t===g&&(e!=null&&e.axisFormatCode)?e.axisFormatCode:e==null?void 0:e.formatCode}function N(e){let t=e.toLowerCase(),r=t.lastIndexOf("_");if(r>0)return t.substr(r).replace("_","")}export{O as C,L as I,X as a,M as b,R as c,G as d,E as e,z as f,V as g,$ as l,y as m,D as s,T as t};
