import{h as b,u as A,b as F,c as z,a as T}from"./html-DXgt5h_X.js";import{w as E}from"./meta-BqSMf3UR.js";import{af as ee,as as te,$ as K,at as ae}from"./utils-CEpiaGhY.js";import{I as ne,i as W,a as j}from"./schema-CuQImLLf.js";import{d as Y}from"./helper-CH8kiiTm.js";import{a as oe,u as y}from"./hooks-B3FPlJye.js";import{c as $}from"./clsx-B-dksMZM.js";import{$ as _}from"./_view-CWnVifb5.js";import{c as re}from"./confirm-D-aE3SRY.js";const le="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let G=(r=21)=>{let e="",d=crypto.getRandomValues(new Uint8Array(r|=0));for(;r--;)e+=le[d[r]&63];return e};const se=b`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="M9 22a1 1 0 0 1-1-1v-3H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6.1l-3.7 3.71c-.2.19-.45.29-.7.29zm1-6v3.08L13.08 16H20V4H4v12z"
    />
  </svg>
`;function ie(r){return te(r,"paragraph",(e,d,c)=>{var s,p;if(((s=e.children)==null?void 0:s.length)!==1)return;const t=(p=e.children)==null?void 0:p[0];if(!t||t.type!=="image")return;const{url:a,alt:o,title:i}=t,n={type:"image-block",url:a,alt:o,title:i};c.children.splice(d,1,n)})}const S=ee("remark-image-block",()=>()=>ie);E(S.plugin,{displayName:"Remark<remarkImageBlock>",group:"ImageBlock"});E(S.options,{displayName:"RemarkConfig<remarkImageBlock>",group:"ImageBlock"});const de={imageIcon:()=>"🌌",captionIcon:()=>"💬",uploadButton:()=>b`Upload file`,confirmButton:()=>b`Confirm ⏎`,uploadPlaceholderText:"or paste the image link ...",captionPlaceholderText:"Image caption",onUpload:r=>Promise.resolve(URL.createObjectURL(r))},D=K(de,"imageBlockConfigCtx");E(D,{displayName:"Config<image-block>",group:"ImageBlock"});function pe({image:r,resizeHandle:e,ratio:d,setRatio:c,src:t}){const a=A(),o=oe(()=>a.current.getRootNode(),[a]);F(()=>{const i=r.current;i&&(delete i.dataset.origin,delete i.dataset.height,i.style.height="")},[t]),F(()=>{const i=e.current,n=r.current;if(!i||!n)return;const s=m=>{m.preventDefault();const h=n.getBoundingClientRect().top,v=m.clientY-h,k=Number(v<100?100:v).toFixed(2);n.dataset.height=k,n.style.height=`${k}px`},p=()=>{o.removeEventListener("pointermove",s),o.removeEventListener("pointerup",p);const m=Number(n.dataset.origin),h=Number(n.dataset.height),v=Number.parseFloat(Number(h/m).toFixed(2));Number.isNaN(v)||c(v)},w=m=>{m.preventDefault(),o.addEventListener("pointermove",s),o.addEventListener("pointerup",p)},U=m=>{const h=a.current.getBoundingClientRect().width;if(!h)return;const v=m.target,k=v.height,x=v.width,g=x<h?k:h*(k/x),C=(g*d).toFixed(2);n.dataset.origin=g.toFixed(2),n.dataset.height=C,n.style.height=`${C}px`};return n.addEventListener("load",U),i.addEventListener("pointerdown",w),()=>{n.removeEventListener("load",U),i.removeEventListener("pointerdown",w)}},[])}let P=0;const q=({src:r="",caption:e="",ratio:d=1,selected:c=!1,readonly:t=!1,setAttr:a,config:o})=>{const i=T(),n=T(),s=T(),[p,w]=y(e.length>0),[U,m]=y(r.length!==0),[h]=y(G()),[v,k]=y(!1),[x,g]=y(r);pe({image:i,resizeHandle:n,ratio:d,setRatio:l=>a==null?void 0:a("ratio",l),src:r}),F(()=>{c||w(e.length>0)},[c]);const C=l=>{const I=l.target.value;P&&window.clearTimeout(P),P=window.setTimeout(()=>{a==null||a("caption",I)},1e3)},u=l=>{const I=l.target.value;P&&(window.clearTimeout(P),P=0),a==null||a("caption",I)},R=l=>{const I=l.target.value;m(I.length!==0),g(I)},L=async l=>{var O;const B=(O=l.target.files)==null?void 0:O[0];if(!B)return;const I=await(o==null?void 0:o.onUpload(B));I&&(a==null||a("src",I),m(!0))},N=l=>{l.preventDefault(),l.stopPropagation(),!t&&w(B=>!B)},M=()=>{var l;a==null||a("src",((l=s.current)==null?void 0:l.value)??"")},Z=l=>{l.key==="Enter"&&M()},V=l=>{l.preventDefault(),l.stopPropagation()},f=l=>{l.stopPropagation(),l.preventDefault()};return b`<host class=${$(c&&"selected")}>
    <div class=${$("image-edit",r.length>0&&"hidden")}>
      <div class="image-icon">${o==null?void 0:o.imageIcon()}</div>
      <div class=${$("link-importer",v&&"focus")}>
        <input
          ref=${s}
          draggable="true"
          ondragstart=${V}
          disabled=${t}
          class="link-input-area"
          value=${x}
          oninput=${R}
          onkeydown=${Z}
          onfocus=${()=>k(!0)}
          onblur=${()=>k(!1)}
        />
        <div class=${$("placeholder",U&&"hidden")}>
          <input
            disabled=${t}
            class="hidden"
            id=${h}
            type="file"
            accept="image/*"
            onchange=${L}
          />
          <label onpointerdown=${f} class="uploader" for=${h}>
            ${o==null?void 0:o.uploadButton()}
          </label>
          <span class="text" onclick=${()=>{var l;return(l=s.current)==null?void 0:l.focus()}}>
            ${o==null?void 0:o.uploadPlaceholderText}
          </span>
        </div>
      </div>
      <div
        class=${$("confirm",x.length===0&&"hidden")}
        onclick=${()=>M()}
      >
        ${o==null?void 0:o.confirmButton()}
      </div>
    </div>
    <div class=${$("image-wrapper",r.length===0&&"hidden")}>
      <div class="operation">
        <div class="operation-item" onpointerdown=${N}>
          ${o==null?void 0:o.captionIcon()}
        </div>
      </div>
      <img
        ref=${i}
        data-type=${ne}
        src=${r}
        alt=${e}
        ratio=${d}
      />
      <div ref=${n} class="image-resize-handle"></div>
    </div>
    <input
      draggable="true"
      ondragstart=${V}
      class=${$("caption-input",!p&&"hidden")}
      placeholder=${o==null?void 0:o.captionPlaceholderText}
      oninput=${C}
      onblur=${u}
      value=${e}
    />
  </host>`};q.props={src:String,caption:String,ratio:Number,selected:Boolean,readonly:Boolean,setAttr:Function,config:Object};const ue=z(q);Y("milkdown-image-block",ue);const J=_(W.node,r=>(e,d,c)=>{const t=document.createElement("milkdown-image-block"),a=r.get(D.key),o=a.proxyDomURL,i=n=>{if(!o)t.src=n.attrs.src;else{const s=o(n.attrs.src);typeof s=="string"?t.src=s:s.then(p=>{t.src=p})}t.ratio=n.attrs.ratio,t.caption=n.attrs.caption,t.readonly=!d.editable};return i(e),t.selected=!1,t.setAttr=(n,s)=>{const p=c();p!=null&&d.dispatch(d.state.tr.setNodeAttribute(p,n,s))},t.config=a,{dom:t,update:n=>n.type!==e.type?!1:(i(n),!0),stopEvent:n=>n.target instanceof HTMLInputElement,selectNode:()=>{t.selected=!0},deselectNode:()=>{t.selected=!1},destroy:()=>{t.remove()}}});E(J,{displayName:"NodeView<image-block>",group:"ImageBlock"});const ce=[S,W,J,D].flat(),me={imageIcon:()=>"🌌",uploadButton:()=>b`Upload`,confirmButton:()=>b`⏎`,uploadPlaceholderText:"/Paste",onUpload:r=>Promise.resolve(URL.createObjectURL(r))},H=K(me,"inlineImageConfigCtx");E(H,{displayName:"Config<image-inline>",group:"ImageInline"});const Q=({src:r="",selected:e=!1,alt:d,title:c,setAttr:t,config:a})=>{const o=T(),[i]=y(G()),[n,s]=y(!1),[p,w]=y(r.length!==0),[U,m]=y(r),h=u=>{const L=u.target.value;w(L.length!==0),m(L)},v=async u=>{var N;const R=(N=u.target.files)==null?void 0:N[0];if(!R)return;const L=await(a==null?void 0:a.onUpload(R));L&&(t==null||t("src",L),w(!0))},k=()=>{var u;t==null||t("src",((u=o.current)==null?void 0:u.value)??"")},x=u=>{u.key==="Enter"&&k()},g=u=>{u.preventDefault(),u.stopPropagation()},C=u=>{u.stopPropagation(),u.preventDefault()};return b`<host class=${$(e&&"selected",!r&&"empty")}>
    ${r?b`<img class="image-inline" src=${r} alt=${d} title=${c} />`:b`<div class="empty-image-inline">
          <div class="image-icon">${a==null?void 0:a.imageIcon()}</div>
          <div class=${$("link-importer",n&&"focus")}>
            <input
              draggable="true"
              ref=${o}
              ondragstart=${g}
              class="link-input-area"
              value=${U}
              oninput=${h}
              onkeydown=${x}
              onfocus=${()=>s(!0)}
              onblur=${()=>s(!1)}
            />
            <div class=${$("placeholder",p&&"hidden")}>
              <input
                class="hidden"
                id=${i}
                type="file"
                accept="image/*"
                onchange=${v}
              />
              <label
                onpointerdown=${C}
                class="uploader"
                for=${i}
              >
                ${a==null?void 0:a.uploadButton()}
              </label>
              <span class="text" onclick=${()=>{var u;return(u=o.current)==null?void 0:u.focus()}}>
                ${a==null?void 0:a.uploadPlaceholderText}
              </span>
            </div>
          </div>
          <div
            class=${$("confirm",U.length===0&&"hidden")}
            onclick=${()=>k()}
          >
            ${a==null?void 0:a.confirmButton()}
          </div>
        </div>`}
  </host>`};Q.props={src:String,alt:String,title:String,selected:Boolean,setAttr:Function,config:Object};const he=z(Q);Y("milkdown-image-inline",he);const X=_(ae.node,r=>(e,d,c)=>{const t=document.createElement("milkdown-image-inline"),a=r.get(H.key),o=a.proxyDomURL,i=n=>{if(!o)t.src=n.attrs.src;else{const s=o(n.attrs.src);typeof s=="string"?t.src=s:s.then(p=>{t.src=p})}t.alt=n.attrs.alt,t.title=n.attrs.title};return i(e),t.selected=!1,t.setAttr=(n,s)=>{const p=c();p!=null&&d.dispatch(d.state.tr.setNodeAttribute(p,n,s))},t.config=a,{dom:t,update:n=>n.type!==e.type?!1:(i(n),!0),stopEvent:n=>!!(t.selected&&n.target instanceof HTMLInputElement),selectNode:()=>{t.selected=!0},deselectNode:()=>{t.selected=!1},destroy:()=>{t.remove()}}});E(X,{displayName:"NodeView<image-inline>",group:"ImageInline"});const ve=[H,X],Be=(r,e)=>{r.config(d=>{d.update(H.key,c=>({uploadButton:(e==null?void 0:e.inlineUploadButton)??(()=>"Upload"),imageIcon:(e==null?void 0:e.inlineImageIcon)??(()=>j),confirmButton:(e==null?void 0:e.inlineConfirmButton)??(()=>re),uploadPlaceholderText:(e==null?void 0:e.inlineUploadPlaceholderText)??"or paste link",onUpload:(e==null?void 0:e.inlineOnUpload)??(e==null?void 0:e.onUpload)??c.onUpload,proxyDomURL:e==null?void 0:e.proxyDomURL})),d.update(D.key,c=>({uploadButton:(e==null?void 0:e.blockUploadButton)??(()=>"Upload file"),imageIcon:(e==null?void 0:e.blockImageIcon)??(()=>j),captionIcon:(e==null?void 0:e.blockCaptionIcon)??(()=>se),confirmButton:(e==null?void 0:e.blockConfirmButton)??(()=>"Confirm"),captionPlaceholderText:(e==null?void 0:e.blockCaptionPlaceholderText)??"Write Image Caption",uploadPlaceholderText:(e==null?void 0:e.blockUploadPlaceholderText)??"or paste link",onUpload:(e==null?void 0:e.blockOnUpload)??(e==null?void 0:e.onUpload)??c.onUpload,proxyDomURL:e==null?void 0:e.proxyDomURL}))}).use(ce).use(ve)};export{Be as defineFeature};
