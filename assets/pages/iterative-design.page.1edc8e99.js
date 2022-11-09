import{j as n,a as t}from"../chunk-f4b53398.js";import{I as r}from"../chunk-f2b8c439.js";const s={title:"Iterative Design"};function o(i){const e=Object.assign({main:"main",h1:"h1",a:"a",h2:"h2",p:"p",strong:"strong",ol:"ol",li:"li",ul:"ul",hr:"hr",blockquote:"blockquote"},i.components);return t(e.main,{children:[`
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
`,t(e.p,{children:["Finally, we refined our sketches into ",n(e.a,{href:"https://balsamiq.com",target:"_blank",rel:"noopener noreferrer",children:"Balsamiq"})," ",n(e.strong,{children:"wireframes"})," incorporating the above features:"]}),`
`,n(r,{images:[{src:"/iterative-design/wireframe-login.png",alt:"TODO"},{src:"/iterative-design/wireframe-main.png",alt:"TODO"},{src:"/iterative-design/wireframe-files.png",alt:"TODO"},{src:"/iterative-design/wireframe-search.png",alt:"TODO"},{src:"/iterative-design/wireframe-napkin.png",alt:"TODO"}],targetWidth:"150%",children:t(e.p,{children:[n(e.strong,{children:"Figure 2:"})," Our wireframes."]})}),`
`,n(e.h2,{id:"prototyping--iteration",children:n(e.a,{href:"#prototyping--iteration",children:"Prototyping & Iteration"})}),`
`,t(e.p,{children:["In order to begin iterating on our design, we first had to have something to show, to collect feedback. Thus, we developed an ",n(e.strong,{children:"interactive, high-fidelity prototype"})," in ",n(e.a,{href:"https://www.figma.com",target:"_blank",rel:"noopener noreferrer",children:"Figma"}),":"]}),`
`,n(r,{images:[{src:"/iterative-design/placeholder.png",alt:"TODO"}],targetWidth:"75%",children:t(e.p,{children:[n(e.strong,{children:"Figure 3:"})," Our initial prototype."]})}),`
`,t(e.p,{children:["Then, having received feedback from fellow UX practitioners, we made a round of ",n(e.strong,{children:"revisions"})," addressing the main points brought up in their critiques:"]}),`
`,n(e.p,{children:"TODO from this point onwards"}),`
`,n(e.hr,{}),`
`,t(e.ol,{children:[`
`,t(e.li,{children:[n(e.strong,{children:'Expectation about a "home page"'}),`
`,t(e.ul,{children:[`
`,n(e.li,{children:"The user should not be sent to a whiteboard right after login"}),`
`,n(e.li,{children:'There lacks a "home page" from which all files could be accessed'}),`
`,n(e.li,{children:'The "full screen" button at the top right corner of the files sidebar does not effectively communicate which page it would bring the user'}),`
`,n(e.li,{children:"The file full screen felt like they were going into a deeper menu"}),`
`,n(e.li,{children:"There should be an icon that takes people to the home screen"}),`
`]}),`
`]}),`
`,t(e.li,{children:[n(e.strong,{children:"Learnability of the snippets tool"}),`
`,t(e.ul,{children:[`
`,n(e.li,{children:"The functionality of the bottom right button is unclear"}),`
`]}),`
`]}),`
`,t(e.li,{children:[n(e.strong,{children:"Interactivity of Prototype"}),`
`,t(e.ul,{children:[`
`,t(e.li,{children:['The prototype does not capture "messy" states',`
`,t(e.ul,{children:[`
`,n(e.li,{children:"E.g. how files with too-long names will be displayed"}),`
`,n(e.li,{children:"E.g. how the files page might look like when there are many files"}),`
`]}),`
`]}),`
`]}),`
`]}),`
`,t(e.li,{children:[n(e.strong,{children:"Searching"}),`
`,t(e.ul,{children:[`
`,n(e.li,{children:"It is Unclear what exactly the search bar searches for"}),`
`]}),`
`]}),`
`,t(e.li,{children:[n(e.strong,{children:"Adding and Removing Folders"}),`
`,t(e.ul,{children:[`
`,n(e.li,{children:"Folders can be added and removed from a full screen documents page makes it inconsistent when the folder organization is shown as a sidebar when viewing a whiteboard"}),`
`]}),`
`]}),`
`]}),`
`,t(e.blockquote,{children:[`
`,n(e.p,{children:"Which submission convinced you it better implemented interaction principles (interaction, navigation, hierarchy)?"}),`
`]}),`
`,n(r,{images:[{src:"/iterative-design/flow-navigate.gif",alt:"TODO"},{src:"/iterative-design/flow-search.gif",alt:"TODO"},{src:"/iterative-design/flow-whiteboard.gif",alt:"TODO"},{src:"/iterative-design/flow-snippet.gif",alt:"TODO"}],targetWidth:"150%",children:t(e.p,{children:[n(e.strong,{children:"Figure ???:"})," Gif showing the certain user flows... or some other caption you can come up with."]})}),`
`,`
`,n(e.h2,{id:"user-testing",children:n(e.a,{href:"#user-testing",children:"User Testing"})}),`
`,t(e.blockquote,{children:[`
`,n(e.p,{children:"Which prototype do you feel addressed feedback from the critiques more thoughtfully?"}),`
`]}),`
`,t(e.blockquote,{children:[`
`,n(e.p,{children:"Which submission's user testing experiment better explored the interface's intended functionality, and more comprehensively defined the steps?"}),`
`]}),`
`,t(e.p,{children:["We sent our prototype to ",n(e.a,{href:"https://usertesting.com",target:"_blank",rel:"noopener noreferrer",children:"UserTesting.com"})," to obtain feedback from users outside of the Brown Community. The recordings of the users' test results can be found below."]}),`
`,t(e.ul,{children:[`
`,n(e.li,{children:n(e.a,{href:"https://app.usertesting.com/v/8ac2d78a-ccea-4c51-8e0a-7e9f0b905422?encrypted_video_handle=baba58db-d6d1-4d21-af1c-b63fddc98d6c#!/tasks&shared_via=link",target:"_blank",rel:"noopener noreferrer",children:"User 1"})}),`
`,n(e.li,{children:n(e.a,{href:"https://app.usertesting.com/v/77bae5ed-7738-459c-89b6-30a0947603ae?encrypted_video_handle=5203ce27-3ffc-4f36-9898-cab8daffb2f5#!/tasks&shared_via=link",target:"_blank",rel:"noopener noreferrer",children:"User 2"})}),`
`,n(e.li,{children:n(e.a,{href:"https://app.usertesting.com/v/4147a9b7-c316-4055-ae8f-eac2792a7a10?encrypted_video_handle=e1e142ce-0e0a-420c-827c-063238b1c26d#!/tasks&shared_via=link",target:"_blank",rel:"noopener noreferrer",children:"User 3"})}),`
`]}),`
`,n(e.p,{children:"For each user, we provided a brief background about what Figma is, and how to interact with the prototype. Because Heptabase is a creative design interface with numerous users to complete the following 3 tasks:"}),`
`,t(e.ol,{children:[`
`,t(e.li,{children:['Find the "Demo Whiteboard", and add a textbox to the top left corner of the whiteboard.',`
`,t(e.ul,{children:[`
`,n(e.li,{children:"All users completed this task with ease- they navigated the homepage and selected the text icon. One user was uncertain if creating text is different from a textbox."}),`
`]}),`
`]}),`
`,t(e.li,{children:['You remember that you took notes on a specific term several weeks ago and want to review them. Use the Search functionality to search for the term "Lorem Ipsum."',`
`,t(e.ul,{children:[`
`,n(e.li,{children:"All users completed this task, finding the search icon quickly and with no hesitation."}),`
`]}),`
`]}),`
`,t(e.li,{children:["You have a brilliant idea that you want to write down immediately without creating a new whiteboard. Create and save a new Snippet to record your thoughts.",`
`,t(e.ul,{children:[`
`,n(e.li,{children:"None of the users knew what a snippet would be. One user experimentally identified the snippet icon, while the other two users returned to the home page and attempted to add a snippet from there. Our prototype only implemented the snippet icon, and not from the home page."}),`
`]}),`
`]}),`
`]}),`
`,n(e.p,{children:`In general, users found the app design to be intuitive, clean, and easy to navigate. Users did not spend much time on the homepage or navigating the toolbar, indicating those functions are clear.
Creating a snippet was the most difficult task to perform because many users did not know what a snippet is, nor its relation to a whiteboard. This aligns with our expectations. Our design of a snippet is a novel concept, from taking a quick note to later dragging it into a whiteboard. We did not expect a new user to fully understand its functionality.`}),`
`,n(e.p,{children:"Based on the results we received from user testing, our design for a future iteration would be incorporating a video demo within the application to provide first time users with more clarity. We plan to make the snippet icon bigger and more noticeable, to draw the attention of new users."}),`
`,n(e.h2,{id:"final-mockup",children:n(e.a,{href:"#final-mockup",children:"Final Mockup"})}),`
`,t(e.blockquote,{children:[`
`,n(e.p,{children:"Interact with the final hifi mockups. Which mockup better achieves the original goals of the startup?"}),`
`,n(e.p,{children:"i.e. we link to it, then talk about how we achieve the goals of the startup"}),`
`]}),`
`,n(e.h2,{id:"conclusion",children:n(e.a,{href:"#conclusion",children:"Conclusion"})}),`
`,n(e.hr,{}),`
`,n(e.p,{children:n(e.a,{href:"#page",children:"Back to top"})})]})}function h(i={}){const{wrapper:e}=i.components||{};return e?n(e,Object.assign({},i,{children:n(o,i)})):o(i)}export{h as default,s as documentProps};
