import{j as e,a as r}from"../chunk-f4b53398.js";const l=[{src:"/images/email.svg",href:"mailto:anna_nymes@brown.edu"},{src:"/images/github.svg",href:"https://github.com"},{src:"/images/linkedin.svg",href:"https://linkedin.com"}];function c(){return e("nav",{className:"icon-row",children:l.map((n,i)=>e("a",{href:n.href,children:e("img",{...n})},i))})}function h({items:n,targetWidth:i="100%",style:s={}}){return e("section",{className:"portfolio-grid-wrapper",children:e("div",{className:"portfolio-grid",style:{"--target-width":i,...s},children:n.map((t,o)=>e("a",{href:t.href,children:r("article",{className:"portfolio-item",children:[e("div",{className:"portfolio-image-wrapper",children:e("img",{className:"portfolio-image",...t.image})}),e("h2",{className:"portfolio-title",children:t.title})]})},o))})})}const g={title:"Anna Nymes"};function a(n){const i=Object.assign({main:"main",h1:"h1",a:"a",hr:"hr"},n.components);return r(i.main,{children:[`
`,`
`,e(i.h1,{id:"anna-nymes",children:e(i.a,{href:"#anna-nymes",children:"Anna Nymes"})}),`
`,r("p",{style:{fontSize:"125%",lineHeight:"1"},children:[e("span",{style:{backgroundColor:"var(--highlight-color)"},children:"UI/UX designer"})," with a penchant for ",e("span",{style:{backgroundColor:"var(--highlight-color)"},children:"simplicity"}),"."]}),`
`,e(h,{items:[{image:{src:"/images/thumbnail-03.png",alt:"TODO"},href:"/responsive-redesign",title:"Redesigning an E-Commerce Site"},{image:{src:"/images/thumbnail-02.png",alt:"TODO"},href:"/personas-storyboarding",title:"Exploring Personas & Storyboards"},{image:{src:"/images/thumbnail-01.png",alt:"TODO"},href:"/iterative-design",title:"Iteratively Designing a Note-Taking App"},{image:{src:"/images/thumbnail-04.png",alt:"TODO"},href:"/development-writeup",title:"Developing an Interactive Interface"}],targetWidth:"150%",style:{margin:"0.75rem 0"}}),`
`,e(i.hr,{}),`
`,e(c,{})]})}function d(n={}){const{wrapper:i}=n.components||{};return i?e(i,Object.assign({},n,{children:e(a,n)})):a(n)}export{d as default,g as documentProps};
