(this.webpackJsonpmoviesearch=this.webpackJsonpmoviesearch||[]).push([[7],{157:function(e,t,n){"use strict";n.r(t);var i,a=n(2),o=n(0),r=n(3),c=n(150),u=n(152),s=n(29),p=n(14),l=n(12),h=n(142),d=Object(h.a)({input:{background:"linear-gradient(45deg, rgb(255, 142, 83) 10%, rgb(0,0,0) 90%)",width:"80%",margin:"0 auto",textAlign:"center",alignSelf:"center",position:"absolute",top:"70%",left:"10%"}}),g=l.default.header(i||(i=Object(p.a)(["\nwidth: 100%;\nheight: 500px;\ntext-align:center;\nbackground-repeat: no-repeat;\nbackground-size: cover;\nbackground-position-x: center;\nposition: relative;\ncolor: white;\nmargin-top: 15px;\nfont-size: 1.2rem;\n#search-photo, #search-photo-label, #search-photo-popup, .MuiSvgIcon-root{\n    color: white;\n};\n@media(min-width: 760px) {\n    font-size: 1.5rem;\n};\n@media(min-width: 1150px) {\n    height: 700px\n};\n@media(min-width: 1800px) {\n    height: 900px\n};\n"]))),b=n(1);t.default=function(){var e=Object(r.f)(),t=Object(o.useContext)(s.a),n=d();Object(o.useEffect)((function(){""===t.value?t.getPopularMovies():""!==t.value&&(t.resetMovies(),t.searchMovies(t.value,1))}),[t.value]);var i=function(n){e.push("/"),t.setText(n.target.value)};return Object(b.jsxs)(g,{style:{backgroundImage:"url(https://image.tmdb.org/t/p/w1280".concat(null===t||void 0===t?void 0:t.popularMovie,")")},children:[Object(b.jsx)("h1",{children:"Search movies"}),Object(b.jsx)(u.a,{id:"search-photo",options:t.movies.map((function(e){return e.title})),getOptionSelected:function(e){return e},value:t.value,onInputChange:function(e,n){return t.setText(n)},renderInput:function(e){return Object(b.jsx)(c.a,Object(a.a)(Object(a.a)({className:n.input,onChange:i,id:"filled-basic"},e),{},{label:"Search",variant:"filled"}))}})]})}}}]);
//# sourceMappingURL=7.1b0bf4cc.chunk.js.map