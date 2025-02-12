import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */import{c as i,h as e}from"./html-DXgt5h_X.js";const l={title:"Crepe",link:"/crepe/"},o={title:"Multi Editor",link:"/multi-editor/"},n={title:"AutoMd",link:"/plugin-automd/"},m={title:"Listener",link:"/plugin-listener/"},r={title:"Commonmark",link:"/preset-commonmark/"},s={title:"GFM",link:"/preset-gfm/"},c=[r,s,o,m,n,l];function p(){return e`
    <host>
      <ul class="m-10">
        ${c.map(t=>e`<li
              class="py-3 hover:text-blue-500 block w-full cursor-pointer"
            >
              <a href=${t.link}>${t.title}</a>
            </li>`)}
      </ul>
    </host>
  `}customElements.define("milkdown-test-app",i(p));
