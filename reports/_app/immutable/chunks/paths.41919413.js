import{B as b,s as h}from"./index.f13c6880.js";const e=[];function d(i,a=b){let o;const n=new Set;function r(t){if(h(i,t)&&(i=t,o)){const c=!e.length;for(const s of n)s[1](),e.push(s,i);if(c){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function l(t){r(t(i))}function _(t,c=b){const s=[t,c];return n.add(s),n.size===1&&(o=a(r)||b),t(i),()=>{n.delete(s),n.size===0&&(o(),o=null)}}return{set:r,update:l,subscribe:_}}var f;const p=((f=globalThis.__sveltekit_1fc685z)==null?void 0:f.base)??"";var u;const z=((u=globalThis.__sveltekit_1fc685z)==null?void 0:u.assets)??p;export{z as a,p as b,d as w};
