import{S as le,i as ae,s as re,C as oe,y as U,k,D as se,t as y,p as T,h as m,u as L,e as v,v as N,b as w,d as E,j as I,l as g,B as O,o as R,E as W,F as Y,q,c as M,a as j,g as C,f as A,G,m as B,n as ne,r as P}from"../chunks/index.f13c6880.js";import"../chunks/VennDiagram.svelte_svelte_type_style_lang.15ed26fd.js";import"../chunks/paths.41919413.js";import{I as H,D as ce,T as ie,A as fe,a as ue,b as _e,_ as he}from"../chunks/Icon.40758fcc.js";function J(h,e,l){const t=h.slice();return t[8]=e[l][0],t[9]=e[l][1],t}function K(h,e,l){const t=h.slice();return t[12]=e[l][0],t[13]=e[l][1],t}function Q(h,e,l){const t=h.slice();return t[16]=e[l],t}function me(h){let e,l,t=h[19].message+"",a;return{c(){e=L(`An error was encountered while loading project schema.

	`),l=v("pre"),a=L(t),this.h()},l(c){e=N(c,`An error was encountered while loading project schema.

	`),l=w(c,"PRE",{class:!0});var _=E(l);a=N(_,t),_.forEach(m),this.h()},h(){I(l,"class","px-4 py-2 bg-red-800 text-white")},m(c,_){k(c,e,_),k(c,l,_),g(l,a)},p:O,i:O,o:O,d(c){c&&m(e),c&&m(l)}}}function pe(h){let e,l,t,a=[],c=new Map,_,s=Object.entries(h[7]);const n=r=>r[8];for(let r=0;r<s.length;r+=1){let o=J(h,s,r),p=n(o);c.set(p,a[r]=te(p,o))}return{c(){e=v("section"),l=v("div"),t=v("ul");for(let r=0;r<a.length;r+=1)a[r].c();this.h()},l(r){e=w(r,"SECTION",{});var o=E(e);l=w(o,"DIV",{});var p=E(l);t=w(p,"UL",{class:!0});var f=E(t);for(let b=0;b<a.length;b+=1)a[b].l(f);f.forEach(m),p.forEach(m),o.forEach(m),this.h()},h(){I(t,"class","list-none m-0 p-0 flex flex-col gap-1 mb-1")},m(r,o){k(r,e,o),g(e,l),g(l,t);for(let p=0;p<a.length;p+=1)a[p].m(t,null);_=!0},p(r,o){o&7&&(s=Object.entries(r[7]),R(),a=W(a,o,n,1,r,s,c,t,Y,te,null,J),q())},i(r){if(!_){for(let o=0;o<s.length;o+=1)y(a[o]);_=!0}},o(r){for(let o=0;o<a.length;o+=1)T(a[o]);_=!1},d(r){r&&m(e);for(let o=0;o<a.length;o+=1)a[o].d()}}}function X(h){let e,l=[],t=new Map,a,c,_=Object.entries(h[9]);const s=n=>n[12];for(let n=0;n<_.length;n+=1){let r=K(h,_,n),o=s(r);t.set(o,l[n]=ee(o,r))}return{c(){e=v("ul");for(let n=0;n<l.length;n+=1)l[n].c();a=j(),this.h()},l(n){e=w(n,"UL",{class:!0});var r=E(e);for(let o=0;o<l.length;o+=1)l[o].l(r);a=A(r),r.forEach(m),this.h()},h(){I(e,"class","list-none m-0 flex flex-col gap-1")},m(n,r){k(n,e,r);for(let o=0;o<l.length;o+=1)l[o].m(e,null);g(e,a),c=!0},p(n,r){r&5&&(_=Object.entries(n[9]),R(),l=W(l,r,s,1,n,_,t,e,Y,ee,a,K),q())},i(n){if(!c){for(let r=0;r<_.length;r+=1)y(l[r]);c=!0}},o(n){for(let r=0;r<l.length;r+=1)T(l[r]);c=!1},d(n){n&&m(e);for(let r=0;r<l.length;r+=1)l[r].d()}}}function Z(h){let e,l=[],t=new Map,a,c=h[13].columns;const _=s=>s[16].column_name;for(let s=0;s<c.length;s+=1){let n=Q(h,c,s),r=_(n);t.set(r,l[s]=x(r,n))}return{c(){e=v("ul");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){e=w(s,"UL",{class:!0});var n=E(e);for(let r=0;r<l.length;r+=1)l[r].l(n);n.forEach(m),this.h()},h(){I(e,"class","list-none m-0 flex flex-col gap-1")},m(s,n){k(s,e,n);for(let r=0;r<l.length;r+=1)l[r].m(e,null);a=!0},p(s,n){n&4&&(c=s[13].columns,R(),l=W(l,n,_,1,s,c,t,e,Y,x,null,Q),q())},i(s){if(!a){for(let n=0;n<c.length;n+=1)y(l[n]);a=!0}},o(s){for(let n=0;n<l.length;n+=1)T(l[n]);a=!1},d(s){s&&m(e);for(let n=0;n<l.length;n+=1)l[n].d()}}}function de(h){let e,l;return e=new H({props:{src:fe,class:"text-gray-700 w-5 h-5"}}),{c(){M(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,a){B(e,t,a),l=!0},p:O,i(t){l||(y(e.$$.fragment,t),l=!0)},o(t){T(e.$$.fragment,t),l=!1},d(t){P(e,t)}}}function be(h){let e,l;return e=new H({props:{src:ue,class:"text-gray-700 w-5 h-5"}}),{c(){M(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,a){B(e,t,a),l=!0},p:O,i(t){l||(y(e.$$.fragment,t),l=!0)},o(t){T(e.$$.fragment,t),l=!1},d(t){P(e,t)}}}function ge(h){let e,l;return e=new H({props:{src:_e,class:"text-gray-700 w-5 h-5"}}),{c(){M(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,a){B(e,t,a),l=!0},p:O,i(t){l||(y(e.$$.fragment,t),l=!0)},o(t){T(e.$$.fragment,t),l=!1},d(t){P(e,t)}}}function ke(h){let e,l;return e=new H({props:{src:he,class:"text-gray-700 w-5 h-5"}}),{c(){M(e.$$.fragment)},l(t){C(e.$$.fragment,t)},m(t,a){B(e,t,a),l=!0},p:O,i(t){l||(y(e.$$.fragment,t),l=!0)},o(t){T(e.$$.fragment,t),l=!1},d(t){P(e,t)}}}function x(h,e){let l,t,a,c,_,s,n,r=e[16].column_name+"",o,p,f=e[16].data_type+"",b,i;const u=[ke,ge,be,de],d=[];function S($,D){return $[16].data_type==="INT"||$[16].data_type==="BIGINT"||$[16].data_type==="SMALLINT"||$[16].data_type==="TINYINT"||$[16].data_type==="DOUBLE"?0:$[16].data_type==="DATE"||$[16].data_type==="DATETIME"||$[16].data_type==="TIMESTAMP"?1:$[16].data_type==="BOOLEAN"?2:3}return a=S(e),c=d[a]=u[a](e),{key:h,first:null,c(){l=v("li"),t=v("div"),c.c(),_=j(),s=v("div"),n=v("b"),o=L(r),p=L("  "),b=L(f),this.h()},l($){l=w($,"LI",{class:!0});var D=E(l);t=w(D,"DIV",{class:!0});var F=E(t);c.l(F),_=A(F),s=w(F,"DIV",{class:!0});var V=E(s);n=w(V,"B",{});var z=E(n);o=N(z,r),z.forEach(m),p=N(V,"  "),b=N(V,f),V.forEach(m),F.forEach(m),D.forEach(m),this.h()},h(){I(s,"class","pl-2 lowercase"),I(t,"class","flex px-2 py-1 rounded w-full hover:bg-blue-50"),I(l,"class","font-mono text-sm ml-6 rounded flex flex-row"),this.first=l},m($,D){k($,l,D),g(l,t),d[a].m(t,null),g(t,_),g(t,s),g(s,n),g(n,o),g(s,p),g(s,b),i=!0},p($,D){e=$,c.p(e,D)},i($){i||(y(c),i=!0)},o($){T(c),i=!1},d($){$&&m(l),d[a].d()}}}function ee(h,e){let l,t,a,c,_=e[12]+"",s,n,r,o,p,f;a=new H({props:{src:ie,class:"text-gray-700 w-5 h-5 mr-1"}});function b(){return e[5](e[13])}let i=e[0]===e[13]&&Z(e);return{key:h,first:null,c(){l=v("li"),t=v("button"),M(a.$$.fragment),c=j(),s=L(_),n=j(),i&&i.c(),r=U(),this.h()},l(u){l=w(u,"LI",{class:!0});var d=E(l);t=w(d,"BUTTON",{class:!0});var S=E(t);C(a.$$.fragment,S),c=A(S),s=N(S,_),S.forEach(m),d.forEach(m),n=A(u),i&&i.l(u),r=U(),this.h()},h(){I(t,"class","bg-gray-200 px-2 py-1 rounded flex w-full hover:bg-blue-200"),G(t,"bg-blue-200",e[0]===e[13]),I(l,"class","font-mono m-0 text-sm font-bold ml-3"),this.first=l},m(u,d){k(u,l,d),g(l,t),B(a,t,null),g(t,c),g(t,s),k(u,n,d),i&&i.m(u,d),k(u,r,d),o=!0,p||(f=ne(t,"click",b),p=!0)},p(u,d){e=u,(!o||d&5)&&G(t,"bg-blue-200",e[0]===e[13]),e[0]===e[13]?i?(i.p(e,d),d&1&&y(i,1)):(i=Z(e),i.c(),y(i,1),i.m(r.parentNode,r)):i&&(R(),T(i,1,1,()=>{i=null}),q())},i(u){o||(y(a.$$.fragment,u),y(i),o=!0)},o(u){T(a.$$.fragment,u),T(i),o=!1},d(u){u&&m(l),P(a),u&&m(n),i&&i.d(u),u&&m(r),p=!1,f()}}}function te(h,e){let l,t,a,c,_=e[8]+"",s,n,r,o,p,f;a=new H({props:{src:ce,class:"text-white w-5 h-5 mr-1"}});function b(){return e[4](e[8])}let i=e[1]===e[8]&&X(e);return{key:h,first:null,c(){l=v("li"),t=v("button"),M(a.$$.fragment),c=j(),s=L(_),n=j(),i&&i.c(),r=U(),this.h()},l(u){l=w(u,"LI",{class:!0});var d=E(l);t=w(d,"BUTTON",{class:!0});var S=E(t);C(a.$$.fragment,S),c=A(S),s=N(S,_),S.forEach(m),d.forEach(m),n=A(u),i&&i.l(u),r=U(),this.h()},h(){I(t,"class","bg-gray-500 px-2 py-1 rounded font-bold flex w-full hover:bg-blue-500"),G(t,"bg-blue-500",e[1]===e[8]),I(l,"class","font-mono m-0 text-sm text-white"),this.first=l},m(u,d){k(u,l,d),g(l,t),B(a,t,null),g(t,c),g(t,s),k(u,n,d),i&&i.m(u,d),k(u,r,d),o=!0,p||(f=ne(t,"click",b),p=!0)},p(u,d){e=u,(!o||d&6)&&G(t,"bg-blue-500",e[1]===e[8]),e[1]===e[8]?i?(i.p(e,d),d&2&&y(i,1)):(i=X(e),i.c(),y(i,1),i.m(r.parentNode,r)):i&&(R(),T(i,1,1,()=>{i=null}),q())},i(u){o||(y(a.$$.fragment,u),y(i),o=!0)},o(u){T(a.$$.fragment,u),T(i),o=!1},d(u){u&&m(l),P(a),u&&m(n),i&&i.d(u),u&&m(r),p=!1,f()}}}function $e(h){let e;return{c(){e=L("Loading Schema Information...")},l(l){e=N(l,"Loading Schema Information...")},m(l,t){k(l,e,t)},p:O,i:O,o:O,d(l){l&&m(e)}}}function ye(h){let e,l,t={ctx:h,current:null,token:null,hasCatch:!0,pending:$e,then:pe,catch:me,value:7,error:19,blocks:[,,,]};return oe(h[2](),t),{c(){e=U(),t.block.c()},l(a){e=U(),t.block.l(a)},m(a,c){k(a,e,c),t.block.m(a,t.anchor=c),t.mount=()=>e.parentNode,t.anchor=e,l=!0},p(a,[c]){h=a,se(t,h,c)},i(a){l||(y(t.block),l=!0)},o(a){for(let c=0;c<3;c+=1){const _=t.blocks[c];T(_)}l=!1},d(a){a&&m(e),t.block.d(a),t.token=null,t=null}}}function ve(h,e,l){let{data:t}=e,{__db:a}=t;async function c(){const o=await a.query("SELECT * FROM information_schema.tables WHERE table_catalog = 'memory' AND table_name != 'stats'"),p={};return await Promise.all(o.map(async f=>{const b=await a.query(`SELECT * FROM information_schema.columns WHERE table_name = '${f.table_name}' AND table_schema = '${f.table_schema}'`);p[f.table_schema]||(p[f.table_schema]={}),p[f.table_schema][f.table_name]={table:f,columns:b}})),p}let _="",s="";const n=o=>{l(1,s=s===o?"":o),l(0,_="")},r=o=>{l(0,_=_===o?"":o)};return h.$$set=o=>{"data"in o&&l(3,t=o.data)},[_,s,c,t,n,r]}class we extends le{constructor(e){super(),ae(this,e,ve,ye,re,{data:3})}}function Ee(h){let e,l,t,a,c,_,s,n,r,o,p;return o=new we({props:{data:h[0]}}),{c(){e=v("h1"),l=L("Project Schema"),t=j(),a=v("p"),c=L("This page details the tables and columns that are currently loaded in your project."),_=j(),s=v("h2"),n=L("Sources"),r=j(),M(o.$$.fragment),this.h()},l(f){e=w(f,"H1",{class:!0});var b=E(e);l=N(b,"Project Schema"),b.forEach(m),t=A(f),a=w(f,"P",{class:!0});var i=E(a);c=N(i,"This page details the tables and columns that are currently loaded in your project."),i.forEach(m),_=A(f),s=w(f,"H2",{class:!0});var u=E(s);n=N(u,"Sources"),u.forEach(m),r=A(f),C(o.$$.fragment,f),this.h()},h(){I(e,"class","markdown"),I(a,"class","markdown"),I(s,"class","markdown")},m(f,b){k(f,e,b),g(e,l),k(f,t,b),k(f,a,b),g(a,c),k(f,_,b),k(f,s,b),g(s,n),k(f,r,b),B(o,f,b),p=!0},p(f,[b]){const i={};b&1&&(i.data=f[0]),o.$set(i)},i(f){p||(y(o.$$.fragment,f),p=!0)},o(f){T(o.$$.fragment,f),p=!1},d(f){f&&m(e),f&&m(t),f&&m(a),f&&m(_),f&&m(s),f&&m(r),P(o,f)}}}function Te(h,e,l){let{data:t}=e;return h.$$set=a=>{"data"in a&&l(0,t=a.data)},[t]}class Oe extends le{constructor(e){super(),ae(this,e,Te,Ee,re,{data:0})}}export{Oe as component};
