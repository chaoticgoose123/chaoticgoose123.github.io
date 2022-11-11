import{j as n,a as t}from"../chunk-f4b53398.js";import{I as r}from"../chunk-f2b8c439.js";const l={title:"Iterative Design"};function o(i){const e=Object.assign({main:"main",h1:"h1",a:"a",h2:"h2",p:"p",strong:"strong",ol:"ol",li:"li",ul:"ul",em:"em",blockquote:"blockquote",hr:"hr"},i.components);return t(e.main,{children:[`
`,`
`,n(e.h1,{id:"iterative-design",children:n(e.a,{href:"#iterative-design",children:"Iterative Design"})}),`
`,n(e.h2,{id:"introduction",children:n(e.a,{href:"#introduction",children:"Introduction"})}),`
`,t(e.p,{children:["To practice iterative design, our team of 4 created a prototype ",n(e.strong,{children:"tablet app"})," for ",n(e.a,{href:"https://heptabase.com/",target:"_blank",rel:"noopener noreferrer",children:n(e.strong,{children:"Heptabase"})}),", a ",n(e.strong,{children:"visual note-taking tool"})," that helps you learn ",n(e.strong,{children:"complex topics"}),"."]}),`
`,n(e.h2,{id:"the-problem",children:n(e.a,{href:"#the-problem",children:"The Problem"})}),`
`,t(e.p,{children:["We attempted to solve the same problem that Heptabase's developers were trying to solve, based only on their ",n(e.a,{href:"https://www.ycombinator.com/companies/heptabase",target:"_blank",rel:"noopener noreferrer",children:"description"})," on YCombinator. This left us with ",n(e.strong,{children:"three success criteria"}),":"]}),`
`,t(e.ol,{children:[`
`,n(e.li,{children:"Our solution must involve putting notes on whiteboards;"}),`
`,n(e.li,{children:"It must allow users to search through their notes to support visual recall; and"}),`
`,n(e.li,{children:"It should ultimately support a user's ability to learn complex topics."}),`
`]}),`
`,n(e.h2,{id:"ideation",children:n(e.a,{href:"#ideation",children:"Ideation"})}),`
`,t(e.p,{children:["To kickstart our design process, we first drew up several ",n(e.strong,{children:"sketches"})," for potential interfaces. In these, we explored a few ",n(e.strong,{children:"design alternatives"}),":"]}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:["We ",n(e.strong,{children:"centered"})," our ",n(e.strong,{children:"user flows"})," around either a home screen, a files page, or a whiteboard;"]}),`
`,t(e.li,{children:["We considered different ",n(e.strong,{children:"primary screen orientations"}),";"]}),`
`,t(e.li,{children:["We varied ",n(e.strong,{children:"tool"})," and ",n(e.strong,{children:"menu placement"}),", between having toolbars on page margins, buttons that reveal slide-out menus, and icons on notes themselves; and"]}),`
`,t(e.li,{children:["We laid out our ",n(e.strong,{children:"file views"})," in different ways (in grids/lists, with/without thumbnails, etc.)."]}),`
`]}),`
`,n(r,{images:[{src:"/iterative-design/sketch-1.png",alt:"TODO"},{src:"/iterative-design/sketch-2.png",alt:"TODO"},{src:"/iterative-design/sketch-3.png",alt:"TODO"},{src:"/iterative-design/sketch-4.png",alt:"TODO"}],targetWidth:"150%",style:{gridTemplateColumns:`minmax(0, ${904/1760}fr) minmax(0, ${824/1760}fr) minmax(0, ${1384/1796}fr) minmax(0, ${905/1760}fr)`,"--border":"1px solid var(--edge-color)"},children:t(e.p,{children:[n(e.strong,{children:"Figure 1:"})," Our sketches. Click on any image to open it in a new tab."]})}),`
`,t(e.p,{children:["We then ",n(e.strong,{children:"distilled"})," our sketches into a number of key features\u2014ones which we felt would allow our ideal note-taking app to better support learning:"]}),`
`,t(e.ol,{children:[`
`,t(e.li,{children:[n(e.strong,{children:"Multi-Modal User Input"}),":",`
`,t(e.ul,{children:[`
`,t(e.li,{children:["Our app should support both ",n(e.strong,{children:"free-hand writing/drawing"})," and ",n(e.strong,{children:"typed text"}),", as users absorb content most effectively through different mediums."]}),`
`,t(e.li,{children:["It should also provide a way to ",n(e.strong,{children:"quickly jot down notes"})," with similar levels of flexibility, so that important information isn't missed due to UI inefficiencies."]}),`
`]}),`
`]}),`
`,t(e.li,{children:[n(e.strong,{children:"Flexible Organization"}),":",`
`,t(e.ul,{children:[`
`,t(e.li,{children:["The folder system should be as ",n(e.strong,{children:"unopinionated"})," as possible, to prevent constraining the user to a certain way of organizing (like OneNote does, with its pages/sections)."]}),`
`,t(e.li,{children:["There should also be ways to ",n(e.strong,{children:"side-step bad organization"}),", e.g. search, quick access."]}),`
`]}),`
`]}),`
`]}),`
`,t(e.p,{children:["Finally, we refined our sketches into ",n(e.strong,{children:"wireframes"})," incorporating the above features:"]}),`
`,n(r,{images:[{src:"/iterative-design/wireframe-login.png",alt:"TODO"},{src:"/iterative-design/wireframe-main.png",alt:"TODO"},{src:"/iterative-design/wireframe-files.png",alt:"TODO"},{src:"/iterative-design/wireframe-search.png",alt:"TODO"},{src:"/iterative-design/wireframe-napkin.png",alt:"TODO"}],targetWidth:"150%",children:t(e.p,{children:[n(e.strong,{children:"Figure 2:"})," Our wireframes."]})}),`
`,n(e.h2,{id:"prototyping--iteration",children:n(e.a,{href:"#prototyping--iteration",children:"Prototyping & Iteration"})}),`
`,t(e.p,{children:["In order to begin iterating on our design, we first had to have something to show, to collect feedback. Thus, we developed an ",n(e.strong,{children:"interactive, high-fidelity prototype"})," in Figma:"]}),`
`,n(r,{images:[{src:"/iterative-design/prototype-initial-login.png",alt:"TODO"},{src:"/iterative-design/prototype-initial-whiteboard.png",alt:"TODO"},{src:"/iterative-design/prototype-initial-textedit.png",alt:"TODO"},{src:"/iterative-design/prototype-initial-search.png",alt:"TODO"}],targetWidth:"150%",children:t(e.p,{children:[n(e.strong,{children:"Figure 3:"})," Our initial prototype."]})}),`
`,t(e.p,{children:["Then, having received feedback from fellow UX practitioners, we made a round of ",n(e.strong,{children:"revisions"})," addressing the main points brought up in their critiques:"]}),`
`,t(e.ol,{children:[`
`,t(e.li,{children:[n(e.strong,{children:"App Navigation"}),`
`,t(e.ul,{children:[`
`,n(e.li,{children:"[Feedback] Reviewers didn't expect to be sent to a whiteboard right after logging in."}),`
`,t(e.li,{children:["[Improvement] To provide a ",n(e.em,{children:"better mental model of app navigation"}),", we modified our app to instead direct users to the ",n(e.strong,{children:"files page"}),", which now acts as a ",n(e.strong,{children:"home screen"}),"."]}),`
`]}),`
`]}),`
`,t(e.li,{children:[n(e.strong,{children:"Feature Learnability"}),`
`,t(e.ul,{children:[`
`,n(e.li,{children:"[Feedback] It was unclear what snippets were for and how to use them."}),`
`,t(e.li,{children:["[Improvement] To enhance learnability, we added ",n(e.strong,{children:"instructional placeholder text"})," to new snippets to help explain their purpose and usage to first-time users and testers. We also added a ",n(e.strong,{children:"new user flow"})," to our prototype."]}),`
`]}),`
`]}),`
`,t(e.li,{children:[n(e.strong,{children:"File & Folder Creation"}),`
`,t(e.ul,{children:[`
`,n(e.li,{children:"[Feedback] It wasn't immediately obvious how new files, folders, etc. could be created."}),`
`,t(e.li,{children:["[Improvement] We added a ",n(e.strong,{children:'"create" section'})," to the files page (accessible also from the files overlay), which allows users to more efficiently create new whiteboards, folders, and/or snippets."]}),`
`]}),`
`]}),`
`,t(e.li,{children:[n(e.strong,{children:"Prototype Representativeness"}),`
`,t(e.ul,{children:[`
`,n(e.li,{children:`[Feedback] Reviewers commented that our prototype's file structure was improbably clean, and wanted to see how we would deal with more "realistic" scenarios: e.g. multiple nested folders.`}),`
`,t(e.li,{children:["[Improvement] We included more representative files and folders, and added ",n(e.strong,{children:"nested folder navigation"})," + ",n(e.strong,{children:"scrollability"})," to the prototype. This allowed us to demo a more intensive file structure."]}),`
`]}),`
`]}),`
`]}),`
`,n(r,{images:[{src:"/iterative-design/prototype-improved-home.png",alt:"TODO"},{src:"/iterative-design/prototype-improved-snippet.png",alt:"TODO"}],targetWidth:"100%",children:t(e.p,{children:[n(e.strong,{children:"Figure 4:"})," ",n(e.em,{children:"Left"}),': the new home page (point 1), showing the new "create" section (3), and the breadcrumbs and folder navigation system (4). ',n(e.em,{children:"Right"}),": placeholder text for a new snippet provides insight into how the snippets are meant to be used (2)."]})}),`
`,n(e.h2,{id:"user-testing",children:n(e.a,{href:"#user-testing",children:"User Testing"})}),`
`,t(e.p,{children:["As a last step, we also sent our prototype to ",n(e.a,{href:"https://usertesting.com",target:"_blank",rel:"noopener noreferrer",children:"UserTesting.com"})," to obtain feedback from users outside of the Brown University Community. Their recordings can be found below:"]}),`
`,t("details",{children:[n("summary",{children:"Recordings"}),t(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://app.usertesting.com/v/8ac2d78a-ccea-4c51-8e0a-7e9f0b905422?encrypted_video_handle=baba58db-d6d1-4d21-af1c-b63fddc98d6c#!/tasks&shared_via=link",target:"_blank",rel:"noopener noreferrer",children:"User 1"})}),`
`,n(e.li,{children:n(e.a,{href:"https://app.usertesting.com/v/77bae5ed-7738-459c-89b6-30a0947603ae?encrypted_video_handle=5203ce27-3ffc-4f36-9898-cab8daffb2f5#!/tasks&shared_via=link",target:"_blank",rel:"noopener noreferrer",children:"User 2"})}),`
`,n(e.li,{children:n(e.a,{href:"https://app.usertesting.com/v/4147a9b7-c316-4055-ae8f-eac2792a7a10?encrypted_video_handle=e1e142ce-0e0a-420c-827c-063238b1c26d#!/tasks&shared_via=link",target:"_blank",rel:"noopener noreferrer",children:"User 3"})}),`
`]})]}),`
`,t(e.p,{children:["As our app's ",n(e.strong,{children:"main functionality"})," centered on multi-modal note-taking and flexible organization, we asked our testers to complete tasks using features relevant to those goals."]}),`
`,n(e.p,{children:"Specifically, we provided them with the following instructions:"}),`
`,t(e.blockquote,{children:[`
`,t(e.ol,{children:[`
`,n(e.li,{children:'Find the "Demo Whiteboard", and add a textbox somewhere near its top-left corner.'}),`
`,n(e.li,{children:'You remember that you took notes on a specific term several weeks ago and want to review them. Use the Search functionality to search for the term "Lorem Ipsum."'}),`
`,n(e.li,{children:'You have a brilliant idea that you want to write down immediately without creating a new whiteboard. Create and save a new "Snippet" to record your thoughts.'}),`
`]}),`
`]}),`
`,n(e.p,{children:"Here's a summary of our findings from those user tests:"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:["Users found the home page to be ",n(e.strong,{children:"intuitive"}),", ",n(e.strong,{children:"clean"}),", and ",n(e.strong,{children:"easy to navigate"}),"."]}),`
`,t(e.li,{children:["Users ",n(e.strong,{children:"quickly figured out"})," how to add textboxes and perform searches, as the icons we used for them conveyed their meaning effectively."]}),`
`,t(e.li,{children:["Creating snippets took the most time, as our users ",n(e.strong,{children:"didn't know what a snippet was"}),", nor how to create one."]}),`
`]}),`
`,n(e.p,{children:"These findings aligned with our expectations. We emphasized simplicity in our interfaces, so icons played a heavy role in communicating their functionality. Because snippets are a novel concept, and its icon was poorly chosen, it made sense that users struggled with that task."}),`
`,n(e.p,{children:"For our next iteration, we'd like to incorporate an in-app tutorial, in the form of a series of short animatics, to provide first-time users with more clarity. We'd also experiment with different icons for our snippets overlay, possibly changing its placement altogether to improve noticeability and access."}),`
`,n(e.h2,{id:"final-mockup",children:n(e.a,{href:"#final-mockup",children:"Final Mockup"})}),`
`,n(r,{images:[{src:"/iterative-design/flow-navigate.gif",alt:"TODO"},{src:"/iterative-design/flow-search.gif",alt:"TODO"},{src:"/iterative-design/flow-whiteboard.gif",alt:"TODO"},{src:"/iterative-design/flow-snippet.gif",alt:"TODO"}],targetWidth:"200%",children:t(e.p,{children:[n(e.strong,{children:"Figure 5:"})," GIFs displaying user flows. From left to right: navigating the folder structure; searching for a term; taking notes on a whiteboard; and adding a snippet."]})}),`
`,t(e.p,{children:["Our final mockup can be found ",n(e.a,{href:"https://www.figma.com/proto/8aMkwjf3cH4HnFvhJfVHml/Iterative-Design?scaling=scale-down&page-id=0%3A1&node-id=115%3A2&starting-point-node-id=115%3A2",target:"_blank",rel:"noopener noreferrer",children:"here"}),"."]}),`
`,t(e.p,{children:["We believe that our app somewhat achieves its goal of being a ",n(e.strong,{children:"visual note-taking tool"})," that helps users ",n(e.strong,{children:"learn complex topics"}),"\u2014doing so by supporting ",n(e.strong,{children:"multi-modal user input"})," and enabling ",n(e.strong,{children:"flexible organization"}),". It goes without saying, though, that there is still plenty of room for iteration and improvement!"]}),`
`,n(e.h2,{id:"conclusion",children:n(e.a,{href:"#conclusion",children:"Conclusion"})}),`
`,n(e.p,{children:"Through this project, our team came up with a new design for an app based only on a startup's description. We refined sketches and wireframes into interactive prototypes, made improvements based on collected feedback, and conducted user testing."}),`
`,t(e.p,{children:["All told, it was good practice! 4 out of 5 dentists agree that ",n(e.strong,{children:"iteration"})," is central to good design, after all; though, it's a shame we didn't actually do multiple ",n(e.em,{children:"rounds"})," of it this time."]}),`
`,n(e.hr,{}),`
`,n(e.p,{children:n(e.a,{href:"#page",children:"Back to top"})})]})}function d(i={}){const{wrapper:e}=i.components||{};return e?n(e,Object.assign({},i,{children:n(o,i)})):o(i)}export{d as default,l as documentProps};
