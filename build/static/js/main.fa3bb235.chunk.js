(this.webpackJsonpyoutubeclone=this.webpackJsonpyoutubeclone||[]).push([[0],{107:function(e,t,s){},108:function(e,t,s){},109:function(e,t,s){},110:function(e,t,s){},111:function(e,t,s){},112:function(e,t,s){"use strict";s.r(t);var a=s(0),c=s.n(a),n=s(22),i=s.n(n),r=(s(76),s(77),s(25)),o=(s(78),s(49)),l=s.n(o),j=s(50),d=s.n(j),h=s(51),b=s.n(h),m=s(52),u=s.n(m),O=s(53),p=s.n(O),x=s(54),g=s.n(x),v=s(29),f=s(1);var w=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),s=t[0],c=t[1];return Object(f.jsxs)("div",{className:"header",children:[Object(f.jsxs)("div",{className:"header__left",children:[Object(f.jsx)(l.a,{className:"menu__icon"}),Object(f.jsx)(v.b,{to:"/",children:Object(f.jsx)("img",{className:"header__logo",src:"https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg",alt:""})})]}),Object(f.jsxs)("div",{className:"header__center",children:[Object(f.jsx)("input",{onChange:function(e){return c(e.target.value)},value:s,placeholder:"Search",type:"text"}),Object(f.jsx)(v.b,{to:"/search/".concat(s),children:Object(f.jsx)(d.a,{className:"header__inputButton"})})]}),Object(f.jsxs)("div",{className:"header__right",children:[Object(f.jsx)(b.a,{className:"header__icon"}),Object(f.jsx)(u.a,{className:"header__icon"}),Object(f.jsx)(p.a,{className:"header__icon"}),Object(f.jsx)(g.a,{className:"header__icon"})]})]})},_=s(38),y=s.n(_),N=s(55),C=s(56),I=s(133);s(87);var k=function(e){var t=e.image,s=e.title,a=e.channel,c=e.views,n=e.timestamp,i=e.channelImage;return Object(f.jsxs)("div",{className:"videoCard",children:[Object(f.jsx)("img",{className:"thumbnail",src:t,alt:""}),Object(f.jsxs)("div",{className:"video__info",children:[Object(f.jsx)(I.a,{className:"video__avatar",alt:a,src:i}),Object(f.jsxs)("div",{className:"video__text",children:[Object(f.jsx)("h4",{children:s}),Object(f.jsx)("p",{children:a}),Object(f.jsxs)("p",{children:[c," \u2022 ",n]})]})]})]})},S=(s(88),s(39)),P=s.n(S),H=s(57),L=s(131),R=s(132),T=function(){var e=Object(a.useState)([]),t=Object(r.a)(e,2),s=t[0],c=t[1],n=Object(a.useState)(!0),i=Object(r.a)(n,2),o=i[0],l=i[1],j=Object(a.useState)(!1),d=Object(r.a)(j,2),h=d[0],b=d[1];function m(){return(m=Object(C.a)(y.a.mark((function e(t){var s,a,n,i,r,o,j,d,h,b,m,u,O,p;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=[],a=Object(N.a)(t),e.prev=2,a.s();case 4:if((n=a.n()).done){e.next=21;break}return i=n.value,r=i.id,o=i.snippet,j=o.channelId,e.next=11,P.a.get("https://www.googleapis.com/youtube/v3/channels?part=snippet&id=".concat(j,"&key=AIzaSyDvdF98ssVj5wjTmqcxQmgvot1B-yfkCmY"));case 11:d=e.sent,h=d.data.items[0].snippet.thumbnails.medium.url,b=o.title,m=o.thumbnails.medium.url,u=i.statistics.viewCount,O=H.DateTime.fromISO(o.publishedAt).toRelative(),p=o.channelTitle,s.push({videoId:r,image:m,title:b,channel:p,views:u,timestamp:O,channelImage:h});case 19:e.next=4;break;case 21:e.next=26;break;case 23:e.prev=23,e.t0=e.catch(2),a.e(e.t0);case 26:return e.prev=26,a.f(),e.finish(26);case 29:c(s),l(!1);case 32:case"end":return e.stop()}}),e,null,[[2,23,26,29]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){P.a.get("https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=12&regionCode=US&key=AIzaSyDvdF98ssVj5wjTmqcxQmgvot1B-yfkCmY").then((function(e){console.log(e.data.items),function(e){m.apply(this,arguments)}(e.data.items)})).catch((function(e){console.log(e),b(!0)}))}),[]),h?Object(f.jsx)(R.a,{severity:"error",className:"loading",children:"No Results found!"}):Object(f.jsxs)("div",{className:"recommendedVideos",children:[o?Object(f.jsx)(L.a,{className:"loading",color:"secondary"}):null,Object(f.jsx)("div",{className:"recommendedVideos__videos",children:s.map((function(e){return Object(f.jsx)(k,{title:e.title,image:e.image,views:e.views,timestamp:e.timestamp,channel:e.channel,channelImage:e.channelImage},e.videoId)}))})]})};s(107),s(108);var A=function(e){var t=e.selected,s=e.title,a=e.Icon;return Object(f.jsxs)("div",{className:"sidebarRow ".concat(t&&"selected"),children:[Object(f.jsx)(a,{className:"sidebarRowIcon"}),Object(f.jsx)("h2",{className:"sidebarRow__title",children:s})]})},q=s(58),D=s.n(q),F=s(60),M=s.n(F),V=s(61),W=s.n(V),Y=s(62),B=s.n(Y),G=s(63),U=s.n(G),Q=s(64),E=s.n(Q),K=s(65),z=s.n(K),J=s(59),Z=s.n(J),X=s(66),$=s.n(X);var ee=function(){return Object(f.jsxs)("div",{className:"sidebar",children:[Object(f.jsx)(A,{selected:!0,Icon:D.a,title:"Home"}),Object(f.jsx)(A,{Icon:Z.a,title:"Trending"}),Object(f.jsx)(A,{Icon:M.a,title:"Explore"}),Object(f.jsx)(A,{Icon:W.a,title:"Subscription"}),Object(f.jsx)("hr",{}),Object(f.jsx)(A,{Icon:B.a,title:"Library"}),Object(f.jsx)(A,{Icon:U.a,title:"History"}),Object(f.jsx)(A,{Icon:E.a,title:"Watch Later"}),Object(f.jsx)(A,{Icon:z.a,title:"Liked Video"}),Object(f.jsx)(A,{Icon:$.a,title:"Show More"}),Object(f.jsx)("hr",{})]})},te=s(4),se=(s(109),s(68)),ae=s.n(se),ce=s(67),ne=s.n(ce);s(110);var ie=function(e){var t=e.image,s=e.channel,a=e.verified,c=e.subs,n=e.noOfVideos,i=e.description;return Object(f.jsxs)("div",{className:"channelRow",children:[Object(f.jsx)(I.a,{className:"channelRow__Logo",alt:s,src:t}),Object(f.jsxs)("div",{className:"channelRow__Text",children:[Object(f.jsxs)("h4",{children:[s," ",a&&Object(f.jsx)(ne.a,{})]}),Object(f.jsxs)("p",{children:[c," subscriber \u2022 ",n," videos"]}),Object(f.jsx)("p",{children:i})]})]})};s(111);var re=function(e){var t=e.views,s=e.subs,a=e.description,c=e.timestamp,n=e.channel,i=e.title,r=e.image;return Object(f.jsxs)("div",{className:"videoRow",children:[Object(f.jsx)("img",{src:r,alt:""}),Object(f.jsxs)("div",{className:"videoRow__text",children:[Object(f.jsx)("h3",{children:i}),Object(f.jsxs)("p",{className:"videoRow__headline",children:[n," \u2022 ",Object(f.jsx)("span",{className:"videoRow__subsNumber",children:s})," Subscribers \u2022 ",t," views \u2022 ",c]}),Object(f.jsx)("p",{className:"videoRow__description",children:a})]})]})};var oe=function(){return Object(f.jsxs)("div",{className:"searchPage",children:[Object(f.jsxs)("div",{className:"searchPage__filter",children:[Object(f.jsx)(ae.a,{}),Object(f.jsx)("h2",{children:"Filter"})]}),Object(f.jsx)("hr",{}),Object(f.jsx)(ie,{image:"https://yt3.ggpht.com/ytc/AAUvwnjeHnMHZ7T341QLHqPhQPfsG6ugvg_SV6z6FkYqGw=s176-c-k-c0x00ffffff-no-rj-mo",channel:"CodeWithHarry",verified:!0,subs:"1.32M",noOfVideos:"1,220",description:"CodeWithHarry is my attempt to teach basics and those coding technique to people in short time which took me ages to learn"}),Object(f.jsx)("hr",{}),Object(f.jsx)(re,{image:"https://i.ytimg.com/an_webp/W7kSd1nSrJI/mqdefault_6s.webp?du=3000&sqp=CKSUrYUG&rs=AOn4CLDaDa9WOGvb-f8C8mqRDKkLQ4m3Yw",title:"Single Page application: Why & When To use React/Angular/Vue.js",channel:"CodeWithHarry",subs:"1.32M",views:"54K",timestamp:"3 days ago",description:"In this video, we will look into why and when should we be using frameworks like angular and react. There are many resources to learn React and Angular but one should know why to use them and more importantly when to use them?"}),Object(f.jsx)("hr",{}),Object(f.jsx)(re,{image:"https://i.ytimg.com/an_webp/ZSPZob_1TOk/mqdefault_6s.webp?du=3000&sqp=CIPGrYUG&rs=AOn4CLCuVORf2gfbbPXLLI8gojXHEzD4Fg",title:"C Language Tutorial For Beginner in Hindi ",channel:"CodeWithHarry",subs:"1.32M",views:"3.6M",timestamp:"9 month ago",description:"Download Free Notes + Code + Practice Sheets Here: https://codewithharry.com/videos/c-tu...\r C programming is the best way to learn to code and get your journey started as a programmer. "}),Object(f.jsx)("hr",{}),Object(f.jsx)(re,{image:"https://i.ytimg.com/an_webp/gfDE2a7MKjA/mqdefault_6s.webp?du=3000&sqp=CNDBrYUG&rs=AOn4CLCLhHlcQKWYb3L6pdgOouhiMU6ecA",title:"Python Tutorial for Beginner in Hindi ",channel:"CodeWithHarry",subs:"1.32M",views:"3.6M",timestamp:"7 month ago",description:"Learn Python One Video in Hindi: This Python Programming in Hindi tutorial is a complete python course in Hindi comprising of 13 Python chapters and 3 Python Projects. After watching this course you can learn Python programming easily in Hindi."}),Object(f.jsx)("hr",{})]})};var le=function(){return Object(f.jsx)("div",{className:"app",children:Object(f.jsxs)(v.a,{children:[Object(f.jsx)(w,{}),Object(f.jsxs)(te.c,{children:[Object(f.jsx)(te.a,{path:"/search",children:Object(f.jsxs)("div",{className:"app__page",children:[Object(f.jsx)(ee,{}),Object(f.jsx)(oe,{})]})}),Object(f.jsx)(te.a,{path:"/",children:Object(f.jsxs)("div",{className:"app__page",children:[Object(f.jsx)(ee,{}),Object(f.jsx)(T,{})]})})]})]})})},je=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,134)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),a(e),c(e),n(e),i(e)}))};i.a.render(Object(f.jsx)(c.a.StrictMode,{children:Object(f.jsx)(le,{})}),document.getElementById("root")),je()},76:function(e,t,s){},77:function(e,t,s){},78:function(e,t,s){},87:function(e,t,s){},88:function(e,t,s){}},[[112,1,2]]]);
//# sourceMappingURL=main.fa3bb235.chunk.js.map