(this.webpackJsonpmoviesearch=this.webpackJsonpmoviesearch||[]).push([[10],{153:function(n,i,e){"use strict";e.r(i);var t,o,a,d=e(0),r=e(3),s=e(14),l=e(12),m=l.default.div(t||(t=Object(s.a)(["\n                position: fixed;\n                top: 50%;\n                left: 50%;\n                transform: translate(-50%, -50%);\n                width: 80%;\n                height: 90%;\n                color: white;\n                & > div {\n                    position: absolute;\n                    background-color: rgba(0,0,0, 0.8);\n                    top: 50%;\n                    left: 50%;\n                    transform: translate(-50%, -50%);\n                    width: 100%;\n                    height: 100%;\n                    text-align: center;\n                    padding: 15px;\n                    border: 2px solid #444;\n  @media (min-width: 230px) and (max-height: 320px){\n                      font-size: 0.5rem;\n                    }\n    \n  }\n  @media (min-width: 600px) and (orientation: portrait) {\n    font-size: 1.5rem;\n    \n  }\n  @media (min-width: 600px) and (orientation: landscape) {\n    font-size: 1.0rem;\n    \n  }\n  @media (min-width: 768px) and (orientation: portrait) {\n    font-size: 1.5rem;\n  }\n  @media (min-width: 768px) and (orientation: landscape){\n    font-size: 1.3rem;\n  }\n  @media (min-width: 1024px) {\n    font-size: 1.8rem;\n  }\n                \n"]))),c=l.default.div(o||(o=Object(s.a)(["\n  height: 50%;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  &>h1,p{\n    margin-top: 0;\n  }\n  &>h4{\n    margin-bottom: 0;\n  }\n  & > img {\n    height: 100%;\n     width: auto;\n  };\n  @media (min-width: 320px) and ( orientation: portrait) {\n    &>h1,p{\n    margin-bottom: 0;\n  }\n  }\n  @media (min-width: 530px) and ( orientation: landscape) {\n    &>h1,p{\n    margin-bottom: 0;\n  }\n  }\n  \n"]))),h=l.default.h3(a||(a=Object(s.a)(["\nmargin: 1px;\n& > i {\n    color: red;\n font-size: 2rem;\n @media(min-width: 600px ) {\n  /* font-size: 2.6rem; */\n  font-size: 1.2rem;\n\n }\n /* @media(min-width: 800px ) {\n  font-size: 3.5rem;\n } */\n @media(min-width: 1100px) {\n  font-size: 1.5rem;\n\n }\n @media(min-width: 1500px) {\n  font-size: 1.7rem;\n\n }\n}\n\n"]))),p=e(29),u=e(30),f=e(1),v=Object(d.lazy)((function(){return Promise.resolve().then(e.bind(null,40))}));i.default=function(){var n,i,e,t,o=Object(d.useContext)(p.a),a=Object(d.useContext)(u.a),s=Object(r.f)();return Object(f.jsx)(m,{children:o.loading?Object(f.jsx)("div",{children:Object(f.jsx)(v,{})}):Object(f.jsxs)(c,{children:[Object(f.jsxs)("h1",{children:['Original title: "',null===o||void 0===o||null===(n=o.movie)||void 0===n?void 0:n.original_title,'" ']}),Object(f.jsxs)("h4",{children:["Description: ",Object(f.jsx)("p",{children:null===o||void 0===o||null===(i=o.movie)||void 0===i?void 0:i.overview})]}),Object(f.jsxs)("p",{children:["Release date: ",null===o||void 0===o||null===(e=o.movie)||void 0===e?void 0:e.release_date]}),Object(f.jsxs)("p",{children:["Spoken languages: ",null===o||void 0===o||null===(t=o.movie)||void 0===t?void 0:t.spoken_languages.map((function(n){return null===n||void 0===n?void 0:n.english_name}))]}),Object(f.jsxs)(h,{children:["Add to favorite movies  ",Object(f.jsx)("i",{style:{cursor:"pointer"},onClick:function(){a.addFavoriteMovie(o.movie)},className:"fas fa-star"})]}),Object(f.jsx)("button",{type:"button",onClick:function(n){n.stopPropagation(),s.goBack()},children:"Close "})]})})}}}]);
//# sourceMappingURL=10.0361c7ea.chunk.js.map