import{_ as f}from"./BPF7lLqA.js";import g from"./CTT37U1r.js";import{_ as k}from"./D5JQhAq9.js";import{e as b,o,c as a,a as e,n as j,t as d,u,b as n,f as i,h as y,F as x,r as $,g as v}from"./rFXukzBD.js";import{q as C}from"./yMLTtgD3.js";import"./D_aPJWDK.js";import"./C-v3KzvZ.js";import"./CxYJgpPD.js";import"./l_eqcaUj.js";const w={class:"card"},B={class:"card-img-top"},D={class:"card-body"},A={class:"card-body-title"},N={class:"card-body-subtitle"},S=["href"],V=["href"],q=["href"],E=b({__name:"project",props:["project"],setup(t){const c=new Date(t.project.createdAt).toLocaleDateString("de-DE",{month:"long",year:"numeric"});return(s,l)=>{const _=g,r=k;return o(),a("article",w,[e("div",B,[e("div",{class:"thumb-img",style:j(`background: url('${t.project.image}')`)},null,4)]),e("div",D,[e("h2",A,d(t.project.title),1),e("time",N,d(u(c)),1),n(_,{class:"card-text",value:t.project},null,8,["value"]),t.project.github?(o(),a("a",{key:0,href:t.project.github,target:"__blank",class:"card-link"},[n(r,{name:"github"})],8,S)):i("",!0),t.project.gitlab?(o(),a("a",{key:1,href:t.project.gitlab,target:"__blank",class:"card-link"},[n(r,{name:"gitlab"})],8,V)):i("",!0),t.project.link?(o(),a("a",{key:2,href:t.project.link,target:"__blank",class:"card-link"},[n(r,{name:"link"})],8,q)):i("",!0)])])}}}),F={class:"row"},L={class:"left-column"},z={class:"right-column"},Q={__name:"index",async setup(t){let c,s;const l=([c,s]=y(()=>C("projects").sort({createdAt:-1}).find()),c=await c,s(),c);return(_,r)=>{const h=f,p=E;return o(),a("div",F,[e("aside",L,[n(h)]),e("main",z,[(o(!0),a(x,null,$(u(l),m=>(o(),v(p,{key:m.slug,project:m},null,8,["project"]))),128))])])}}};export{Q as default};