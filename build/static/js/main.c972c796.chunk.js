(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__3MY83",summary:"CartItem_summary__xPm89",price:"CartItem_price__29Nnm",amount:"CartItem_amount__30Txm",actions:"CartItem_actions__2E3m3"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__vzHa0",total:"Cart_total__2eGro",actions:"Cart_actions__1WjU2","button--alt":"Cart_button--alt__2HE6d",button:"Cart_button__UFFpv"}},,function(e,t,n){e.exports={button:"HeaderCartButton_button__eQtbq",icon:"HeaderCartButton_icon__lWm7V",badge:"HeaderCartButton_badge__2hlQF",bump:"HeaderCartButton_bump__32TLn"}},,,function(e,t,n){e.exports={meal:"MealItem_meal__IMlXn",description:"MealItem_description__3Ff9C",price:"MealItem_price__2ct5w"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__2znzX",modal:"Modal_modal__2QgxK","slide-down":"Modal_slide-down__Y0TjC"}},function(e,t,n){e.exports={header:"Header_header__1cM8q","main-image":"Header_main-image__1RoZ3"}},,,,function(e,t,n){e.exports={card:"Card_card__2N-0v"}},function(e,t,n){e.exports={input:"Input_input__3Lg_X"}},function(e,t,n){e.exports={form:"MealItemForm_form__2GhM6"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__1PggW","meals-appear":"AvailableMeals_meals-appear__1hJEd"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__1BTNU"}},,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(15),c=n.n(a),i=(n(28),n(3)),r=n(1),o=n.n(r),s=n(12),l=n.n(s),m=n.p+"static/media/meals.2971f633.jpg",d=n(0),u=function(){return Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(d.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},j=o.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),b=n(7),x=n.n(b),O=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),a=n[0],c=n[1],o=Object(r.useContext)(j).items,s=o.reduce((function(e,t){return e+t.amount}),0),l="".concat(x.a.button," ").concat(a?x.a.bump:"");return Object(r.useEffect)((function(){if(0!==o.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[o]),Object(d.jsxs)("button",{className:l,onClick:e.onClick,children:[Object(d.jsx)("span",{className:x.a.icon,children:Object(d.jsx)(u,{})}),Object(d.jsx)("span",{children:"Your Cart"}),Object(d.jsx)("span",{className:x.a.badge,children:s})]})};var p=function(e){return Object(d.jsxs)(r.Fragment,{children:[Object(d.jsxs)("header",{className:l.a.header,children:[Object(d.jsx)("h1",{children:"ReactMeals"}),Object(d.jsx)(O,{onClick:e.onShowCart})]}),Object(d.jsx)("div",{className:l.a["main-image"],children:Object(d.jsx)("img",{src:m,alt:"Table full of food"})})]})},h=n(16),_=n.n(h);var f=function(e){return Object(d.jsx)("div",{className:_.a.card,children:e.children})},v=n(2),C=n(17),g=n.n(C),N=o.a.forwardRef((function(e,t){return Object(d.jsxs)("div",{className:g.a.input,children:[Object(d.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(d.jsx)("input",Object(v.a)({ref:t},e.input))]})})),A=n(18),y=n.n(A),I=function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),a=n[0],c=n[1],o=Object(r.useRef)();return Object(d.jsxs)("form",{className:y.a.form,onSubmit:function(t){t.preventDefault();var n=o.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(d.jsx)(N,{ref:o,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(d.jsx)("button",{children:"+ Add"}),!a&&Object(d.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},M=n(10),w=n.n(M),F=function(e){var t=Object(r.useContext)(j),n="$".concat(e.price.toFixed(2));return Object(d.jsxs)("li",{className:w.a.meal,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h3",{children:e.name}),Object(d.jsx)("div",{className:w.a.description,children:e.description}),Object(d.jsx)("div",{className:w.a.price,children:n})]}),Object(d.jsx)("div",{children:Object(d.jsx)(I,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price}),console.log(e.id,e.name,n,e.price)}})})]})},H=n(19),k=n.n(H),B=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}],T=function(){var e=B.map((function(e){return Object(d.jsx)(F,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(d.jsx)("section",{className:k.a.meals,children:Object(d.jsx)(f,{children:Object(d.jsx)("ul",{children:e})})})},E=n(20),R=n.n(E),S=function(){return Object(d.jsxs)("section",{className:R.a.summary,children:[Object(d.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(d.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(d.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})};var z=function(){return Object(d.jsxs)(r.Fragment,{children:[Object(d.jsx)(S,{}),Object(d.jsx)(T,{})]})},D=n(8),P=n.n(D),V=n(11),Y=n.n(V),q=function(e){return Object(d.jsx)("div",{className:Y.a.backdrop,onClick:e.onClose})},G=function(e){return Object(d.jsx)("div",{className:Y.a.modal,children:Object(d.jsx)("div",{className:Y.a.content,children:e.children})})},J=document.getElementById("overlays"),Q=function(e){return Object(d.jsxs)(r.Fragment,{children:[P.a.createPortal(Object(d.jsx)(q,{onClose:e.onClose}),J),P.a.createPortal(Object(d.jsx)(G,{children:e.children}),J)]})},U=n(4),W=n.n(U),X=function(e){var t="$".concat(e.price.toFixed(2));return Object(d.jsxs)("li",{className:W.a["cart-item"],children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:e.name}),Object(d.jsxs)("div",{className:W.a.summary,children:[Object(d.jsx)("span",{className:W.a.price,children:t}),Object(d.jsxs)("span",{className:W.a.amount,children:["x ",e.amount]})]})]}),Object(d.jsxs)("div",{className:W.a.actions,children:[Object(d.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(d.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},$=n(5),L=n.n($),K=function(e){var t=Object(r.useContext)(j),n="$".concat(t.totalAmount.toFixed(2)),a=t.items.length>0,c=function(e){t.removeItem(e)},i=function(e){t.addItem(Object(v.a)(Object(v.a)({},e),{},{amount:1}))},o=Object(d.jsx)("ul",{className:L.a["cart-items"],children:t.items.map((function(e){return Object(d.jsx)(X,{name:e.name,amount:e.amount,price:e.price,onRemove:c.bind(null,e.id),onAdd:i.bind(null,e)},e.id)}))});return Object(d.jsxs)(Q,{onClose:e.onClose,children:[o,Object(d.jsxs)("div",{className:L.a.total,children:[Object(d.jsx)("span",{children:"Total Amount"}),Object(d.jsx)("span",{children:n})]}),Object(d.jsxs)("div",{className:L.a.actions,children:[Object(d.jsx)("button",{className:L.a["button--alt"],onClick:e.onClose,children:"Close"}),a&&Object(d.jsx)("button",{className:L.a.button,children:"Order"})]})]})},Z=n(13),ee={items:[],totalAmount:0},te=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[c];if(i){var r=Object(v.a)(Object(v.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object(Z.a)(e.items))[c]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var o,s=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[s],m=e.totalAmount-l.price;if(1===l.amount)o=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(v.a)(Object(v.a)({},l),{},{amount:l.amount-1});(o=Object(Z.a)(e.items))[s]=d}return{items:o,totalAmount:m}}return ee},ne=function(e){var t=Object(r.useReducer)(te,ee),n=Object(i.a)(t,2),a=n[0],c=n[1],o={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})}};return Object(d.jsx)(j.Provider,{value:o,children:e.children})};var ae=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(d.jsxs)(ne,{children:[n&&Object(d.jsx)(K,{onClose:function(){a(!1)}}),Object(d.jsx)(p,{onShowCart:function(){a(!0)}}),Object(d.jsx)("main",{children:Object(d.jsx)(z,{})})]})};c.a.createRoot(document.getElementById("root")).render(Object(d.jsx)(ae,{}))}],[[30,1,2]]]);
//# sourceMappingURL=main.c972c796.chunk.js.map