import{_ as g}from"./YAIcsIaf.js";import k from"./D0vubKgV.js";import{_ as b}from"./CIOoT50l.js";import{_ as j}from"./DH7kGOik.js";import{e as y,o as e,c as a,a as o,n as x,t as u,u as h,b as c,f as s,g as f,w as $,h as v,F as w,r as C}from"./aPuZC8vj.js";import{q as B}from"./BY2IS2jV.js";import"./BDo6vaPD.js";import"./C-v3KzvZ.js";import"./CxYJgpPD.js";import"./DNj3M2X2.js";const D={class:"card"},A={class:"card-img-top"},N={class:"card-body"},S={class:"card-body-title"},V={class:"card-body-subtitle"},q=["href"],E=["href"],F=["href"],L=y({__name:"project",props:["project"],setup(t){const n=new Date(t.project.createdAt).toLocaleDateString("de-DE",{month:"long",year:"numeric"});return(i,_)=>{const m=k,r=b,l=j;return e(),a("article",D,[o("div",A,[o("div",{class:"thumb-img",style:x(`background: url('${t.project.image}')`)},null,4)]),o("div",N,[o("h2",S,u(t.project.title),1),o("time",V,u(h(n)),1),c(m,{class:"card-text",value:t.project},null,8,["value"]),t.project.github?(e(),a("a",{key:0,href:t.project.github,target:"__blank",class:"card-link"},[c(r,{name:"github"})],8,q)):s("",!0),t.project.gitlab?(e(),a("a",{key:1,href:t.project.gitlab,target:"__blank",class:"card-link"},[c(r,{name:"gitlab"})],8,E)):s("",!0),t.project.blog?(e(),f(l,{key:2,href:t.project.blog,class:"card-link"},{default:$(()=>[c(r,{name:"blog"})]),_:1},8,["href"])):s("",!0),t.project.link?(e(),a("a",{key:3,href:t.project.link,target:"__blank",class:"card-link"},[c(r,{name:"link"})],8,F)):s("",!0)])])}}}),z={class:"row"},R={class:"left-column"},G={class:"right-column"},W={__name:"index",async setup(t){let n,i;const _=([n,i]=v(()=>B("projects").sort({createdAt:-1}).find()),n=await n,i(),n);return(m,r)=>{const l=g,p=L;return e(),a("div",z,[o("aside",R,[c(l)]),o("main",G,[(e(!0),a(w,null,C(h(_),d=>(e(),f(p,{key:d.slug,project:d},null,8,["project"]))),128))])])}}};export{W as default};
