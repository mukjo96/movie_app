(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{26:function(e,t,a){},47:function(e,t,a){e.exports=a.p+"static/media/cgv.f10c3a18.png"},48:function(e,t,a){e.exports=a.p+"static/media/lottecinema.c31f6ef4.png"},49:function(e,t,a){e.exports=a.p+"static/media/megabox.30c228ba.png"},51:function(e,t,a){e.exports=a(87)},56:function(e,t,a){},64:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(44),l=a.n(c),o=a(11),i=a(3);a(56);var s=function(){return r.a.createElement("div",{className:"about__container"},r.a.createElement("span",null,"\uc544\uc9c1"),r.a.createElement("span",null,"\uc900\ube44\uc911"))},m=a(5),u=a.n(m),p=a(13),v=a(7),d=a(20),_=(a(62),a(64),a(23));var g=function(e){var t=e.movie_id,a=e.title_kr,n=e.title_original,c=e.poster_path,l=e.vote_average,i=e.vote_count,s=e.genre_ids,m=e.release_date,u=e.summary;return r.a.createElement("div",{className:"movie"},r.a.createElement(o.b,{to:{pathname:"/movie/".concat(t),state:{movie_id:t,title_kr:a,title_original:n,poster_path:c,vote_average:l,vote_count:i,genre_ids:s,release_date:m,summary:u}}},r.a.createElement("div",{className:"movieCard"},r.a.createElement("div",{className:"movie-poster"},r.a.createElement("div",null,r.a.createElement("img",{className:"movieimg",src:"https://image.tmdb.org/t/p/w500"+c,alt:n,title:n}))),r.a.createElement("div",{className:"mv-inf"},r.a.createElement("div",{className:"mv-inf-top"},r.a.createElement("div",{className:"mv-inf-title"},a)),r.a.createElement("div",null,r.a.createElement("hr",null)),r.a.createElement("div",{className:"mv-inf-btm"},r.a.createElement("div",{className:"mv-inf-overview"},u.substr(0,70),u.length>140?"...":""),r.a.createElement("div",{className:"mv-inf-vote-avg"},r.a.createElement(d.a,{className:"star",icon:_.a}),l))))))};var h=a(14),E=a.n(h),f=(a(26),a(22)),b=(a(28),function(){var e=Object(n.useState)(1),t=Object(v.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(20),o=Object(v.a)(l,2),i=o[0],s=o[1],m=Object(n.useState)([]),d=Object(v.a)(m,2),_=d[0],h=d[1],b=Object(n.useState)(!0),N=Object(v.a)(b,2),y=N[0],O=N[1];Object(n.useEffect)((function(){j()}),[a]);var j=function(){var e=Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://api.themoviedb.org/3/movie/now_playing?sort_by=vote_average.desc&api_key=cfaaa8c5177462f54ee54a30c746dca3&language=ko-KR&page=".concat(a,"&region=KR"));case 2:t=e.sent,h(t.data.results),O(!1),s(t.data.total_results),console.log(t.data.total_pages);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("body",{className:"container"},r.a.createElement("div",null,r.a.createElement(f.a,{className:"pagination",total:i,current:a,showPrevNextJumpers:!0,style:{marginTop:"2%"},pageSize:20,onChange:function(e){return c(e)}})),y?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},_.map((function(e){return r.a.createElement(g,{movie_id:e.id,title_original:e.original_title,summary:e.overview,poster_path:e.poster_path,title_kr:e.title,vote_average:e.vote_average,vote_count:e.vote_count,genre_ids:e.genre_ids,release_date:e.release_date})}))))}),N=a(16),y=a(17),O=a(19),j=a(18),k=(a(83),a(47)),w=a.n(k),S=a(48),x=a.n(S),C=a(49),D=a.n(C),K=a(50),L=a.n(K),R=(a(84),function(e){Object(O.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(N.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={text:""},e.onFormSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.text)},e.onChange=function(t){var a=t.target.value;e.setState({text:a})},e}return Object(y.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"searchbar"},r.a.createElement("form",{onSubmit:this.onFormSubmit},r.a.createElement("input",{className:"search__input",value:this.state.text,type:"text",onChange:this.onChange,placeholder:"Search"})))}}]),a}(n.Component)),A=a(29),J=function(e){Object(O.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(N.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isOpen:!1,text:""},e.handleClick=function(){return e.setState({open:!e.state.open})},e.onChange=function(e){console.log(e.target.value)},e}return Object(y.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"nav"},r.a.createElement("body",null,r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"navbar__logo"},r.a.createElement(d.a,{className:"film",icon:A.a}),r.a.createElement("a",null,r.a.createElement(o.b,{to:"/"},"Movie App"))),r.a.createElement("ul",{className:"navbar__menu"+(this.state.open?"show":"hidden")},r.a.createElement("li",null,r.a.createElement("a",null,r.a.createElement(o.b,{to:"/"},"Now Playing"))),r.a.createElement("li",null,r.a.createElement("a",null,r.a.createElement(o.b,{to:"/upcoming"},"Up Coming"))),r.a.createElement("li",null,r.a.createElement("a",null,r.a.createElement(o.b,{to:"/toprateds"},"Top Rated"))),r.a.createElement("li",null,r.a.createElement("a",null,r.a.createElement(o.b,{to:"/search"},"Search")))),r.a.createElement("ul",{className:"navbar__icons"+(this.state.open?"show":"hidden")},r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.cgv.co.kr",target:"_blank"},r.a.createElement("img",{src:w.a}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.lottecinema.co.kr",target:"_blank"},r.a.createElement("img",{src:x.a}))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.megabox.co.kr",target:"_blank"},r.a.createElement("img",{src:D.a})))),r.a.createElement("section",{className:"navbar__toogleBtn"},r.a.createElement(L.a,{isOpen:this.state.open,menuClicked:this.handleClick.bind(this),width:18,height:15,color:"white",position:"absolute"})))))}}]),a}(r.a.Component);a(85);var M=function(e){e.key;var t=e.title,a=e.original_title,n=e.genres,c=e.poster_path,l=e.release_date,o=e.runtime,i=e.vote_average,s=e.vote_count,m=e.production_companies,u=e.production_countries,p=e.overview,v=e.homepage,g=e.backdrop_path;return r.a.createElement("div",{className:"movieDetail",style:{backgroundImage:"url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces".concat(g,")")}},r.a.createElement("div",{className:"bg_filter"},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500"+c,alt:a,title:a,className:"poster"}),r.a.createElement("div",{className:"movieDetail__data"},r.a.createElement("div",{className:"movieDetail__title"},r.a.createElement("a",{href:v},r.a.createElement("h1",null,t)),r.a.createElement("h4",null,a)),r.a.createElement("ul",{className:"movieDetail__genres"},n.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres__genre"},e.name)}))),r.a.createElement("div",{className:"movieDetail__details"},r.a.createElement("h5",{className:"movieDetail__prdtYear"},"\uac1c\ubd09\uc77c\uc790 : ",l),r.a.createElement("h5",null,"\uc0c1\uc601\uc2dc\uac04 : ",o,"\ubd84"),r.a.createElement("h5",null,"\uad00\uac1d\ud3c9\uc810 : ",r.a.createElement(d.a,{className:"star",icon:_.a}),i," ("," ",r.a.createElement(d.a,{className:"people",icon:_.b})," "+s," )"),r.a.createElement("ul",{className:"movieDetail__nation"},u.map((function(e,t){return r.a.createElement("li",{key:t,className:"countries__country"},r.a.createElement("h5",null,"United States of America"===(a=e.name)?"\ubbf8\uad6d":"China"===a?"\uc911\uad6d":"Bulgaria"===a?"\ubd88\uac00\ub9ac\uc544":"Estonia"===a?"\uc5d0\uc2a4\ud1a0\ub2c8\uc544":"United Kingdom"===a?"\uc601\uad6d":"Japan"===a?"\uc77c\ubcf8":"Belgium"===a?"\ubca8\uae30\uc5d0":"France"===a?"\ud504\ub791\uc2a4":"South Korea"===a?"\ud55c\uad6d":"Colombia"===a?"\ucf5c\ub86c\ube44\uc544":"Netherlands"===a?"\ub124\ub35c\ub780\ub4dc":"Germany"===a?"\ub3c5\uc77c":a));var a})))),r.a.createElement("div",{className:"movieDetail__summary"},r.a.createElement("p",null,p)),r.a.createElement("div",{className:"movieDetail__production"},r.a.createElement("h4",null,"\uc81c\uc791\uc0ac"),r.a.createElement("ul",{className:"movieDetail__companies"},m.map((function(e,t){return r.a.createElement("li",{key:t,className:"companies__company"},function(e){if(null!=e.logo_path)return r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500"+e.logo_path,alt:e.name,title:e.name})}(e))})))))))};var B=function(e){Object(O.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(N.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={details:{},isLoading:!0},e.getMovieDetails=Object(p.a)(u.a.mark((function t(){var a,n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.props.location,t.next=3,E.a.get("https://api.themoviedb.org/3/movie/"+a.state.movie_id+"?api_key=cfaaa8c5177462f54ee54a30c746dca3&language=ko-KR");case 3:n=t.sent,r=n.data,e.setState({details:r,isLoading:!1});case 6:case"end":return t.stop()}}),t)}))),e}return Object(y.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state?a.push("/"):this.getMovieDetails()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.details;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"details"},r.a.createElement(M,{key:a.id,title:a.title,original_title:a.original_title,release_date:a.release_date,poster_path:a.poster_path,runtime:a.runtime,genres:a.genres,production_countries:a.production_countries,vote_average:a.vote_average,vote_count:a.vote_count,production_companies:a.production_companies,overview:a.overview,homepage:a.homepage,backdrop_path:a.backdrop_path})))}}]),a}(r.a.Component),P=(a(86),function(){var e=Object(n.useState)(1),t=Object(v.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(20),o=Object(v.a)(l,2),i=o[0],s=o[1],m=Object(n.useState)([]),d=Object(v.a)(m,2),_=d[0],h=d[1],b=Object(n.useState)(!0),N=Object(v.a)(b,2),y=N[0],O=N[1];Object(n.useEffect)((function(){j()}),[a]);var j=function(){var e=Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://api.themoviedb.org/3/movie/upcoming?api_key=cfaaa8c5177462f54ee54a30c746dca3&language=ko-KR&page=".concat(a,"&region=KR"));case 2:t=e.sent,h(t.data.results),O(!1),s(t.data.total_results),console.log(t.data.total_pages);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("body",{className:"container"},r.a.createElement("div",null,r.a.createElement(f.a,{className:"pagination",total:i,current:a,showPrevNextJumpers:!0,style:{marginTop:"2%"},pageSize:20,onChange:function(e){return c(e)}})),y?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},_.map((function(e){return r.a.createElement(g,{movie_id:e.id,title_original:e.original_title,summary:e.overview,poster_path:e.poster_path,title_kr:e.title,vote_average:e.vote_average,vote_count:e.vote_count,genre_ids:e.genre_ids,release_date:e.release_date})}))))}),T=function(){var e=Object(n.useState)(1),t=Object(v.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(20),o=Object(v.a)(l,2),i=o[0],s=o[1],m=Object(n.useState)([]),d=Object(v.a)(m,2),_=d[0],h=d[1],b=Object(n.useState)(!0),N=Object(v.a)(b,2),y=N[0],O=N[1];Object(n.useEffect)((function(){j()}),[a]);var j=function(){var e=Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://api.themoviedb.org/3/movie/top_rated?api_key=cfaaa8c5177462f54ee54a30c746dca3&language=ko-KR&page=".concat(a,"&region=KR"));case 2:t=e.sent,h(t.data.results),O(!1),s(t.data.total_results),console.log(t.data.total_pages);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("body",{className:"container"},r.a.createElement("div",null,r.a.createElement(f.a,{className:"pagination",total:i,current:a,showPrevNextJumpers:!0,style:{marginTop:"2%"},pageSize:20,onChange:function(e){return c(e)}})),y?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},_.map((function(e){return r.a.createElement(g,{movie_id:e.id,title_original:e.original_title,summary:e.overview,poster_path:e.poster_path,title_kr:e.title,vote_average:e.vote_average,vote_count:e.vote_count,genre_ids:e.genre_ids,release_date:e.release_date})}))))},z=function(e){Object(O.a)(a,e);var t=Object(j.a)(a);function a(){var e;Object(N.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.onSearchSubmit=function(){var t=Object(p.a)(u.a.mark((function t(a){var n,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,E.a.get("\n        https://api.themoviedb.org/3/search/movie?api_key=cfaaa8c5177462f54ee54a30c746dca3&language=ko-KR&page=1&include_adult=false",{params:{query:a}});case 2:n=t.sent,r=n.data.results,e.setState({movies:r,isLoading:!1});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(y.a)(a,[{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("body",{className:"container"},r.a.createElement(R,{onSubmit:this.onSearchSubmit}),t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"\uac80\uc0c9\uc5b4\ub97c \uc785\ub825\ud558\uc138\uc694")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(g,{movie_id:e.id,title_original:e.original_title,summary:e.overview,poster_path:e.poster_path,title_kr:e.title,vote_average:e.vote_average,vote_count:e.vote_count,genre_ids:e.genre_ids,release_date:e.release_date})}))))}}]),a}(r.a.Component);var F=function(){return r.a.createElement(o.a,null,r.a.createElement(J,null),r.a.createElement(i.a,{path:"/",exact:!0,component:b}),r.a.createElement(i.a,{path:"/upcoming",component:P}),r.a.createElement(i.a,{path:"/toprateds",component:T}),r.a.createElement(i.a,{path:"/search",component:z}),r.a.createElement(i.a,{path:"/about",component:s}),r.a.createElement(i.a,{path:"/movie/:id",component:B}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(F,null)),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.2210e4db.chunk.js.map