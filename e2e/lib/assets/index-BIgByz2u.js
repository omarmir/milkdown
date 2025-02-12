var Wt=o=>{throw TypeError(o)};var Tt=(o,t,e)=>t.has(o)||Wt("Cannot "+e);var s=(o,t,e)=>(Tt(o,t,"read from private field"),e?e.call(o):t.get(o)),p=(o,t,e)=>t.has(o)?Wt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(o):t.set(o,e),h=(o,t,e,a)=>(Tt(o,t,"write to private field"),a?a.call(o,e):t.set(o,e),e),Zt=(o,t,e)=>(Tt(o,t,"access private method"),e);import{i as Ie,a as xe,d as ee}from"./index-CiowrKDz.js";import{h as x,c as se,u as Le,a as ne,b as Rt}from"./html-DXgt5h_X.js";import{a as Kt,u as _e,b as Y}from"./hooks-B3FPlJye.js";import{$ as gt,q as Be,N as jt,h as I,f as ae,P as oe,g as re,T as Ot,av as Pe,aw as Se,R as le,ax as J,ay as $e,az as fe,aA as Te,aB as Ze,W as Ee,aq as Re}from"./utils-CEpiaGhY.js";import{a as De,i as Ae}from"./schema-CuQImLLf.js";import{c as Oe}from"./code-BMQkJ0yg.js";import{f as ie,c as Ne}from"./index-CrotLUU3.js";import{d as Fe}from"./index-4Op9ycnU.js";import{f as he,o as de,c as ce}from"./floating-ui.dom-DJfcjnnZ.js";import{p as ze}from"./index-7N1qrWr1.js";import{p as qe}from"./plus-B2gMg6Pu.js";import{t as Ge}from"./index-C52YWX8N.js";import"./meta-BqSMf3UR.js";const O=typeof navigator<"u"?navigator:null,Qt=typeof document<"u"?document:null,Q=O&&O.userAgent||"",Dt=/Edge\/(\d+)/.exec(Q),ue=/MSIE \d/.exec(Q),At=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Q),Bt=!!(ue||At||Dt),Ue=ue?document.documentMode:At?+At[1]:Dt?+Dt[1]:0,We=!Bt&&/gecko\/(\d+)/i.test(Q);We&&+(/Firefox\/(\d+)/.exec(Q)||[0,0])[1];const Yt=!Bt&&/Chrome\/(\d+)/.exec(Q);Yt&&+Yt[1];const Ke=!Bt&&!!O&&/Apple Computer/.test(O.vendor),pe=Ke&&(/Mobile\/\w+/.test(Q)||!!O&&O.maxTouchPoints>2);pe||O&&/Mac/.test(O.platform);const je=!!Qt&&"webkitFontSmoothing"in Qt.documentElement.style,Qe=je?+(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent)||[0,0])[1]:0,Ye=x`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_977_8070)">
      <path
        d="M4 10.5C3.17 10.5 2.5 11.17 2.5 12C2.5 12.83 3.17 13.5 4 13.5C4.83 13.5 5.5 12.83 5.5 12C5.5 11.17 4.83 10.5 4 10.5ZM4 4.5C3.17 4.5 2.5 5.17 2.5 6C2.5 6.83 3.17 7.5 4 7.5C4.83 7.5 5.5 6.83 5.5 6C5.5 5.17 4.83 4.5 4 4.5ZM4 16.5C3.17 16.5 2.5 17.18 2.5 18C2.5 18.82 3.18 19.5 4 19.5C4.82 19.5 5.5 18.82 5.5 18C5.5 17.18 4.83 16.5 4 16.5ZM8 19H20C20.55 19 21 18.55 21 18C21 17.45 20.55 17 20 17H8C7.45 17 7 17.45 7 18C7 18.55 7.45 19 8 19ZM8 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H8C7.45 11 7 11.45 7 12C7 12.55 7.45 13 8 13ZM7 6C7 6.55 7.45 7 8 7H20C20.55 7 21 6.55 21 6C21 5.45 20.55 5 20 5H8C7.45 5 7 5.45 7 6Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_977_8070">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,Je=x`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_977_7900)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19 13H5C4.45 13 4 12.55 4 12C4 11.45 4.45 11 5 11H19C19.55 11 20 11.45 20 12C20 12.55 19.55 13 19 13Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_977_7900">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,Xe=x`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_992_5553)">
      <path
        d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM12 17H14V7H10V9H12V17Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_992_5553">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,ts=x`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_992_5559)">
      <path
        d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM15 15H11V13H13C14.1 13 15 12.11 15 11V9C15 7.89 14.1 7 13 7H9V9H13V11H11C9.9 11 9 11.89 9 13V17H15V15Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_992_5559">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,es=x`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_992_5565)">
      <path
        d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM15 15V13.5C15 12.67 14.33 12 13.5 12C14.33 12 15 11.33 15 10.5V9C15 7.89 14.1 7 13 7H9V9H13V11H11V13H13V15H9V17H13C14.1 17 15 16.11 15 15Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_992_5565">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,ss=x`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_977_7757)">
      <path
        d="M19.04 3H5.04004C3.94004 3 3.04004 3.9 3.04004 5V19C3.04004 20.1 3.94004 21 5.04004 21H19.04C20.14 21 21.04 20.1 21.04 19V5C21.04 3.9 20.14 3 19.04 3ZM19.04 19H5.04004V5H19.04V19ZM13.04 17H15.04V7H13.04V11H11.04V7H9.04004V13H13.04V17Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_977_7757">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,ns=x`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_977_7760)">
      <path
        d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM15 15V13C15 11.89 14.1 11 13 11H11V9H15V7H9V13H13V15H9V17H13C14.1 17 15 16.11 15 15Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_977_7760">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,as=x`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_977_7763)">
      <path
        d="M11 17H13C14.1 17 15 16.11 15 15V13C15 11.89 14.1 11 13 11H11V9H15V7H11C9.9 7 9 7.89 9 9V15C9 16.11 9.9 17 11 17ZM11 13H13V15H11V13ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_977_7763">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,os=x`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_971_7680)">
      <path
        d="M11 18C11 19.1 10.1 20 9 20C7.9 20 7 19.1 7 18C7 16.9 7.9 16 9 16C10.1 16 11 16.9 11 18ZM9 10C7.9 10 7 10.9 7 12C7 13.1 7.9 14 9 14C10.1 14 11 13.1 11 12C11 10.9 10.1 10 9 10ZM9 4C7.9 4 7 4.9 7 6C7 7.1 7.9 8 9 8C10.1 8 11 7.1 11 6C11 4.9 10.1 4 9 4ZM15 8C16.1 8 17 7.1 17 6C17 4.9 16.1 4 15 4C13.9 4 13 4.9 13 6C13 7.1 13.9 8 15 8ZM15 10C13.9 10 13 10.9 13 12C13 13.1 13.9 14 15 14C16.1 14 17 13.1 17 12C17 10.9 16.1 10 15 10ZM15 16C13.9 16 13 16.9 13 18C13 19.1 13.9 20 15 20C16.1 20 17 19.1 17 18C17 16.9 16.1 16 15 16Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_971_7680">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,rs=x`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_977_8067)">
      <path
        d="M8 7H20C20.55 7 21 6.55 21 6C21 5.45 20.55 5 20 5H8C7.45 5 7 5.45 7 6C7 6.55 7.45 7 8 7ZM20 17H8C7.45 17 7 17.45 7 18C7 18.55 7.45 19 8 19H20C20.55 19 21 18.55 21 18C21 17.45 20.55 17 20 17ZM20 11H8C7.45 11 7 11.45 7 12C7 12.55 7.45 13 8 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11ZM4.5 16H2.5C2.22 16 2 16.22 2 16.5C2 16.78 2.22 17 2.5 17H4V17.5H3.5C3.22 17.5 3 17.72 3 18C3 18.28 3.22 18.5 3.5 18.5H4V19H2.5C2.22 19 2 19.22 2 19.5C2 19.78 2.22 20 2.5 20H4.5C4.78 20 5 19.78 5 19.5V16.5C5 16.22 4.78 16 4.5 16ZM2.5 5H3V7.5C3 7.78 3.22 8 3.5 8C3.78 8 4 7.78 4 7.5V4.5C4 4.22 3.78 4 3.5 4H2.5C2.22 4 2 4.22 2 4.5C2 4.78 2.22 5 2.5 5ZM4.5 10H2.5C2.22 10 2 10.22 2 10.5C2 10.78 2.22 11 2.5 11H3.8L2.12 12.96C2.04 13.05 2 13.17 2 13.28V13.5C2 13.78 2.22 14 2.5 14H4.5C4.78 14 5 13.78 5 13.5C5 13.22 4.78 13 4.5 13H3.2L4.88 11.04C4.96 10.95 5 10.83 5 10.72V10.5C5 10.22 4.78 10 4.5 10Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_977_8067">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,ls=x`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_977_7897)">
      <path
        d="M7.17 17C7.68 17 8.15 16.71 8.37 16.26L9.79 13.42C9.93 13.14 10 12.84 10 12.53V8C10 7.45 9.55 7 9 7H5C4.45 7 4 7.45 4 8V12C4 12.55 4.45 13 5 13H7L5.97 15.06C5.52 15.95 6.17 17 7.17 17ZM17.17 17C17.68 17 18.15 16.71 18.37 16.26L19.79 13.42C19.93 13.14 20 12.84 20 12.53V8C20 7.45 19.55 7 19 7H15C14.45 7 14 7.45 14 8V12C14 12.55 14.45 13 15 13H17L15.97 15.06C15.52 15.95 16.17 17 17.17 17Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_977_7897">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,is=x`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_977_8078)">
      <path
        d="M20 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H20C21.1 21 22 20.1 22 19V5C22 3.9 21.1 3 20 3ZM20 5V8H5V5H20ZM15 19H10V10H15V19ZM5 10H8V19H5V10ZM17 19V10H20V19H17Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_977_8078">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,hs=x`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_992_5547)">
      <path
        d="M5 5.5C5 6.33 5.67 7 6.5 7H10.5V17.5C10.5 18.33 11.17 19 12 19C12.83 19 13.5 18.33 13.5 17.5V7H17.5C18.33 7 19 6.33 19 5.5C19 4.67 18.33 4 17.5 4H6.5C5.67 4 5 4.67 5 5.5Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_992_5547">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,ds=x`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path
      d="M5.66936 16.3389L9.39244 12.6158C9.54115 12.4671 9.71679 12.3937 9.91936 12.3957C10.1219 12.3976 10.2975 12.4761 10.4463 12.6312C10.5847 12.7823 10.654 12.9585 10.654 13.1599C10.654 13.3613 10.5847 13.5363 10.4463 13.6851L6.32704 17.8197C6.14627 18.0004 5.93538 18.0908 5.69436 18.0908C5.45333 18.0908 5.24243 18.0004 5.06166 17.8197L3.01744 15.7754C2.87899 15.637 2.81136 15.4629 2.81456 15.2533C2.81776 15.0437 2.88859 14.8697 3.02706 14.7312C3.16551 14.5928 3.34008 14.5235 3.55076 14.5235C3.76144 14.5235 3.93494 14.5928 4.07126 14.7312L5.66936 16.3389ZM5.66936 8.72359L9.39244 5.00049C9.54115 4.85177 9.71679 4.77838 9.91936 4.78031C10.1219 4.78223 10.2975 4.86075 10.4463 5.01586C10.5847 5.16691 10.654 5.34314 10.654 5.54454C10.654 5.74592 10.5847 5.92097 10.4463 6.06969L6.32704 10.2043C6.14627 10.3851 5.93538 10.4755 5.69436 10.4755C5.45333 10.4755 5.24243 10.3851 5.06166 10.2043L3.01744 8.16009C2.87899 8.02162 2.81136 7.84759 2.81456 7.63799C2.81776 7.42837 2.88859 7.25433 3.02706 7.11586C3.16551 6.97741 3.34008 6.90819 3.55076 6.90819C3.76144 6.90819 3.93494 6.97741 4.07126 7.11586L5.66936 8.72359ZM13.7597 16.5581C13.5472 16.5581 13.3691 16.4862 13.2253 16.3424C13.0816 16.1986 13.0097 16.0204 13.0097 15.8078C13.0097 15.5952 13.0816 15.4171 13.2253 15.2735C13.3691 15.13 13.5472 15.0582 13.7597 15.0582H20.7597C20.9722 15.0582 21.1503 15.1301 21.2941 15.2739C21.4378 15.4177 21.5097 15.5959 21.5097 15.8085C21.5097 16.0211 21.4378 16.1992 21.2941 16.3427C21.1503 16.4863 20.9722 16.5581 20.7597 16.5581H13.7597ZM13.7597 8.94276C13.5472 8.94276 13.3691 8.87085 13.2253 8.72704C13.0816 8.58324 13.0097 8.40504 13.0097 8.19244C13.0097 7.97985 13.0816 7.80177 13.2253 7.65819C13.3691 7.5146 13.5472 7.44281 13.7597 7.44281H20.7597C20.9722 7.44281 21.1503 7.51471 21.2941 7.65851C21.4378 7.80233 21.5097 7.98053 21.5097 8.19311C21.5097 8.40571 21.4378 8.5838 21.2941 8.72739C21.1503 8.87097 20.9722 8.94276 20.7597 8.94276H13.7597Z"
    />
  </svg>
