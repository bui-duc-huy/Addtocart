(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(29)},23:function(e,t,a){},24:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),l=a.n(c),s=(a(23),a(1)),o=a(2),i=a(4),u=a(3),m=a(5),p=(a(24),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).saveData=function(e){a.setState({value:e.target.value})},a.searchProduct=function(e){a.props.searchProduct(a.state.value)},a.state={value:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("nav",{className:"navbar navbar-default navbar-fixed-top",role:"navigation"},r.a.createElement("div",{className:"navbar-header"},r.a.createElement("button",{type:"button",className:"navbar-toggle","data-toggle":"collapse","data-target":".navbar-ex1-collapse"},r.a.createElement("span",{className:"sr-only"},"Toggle navigation"),r.a.createElement("span",{className:"icon-bar"}),r.a.createElement("span",{className:"icon-bar"}),r.a.createElement("span",{className:"icon-bar"})),r.a.createElement("a",{className:"navbar-brand"},"Shopping cart")),r.a.createElement("div",{className:"collapse navbar-collapse navbar-ex1-collapse"},r.a.createElement("ul",{className:"nav navbar-nav"},r.a.createElement("li",{className:"active"},r.a.createElement("a",null,"Home"))),r.a.createElement("ul",{className:"nav navbar-nav navbar-right"},r.a.createElement("form",{className:"navbar-form navbar-left",role:"search"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search",onChange:this.saveData})),r.a.createElement("button",{type:"button",className:"btn btn-default",onClick:function(){return e.searchProduct()}},"Search")),r.a.createElement("li",null,r.a.createElement("a",null,"login")),r.a.createElement("li",{className:"dropdown"},r.a.createElement("a",{className:"dropdown-toggle","data-toggle":"dropdown"},"Connect with us",r.a.createElement("b",{className:"caret"})),r.a.createElement("ul",{className:"dropdown-menu"},r.a.createElement("li",null,r.a.createElement("a",null,"Facebook")),r.a.createElement("li",null,r.a.createElement("a",null,"Instagram")),r.a.createElement("li",null,r.a.createElement("a",null,"Google+")),r.a.createElement("li",null,r.a.createElement("a",null,"Github")))))))}}]),t}(n.Component)),d=a(10),h=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container"},r.a.createElement("section",null,r.a.createElement("h1",{className:"center"},"Shopping"),r.a.createElement("div",{className:"row"},this.props.children)))}}]),t}(n.Component),E=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).addToCart=function(){a.props.addToCart(a.props.infoProduct)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props.infoProduct;return r.a.createElement("div",{className:"col-md-3 col-sm-6"},r.a.createElement("div",{className:"product-grid2"},r.a.createElement("div",{className:"product-image2"},r.a.createElement("a",null,r.a.createElement("img",{className:"pic-1",src:e.image})),r.a.createElement("ul",{className:"social"},r.a.createElement("li",null,r.a.createElement("a",{"data-tip":e.rating+" star"},r.a.createElement("i",{className:"fa fa-star"})))),r.a.createElement("a",{className:"add-to-cart",onClick:this.addToCart},"Add to cart")),r.a.createElement("div",{className:"product-content"},r.a.createElement("h3",{className:"title"},r.a.createElement("a",null,e.name)),r.a.createElement("h6",{className:"description"},"availble ",e.inventory),r.a.createElement("span",{className:"price"},e.price," VND"))))}}]),t}(n.Component),v=function(e){return{type:"SHOW_MESSAGE",message:e}},b="Add to cart success",f="Update cart success",g="Delete item success",N="Cart empty",O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).showProductItem=function(e){var t=a.state.valueSearch;e=e.filter(function(e){return-1!==e.name.toLowerCase().indexOf(t)});var n=r.a.createElement("h1",null,"Everything is sold out");return e.length>0&&(n=e.map(function(e,t){return r.a.createElement(E,{addToCart:a.addToCart,key:t,infoProduct:e})})),n},a.searchProduct=function(e){a.setState({valueSearch:e})},a.addToCart=function(e){a.props.addToCart(e),a.props.showMessage(b)},a.state={valueSearch:""},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p,{searchProduct:this.searchProduct}),r.a.createElement("hr",null),r.a.createElement("hr",null),r.a.createElement(h,null,this.showProductItem(this.props.products)))}}]),t}(n.Component),j=Object(d.b)(function(e){return{products:e.products}},function(e,t){return{addToCart:function(t){e(function(e,t){return{type:"ADD_TO_CART",product:e,quantity:t}}(t))},showMessage:function(t){e(v(t))}}})(O),y=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container cart"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-8"},r.a.createElement("div",{className:"panel panel-info"},r.a.createElement("div",{className:"panel-heading"},r.a.createElement("div",{className:"panel-title"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-6"},r.a.createElement("h5",null,r.a.createElement("span",{className:"glyphicon glyphicon-shopping-cart"})," Shopping Cart"))))),r.a.createElement("div",{className:"panel-body"},this.props.children,this.props.showMessage),this.props.showCartResult))))}}]),t}(n.Component),C=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).changeCart=function(e){a.props.changeCart(a.props.infoCart,e.target.value)},a.deleteItem=function(e){a.props.deleteItem(e)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props.infoCart;return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-xs-2"},r.a.createElement("img",{className:"img-responsive",src:t.product.image})),r.a.createElement("div",{className:"col-xs-4"},r.a.createElement("h4",{className:"product-name"},r.a.createElement("strong",null,t.product.name)),r.a.createElement("h4",null,r.a.createElement("small",null,t.product.description))),r.a.createElement("div",{className:"col-xs-6"},r.a.createElement("div",{className:"col-xs-6 text-right"},r.a.createElement("h6",null,r.a.createElement("strong",null,t.product.price," VND",r.a.createElement("span",{className:"text-muted"}," x")))),r.a.createElement("div",{className:"col-xs-4"},r.a.createElement("input",{type:"text",className:"form-control input-sm",value:t.quantity,onChange:this.changeCart})),r.a.createElement("div",{className:"col-xs-2"},r.a.createElement("button",{type:"button",className:"btn btn-link btn-xs",onClick:function(){return e.deleteItem(t.product)}},r.a.createElement("span",{className:"glyphicon glyphicon-trash"})))))}}]),t}(n.Component),w=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"panel-footer"},r.a.createElement("div",{className:"row text-center"},r.a.createElement("div",{className:"col-xs-9"},r.a.createElement("h4",{className:"text-right"},"Total ",r.a.createElement("strong",null,this.props.total," VND"))),r.a.createElement("div",{className:"col-xs-3"},r.a.createElement("button",{type:"button",className:"btn btn-success btn-block"},"Checkout"))))}}]),t}(n.Component),T=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"text-center"},r.a.createElement("div",{className:"col-xs-9"},r.a.createElement("div",{className:"alert alert-success"},r.a.createElement("button",{type:"button",className:"close","data-dismiss":"alert","aria-hidden":"true"},"\xd7"),this.props.message))))}}]),t}(n.Component),x=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(c)))).showCartItem=function(e){var t=N;return e.length>0&&(t=e.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(C,{deleteItem:a.deleteItem,infoCart:e,changeCart:a.changeCart})," ",r.a.createElement("hr",null))})),t},a.findTotal=function(e){for(var t=0,a=0;a<e.length;a++)t+=e[a].product.price*e[a].quantity;return t},a.showCartResult=function(e){return r.a.createElement(w,{total:e})},a.deleteItem=function(e){a.props.deleteItem(e),a.props.showMessage(g)},a.changeCart=function(e,t){a.props.showMessage(f),a.props.changeCart(e,t)},a.showMessage=function(e){return r.a.createElement(T,{message:e})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.findTotal(this.props.cart);return r.a.createElement(y,{showCartResult:this.showCartResult(e),showMessage:this.showMessage(this.props.message)},this.showCartItem(this.props.cart))}}]),t}(n.Component),S=Object(d.b)(function(e){return{cart:e.cart,message:e.message}},function(e,t){return{deleteItem:function(t){e(function(e){return{type:"DELETE_ITEM",cart:e}}(t))},showMessage:function(t){e(v(t))},changeCart:function(t,a){e(function(e,t){return{type:"CHANGE_CART",cart:e,value:t}}(t,a))}}})(x),k=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"panel panel-default center"},r.a.createElement("div",{className:"panel-body"},"Create by B\xf9i \u0110\u1ee9c Huy"),r.a.createElement("div",{className:"panel-footer"},"Boostrap - Reactjs - Redux"))}}]),t}(n.Component),I=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(j,null),r.a.createElement(S,null),r.a.createElement(k,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=a(9),A=[{id:1,name:"Tee",description:"availble in store",price:3e5,inventory:300,rating:4,image:"http://bestjquery.com/tutorial/product-grid/demo3/images/img-1.jpeg"},{id:2,name:"Kaki",description:"availble in store",price:5e5,inventory:1e3,rating:5,image:"http://bestjquery.com/tutorial/product-grid/demo3/images/img-1.jpeg"},{id:3,name:"Jacket",description:"availble in store",price:55e4,inventory:100,rating:4,image:"http://bestjquery.com/tutorial/product-grid/demo3/images/img-1.jpeg"}],D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A;return(arguments.length>1?arguments[1]:void 0).type,e},R=a(7),M=JSON.parse(localStorage.getItem("CART")),q=[];M&&(q=M);var P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_CART":for(var a=!1,n=0;n<e.length;n++)if(t.product.id===e[n].product.id){a=!0;break}if(a){var r=e.map(function(e){return e.product.id}).indexOf(t.product.id);e[r].quantity=parseInt(e[r].quantity)+1}else{var c={product:t.product,quantity:1};e.push(c)}return localStorage.setItem("CART",JSON.stringify(e)),Object(R.a)(e);case"DELETE_ITEM":return r=e.map(function(e){return e.product.id}).indexOf(t.cart.id),e.splice(r,1),localStorage.setItem("CART",JSON.stringify(e)),Object(R.a)(e);case"CHANGE_CART":return r=e.map(function(e){return e.product.id}).indexOf(t.cart.product.id),e[r].quantity=t.value,localStorage.setItem("CART",JSON.stringify(e)),Object(R.a)(e);default:for(var l=0;l<e.length;l++)e[l].quantity=parseInt(e[l].quantity);return Object(R.a)(e)}},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Welcome",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_MESSAGE":return e=t.message,Object(R.a)(e);default:return e}},G=Object(_.b)({products:D,cart:P,message:J}),H=Object(_.c)(G,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());l.a.render(r.a.createElement(d.a,{store:H},r.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.0d8726c7.chunk.js.map