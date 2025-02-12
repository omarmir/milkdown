var O=e=>{throw TypeError(e)};var R=(e,t,r)=>t.has(e)||O("Cannot "+r);var i=(e,t,r)=>(R(e,t,"read from private field"),r?r.call(e):t.get(e)),d=(e,t,r)=>t.has(e)?O("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),l=(e,t,r,s)=>(R(e,t,"write to private field"),s?s.call(e,r):t.set(e,r),r);import{d as V}from"./index-4Op9ycnU.js";import{l as b,a as D,b as I}from"./slices-Ba8uplz1.js";import{w as C}from"./meta-BqSMf3UR.js";import{t as _,T as j}from"./tooltip-plugin-ChstxflV.js";import{ar as A,h as q,T as Y}from"./utils-CEpiaGhY.js";import{d as W}from"./helper-CH8kiiTm.js";import{h as N,c as X,a as g,b as tt}from"./html-DXgt5h_X.js";import{p as z}from"./index-7N1qrWr1.js";import{u as et}from"./hooks-B3FPlJye.js";import{c as st}from"./clsx-B-dksMZM.js";import{c as it}from"./confirm-D-aE3SRY.js";import{r as ot}from"./remove-CSilE7kp.js";import{e as nt}from"./edit-B2MZlCI7.js";import"./index-C52YWX8N.js";import"./floating-ui.dom-DJfcjnnZ.js";const rt=N`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height="24px"
    viewBox="0 -960 960 960"
    width="24px"
    fill="none"
  >
    <path
      d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z"
    />
  </svg>
`,B=_("LINK_PREVIEW");C(B[0],{displayName:"PreviewTooltipSpec<link-tooltip>",group:"LinkTooltip"});C(B[1],{displayName:"PreviewTooltipPlugin<link-tooltip>",group:"LinkTooltip"});const F=_("LINK_EDIT");C(F[0],{displayName:"EditTooltipSpec<link-tooltip>",group:"LinkTooltip"});C(F[1],{displayName:"EditTooltipPlugin<link-tooltip>",group:"LinkTooltip"});function at(e,t,r,s,n){let o={start:-1,end:-1};return r.nodesBetween(s,n,(h,a)=>{if(o.start>-1)return!1;o.start===-1&&e.isInSet(h.marks)&&t===h&&(o={start:a,end:a+Math.max(h.textContent.length,1)})}),o}function ht(e,t,r){const s=t.posAtCoords({left:r.clientX,top:r.clientY});if(!s)return;const{pos:n}=s,o=t.state.doc.nodeAt(n);if(!o)return;const h=o.marks.find(u=>u.type===A.mark.type(e));if(!(!h||!B.pluginKey()))return{show:!0,pos:n,node:o,mark:h}}const G=({config:e,src:t,onEdit:r,onRemove:s})=>{const n=a=>{a.stopPropagation(),a.preventDefault(),r==null||r()},o=a=>{a.stopPropagation(),a.preventDefault(),s==null||s()};return N`
    <host>
      <div class="link-preview" onmousedown=${a=>{a.preventDefault(),navigator.clipboard&&t&&navigator.clipboard.writeText(t).then(()=>{e==null||e.onCopyLink(t)}).catch(u=>{throw u})}}>
        <span class="link-icon"> ${e==null?void 0:e.linkIcon()} </span>
        <a href=${t} target="_blank" class="link-display">${t}</a>
        <span class="button link-edit-button" onmousedown=${n}>
          ${e==null?void 0:e.editButton()}
        </span>
        <span
          class="button link-remove-button"
          onmousedown=${o}
        >
          ${e==null?void 0:e.removeButton()}
        </span>
      </div>
    </host>
  `};G.props={config:Object,src:String,onEdit:Function,onRemove:Function};const J=X(G);var k,c,L,T,P,E,x,f;class lt{constructor(t,r){d(this,k);d(this,c);d(this,L);d(this,T);d(this,P);d(this,E);d(this,x);d(this,f);this.ctx=t,l(this,k,new J),l(this,L,this.ctx.use(b.key)),l(this,T,!1),l(this,P,({mode:s})=>{s==="edit"&&i(this,f).call(this)}),l(this,E,()=>{l(this,T,!0)}),l(this,x,()=>{l(this,T,!1)}),l(this,f,()=>{i(this,c).hide(),i(this,c).element.removeEventListener("mouseenter",i(this,E)),i(this,c).element.removeEventListener("mouseleave",i(this,x))}),this.show=(s,n,o,h)=>{i(this,k).config=this.ctx.get(D.key),i(this,k).src=s.attrs.href,i(this,k).onEdit=()=>{this.ctx.get(I.key).editLink(s,n,o)},i(this,k).onRemove=()=>{this.ctx.get(I.key).removeLink(n,o),i(this,f).call(this)},i(this,c).show({getBoundingClientRect:()=>h}),i(this,c).element.addEventListener("mouseenter",i(this,E)),i(this,c).element.addEventListener("mouseleave",i(this,x))},this.hide=()=>{i(this,T)||i(this,f).call(this)},this.update=()=>{},this.destroy=()=>{i(this,L).off(i(this,P)),i(this,c).destroy(),i(this,k).remove()},l(this,c,new j({debounce:0,content:i(this,k),shouldShow:()=>!1})),i(this,c).update(r),l(this,L,t.use(b.key)),i(this,L).on(i(this,P))}}k=new WeakMap,c=new WeakMap,L=new WeakMap,T=new WeakMap,P=new WeakMap,E=new WeakMap,x=new WeakMap,f=new WeakMap;W("milkdown-link-preview",J);function ut(e){let t;const s=V((o,h)=>{if(!t||!o.hasFocus()||e.get(b.key).mode==="edit")return;const u=ht(e,o,h);if(u){const p=o.state.doc.resolve(u.pos),M=at(u.mark,u.node,o.state.doc,p.before(),p.after()),H=M.start,K=M.end;t.show(u.mark,H,K,z(o,H,K));return}t.hide()},200),n=()=>{setTimeout(()=>{t==null||t.hide()},200)};e.set(B.key,{props:{handleDOMEvents:{mousemove:s,mouseleave:n}},view:o=>(t=new lt(e,o),t)})}const Q=({src:e,onConfirm:t,onCancel:r,config:s})=>{const n=g(),[o,h]=et(e);tt(()=>{h(e??"")},[e]);const a=()=>{var p;t==null||t(((p=n.current)==null?void 0:p.value)??"")},u=p=>{var M;p.stopPropagation(),p.key==="Enter"&&(t==null||t(((M=n.current)==null?void 0:M.value)??""),p.preventDefault()),p.key==="Escape"&&(r==null||r(),p.preventDefault())};return N`
    <host>
      <div class="link-edit">
        <input
          class="input-area"
          placeholder=${s==null?void 0:s.inputPlaceholder}
          ref=${n}
          onkeydown=${u}
          oninput=${p=>h(p.target.value)}
          value=${o}
        />
        <span
          class=${st("button confirm",!o&&"hidden")}
          onclick=${a}
        >
          ${s==null?void 0:s.confirmButton()}
        </span>
      </div>
    </host>
  `};Q.props={config:Object,src:String,onConfirm:Function,onCancel:Function};const U=X(Q),Z={from:-1,to:-1,mark:null};var m,y,v,w,S,$;class pt{constructor(t,r){d(this,m);d(this,y);d(this,v);d(this,w);d(this,S);d(this,$);this.ctx=t,l(this,m,new U),l(this,v,{...Z}),l(this,w,()=>{i(this,y).hide(),this.ctx.update(b.key,s=>({...s,mode:"preview"})),l(this,v,{...Z})}),l(this,S,s=>{const n=this.ctx.get(q),{from:o,to:h,mark:a}=i(this,v),u=A.type(this.ctx);if(a&&a.attrs.href===s){i(this,w).call(this);return}const p=n.state.tr;a&&p.removeMark(o,h,a),p.addMark(o,h,u.create({href:s})),n.dispatch(p),i(this,w).call(this)}),l(this,$,(s,n,o)=>{const h=this.ctx.get(D.key);i(this,m).config=h,i(this,m).src=s,this.ctx.update(b.key,u=>({...u,mode:"edit"}));const a=this.ctx.get(q);a.dispatch(a.state.tr.setSelection(Y.create(a.state.doc,n,o))),i(this,y).show({getBoundingClientRect:()=>z(a,n,o)}),requestAnimationFrame(()=>{var u;(u=i(this,m).querySelector("input"))==null||u.focus()})}),this.update=s=>{const{state:n}=s,{selection:o}=n;if(!(o instanceof Y))return;const{from:h,to:a}=o;h===i(this,v).from&&a===i(this,v).to||i(this,w).call(this)},this.destroy=()=>{i(this,y).destroy(),i(this,m).remove()},this.addLink=(s,n)=>{l(this,v,{from:s,to:n,mark:null}),i(this,$).call(this,"",s,n)},this.editLink=(s,n,o)=>{l(this,v,{from:n,to:o,mark:s}),i(this,$).call(this,s.attrs.href,n,o)},this.removeLink=(s,n)=>{const o=this.ctx.get(q),h=o.state.tr;h.removeMark(s,n,A.type(this.ctx)),o.dispatch(h),i(this,w).call(this)},l(this,y,new j({content:i(this,m),debounce:0,shouldShow:()=>!1})),i(this,y).onHide=()=>{i(this,m).update().catch(s=>{throw s}),r.dom.focus({preventScroll:!0})},i(this,y).update(r),i(this,m).onConfirm=i(this,S),i(this,m).onCancel=i(this,w)}}m=new WeakMap,y=new WeakMap,v=new WeakMap,w=new WeakMap,S=new WeakMap,$=new WeakMap;W("milkdown-link-edit",U);function dt(e){let t;e.update(I.key,r=>({...r,addLink:(s,n)=>{t==null||t.addLink(s,n)},editLink:(s,n,o)=>{t==null||t.editLink(s,n,o)},removeLink:(s,n)=>{t==null||t.removeLink(s,n)}})),e.set(F.key,{view:r=>(t=new pt(e,r),t)})}function ct(e){ut(e),dt(e)}const mt=[b,I,D,B,F].flat(),Dt=(e,t)=>{e.config(ct).config(r=>{r.update(D.key,s=>({...s,linkIcon:(t==null?void 0:t.linkIcon)??(()=>rt),editButton:(t==null?void 0:t.editButton)??(()=>nt),removeButton:(t==null?void 0:t.removeButton)??(()=>ot),confirmButton:(t==null?void 0:t.confirmButton)??(()=>it),inputPlaceholder:(t==null?void 0:t.inputPlaceholder)??"Paste link...",onCopyLink:(t==null?void 0:t.onCopyLink)??(()=>{})}))}).use(mt)};export{Dt as defineFeature};
