import{_ as x}from"./profile.qGapp3VL.js";import{_ as y}from"./nuxt-link.BXL6EXOL.js";import{_ as l,o as t,f as d,w as f,d as g,t as r,c as _,a as s,F as $,r as h,b as k}from"./entry.yPxghxem.js";import"./nuxt-icon.vue.9ejZOpIp.js";const w={props:{tag:String}};function B(n,o,e,u,m,i){const c=y;return t(),d(c,{class:"tag",to:`/blog/tag/${e.tag}`},{default:f(()=>[g(r(e.tag),1)]),_:1},8,["to"])}const D=l(w,[["render",B]]),b={props:{article:Object},computed:{date(){return new Date(this.article.createdAt).toLocaleDateString("de-DE",{day:"2-digit",month:"long",year:"numeric"})}}},N={class:"article-intro"},S={class:"article-intro__title"};function V(n,o,e,u,m,i){const c=D;return t(),_("article",N,[s("span",null,r(i.date),1),s("h3",S,r(e.article.title),1),s("div",null,[(t(!0),_($,null,h(e.article.tags,a=>(t(),d(c,{key:a,tag:a},{default:f(()=>[g(r(a),1)]),_:2},1032,["tag"]))),128))])])}const v=l(b,[["render",V]]),A={async asyncData({$content:n}){const o=await n("/blog").sortBy("createdAt","desc").fetch();return console.log(o),{articles:o}}},E={class:"row"},F={class:"left-column"},L={class:"right-column"};function j(n,o,e,u,m,i){const c=x,a=v;return t(),_("div",E,[s("aside",F,[k(c)]),s("main",L,[(t(!0),_($,null,h(n.articles,p=>(t(),d(a,{key:p.slug,article:p},null,8,["article"]))),128))])])}const z=l(A,[["render",j]]);export{z as default};