function N(){}const Q=t=>t;function gt(t,e){for(const n in e)t[n]=e[n];return t}function bt(t){return t&&typeof t=="object"&&typeof t.then=="function"}function ct(t){return t()}function rt(){return Object.create(null)}function A(t){t.forEach(ct)}function D(t){return typeof t=="function"}function Wt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function $t(t){return Object.keys(t).length===0}function xt(t,...e){if(t==null)return N;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Gt(t,e,n){t.$$.on_destroy.push(xt(e,n))}function Jt(t,e,n,i){if(t){const r=ot(t,e,n,i);return t[0](r)}}function ot(t,e,n,i){return t[1]&&i?gt(n.ctx.slice(),t[1](i(e))):n.ctx}function Kt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],s=Math.max(e.dirty.length,r.length);for(let c=0;c<s;c+=1)u[c]=e.dirty[c]|r[c];return u}return e.dirty|r}return e.dirty}function Qt(t,e,n,i,r,u){if(r){const s=ot(e,n,i,u);t.p(s,r)}}function Vt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Xt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Yt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Zt(t){return t??""}function te(t,e,n){return t.set(n),e}function ee(t){return t&&D(t.destroy)?t.destroy:N}const ut=typeof window<"u";let V=ut?()=>window.performance.now():()=>Date.now(),X=ut?t=>requestAnimationFrame(t):N;const j=new Set;function lt(t){j.forEach(e=>{e.c(t)||(j.delete(e),e.f())}),j.size!==0&&X(lt)}function Y(t){let e;return j.size===0&&X(lt),{promise:new Promise(n=>{j.add(e={c:t,f:n})}),abort(){j.delete(e)}}}let W=!1;function wt(){W=!0}function vt(){W=!1}function kt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function Et(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let l=0;l<e.length;l++){const _=e[l];_.claim_order!==void 0&&o.push(_)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const l=e[o].claim_order,_=(r>0&&e[n[r]].claim_order<=l?r+1:kt(1,r,d=>e[n[d]].claim_order,l))-1;i[o]=n[_]+1;const f=_+1;n[f]=o,r=Math.max(f,r)}const u=[],s=[];let c=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(u.push(e[o-1]);c>=o;c--)s.push(e[c]);c--}for(;c>=0;c--)s.push(e[c]);u.reverse(),s.sort((o,l)=>o.claim_order-l.claim_order);for(let o=0,l=0;o<s.length;o++){for(;l<u.length&&s[o].claim_order>=u[l].claim_order;)l++;const _=l<u.length?u[l]:null;t.insertBefore(s[o],_)}}function Nt(t,e){t.appendChild(e)}function at(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function St(t){const e=_t("style");return At(at(t),e),e.sheet}function At(t,e){return Nt(t.head||t,e),e.sheet}function Ct(t,e){if(W){for(Et(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function ne(t,e,n){W&&!n?Ct(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ft(t){t.parentNode&&t.parentNode.removeChild(t)}function ie(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _t(t){return document.createElement(t)}function jt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function Z(t){return document.createTextNode(t)}function re(){return Z(" ")}function se(){return Z("")}function ce(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function oe(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Mt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ue(t,e){for(const n in e)Mt(t,n,e[n])}function le(t){return t===""?null:+t}function Dt(t){return Array.from(t.childNodes)}function Tt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function dt(t,e,n,i,r=!1){Tt(t);const u=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const c=t[s];if(e(c)){const o=n(c);return o===void 0?t.splice(s,1):t[s]=o,r||(t.claim_info.last_index=s),c}}for(let s=t.claim_info.last_index-1;s>=0;s--){const c=t[s];if(e(c)){const o=n(c);return o===void 0?t.splice(s,1):t[s]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,c}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function ht(t,e,n,i){return dt(t,r=>r.nodeName===e,r=>{const u=[];for(let s=0;s<r.attributes.length;s++){const c=r.attributes[s];n[c.name]||u.push(c.name)}u.forEach(s=>r.removeAttribute(s))},()=>i(e))}function ae(t,e,n){return ht(t,e,n,_t)}function fe(t,e,n){return ht(t,e,n,jt)}function Pt(t,e){return dt(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>Z(e),!0)}function _e(t){return Pt(t," ")}function de(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function he(t,e){t.value=e??""}function me(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function pe(t,e){for(let n=0;n<t.options.length;n+=1){const i=t.options[n];if(i.__value===e){i.selected=!0;return}}t.selectedIndex=-1}function ye(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function ge(t,e,n){t.classList[n?"add":"remove"](e)}function mt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function be(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const u=r.textContent.trim();u===`HEAD_${t}_END`?(i-=1,n.push(r)):u===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function $e(t,e){return new t(e)}const H=new Map;let F=0;function Ot(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Rt(t,e){const n={stylesheet:St(e),rules:{}};return H.set(t,n),n}function I(t,e,n,i,r,u,s,c=0){const o=16.666/i;let l=`{
`;for(let m=0;m<=1;m+=o){const g=e+(n-e)*u(m);l+=m*100+`%{${s(g,1-g)}}
`}const _=l+`100% {${s(n,1-n)}}
}`,f=`__svelte_${Ot(_)}_${c}`,d=at(t),{stylesheet:a,rules:h}=H.get(d)||Rt(d,t);h[f]||(h[f]=!0,a.insertRule(`@keyframes ${f} ${_}`,a.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${f} ${i}ms linear ${r}ms 1 both`,F+=1,f}function U(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),F-=r,F||Lt())}function Lt(){X(()=>{F||(H.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&ft(e)}),H.clear())})}let R;function E(t){R=t}function C(){if(!R)throw new Error("Function called outside component initialization");return R}function xe(t){C().$$.before_update.push(t)}function we(t){C().$$.on_mount.push(t)}function ve(t){C().$$.after_update.push(t)}function ke(){const t=C();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const u=mt(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,u)}),!u.defaultPrevented}return!0}}function Ee(t,e){return C().$$.context.set(t,e),e}function Ne(t){return C().$$.context.get(t)}const O=[],st=[],z=[],J=[],pt=Promise.resolve();let K=!1;function yt(){K||(K=!0,pt.then(tt))}function Se(){return yt(),pt}function M(t){z.push(t)}function Ae(t){J.push(t)}const G=new Set;let q=0;function tt(){const t=R;do{for(;q<O.length;){const e=O[q];q++,E(e),qt(e.$$)}for(E(null),O.length=0,q=0;st.length;)st.pop()();for(let e=0;e<z.length;e+=1){const n=z[e];G.has(n)||(G.add(n),n())}z.length=0}while(O.length);for(;J.length;)J.pop()();K=!1,G.clear(),E(t)}function qt(t){if(t.fragment!==null){t.update(),A(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(M)}}let P;function et(){return P||(P=Promise.resolve(),P.then(()=>{P=null})),P}function S(t,e,n){t.dispatchEvent(mt(`${e?"intro":"outro"}${n}`))}const B=new Set;let v;function zt(){v={r:0,c:[],p:v}}function Bt(){v.r||A(v.c),v=v.p}function nt(t,e){t&&t.i&&(B.delete(t),t.i(e))}function Ht(t,e,n,i){if(t&&t.o){if(B.has(t))return;B.add(t),v.c.push(()=>{B.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const it={duration:0};function Ce(t,e,n){const i={direction:"in"};let r=e(t,n,i),u=!1,s,c,o=0;function l(){s&&U(t,s)}function _(){const{delay:d=0,duration:a=300,easing:h=Q,tick:p=N,css:m}=r||it;m&&(s=I(t,0,1,a,d,h,m,o++)),p(0,1);const g=V()+d,k=g+a;c&&c.abort(),u=!0,M(()=>S(t,!0,"start")),c=Y(b=>{if(u){if(b>=k)return p(1,0),S(t,!0,"end"),l(),u=!1;if(b>=g){const $=h((b-g)/a);p($,1-$)}}return u})}let f=!1;return{start(){f||(f=!0,U(t),D(r)?(r=r(i),et().then(_)):_())},invalidate(){f=!1},end(){u&&(l(),u=!1)}}}function je(t,e,n){const i={direction:"out"};let r=e(t,n,i),u=!0,s;const c=v;c.r+=1;function o(){const{delay:l=0,duration:_=300,easing:f=Q,tick:d=N,css:a}=r||it;a&&(s=I(t,1,0,_,l,f,a));const h=V()+l,p=h+_;M(()=>S(t,!1,"start")),Y(m=>{if(u){if(m>=p)return d(0,1),S(t,!1,"end"),--c.r||A(c.c),!1;if(m>=h){const g=f((m-h)/_);d(1-g,g)}}return u})}return D(r)?et().then(()=>{r=r(i),o()}):o(),{end(l){l&&r.tick&&r.tick(1,0),u&&(s&&U(t,s),u=!1)}}}function Me(t,e,n,i){const r={direction:"both"};let u=e(t,n,r),s=i?0:1,c=null,o=null,l=null;function _(){l&&U(t,l)}function f(a,h){const p=a.b-s;return h*=Math.abs(p),{a:s,b:a.b,d:p,duration:h,start:a.start,end:a.start+h,group:a.group}}function d(a){const{delay:h=0,duration:p=300,easing:m=Q,tick:g=N,css:k}=u||it,b={start:V()+h,b:a};a||(b.group=v,v.r+=1),c||o?o=b:(k&&(_(),l=I(t,s,a,p,h,m,k)),a&&g(0,1),c=f(b,p),M(()=>S(t,a,"start")),Y($=>{if(o&&$>o.start&&(c=f(o,p),o=null,S(t,c.b,"start"),k&&(_(),l=I(t,s,c.b,c.duration,0,m,u.css))),c){if($>=c.end)g(s=c.b,1-s),S(t,c.b,"end"),o||(c.b?_():--c.group.r||A(c.group.c)),c=null;else if($>=c.start){const T=$-c.start;s=c.a+c.d*m(T/c.duration),g(s,1-s)}}return!!(c||o)}))}return{run(a){D(u)?et().then(()=>{u=u(r),d(a)}):d(a)},end(){_(),c=o=null}}}function De(t,e){const n=e.token={};function i(r,u,s,c){if(e.token!==n)return;e.resolved=c;let o=e.ctx;s!==void 0&&(o=o.slice(),o[s]=c);const l=r&&(e.current=r)(o);let _=!1;e.block&&(e.blocks?e.blocks.forEach((f,d)=>{d!==u&&f&&(zt(),Ht(f,1,1,()=>{e.blocks[d]===f&&(e.blocks[d]=null)}),Bt())}):e.block.d(1),l.c(),nt(l,1),l.m(e.mount(),e.anchor),_=!0),e.block=l,e.blocks&&(e.blocks[u]=l),_&&tt()}if(bt(t)){const r=C();if(t.then(u=>{E(r),i(e.then,1,e.value,u),E(null)},u=>{if(E(r),i(e.catch,2,e.error,u),E(null),!e.hasCatch)throw u}),e.current!==e.pending)return i(e.pending,0),!0}else{if(e.current!==e.then)return i(e.then,1,e.value,t),!0;e.resolved=t}}function Te(t,e,n){const i=e.slice(),{resolved:r}=t;t.current===t.then&&(i[t.value]=r),t.current===t.catch&&(i[t.error]=r),t.block.p(i,n)}function Pe(t,e){t.d(1),e.delete(t.key)}function Oe(t,e,n,i,r,u,s,c,o,l,_,f){let d=t.length,a=u.length,h=d;const p={};for(;h--;)p[t[h].key]=h;const m=[],g=new Map,k=new Map;for(h=a;h--;){const y=f(r,u,h),x=n(y);let w=s.get(x);w?i&&w.p(y,e):(w=l(x,y),w.c()),g.set(x,m[h]=w),x in p&&k.set(x,Math.abs(h-p[x]))}const b=new Set,$=new Set;function T(y){nt(y,1),y.m(c,_),s.set(y.key,y),_=y.first,a--}for(;d&&a;){const y=m[a-1],x=t[d-1],w=y.key,L=x.key;y===x?(_=y.first,d--,a--):g.has(L)?!s.has(w)||b.has(w)?T(y):$.has(L)?d--:k.get(w)>k.get(L)?($.add(w),T(y)):(b.add(L),d--):(o(x,s),d--)}for(;d--;){const y=t[d];g.has(y.key)||o(y,s)}for(;a;)T(m[a-1]);return m}function Re(t,e){const n={},i={},r={$$scope:1};let u=t.length;for(;u--;){const s=t[u],c=e[u];if(c){for(const o in s)o in c||(i[o]=1);for(const o in c)r[o]||(n[o]=c[o],r[o]=1);t[u]=c}else for(const o in s)r[o]=1}for(const s in i)s in n||(n[s]=void 0);return n}function Le(t){return typeof t=="object"&&t!==null?t:{}}function qe(t,e,n,i){const r=t.$$.props[e];r!==void 0&&(t.$$.bound[r]=n,i===void 0&&n(t.$$.ctx[r]))}function ze(t){t&&t.c()}function Be(t,e){t&&t.l(e)}function Ft(t,e,n,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(e,n),i||M(()=>{const s=t.$$.on_mount.map(ct).filter(D);t.$$.on_destroy?t.$$.on_destroy.push(...s):A(s),t.$$.on_mount=[]}),u.forEach(M)}function It(t,e){const n=t.$$;n.fragment!==null&&(A(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ut(t,e){t.$$.dirty[0]===-1&&(O.push(t),yt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function He(t,e,n,i,r,u,s,c=[-1]){const o=R;E(t);const l=t.$$={fragment:null,ctx:[],props:u,update:N,not_equal:r,bound:rt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:rt(),dirty:c,skip_bound:!1,root:e.target||o.$$.root};s&&s(l.root);let _=!1;if(l.ctx=n?n(t,e.props||{},(f,d,...a)=>{const h=a.length?a[0]:d;return l.ctx&&r(l.ctx[f],l.ctx[f]=h)&&(!l.skip_bound&&l.bound[f]&&l.bound[f](h),_&&Ut(t,f)),d}):[],l.update(),_=!0,A(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){wt();const f=Dt(e.target);l.fragment&&l.fragment.l(f),f.forEach(ft)}else l.fragment&&l.fragment.c();e.intro&&nt(t.$$.fragment),Ft(t,e.target,e.anchor,e.customElement),vt(),tt()}E(o)}class Fe{$destroy(){It(this,1),this.$destroy=N}$on(e,n){if(!D(n))return N;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!$t(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{qe as $,Q as A,Bt as B,ve as C,we as D,Mt as E,me as F,zt as G,st as H,$e as I,ze as J,Be as K,Ft as L,It as M,Ne as N,jt as O,fe as P,M as Q,Ce as R,Fe as S,Se as T,ie as U,Zt as V,ge as W,ce as X,ee as Y,D as Z,A as _,re as a,Ae as a0,Me as a1,je as a2,gt as a3,Xt as a4,ke as a5,tt as a6,he as a7,le as a8,ue as a9,Re as aa,Yt as ab,ye as ac,pe as ad,oe as ae,De as af,Te as ag,Le as ah,Oe as ai,Pe as aj,Dt as b,ae as c,Pt as d,_t as e,ft as f,_e as g,ne as h,He as i,Ct as j,de as k,Gt as l,Jt as m,N as n,Vt as o,Kt as p,nt as q,Ht as r,Wt as s,Z as t,Qt as u,se as v,be as w,te as x,Ee as y,xe as z};
