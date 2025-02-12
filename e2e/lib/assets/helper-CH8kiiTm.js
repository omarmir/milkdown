function s(e,n){const t=customElements.get(e);if(t==null){customElements.define(e,n);return}t!==n&&console.warn(`Custom element ${e} has been defined before.`)}export{s as d};
