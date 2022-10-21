import{j as i,a as n}from"../chunk-f4b53398.js";import{I as r}from"../chunk-f2b8c439.js";const a={title:"Responsive Redesign"};function s(t){const e=Object.assign({main:"main",h1:"h1",a:"a",h2:"h2",p:"p",strong:"strong",ol:"ol",li:"li",ul:"ul",code:"code",em:"em",h3:"h3"},t.components);return n(e.main,{children:[`
`,`
`,i(e.h1,{id:"responsive-redesign",children:i(e.a,{href:"#responsive-redesign",children:"Responsive Redesign"})}),`
`,i(e.h2,{id:"introduction",children:i(e.a,{href:"#introduction",children:"Introduction"})}),`
`,n(e.p,{children:["When ",i(e.strong,{children:"redesigning"})," a website, it's often useful to begin with a critical ",i(e.strong,{children:"analysis"})," of its current design. We can then use our findings to make targeted and tangible improvements, by iterating on ",i(e.strong,{children:"prototypes"})," that directly address its flaws."]}),`
`,n(e.p,{children:["To practice this workflow, I had a go at redesigning ",i(e.a,{href:"https://tristatecamera.com",target:"_blank",rel:"noopener noreferrer",children:"this delightfully 2000s website"})," for ",i(e.strong,{children:"Tri-State Camera"}),", a camera and electronics store based in New York."]}),`
`,i(e.h2,{id:"the-website",children:i(e.a,{href:"#the-website",children:"The Website"})}),`
`,i(e.p,{children:"Here's the site in all its HTML-table-element, text-made-of-images glory:"}),`
`,i(r,{images:[{src:"/responsive-redesign/website-ui-desktop.png",alt:"A desktop screenshot of the Tri-State Camera website. The page appears flushed-left."},{src:"/responsive-redesign/website-ui-mobile.jpeg",alt:"A mobile screenshot of the Tri-State Camera website."}],style:{"--border":"1px solid var(--edge-color)",gridTemplateColumns:`minmax(0, ${2990/1870}fr) minmax(0, ${1125/2221}fr)`},children:n(e.p,{children:[i(e.strong,{children:"Figure 1:"})," Screenshots of the Tri-State Camera website, on desktop and mobile."]})}),`
`,i(e.p,{children:"It isn't the worst site out there, but it clearly hasn't been updated in a while. Plus, many of its interactions are unintuitive by today's standards, and its layout is awfully stiff."}),`
`,i(e.h2,{id:"usability-critique",children:i(e.a,{href:"#usability-critique",children:"Usability Critique"})}),`
`,n(e.ol,{children:[`
`,n(e.li,{children:[i(e.strong,{children:"[General] The website isn't responsive (or adaptive)."}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["It's all laid out with HTML ",i(e.code,{children:"table"})," elements, so nothing changes with the viewport."]}),`
`]}),`
`]}),`
`,n(e.li,{children:[i(e.strong,{children:"[Efficiency] There are too many categories, reducing click-through efficiency."}),`
`,n(e.ul,{children:[`
`,i(e.li,{children:"The sidebar categories are arranged alphabetically (i.e. without useful prioritization)."}),`
`,i(e.li,{children:"Hovering over the navbar reveals long lists of categories (figure 2a)."}),`
`,n(e.li,{children:["Clicking into some of these reveals ",i(e.em,{children:"even longer"})," lists of subcategories (figure 2b)."]}),`
`,n(e.li,{children:["Overall, this causes users to waste more time getting to the right category, instead of looking at products to buy. I suspect that this leads to ",i(e.strong,{children:"lost revenue"}),"."]}),`
`]}),`
`]}),`
`]}),`
`,n("details",{className:"list-level-2",children:[i("summary",{children:"Click here to expand figure 2"}),n(r,{images:[{src:"/responsive-redesign/usability-long-list.png",alt:"A screenshot of the Tri-State Camera website's home page, with a long dropdown list of categories expanded."},{src:"/responsive-redesign/usability-many-subcategories.png",alt:"A screenshot of the Tri-State Camera website's houseware/appliances page, with a long list of subcategories."}],style:{"--border":"1px solid var(--edge-color)"},children:[n(e.p,{children:[i(e.strong,{children:"Figure 2a (left):"})," Hovering over the navbar reveals a long list of categories."]}),n(e.p,{children:[i(e.strong,{children:"Figure 2b (right):"})," Clicking into a category leads to an index page, containing an even longer list of subcategories."]})]})]}),`
`,n(e.ol,{start:"3",children:[`
`,n(e.li,{children:[i(e.strong,{children:"[Efficiency] 8 different phone numbers are provided (figure 3)."}),`
`,n(e.ul,{children:[`
`,i(e.li,{children:"This makes contacting the store unnecessarily complicated."}),`
`]}),`
`]}),`
`]}),`
`,n("details",{className:"list-level-2",children:[i("summary",{children:"Click here to expand figure 3"}),i(r,{images:[{src:"/responsive-redesign/usability-phone-numbers.png",alt:"A screenshot of the Tri-State Camera website's contact us page."}],style:{"--border":"1px solid var(--edge-color)"},children:n(e.p,{children:[i(e.strong,{children:"Figure 3:"}),' The "contact us" page lists 8 different phone numbers.']})})]}),`
`,n(e.ol,{start:"4",children:[`
`,n(e.li,{children:[i(e.strong,{children:"[Learnability] Link styling is inconsistent and counterintuitive."}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["For example, ",i(e.code,{children:"Store Browser"})," isn't a link, whereas ",i(e.code,{children:"Rebates"})," is (figure 4)."]}),`
`,i(e.li,{children:"Additionally, the product panels aren't links\u2014only the text and images in them are."}),`
`]}),`
`]}),`
`]}),`
`,n("details",{className:"list-level-2",children:[i("summary",{children:"Click here to expand figure 4"}),i(r,{images:[{src:"/responsive-redesign/usability-link-styling.png",alt:"A screenshot of the Tri-State Camera website's home page, with confusing link styling highlighted."}],style:{"--border":"1px solid var(--edge-color)"},children:n(e.p,{children:[i(e.strong,{children:"Figure 4:"})," Confusing link styling. In this screenshot, elements boxed in green are links, whereas those in red are not."]})})]}),`
`,n(e.ol,{start:"5",children:[`
`,n(e.li,{children:[i(e.strong,{children:"[Learnability] Navigation is incongruous with the menu options' visual presentation."}),`
`,n(e.ul,{children:[`
`,i(e.li,{children:"Options (with the same text) on the sidebar and the navbar lead to the same pages. Yet, some options can only be found on the sidebar."}),`
`]}),`
`]}),`
`,n(e.li,{children:[n(e.strong,{children:["[Memorability] Products featured on the home page change on ",i(e.em,{children:"refresh"}),"."]}),`
`,n(e.ul,{children:[`
`,i(e.li,{children:`Also, there's no way to view all the featured products, so it's not easy to find "that one product you saw, when you last visited the page".`}),`
`]}),`
`]}),`
`]}),`
`,i(e.h2,{id:"accessibility-critique",children:i(e.a,{href:"#accessibility-critique",children:"Accessibility Critique"})}),`
`,n(e.p,{children:[i(e.a,{href:"https://wave.webaim.org/report#/https://tristatecamera.com",target:"_blank",rel:"noopener noreferrer",children:"WebAIM WAVE"})," reveals ",i(e.strong,{children:"over 270 errors"}),"! Most have to do with ",i(e.strong,{children:"missing alt text"}),", exacerbated by overuse of images where text, icons, and spacers should be. Other problems include:"]}),`
`,n(e.ul,{children:[`
`,n(e.li,{children:["Multiple ",i(e.strong,{children:"duplicate links"}),", which hinder quick screen reader navigation;"]}),`
`,n(e.li,{children:[i(e.strong,{children:"Low text contrast"})," on the sidebar;"]}),`
`,n(e.li,{children:["The ",i(e.strong,{children:"inability to tab-navigate"})," through navbar items; and"]}),`
`,n(e.li,{children:["A ",n(e.strong,{children:["missing ",i(e.code,{children:"lang"})," attribute"]})," on the HTML element."]}),`
`]}),`
`,n(e.p,{children:["That said, the biggest issue by far is the website's ",i(e.strong,{children:"overall HTML structure"}),". It does not follow ",i(e.a,{href:"https://www.w3schools.com/html/html5_semantic_elements.asp",target:"_blank",rel:"noopener noreferrer",children:"semantic HTML"})," rules (e.g. using page regions like ",i(e.code,{children:"<nav>"}),"), nor does it contain any heading elements (e.g. ",i(e.code,{children:"<h1>"}),")."]}),`
`,n(e.p,{children:["Worse still, the whole page is laid out with ",i(e.strong,{children:"tables"})," instead of CSS, with an absurd number of hidden links, images used as text, and table cells that just have images of ",i(e.em,{children:"dividers"}),"."]}),`
`,i(e.h2,{id:"visual-redesign",children:i(e.a,{href:"#visual-redesign",children:"Visual Redesign"})}),`
`,i(e.h3,{id:"lo-fi-wireframes",children:i(e.a,{href:"#lo-fi-wireframes",children:"Lo-fi Wireframes"})}),`
`,n(e.p,{children:["To kick off my redesign of the Tri-State Camera website, I used ",i(e.a,{href:"https://balsamiq.com",target:"_blank",rel:"noopener noreferrer",children:i(e.strong,{children:"Balsamiq"})})," to create three ",i(e.strong,{children:"wireframes"})," for its home page at different widths. I also annotated where my new layout attempts to solve the usability problems described earlier. Here's the ",i(e.strong,{children:"mobile"}),"-sized one:"]}),`
`,i(r,{images:[{src:"/responsive-redesign/wireframe-annotated-mobile.png",alt:"An annotated mobile-sized wireframe for my redesign of the website."}],targetWidth:"75%",style:{"--border":"1px solid var(--edge-color)"},children:n(e.p,{children:[i(e.strong,{children:"Figure 5:"})," An annotated ",i(e.strong,{children:"mobile"}),"-sized wireframe for my redesign of the website."]})}),`
`,n(e.p,{children:[i(e.strong,{children:"Key Changes"}),":",i("br",{}),n(e.em,{children:["Note: points correspond to those from the ",i(e.a,{href:"#usability-critique",children:"usability"})," discussion."]})]}),`
`,n(e.ol,{children:[`
`,n(e.li,{children:["The website is now ",i(e.strong,{children:"responsive"}),"."]}),`
`,n(e.li,{children:[i(e.strong,{children:"Categories"})," have been cut down. Each should lead to a page containing a list of ",i(e.em,{children:"products"})," (which may then be filtered or sorted), ",i(e.em,{children:"not"})," a list of even more subcategories."]}),`
`,n(e.li,{children:[i(e.strong,{children:"Contact numbers"})," have been cut down to just one, at the bottom of the home page."]}),`
`,n(e.li,{children:[i(e.strong,{children:"Links"})," have been re-styled to be consistent and salient.",`
`,n(e.ul,{children:[`
`,i(e.li,{children:"Product panels are also now links, with hover interactions consistent with other links."}),`
`]}),`
`]}),`
`,n(e.li,{children:[i(e.strong,{children:"Store navigation"})," now uses categories and brands as top-level nav options.",`
`,n(e.ul,{children:[`
`,i(e.li,{children:`Some users like to browse by category, others by brand. Having two "parallel" tracks helps funnel both types of users to where they can see (and buy) the products that they're more interested in.`}),`
`,i(e.li,{children:"Occasionally, users might instead bee-line it to a specific product. For these users, I made the search bar more conspicuous and efficient."}),`
`]}),`
`]}),`
`,n(e.li,{children:[i(e.strong,{children:"Featured products"}),` are now static, and they make up much of the prime screen real-estate above the fold. There's also a "See All" link.`]}),`
`,n(e.li,{children:[i(e.strong,{children:"Accessibility issues"})," will also be addressed, though those can't be seen in a wireframe.",`
`,n(e.ul,{children:[`
`,n(e.li,{children:["For instance, it'd be trivial to use ",i(e.code,{children:"nav"}),", ",i(e.code,{children:"section"}),", ",i(e.code,{children:"article"}),", ",i(e.code,{children:"header"}),", ",i(e.code,{children:"main"}),", and ",i(e.code,{children:"footer"})," elements in place of regular ",i(e.code,{children:"div"}),"s."]}),`
`]}),`
`]}),`
`]}),`
`,n(e.p,{children:["Below are the ",i(e.strong,{children:"tablet"}),"- and ",i(e.strong,{children:"desktop"}),"-sized wireframes:"]}),`
`,i(r,{images:[{src:"/responsive-redesign/wireframe-annotated-tablet.png",alt:"An annotated tablet-sized wireframe for my redesign of the website."}],targetWidth:"50%",style:{"--border":"1px solid var(--edge-color)"},children:n(e.p,{children:[i(e.strong,{children:"Figure 6:"})," An annotated ",i(e.strong,{children:"tablet"}),"-sized wireframe for my redesign of the website."]})}),`
`,i(r,{images:[{src:"/responsive-redesign/wireframe-annotated-desktop.png",alt:"An annotated desktop-sized wireframe for my redesign of the website."}],targetWidth:"100%",style:{"--border":"1px solid var(--edge-color)"},children:n(e.p,{children:[i(e.strong,{children:"Figure 7:"})," An annotated ",i(e.strong,{children:"desktop"}),"-sized wireframe for my redesign of the website."]})}),`
`,i(e.h3,{id:"style-guide",children:i(e.a,{href:"#style-guide",children:"Style Guide"})}),`
`,n(e.p,{children:["After wireframing, I used ",i(e.a,{href:"https://www.figma.com",target:"_blank",rel:"noopener noreferrer",children:i(e.strong,{children:"Figma"})})," to prepare the following ",i(e.strong,{children:"style guide"}),", showing the visual elements (including their states) to be used for the actual website:"]}),`
`,i(r,{images:[{src:"/responsive-redesign/style-guide.png",alt:"A style guide for my redesign of the website."}],targetWidth:"75%",style:{"--border":"1px solid var(--edge-color)"},children:n(e.p,{children:[i(e.strong,{children:"Figure 8:"})," A style guide for my redesign of the website."]})}),`
`,i(e.h3,{id:"high-fidelity-prototypes",children:i(e.a,{href:"#high-fidelity-prototypes",children:"High-Fidelity Prototypes"})}),`
`,n(e.p,{children:["Using elements from the style guide, I then constructed three ",i(e.strong,{children:"high-fidelity prototypes"})," of the final website at different widths:"]}),`
`,i(r,{images:[{src:"/responsive-redesign/hifi-annotated-mobile.png",alt:"A high-fidelity mobile-sized prototype for my redesign of the website."}],targetWidth:"75%",style:{"--border":"1px solid var(--edge-color)"},children:n(e.p,{children:[i(e.strong,{children:"Figure 9:"})," An annotated hi-fi ",i(e.strong,{children:"mobile"}),"-sized prototype for my redesign of the website."]})}),`
`,i(r,{images:[{src:"/responsive-redesign/hifi-annotated-tablet.png",alt:"A high-fidelity tablet-sized prototype for my redesign of the website."}],targetWidth:"75%",style:{"--border":"1px solid var(--edge-color)"},children:n(e.p,{children:[i(e.strong,{children:"Figure 10:"})," An annotated hi-fi ",i(e.strong,{children:"tablet"}),"-sized prototype for my redesign of the website."]})}),`
`,i(r,{images:[{src:"/responsive-redesign/hifi-annotated-desktop-1.png",alt:"A high-fidelity desktop-sized prototype for my redesign of the website, showing the top of the page."}],targetWidth:"100%",style:{"--border":"1px solid var(--edge-color)"},children:n(e.p,{children:[i(e.strong,{children:"Figure 11:"})," An annotated hi-fi ",i(e.strong,{children:"desktop"}),"-sized prototype for my redesign of the website, showing the top of the page."]})}),`
`,i(r,{images:[{src:"/responsive-redesign/hifi-annotated-desktop-2.png",alt:"A high-fidelity desktop-sized prototype for my redesign of the website, showing the bottom of the page."}],targetWidth:"100%",style:{"--border":"1px solid var(--edge-color)"},children:n(e.p,{children:[i(e.strong,{children:"Figure 12:"})," An annotated hi-fi ",i(e.strong,{children:"desktop"}),"-sized prototype for my redesign of the website, showing the bottom of the page."]})}),`
`,i(e.h2,{id:"responsive-redesign-1",children:i(e.a,{href:"#responsive-redesign-1",children:"Responsive Redesign"})}),`
`,n(e.p,{children:["Finally, it was time to implement my newly-responsive website. You can check it out ",i(e.a,{href:"/tri-state-camera",children:"here"}),"!"]}),`
`,i(r,{images:[{src:"/responsive-redesign/final-website.png",alt:"My newly-responsive, redesigned website."}],style:{"--border":"1px solid var(--edge-color)"},children:n(e.p,{children:[i(e.strong,{children:"Figure 13:"})," My newly-responsive, redesigned website."]})}),`
`,i(e.h2,{id:"conclusion",children:i(e.a,{href:"#conclusion",children:"Conclusion"})}),`
`,n(e.p,{children:["This project was, frankly, really time-consuming! The workflow I've described above, while useful for larger-scale redesigns, is probably ",i(e.em,{children:"overkill"})," for as small an assignment as this one."]}),`
`,n(e.p,{children:["That said, I got to practice my ",i(e.strong,{children:"usability analysis"})," and ",i(e.strong,{children:"iterative design"})," skills, so it wasn't a total loss. I also have a far greater appreciation for the value of taking time to identify current flaws, so as to devise more ",i(e.strong,{children:"targeted improvements"}),"."]}),`
`,i(e.p,{children:"Here's hoping that what I've learned will lead to better-designed websites in my future!"}),`
`,i(e.p,{children:i(e.a,{href:"#page",children:"Back to top"})})]})}function d(t={}){const{wrapper:e}=t.components||{};return e?i(e,Object.assign({},t,{children:i(s,t)})):s(t)}export{d as default,a as documentProps};
