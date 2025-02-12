import{h as s}from"./html-DXgt5h_X.js";import{L as l,V as p}from"./utils-CEpiaGhY.js";import{w as g}from"./meta-BqSMf3UR.js";const h=s`
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <g clip-path="url(#clip0_977_8075)">
      <path
        d="M19 5V19H5V5H19ZM19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM14.14 11.86L11.14 15.73L9 13.14L6 17H18L14.14 11.86Z"
      />
    </g>
    <defs>
      <clipPath id="clip0_977_8075">
        <rect width="24" height="24" />
      </clipPath>
    </defs>
  </svg>
`,r="image-block",m=l("image-block",()=>({inline:!1,group:"block",selectable:!0,draggable:!0,isolating:!0,marks:"",atom:!0,priority:100,attrs:{src:{default:""},caption:{default:""},ratio:{default:1}},parseDOM:[{tag:`img[data-type="${r}"]`,getAttrs:t=>{if(!(t instanceof HTMLElement))throw p(t);return{src:t.getAttribute("src")||"",caption:t.getAttribute("caption")||"",ratio:Number(t.getAttribute("ratio")??1)}}}],toDOM:t=>["img",{"data-type":r,...t.attrs}],parseMarkdown:{match:({type:t})=>t==="image-block",runner:(t,a,i)=>{const o=a.url,c=a.title;let e=Number(a.alt||1);(Number.isNaN(e)||e===0)&&(e=1),t.addNode(i,{src:o,caption:c,ratio:e})}},toMarkdown:{match:t=>t.type.name==="image-block",runner:(t,a)=>{t.openNode("paragraph"),t.addNode("image",void 0,void 0,{title:a.attrs.caption,url:a.attrs.src,alt:`${Number.parseFloat(a.attrs.ratio).toFixed(2)}`}),t.closeNode()}}}));g(m.node,{displayName:"NodeSchema<image-block>",group:"ImageBlock"});export{r as I,h as a,m as i};
