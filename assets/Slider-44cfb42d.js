import{j as t,i as j,r as p}from"./index-254fbdb0.js";const B=()=>t.jsx("footer",{className:j.wrapper}),y=n=>{var o;return((o=n==null?void 0:n.myCollection)==null?void 0:o.myCollection)??0},m="_wrapper_vd4xq_1",b="_buttons_vd4xq_13",v="_handleBtn_vd4xq_33",r={wrapper:m,buttons:b,handleBtn:v},C=({width:n,height:o,children:l,sizeCard:d,itemsPerPage:s=10,snowButtons:x})=>{const i=p.useRef(null),[a,e]=p.useState(0),u=Math.ceil(l.length/s),h=()=>{a+s<l.length?e(c=>c+s):e(0)},_=()=>{a-s>=0?e(c=>c-s):e((u-1)*s)},f={width:n,height:o,transform:`translateX(-${a*d}px)`};return t.jsxs(t.Fragment,{children:[t.jsx("div",{style:f,className:r.wrapper,ref:i,children:l}),x&&t.jsxs("div",{className:r.buttons,children:[t.jsx("button",{onClick:_,className:r.handleBtn,children:"<"}),t.jsx("button",{onClick:h,className:r.handleBtn,children:">"})]})]})};export{B as F,C as S,y as g};
