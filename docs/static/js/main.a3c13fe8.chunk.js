(this.webpackJsonpmovie=this.webpackJsonpmovie||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(7),r=a.n(s),i=(a(13),a(0));function o(){return Object(i.jsx)("nav",{className:"blue lighten-1",children:Object(i.jsxs)("div",{className:"nav-wrapper",children:[Object(i.jsx)("a",{href:"#",className:"brand-logo",children:"React Movies"}),Object(i.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"!#",children:"Repo"})})})]})})}function l(){return Object(i.jsx)("footer",{className:"page-footer blue lighten-3",children:Object(i.jsx)("div",{className:"footer-copyright",children:Object(i.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(i.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"Repo"})]})})})}var h=a(2),j=a(3),d=a(5),b=a(4),p=a(8);function u(e){var t=e.Title,a=e.Year,c=e.imdbID,n=e.Type,s=e.Poster;return Object(i.jsxs)("div",{id:c,className:"card movie",children:[Object(i.jsx)("div",{className:"card-image waves-effect waves-block waves-light",children:"N/A"===s?Object(i.jsx)("img",{className:"activator",src:"https://via.placeholder.com/300x427?text=".concat(t)}):Object(i.jsx)("img",{className:"activator",src:s})}),Object(i.jsxs)("div",{className:"card-content",children:[Object(i.jsx)("span",{className:"card-title activator grey-text text-darken-4",children:t}),Object(i.jsxs)("p",{children:[a," ",Object(i.jsx)("span",{className:"right",children:n})]})]})]})}function v(e){var t=e.movies,a=void 0===t?[]:t;return Object(i.jsx)("div",{className:"movies",children:a.length?a.map((function(e){return Object(i.jsx)(u,Object(p.a)({},e),e.imdbID)})):Object(i.jsx)("h4",{children:"Nothing found"})})}function m(){return Object(i.jsx)("div",{className:"progress",children:Object(i.jsx)("div",{className:"indeterminate"})})}var O=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(h.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={search:"",type:"all"},e.handleFilter=function(t){e.setState((function(){return{type:t.target.dataset.type}}),(function(){return e.props.searchMovies(e.state.search,e.state.type)})),e.props.searchMovies(e.state.search)},e.handleKey=function(t){"Enter"===t.key&&e.props.searchMovies(e.state.search,e.state.type)},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this;return Object(i.jsx)("div",{className:"row",children:Object(i.jsx)("div",{className:"col s12",children:Object(i.jsxs)("div",{className:"input-field",children:[Object(i.jsx)("input",{placeholder:"Search movie",type:"email",className:"validate",value:this.state.search,onChange:function(t){return e.setState({search:t.target.value})},onKeyDown:this.handleKey}),Object(i.jsx)("button",{className:"btn search-btn",onClick:function(){return e.props.searchMovies(e.state.search,e.state.type)},children:"Search"}),Object(i.jsxs)("div",{children:[Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"all",onChange:this.handleFilter,checked:"all"===this.state.type}),Object(i.jsx)("span",{children:"All"})]}),Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"series",onChange:this.handleFilter,checked:"series"===this.state.type}),Object(i.jsx)("span",{children:"Series only"})]}),Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{className:"with-gap",name:"type",type:"radio","data-type":"movie",onChange:this.handleFilter,checked:"movie"===this.state.type}),Object(i.jsx)("span",{children:"Movies only"})]})]})]})})})}}]),a}(n.a.Component),x="4aa420ec",f=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(h.a)(this,a);for(var c=arguments.length,n=new Array(c),s=0;s<c;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={movies:[],loading:!0},e.searchFunction=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"all";e.setState({loading:!0}),fetch("https://www.omdbapi.com/?apikey=".concat(x,"&s=").concat(t).concat("all"!==a?"&type=".concat(a):"")).then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.Search,loading:!1})}))},e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.omdbapi.com/?apikey=".concat(x,"&s=matrix")).then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.Search,loading:!1})})).catch((function(t){console.error(t),e.setState({loading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.movies,a=e.loading;return Object(i.jsxs)("main",{className:"container content",children:[Object(i.jsx)(O,{searchMovies:this.searchFunction}),a?Object(i.jsx)(m,{}):Object(i.jsx)(v,{movies:t})]})}}]),a}(n.a.Component);var y=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(o,{}),Object(i.jsx)(f,{}),Object(i.jsx)(l,{})]})};r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(y,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.a3c13fe8.chunk.js.map