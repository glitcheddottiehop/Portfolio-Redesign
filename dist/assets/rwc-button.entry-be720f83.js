import{l as a,p as t,H as c,s as e}from"./index-19c43f58.js";import{F as s}from"./file-e27d784c-4d488a72.js";const u='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 6 8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z"/></svg>',b='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12l4.58-4.59z"/></svg>',d='@font-face{font-family:"Inter";font-style:normal;font-weight:400;font-display:swap;src:url("assets/fonts/inter/Inter-Regular.woff2?v=1.0") format("woff2"), url("assets/fonts/inter/Inter-Regular.woff?v=1.0") format("woff")}@font-face{font-family:"Inter";font-style:normal;font-weight:500;font-display:swap;src:url("assets/fonts/inter/Inter-Medium.woff2?v=1.0") format("woff2"), url("assets/fonts/inter/Inter-Medium.woff?v=1.0") format("woff")}@font-face{font-family:"Inter";font-style:normal;font-weight:600;font-display:swap;src:url("assets/fonts/inter/Inter-SemiBold.woff2?v=1.0") format("woff2"), url("assets/fonts/inter/Inter-SemiBold.woff?v=1.0") format("woff")}:host{--button-border-width:2px;--button-border-radius:0.25rem;--button-border-color:rgb(50, 205, 50);--button-padding:0.5rem 0.75rem;--button-box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);--button-icon-size:1.5rem;--button-icon-color:rgb(50, 205, 50);--button-width:fit-content;--button-background-color:rgb(50, 205, 50);--button-text-color:rgb(33, 33, 33);--button-background-color-hover:rgb(34, 139, 34);--button-outline-color:rgb(124, 252, 0);--button-outline-style:solid;--button-background-color-type-outline-hover:rgb(97, 97, 97);--button-ripple-animation:rgba(255, 255, 255, 0.6);display:block}.theme-blue{--button-background-color:rgb(100, 149, 237);--button-border-color:rgb(100, 149, 237);--button-text-color:rgb(245, 245, 245);--button-background-color-hover:rgb(70, 130, 180);--button-outline-color:rgb(100, 149, 237);--button-red-outline-style:var(--button-outline-style)}.theme-dark{--button-background-color:rgb(33, 33, 33);--button-border-color:rgb(33, 33, 33);--button-text-color:rgb(245, 245, 245);--button-background-color-hover:rgb(66, 66, 66);--button-outline-color:rgb(33, 33, 33);--button-dark-outline-style:var(--button-outline-style)}.theme-red{--button-background-color:rgb(178, 34, 34);--button-border-color:rgb(178, 34, 34);--button-text-color:rgb(245, 245, 245);--button-background-color-hover:rgb(165, 42, 42);--button-outline-color:rgb(205, 92, 92);--button-red-outline-style:var(--button-outline-style)}.theme-orange{--button-background-color:rgb(255, 165, 0);--button-border-color:rgb(255, 165, 0);--button-text-color:rgb(245, 245, 245);--button-background-color-hover:rgb(255, 140, 0);--button-outline-color:rgb(255, 165, 0);--button-red-outline-style:var(--button-outline-style)}.container{position:relative;overflow:hidden;align-items:center;border-radius:var(--button-border-radius);display:flex;padding:var(--button-padding);transition:border-color 400ms ease, background-color 400ms ease, color 400ms ease, fill 400ms ease;cursor:pointer}.ripple{position:absolute;border-radius:50%;transform:scale(0);animation:ripple 600ms linear;background-color:var(--button-ripple-animation)}.type-filled{background-color:var(--button-background-color);border-color:var(--button-border-color);color:var(--button-text-color);transition:border-color 400ms ease, background-color 400ms ease}.type-filled:hover{background-color:var(--button-background-color-hover);border-color:var(--button-background-color-hover)}.type-filled:active{outline-color:var(--button-outline-color);outline-style:var(--button-outline-style)}.type-outline{border-color:var(--button-border-color);color:var(--button-border-color);transition:color 200ms ease, background-color 200ms ease}.type-outline .icon-wrapper svg path{fill:var(--button-border-color);transition:fill 200ms ease}.type-outline:hover{background-color:var(--button-background-color);color:var(--button-text-color)}.type-outline:hover .icon-wrapper svg path{fill:var(--button-text-color)}.type-outline:active{outline-color:var(--button-outline-color);outline-style:var(--button-outline-style)}.shadow{box-shadow:var(--button-box-shadow)}.icon-wrapper{align-self:center;flex-shrink:0;display:flex}.icon-wrapper svg{height:100%;width:100%}.icon-wrapper svg path{fill:var(--button-text-color)}.icon{height:var(--button-icon-size);width:var(--button-icon-size)}.type-filled,.type-outline{border-width:var(--button-border-width);border-style:solid}.width-auto{width:var(--button-width)}.width-full{width:unset;justify-content:space-between}@keyframes ripple{to{transform:scale(4);opacity:0}}',h=class{constructor(o){a(this,o),this.iconRight="",this.showIconRight=!1,this.iconLeft="",this.showIconLeft=!1,this.type="filled",this.theme="default",this.width="auto",this.ripple=!1,this.renderShadow=!0}onButtonClick(o){this.ripple&&this.createRipple(o)}createRipple(o){const r=document.createElement("span"),n=Math.max(this.containerElement.clientWidth,this.containerElement.clientHeight),i=n/2;r.style.width=r.style.height=`${n}px`,r.style.left=`${o.clientX-(this.containerElement.getBoundingClientRect().left+window.scrollX+i)}px`,r.style.top=`${o.clientY-(this.containerElement.getBoundingClientRect().top+window.scrollY+i)}px`,r.classList.add("ripple");const l=this.containerElement.querySelector(".ripple");l&&l.remove(),this.containerElement.appendChild(r)}render(){return t(c,null,t("div",{ref:o=>this.containerElement=o,class:{container:!0,shadow:this.renderShadow,[`type-${this.type}`]:!0,[`theme-${this.theme}`]:!0,[`width-${this.width}`]:!0}},t("div",{class:"icon-wrapper"},this.renderLeftIconWrapper()),t("div",{class:"text"},t("slot",null)),t("div",{class:"icon-wrapper"},this.renderRightIconWrapper())))}renderRightIconWrapper(){if(this.showIconRight)return t(e,null,t("slot",{name:"icon"},this.renderRightIcon()))}renderLeftIconWrapper(){if(this.showIconLeft)return t(e,null,t("slot",{name:"icon"},this.renderLeftIcon()))}renderRightIcon(){return this.iconRight?t(e,null,t("img",{class:"icon",src:this.iconRight,alt:s.getCleanFileName(this.iconRight)})):t(e,null,t("div",{innerHTML:u,class:"icon svg-icon"}))}renderLeftIcon(){if(this.iconLeft)return t(e,null,t("img",{class:"icon",src:this.iconLeft,alt:s.getCleanFileName(this.iconLeft)}));if(this.showIconLeft)return t(e,null,t("div",{innerHTML:b,class:"icon svg-icon"}))}};h.style=d;export{h as rwc_button};