`;function Pt(o,t){return Object.assign(o,{meta:{package:"@milkdown/plugin-block",...t}}),o}const cs=o=>!ie(e=>e.type.name==="table")(o),dt=gt({filterNodes:cs},"blockConfig");Pt(dt,{displayName:"Ctx<blockConfig>"});function us(o,t,e){var n;if(!o.dom.parentElement)return null;try{const r=(n=o.posAtCoords({left:t.x,top:t.y}))==null?void 0:n.inside;if(r==null||r<0)return null;let i=o.state.doc.resolve(r),d=o.state.doc.nodeAt(r),m=o.nodeDOM(r);const v=V=>{const _=i.depth>=1&&i.index(i.depth)===0;if(!(V||_))return;const M=i.before(i.depth);d=o.state.doc.nodeAt(M),m=o.nodeDOM(M),i=o.state.doc.resolve(M),e(i,d)||v(!0)},k=e(i,d);return v(!k),!m||!d?null:{node:d,$pos:i,el:m}}catch{return null}}let Jt=null;function ps(){return Jt||(Jt=document.implementation.createHTMLDocument("title"))}const ms={thead:["table"],tbody:["table"],tfoot:["table"],caption:["table"],colgroup:["table"],col:["table","colgroup"],tr:["table","tbody"],td:["table","tbody","tr"],th:["table","tbody","tr"]};function Cs(o,t){const e=[];let{openStart:a,openEnd:n,content:r}=t;for(;a>1&&n>1&&r.childCount===1&&r.firstChild.childCount===1;){a-=1,n-=1;const y=r.firstChild;e.push(y.type.name,y.attrs!==y.type.defaultAttrs?y.attrs:null),r=y.content}const i=o.someProp("clipboardSerializer")||Be.fromSchema(o.state.schema),d=ps(),m=d.createElement("div");m.appendChild(i.serializeFragment(r,{document:d}));let v=m.firstChild,k,V=0;for(;v&&v.nodeType===1&&(k=ms[v.nodeName.toLowerCase()]);){for(let y=k.length-1;y>=0;y--){const M=d.createElement(k[y]);for(;m.firstChild;)M.appendChild(m.firstChild);m.appendChild(M),V++}v=m.firstChild}v&&v.nodeType===1&&v.setAttribute("data-pm-slice",`${a} ${n}${V?` -${V}`:""} ${JSON.stringify(e)}`);const _=o.someProp("clipboardTextSerializer",y=>y(t,o))||t.content.textBetween(0,t.content.size,`

