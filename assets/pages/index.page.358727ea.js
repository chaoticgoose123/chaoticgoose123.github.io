import{j as e,a as r}from"../chunk-f4b53398.js";const s=[{src:"/images/email.svg",href:"mailto:anna_nymes@brown.edu"},{src:"/images/github.svg",href:"https://github.com"},{src:"/images/linkedin.svg",href:"https://linkedin.com"}];function t(){return e("nav",{className:"icon-row",children:s.map((i,n)=>e("a",{href:i.href,children:e("img",{...i})},n))})}const c={title:"Home"};function a(i){const n=Object.assign({main:"main",h1:"h1",a:"a",p:"p",ol:"ol",li:"li",hr:"hr"},i.components);return r(n.main,{children:[`
`,`
`,e(n.h1,{id:"anna-nymes",children:e(n.a,{href:"#anna-nymes",children:"Anna Nymes"})}),`
`,e(n.p,{children:"Web developer with an eye for detail."}),`
`,r(n.ol,{children:[`
`,e(n.li,{children:e(n.a,{href:"/personas-storyboarding",children:"Personas & Storyboarding"})}),`
`,e(n.li,{children:e(n.a,{href:"/responsive-redesign",children:"Responsive Redesign"})}),`
`,e(n.li,{children:e(n.a,{href:"/iterative-design",children:"Iterative Design & Evaluation"})}),`
`]}),`
`,e(n.hr,{}),`
`,e(t,{})]})}function h(i={}){const{wrapper:n}=i.components||{};return n?e(n,Object.assign({},i,{children:e(a,i)})):a(i)}export{h as default,c as documentProps};
