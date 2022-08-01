import{u as j}from"./index.esm.4b33928a.js";import{F as N,f as R,s as z}from"./signupChecker.54f8f181.js";import{r as o,b as V,j as s,F as W,c as Z,at as $,d as u,an as O,au as G,av as H,aw as J,I as n,P as E,E as w,ax as K,S as M,B as Q}from"./index--a1e937cd.js";import"./index.34b83dad.js";const y=u(N,{icon:R});function T(){var p,B,m,h,D,g;const[i,A]=o.exports.useState(!1),F=()=>{A(!i)},[l,v]=o.exports.useState(!1),S=()=>{v(!l)},[k,x]=o.exports.useState(""),[b,P]=o.exports.useState(""),{register:r,handleSubmit:L,formState:{errors:e},watch:c,setError:q}=j(),d=V(),t=c("image");o.exports.useEffect(()=>{if(t&&t.length>0){const C=t[0];console.log(C),x(C.name),P(URL.createObjectURL(C))}},[t]);const I=async C=>{const a=new FormData;a.append("name",C.name),a.append("nickname",C.nickname),a.append("department",C.department),a.append("email",C.email),a.append("password",C.password),a.append("passwordChecker",C.passwordChecker),a.append("image",C.image[0]),console.log(a);const f=await z(a);console.log(f),f.email?q("email",{type:"pattern",message:"\uC774\uBBF8 \uD68C\uC6D0\uAC00\uC785\uB41C \uC774\uBA54\uC77C\uC785\uB2C8\uB2E4."}):d("../verification")};console.log(e);const U=()=>{d("/login")};return s(W,{children:[s(Z,{onSubmit:L(I),children:[s($,{children:[u(O,{src:t?b:"/default.png",alt:"\uD504\uB85C\uD544 \uC0AC\uC9C4"}),s(G,{children:[u(H,{children:k}),u(J,{htmlFor:"image",children:"\uC5C5\uB85C\uB4DC"})]})]}),u("input",{...r("image",{}),type:"file",id:"image",name:"image",accept:"img/*",style:{display:"none"}}),u(n,{type:"text",placeholder:"\uC774\uB984\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",...r("name",{required:"\uD544\uC218 \uC785\uB825 \uCE78\uC785\uB2C8\uB2E4.",maxLength:100})}),e.name&&s("div",{style:{color:"red"},children:[" ",(p=e.name)==null?void 0:p.message]}),u(n,{type:"text",placeholder:"\uD638\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",...r("nickname",{required:"\uD544\uC218 \uC785\uB825 \uCE78\uC785\uB2C8\uB2E4.",maxLength:100})}),e.nickname&&s("div",{style:{color:"red"},children:[" ",(B=e.nickname)==null?void 0:B.message]}),u(n,{type:"text",placeholder:"\uB2E8\uBE44\uAD50\uC721 \uC0AC\uB0B4 \uC774\uBA54\uC77C\uC744 \uC785\uB825\uD574\uC8FC\uC138\uC694.",...r("email",{required:"\uD544\uC218 \uC785\uB825 \uCE78\uC785\uB2C8\uB2E4.",pattern:{value:/^\S+@\bdanbiedu.co.kr\b$/i,message:"\uB2E8\uBE44\uAD50\uC721 \uC774\uBA54\uC77C \uC591\uC2DD\uC774 \uC544\uB2D9\uB2C8\uB2E4."}})}),e.email&&s("div",{style:{color:"red"},children:[" ",(m=e.email)==null?void 0:m.message]}),s(E,{children:[u(n,{type:i?"text":"password",placeholder:"\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694. (\uC601\uBB38 + \uC22B\uC790 8\uC790 \uC774\uC0C1)",...r("password",{required:"\uD544\uC218 \uC785\uB825 \uCE78\uC785\uB2C8\uB2E4.",pattern:{value:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/i,message:"\uCD5C\uC18C 8\uAE00\uC790 \uC774\uC0C1, \uC601\uBB38\uACFC \uC22B\uC790\uB85C \uC870\uD569\uD574\uC8FC\uC138\uC694"}})}),u(w,{onClick:F,children:y})," "]}),e.password&&s("div",{style:{color:"red"},children:[" ",(h=e.password)==null?void 0:h.message]}),s(E,{children:[u(n,{type:l?"text":"password",placeholder:"\uBE44\uBC00\uBC88\uD638\uB97C \uC7AC\uC785\uB825\uD574\uC8FC\uC138\uC694.",...r("passwordChecker",{required:"\uD544\uC218 \uC785\uB825 \uCE78\uC785\uB2C8\uB2E4.",validate:C=>{if(c("password")!=C)return"\uBE44\uBC00\uBC88\uD638\uAC00 \uC77C\uCE58\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4."}})}),u(w,{onClick:S,children:y})," "]}),e.passwordChecker&&s("div",{style:{color:"red"},children:[" ",(D=e.passwordChecker)==null?void 0:D.message]}),s(K,{...r("department",{required:"\uD544\uC218 \uC785\uB825 \uCE78\uC785\uB2C8\uB2E4."}),children:[u("option",{style:{display:"none"},value:"",disabled:!0,selected:!0,children:"\uC9C1\uAD70\uC744 \uC120\uD0DD\uD574\uC8FC\uC138\uC694."}),u("option",{value:"\uAC1C\uBC1C",children:"\uAC1C\uBC1C"}),u("option",{value:"\uACBD\uC601\uC9C0\uC6D0",children:"\uACBD\uC601\uC9C0\uC6D0"}),u("option",{value:"\uB9C8\uCF00\uD305",children:"\uB9C8\uCF00\uD305"}),u("option",{value:"\uB514\uC790\uC778",children:"\uB514\uC790\uC778"})]}),e.department&&s("div",{style:{color:"red"},children:[" ",(g=e.department)==null?void 0:g.message]}),u(M,{type:"submit",value:"\uAC00\uC785\uD558\uAE30"})]}),u(Q,{onClick:U,children:"\uC544\uC774\uB514\uAC00 \uC788\uC5B4\uC694"})]})}function eu(){return u(T,{})}export{eu as default};
