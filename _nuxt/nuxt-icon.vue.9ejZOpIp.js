import{g as m,z as p,i as d,A as f,o as v,c as E,j as g,u as l,H as e}from"./entry.yPxghxem.js";const h=["innerHTML"],x=m({__name:"nuxt-icon",props:{name:{},filled:{type:Boolean,default:!1}},async setup(u){let o,i;const a=u,r=p("");let c=!1;async function _(){try{const n=await Object.assign({"/assets/icons/github.svg":()=>e(()=>import("./github.h6rCr5xY.js"),__vite__mapDeps([]),import.meta.url).then(t=>t.default),"/assets/icons/gitlab.svg":()=>e(()=>import("./gitlab.zVQR-mfc.js"),__vite__mapDeps([]),import.meta.url).then(t=>t.default),"/assets/icons/link.svg":()=>e(()=>import("./link.zxFXP0F_.js"),__vite__mapDeps([]),import.meta.url).then(t=>t.default),"/assets/icons/linkedin.svg":()=>e(()=>import("./linkedin.f7mrneKx.js"),__vite__mapDeps([]),import.meta.url).then(t=>t.default),"/assets/icons/twitter.svg":()=>e(()=>import("./twitter.k-zpEufr.js"),__vite__mapDeps([]),import.meta.url).then(t=>t.default),"/assets/icons/xing.svg":()=>e(()=>import("./xing.QwL25IHt.js"),__vite__mapDeps([]),import.meta.url).then(t=>t.default)})[`/assets/icons/${a.name}.svg`]();n.includes("stroke")&&(c=!0),r.value=n}catch{console.error(`[nuxt-icons] Icon '${a.name}' doesn't exist in 'assets/icons'`)}}return[o,i]=d(()=>_()),await o,i(),f(_),(s,n)=>(v(),E("span",{class:g(["nuxt-icon",{"nuxt-icon--fill":!s.filled,"nuxt-icon--stroke":l(c)&&!s.filled}]),innerHTML:l(r)},null,10,h))}});export{x as _};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
