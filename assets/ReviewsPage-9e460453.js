import{r as c,u as E,e as N,a as w,j as s,k as O,B as y,l as b,R,h as W,d as I,f as P,H as S,G as A,S as B,g as F}from"./index-10ede70a.js";import{u as L,M as T,S as U}from"./ModalResultMovies-70eaa99b.js";import{c as k}from"./index-86c7af64.js";const q="_buttons_1blod_1",z="_info_1blod_7",D="_btnOk_1blod_12",G="_reviewArea_1blod_29",H="_reviewBtn_1blod_44",$="_deleteRw_1blod_65",J="_wrapper_1blod_86",v={buttons:q,info:z,btnOk:D,reviewArea:G,reviewBtn:H,deleteRw:$,wrapper:J},K=c.memo(({movie:e})=>{const t="Место для вашей рецензии",[a,o]=c.useState(""),[m,d]=c.useState(!0),_=E(),{isOpened:f,handleModal:u}=N(),r=w(n=>n.user.id),h=w(n=>n.user.isActivated),i=c.useRef(null),g=n=>{o(n)};c.useEffect(()=>{o(e==null?void 0:e.userReview)},[e.id,e==null?void 0:e.userReview,h]);const p=async()=>{if(!h){u();return}i.current.focus(),d(n=>!n),a===""&&o(t),a==t?o(""):(await b({movie:e},r,a),_(R.addReviews({movieId:e.id,userReview:a})))},j=async()=>{await b({movie:e},r,t),_(R.addReviews({movieId:e.id,userReview:t})),o(t)},x=a===t||a==="";return s.jsxs(s.Fragment,{children:[s.jsxs(O,{isOpen:f,children:[s.jsx("p",{className:v.info,children:"Для написания рецензий необходимо подтвердить почту"}),s.jsx(y,{handler:()=>u(),styles:v.btnOk,children:"Понятно"})]}),s.jsx("textarea",{className:v.reviewArea,value:a,onChange:n=>g(n.target.value),ref:i,readOnly:m}),s.jsxs("div",{className:v.buttons,children:[s.jsx(y,{handler:p,styles:v.reviewBtn,children:x?"Оставить рецензию":"Изменить рецензию"}),s.jsx(y,{handler:j,styles:v.deleteRw,children:"Удалить рецензию"})]})]})}),C=e=>{var t;return(t=e==null?void 0:e.arrayReviews)==null?void 0:t.arrayReviews};k(C,e=>e.filter(t=>t.myReviews!=="Место для вашей рецензии"&&t.myReviews!==""));const Q=e=>e.myCollection.myCollection,V=e=>e.wantToSee.wantToSee;k([Q,V],(e,t)=>{const a=[...e,...t],o=new Map;return a.forEach(d=>{o.set(d.id,d)}),Array.from(o.values())});const X=e=>{var t;return((t=e==null?void 0:e.user)==null?void 0:t.id)??""},Y=e=>{var t;return((t=e==null?void 0:e.user)==null?void 0:t.isAuth)??!1},Z="_main_an61s_1",ee="_mainWrapper_an61s_9",se="_sliders_an61s_18",te="_card_an61s_25",ne="_reviewBlock_an61s_33",ae="_img_an61s_40",re="_deleteEntireList_an61s_49",ie="_emptyWrapper_an61s_70",le="_emptyPage_an61s_81",l={main:Z,mainWrapper:ee,sliders:se,card:te,reviewBlock:ne,img:ae,deleteEntireList:re,emptyWrapper:ie,emptyPage:le},ue=()=>{var x;const{isOpened:e,handleModal:t}=N(),a=W(),o=n=>{p(n)},m=async()=>{p(null),u(R.deleteAll()),F(d,"myReviews")},d=w(X),_=w(Y),f=I(),u=E();c.useEffect(()=>{localStorage.getItem("userEmail")||f(P.home),p(r[0])},[_]);const r=w(C),{search:h,selectedMovie:i,filteredBySearchMovie:g,setSelectedMovie:p}=L(r,t),j=((x=i==null?void 0:i.poster)==null?void 0:x.previewUrl)||(i==null?void 0:i.poster);return c.useEffect(()=>{u(R.addAllInitialMovie(r))},[u,r[0],r]),i?s.jsxs("section",{className:l.main,children:[s.jsxs(S,{children:[s.jsx(A,{placeholder:"Найдите ваш отзыв",handleMovie:h}),s.jsx(T,{movies:g,isOpen:e,onClose:t,styles:l.modal,handleCard:o})]}),r.length&&s.jsxs(y,{styles:l.deleteEntireList,handler:()=>m(),children:["Очистить список (",r.length,")"]}),s.jsxs("div",{className:l.mainWrapper,children:[s.jsx("img",{className:l.img,src:j}),s.jsx("div",{className:l.reviewBlock,children:s.jsx(K,{movie:i})}),s.jsx("div",{className:l.sliders,children:s.jsx(U,{width:"100%",height:"100%",sizeCard:160,snowButtons:!0,itemsPerPage:Math.floor(a/160),children:r.map(n=>{var M;return s.jsx("img",{className:l.card,src:((M=n.poster)==null?void 0:M.previewUrl)||n.poster,alt:n.title,onClick:()=>p(n)},n.id)})})}),s.jsx(B,{})]})]}):s.jsxs("section",{className:l.main,children:[s.jsx(S,{children:s.jsx(A,{placeholder:"Найдите ваш отзыв",handleMovie:h})}),s.jsxs("div",{className:l.emptyWrapper,children:[s.jsx(B,{}),s.jsx("h2",{className:l.emptyPage,children:"Список пуст"})]})]})};export{ue as default};
