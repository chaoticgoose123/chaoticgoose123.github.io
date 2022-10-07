import{a as r,j as n}from"../chunk-f4b53398.js";function i({images:s,targetWidth:e="100%",children:t}){return r("figure",{className:"image-wrapper",children:[n("div",{className:"image-grid",style:{"--target-width":e},children:s.map((o,d)=>n("a",{href:o.src,target:"_blank",rel:"noopener noreferrer",children:n("img",{...o})},d))}),t!=null&&n("figcaption",{children:t})]})}const c={title:"Personas & Storyboarding"};function a(s){const e=Object.assign({main:"main",h1:"h1",h2:"h2",blockquote:"blockquote",p:"p",em:"em",strong:"strong",a:"a",ul:"ul",li:"li",ol:"ol",code:"code",h3:"h3",hr:"hr"},s.components);return r(e.main,{children:[`
`,`
`,n(e.h1,{children:"Personas & Storyboarding"}),`
`,n(e.h2,{children:"Introduction"}),`
`,r(e.blockquote,{children:[`
`,n(e.p,{children:n(e.em,{children:"This writeup was completed as part of an assignment on gathering real users' experiences with interfaces."})}),`
`]}),`
`,r(e.p,{children:["To explore the use of ",n(e.strong,{children:"personas"})," and ",n(e.strong,{children:"storyboarding"})," in UX research, I chose to investigate how teaching assistants (TAs) use Gradescope for grading."]}),`
`,n(e.h2,{children:"The Interface"}),`
`,r(e.p,{children:[n(e.a,{href:"https://en.wikipedia.org/wiki/Gradescope",target:"_blank",rel:"noopener noreferrer",children:"Gradescope"})," is a publicly-available, web-based grading tool used to administer coursework. It allows instructors to set up assignments\u2014comprising questions and rubrics with point values\u2014and collect student submissions. TAs can then view and grade these submissions."]}),`
`,r(i,{images:[{src:"/personas-storyboarding/gradescope-ui.png",alt:"An annotated sketch of Gradescope's grading dashboard and question grading interface"}],children:[r(e.p,{children:[n(e.strong,{children:"Figure 1:"})," Annotated sketches of Gradescope's main grading interfaces."]}),n(e.p,{children:"Key interactive elements have been exaggerated and emphasized (in orange)."})]}),`
`,r(e.p,{children:["Pictured in the images above are the main ",n(e.strong,{children:"interfaces"})," which a TA might interact with during grading. In particular, the second image shows a screen which allows TAs to score students' submissions on a ",n(e.em,{children:"per-question"})," basis, checking rubric items to add or subtract points from the submission."]}),`
`,r(e.p,{children:["Not pictured are the numerous ",n(e.strong,{children:"keyboard shortcuts"})," which can be used to perform the same tasks as most of these UI elements."]}),`
`,n(e.h2,{children:"Observations"}),`
`,n(e.p,{children:"To begin to develop my personas, I watched 10 TAs grade assignments using Gradescope\u2014some in a group setting, and others by themselves. Here's what I observed:"}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:["There was a 50-50 split between TAs who graded ",n(e.strong,{children:"question-by-question"}),", and TAs who graded ",n(e.strong,{children:"submission-by-submission"}),". This split was along course lines."]}),`
`,r(e.li,{children:["Most users clicked on ",n(e.strong,{children:"visible UI elements"})," to navigate, instead of using ",n(e.strong,{children:"keyboard shortcuts"}),". However, almost all users used keyboard shortcuts to check rubric items."]}),`
`,r(e.li,{children:["Users rarely had to ",n(e.strong,{children:"navigate to a previous submission"}),"; but when they did, especially when several TAs were grading in parallel, they took a long time to do so."]}),`
`]}),`
`,n(e.p,{children:"I also interviewed 3 of the 10 TAs after they were done grading. Summaries of their responses are listed below:"}),`
`,r(e.ol,{children:[`
`,r(e.li,{children:[r(e.strong,{children:["How ",n(e.em,{children:"experienced"})," are you in using Gradescope as a TA?"]}),`
`,r(e.ul,{children:[`
`,n(e.li,{children:"Users A and B were relatively inexperienced, while User C was fairly experienced. Both users B and C had used Gradescope to set up assignments for their courses."}),`
`]}),`
`]}),`
`,r(e.li,{children:[r(e.strong,{children:["What was your ",n(e.em,{children:"goal"})," in using Gradescope?"]}),`
`,r(e.ul,{children:[`
`,n(e.li,{children:`All three users used it to grade students' work and to check off students at labs. User B, a HTA, spoke about using it to grade "in an unbiased way, anonymously". User C just wanted to be done with grading, and this was faster than grading by hand.`}),`
`]}),`
`]}),`
`,r(e.li,{children:[r(e.strong,{children:["Which ",n(e.em,{children:"specific part(s)"})," of its interface did you use to attempt to achieve that goal?"]}),`
`,r(e.ul,{children:[`
`,r(e.li,{children:["Everyone mentioned the ",n(e.code,{children:"Manage Submissions"})," and ",n(e.code,{children:"Grade Submissions"})," tabs. User A described hitting ",n(e.code,{children:"z"})," (",n(e.code,{children:"Next Ungraded"}),"), then ",n(e.code,{children:"1"}),' (the first rubric item), to "lock" the assignment when grading in parallel with other TAs. User C also brought up a hidden ',n(e.code,{children:"Submissions"})," button, accessible by hovering over a question title, which gave an overview of all grades for one question."]}),`
`]}),`
`]}),`
`,r(e.li,{children:[r(e.strong,{children:["Could you describe one or more ways in which Gradescope's UI ",n(e.em,{children:"helped"})," or ",n(e.em,{children:"hindered"})," your work?"]}),`
`,r(e.ul,{children:[`
`,n(e.li,{children:'Users A and B complained that it was "sliced the wrong way": it was "meant for" grading one question, not one submission, at a time. All three appreciated the keyboard shortcuts for efficient grading. User A again raised the multiple-TAs-grading-at-once concurrency issue.'}),`
`]}),`
`]}),`
`,r(e.li,{children:[r(e.strong,{children:["If you could ",n(e.em,{children:"change anything about Gradescope"})," to improve your user ",n(e.em,{children:"experience"}),", what would it be?"]}),`
`,r(e.ul,{children:[`
`,n(e.li,{children:"Users A and B would add more settings for assignments: to mitigate the concurrency problem, and to make them per-submission, rather than per-question. User C, meanwhile, would implement more secret keyboard shortcuts, for fun."}),`
`]}),`
`]}),`
`]}),`
`,n(e.h2,{children:"Personas"}),`
`,r(e.p,{children:["Based on my findings, I constructed two ",n(e.strong,{children:"personas"})," to broadly represent the users I observed."]}),`
`,n(e.h3,{children:"Adept Alice"}),`
`,n(e.p,{children:"Adept Alice is representative of a TA who's been around the block a few times, and is familiar with working around Gradescope's many quirks."}),`
`,n(e.p,{children:"Her main gripe with Gradescope is that its system image doesn't mesh with her task of grading submissions one-by-one\u2014its UI actively promotes a different mental model, and an incompatible mode of operation. She's also peeved that there isn't a built-in way to prevent multiple TAs from accidentally grading the same submission, but has long since learned to work around it."}),`
`,n(e.p,{children:"She represents parts of users A and C, but also the select few TAs I observed who primarily used keyboard shortcuts to navigate."}),`
`,n(i,{images:[{src:"/personas-storyboarding/persona-a.png",alt:"An empathy map depicting what Adept Alice, an archetypal user of Gradescope, thinks, feels, says, and does."}],targetWidth:"75%",children:r(e.p,{children:[n(e.strong,{children:"Figure 2:"})," An empathy map depicting what ",n(e.strong,{children:"Adept Alice"}),", an archetypal user of Gradescope, thinks, feels, says, and does."]})}),`
`,n(e.h3,{children:"Beginner Bob"}),`
`,n(e.p,{children:"Beginner Bob is representative of a TA who's new to grading and the processes it involves."}),`
`,r(e.p,{children:["Due to his inexperience, he is unfamiliar with Gradescope's hidden elements, such as buttons that don't appear until you hover over them, and the many keyboard shortcuts which could improve his efficiency. Bob tends to grade slower, as merely navigating its many screens is a more effortful task for him than it is for Alice. This is exacerbated by the ",n(e.em,{children:"many"})," steps which he must take to do something like returning to submissions that he'd previously graded."]}),`
`,n(e.p,{children:"He represents parts of users A and B, as well as some of the TAs I observed who had difficulty with navigation."}),`
`,n(i,{images:[{src:"/personas-storyboarding/persona-b.png",alt:"An empathy map depicting what Beginner Bob, an archetypal user of Gradescope, thinks, feels, says, and does."}],targetWidth:"75%",children:r(e.p,{children:[n(e.strong,{children:"Figure 3:"})," An empathy map depicting what ",n(e.strong,{children:"Beginner Bob"}),", an archetypal user of Gradescope, thinks, feels, says, and does."]})}),`
`,n(e.h2,{children:"Storyboard"}),`
`,n(e.p,{children:"Based on my findings from earlier, I created this storyboard to illustrate a typical grading session for Beginner Bob:"}),`
`,n(i,{images:[{src:"/personas-storyboarding/storyboard.png",alt:"A storyboard depicting Beginner Bob's pain points while using Gradescope."}],children:r(e.p,{children:[n(e.strong,{children:"Figure 4:"})," A storyboard depicting Beginner Bob's pain points while using Gradescope."]})}),`
`,r(e.p,{children:["Grading is hard. Perhaps we could ",n(e.em,{children:"crowdsource"})," it on a ",n(e.em,{children:"non-Gradescope platform"}),", instead!"]}),`
`,n(e.h2,{children:"Conclusion"}),`
`,n(e.p,{children:"This exercise, though small, reminded me of the value of collecting observations and user interviews for identifying the strengths and weaknesses of user interfaces."}),`
`,n(e.p,{children:"If I were to do this again for something like a personal website, I'd expand the scope of data collection by watching and interviewing a wider gamut of users. Hopefully, that would provide me with a more complete distribution of the users who'd interact with my UIs!"}),`
`,n(e.hr,{}),`
`,n(e.p,{children:n(e.a,{href:"#page",children:"Back to top"})})]})}function l(s={}){const{wrapper:e}=s.components||{};return e?n(e,Object.assign({},s,{children:n(a,s)})):a(s)}export{l as default,c as documentProps};
