(window["webpackJsonpgoogle-news-clone"]=window["webpackJsonpgoogle-news-clone"]||[]).push([[0],{107:function(e,t,n){e.exports=n(147)},112:function(e,t,n){},147:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),i=n.n(o),c=n(212),s=n(20),l=n(43),u=(n(112),n(12)),m=n(6),p=n(3),g=n(206),d=n(207),b=n(193),f=n(201),h=n(202),E=n(200),O=n(63),w=n.n(O),y=n(216),j=n(11),v=n(218),k=n(99),x=n(87),S=n.n(x),C=n(86),N=n.n(C),P=n(83),B=n.n(P),F=n(84),I=n.n(F),M=n(85),D=n.n(M),R=n(38),T=n.n(R),W=n(82),L=n.n(W),z=n(196),A=n(219),q=n(198),G=n(213),H=n(199);function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var J=Object(b.a)(function(e){return{formContainer:{padding:e.spacing(2)},formActions:{textAlign:"right"},formBtn:{textTransform:"none"},formControlLabel:{marginRight:e.spacing(2),marginLeft:e.spacing(2)},formLabel:{fontSize:"0.8rem",marginRight:e.spacing(3)}}}),K=function(e){var t=J(),n=Object(a.useState)({exactPhrase:"",hasWords:"",domains:""}),o=Object(u.a)(n,2),i=o[0],c=o[1],s=function(e){return function(t){c(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(n,!0).forEach(function(t){Object(m.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},i,Object(m.a)({},e,t.target.value)))}};Object(a.useEffect)(function(){var t=T.a.parse(e.queryString),n=t.q||"",a={hasWords:"",exactPhrase:"",domains:t.domains||""},r=n.match(/"([^"]+)"/);r&&r.length&&(a.exactPhrase=r[0].substr(1,r[0].length-2),n=n.replace(/"([^"]+)"/,"")),n.split(" ").forEach(function(e){e=e.trim(),a.hasWords="".concat(a.hasWords).concat(e," ")}),a.hasWords=a.hasWords.trim(),a.exactPhrase=a.exactPhrase.trim(),c(a)},[e.queryString]);var l=function(){var e=Object.keys(i);for(var t in e)if(""!==i[e[t]].trim())return!0;return!1}();return r.a.createElement("div",{className:t.formContainer},r.a.createElement("div",{className:t.form},r.a.createElement(z.a,{className:t.formLabel,component:"legend"},"Narrow your search results"),function(){var e=[{label:"Exact phrase",key:"exactPhrase"},{label:"Has words",key:"hasWords"},{label:"Website",key:"domains"}].map(function(e){return r.a.createElement(A.a,{className:t.formControlLabel,key:e.key,control:r.a.createElement(G.a,{id:"search-form-".concat(e.key),value:i[e.key],onChange:s(e.key),margin:"normal"}),classes:{label:t.formLabel},label:e.label,labelPlacement:"start"})});return r.a.createElement(q.a,null,e)}()),r.a.createElement("div",{className:t.formActions},r.a.createElement(H.a,{className:t.formBtn,disabled:!l,onClick:function(){c(L.a.mapValues(i,function(){return""}))}},"Clear"),r.a.createElement(H.a,{className:t.formBtn,onClick:function(){e.onSubmit(function(){var e={q:""};return i.hasWords&&i.hasWords.trim()&&(e.q="".concat(e.q).concat(i.hasWords.trim())),i.exactPhrase&&i.exactPhrase.trim()&&(e.q="".concat(e.q,' "').concat(i.exactPhrase.trim(),'"')),i.domains&&i.domains.trim()&&(e.domains=i.domains.trim()),T.a.stringify(e)}())},disabled:!l,size:"small",variant:"contained",color:"primary"},"Search")))},V=Object(b.a)(function(e){var t;return{search:{position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(j.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(j.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},searchMobile:{position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(j.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(j.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",color:"#FFFFFF"},arrowBackIcon:{width:e.spacing(6),height:"100%",position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",color:"#FFFFFF"},searchIconMobile:{height:"100%",right:e.spacing(2),position:"relative",display:"flex",alignItems:"center",justifyContent:"center",color:"#FFFFFF"},closeIcon:Object(m.a)({height:"100%",position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",right:e.spacing(6),color:"#FFFFFF"},e.breakpoints.only("xs"),{right:e.spacing(1)}),inputRoot:(t={color:"inherit",width:"auto"},Object(m.a)(t,e.breakpoints.up("md"),{marginLeft:e.spacing(7),marginRight:e.spacing(11)}),Object(m.a)(t,e.breakpoints.only("sm"),{marginLeft:e.spacing(3),marginRight:e.spacing(11)}),t),inputInput:{padding:e.spacing(1,4,1,1),transition:e.transitions.create("width"),height:e.spacing(4)},inputRootMobile:{color:"inherit",width:"auto",marginLeft:e.spacing(5),marginRight:e.spacing(5)},inputInputMobile:{padding:e.spacing(1,6,1,1),transition:e.transitions.create("width"),height:e.spacing(4)},arrowDropdownIcon:{height:"100%",position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",right:e.spacing(1),color:"#FFFFFF"}}}),_=Object(s.f)(function(e){var t=Object(a.useRef)(null),n=V(),o=Object(a.useState)(""),i=Object(u.a)(o,2),c=i[0],s=i[1],l=Object(a.useState)(!1),m=Object(u.a)(l,2),p=m[0],g=m[1],d=Object(a.useState)(!1),b=Object(u.a)(d,2),f=b[0],h=b[1],O=Object(a.useState)(null),w=Object(u.a)(O,2),j=w[0],x=w[1],C=function(t){if(x(null),e.onMobileSearchBoxToggle(!1),h(!1),t)window.location="#/search?".concat(t);else if(c.trim()){var n=c.replace(/{domains:([^}]+)}/,"");window.location="#/search?q=".concat(n.trim())}},P=function(e){13===e.which&&(C(),e.target.blur())},F=function(e){return s(e.target.value)},M=function(e,t){return r.a.createElement(E.a,{onClick:function(){return t()},className:e},r.a.createElement(B.a,null))},R=function(){return p?r.a.createElement(E.a,{onClick:function(){s(""),e.onMobileSearchBoxToggle(!1),h(!1)},className:n.closeIcon},r.a.createElement(D.a,null)):null};return Object(a.useEffect)(function(){g(!!c)},[c]),Object(a.useEffect)(function(){var t=T.a.parse(e.location.search),n=t.q||"",a=t.domains,r=t.language;a&&a.trim()&&(n+=" {domains:".concat(a.trim(),"}")),r&&r.trim()&&(n+=" {language:".concat(r.trim(),"}")),s(n)},[e.location.search]),r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{xsDown:!0,implementation:"css"},r.a.createElement("div",{ref:t,className:n.search},M(n.searchIcon,function(){C()}),R(),r.a.createElement(E.a,{"aria-controls":"search-form-menu","aria-haspopup":"true",className:n.arrowDropdownIcon,onClick:function(){return x(t.current)}},Boolean(j)?r.a.createElement(N.a,null):r.a.createElement(S.a,null)),r.a.createElement(v.a,{onChange:F,onKeyPress:P,value:c,placeholder:"Search for topics, locations & sources",classes:{root:n.inputRoot,input:n.inputInput},inputProps:{"aria-label":"search"}}),r.a.createElement(k.a,{id:"search-form-menu",anchorEl:j,getContentAnchorEl:null,keepMounted:!0,elevation:0,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},open:Boolean(j),onClose:function(){x(null)}},r.a.createElement(K,{queryString:e.location.search,onSubmit:C})))),r.a.createElement(y.a,{smUp:!0,implementation:"css"},r.a.createElement(r.a.Fragment,null,f?r.a.createElement("div",{className:n.searchMobile},r.a.createElement(E.a,{className:n.arrowBackIcon,onClick:function(){h(!1),e.onMobileSearchBoxToggle(!1)}},r.a.createElement(I.a,null)),R(),f?r.a.createElement(v.a,{autoFocus:!0,onChange:F,onKeyPress:P,value:c,placeholder:"Search",classes:{root:n.inputRootMobile,input:n.inputInputMobile},inputProps:{"aria-label":"search"}}):null):null,f?null:M(n.searchIconMobile,function(){h(!0),e.onMobileSearchBoxToggle(!0)}))))}),$=Object(b.a)(function(e){return{menuButton:{marginRight:e.spacing(2)},appBar:{zIndex:e.zIndex.drawer+1},title:Object(m.a)({flexGrow:.2,fontWeight:600},e.breakpoints.down("xs"),{flexGrow:1})}}),Q=function(e){var t=$(),n=Object(a.useState)(!1),o=Object(u.a)(n,2),i=o[0],c=o[1];return r.a.createElement(f.a,{position:"fixed",className:t.appBar},r.a.createElement(h.a,null,r.a.createElement(y.a,{smDown:!0,implementation:"css"},r.a.createElement(E.a,{onClick:e.onDesktopMenuToggle,edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(w.a,null))),i?null:r.a.createElement(y.a,{mdUp:!0,implementation:"css"},r.a.createElement(E.a,{onClick:e.onMobileMenuToggle,edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(w.a,null))),i?null:r.a.createElement("h3",{className:t.title},"Daily News"),r.a.createElement(_,{onMobileSearchBoxToggle:c})))},X=n(217),Y=n(197),Z=n(205),ee=n(203),te=n(204),ne=n(89),ae=n.n(ne),re=n(90),oe=n.n(re),ie=n(92),ce=n.n(ie),se=n(91),le=n.n(se),ue=n(94),me=n.n(ue),pe=n(93),ge=n.n(pe),de=n(95),be=n.n(de),fe=Object(b.a)(function(e){return{drawer:Object(m.a)({},e.breakpoints.up("md"),{width:240,flexShrink:0}),drawerPaper:{width:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),borderRight:e.spacing(0)},drawerPaperShift:{width:0,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},toolbar:e.mixins.toolbar,listItem:{color:"#3c4043",borderTopRightRadius:e.spacing(3),borderBottomRightRadius:e.spacing(3),"&:hover":{color:"#1a73e8",background:"none"}},listItemSelected:{borderTopRightRadius:e.spacing(3),borderBottomRightRadius:e.spacing(3),background:"#E6EBFD",color:"#1a73e8","&:hover":{color:"#1a73e8",background:"#E6EBFD"}},listItemIconSelected:{color:"inherit"},title:{paddingLeft:e.spacing(2),fontWeight:600},poweredBy:{color:"#3f51b5"}}}),he=Object(s.f)(function(e){var t=fe(),n=e.location.pathname,a=[[{key:"top-stories",title:"Top stories",icon:r.a.createElement(ae.a,null),link:"/",selected:!("/"!==n&&!n.includes("top-stories"))}],[{key:"business",title:"Business",icon:r.a.createElement(oe.a,null),link:"/topics/business",selected:!!n.includes("topics/business")},{key:"technology",title:"Technology",icon:r.a.createElement(le.a,null),link:"/topics/technology",selected:!!n.includes("topics/technology")},{key:"entertainment",title:"Entertainment",icon:r.a.createElement(ce.a,null),link:"/topics/entertainment",selected:!!n.includes("topics/entertainment")},{key:"sports",title:"Sports",icon:r.a.createElement(ge.a,null),link:"/topics/sports",selected:!!n.includes("topics/sports")},{key:"science",title:"Science",icon:r.a.createElement(me.a,null),link:"/topics/science",selected:!!n.includes("topics/science")},{key:"health",title:"Health",icon:r.a.createElement(be.a,null),link:"/topics/health",selected:!!n.includes("topics/health")}]],o=function(){return r.a.createElement(Y.a,null,r.a.createElement(ee.a,null,r.a.createElement("p",{className:t.poweredBy},"Powered by ",r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:"https://newsapi.org"},"NewsAPI.org"))))},i=function(){var n=a.length;return a.map(function(a,o){return r.a.createElement(r.a.Fragment,{key:"menu-list-".concat(o)},r.a.createElement(Y.a,null,a.map(function(n){return r.a.createElement(l.b,{key:n.title,to:n.link,onClick:function(){e.openMobile&&e.onMobileMenuToggle()}},r.a.createElement(ee.a,{button:!0,key:n.key,className:n.selected?t.listItemSelected:t.listItem},r.a.createElement(te.a,{className:n.selected?t.listItemIconSelected:""},n.icon),r.a.createElement("span",null,n.title)))})),n-1!==o?r.a.createElement(Z.a,null):null)})};return r.a.createElement("nav",{className:t.drawer,"aria-label":"top-stories categories"},r.a.createElement(y.a,{mdUp:!0,implementation:"css"},r.a.createElement(X.a,{variant:"temporary",open:e.openMobile,onClose:e.onMobileMenuToggle,classes:{paper:t.drawerPaper},ModalProps:{keepMounted:!0}},r.a.createElement("div",{className:t.toolbar},r.a.createElement("h3",{className:t.title},"Daily News")),i(),r.a.createElement(Z.a,null),o())),r.a.createElement(y.a,{smDown:!0,implementation:"css"},r.a.createElement(X.a,{variant:"permanent",open:!0,classes:{paper:e.openDesktop?t.drawerPaper:t.drawerPaperShift},ModalProps:{keepMounted:!0}},r.a.createElement("div",{className:t.toolbar}),i(),r.a.createElement(Z.a,null),o())))}),Ee=Object(b.a)(function(e){return{root:{display:"flex",flexGrow:1},content:Object(m.a)({flexGrow:1,padding:e.spacing(3),marginTop:e.spacing(4),transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},e.breakpoints.down("xs"),{padding:e.spacing(0),paddingTop:e.spacing(2)}),contentShift:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},gridContainer:{flexGrow:1}}}),Oe=function(e){var t=Ee(),n=Object(a.useState)(!1),o=Object(u.a)(n,2),i=o[0],c=o[1],s=Object(a.useState)(!0),l=Object(u.a)(s,2),b=l[0],f=l[1];function h(){c(!i)}function E(){f(!b)}return r.a.createElement("div",{className:t.root},r.a.createElement(Q,{onMobileMenuToggle:h,onDesktopMenuToggle:E}),r.a.createElement(he,{openMobile:i,openDesktop:b,onMobileMenuToggle:h,onDesktopMenuToggle:E}),r.a.createElement(g.a,{className:Object(p.a)(t.content,Object(m.a)({},t.contentShift,b))},r.a.createElement(d.a,{container:!0,className:t.gridContainer,spacing:2},r.a.createElement(d.a,{item:!0,xs:12,sm:12,md:10},e.children))))},we=n(30),ye=n.n(we),je=n(41),ve=n(209),ke=n(215);function xe(e){return r.a.createElement(ke.a,{"aria-labelledby":e.title||"app-modal-title","aria-describedby":e.description||"app-modal-description",open:e.open,onClose:e.handleClose||null,onBackdropClick:e.onBackdropClick||null},e.children)}var Se=n(96),Ce=n.n(Se),Ne=n(208),Pe=Object(b.a)(function(e){var t;return{gridContainer:{flexGrow:1},card:Object(m.a)({borderRadius:e.spacing(1),borderStyle:"solid",borderWidth:"thin",borderColor:"#D3D3D3"},e.breakpoints.down("xs"),{borderRadius:e.spacing(0),border:e.spacing(0),borderBottomWidth:"thin",borderBottomStyle:"solid",borderBottomColor:"#D3D3D3",boxShadow:"none",marginLeft:e.spacing(1),marginRight:e.spacing(1)}),mediaContainer:Object(m.a)({padding:e.spacing(3)},e.breakpoints.down("xs"),{padding:e.spacing(1)}),articleContainer:Object(m.a)({padding:e.spacing(3)},e.breakpoints.down("xs"),{padding:e.spacing(1),margin:e.spacing(0)}),media:(t={backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",height:"100%",width:"100%",borderRadius:e.spacing(1)},Object(m.a)(t,e.breakpoints.only("xs"),{maxHeight:80}),Object(m.a)(t,e.breakpoints.only("sm"),{maxHeight:150}),t),title:Object(m.a)({padding:e.spacing(0),marginBottom:e.spacing(.5)},e.breakpoints.down("xs"),{fontSize:"1rem",fontWeight:500}),source:Object(m.a)({color:"grey",fontSize:"0.9rem"},e.breakpoints.down("xs"),{fontSize:"0.7rem"}),description:Object(m.a)({},e.breakpoints.down("xs"),{display:"none"}),readMore:{fontSize:"0.9rem",padding:e.spacing(0),margin:e.spacing(0),marginTop:e.spacing(1),color:e.palette.primary.main}}}),Be=function(e){var t=e.article,n=Pe();return r.a.createElement(Ne.a,{className:n.card},r.a.createElement(d.a,{container:!0,className:n.gridContainer},r.a.createElement(d.a,{item:!0,xs:8,className:n.articleContainer},r.a.createElement("h3",{className:n.title},t.title),r.a.createElement("span",{className:n.source},t.source.name," - ",Ce.a.utc(t.publishedAt).fromNow()),r.a.createElement("p",{className:n.description},t.description),r.a.createElement("p",{className:n.readMore},r.a.createElement("a",{rel:"noopener noreferrer",target:"_blank",href:t.url},"Read more"))),r.a.createElement(d.a,{item:!0,xs:4,className:n.mediaContainer},r.a.createElement("div",{className:n.media,style:{backgroundImage:"url(".concat(t.urlToImage,")")}}))))},Fe=Object(b.a)(function(e){return{article:{marginBottom:e.spacing(2)},title:Object(m.a)({padding:e.spacing(0),margin:e.spacing(0),marginBottom:e.spacing(1),marginTop:e.spacing(3)},e.breakpoints.down("xs"),{fontSize:"1.125rem",fontWeight:600,paddingLeft:e.spacing(1)}),noResults:{textAlign:"center"}}}),Ie=function(e){var t=Fe(),n=e.title?r.a.createElement("h2",{className:t.title},e.title):null;return r.a.createElement(r.a.Fragment,null,n,e.articles.length?e.articles.map(function(e,n){return r.a.createElement("div",{className:t.article,key:n},r.a.createElement(Be,{className:t.article,article:e}))}):r.a.createElement("div",{className:t.noResults},r.a.createElement("h4",null,"No results found.")))},Me=n(97);function De(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var Re=["f251266458e947ba94e465c731e10a2a","afbacd1a0f8a435e8971084223998783"],Te=n.n(Me).a.create({baseURL:"https://newsapi.org/v2"});Te.interceptors.request.use(function(e){var t=Math.floor(Math.random()*Re.length),n=Re[t];e.headers.Authorization="Bearer ".concat(n);return e.params=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?De(n,!0).forEach(function(t){Object(m.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):De(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},{country:"in"},{},e.params,{pageSize:100}),e});var We=Te,Le=Object(b.a)(function(e){return{title:Object(m.a)({padding:e.spacing(0),margin:e.spacing(0),marginBottom:e.spacing(1),marginTop:e.spacing(3)},e.breakpoints.down("xs"),{fontSize:"1.125rem",fontWeight:600,paddingLeft:e.spacing(1)})}}),ze=function(e){var t=Le(),n=Object(a.useState)([]),o=Object(u.a)(n,2),i=o[0],c=o[1],s=Object(a.useState)(!0),l=Object(u.a)(s,2),m=l[0],p=l[1];function g(){return(g=Object(je.a)(ye.a.mark(function e(){var t;return ye.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,We.get("/top-headlines");case 3:t=e.sent,p(!1),c(t.data.articles);case 6:case"end":return e.stop()}},e)}))).apply(this,arguments)}Object(a.useEffect)(function(){!function(){g.apply(this,arguments)}()},[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(xe,{open:m},r.a.createElement(ve.a,{color:"secondary"})),r.a.createElement("h2",{className:t.title},"Headlines"),m?null:r.a.createElement(Ie,{articles:i}))},Ae=n(211),qe=n(214),Ge=n(210),He=Object(b.a)(function(e){return{tabsContainer:Object(m.a)({borderBottom:"1px solid",borderBottomWidth:"thin",borderBottomColor:"#D3D3D3",marginBottom:e.spacing(3)},e.breakpoints.down("xs"),{marginLeft:e.spacing(1),marginRight:e.spacing(1)}),tabs:{padding:e.spacing(0),margin:e.spacing(0)},tab:Object(m.a)({textTransform:"none",fontFamily:"Google Sans",fontSize:"1.2rem",fontWeight:500,margin:e.spacing(0),padding:e.spacing(2),"&:hover":{color:"#000000"},width:"fit-content",minWidth:e.spacing(0)},e.breakpoints.down("xs"),{fontSize:"0.9rem",padding:e.spacing(1.2)})}});function Ue(e){var t=He(),n=Object(a.useState)(e.selectedTabIndex||0),o=Object(u.a)(n,2),i=o[0],c=o[1],s=e.tabs.map(function(e,n){return r.a.createElement(Ge.a,Object.assign({key:e,className:t.tab,label:e},{id:"scrollable-auto-tab-".concat(a=n),"aria-controls":"scrollable-auto-tabpanel-".concat(a)}));var a});return Object(a.useEffect)(function(){c(e.selectedTabIndex)},[e.selectedTabIndex]),r.a.createElement("div",{className:t.tabsContainer},r.a.createElement(qe.a,{className:t.tabs,value:i,onChange:function(t,n){c(n),e.onSectionChange(n)},indicatorColor:"primary",textColor:"primary",variant:"scrollable",scrollButtons:"auto","aria-label":"scrollable auto tabs example"},s))}var Je=Object(b.a)(function(e){return{title:Object(m.a)({fontSize:"1.8rem",textTransform:"capitalize",margin:e.spacing(0),marginBottom:e.spacing(1),marginTop:e.spacing(3)},e.breakpoints.down("xs"),{fontSize:"1.125rem",paddingLeft:e.spacing(1),fontWeight:600}),loader:{textAlign:"center"}}});function Ke(e){var t=Je(),n=Object(a.useState)([]),o=Object(u.a)(n,2),i=o[0],c=o[1],s=Object(a.useState)(!1),l=Object(u.a)(s,2),m=l[0],p=l[1],g=Object(a.useState)(!1),d=Object(u.a)(g,2),b=d[0],f=d[1],h=e.match.params,E=h.topicID,O=h.sectionID,w={business:["Latest","Economy","Markets","Jobs","Personal finance","Entrepreneurship"],technology:["Latest","Mobile","Gadgets","Internet","Virtual Reality","Artificial Intelligence","Computing"],entertainment:["Latest","Movies","Music","Tv","Books","Art","Celebrities"],sports:["Latest","Cricket","Hockey","Tennis","Football","Badminton","Kabaddi","Women's Cricket","Basketball","F1 Racing"],science:["Latest","Environment","Outer space","Physics","Genetics","Wildlife"],health:["Latest","Medicine","Healthcare","Mental health","Nutrition","Fitness"]},y=w[E].map(function(e){return e.toLowerCase()}).indexOf(O),j=-1!==y?y:0,v=function(){var e=Object(je.a)(ye.a.mark(function e(t){var n;return ye.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,We.get("/top-headlines",{params:{category:E,q:"latest"!==t?t:void 0}});case 3:n=e.sent,f(!1),c(n.data.articles);case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();Object(a.useEffect)(function(){(function(){var e=Object(je.a)(ye.a.mark(function e(){var t;return ye.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,We.get("/top-headlines",{params:{category:E}});case 3:t=e.sent,p(!1),c(t.data.articles);case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}})()()},[E]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(xe,{open:m},r.a.createElement(ve.a,{color:"secondary"})),r.a.createElement("h2",{className:t.title},E),r.a.createElement(Ue,{tabs:w[e.match.params.topicID],selectedTabIndex:j,onSectionChange:function(e){var t=w[E][e].toLowerCase();window.location.hash="topics/".concat(E,"/sections/").concat(t),v(t)}}),b?r.a.createElement("div",{className:t.loader},r.a.createElement(Ae.a,{color:"secondary"})):m?null:r.a.createElement(Ie,{articles:i}))}function Ve(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function _e(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ve(n,!0).forEach(function(t){Object(m.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ve(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var $e=Object(b.a)(function(e){return{spacing:{marginBottom:e.spacing(3)}}});function Qe(e){var t=$e(),n=Object(a.useState)([]),o=Object(u.a)(n,2),i=o[0],c=o[1],s=Object(a.useState)(!1),l=Object(u.a)(s,2),m=l[0],p=l[1];Object(a.useEffect)(function(){(function(){var t=Object(je.a)(ye.a.mark(function t(){var n;return ye.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return p(!0),t.next=3,We.get("/everything",{params:_e({country:void 0,language:"en"},T.a.parse(e.location.search))});case 3:n=t.sent,p(!1),c(n.data.articles);case 6:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}})()()},[e.location.search]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(xe,{open:m},r.a.createElement(ve.a,{color:"secondary"})),r.a.createElement("div",{className:t.spacing}),m?null:r.a.createElement(Ie,{articles:i}))}var Xe=n(98),Ye=Object(Xe.a)({typography:{fontFamily:"'Google Sans', sans-serif"}}),Ze=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function et(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}i.a.render(r.a.createElement(c.a,{theme:Ye},r.a.createElement(function(){return r.a.createElement(l.a,null,r.a.createElement(Oe,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:ze}),r.a.createElement(s.a,{exact:!0,path:"/topics/:topicID",component:Ke}),r.a.createElement(s.a,{exact:!0,path:"/topics/:topicID/sections/:sectionID",component:Ke}),r.a.createElement(s.a,{exact:!0,path:"/search",component:Qe}))))},null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/google-news-clone",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/google-news-clone","/service-worker.js");Ze?(!function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):et(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):et(t,e)})}}()}},[[107,1,2]]]);
//# sourceMappingURL=main.f50bfc47.chunk.js.map