`);return{dom:m,text:_}}const Xt=Bt&&Ue<15||pe&&Qe<604,te=20;var X,ut,z,P,tt,S,Z,me,ct,q,G,pt,et,st,nt,mt,U;class ws{constructor(){p(this,Z);p(this,X);p(this,ut);p(this,z);p(this,P);p(this,tt);p(this,S);p(this,q);p(this,G);p(this,pt);p(this,et);p(this,st);p(this,nt);p(this,mt);p(this,U);h(this,ut,()=>{if(!s(this,P))return null;const t=s(this,P),e=s(this,Z,ct);if(e&&jt.isSelectable(t.node)){const a=jt.create(e.state.doc,t.$pos.pos);return e.dispatch(e.state.tr.setSelection(a)),e.focus(),h(this,z,a),a}return null}),h(this,z,null),h(this,P,null),h(this,tt,void 0),h(this,S,!1),h(this,G,()=>{var t;(t=s(this,q))==null||t.call(this,{type:"hide"}),h(this,P,null)}),h(this,pt,t=>{var e;h(this,P,t),(e=s(this,q))==null||e.call(this,{type:"show",active:t})}),this.bind=(t,e)=>{h(this,X,t),h(this,q,e)},this.addEvent=t=>{t.addEventListener("mousedown",s(this,et)),t.addEventListener("mouseup",s(this,st)),t.addEventListener("dragstart",s(this,nt))},this.removeEvent=t=>{t.removeEventListener("mousedown",s(this,et)),t.removeEventListener("mouseup",s(this,st)),t.removeEventListener("dragstart",s(this,nt))},this.unBind=()=>{h(this,q,void 0)},h(this,et,()=>{var t;h(this,tt,(t=s(this,P))==null?void 0:t.el.getBoundingClientRect()),s(this,ut).call(this)}),h(this,st,()=>{if(!s(this,S)){requestAnimationFrame(()=>{var t;s(this,tt)&&((t=s(this,Z,ct))==null||t.focus())});return}h(this,S,!1),h(this,z,null)}),h(this,nt,t=>{var n;h(this,S,!0);const e=s(this,Z,ct);if(!e)return;e.dom.dataset.dragging="true";const a=s(this,z);if(t.dataTransfer&&a){const r=a.content();t.dataTransfer.effectAllowed="copyMove";const{dom:i,text:d}=Cs(e,r);t.dataTransfer.clearData(),t.dataTransfer.setData(Xt?"Text":"text/html",i.innerHTML),Xt||t.dataTransfer.setData("text/plain",d);const m=(n=s(this,P))==null?void 0:n.el;m&&t.dataTransfer.setDragImage(m,0,0),e.dragging={slice:r,move:!0}}}),this.keydownCallback=t=>(s(this,G).call(this),h(this,S,!1),t.dom.dataset.dragging="false",!1),h(this,mt,Ge((t,e)=>{if(!t.editable)return;const a=t.dom.getBoundingClientRect(),n=a.left+a.width/2;if(!(t.root.elementFromPoint(n,e.clientY)instanceof Element)){s(this,G).call(this);return}const i=s(this,Z,me);if(!i)return;const d=us(t,{x:n,y:e.clientY},i);if(!d){s(this,G).call(this);return}s(this,pt).call(this,d)},200)),this.mousemoveCallback=(t,e)=>(t.composing||!t.editable||s(this,mt).call(this,t,e),!1),this.dragoverCallback=(t,e)=>{var a;if(s(this,S)){const n=(a=s(this,Z,ct))==null?void 0:a.dom.parentElement;if(!n)return!1;const r=n.scrollHeight>n.clientHeight,i=n.getBoundingClientRect();if(r){if(n.scrollTop>0&&Math.abs(e.y-i.y)<te){const v=n.scrollTop>10?n.scrollTop-10:0;return n.scrollTop=v,!1}const d=Math.round(t.dom.getBoundingClientRect().height);if(Math.round(n.scrollTop+i.height)<d&&Math.abs(e.y-(i.height+i.y))<te){const v=n.scrollTop+10;return n.scrollTop=v,!1}}}return!1},this.dragenterCallback=t=>{t.dragging&&(h(this,S,!0),t.dom.dataset.dragging="true")},this.dragleaveCallback=(t,e)=>{const a=e.clientX,n=e.clientY;(a<0||n<0||a>window.innerWidth||n>window.innerHeight)&&(h(this,P,null),s(this,U).call(this,t))},this.dropCallback=t=>(s(this,U).call(this,t),!1),this.dragendCallback=t=>{s(this,U).call(this,t)},h(this,U,t=>{h(this,S,!1),t.dom.dataset.dragging="false"})}}X=new WeakMap,ut=new WeakMap,z=new WeakMap,P=new WeakMap,tt=new WeakMap,S=new WeakMap,Z=new WeakSet,me=function(){var t;return(t=s(this,X))==null?void 0:t.get(dt.key).filterNodes},ct=function(){var t;return(t=s(this,X))==null?void 0:t.get(I)},q=new WeakMap,G=new WeakMap,pt=new WeakMap,et=new WeakMap,st=new WeakMap,nt=new WeakMap,mt=new WeakMap,U=new WeakMap;const Nt=gt(new ws,"blockService");Pt(dt,{displayName:"Ctx<blockService>"});const Ft=gt({},"blockSpec");Pt(dt,{displayName:"Ctx<blockSpec>"});const zt=ae(o=>{const t=new oe("MILKDOWN_BLOCK"),e=o.get(Nt.key),a=o.get(Ft.key);return new re({key:t,...a,props:{...a.props,handleDOMEvents:{drop:n=>e.dropCallback(n),pointermove:(n,r)=>e.mousemoveCallback(n,r),keydown:n=>e.keydownCallback(n),dragover:(n,r)=>e.dragoverCallback(n,r),dragleave:(n,r)=>e.dragleaveCallback(n,r),dragenter:n=>e.dragenterCallback(n),dragend:n=>e.dragendCallback(n)}}})});Pt(zt,{displayName:"Prose<block>"});var L,T,W,K,at,Ct,wt,ot,rt,lt,Lt,Ce;class vs{constructor(t){p(this,Lt);p(this,L);p(this,T);p(this,W);p(this,K);p(this,at);p(this,Ct);p(this,wt);p(this,ot);p(this,rt);p(this,lt);h(this,K,null),h(this,at,!1),this.update=()=>{requestAnimationFrame(()=>{if(!s(this,at))try{Zt(this,Lt,Ce).call(this),h(this,at,!0)}catch{}})},this.destroy=()=>{var e,a;(e=s(this,W))==null||e.unBind(),(a=s(this,W))==null||a.removeEvent(s(this,L)),s(this,L).remove()},this.show=e=>{const a=e.el,n=s(this,T).get(I).dom,r={ctx:s(this,T),active:e,editorDom:n,blockDom:s(this,L)},i={contextElement:a,getBoundingClientRect:()=>s(this,rt)?s(this,rt).call(this,r):a.getBoundingClientRect()},d=[he()];if(s(this,ot)){const m=s(this,ot).call(this,r),v=de(m);d.push(v)}ce(i,s(this,L),{placement:s(this,lt)?s(this,lt).call(this,r):"left",middleware:[...d,...s(this,Ct)],...s(this,wt)}).then(({x:m,y:v})=>{Object.assign(s(this,L).style,{left:`${m}px`,top:`${v}px`}),s(this,L).dataset.show="true"})},this.hide=()=>{s(this,L).dataset.show="false"},h(this,T,t.ctx),h(this,L,t.content),h(this,ot,t.getOffset),h(this,rt,t.getPosition),h(this,lt,t.getPlacement),h(this,Ct,t.middleware??[]),h(this,wt,t.floatingUIOptions??{}),this.hide()}get active(){return s(this,K)}}L=new WeakMap,T=new WeakMap,W=new WeakMap,K=new WeakMap,at=new WeakMap,Ct=new WeakMap,wt=new WeakMap,ot=new WeakMap,rt=new WeakMap,lt=new WeakMap,Lt=new WeakSet,Ce=function(){var a;(a=s(this,T).get(I).dom.parentElement)==null||a.appendChild(s(this,L));const e=s(this,T).get(Nt.key);e.bind(s(this,T),n=>{n.type==="hide"?(this.hide(),h(this,K,null)):n.type==="show"&&(this.show(n.active),h(this,K,n.active))}),h(this,W,e),s(this,W).addEvent(s(this,L)),s(this,L).draggable=!0};const St=[Ft,dt,Nt,zt];St.key=Ft.key;St.pluginKey=zt.key;function bs(o){const t=gt({},`${o}_SLASH_SPEC`),e=ae(n=>{const r=n.get(t.key);return new re({key:new oe(`${o}_SLASH`),...r})}),a=[t,e];return a.key=t.key,a.pluginKey=e.key,t.meta={package:"@milkdown/plugin-slash",displayName:`Ctx<slashSpec>|${o}`},e.meta={package:"@milkdown/plugin-slash",displayName:`Prose<slash>|${o}`},a}var it,vt,bt,Ht,j,yt,Mt,kt,_t,we;class Hs{constructor(t){p(this,_t);p(this,it);p(this,vt);p(this,bt);p(this,Ht);p(this,j);p(this,yt);p(this,Mt);p(this,kt);h(this,it,!1),this.onShow=()=>{},this.onHide=()=>{},h(this,kt,(e,a)=>{var y;const{state:n,composing:r}=e,{selection:i,doc:d}=n,{ranges:m}=i,v=Math.min(...m.map(M=>M.$from.pos)),k=Math.max(...m.map(M=>M.$to.pos)),V=a&&a.doc.eq(d)&&a.selection.eq(i);if(s(this,it)||((y=e.dom.parentElement)==null||y.appendChild(this.element),h(this,it,!0)),r||V)return;if(!s(this,yt).call(this,e,a)){this.hide();return}ce({getBoundingClientRect:()=>ze(e,v,k)},this.element,{placement:"bottom-start",middleware:[he(),de(s(this,Mt)),...s(this,vt)],...s(this,bt)}).then(({x:M,y:f})=>{Object.assign(this.element.style,{left:`${M}px`,top:`${f}px`})}),this.show()}),this.update=(e,a)=>{Fe(s(this,kt),s(this,Ht))(e,a)},this.getContent=(e,a=n=>n.type.name==="paragraph")=>{const{selection:n}=e.state,{empty:r,$from:i}=n,d=e.state.selection instanceof Ot,m=this.element.contains(document.activeElement),v=!e.hasFocus()&&!m,k=!e.editable,_=!Pe(a)(e.state.selection);if(!(v||k||!r||!d||_))return i.parent.textBetween(Math.max(0,i.parentOffset-500),i.parentOffset,void 0,"￼")},this.destroy=()=>{},this.show=()=>{this.element.dataset.show="true",this.onShow()},this.hide=()=>{this.element.dataset.show="false",this.onHide()},this.element=t.content,h(this,Ht,t.debounce??200),h(this,yt,t.shouldShow??Zt(this,_t,we)),h(this,j,t.trigger??"/"),h(this,Mt,t.offset),h(this,vt,t.middleware??[]),h(this,bt,t.floatingUIOptions??{})}}it=new WeakMap,vt=new WeakMap,bt=new WeakMap,Ht=new WeakMap,j=new WeakMap,yt=new WeakMap,Mt=new WeakMap,kt=new WeakMap,_t=new WeakSet,we=function(t){const e=this.getContent(t);if(!e)return!1;const a=e.at(-1);return a?Array.isArray(s(this,j))?s(this,j).includes(a):s(this,j)===a:!1};function $t(o){const{$from:t,$to:e}=o.selection,{pos:a}=t,{pos:n}=e;return o=o.deleteRange(a-t.node().content.size,n),o}function ys(o,t,e=null){const{from:a,to:n}=o.selection;return o.setBlockType(a,n,t,e)}function Ms(o,t,e=null){const{$from:a,$to:n}=o.selection,r=a.blockRange(n),i=r&&Se(r,t,e);return i?o.wrap(r,i):null}function ks(o,t,e=null){const a=t.createAndFill(e);return a?o.replaceSelectionWith(a):null}function F(o,t=null){return(e,a)=>{if(a){const n=ys($t(e.tr),o,t);a(n.scrollIntoView())}return!0}}function xt(o,t=null){return(e,a)=>{const n=Ms($t(e.tr),o,t);return n?(a&&a(n.scrollIntoView()),!0):!1}}function Et(o,t=null){return(e,a)=>{const n=ks($t(e.tr),o,t);return n?(a&&a(n.scrollIntoView()),!0):!1}}var E,ht;class Vs{constructor(){p(this,E);p(this,ht);h(this,E,[]),this.clear=()=>(h(this,E,[]),this),h(this,ht,t=>{const e={group:t,addItem:(a,n)=>{const r={key:a,...n};return t.items.push(r),e},clear:()=>(t.items=[],e)};return e}),this.addGroup=(t,e)=>{const n={key:t,label:e,items:[]};return s(this,E).push(n),s(this,ht).call(this,n)},this.getGroup=t=>{const e=s(this,E).find(a=>a.key===t);if(!e)throw new Error(`Group with key ${t} not found`);return s(this,ht).call(this,e)},this.build=()=>s(this,E)}}E=new WeakMap,ht=new WeakMap;function gs(o,t){var r,i,d,m,v,k,V,_,y,M,f,N,It,C,u,H;const e=new Vs;e.addGroup("text",(t==null?void 0:t.slashMenuTextGroupLabel)??"Text").addItem("text",{label:(t==null?void 0:t.slashMenuTextGroupLabel)??"Text",icon:((r=t==null?void 0:t.slashMenuTextIcon)==null?void 0:r.call(t))??hs,onRun:l=>{const c=l.get(I),{dispatch:w,state:b}=c;F(le.type(l))(b,w)}}).addItem("h1",{label:(t==null?void 0:t.slashMenuH1Label)??"Heading 1",icon:((i=t==null?void 0:t.slashMenuH1Icon)==null?void 0:i.call(t))??Xe,onRun:l=>{const c=l.get(I),{dispatch:w,state:b}=c;F(J.type(l),{level:1})(b,w)}}).addItem("h2",{label:(t==null?void 0:t.slashMenuH2Label)??"Heading 2",icon:((d=t==null?void 0:t.slashMenuH2Icon)==null?void 0:d.call(t))??ts,onRun:l=>{const c=l.get(I),{dispatch:w,state:b}=c;F(J.type(l),{level:2})(b,w)}}).addItem("h3",{label:(t==null?void 0:t.slashMenuH3Label)??"Heading 3",icon:((m=t==null?void 0:t.slashMenuH3Icon)==null?void 0:m.call(t))??es,onRun:l=>{const c=l.get(I),{dispatch:w,state:b}=c;F(J.type(l),{level:3})(b,w)}}).addItem("h4",{label:(t==null?void 0:t.slashMenuH4Label)??"Heading 4",icon:((v=t==null?void 0:t.slashMenuH4Icon)==null?void 0:v.call(t))??ss,onRun:l=>{const c=l.get(I),{dispatch:w,state:b}=c;F(J.type(l),{level:4})(b,w)}}).addItem("h5",{label:(t==null?void 0:t.slashMenuH5Label)??"Heading 5",icon:((k=t==null?void 0:t.slashMenuH5Icon)==null?void 0:k.call(t))??ns,onRun:l=>{const c=l.get(I),{dispatch:w,state:b}=c;F(J.type(l),{level:5})(b,w)}}).addItem("h6",{label:(t==null?void 0:t.slashMenuH6Label)??"Heading 6",icon:((V=t==null?void 0:t.slashMenuH6Icon)==null?void 0:V.call(t))??as,onRun:l=>{const c=l.get(I),{dispatch:w,state:b}=c;F(J.type(l),{level:6})(b,w)}}).addItem("quote",{label:(t==null?void 0:t.slashMenuQuoteLabel)??"Quote",icon:((_=t==null?void 0:t.slashMenuQuoteIcon)==null?void 0:_.call(t))??ls,onRun:l=>{const c=l.get(I),{dispatch:w,state:b}=c;xt($e.type(l))(b,w)}}).addItem("divider",{label:(t==null?void 0:t.slashMenuDividerLabel)??"Divider",icon:((y=t==null?void 0:t.slashMenuDividerIcon)==null?void 0:y.call(t))??Je,onRun:l=>{const c=l.get(I),{dispatch:w,state:b}=c;Et(fe.type(l))(b,w)}}),e.addGroup("list",(t==null?void 0:t.slashMenuListGroupLabel)??"List").addItem("bullet-list",{label:(t==null?void 0:t.slashMenuBulletListLabel)??"Bullet List",icon:((M=t==null?void 0:t.slashMenuBulletListIcon)==null?void 0:M.call(t))??Ye,onRun:l=>{const c=l.get(I),{dispatch:w,state:b}=c;xt(Te.type(l))(b,w)}}).addItem("ordered-list",{label:(t==null?void 0:t.slashMenuOrderedListLabel)??"Ordered List",icon:((f=t==null?void 0:t.slashMenuOrderedListIcon)==null?void 0:f.call(t))??rs,onRun:l=>{const c=l.get(I),{dispatch:w,state:b}=c;xt(Ze.type(l))(b,w)}}).addItem("todo-list",{label:(t==null?void 0:t.slashMenuTaskListLabel)??"Todo List",icon:((N=t==null?void 0:t.slashMenuTaskListIcon)==null?void 0:N.call(t))??ds,onRun:l=>{const c=l.get(I),{dispatch:w,state:b}=c;xt(Ee.type(l),{checked:!1})(b,w)}}),e.addGroup("advanced",(t==null?void 0:t.slashMenuAdvancedGroupLabel)??"Advanced").addItem("image",{label:(t==null?void 0:t.slashMenuImageLabel)??"Image",icon:((It=t==null?void 0:t.slashMenuImageIcon)==null?void 0:It.call(t))??De,onRun:l=>{const c=l.get(I),{dispatch:w,state:b}=c;Et(Ae.type(l))(b,w)}}).addItem("code",{label:(t==null?void 0:t.slashMenuCodeBlockLabel)??"Code",icon:((C=t==null?void 0:t.slashMenuCodeBlockIcon)==null?void 0:C.call(t))??Oe,onRun:l=>{const c=l.get(I),{dispatch:w,state:b}=c;Et(Re.type(l))(b,w)}}).addItem("table",{label:(t==null?void 0:t.slashMenuTableLabel)??"Table",icon:((u=t==null?void 0:t.slashMenuTableIcon)==null?void 0:u.call(t))??is,onRun:l=>{const c=l.get(I),{dispatch:w,state:b}=c;let{tr:g}=b;g=$t(g);const ft=g.selection.from,ke=Ne(l,3,3);g=g.replaceSelectionWith(ke),w(g),requestAnimationFrame(()=>{const Gt=c.state.doc.content.size,Ve=c.state.doc.resolve(ft>Gt?Gt:ft<0?0:ft),ge=Ot.near(Ve),Ut=c.state.tr;Ut.setSelection(ge),w(Ut.scrollIntoView())})}}),(H=t==null?void 0:t.buildMenu)==null||H.call(t,e);let a=e.build();o&&(a=a.map(l=>{const c=l.items.filter(w=>w.label.toLowerCase().includes(o.toLowerCase()));return{...l,items:c}}).filter(l=>l.items.length>0));const n=a.flatMap(l=>l.items);return n.forEach((l,c)=>{Object.assign(l,{index:c})}),a.reduce((l,c)=>{const w=l+c.items.length;return Object.assign(c,{range:[l,w]}),w},0),{groups:a,size:n.length}}const ve=({show:o,hide:t,ctx:e,filter:a,config:n})=>{const{groups:r,size:i}=Kt(()=>gs(a,n),[a]),d=Le(),[m,v]=_e(0),k=Kt(()=>d.current.getRootNode(),[d]),V=ne({x:-999,y:-999}),_=Y(C=>{const u=V.current;if(!u)return;const{x:H,y:l}=C;u.x=H,u.y=l},[]);Rt(()=>{i===0&&o?t==null||t():m>=i&&v(0)},[i,o]);const y=Y((C,u)=>{v(H=>{const l=typeof C=="function"?C(H):C;return u==null||u(l),l})},[]),M=Y(C=>{const u=d.current.querySelector(`[data-index="${C}"]`),H=d.current.querySelector(".menu-groups");!u||!H||(H.scrollTop=u.offsetTop-H.offsetTop)},[]),f=Y(C=>{const u=r.flatMap(H=>H.items).at(C);u&&e&&u.onRun(e),t==null||t()},[r]),N=Y(C=>{if(C.key==="Escape"){C.preventDefault(),t==null||t();return}if(C.key==="ArrowDown")return C.preventDefault(),y(u=>u<i-1?u+1:u,M);if(C.key==="ArrowUp")return C.preventDefault(),y(u=>u<=0?u:u-1,M);if(C.key==="ArrowLeft")return C.preventDefault(),y(u=>{const H=r.find(c=>c.range[0]<=u&&c.range[1]>u);if(!H)return u;const l=r[r.indexOf(H)-1];return l?l.range[1]-1:u},M);if(C.key==="ArrowRight")return C.preventDefault(),y(u=>{const H=r.find(c=>c.range[0]<=u&&c.range[1]>u);if(!H)return u;const l=r[r.indexOf(H)+1];return l?l.range[0]:u},M);C.key==="Enter"&&(C.preventDefault(),f(m))},[t,r,m]),It=Y(C=>u=>{const H=V.current;if(!H)return;const{x:l,y:c}=u;l===H.x&&c===H.y||y(C)},[]);return Rt(()=>(o?k.addEventListener("keydown",N,{capture:!0}):k.removeEventListener("keydown",N,{capture:!0}),()=>{k.removeEventListener("keydown",N,{capture:!0})}),[o,N]),x`
    <host onmousedown=${C=>C.preventDefault()}>
      <nav class="tab-group">
        <ul>
          ${r.map(C=>x`<li
                key=${C.key}
                onmousedown=${()=>y(C.range[0],M)}
                class=${m>=C.range[0]&&m<C.range[1]?"selected":""}
              >
                ${C.label}
              </li>`)}
        </ul>
      </nav>
      <div class="menu-groups" onmousemove=${_}>
        ${r.map(C=>x`
            <div key=${C.key} class="menu-group">
              <h6>${C.label}</h6>
              <ul>
                ${C.items.map(u=>x`<li
                      key=${u.key}
                      data-index=${u.index}
                      class=${m===u.index?"hover":""}
                      onmouseenter=${It(u.index)}
                      onmousedown=${()=>{var H;(H=d.current.querySelector(`[data-index="${u.index}"]`))==null||H.classList.add("active")}}
                      onmouseup=${()=>{var H;(H=d.current.querySelector(`[data-index="${u.index}"]`))==null||H.classList.remove("active"),f(u.index)}}
                    >
                      ${u.icon}
                      <span>${u.label}</span>
                    </li>`)}
              </ul>
            </div>
          `)}
      </div>
    </host>
  `};ve.props={ctx:Object,config:Object,show:Boolean,filter:String,hide:Function};const be=se(ve),He=bs("CREPE_MENU"),qt=gt({show:()=>{},hide:()=>{}},"menuAPICtx");ee("milkdown-slash-menu",be);function Is(o,t){o.set(He.key,{view:e=>new xs(o,e,t)})}var B,$,R;class xs{constructor(t,e,a){p(this,B);p(this,$);p(this,R);h(this,R,null),this.update=r=>{s(this,$).update(r)},this.show=r=>{h(this,R,r),s(this,B).filter="",s(this,$).show()},this.hide=()=>{h(this,R,null),s(this,$).hide()},this.destroy=()=>{s(this,$).destroy(),s(this,B).remove()},h(this,B,new be),s(this,B).hide=this.hide,s(this,B).ctx=t,s(this,B).config=a;const n=this;h(this,$,new Hs({content:s(this,B),debounce:20,shouldShow(r){if(Ie(r.state.selection)||xe(r.state.selection))return!1;const i=this.getContent(r,m=>["paragraph","heading"].includes(m.type.name));if(i==null)return!1;const d=s(n,R);return s(n,B).filter=i.startsWith("/")?i.slice(1):i,typeof d=="number"?r.state.doc.resolve(d).node()!==r.state.doc.resolve(r.state.selection.from).node()?(h(n,R,null),!1):!0:!!i.startsWith("/")},offset:10})),s(this,$).onShow=()=>{s(this,B).show=!0},s(this,$).onHide=()=>{s(this,B).show=!1},this.update(e),t.set(qt.key,{show:r=>this.show(r),hide:()=>this.hide()})}}B=new WeakMap,$=new WeakMap,R=new WeakMap;const ye=({onAdd:o,addIcon:t,handleIcon:e})=>{const a=ne();return Rt(()=>{var i;(i=a.current)==null||i.classList.remove("active")}),x`
    <host>
      <div
        ref=${a}
        onmousedown=${i=>{var d;i.preventDefault(),i.stopPropagation(),(d=a.current)==null||d.classList.add("active")}}
        onmouseup=${i=>{var d;i.preventDefault(),i.stopPropagation(),o==null||o(),(d=a.current)==null||d.classList.remove("active")}}
        class="operation-item"
      >
        ${(t==null?void 0:t())||qe}
      </div>
      <div class="operation-item">${(e==null?void 0:e())||os}</div>
    </host>
  `};ye.props={show:Boolean,onAdd:Function,addIcon:Function,handleIcon:Function};const Me=se(ye);var D,A,Vt;class Ls{constructor(t,e){p(this,D);p(this,A);p(this,Vt);this.update=()=>{s(this,A).update()},this.destroy=()=>{s(this,A).destroy(),s(this,D).remove()},this.onAdd=()=>{const n=s(this,Vt),r=n.get(I);r.hasFocus()||r.focus();const{state:i,dispatch:d}=r,m=s(this,A).active;if(!m)return;const k=m.$pos.pos+m.node.nodeSize;let V=i.tr.insert(k,le.type(n).create());V=V.setSelection(Ot.near(V.doc.resolve(k))),d(V.scrollIntoView()),s(this,A).hide(),n.get(qt.key).show(V.selection.from)},h(this,Vt,t);const a=new Me;h(this,D,a),s(this,D).onAdd=this.onAdd,s(this,D).addIcon=e==null?void 0:e.handleAddIcon,s(this,D).handleIcon=e==null?void 0:e.handleDragIcon,h(this,A,new vs({ctx:t,content:a,getOffset:()=>16,getPlacement:({active:n,blockDom:r})=>{if(n.node.type.name==="heading")return"left";let i=0;n.node.descendants(f=>{i+=f.childCount});const d=n.el,m=d.getBoundingClientRect(),v=r.getBoundingClientRect(),k=window.getComputedStyle(d),V=Number.parseInt(k.paddingTop,10)||0,_=Number.parseInt(k.paddingBottom,10)||0,y=m.height-V-_,M=v.height;return i>2||M<y?"left-start":"left"}})),this.update()}}D=new WeakMap,A=new WeakMap,Vt=new WeakMap;ee("milkdown-block-handle",Me);function _s(o,t){o.set(dt.key,{filterNodes:e=>!ie(n=>["table","blockquote","math_inline"].includes(n.type.name))(e)}),o.set(St.key,{view:()=>new Ls(o,t)})}const zs=(o,t)=>{o.config(e=>_s(e,t)).config(e=>Is(e,t)).use(qt).use(St).use(He)};export{zs as defineFeature};
