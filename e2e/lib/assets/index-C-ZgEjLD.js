import{h as c,c as x,u as y,a as I,d as B}from"./html-DXgt5h_X.js";import{c as k}from"./clsx-B-dksMZM.js";import{w as C}from"./meta-BqSMf3UR.js";import{d as $}from"./helper-CH8kiiTm.js";import{$ as L,W as v,T as _}from"./utils-CEpiaGhY.js";import{$ as g}from"./_view-CWnVifb5.js";const P=c`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_952_6527)">
      <circle cx="12" cy="12" r="3" />
    </g>
    <defs>
      <clipPath id="clip0_952_6527">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,M=c`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_1803_1151)">
      <path
        d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM10.71 16.29C10.32 16.68 9.69 16.68 9.3 16.29L5.71 12.7C5.32 12.31 5.32 11.68 5.71 11.29C6.1 10.9 6.73 10.9 7.12 11.29L10 14.17L16.88 7.29C17.27 6.9 17.9 6.9 18.29 7.29C18.68 7.68 18.68 8.31 18.29 8.7L10.71 16.29Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_1803_1151">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,V=c`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_1803_535)">
      <path
        d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H18C18.55 5 19 5.45 19 6V18C19 18.55 18.55 19 18 19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_1803_535">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,f=({selected:a,label:e="",listType:l="",checked:n,onMount:t,setAttr:r,config:o,readonly:d})=>{const i=y(),s=I();B(()=>{const u=s.current;if(!u)return;const b=i.current.querySelector("[data-content-dom]");b&&(u.appendChild(b),t==null||t())},[]);const h=()=>{n!=null&&(r==null||r("checked",!n))},p={label:e,listType:l,checked:n,readonly:d};return c`<host class=${a&&"ProseMirror-selectednode"}>
    <li class="list-item">
      <div
        class="label-wrapper"
        onclick=${h}
        contenteditable="false"
      >
        ${o==null?void 0:o.renderLabel(p)}
      </div>
      <div class="children" ref=${s}></div>
    </li>
  </host>`};f.props={label:String,checked:Boolean,readonly:Boolean,listType:String,config:Object,selected:Boolean,setAttr:Function,onMount:Function};const H=x(f),S={renderLabel:({label:a,listType:e,checked:l,readonly:n})=>l==null?c`<span class="label"
        >${e==="bullet"?"⦿":a}</span
      >`:c`<input
      disabled=${n}
      class="label"
      type="checkbox"
      checked=${l}
    />`},m=L(S,"listItemBlockConfigCtx");C(m,{displayName:"Config<list-item-block>",group:"ListItemBlock"});$("milkdown-list-item-block",H);const w=g(v.node,a=>(e,l,n)=>{const t=document.createElement("milkdown-list-item-block"),r=document.createElement("div");r.setAttribute("data-content-dom","true"),r.classList.add("content-dom");const o=a.get(m.key),d=s=>{t.listType=s.attrs.listType,t.label=s.attrs.label,t.checked=s.attrs.checked,t.readonly=!l.editable};d(e),t.appendChild(r),t.selected=!1,t.setAttr=(s,h)=>{const p=n();p!=null&&l.dispatch(l.state.tr.setNodeAttribute(p,s,h))},t.onMount=()=>{const{anchor:s,head:h}=l.state.selection;l.hasFocus()&&setTimeout(()=>{const p=l.state.doc.resolve(s),u=l.state.doc.resolve(h);l.dispatch(l.state.tr.setSelection(new _(p,u)))})};let i=e;return t.config=o,{dom:t,contentDOM:r,update:s=>s.type!==e.type?!1:(s.sameMarkup(i)&&s.content.eq(i.content)||(i=s,d(s)),!0),ignoreMutation:s=>!t||!r?!0:s.type==="selection"?!1:r===s.target&&s.type==="attributes"?!0:!r.contains(s.target),selectNode:()=>{t.selected=!0},deselectNode:()=>{t.selected=!1},destroy:()=>{t.remove(),r.remove()}}});C(w,{displayName:"NodeView<list-item-block>",group:"ListItemBlock"});const T=[m,w];function E(a,e){a.set(m.key,{renderLabel:({label:l,listType:n,checked:t,readonly:r})=>{var o,d,i;return t==null?n==="bullet"?c`<span class="label"
            >${((o=e==null?void 0:e.bulletIcon)==null?void 0:o.call(e))??P}</span
          >`:c`<span class="label">${l}</span>`:t?c`<span
          class=${k("label checkbox",r&&"readonly")}
          >${((d=e==null?void 0:e.checkBoxCheckedIcon)==null?void 0:d.call(e))??M}</span
        >`:c`<span class=${k("label checkbox",r&&"readonly")}
        >${((i=e==null?void 0:e.checkBoxUncheckedIcon)==null?void 0:i.call(e))??V}</span
      >`}})}const U=(a,e)=>{a.config(l=>E(l,e)).use(T)};export{U as defineFeature};
