import{l as f,p as o,H as l,q as u}from"./index-19c43f58.js";import{D as n}from"./document-utils-45dd6558-c6b85a27.js";const c='@font-face{font-family:"Inter";font-style:normal;font-weight:400;font-display:swap;src:url("assets/fonts/inter/Inter-Regular.woff2?v=1.0") format("woff2"), url("assets/fonts/inter/Inter-Regular.woff?v=1.0") format("woff")}@font-face{font-family:"Inter";font-style:normal;font-weight:500;font-display:swap;src:url("assets/fonts/inter/Inter-Medium.woff2?v=1.0") format("woff2"), url("assets/fonts/inter/Inter-Medium.woff?v=1.0") format("woff")}@font-face{font-family:"Inter";font-style:normal;font-weight:600;font-display:swap;src:url("assets/fonts/inter/Inter-SemiBold.woff2?v=1.0") format("woff2"), url("assets/fonts/inter/Inter-SemiBold.woff?v=1.0") format("woff")}:host{--icon-text-steps-grid-column-gap:1.5rem;--icon-text-steps-grid-columns-row-gap:1.5rem;--icon-text-steps-card-width:10.75rem;display:block}.container{position:relative}.grid{--grid-column-gap:var(--icon-text-steps-grid-column-gap);--grid-row-gap:var(--icon-text-steps-grid-columns-row-gap)}::slotted(*){width:var(--icon-text-steps-card-width);margin-left:auto;margin-right:auto}',s=class{constructor(t){f(this,t),this.columns=4,this.autoUpdateLayout=!0,this.autoColumnCount=4}onWindowResize(){this.updateLayout()}componentDidLoad(){this.updateLayout()}updateLayout(){if(this.autoUpdateLayout){const t=this.host.children.length;if(t>0){const i=n.convertToPixels(getComputedStyle(this.host).getPropertyValue("--icon-text-steps-card-width")),r=n.convertToPixels(getComputedStyle(this.host).getPropertyValue("--icon-text-steps-grid-column-gap")),a=t*i+(t-1)*r;let e=this.host.offsetWidth;typeof e>"u"&&(e=window.innerWidth),e>=a?(this.autoColumnCount=t,this.host.classList.remove(s.VERTICAL_LAYOUT_CLASS)):(this.autoColumnCount=1,this.host.classList.add(s.VERTICAL_LAYOUT_CLASS))}else this.autoColumnCount=4}}render(){return o(l,null,o("div",{class:"container"},o("rwc-grid",{class:"grid",columns:this.autoUpdateLayout?this.autoColumnCount:this.columns},o("slot",null))))}get host(){return u(this)}};s.VERTICAL_LAYOUT_CLASS="vertical";s.style=c;export{s as rwc_icon_text_steps};
