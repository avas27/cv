(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{20:function(e,t,a){},30:function(e,t,a){e.exports=a.p+"static/media/avas27.5e0c3106.jpg"},33:function(e,t,a){e.exports=a.p+"static/media/omni.b5d887bb.gif"},34:function(e,t,a){e.exports=a.p+"static/media/rest.3760fdc9.gif"},35:function(e,t,a){e.exports=a.p+"static/media/mp.a9f7d6b3.gif"},36:function(e,t,a){e.exports=a.p+"static/media/hms.6276454b.gif"},38:function(e,t,a){e.exports=a(56)},43:function(e,t,a){},44:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(12),c=a.n(r),i=(a(43),a(44),a(13)),o=a(14),s=a(16),m=a(15),u=a(17),h=a(4),d=a(10),p=a(30),E=a.n(p),f=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handle=a.handle.bind(Object(h.a)(a)),a.state={home:!0,work:!1,contact:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handle",value:function(e){"work"===e?(console.log("okk"),this.setState({home:!1,work:!0,contact:!1})):"contact"===e?this.setState({home:!1,work:!1,contact:!0}):"home"===e&&this.setState({home:!0,work:!1,contact:!1})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"img"},l.a.createElement("img",{src:E.a,alt:"avas27"})),l.a.createElement("div",{className:"title clearfix"},"Abhishek Verma",l.a.createElement("span",null,"Full Stack Web Developer")),l.a.createElement("ul",null,this.state.home?l.a.createElement(d.b,{style:{color:"white"},to:"/home"},l.a.createElement("li",{className:"ud"},"Home")):l.a.createElement(d.b,{style:{color:"white"},to:"/home"}," ",l.a.createElement("li",{onClick:function(){e.handle("home")}},"Home")),this.state.work?l.a.createElement(d.b,{style:{color:"white"},to:"/work"},l.a.createElement("li",{className:"ud"},"My Work")):l.a.createElement(d.b,{style:{color:"white"},to:"/work"}," ",l.a.createElement("li",{onClick:function(){e.handle("work")}},"My Work")),this.state.contact?l.a.createElement(d.b,{style:{color:"white"},to:"/about"}," ",l.a.createElement("li",{className:"ud"},"About Me")):l.a.createElement(d.b,{style:{color:"white"},to:"/about"},l.a.createElement("li",{onClick:function(){e.handle("contact")}},"About Me"))))}}]),t}(l.a.Component);a(20);var g=function(){return l.a.createElement("div",{className:"home"},l.a.createElement("div",{className:"intro"},l.a.createElement("div",{className:"int"},"I love to work until imagination changes into reality"),l.a.createElement("div",{className:"designer introText"},l.a.createElement("div",{className:"after"},l.a.createElement("i",{className:"fa fa-paint-brush"}),"Designer"),l.a.createElement("span",null,"Passionate UI/UX designer with an aim to convert imagination into reality.")),l.a.createElement("div",{className:"developer introText"},l.a.createElement("div",{className:"after"},l.a.createElement("i",{className:"fa fa-code code"}),"Developer"),l.a.createElement("span",null,"Enthusiast Front-end and Back-end coder with clean, efficient and simple coding logic."))))},b=a(33),v=a.n(b),w=a(34),k=a.n(w),y=a(35),N=a.n(y),O=a(36),C=a.n(O),S=a(60),x=a(58),j=a(59),W=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).isToggle=a.isToggle.bind(Object(h.a)(a)),a.state={isOpen:!1,heading:"",desc:"",tech:"",url1:"",url2:""},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"isToggle",value:function(e){this.setState({isOpen:!this.state.isOpen,heading:e.heading,desc:e.desc,tech:e.tech,url1:e.url1,url2:e.url2})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement(S.a,{isOpen:this.state.isOpen},l.a.createElement(x.a,{toggle:this.isToggle},this.state.heading),l.a.createElement(j.a,null,l.a.createElement("div",{style:{marginTop:"30px"}},l.a.createElement("span",{style:{fontWeight:"bold"}},"Technology Used : "),this.state.tech),l.a.createElement("div",{style:{marginTop:"10px"}},l.a.createElement("span",{style:{fontWeight:"bold"}},"Description : "),this.state.desc),l.a.createElement("div",{style:{margin:"25px 0"}},"View On:",l.a.createElement("br",null),l.a.createElement("a",{href:this.state.url1,target:"_blank",style:{color:"black",fontSize:"50px"}},l.a.createElement("i",{className:"fa fa-github"})),l.a.createElement("a",{href:this.state.url2,target:"_blank",style:{color:"black",fontSize:"50px",marginLeft:"30px"}},l.a.createElement("i",{className:"fa fa-youtube"}))))),l.a.createElement("div",{className:"home"},l.a.createElement("div",{className:"work"},l.a.createElement("div",{onDoubleClick:function(){return e.isToggle({heading:"Food Ordering Website",desc:"A real-world responsive food ordering website designed to run smoothly on all devices.",tech:"HTML5, CSS3, Bootstrap and jQuery",url1:"https://github.com/avas27/Food-ordering-Website",url2:"https://www.youtube.com/watch?v=fZm7CknOnaI"})}},l.a.createElement("img",{src:v.a,alt:"omnifood"}),l.a.createElement("span",null,l.a.createElement("p",null,"Food Ordering Website"))),l.a.createElement("div",{onDoubleClick:function(){return e.isToggle({heading:"Music Player App",desc:"A real-world music player web-app designed to run smoothly on all devices.",tech:"HTML5, CSS3, JavaScript and jQuery",url1:"https://github.com/avas27",url2:"https://www.youtube.com/channel/UCfqU1zw2n7_dzWskNOep-Ww"})}},l.a.createElement("img",{src:N.a,alt:"music player"}),l.a.createElement("span",null,l.a.createElement("p",null,"Music Player"))),l.a.createElement("div",{onDoubleClick:function(){return e.isToggle({heading:"Hotel Management System",desc:"It is Hotel Management website consisting of 30+ webpages and 17+ Service like guest-login, staff-management, catering-service, account-management, etc.",tech:"HTML5, CSS3 and JavaScript",url1:"https://github.com/avas27",url2:"https://www.youtube.com/watch?v=mKA3syowAj4"})}},l.a.createElement("img",{src:C.a,alt:"hms"}),l.a.createElement("span",null,l.a.createElement("p",null,"Hotel Management System"))),l.a.createElement("div",{onDoubleClick:function(){return e.isToggle({heading:"Restaurant Website",desc:"A responsive website to take a restaurant business online",tech:"React and CSS-3",url1:"https://github.com/avas27",url2:"https://www.youtube.com/channel/UCfqU1zw2n7_dzWskNOep-Ww"})}},l.a.createElement("img",{src:k.a,alt:"restaurant"}),l.a.createElement("span",null,l.a.createElement("p",null,"Restaurant Website")))),l.a.createElement("div",{className:"workText"},"Tap or Click for info",l.a.createElement("br",null),"Double Click or tap to View")))}}]),t}(l.a.Component);var T=function(){return l.a.createElement("div",{className:"home"},l.a.createElement("div",{className:"intro"},l.a.createElement("div",{className:"int"},"I love to work until imagination changes into reality",l.a.createElement("br",null),l.a.createElement("p",{style:{fontWeight:"normal"}},"Certified Front-End React Developer",l.a.createElement("br",null),"Certified Front-End Angular Developer",l.a.createElement("br",null),"Certified Full Stack (MEAN-Stack) Web Developer",l.a.createElement("br",null),"Certified UI/UX Designer"),l.a.createElement("span",{style:{fontWeight:"normal"}},"Connect with me on : "),l.a.createElement("br",null),l.a.createElement("a",{href:"https://twitter.com/avas27avas",style:{color:"white",fontSize:"40px"},target:"_blank"},l.a.createElement("i",{className:"fa fa-twitter-square"})),l.a.createElement("a",{href:"https://github.com/avas27",target:"_blank",style:{color:"white",fontSize:"40px"}},l.a.createElement("i",{className:"fa fa-github",style:{marginLeft:"20px"}})),l.a.createElement("a",{href:"https://www.youtube.com/channel/UCfqU1zw2n7_dzWskNOep-Ww",target:"_blank",style:{color:"white",fontSize:"40px"}},l.a.createElement("i",{className:"fa fa-youtube",style:{marginLeft:"20px"}})))))},D=a(11),M=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(f,null),l.a.createElement("div",null,l.a.createElement(D.d,null,l.a.createElement(D.b,{path:"/home",component:function(){return l.a.createElement(g,null)}}),l.a.createElement(D.b,{exact:!0,path:"/work",component:function(){return l.a.createElement(W,null)}}),l.a.createElement(D.b,{exact:!0,path:"/about",component:function(){return l.a.createElement(T,null)}}),l.a.createElement(D.a,{to:"/home"}))))}}]),t}(n.Component);var z=function(){return l.a.createElement(d.a,null,l.a.createElement("div",null,l.a.createElement(M,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[38,1,2]]]);
//# sourceMappingURL=main.5c3cddbf.chunk.js.map