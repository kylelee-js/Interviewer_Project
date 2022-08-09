import{r as C,am as tr,an as rr,aj as nr,ao as or,_ as pe,e as K,i as D,Q as Ye,G as Ke,H as Je,J as Qe,K as V,N as Ze,O as Bt,j as ir,ap as Tt,V as gt,aq as ar,ar as sr,as as Mt,at as cr}from"./index--e7d7d61c.js";import{o as Dt,f as lr,u as ge,g as Ue,h as ur,i as pr,s as fr,j as dr,a as vr,k as mr,B as hr,b as gr,T as yr,r as br,l as yt}from"./DialogContent.28d18edf.js";function xr(e,t=166){let r;function n(...o){const i=()=>{e.apply(this,o)};clearTimeout(r),r=setTimeout(i,t)}return n.clear=()=>{clearTimeout(r)},n}function wr(e,t){return()=>null}function Or(e,t){return C.exports.isValidElement(e)&&t.indexOf(e.type.muiName)!==-1}function $r(e,t){return()=>null}function Er(e,t,r,n,o){return null}function Rr({controlled:e,default:t,name:r,state:n="value"}){const{current:o}=C.exports.useRef(e!==void 0),[i,a]=C.exports.useState(t),s=o?e:i,c=C.exports.useCallback(u=>{o||a(u)},[]);return[s,c]}const Pr=["className","component"];function Cr(e={}){const{defaultTheme:t,defaultClassName:r="MuiBox-root",generateClassName:n,styleFunctionSx:o=rr}=e,i=tr("div")(o);return C.exports.forwardRef(function(c,u){const l=nr(t),d=or(c),{className:g,component:p="div"}=d,h=pe(d,Pr);return K(i,D({as:p,ref:u,className:Ye(g,n?n(r):r),theme:l},h))})}var k="top",W="bottom",H="right",z="left",et="auto",xe=[k,W,H,z],ae="start",ye="end",Sr="clippingParents",jt="viewport",ve="popper",Ar="reference",bt=xe.reduce(function(e,t){return e.concat([t+"-"+ae,t+"-"+ye])},[]),It=[].concat(xe,[et]).reduce(function(e,t){return e.concat([t,t+"-"+ae,t+"-"+ye])},[]),Br="beforeRead",Tr="read",Mr="afterRead",Dr="beforeMain",jr="main",Ir="afterMain",kr="beforeWrite",zr="write",Nr="afterWrite",_r=[Br,Tr,Mr,Dr,jr,Ir,kr,zr,Nr];function Y(e){return e?(e.nodeName||"").toLowerCase():null}function U(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function se(e){var t=U(e).Element;return e instanceof t||e instanceof Element}function F(e){var t=U(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function tt(e){if(typeof ShadowRoot>"u")return!1;var t=U(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function Lr(e){var t=e.state;Object.keys(t.elements).forEach(function(r){var n=t.styles[r]||{},o=t.attributes[r]||{},i=t.elements[r];!F(i)||!Y(i)||(Object.assign(i.style,n),Object.keys(o).forEach(function(a){var s=o[a];s===!1?i.removeAttribute(a):i.setAttribute(a,s===!0?"":s)}))})}function Fr(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach(function(n){var o=t.elements[n],i=t.attributes[n]||{},a=Object.keys(t.styles.hasOwnProperty(n)?t.styles[n]:r[n]),s=a.reduce(function(c,u){return c[u]="",c},{});!F(o)||!Y(o)||(Object.assign(o.style,s),Object.keys(i).forEach(function(c){o.removeAttribute(c)}))})}}const Wr={name:"applyStyles",enabled:!0,phase:"write",fn:Lr,effect:Fr,requires:["computeStyles"]};function X(e){return e.split("-")[0]}var oe=Math.max,ke=Math.min,ce=Math.round;function le(e,t){t===void 0&&(t=!1);var r=e.getBoundingClientRect(),n=1,o=1;if(F(e)&&t){var i=e.offsetHeight,a=e.offsetWidth;a>0&&(n=ce(r.width)/a||1),i>0&&(o=ce(r.height)/i||1)}return{width:r.width/n,height:r.height/o,top:r.top/o,right:r.right/n,bottom:r.bottom/o,left:r.left/n,x:r.left/n,y:r.top/o}}function rt(e){var t=le(e),r=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-r)<=1&&(r=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:r,height:n}}function kt(e,t){var r=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(r&&tt(r)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function J(e){return U(e).getComputedStyle(e)}function Hr(e){return["table","td","th"].indexOf(Y(e))>=0}function Z(e){return((se(e)?e.ownerDocument:e.document)||window.document).documentElement}function ze(e){return Y(e)==="html"?e:e.assignedSlot||e.parentNode||(tt(e)?e.host:null)||Z(e)}function xt(e){return!F(e)||J(e).position==="fixed"?null:e.offsetParent}function Vr(e){var t=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,r=navigator.userAgent.indexOf("Trident")!==-1;if(r&&F(e)){var n=J(e);if(n.position==="fixed")return null}var o=ze(e);for(tt(o)&&(o=o.host);F(o)&&["html","body"].indexOf(Y(o))<0;){var i=J(o);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||t&&i.willChange==="filter"||t&&i.filter&&i.filter!=="none")return o;o=o.parentNode}return null}function we(e){for(var t=U(e),r=xt(e);r&&Hr(r)&&J(r).position==="static";)r=xt(r);return r&&(Y(r)==="html"||Y(r)==="body"&&J(r).position==="static")?t:r||Vr(e)||t}function nt(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function me(e,t,r){return oe(e,ke(t,r))}function Ur(e,t,r){var n=me(e,t,r);return n>r?r:n}function zt(){return{top:0,right:0,bottom:0,left:0}}function Nt(e){return Object.assign({},zt(),e)}function _t(e,t){return t.reduce(function(r,n){return r[n]=e,r},{})}var qr=function(t,r){return t=typeof t=="function"?t(Object.assign({},r.rects,{placement:r.placement})):t,Nt(typeof t!="number"?t:_t(t,xe))};function Gr(e){var t,r=e.state,n=e.name,o=e.options,i=r.elements.arrow,a=r.modifiersData.popperOffsets,s=X(r.placement),c=nt(s),u=[z,H].indexOf(s)>=0,l=u?"height":"width";if(!(!i||!a)){var d=qr(o.padding,r),g=rt(i),p=c==="y"?k:z,h=c==="y"?W:H,f=r.rects.reference[l]+r.rects.reference[c]-a[c]-r.rects.popper[l],m=a[c]-r.rects.reference[c],y=we(i),b=y?c==="y"?y.clientHeight||0:y.clientWidth||0:0,O=f/2-m/2,v=d[p],x=b-g[l]-d[h],$=b/2-g[l]/2+O,R=me(v,$,x),E=c;r.modifiersData[n]=(t={},t[E]=R,t.centerOffset=R-$,t)}}function Xr(e){var t=e.state,r=e.options,n=r.element,o=n===void 0?"[data-popper-arrow]":n;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||!kt(t.elements.popper,o)||(t.elements.arrow=o))}const Yr={name:"arrow",enabled:!0,phase:"main",fn:Gr,effect:Xr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ue(e){return e.split("-")[1]}var Kr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Jr(e){var t=e.x,r=e.y,n=window,o=n.devicePixelRatio||1;return{x:ce(t*o)/o||0,y:ce(r*o)/o||0}}function wt(e){var t,r=e.popper,n=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,c=e.gpuAcceleration,u=e.adaptive,l=e.roundOffsets,d=e.isFixed,g=a.x,p=g===void 0?0:g,h=a.y,f=h===void 0?0:h,m=typeof l=="function"?l({x:p,y:f}):{x:p,y:f};p=m.x,f=m.y;var y=a.hasOwnProperty("x"),b=a.hasOwnProperty("y"),O=z,v=k,x=window;if(u){var $=we(r),R="clientHeight",E="clientWidth";if($===U(r)&&($=Z(r),J($).position!=="static"&&s==="absolute"&&(R="scrollHeight",E="scrollWidth")),$=$,o===k||(o===z||o===H)&&i===ye){v=W;var A=d&&$===x&&x.visualViewport?x.visualViewport.height:$[R];f-=A-n.height,f*=c?1:-1}if(o===z||(o===k||o===W)&&i===ye){O=H;var S=d&&$===x&&x.visualViewport?x.visualViewport.width:$[E];p-=S-n.width,p*=c?1:-1}}var T=Object.assign({position:s},u&&Kr),N=l===!0?Jr({x:p,y:f}):{x:p,y:f};if(p=N.x,f=N.y,c){var j;return Object.assign({},T,(j={},j[v]=b?"0":"",j[O]=y?"0":"",j.transform=(x.devicePixelRatio||1)<=1?"translate("+p+"px, "+f+"px)":"translate3d("+p+"px, "+f+"px, 0)",j))}return Object.assign({},T,(t={},t[v]=b?f+"px":"",t[O]=y?p+"px":"",t.transform="",t))}function Qr(e){var t=e.state,r=e.options,n=r.gpuAcceleration,o=n===void 0?!0:n,i=r.adaptive,a=i===void 0?!0:i,s=r.roundOffsets,c=s===void 0?!0:s,u={placement:X(t.placement),variation:ue(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,wt(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,wt(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}const Zr={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Qr,data:{}};var je={passive:!0};function en(e){var t=e.state,r=e.instance,n=e.options,o=n.scroll,i=o===void 0?!0:o,a=n.resize,s=a===void 0?!0:a,c=U(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&u.forEach(function(l){l.addEventListener("scroll",r.update,je)}),s&&c.addEventListener("resize",r.update,je),function(){i&&u.forEach(function(l){l.removeEventListener("scroll",r.update,je)}),s&&c.removeEventListener("resize",r.update,je)}}const tn={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:en,data:{}};var rn={left:"right",right:"left",bottom:"top",top:"bottom"};function Ie(e){return e.replace(/left|right|bottom|top/g,function(t){return rn[t]})}var nn={start:"end",end:"start"};function Ot(e){return e.replace(/start|end/g,function(t){return nn[t]})}function ot(e){var t=U(e),r=t.pageXOffset,n=t.pageYOffset;return{scrollLeft:r,scrollTop:n}}function it(e){return le(Z(e)).left+ot(e).scrollLeft}function on(e){var t=U(e),r=Z(e),n=t.visualViewport,o=r.clientWidth,i=r.clientHeight,a=0,s=0;return n&&(o=n.width,i=n.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=n.offsetLeft,s=n.offsetTop)),{width:o,height:i,x:a+it(e),y:s}}function an(e){var t,r=Z(e),n=ot(e),o=(t=e.ownerDocument)==null?void 0:t.body,i=oe(r.scrollWidth,r.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=oe(r.scrollHeight,r.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-n.scrollLeft+it(e),c=-n.scrollTop;return J(o||r).direction==="rtl"&&(s+=oe(r.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}function at(e){var t=J(e),r=t.overflow,n=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(r+o+n)}function Lt(e){return["html","body","#document"].indexOf(Y(e))>=0?e.ownerDocument.body:F(e)&&at(e)?e:Lt(ze(e))}function he(e,t){var r;t===void 0&&(t=[]);var n=Lt(e),o=n===((r=e.ownerDocument)==null?void 0:r.body),i=U(n),a=o?[i].concat(i.visualViewport||[],at(n)?n:[]):n,s=t.concat(a);return o?s:s.concat(he(ze(a)))}function qe(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function sn(e){var t=le(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}function $t(e,t){return t===jt?qe(on(e)):se(t)?sn(t):qe(an(Z(e)))}function cn(e){var t=he(ze(e)),r=["absolute","fixed"].indexOf(J(e).position)>=0,n=r&&F(e)?we(e):e;return se(n)?t.filter(function(o){return se(o)&&kt(o,n)&&Y(o)!=="body"}):[]}function ln(e,t,r){var n=t==="clippingParents"?cn(e):[].concat(t),o=[].concat(n,[r]),i=o[0],a=o.reduce(function(s,c){var u=$t(e,c);return s.top=oe(u.top,s.top),s.right=ke(u.right,s.right),s.bottom=ke(u.bottom,s.bottom),s.left=oe(u.left,s.left),s},$t(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function Ft(e){var t=e.reference,r=e.element,n=e.placement,o=n?X(n):null,i=n?ue(n):null,a=t.x+t.width/2-r.width/2,s=t.y+t.height/2-r.height/2,c;switch(o){case k:c={x:a,y:t.y-r.height};break;case W:c={x:a,y:t.y+t.height};break;case H:c={x:t.x+t.width,y:s};break;case z:c={x:t.x-r.width,y:s};break;default:c={x:t.x,y:t.y}}var u=o?nt(o):null;if(u!=null){var l=u==="y"?"height":"width";switch(i){case ae:c[u]=c[u]-(t[l]/2-r[l]/2);break;case ye:c[u]=c[u]+(t[l]/2-r[l]/2);break}}return c}function be(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=n===void 0?e.placement:n,i=r.boundary,a=i===void 0?Sr:i,s=r.rootBoundary,c=s===void 0?jt:s,u=r.elementContext,l=u===void 0?ve:u,d=r.altBoundary,g=d===void 0?!1:d,p=r.padding,h=p===void 0?0:p,f=Nt(typeof h!="number"?h:_t(h,xe)),m=l===ve?Ar:ve,y=e.rects.popper,b=e.elements[g?m:l],O=ln(se(b)?b:b.contextElement||Z(e.elements.popper),a,c),v=le(e.elements.reference),x=Ft({reference:v,element:y,strategy:"absolute",placement:o}),$=qe(Object.assign({},y,x)),R=l===ve?$:v,E={top:O.top-R.top+f.top,bottom:R.bottom-O.bottom+f.bottom,left:O.left-R.left+f.left,right:R.right-O.right+f.right},A=e.modifiersData.offset;if(l===ve&&A){var S=A[o];Object.keys(E).forEach(function(T){var N=[H,W].indexOf(T)>=0?1:-1,j=[k,W].indexOf(T)>=0?"y":"x";E[T]+=S[j]*N})}return E}function un(e,t){t===void 0&&(t={});var r=t,n=r.placement,o=r.boundary,i=r.rootBoundary,a=r.padding,s=r.flipVariations,c=r.allowedAutoPlacements,u=c===void 0?It:c,l=ue(n),d=l?s?bt:bt.filter(function(h){return ue(h)===l}):xe,g=d.filter(function(h){return u.indexOf(h)>=0});g.length===0&&(g=d);var p=g.reduce(function(h,f){return h[f]=be(e,{placement:f,boundary:o,rootBoundary:i,padding:a})[X(f)],h},{});return Object.keys(p).sort(function(h,f){return p[h]-p[f]})}function pn(e){if(X(e)===et)return[];var t=Ie(e);return[Ot(e),t,Ot(t)]}function fn(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,i=o===void 0?!0:o,a=r.altAxis,s=a===void 0?!0:a,c=r.fallbackPlacements,u=r.padding,l=r.boundary,d=r.rootBoundary,g=r.altBoundary,p=r.flipVariations,h=p===void 0?!0:p,f=r.allowedAutoPlacements,m=t.options.placement,y=X(m),b=y===m,O=c||(b||!h?[Ie(m)]:pn(m)),v=[m].concat(O).reduce(function(ie,Q){return ie.concat(X(Q)===et?un(t,{placement:Q,boundary:l,rootBoundary:d,padding:u,flipVariations:h,allowedAutoPlacements:f}):Q)},[]),x=t.rects.reference,$=t.rects.popper,R=new Map,E=!0,A=v[0],S=0;S<v.length;S++){var T=v[S],N=X(T),j=ue(T)===ae,ee=[k,W].indexOf(N)>=0,te=ee?"width":"height",w=be(t,{placement:T,boundary:l,rootBoundary:d,altBoundary:g,padding:u}),B=ee?j?H:z:j?W:k;x[te]>$[te]&&(B=Ie(B));var _=Ie(B),L=[];if(i&&L.push(w[N]<=0),s&&L.push(w[B]<=0,w[_]<=0),L.every(function(ie){return ie})){A=T,E=!1;break}R.set(T,L)}if(E)for(var I=h?3:1,G=function(Q){var de=v.find(function(Me){var re=R.get(Me);if(re)return re.slice(0,Q).every(function(Le){return Le})});if(de)return A=de,"break"},fe=I;fe>0;fe--){var Te=G(fe);if(Te==="break")break}t.placement!==A&&(t.modifiersData[n]._skip=!0,t.placement=A,t.reset=!0)}}const dn={name:"flip",enabled:!0,phase:"main",fn,requiresIfExists:["offset"],data:{_skip:!1}};function Et(e,t,r){return r===void 0&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function Rt(e){return[k,H,W,z].some(function(t){return e[t]>=0})}function vn(e){var t=e.state,r=e.name,n=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=be(t,{elementContext:"reference"}),s=be(t,{altBoundary:!0}),c=Et(a,n),u=Et(s,o,i),l=Rt(c),d=Rt(u);t.modifiersData[r]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:l,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":d})}const mn={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:vn};function hn(e,t,r){var n=X(e),o=[z,k].indexOf(n)>=0?-1:1,i=typeof r=="function"?r(Object.assign({},t,{placement:e})):r,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[z,H].indexOf(n)>=0?{x:s,y:a}:{x:a,y:s}}function gn(e){var t=e.state,r=e.options,n=e.name,o=r.offset,i=o===void 0?[0,0]:o,a=It.reduce(function(l,d){return l[d]=hn(d,t.rects,i),l},{}),s=a[t.placement],c=s.x,u=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=u),t.modifiersData[n]=a}const yn={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:gn};function bn(e){var t=e.state,r=e.name;t.modifiersData[r]=Ft({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}const xn={name:"popperOffsets",enabled:!0,phase:"read",fn:bn,data:{}};function wn(e){return e==="x"?"y":"x"}function On(e){var t=e.state,r=e.options,n=e.name,o=r.mainAxis,i=o===void 0?!0:o,a=r.altAxis,s=a===void 0?!1:a,c=r.boundary,u=r.rootBoundary,l=r.altBoundary,d=r.padding,g=r.tether,p=g===void 0?!0:g,h=r.tetherOffset,f=h===void 0?0:h,m=be(t,{boundary:c,rootBoundary:u,padding:d,altBoundary:l}),y=X(t.placement),b=ue(t.placement),O=!b,v=nt(y),x=wn(v),$=t.modifiersData.popperOffsets,R=t.rects.reference,E=t.rects.popper,A=typeof f=="function"?f(Object.assign({},t.rects,{placement:t.placement})):f,S=typeof A=="number"?{mainAxis:A,altAxis:A}:Object.assign({mainAxis:0,altAxis:0},A),T=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,N={x:0,y:0};if(!!$){if(i){var j,ee=v==="y"?k:z,te=v==="y"?W:H,w=v==="y"?"height":"width",B=$[v],_=B+m[ee],L=B-m[te],I=p?-E[w]/2:0,G=b===ae?R[w]:E[w],fe=b===ae?-E[w]:-R[w],Te=t.elements.arrow,ie=p&&Te?rt(Te):{width:0,height:0},Q=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:zt(),de=Q[ee],Me=Q[te],re=me(0,R[w],ie[w]),Le=O?R[w]/2-I-re-de-S.mainAxis:G-re-de-S.mainAxis,Yt=O?-R[w]/2+I+re+Me+S.mainAxis:fe+re+Me+S.mainAxis,Fe=t.elements.arrow&&we(t.elements.arrow),Kt=Fe?v==="y"?Fe.clientTop||0:Fe.clientLeft||0:0,ct=(j=T==null?void 0:T[v])!=null?j:0,Jt=B+Le-ct-Kt,Qt=B+Yt-ct,lt=me(p?ke(_,Jt):_,B,p?oe(L,Qt):L);$[v]=lt,N[v]=lt-B}if(s){var ut,Zt=v==="x"?k:z,er=v==="x"?W:H,ne=$[x],De=x==="y"?"height":"width",pt=ne+m[Zt],ft=ne-m[er],We=[k,z].indexOf(y)!==-1,dt=(ut=T==null?void 0:T[x])!=null?ut:0,vt=We?pt:ne-R[De]-E[De]-dt+S.altAxis,mt=We?ne+R[De]+E[De]-dt-S.altAxis:ft,ht=p&&We?Ur(vt,ne,mt):me(p?vt:pt,ne,p?mt:ft);$[x]=ht,N[x]=ht-ne}t.modifiersData[n]=N}}const $n={name:"preventOverflow",enabled:!0,phase:"main",fn:On,requiresIfExists:["offset"]};function En(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Rn(e){return e===U(e)||!F(e)?ot(e):En(e)}function Pn(e){var t=e.getBoundingClientRect(),r=ce(t.width)/e.offsetWidth||1,n=ce(t.height)/e.offsetHeight||1;return r!==1||n!==1}function Cn(e,t,r){r===void 0&&(r=!1);var n=F(t),o=F(t)&&Pn(t),i=Z(t),a=le(e,o),s={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(n||!n&&!r)&&((Y(t)!=="body"||at(i))&&(s=Rn(t)),F(t)?(c=le(t,!0),c.x+=t.clientLeft,c.y+=t.clientTop):i&&(c.x=it(i))),{x:a.left+s.scrollLeft-c.x,y:a.top+s.scrollTop-c.y,width:a.width,height:a.height}}function Sn(e){var t=new Map,r=new Set,n=[];e.forEach(function(i){t.set(i.name,i)});function o(i){r.add(i.name);var a=[].concat(i.requires||[],i.requiresIfExists||[]);a.forEach(function(s){if(!r.has(s)){var c=t.get(s);c&&o(c)}}),n.push(i)}return e.forEach(function(i){r.has(i.name)||o(i)}),n}function An(e){var t=Sn(e);return _r.reduce(function(r,n){return r.concat(t.filter(function(o){return o.phase===n}))},[])}function Bn(e){var t;return function(){return t||(t=new Promise(function(r){Promise.resolve().then(function(){t=void 0,r(e())})})),t}}function Tn(e){var t=e.reduce(function(r,n){var o=r[n.name];return r[n.name]=o?Object.assign({},o,n,{options:Object.assign({},o.options,n.options),data:Object.assign({},o.data,n.data)}):n,r},{});return Object.keys(t).map(function(r){return t[r]})}var Pt={placement:"bottom",modifiers:[],strategy:"absolute"};function Ct(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return!t.some(function(n){return!(n&&typeof n.getBoundingClientRect=="function")})}function Mn(e){e===void 0&&(e={});var t=e,r=t.defaultModifiers,n=r===void 0?[]:r,o=t.defaultOptions,i=o===void 0?Pt:o;return function(s,c,u){u===void 0&&(u=i);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},Pt,i),modifiersData:{},elements:{reference:s,popper:c},attributes:{},styles:{}},d=[],g=!1,p={state:l,setOptions:function(y){var b=typeof y=="function"?y(l.options):y;f(),l.options=Object.assign({},i,l.options,b),l.scrollParents={reference:se(s)?he(s):s.contextElement?he(s.contextElement):[],popper:he(c)};var O=An(Tn([].concat(n,l.options.modifiers)));return l.orderedModifiers=O.filter(function(v){return v.enabled}),h(),p.update()},forceUpdate:function(){if(!g){var y=l.elements,b=y.reference,O=y.popper;if(!!Ct(b,O)){l.rects={reference:Cn(b,we(O),l.options.strategy==="fixed"),popper:rt(O)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(S){return l.modifiersData[S.name]=Object.assign({},S.data)});for(var v=0;v<l.orderedModifiers.length;v++){if(l.reset===!0){l.reset=!1,v=-1;continue}var x=l.orderedModifiers[v],$=x.fn,R=x.options,E=R===void 0?{}:R,A=x.name;typeof $=="function"&&(l=$({state:l,options:E,name:A,instance:p})||l)}}}},update:Bn(function(){return new Promise(function(m){p.forceUpdate(),m(l)})}),destroy:function(){f(),g=!0}};if(!Ct(s,c))return p;p.setOptions(u).then(function(m){!g&&u.onFirstUpdate&&u.onFirstUpdate(m)});function h(){l.orderedModifiers.forEach(function(m){var y=m.name,b=m.options,O=b===void 0?{}:b,v=m.effect;if(typeof v=="function"){var x=v({state:l,name:y,instance:p,options:O}),$=function(){};d.push(x||$)}})}function f(){d.forEach(function(m){return m()}),d=[]}return p}}var Dn=[tn,xn,Zr,Wr,yn,dn,$n,Yr,mn],jn=Mn({defaultModifiers:Dn});const In=["anchorEl","children","direction","disablePortal","modifiers","open","ownerState","placement","popperOptions","popperRef","TransitionProps"],kn=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition"];function zn(e,t){if(t==="ltr")return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}function Ge(e){return typeof e=="function"?e():e}const Nn={},_n=C.exports.forwardRef(function(t,r){const{anchorEl:n,children:o,direction:i,disablePortal:a,modifiers:s,open:c,placement:u,popperOptions:l,popperRef:d,TransitionProps:g}=t,p=pe(t,In),h=C.exports.useRef(null),f=ge(h,r),m=C.exports.useRef(null),y=ge(m,d),b=C.exports.useRef(y);Ue(()=>{b.current=y},[y]),C.exports.useImperativeHandle(d,()=>m.current,[]);const O=zn(u,i),[v,x]=C.exports.useState(O);C.exports.useEffect(()=>{m.current&&m.current.forceUpdate()}),Ue(()=>{if(!n||!c)return;const R=S=>{x(S.placement)};Ge(n);let E=[{name:"preventOverflow",options:{altBoundary:a}},{name:"flip",options:{altBoundary:a}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:({state:S})=>{R(S)}}];s!=null&&(E=E.concat(s)),l&&l.modifiers!=null&&(E=E.concat(l.modifiers));const A=jn(Ge(n),h.current,D({placement:O},l,{modifiers:E}));return b.current(A),()=>{A.destroy(),b.current(null)}},[n,a,s,c,l,O]);const $={placement:v};return g!==null&&($.TransitionProps=g),K("div",D({ref:f,role:"tooltip"},p,{children:typeof o=="function"?o($):o}))}),Ln=C.exports.forwardRef(function(t,r){const{anchorEl:n,children:o,container:i,direction:a="ltr",disablePortal:s=!1,keepMounted:c=!1,modifiers:u,open:l,placement:d="bottom",popperOptions:g=Nn,popperRef:p,style:h,transition:f=!1}=t,m=pe(t,kn),[y,b]=C.exports.useState(!0),O=()=>{b(!1)},v=()=>{b(!0)};if(!c&&!l&&(!f||y))return null;const x=i||(n?Dt(Ge(n)).body:void 0);return K(lr,{disablePortal:s,container:x,children:K(_n,D({anchorEl:n,direction:a,disablePortal:s,modifiers:u,ref:r,open:f?!y:l,placement:d,popperOptions:g,popperRef:p},m,{style:D({position:"fixed",top:0,left:0,display:!l&&c&&(!f||y)?"none":null},h),TransitionProps:f?{in:l,onEnter:O,onExited:v}:null,children:o}))})}),Fn=Ln;function Wn(e){return Ke("MuiSvgIcon",e)}Je("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);const Hn=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],Vn=e=>{const{color:t,fontSize:r,classes:n}=e,o={root:["root",t!=="inherit"&&`color${V(t)}`,`fontSize${V(r)}`]};return Bt(o,Wn,n)},Un=Qe("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.color!=="inherit"&&t[`color${V(r.color)}`],t[`fontSize${V(r.fontSize)}`]]}})(({theme:e,ownerState:t})=>{var r,n,o,i,a,s,c,u,l,d,g,p,h,f,m,y,b;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:(r=e.transitions)==null||(n=r.create)==null?void 0:n.call(r,"fill",{duration:(o=e.transitions)==null||(i=o.duration)==null?void 0:i.shorter}),fontSize:{inherit:"inherit",small:((a=e.typography)==null||(s=a.pxToRem)==null?void 0:s.call(a,20))||"1.25rem",medium:((c=e.typography)==null||(u=c.pxToRem)==null?void 0:u.call(c,24))||"1.5rem",large:((l=e.typography)==null||(d=l.pxToRem)==null?void 0:d.call(l,35))||"2.1875"}[t.fontSize],color:(g=(p=(e.vars||e).palette)==null||(h=p[t.color])==null?void 0:h.main)!=null?g:{action:(f=(e.vars||e).palette)==null||(m=f.action)==null?void 0:m.active,disabled:(y=(e.vars||e).palette)==null||(b=y.action)==null?void 0:b.disabled,inherit:void 0}[t.color]}}),Wt=C.exports.forwardRef(function(t,r){const n=Ze({props:t,name:"MuiSvgIcon"}),{children:o,className:i,color:a="inherit",component:s="svg",fontSize:c="medium",htmlColor:u,inheritViewBox:l=!1,titleAccess:d,viewBox:g="0 0 24 24"}=n,p=pe(n,Hn),h=D({},n,{color:a,component:s,fontSize:c,instanceFontSize:t.fontSize,inheritViewBox:l,viewBox:g}),f={};l||(f.viewBox=g);const m=Vn(h);return ir(Un,D({as:s,className:Ye(m.root,i),ownerState:h,focusable:"false",color:u,"aria-hidden":d?void 0:!0,role:d?"img":void 0,ref:r},f,p,{children:[o,d?K("title",{children:d}):null]}))});Wt.muiName="SvgIcon";const St=Wt;function qn(e,t){const r=(n,o)=>K(St,D({"data-testid":`${t}Icon`,ref:o},n,{children:e}));return r.muiName=St.muiName,C.exports.memo(C.exports.forwardRef(r))}const Gn={configure:e=>{console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.","","You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead","","The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401","","The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)),Tt.configure(e)}},Xn=Object.freeze(Object.defineProperty({__proto__:null,unstable_ClassNameGenerator:Gn,capitalize:V,createChainedFunction:ur,createSvgIcon:qn,debounce:xr,deprecatedPropType:wr,isMuiElement:Or,ownerDocument:Dt,ownerWindow:pr,requirePropFactory:$r,setRef:fr,unstable_useEnhancedEffect:Ue,unstable_useId:dr,unsupportedProp:Er,useControlled:Rr,useEventCallback:vr,useForkRef:ge,useIsFocusVisible:mr},Symbol.toStringTag,{value:"Module"}));var Yn={exports:{}},P={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ne=60103,_e=60106,Oe=60107,$e=60108,Ee=60114,Re=60109,Pe=60110,Ce=60112,Se=60113,st=60120,Ae=60115,Be=60116,Ht=60121,Vt=60122,Ut=60117,qt=60129,Gt=60131;if(typeof Symbol=="function"&&Symbol.for){var M=Symbol.for;Ne=M("react.element"),_e=M("react.portal"),Oe=M("react.fragment"),$e=M("react.strict_mode"),Ee=M("react.profiler"),Re=M("react.provider"),Pe=M("react.context"),Ce=M("react.forward_ref"),Se=M("react.suspense"),st=M("react.suspense_list"),Ae=M("react.memo"),Be=M("react.lazy"),Ht=M("react.block"),Vt=M("react.server.block"),Ut=M("react.fundamental"),qt=M("react.debug_trace_mode"),Gt=M("react.legacy_hidden")}function q(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ne:switch(e=e.type,e){case Oe:case Ee:case $e:case Se:case st:return e;default:switch(e=e&&e.$$typeof,e){case Pe:case Ce:case Be:case Ae:case Re:return e;default:return t}}case _e:return t}}}var Kn=Re,Jn=Ne,Qn=Ce,Zn=Oe,eo=Be,to=Ae,ro=_e,no=Ee,oo=$e,io=Se;P.ContextConsumer=Pe;P.ContextProvider=Kn;P.Element=Jn;P.ForwardRef=Qn;P.Fragment=Zn;P.Lazy=eo;P.Memo=to;P.Portal=ro;P.Profiler=no;P.StrictMode=oo;P.Suspense=io;P.isAsyncMode=function(){return!1};P.isConcurrentMode=function(){return!1};P.isContextConsumer=function(e){return q(e)===Pe};P.isContextProvider=function(e){return q(e)===Re};P.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ne};P.isForwardRef=function(e){return q(e)===Ce};P.isFragment=function(e){return q(e)===Oe};P.isLazy=function(e){return q(e)===Be};P.isMemo=function(e){return q(e)===Ae};P.isPortal=function(e){return q(e)===_e};P.isProfiler=function(e){return q(e)===Ee};P.isStrictMode=function(e){return q(e)===$e};P.isSuspense=function(e){return q(e)===Se};P.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Oe||e===Ee||e===qt||e===$e||e===Se||e===st||e===Gt||typeof e=="object"&&e!==null&&(e.$$typeof===Be||e.$$typeof===Ae||e.$$typeof===Re||e.$$typeof===Pe||e.$$typeof===Ce||e.$$typeof===Ut||e.$$typeof===Ht||e[0]===Vt)};P.typeOf=q;(function(e){e.exports=P})(Yn);function ao(e){return Ke("MuiIconButton",e)}const so=Je("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),co=so,lo=["edge","children","className","color","disabled","disableFocusRipple","size"],uo=e=>{const{classes:t,disabled:r,color:n,edge:o,size:i}=e,a={root:["root",r&&"disabled",n!=="default"&&`color${V(n)}`,o&&`edge${V(o)}`,`size${V(i)}`]};return Bt(a,ao,t)},po=Qe(hr,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.color!=="default"&&t[`color${V(r.color)}`],r.edge&&t[`edge${V(r.edge)}`],t[`size${V(r.size)}`]]}})(({theme:e,ownerState:t})=>D({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest})},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.active} / ${e.vars.palette.action.hoverOpacity})`:gt(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.edge==="start"&&{marginLeft:t.size==="small"?-3:-12},t.edge==="end"&&{marginRight:t.size==="small"?-3:-12}),({theme:e,ownerState:t})=>D({},t.color==="inherit"&&{color:"inherit"},t.color!=="inherit"&&t.color!=="default"&&D({color:(e.vars||e).palette[t.color].main},!t.disableRipple&&{"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:gt(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}),t.size==="small"&&{padding:5,fontSize:e.typography.pxToRem(18)},t.size==="large"&&{padding:12,fontSize:e.typography.pxToRem(28)},{[`&.${co.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}})),fo=C.exports.forwardRef(function(t,r){const n=Ze({props:t,name:"MuiIconButton"}),{edge:o=!1,children:i,className:a,color:s="default",disabled:c=!1,disableFocusRipple:u=!1,size:l="medium"}=n,d=pe(n,lo),g=D({},n,{edge:o,color:s,disabled:c,disableFocusRipple:u,size:l}),p=uo(g);return K(po,D({className:Ye(p.root,a),centerRipple:!0,focusRipple:!u,disabled:c,ref:r,ownerState:g},d,{children:i}))}),Ro=fo,vo=Qe(Fn,{name:"MuiPopper",slot:"Root",overridesResolver:(e,t)=>t.root})({}),mo=C.exports.forwardRef(function(t,r){const n=ar(),o=Ze({props:t,name:"MuiPopper"});return K(vo,D({direction:n==null?void 0:n.direction},o,{ref:r}))}),Po=mo,ho=sr(),go=Cr({defaultTheme:ho,defaultClassName:"MuiBox-root",generateClassName:Tt.generate}),Co=go;function So(e){return Ke("MuiDivider",e)}const yo=Je("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]),Ao=yo,bo=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Xe(e){return`scale(${e}, ${e**2})`}const xo={entering:{opacity:1,transform:Xe(1)},entered:{opacity:1,transform:"none"}},He=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),Xt=C.exports.forwardRef(function(t,r){const{addEndListener:n,appear:o=!0,children:i,easing:a,in:s,onEnter:c,onEntered:u,onEntering:l,onExit:d,onExited:g,onExiting:p,style:h,timeout:f="auto",TransitionComponent:m=yr}=t,y=pe(t,bo),b=C.exports.useRef(),O=C.exports.useRef(),v=gr(),x=C.exports.useRef(null),$=ge(i.ref,r),R=ge(x,$),E=w=>B=>{if(w){const _=x.current;B===void 0?w(_):w(_,B)}},A=E(l),S=E((w,B)=>{br(w);const{duration:_,delay:L,easing:I}=yt({style:h,timeout:f,easing:a},{mode:"enter"});let G;f==="auto"?(G=v.transitions.getAutoHeightDuration(w.clientHeight),O.current=G):G=_,w.style.transition=[v.transitions.create("opacity",{duration:G,delay:L}),v.transitions.create("transform",{duration:He?G:G*.666,delay:L,easing:I})].join(","),c&&c(w,B)}),T=E(u),N=E(p),j=E(w=>{const{duration:B,delay:_,easing:L}=yt({style:h,timeout:f,easing:a},{mode:"exit"});let I;f==="auto"?(I=v.transitions.getAutoHeightDuration(w.clientHeight),O.current=I):I=B,w.style.transition=[v.transitions.create("opacity",{duration:I,delay:_}),v.transitions.create("transform",{duration:He?I:I*.666,delay:He?_:_||I*.333,easing:L})].join(","),w.style.opacity=0,w.style.transform=Xe(.75),d&&d(w)}),ee=E(g),te=w=>{f==="auto"&&(b.current=setTimeout(w,O.current||0)),n&&n(x.current,w)};return C.exports.useEffect(()=>()=>{clearTimeout(b.current)},[]),K(m,D({appear:o,in:s,nodeRef:x,onEnter:S,onEntered:T,onEntering:A,onExit:j,onExited:ee,onExiting:N,addEndListener:te,timeout:f==="auto"?null:f},y,{children:(w,B)=>C.exports.cloneElement(i,D({style:D({opacity:0,transform:Xe(.75),visibility:w==="exited"&&!s?"hidden":void 0},xo[w],h,i.props.style),ref:R},B))}))});Xt.muiSupportAuto=!0;const Bo=Xt;var wo={exports:{}};(function(e){function t(r){return r&&r.__esModule?r:{default:r}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(wo);var Ve={};const Oo=Mt(Xn);var At;function To(){return At||(At=1,function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.createSvgIcon}});var t=Oo}(Ve)),Ve}const Mo=Mt(cr);export{Co as B,Bo as G,Ro as I,Po as P,Mo as a,Or as b,qn as c,xr as d,Ao as e,So as g,wo as i,To as r,Rr as u};
