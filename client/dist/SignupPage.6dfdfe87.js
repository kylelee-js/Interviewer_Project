import{u as f,F as y,a as x,I as t,V as a,P as c,E as d,b as v,S as b,B as k}from"./formStyle.780e6ece.js";import{e as p,r as m,a as P,j as r,b as u}from"./index--cacd63c4.js";import{s}from"./index.esm.14bb29e2.js";import{F as q,f as j}from"./index.es.a040e43b.js";import"./index.34b83dad.js";const V=async o=>{delete p.defaults.headers.common.Authorization;try{const n=await p.post("/user/register/",o,{headers:{Accept:"application/json"}})}catch(n){console.log(n)}},h=u(q,{icon:j});function z(){const[o,n]=m.exports.useState(!1),D=()=>{n(!o)},[l,E]=m.exports.useState(!1),g=()=>{E(!l)},{register:C,handleSubmit:w,formState:{errors:e},watch:A}=f(),B=P(),S=i=>{console.log(i),V(i),B("../login")};console.log(e);const F=()=>{B("/login")};return r(y,{children:[r(x,{onSubmit:w(S),children:[u(t,{type:"text",placeholder:"\uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",...C("name",{required:"\uD544\uC218 \uC785\uB825 \uCE78\uC785\uB2C8\uB2E4.",maxLength:100})}),u(s,{errors:e,name:"name",as:a}),u(t,{type:"text",placeholder:"\uD638\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",...C("nickname",{required:"\uD544\uC218 \uC785\uB825 \uCE78\uC785\uB2C8\uB2E4.",maxLength:100})}),u(s,{errors:e,name:"nickname",as:a}),u(t,{type:"text",placeholder:"\uC774\uBA54\uC77C\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",...C("email",{required:"\uD544\uC218 \uC785\uB825 \uCE78\uC785\uB2C8\uB2E4.",pattern:{value:/^\S+@\S+$/i,message:"\uC774\uBA54\uC77C \uC591\uC2DD\uC774 \uC544\uB2D9\uB2C8\uB2E4."}})}),u(s,{errors:e,name:"email",as:a}),r(c,{children:[u(t,{type:o?"text":"password",placeholder:"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694.",...C("password",{required:"\uD544\uC218 \uC785\uB825 \uCE78\uC785\uB2C8\uB2E4.",pattern:{value:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i,message:"\uCD5C\uC18C 8\uAE00\uC790 \uC774\uC0C1, \uC601\uBB38\uACFC \uC22B\uC790\uB85C \uC870\uD569\uD574\uC8FC\uC138\uC694"}})}),u(d,{onClick:D,children:h})," "]}),u(s,{errors:e,name:"password",as:a}),r(c,{children:[u(t,{type:l?"text":"password",placeholder:"\uBE44\uBC00\uBC88\uD638\uB97C \uC7AC\uC785\uB825\uD574\uC8FC\uC138\uC694.",...C("passwordChecker",{required:"\uD544\uC218 \uC785\uB825 \uCE78\uC785\uB2C8\uB2E4.",validate:i=>{if(A("password")!=i)return"\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."}})}),u(d,{onClick:g,children:h})," "]}),u(s,{errors:e,name:"passwordChecker",as:a}),r(v,{...C("department",{required:"\uD544\uC218 \uC785\uB825 \uCE78\uC785\uB2C8\uB2E4."}),children:[u("option",{style:{display:"none"},value:"",disabled:!0,selected:!0,children:"\uC9C1\uAD70\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694."}),u("option",{value:"\uAC1C\uBC1C",children:"\uAC1C\uBC1C"}),u("option",{value:"\uACBD\uC601\uC9C0\uC6D0",children:"\uACBD\uC601\uC9C0\uC6D0"}),u("option",{value:"\uB9C8\uCF00\uD305",children:"\uB9C8\uCF00\uD305"}),u("option",{value:"\uB514\uC790\uC778",children:"\uB514\uC790\uC778"})]}),u(s,{errors:e,name:"department",as:a}),u(b,{type:"submit",value:"\uAC00\uC785\uD558\uAE30"})]}),u(k,{onClick:F,children:"\uC544\uC774\uB514\uAC00 \uC788\uC5B4\uC694"})]})}function M(){return u(z,{})}export{M as default};
