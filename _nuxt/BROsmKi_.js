const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./yctYif1R.js","./rFXukzBD.js","./yMLTtgD3.js","./l_eqcaUj.js","./C-v3KzvZ.js"])))=>i.map(i=>d[i]);
import{m,L as p}from"./rFXukzBD.js";import{h as o,u as f}from"./l_eqcaUj.js";import{q as g,w as s,e as c,s as h,j as v}from"./yMLTtgD3.js";const $=async t=>{const{content:n}=m().public;typeof(t==null?void 0:t.params)!="function"&&(t=g(t));const a=t.params(),i=n.experimental.stripQueryParameters?s(`/navigation/${`${o(a)}.${n.integrity}`}/${c(a)}.json`):s(`/navigation/${o(a)}.${n.integrity}.json`);if(h())return(await p(()=>import("./yctYif1R.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(r=>r.generateNavigation))(a);const e=await $fetch(i,{method:"GET",responseType:"json",params:n.experimental.stripQueryParameters?void 0:{_params:v(a),previewToken:f().getPreviewToken()}});if(typeof e=="string"&&e.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return e};export{$ as f};
