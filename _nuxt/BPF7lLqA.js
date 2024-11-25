import{_ as m}from"./D5JQhAq9.js";import{_ as i,o as c,c as d,a as t,i as l,p as _,b as o}from"./rFXukzBD.js";const h={data(){return{enabled:!1}},computed:{buttonClasses(){return{"theme-switcher__button":!0,"theme-switcher__button--enabled":this.enabled}},toggleClasses(){return{"theme-switcher__toggle":!0,"theme-switcher__toggle--enabled":this.enabled}}},methods:{onClick(){this.enabled=!this.enabled}},watch:{enabled(s){const e=document.body;s?(e.classList.add("dark"),window.localStorage.setItem("theme","dark")):(e.classList.remove("dark"),window.localStorage.setItem("theme","light"))}},beforeMount(){window.matchMedia("(prefers-color-scheme: dark)").media==="not all"&&(this.enabled=!0);const s=window.localStorage.getItem("theme");s!==void 0&&(this.enabled=s==="dark")}},p={class:"theme-switcher"};function u(s,e,n,r,y,a){return c(),d("div",p,[e[2]||(e[2]=t("span",{class:"theme-switcher__text"}," Dark Mode ",-1)),t("button",{type:"button",role:"switch","aria-checked":"false",class:l(a.buttonClasses),onClick:e[0]||(e[0]=B=>a.onClick())},[e[1]||(e[1]=t("span",{class:"sr-only"},"Use setting",-1)),t("span",{"aria-hidden":"true",class:l(a.toggleClasses)},null,2)],2)])}const b=i(h,[["render",u]]),f=_("/images/avatar.jpg"),w={},g={class:"profile"},k={class:"social-profiles"},v={href:"https://github.com/EldoranDev",target:"_blank",rel:"noopener"},x={href:"https://www.linkedin.com/in/marcel-behrmann/",target:"_blank",rel:"noopener"},C={href:"https://www.twitter.com/EldoranDev",target:"_blank",rel:"noopener"};function $(s,e){const n=m,r=b;return c(),d("div",g,[e[0]||(e[0]=t("img",{class:"avatar",src:f},null,-1)),e[1]||(e[1]=t("p",{class:"profile-name"},"Marcel Behrmann",-1)),e[2]||(e[2]=t("p",{class:"profile-sub"},"Games & Apps ",-1)),t("div",k,[t("a",v,[o(n,{name:"github",class:"profile-icon"})]),t("a",x,[o(n,{name:"linkedin",class:"profile-icon"})]),t("a",C,[o(n,{name:"twitter",class:"profile-icon"})])]),o(r)])}const E=i(w,[["render",$]]);export{E as _};