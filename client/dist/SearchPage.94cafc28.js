import{e as w,d as k,a as F,T as O,M as j,K as E}from"./KebabMenu.e6dda2de.js";import{u as D,a as K,f as P,r as l,ax as L,d as e,T as i,j as n,s as y}from"./index--b2370d60.js";import{B as M}from"./jsx-runtime_commonjs-proxy.f758a4af.js";import{C as z,a as R,T as A,b as W}from"./Tooltip.5e6f5ab5.js";import"./DialogTitle.ffb03f36.js";import"./Modal.4aba55c5.js";import"./TextField.55fe9d44.js";import"./_commonjsHelpers.6312ac27.js";const N=y.div`
  padding: 5px 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  min-height: 80vh;
  width: 100%;
  background-color: #d9dedb;
  border-radius: 3px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`,U=["\uBBF8\uB4F1\uB85D","\uC11C\uB958\uD569\uACA9","1\uCC28\uD569\uACA9","2\uCC28\uD569\uACA9","\uCD5C\uC885\uD569\uACA9"],u=y.span`
  background-color: ${c=>c.match?"yellow":"transparent"};
`;function _(){const c=D(t=>{var a;return(a=t.auth.user)==null?void 0:a.pk}),C=D(t=>t.search),S=K(),d=P().search,[o,v]=l.exports.useState(""),[$,T]=l.exports.useState("");return l.exports.useEffect(()=>{const t=new URLSearchParams(d).get("option"),a=new URLSearchParams(d).get("searchKeyword");v(a),T(t),S(L({option:t,searchKeyword:a}))},[d]),C.length==0?e(N,{children:e(i,{sx:{marginTop:"30px"},variant:"h5",component:"div",children:"\uC77C\uCE58\uD558\uB294 \uAC80\uC0C9 \uACB0\uACFC\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4."})}):e(w,{boardLength:4,children:C.map((t,a)=>{const{status:p,department:x,job:m,interviewer:h,applicantName:B,isFailed:f,isFixed:b,tags:s,id:g}=t;return e(M,{sx:{minWidth:250,width:"90%",marginTop:"10px",maxWidth:320,position:"relative",boxSizing:"border-box"},children:n(z,{variant:"outlined",children:[n(R,{children:[n(i,{sx:{fontSize:14,borderRadius:"3px"},color:"text.secondary",gutterBottom:!0,children:[e(u,{match:x.indexOf(o)>-1,children:x}),"-"," ",e(u,{match:m.indexOf(o)>-1,children:m})]}),n(i,{variant:"h5",component:"div",children:[e(u,{match:B.indexOf(o)>-1,children:B})," ",f&&e(A,{title:"\uD574\uB2F9 \uC9C0\uC6D0\uC790\uB294 \uC804\uD615 \uD0C8\uB77D\uC0C1\uD0DC\uC785\uB2C8\uB2E4.",children:e(k,{color:"error",sx:{verticalAlign:"text-top"}})})," ",b&&e(A,{title:"\uD574\uB2F9 \uC9C0\uC6D0\uC790\uB294 \uAC80\uD1A0 \uC911\uC785\uB2C8\uB2E4.",children:e(F,{sx:{verticalAlign:"text-top"}})})]}),e(i,{sx:{mb:1.5},color:"text.secondary",children:U[+p]}),e(i,{variant:"body2",children:s==null?void 0:s.map(r=>e(O,{id:""+r.id,children:n(u,{style:{color:r.tagText.indexOf(o)>-1?"black":"inherit"},match:r.tagText.indexOf(o)>-1,children:["#",r.tagText]})},r.id))})]}),e(j,{children:e(W,{children:e(E,{type:"myapplicants",id:g,status:p,isMine:Boolean(h==null?void 0:h.find(r=>r.pk===c)),applicantIndex:a,isFailed:f,isFixed:b,tags:s})})})]})},g)})})}function Y(){return e(_,{})}export{Y as default};
