(this["webpackJsonpimage-finder"]=this["webpackJsonpimage-finder"]||[]).push([[0],{12:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__3QFFf",searchForm:"Searchbar_searchForm__1JDha",button:"Searchbar_button__fHscj",input:"Searchbar_input__1iePi"}},13:function(e,t,a){e.exports={gallery:"ImageGallery_gallery__1-WDE",message:"ImageGallery_message__3biEr",blink:"ImageGallery_blink__gt4wP"}},16:function(e,t,a){e.exports={item:"ImageGalleryItem_item__1Oih8",image:"ImageGalleryItem_image__1LvuJ"}},17:function(e,t,a){e.exports={container:"Button_container__uSljR",button:"Button_button__3Ka5p",puls:"Button_puls__160EW"}},18:function(e,t,a){e.exports={overlay:"Modal_overlay__1J5nz",modal:"Modal_modal__3SYLe"}},23:function(e,t,a){e.exports={spinner:"Loader_spinner__muOZo"}},29:function(e,t,a){},31:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(10),o=a.n(s),c=(a(29),a(11)),i=a.n(c),l=a(19),u=a(14),h=a(3),d=a(4),p=a(6),m=a(5),j=(a(31),a(9)),b=(a(32),a(12)),g=a.n(b),f=a(20),O=a.n(f),y=a(1),v=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.submitHandler=function(t){t.preventDefault(),""===e.state.query.trim()?j.c.info("Please enter at least a couple of letters:)",{theme:"colored",position:"bottom-center",autoClose:5e3,transition:j.a,toastId:1}):e.props.onQueryUpdate(e.state.query),e.setState({query:""})},e.inputHandler=function(t){e.setState({query:t.target.value.toLowerCase()})},e}return Object(d.a)(a,[{key:"render",value:function(){return Object(y.jsx)("header",{className:g.a.searchbar,children:Object(y.jsxs)("form",{className:g.a.searchForm,onSubmit:this.submitHandler,children:[Object(y.jsx)("button",{type:"submit",className:g.a.button,children:Object(y.jsx)(O.a,{style:{fontSize:36,color:"#3f51b5"}})}),Object(y.jsx)("input",{onChange:this.inputHandler,value:this.state.query,className:g.a.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),x=a(13),_=a.n(x),S=a(22),k=a.n(S),w=a(23),C=a.n(w),I=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return Object(y.jsx)(y.Fragment,{children:Object(y.jsx)("div",{className:C.a.spinner,children:Object(y.jsx)(k.a,{type:"Grid",color:"#3f51b5",height:100,width:100,timeout:1e3})})})}}]),a}(n.Component),U=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"componentDidUpdate",value:function(){"rejected"===this.props.status&&(j.c.error("No (more) image found for ".concat(this.props.query),{theme:"colored",position:"bottom-center",autoClose:5e3,transition:j.a,toastId:2}),this.props.changeStatus())}},{key:"render",value:function(){var e=this.props,t=e.status,a=e.children;return Object(y.jsxs)("ul",{className:_.a.gallery,children:["idle"===t&&Object(y.jsx)("li",{className:_.a.message,children:"PLease, start image search! "}),"pending"===t&&Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("li",{className:_.a.message,children:"loading..., please wait"})," ",Object(y.jsx)(I,{})]}),"rejected"===t&&Object(y.jsx)("li",{className:_.a.message,children:"PLease, start image search! "}),a]})}}]),a}(n.Component),N=a(16),q=a.n(N),M=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).onOpenModal=function(t){e.props.handlerToggleModal(),e.props.handlerBigImageUrl(t)},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this,t=this.props.images;return Object(y.jsx)(y.Fragment,{children:t.map((function(t,a){var n=t.id,r=t.webformatURL,s=t.largeImageURL,o=t.tags;return Object(y.jsx)("li",{id:n,className:q.a.item,onClick:e.onOpenModal,children:Object(y.jsx)("img",{src:r,"data-src":s,alt:o,className:q.a.image})},a)}))})}}]),a}(n.Component),F=a(17),L=a.n(F),B=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.status,a=e.handlerPageIncrement;return Object(y.jsx)(y.Fragment,{children:"resolved"===t&&Object(y.jsx)("div",{className:L.a.container,children:Object(y.jsx)("button",{onClick:a,className:L.a.button,children:"Load more"})})})}}]),a}(n.Component),D=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={error:null,errorInfo:null},e}return Object(d.a)(a,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,errorInfo:t})}},{key:"render",value:function(){return this.state.errorInfo?Object(y.jsxs)("div",{children:[Object(y.jsx)("h2",{children:"\u0423\u043f\u0441..! \u0421\u043a\u043e\u0440\u0435\u0435 \u0432\u0441\u0435\u0433\u043e \u0441\u0435\u0440\u0432\u0435\u0440 \u0432\u0435\u0440\u043d\u0443\u043b \u043a\u0440\u0438\u0432\u043e\u0439 JSON \u0438\u043b\u0438 \u043c\u0430\u0441\u0441\u0438\u0432 \u0438 \u044f \u043d\u0435 \u043c\u043e\u0433\u0443 \u0435\u0433\u043e \u043e\u0442\u0440\u0435\u043d\u0434\u0435\u0440\u0438\u0442\u044c. \u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441."}),Object(y.jsxs)("details",{style:{whiteSpace:"pre-wrap"},children:[this.state.error&&this.state.error.toString(),Object(y.jsx)("br",{}),this.state.errorInfo.componentStack]})]}):this.props.children}}]),a}(n.Component),P=a(18),E=a.n(P),T=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={modalState:!1},e.handlerKeyDownClose=function(t){"Escape"===t.code&&e.props.onClickCloseModal()},e.handlerClickBackdropClose=function(t){t.currentTarget===t.target&&e.props.onClickCloseModal()},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handlerKeyDownClose)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handlerKeyDownClose)}},{key:"render",value:function(){return Object(y.jsx)(y.Fragment,{children:this.props.modalState&&Object(y.jsx)("div",{className:E.a.overlay,onClick:this.handlerClickBackdropClose,children:Object(y.jsx)("div",{className:E.a.modal,children:Object(y.jsx)("img",{src:this.props.hdImgUrl,alt:"target big"})})})})}}]),a}(n.Component),G=function(){var e=Object(u.a)(i.a.mark((function e(t,a){var n,r,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pixabay.com/api/?q=".concat(t,"&page=").concat(a,"&key=22469434-62330606312f34e078b383df4&image_type=photo&orientation=horizontal&per_page=12"));case 2:return n=e.sent,e.next=5,n.json();case 5:return r=e.sent,s=r.hits,e.abrupt("return",s);case 8:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),H=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={query:"",images:[],page:1,status:"idle",modalState:!1,hdImgUrl:""},e.changeStatus=function(){e.setState({status:"idle"})},e.handlerQueryUpdate=function(t){e.setState((function(e){return e.query!==t&&{query:t,page:1,status:"pending"}}))},e.handlerPageIncrement=function(){e.setState((function(e){return{page:e.page+1,status:"pending"}}))},e.handlerToggleModal=function(){e.setState((function(e){return{modalState:!e.modalState}}))},e.handlerBigImageUrl=function(t){e.setState({hdImgUrl:t.target.dataset.src})},e}return Object(d.a)(a,[{key:"componentDidUpdate",value:function(){var e=Object(u.a)(i.a.mark((function e(t,a){var n,r,s,o,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.state,r=n.query,s=n.page,e.prev=1,r===a.query){e.next=9;break}return e.next=5,G(r,s);case 5:o=e.sent,this.setState({images:o}),o.length>=12?this.setState({status:"resolved"}):this.setState({status:"rejected"}),window.scrollTo({top:0,behavior:"smooth"});case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),this.setState({status:"rejected"});case 14:if(e.prev=14,s===a.page){e.next=24;break}if(1===s){e.next=24;break}return e.next=19,G(r,s);case 19:c=e.sent,this.setState({images:[].concat(Object(l.a)(a.images),Object(l.a)(c))}),c.length>=12?this.setState({status:"resolved"}):this.setState({status:"rejected"}),console.log(c.length),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"});case 24:e.next=29;break;case 26:e.prev=26,e.t1=e.catch(14),this.setState({status:"rejected"});case 29:case"end":return e.stop()}}),e,this,[[1,11],[14,26]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.status,a=e.query,n=e.images,r=e.hdImgUrl,s=e.modalState;return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(v,{onQueryUpdate:this.handlerQueryUpdate}),Object(y.jsx)(D,{children:Object(y.jsx)(U,{status:t,query:a,changeStatus:this.changeStatus,children:Object(y.jsx)(M,{status:t,query:a,images:n,handlerToggleModal:this.handlerToggleModal,handlerBigImageUrl:this.handlerBigImageUrl})})}),Object(y.jsx)(B,{status:t,handlerPageIncrement:this.handlerPageIncrement}),Object(y.jsx)(T,{onClickCloseModal:this.handlerToggleModal,modalState:s,hdImgUrl:r}),Object(y.jsx)(j.b,{style:{width:"inherit"}})]})}}]),a}(n.Component);o.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(H,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.33475296.chunk.js.map