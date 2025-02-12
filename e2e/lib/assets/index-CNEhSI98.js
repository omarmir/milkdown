var z=n=>{throw TypeError(n)};var it=(n,t,e)=>t.has(n)||z("Cannot "+e);var U=(n,t,e)=>t.has(n)?z("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,e);var J=(n,t,e)=>(it(n,t,"access private method"),e);import{w as et}from"./meta-BqSMf3UR.js";import{$ as ut,h as A,b as q,N as ht}from"./utils-CEpiaGhY.js";import{h as N,u as nt,b as pt,c as ft,a as M,d as Ct}from"./html-DXgt5h_X.js";import{d as wt}from"./helper-CH8kiiTm.js";import{a as O,b as T}from"./hooks-B3FPlJye.js";import{c as mt}from"./clsx-B-dksMZM.js";import{t as rt}from"./index-C52YWX8N.js";import{c as D,o as W}from"./floating-ui.dom-DJfcjnnZ.js";import{C as ot,a as yt,f as j,b as E,d as bt,e as Z,h as Ht,j as xt,k as gt,l as Rt,n as $t,o as vt,p as It,q as Bt}from"./index-CrotLUU3.js";import{$ as _t}from"./_view-CWnVifb5.js";import{r as K}from"./remove-CSilE7kp.js";import{p as Q}from"./plus-B2gMg6Pu.js";const kt=N`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      d="M4.25 20.5C4.0375 20.5 3.85942 20.4281 3.71575 20.2843C3.57192 20.1404 3.5 19.9622 3.5 19.7498C3.5 19.5371 3.57192 19.359 3.71575 19.2155C3.85942 19.0718 4.0375 19 4.25 19H19.75C19.9625 19 20.1406 19.0719 20.2843 19.2158C20.4281 19.3596 20.5 19.5378 20.5 19.7502C20.5 19.9629 20.4281 20.141 20.2843 20.2845C20.1406 20.4282 19.9625 20.5 19.75 20.5H4.25ZM8.25 16.625C8.0375 16.625 7.85942 16.5531 7.71575 16.4093C7.57192 16.2654 7.5 16.0872 7.5 15.8748C7.5 15.6621 7.57192 15.484 7.71575 15.3405C7.85942 15.1968 8.0375 15.125 8.25 15.125H15.75C15.9625 15.125 16.1406 15.1969 16.2843 15.3408C16.4281 15.4846 16.5 15.6628 16.5 15.8753C16.5 16.0879 16.4281 16.266 16.2843 16.4095C16.1406 16.5532 15.9625 16.625 15.75 16.625H8.25ZM4.25 12.75C4.0375 12.75 3.85942 12.6781 3.71575 12.5343C3.57192 12.3904 3.5 12.2122 3.5 11.9998C3.5 11.7871 3.57192 11.609 3.71575 11.4655C3.85942 11.3218 4.0375 11.25 4.25 11.25H19.75C19.9625 11.25 20.1406 11.3219 20.2843 11.4658C20.4281 11.6096 20.5 11.7878 20.5 12.0003C20.5 12.2129 20.4281 12.391 20.2843 12.5345C20.1406 12.6782 19.9625 12.75 19.75 12.75H4.25ZM8.25 8.875C8.0375 8.875 7.85942 8.80308 7.71575 8.65925C7.57192 8.51542 7.5 8.33725 7.5 8.12475C7.5 7.91208 7.57192 7.734 7.71575 7.5905C7.85942 7.44683 8.0375 7.375 8.25 7.375H15.75C15.9625 7.375 16.1406 7.44692 16.2843 7.59075C16.4281 7.73458 16.5 7.91275 16.5 8.12525C16.5 8.33792 16.4281 8.516 16.2843 8.6595C16.1406 8.80317 15.9625 8.875 15.75 8.875H8.25ZM4.25 5C4.0375 5 3.85942 4.92808 3.71575 4.78425C3.57192 4.64042 3.5 4.46225 3.5 4.24975C3.5 4.03708 3.57192 3.859 3.71575 3.7155C3.85942 3.57183 4.0375 3.5 4.25 3.5H19.75C19.9625 3.5 20.1406 3.57192 20.2843 3.71575C20.4281 3.85958 20.5 4.03775 20.5 4.25025C20.5 4.46292 20.4281 4.641 20.2843 4.7845C20.1406 4.92817 19.9625 5 19.75 5H4.25Z"
    />
  </svg>
`,Mt=N`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      d="M4.25 20.5C4.0375 20.5 3.85942 20.4281 3.71575 20.2843C3.57192 20.1404 3.5 19.9622 3.5 19.7498C3.5 19.5371 3.57192 19.359 3.71575 19.2155C3.85942 19.0718 4.0375 19 4.25 19H19.75C19.9625 19 20.1406 19.0719 20.2843 19.2158C20.4281 19.3596 20.5 19.5378 20.5 19.7502C20.5 19.9629 20.4281 20.141 20.2843 20.2845C20.1406 20.4282 19.9625 20.5 19.75 20.5H4.25ZM4.25 16.625C4.0375 16.625 3.85942 16.5531 3.71575 16.4093C3.57192 16.2654 3.5 16.0872 3.5 15.8748C3.5 15.6621 3.57192 15.484 3.71575 15.3405C3.85942 15.1968 4.0375 15.125 4.25 15.125H13.75C13.9625 15.125 14.1406 15.1969 14.2843 15.3408C14.4281 15.4846 14.5 15.6628 14.5 15.8753C14.5 16.0879 14.4281 16.266 14.2843 16.4095C14.1406 16.5532 13.9625 16.625 13.75 16.625H4.25ZM4.25 12.75C4.0375 12.75 3.85942 12.6781 3.71575 12.5343C3.57192 12.3904 3.5 12.2122 3.5 11.9998C3.5 11.7871 3.57192 11.609 3.71575 11.4655C3.85942 11.3218 4.0375 11.25 4.25 11.25H19.75C19.9625 11.25 20.1406 11.3219 20.2843 11.4658C20.4281 11.6096 20.5 11.7878 20.5 12.0003C20.5 12.2129 20.4281 12.391 20.2843 12.5345C20.1406 12.6782 19.9625 12.75 19.75 12.75H4.25ZM4.25 8.875C4.0375 8.875 3.85942 8.80308 3.71575 8.65925C3.57192 8.51542 3.5 8.33725 3.5 8.12475C3.5 7.91208 3.57192 7.734 3.71575 7.5905C3.85942 7.44683 4.0375 7.375 4.25 7.375H13.75C13.9625 7.375 14.1406 7.44692 14.2843 7.59075C14.4281 7.73458 14.5 7.91275 14.5 8.12525C14.5 8.33792 14.4281 8.516 14.2843 8.6595C14.1406 8.80317 13.9625 8.875 13.75 8.875H4.25ZM4.25 5C4.0375 5 3.85942 4.92808 3.71575 4.78425C3.57192 4.64042 3.5 4.46225 3.5 4.24975C3.5 4.03708 3.57192 3.859 3.71575 3.7155C3.85942 3.57183 4.0375 3.5 4.25 3.5H19.75C19.9625 3.5 20.1406 3.57192 20.2843 3.71575C20.4281 3.85958 20.5 4.03775 20.5 4.25025C20.5 4.46292 20.4281 4.641 20.2843 4.7845C20.1406 4.92817 19.9625 5 19.75 5H4.25Z"
    />
  </svg>
`,At=N`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      d="M4.25 5C4.0375 5 3.85942 4.92808 3.71575 4.78425C3.57192 4.64042 3.5 4.46225 3.5 4.24975C3.5 4.03708 3.57192 3.859 3.71575 3.7155C3.85942 3.57183 4.0375 3.5 4.25 3.5H19.75C19.9625 3.5 20.1406 3.57192 20.2843 3.71575C20.4281 3.85958 20.5 4.03775 20.5 4.25025C20.5 4.46292 20.4281 4.641 20.2843 4.7845C20.1406 4.92817 19.9625 5 19.75 5H4.25ZM10.25 8.875C10.0375 8.875 9.85942 8.80308 9.71575 8.65925C9.57192 8.51542 9.5 8.33725 9.5 8.12475C9.5 7.91208 9.57192 7.734 9.71575 7.5905C9.85942 7.44683 10.0375 7.375 10.25 7.375H19.75C19.9625 7.375 20.1406 7.44692 20.2843 7.59075C20.4281 7.73458 20.5 7.91275 20.5 8.12525C20.5 8.33792 20.4281 8.516 20.2843 8.6595C20.1406 8.80317 19.9625 8.875 19.75 8.875H10.25ZM4.25 12.75C4.0375 12.75 3.85942 12.6781 3.71575 12.5343C3.57192 12.3904 3.5 12.2122 3.5 11.9998C3.5 11.7871 3.57192 11.609 3.71575 11.4655C3.85942 11.3218 4.0375 11.25 4.25 11.25H19.75C19.9625 11.25 20.1406 11.3219 20.2843 11.4658C20.4281 11.6096 20.5 11.7878 20.5 12.0003C20.5 12.2129 20.4281 12.391 20.2843 12.5345C20.1406 12.6782 19.9625 12.75 19.75 12.75H4.25ZM10.25 16.625C10.0375 16.625 9.85942 16.5531 9.71575 16.4093C9.57192 16.2654 9.5 16.0872 9.5 15.8748C9.5 15.6621 9.57192 15.484 9.71575 15.3405C9.85942 15.1968 10.0375 15.125 10.25 15.125H19.75C19.9625 15.125 20.1406 15.1969 20.2843 15.3408C20.4281 15.4846 20.5 15.6628 20.5 15.8753C20.5 16.0879 20.4281 16.266 20.2843 16.4095C20.1406 16.5532 19.9625 16.625 19.75 16.625H10.25ZM4.25 20.5C4.0375 20.5 3.85942 20.4281 3.71575 20.2843C3.57192 20.1404 3.5 19.9622 3.5 19.7498C3.5 19.5371 3.57192 19.359 3.71575 19.2155C3.85942 19.0718 4.0375 19 4.25 19H19.75C19.9625 19 20.1406 19.0719 20.2843 19.2158C20.4281 19.3596 20.5 19.5378 20.5 19.7502C20.5 19.9629 20.4281 20.141 20.2843 20.2845C20.1406 20.4282 19.9625 20.5 19.75 20.5H4.25Z"
    />
  </svg>
`,tt=N`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 16 16"
  >
    <path
      d="M3.5 9.83366C3.35833 9.83366 3.23961 9.78571 3.14383 9.68983C3.04794 9.59394 3 9.47516 3 9.33349C3 9.19171 3.04794 9.07299 3.14383 8.97733C3.23961 8.88155 3.35833 8.83366 3.5 8.83366H12.5C12.6417 8.83366 12.7604 8.8816 12.8562 8.97749C12.9521 9.07338 13 9.19216 13 9.33383C13 9.4756 12.9521 9.59433 12.8562 9.68999C12.7604 9.78577 12.6417 9.83366 12.5 9.83366H3.5ZM3.5 7.16699C3.35833 7.16699 3.23961 7.11905 3.14383 7.02316C3.04794 6.92727 3 6.80849 3 6.66683C3 6.52505 3.04794 6.40633 3.14383 6.31066C3.23961 6.21488 3.35833 6.16699 3.5 6.16699H12.5C12.6417 6.16699 12.7604 6.21494 12.8562 6.31083C12.9521 6.40671 13 6.52549 13 6.66716C13 6.80894 12.9521 6.92766 12.8562 7.02333C12.7604 7.1191 12.6417 7.16699 12.5 7.16699H3.5Z"
    />
  </svg>
`,Lt={renderButton:n=>{switch(n){case"add_row":return"+";case"add_col":return"+";case"delete_row":return"-";case"delete_col":return"-";case"align_col_left":return"left";case"align_col_center":return"center";case"align_col_right":return"right";case"col_drag_handle":return"=";case"row_drag_handle":return"="}}},Y=ut({...Lt},"tableBlockConfigCtx");et(Y,{displayName:"Config<table-block>",group:"TableBlock"});function G(n,t){for(let e=0;e<n.childCount;e++)if(n.child(e)===t)return e;return-1}function St(n,t){var e,o,r;if(t)try{const a=t.posAtCoords({left:n.clientX,top:n.clientY});if(!a)return;const c=a==null?void 0:a.inside;if(c==null||c<0)return;const s=t.state.doc.resolve(c),i=t.state.doc.nodeAt(c);if(!i)return;const p=["table_cell","table_header"],h=["table_row","table_header_row"],C=p.includes(i.type.name)?i:(e=j(l=>p.includes(l.type.name))(s))==null?void 0:e.node,b=(o=j(l=>h.includes(l.type.name))(s))==null?void 0:o.node,x=(r=j(l=>l.type.name==="table")(s))==null?void 0:r.node;if(!C||!b||!x)return;const y=G(b,C);return[G(x,b),y]}catch{return}}function F(n,[t,e]){const o=n.current;if(!o)return;const r=o.querySelectorAll("tr"),a=r[t];if(!a)return;const c=r[0];if(!c)return;const s=c.children[e];if(!s)return;const i=a.children[e];if(i)return{row:a,col:i,headerCol:s}}function qt(n,t,e){if(!t||!e)return;const{selection:o}=t.get(A).state;if(!(o instanceof ot))return;const{$from:r}=o,a=yt(r);if(!(!a||a.node!==e)){if(o.isColSelection()){const{$head:c}=o,s=c.index(c.depth-1);V({refs:n,index:[0,s],before:i=>{var p;(p=i.querySelector(".button-group"))==null||p.setAttribute("data-show","true")}});return}if(o.isRowSelection()){const{$head:c}=o,s=j(p=>p.type.name==="table_row"||p.type.name==="table_header_row")(c);if(!s)return;const i=G(a.node,s.node);P({refs:n,index:[i,0],before:p=>{var h;i>0&&((h=p.querySelector(".button-group"))==null||h.setAttribute("data-show","true"))}})}}}function V({refs:n,index:t,before:e,after:o}){const{contentWrapperRef:r,colHandleRef:a,hoverIndex:c}=n,s=a.current;if(!s)return;c.current=t;const i=F(r,t);if(!i)return;const{headerCol:p}=i;s.dataset.show="true",e&&e(s),D(p,s,{placement:"top"}).then(({x:h,y:C})=>{Object.assign(s.style,{left:`${h}px`,top:`${C}px`}),o&&o(s)})}function P({refs:n,index:t,before:e,after:o}){const{contentWrapperRef:r,rowHandleRef:a,hoverIndex:c}=n,s=a.current;if(!s)return;c.current=t;const i=F(r,t);if(!i)return;const{row:p}=i;s.dataset.show="true",e&&e(s),D(p,s,{placement:"left"}).then(({x:h,y:C})=>{Object.assign(s.style,{left:`${h}px`,top:`${C}px`}),o&&o(s)})}function at(n){const{dragPreviewRef:t,tableWrapperRef:e,contentWrapperRef:o,yLineHandleRef:r,xLineHandleRef:a,colHandleRef:c,rowHandleRef:s}=n,i=t.current;if(!i)return;const p=e.current;if(!p)return;const h=o.current;if(!h)return;const C=h.querySelector("tbody");if(!C)return;const b=i.querySelector("tbody");if(!b)return;const x=r.current;if(!x)return;const y=a.current;if(!y)return;const d=c.current;if(!d)return;const l=s.current;return l?{preview:i,wrapper:p,content:h,contentRoot:C,previewRoot:b,yHandle:x,xHandle:y,colHandle:d,rowHandle:l}:void 0}function st(n,t,e,o){const r=e==null?void 0:e.get(A);if(!(r!=null&&r.editable))return;t.stopPropagation(),t.dataTransfer&&(t.dataTransfer.effectAllowed="move");const a=at(n);a&&requestAnimationFrame(()=>{o(a)})}function Tt(n,t){return e=>{st(n,e,t,({preview:o,content:r,previewRoot:a,yHandle:c,xHandle:s,colHandle:i,rowHandle:p})=>{var f;const{hoverIndex:h,dragInfo:C}=n;s.dataset.displayType="indicator",c.dataset.show="false",i.dataset.show="false",(f=p.querySelector(".button-group"))==null||f.setAttribute("data-show","false");const[b]=h.current;C.current={startCoords:[e.clientX,e.clientY],startIndex:b,endIndex:b,type:"row"},o.dataset.direction="vertical";const x=r.querySelectorAll("tr");for(;a.firstChild;)a.removeChild(a.firstChild);const y=x[b];if(!y)return;a.appendChild(y.cloneNode(!0));const d=y.getBoundingClientRect().height,{width:l}=r.querySelector("tbody").getBoundingClientRect();Object.assign(o.style,{width:`${l}px`,height:`${d}px`}),o.dataset.show="true"})}}function Ot(n,t){return e=>{st(n,e,t,({preview:o,content:r,previewRoot:a,yHandle:c,xHandle:s,colHandle:i,rowHandle:p})=>{var f;const{hoverIndex:h,dragInfo:C}=n;s.dataset.show="false",c.dataset.displayType="indicator",p.dataset.show="false",(f=i.querySelector(".button-group"))==null||f.setAttribute("data-show","false");const[b,x]=h.current;C.current={startCoords:[e.clientX,e.clientY],startIndex:x,endIndex:x,type:"col"},o.dataset.direction="horizontal";const y=r.querySelectorAll("tr");for(;a.firstChild;)a.removeChild(a.firstChild);let d;Array.from(y).forEach(H=>{const u=H.children[x];if(!u)return;d===void 0&&(d=u.getBoundingClientRect().width);const w=u.parentElement.cloneNode(!1),I=u.cloneNode(!0);w.appendChild(I),a.appendChild(w)});const{height:l}=r.querySelector("tbody").getBoundingClientRect();Object.assign(o.style,{width:`${d}px`,height:`${l}px`}),o.dataset.show="true"})}}function Dt(n){return rt(t=>{const e=at(n);if(!e)return;const{preview:o,content:r,contentRoot:a,xHandle:c,yHandle:s}=e,{dragInfo:i,hoverIndex:p}=n;if(o.dataset.show==="false")return;const h=F(n.contentWrapperRef,p.current);if(!h)return;const C=a.querySelector("tr");if(!C)return;const b=i.current;if(!b||!a.offsetParent)return;const x=a.offsetParent.offsetTop,y=a.offsetParent.offsetLeft;if(b.type==="col"){const d=h.col.getBoundingClientRect().width,{left:l,width:f}=a.getBoundingClientRect(),H=y-l,u=t.clientX+H-d/2,w=t.clientX+H+d/2,[I]=b.startCoords,R=I<t.clientX?"right":"left";o.style.top=`${x}px`;const k=u<l+H-20?l+H-20:u>l+f+H-d+20?l+f+H-d+20:u;o.style.left=`${k}px`;const L=Array.from(C.children),_=L.find((B,m)=>{const v=B.getBoundingClientRect();let $=v.left+y-l,g=v.right+y-l;if(R==="right"){if($=$+v.width/2,g=g+v.width/2,$<=w&&g>=w||m===C.children.length-1&&w>g)return!0}else if($=$-v.width/2,g=g-v.width/2,$<=u&&g>=u||m===0&&u<$)return!0;return!1});if(_){const B=s.getBoundingClientRect().width,m=r.getBoundingClientRect(),v=L.indexOf(_);b.endIndex=v,D(_,s,{placement:R==="left"?"left":"right",middleware:[W(R==="left"?-1*B:0)]}).then(({x:$})=>{s.dataset.show="true",Object.assign(s.style,{height:`${m.height}px`,left:`${$}px`,top:`${x}px`})})}}else if(b.type==="row"){const d=h.row.getBoundingClientRect().height,{top:l,height:f}=a.getBoundingClientRect(),H=x-l,u=t.clientY+H-d/2,w=t.clientY+H+d/2,[I,R]=b.startCoords,k=R<t.clientY?"down":"up",L=u<l+H-20?l+H-20:u>l+f+H-d+20?l+f+H-d+20:u;o.style.top=`${L}px`,o.style.left=`${y}px`;const _=Array.from(a.querySelectorAll("tr")),B=_.find((m,v)=>{const $=m.getBoundingClientRect();let g=$.top+x-l,S=$.bottom+x-l;if(k==="down"){if(g=g+$.height/2,S=S+$.height/2,g<=w&&S>=w||v===_.length-1&&w>S)return!0}else if(g=g-$.height/2,S=S-$.height/2,g<=u&&S>=u||v===0&&u<g)return!0;return!1});if(B){const m=c.getBoundingClientRect().height,v=r.getBoundingClientRect(),$=_.indexOf(B);b.endIndex=$,D(B,c,{placement:k==="up"?"top":"bottom",middleware:[W(k==="up"?-1*m:0)]}).then(({y:g})=>{c.dataset.show="true",Object.assign(c.style,{width:`${v.width}px`,top:`${g}px`})})}}},20)}function Et(n,t,e){const{dragPreviewRef:o,yLineHandleRef:r,xLineHandleRef:a,dragInfo:c}=n,s=nt(),i=O(()=>s.current.getRootNode(),[s]),p=O(()=>Tt(n,t),[n]),h=O(()=>Ot(n,t),[n]);return pt(()=>{const C=()=>{const y=o.current;if(!y||y.dataset.show==="false")return;const d=y==null?void 0:y.querySelector("tbody");for(;d!=null&&d.firstChild;)d==null||d.removeChild(d.firstChild);y&&(y.dataset.show="false")},b=()=>{const y=o.current;if(!y)return;const d=r.current;if(!d)return;const l=a.current;if(!l)return;const f=c.current;if(!f||!t||y.dataset.show==="false"||!n.colHandleRef.current||!n.rowHandleRef.current||(d.dataset.show="false",l.dataset.show="false",f.startIndex===f.endIndex))return;const w=t.get(q),I={from:f.startIndex,to:f.endIndex,pos:((e==null?void 0:e())??0)+1};if(f.type==="col"){w.call(E.key,{pos:I.pos,index:f.startIndex}),w.call(bt.key,I);const R=[0,f.endIndex];V({refs:n,index:R})}else{w.call(Z.key,{pos:I.pos,index:f.startIndex}),w.call(Ht.key,I);const R=[f.endIndex,0];P({refs:n,index:R})}requestAnimationFrame(()=>{t.get(A).focus()})},x=Dt(n);return i.addEventListener("dragover",x),i.addEventListener("dragend",C),i.addEventListener("drop",b),()=>{i.removeEventListener("dragover",x),i.removeEventListener("dragend",C),i.removeEventListener("drop",b)}},[]),{dragRow:p,dragCol:h}}function Zt(n,t){return rt(e=>{if(!(t!=null&&t.editable))return;const{contentWrapperRef:o,yLineHandleRef:r,xLineHandleRef:a,colHandleRef:c,rowHandleRef:s,hoverIndex:i,lineHoverIndex:p}=n,h=r.current;if(!h)return;const C=a.current;if(!C)return;const b=o.current;if(!b)return;const x=s.current;if(!x)return;const y=c.current;if(!y)return;const d=St(e,t);if(!d)return;const l=F(o,d);if(!l)return;const[f,H]=d,u=l.col.getBoundingClientRect(),w=Math.abs(e.clientX-u.left)<8,I=Math.abs(u.right-e.clientX)<8,R=Math.abs(e.clientY-u.top)<8,k=Math.abs(u.bottom-e.clientY)<8,L=w||I||R||k,_=x.querySelector(".button-group"),B=y.querySelector(".button-group");if(_&&(_.dataset.show="false"),B&&(B.dataset.show="false"),L){const m=b.getBoundingClientRect();x.dataset.show="false",y.dataset.show="false",C.dataset.displayType="tool",h.dataset.displayType="tool";const v=h.getBoundingClientRect().width,$=C.getBoundingClientRect().height;w||I?(p.current[1]=w?H:H+1,D(l.col,h,{placement:w?"left":"right",middleware:[W(w?-1*v:0)]}).then(({x:g})=>{h.dataset.show="true",Object.assign(h.style,{height:`${m.height}px`,left:`${g}px`})})):h.dataset.show="false",d[0]!==0&&(R||k)?(p.current[0]=R?f:f+1,D(l.row,C,{placement:R?"top":"bottom",middleware:[W(R?-1*$:0)]}).then(({y:g})=>{C.dataset.show="true",Object.assign(C.style,{width:`${m.width}px`,top:`${g}px`})})):C.dataset.show="false";return}p.current=[-1,-1],h.dataset.show="false",C.dataset.show="false",x.dataset.show="true",y.dataset.show="true",P({refs:n,index:d}),V({refs:n,index:d}),i.current=d},20)}function jt(n){return()=>{const{rowHandleRef:t,colHandleRef:e,yLineHandleRef:o,xLineHandleRef:r}=n;setTimeout(()=>{const a=t.current;if(!a)return;const c=e.current;if(!c)return;const s=o.current;if(!s)return;const i=r.current;i&&(a.dataset.show="false",c.dataset.show="false",s.dataset.show="false",i.dataset.show="false")},200)}}function Nt(n,t){const e=O(()=>Zt(n,t),[]),o=O(()=>jt(n),[]);return{pointerMove:e,pointerLeave:o}}function Wt(n,t,e){const{xLineHandleRef:o,contentWrapperRef:r,colHandleRef:a,rowHandleRef:c,hoverIndex:s,lineHoverIndex:i}=n,p=T(()=>{var w;if(!t)return;const d=o.current;if(!d)return;const[l]=i.current;if(l<0||!t.get(A).editable)return;const f=Array.from(((w=r.current)==null?void 0:w.querySelectorAll("tr"))??[]),H=t.get(q),u=((e==null?void 0:e())??0)+1;f.length===l?(H.call(Z.key,{pos:u,index:l-1}),H.call(xt.key)):(H.call(Z.key,{pos:u,index:l}),H.call(gt.key)),H.call(Z.key,{pos:u,index:l}),d.dataset.show="false"},[]),h=T(()=>{var I,R;if(!t||!o.current)return;const[l,f]=i.current;if(f<0||!t.get(A).editable)return;const H=Array.from(((R=(I=r.current)==null?void 0:I.querySelector("tr"))==null?void 0:R.children)??[]),u=t.get(q),w=((e==null?void 0:e())??0)+1;H.length===f?(u.call(E.key,{pos:w,index:f-1}),u.call(Rt.key)):(u.call(E.key,{pos:w,index:f}),u.call($t.key)),u.call(E.key,{pos:w,index:f})},[]),C=T(()=>{var w;if(!t)return;const[d,l]=s.current,f=t.get(q),H=((e==null?void 0:e())??0)+1;f.call(E.key,{pos:H,index:l});const u=(w=a.current)==null?void 0:w.querySelector(".button-group");u&&(u.dataset.show=u.dataset.show==="true"?"false":"true")},[]),b=T(()=>{var w;if(!t)return;const[d,l]=s.current,f=t.get(q),H=((e==null?void 0:e())??0)+1;f.call(Z.key,{pos:H,index:d});const u=(w=c.current)==null?void 0:w.querySelector(".button-group");u&&d>0&&(u.dataset.show=u.dataset.show==="true"?"false":"true")},[]),x=T(d=>{if(!t||!t.get(A).editable)return;d.preventDefault(),d.stopPropagation(),t.get(q).call(vt.key),requestAnimationFrame(()=>{t.get(A).focus()})},[]),y=T(d=>l=>{if(!t||!t.get(A).editable)return;l.preventDefault(),l.stopPropagation(),t.get(q).call(It.key,d),requestAnimationFrame(()=>{t.get(A).focus()})},[]);return{onAddRow:p,onAddCol:h,selectCol:C,selectRow:b,deleteSelected:x,onAlign:y}}const lt=({view:n,ctx:t,getPos:e,node:o,config:r})=>{const a=nt(),c=M(),s=M(),i=M(),p=M(),h=M(),C=M(),b=M(),x=M([0,0]),y=M([-1,-1]),d=M(),l=O(()=>({dragPreviewRef:b,tableWrapperRef:C,contentWrapperRef:c,yLineHandleRef:h,xLineHandleRef:p,colHandleRef:s,rowHandleRef:i,hoverIndex:x,lineHoverIndex:y,dragInfo:d}),[]);Ct(()=>{const m=c.current;if(!m)return;const v=a.current.querySelector("[data-content-dom]");v&&m.appendChild(v),n!=null&&n.editable&&qt(l,t,o)},[]);const{pointerLeave:f,pointerMove:H}=Nt(l,n),{dragRow:u,dragCol:w}=Et(l,t,e),{onAddRow:I,onAddCol:R,selectCol:k,selectRow:L,deleteSelected:_,onAlign:B}=Wt(l,t,e);return N`
    <host
      class=${mt(!(n!=null&&n.editable)&&"readonly")}
      ondragstart=${m=>m.preventDefault()}
      ondragover=${m=>m.preventDefault()}
      ondragleave=${m=>m.preventDefault()}
      onpointermove=${H}
      onpointerleave=${f}
    >
      <button
        type="button"
        data-show="false"
        contenteditable="false"
        draggable="true"
        data-role="col-drag-handle"
        class="handle cell-handle"
        ondragstart=${w}
        onclick=${k}
        onpointerdown=${m=>m.stopPropagation()}
        onpointermove=${m=>m.stopPropagation()}
        ref=${s}
      >
        ${r==null?void 0:r.renderButton("col_drag_handle")}
        <div
          data-show="false"
          class="button-group"
          onpointermove=${m=>m.stopPropagation}
        >
          <button type="button" onpointerdown=${B("left")}>
            ${r==null?void 0:r.renderButton("align_col_left")}
          </button>
          <button type="button" onpointerdown=${B("center")}>
            ${r==null?void 0:r.renderButton("align_col_center")}
          </button>
          <button type="button" onpointerdown=${B("right")}>
            ${r==null?void 0:r.renderButton("align_col_right")}
          </button>
          <button type="button" onpointerdown=${_}>
            ${r==null?void 0:r.renderButton("delete_col")}
          </button>
        </div>
      </button>
      <button
        type="button"
        data-show="false"
        contenteditable="false"
        draggable="true"
        data-role="row-drag-handle"
        class="handle cell-handle"
        ondragstart=${u}
        onclick=${L}
        onpointerdown=${m=>m.stopPropagation()}
        onpointermove=${m=>m.stopPropagation()}
        ref=${i}
      >
        ${r==null?void 0:r.renderButton("row_drag_handle")}
        <div
          data-show="false"
          class="button-group"
          onpointermove=${m=>m.stopPropagation}
        >
          <button type="button" onpointerdown=${_}>
            ${r==null?void 0:r.renderButton("delete_row")}
          </button>
        </div>
      </button>
      <div class="table-wrapper" ref=${C}>
        <div
          data-show="false"
          class="drag-preview"
          data-direction="vertical"
          ref=${b}
        >
          <table>
            <tbody></tbody>
          </table>
        </div>
        <div
          data-show="false"
          contenteditable="false"
          data-display-type="tool"
          data-role="x-line-drag-handle"
          class="handle line-handle"
          onpointermove=${m=>m.stopPropagation}
          ref=${p}
        >
          <button type="button" onclick=${I} class="add-button">
            ${r==null?void 0:r.renderButton("add_row")}
          </button>
        </div>
        <div
          data-show="false"
          contenteditable="false"
          data-display-type="tool"
          data-role="y-line-drag-handle"
          class="handle line-handle"
          onpointermove=${m=>m.stopPropagation}
          ref=${h}
        >
          <button type="button" onclick=${R} class="add-button">
            ${r==null?void 0:r.renderButton("add_col")}
          </button>
        </div>
        <table ref=${c} class="children"></table>
      </div>
    </host>
  `};lt.props={getPos:Function,view:Object,ctx:Object,node:Object,config:Object};const Xt=ft(lt);var X,dt;class Yt{constructor(t,e,o,r){U(this,X);this.ctx=t,this.node=e,this.view=o,this.getPos=r;const a=document.createElement("milkdown-table-block");this.dom=a,a.view=o,a.ctx=t,a.getPos=r,a.node=e,a.config=t.get(Y.key);const c=document.createElement("tbody");this.contentDOM=c,c.setAttribute("data-content-dom","true"),c.classList.add("content-dom"),a.appendChild(c)}update(t){return t.type!==this.node.type||t.sameMarkup(this.node)&&t.content.eq(this.node.content)?!1:(this.node=t,this.dom.node=t,!0)}stopEvent(t){if(t.type==="drop"||t.type.startsWith("drag"))return!0;if(t.type==="mousedown"){if(t.target instanceof HTMLButtonElement)return!0;const e=t.target;if(e instanceof HTMLElement&&(e.closest("th")||e.closest("td"))){const o=t;return J(this,X,dt).call(this,o)}}return!1}ignoreMutation(t){return!this.dom||!this.contentDOM?!0:t.type==="selection"?!1:this.contentDOM===t.target&&t.type==="attributes"?!0:!this.contentDOM.contains(t.target)}}X=new WeakSet,dt=function(t){const e=this.view;if(!e.editable)return!1;const{state:o,dispatch:r}=e,a=e.posAtCoords({left:t.clientX,top:t.clientY});if(!a)return!1;const c=o.doc.resolve(a.inside),s=j(h=>h.type.name==="table_cell"||h.type.name==="table_header")(c);if(!s)return!1;const{from:i}=s,p=ht.create(o.doc,i+1);return o.selection.eq(p)?!1:(o.selection instanceof ot?setTimeout(()=>{r(o.tr.setSelection(p).scrollIntoView())},20):requestAnimationFrame(()=>{r(o.tr.setSelection(p).scrollIntoView())}),!0)};wt("milkdown-table-block",Xt);const ct=_t(Bt.node,n=>(t,e,o)=>new Yt(n,t,e,o));et(ct,{displayName:"NodeView<table-block>",group:"TableBlock"});const Ft=[Y,ct],ae=(n,t)=>{n.config(e=>{e.update(Y.key,o=>({...o,renderButton:r=>{var a,c,s,i,p,h,C,b,x;switch(r){case"add_row":return((a=t==null?void 0:t.addRowIcon)==null?void 0:a.call(t))??Q;case"add_col":return((c=t==null?void 0:t.addColIcon)==null?void 0:c.call(t))??Q;case"delete_row":return((s=t==null?void 0:t.deleteRowIcon)==null?void 0:s.call(t))??K;case"delete_col":return((i=t==null?void 0:t.deleteColIcon)==null?void 0:i.call(t))??K;case"align_col_left":return((p=t==null?void 0:t.alignLeftIcon)==null?void 0:p.call(t))??Mt;case"align_col_center":return((h=t==null?void 0:t.alignCenterIcon)==null?void 0:h.call(t))??kt;case"align_col_right":return((C=t==null?void 0:t.alignRightIcon)==null?void 0:C.call(t))??At;case"col_drag_handle":return((b=t==null?void 0:t.colDragHandleIcon)==null?void 0:b.call(t))??tt;case"row_drag_handle":return((x=t==null?void 0:t.rowDragHandleIcon)==null?void 0:x.call(t))??tt}}}))}).use(Ft)};export{ae as defineFeature};
