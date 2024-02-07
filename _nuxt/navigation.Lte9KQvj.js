import{q as m,D as p}from"./entry.Xp8RL9Ce.js";import{h as o,u as f}from"./preview.0EL4M6w9.js";import{q as g,w as s,e as c,s as h,j as v}from"./query.JkIyifol.js";const $=async t=>{const{content:n}=m().public;typeof(t==null?void 0:t.params)!="function"&&(t=g(t));const a=t.params(),i=n.experimental.stripQueryParameters?s(`/navigation/${`${o(a)}.${n.integrity}`}/${c(a)}.json`):s(`/navigation/${o(a)}.${n.integrity}.json`);if(h())return(await p(()=>import("./client-db.vtgcuLjr.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url).then(r=>r.generateNavigation))(a);const e=await $fetch(i,{method:"GET",responseType:"json",params:n.experimental.stripQueryParameters?void 0:{_params:v(a),previewToken:f().getPreviewToken()}});if(typeof e=="string"&&e.startsWith("<!DOCTYPE html>"))throw new Error("Not found");return e};export{$ as f};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./client-db.vtgcuLjr.js","./entry.Xp8RL9Ce.js","./query.JkIyifol.js","./preview.0EL4M6w9.js","./index.1dSrIji7.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
