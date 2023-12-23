import{l as o,p as n,H as i,q as r,s as e}from"./index-19c43f58.js";import{E as a}from"./expand_more-fa2ad8bf-d0b0b2f2.js";const s='@font-face{font-family:"Inter";font-style:normal;font-weight:400;font-display:swap;src:url("assets/fonts/inter/Inter-Regular.woff2?v=1.0") format("woff2"), url("assets/fonts/inter/Inter-Regular.woff?v=1.0") format("woff")}@font-face{font-family:"Inter";font-style:normal;font-weight:500;font-display:swap;src:url("assets/fonts/inter/Inter-Medium.woff2?v=1.0") format("woff2"), url("assets/fonts/inter/Inter-Medium.woff?v=1.0") format("woff")}@font-face{font-family:"Inter";font-style:normal;font-weight:600;font-display:swap;src:url("assets/fonts/inter/Inter-SemiBold.woff2?v=1.0") format("woff2"), url("assets/fonts/inter/Inter-SemiBold.woff?v=1.0") format("woff")}:host{--accordion-default-font-family:Inter, system-ui, sans-serif;--accordion-heading-padding:0.5rem 0;--accordion-heading-font-family:var(--accordion-default-font-family);--accordion-heading-font-size:1.25rem;--accordion-heading-font-weight:500;--accordion-content-line-height:1.2;--accordion-content-padding:0.5rem 0 1rem 0;--accordion-content-font-family:var(--accordion-default-font-family);--accordion-content-font-size:1rem;--accordion-content-font-weight:400;--accordion-content-line-height:1.2;--accordion-divider-background-color:rgb(224, 224, 224);--accordion-divider-height:1px;--accordion-icon-color:rgb(189, 189, 189);--accordion-icon-open-transform:rotate(-180deg);--accordion-animation-duration:200ms;display:block}.heading{cursor:pointer;user-select:none;font-family:var(--accordion-heading-font-family);font-size:var(--accordion-heading-font-size);font-weight:var(--accordion-heading-font-weight);line-height:var(--accordion-content-line-height);padding:var(--accordion-heading-padding)}.heading.with-icon{display:flex;flex-direction:row;justify-content:space-between}.left,.right{display:flex;flex-direction:column;justify-content:center}.left{flex-grow:1}.right{flex-shrink:0}.icon{display:flex;flex-direction:column;justify-content:center;fill:var(--accordion-icon-color);transition:transform var(--accordion-animation-duration) ease-in-out}.content-wrapper{height:0;overflow:hidden;transition:height var(--accordion-animation-duration) ease-in-out}.content{font-family:var(--accordion-default-font-family);font-size:var(--accordion-content-font-size);font-weight:var(--accordion-content-font-weight);padding:var(--accordion-content-padding)}.divider{background-color:var(--accordion-divider-background-color);height:var(--accordion-divider-height)}.open .content-wrapper{height:auto}.open .icon.rotate{transform:var(--accordion-icon-open-transform)}',f=class{constructor(t){o(this,t),this.open=!1,this.renderDivider=!0,this.renderIcon=!0}get animationDuration(){return Number.parseInt(getComputedStyle(this.host).getPropertyValue("--accordion-animation-duration"))}onHeadingClick(){this.setState(!this.open)}async setState(t){this.animationCallback!==null&&clearTimeout(this.animationCallback),this.open=t,t?this.contentWrapperElement.style.height=`${this.contentElement.offsetHeight}px`:(this.contentWrapperElement.style.height=`${this.contentElement.offsetHeight}px`,await new Promise(requestAnimationFrame),this.contentWrapperElement.style.height="0px"),this.animationCallback=setTimeout(()=>{this.contentWrapperElement.style.height="",this.animationCallback=null},this.animationDuration)}render(){return n(i,{class:{open:this.open}},n("div",{class:{container:!0,open:this.open}},n("div",{class:{heading:!0,"with-icon":this.renderIcon},onClick:()=>this.onHeadingClick()},n("div",{class:"left"},n("slot",{name:"heading"})),this.renderHeadingIconContainer()),n("div",{ref:t=>this.contentWrapperElement=t,class:"content-wrapper"},n("div",{ref:t=>this.contentElement=t,class:"content"},n("slot",null))),this.renderDividerElement()))}renderDividerElement(){return this.renderDivider?n("div",{class:"divider"}):n(e,null)}renderHeadingIconContainer(){return this.renderIcon?n("div",{class:"right"},n("slot",{name:"heading-icon"},this.renderDefaultIcon())):n(e,null)}renderDefaultIcon(){return n("div",{class:"icon rotate",innerHTML:a})}get host(){return r(this)}};f.style=s;const c='@font-face{font-family:"Inter";font-style:normal;font-weight:400;font-display:swap;src:url("assets/fonts/inter/Inter-Regular.woff2?v=1.0") format("woff2"), url("assets/fonts/inter/Inter-Regular.woff?v=1.0") format("woff")}@font-face{font-family:"Inter";font-style:normal;font-weight:500;font-display:swap;src:url("assets/fonts/inter/Inter-Medium.woff2?v=1.0") format("woff2"), url("assets/fonts/inter/Inter-Medium.woff?v=1.0") format("woff")}@font-face{font-family:"Inter";font-style:normal;font-weight:600;font-display:swap;src:url("assets/fonts/inter/Inter-SemiBold.woff2?v=1.0") format("woff2"), url("assets/fonts/inter/Inter-SemiBold.woff?v=1.0") format("woff")}:host{--navigation-container-padding:0.5rem;--navigation-container-border:none;--navigation-container-border-radius:none;--navigation-font-family:Inter, system-ui, sans-serif;--navigation-font-size:1rem;--navigation-font-weight:500;--navigation-line-height:1.2;display:block}.container{display:flex;flex-direction:row;font-family:var(--navigation-font-family);font-size:var(--navigation-font-size);font-weight:var(--navigation-font-weight);line-height:var(--navigation-line-height);padding:var(--navigation-container-padding);border:var(--navigation-container-border);border-radius:var(--navigation-container-border-radius)}.container.vertical,.container.accordion{flex-direction:column}',l=class{constructor(t){o(this,t),this.type="horizontal"}render(){return n(i,null,n("div",{class:{container:!0,[this.type]:!0}},n("slot",{name:"before"}),n("slot",null),n("slot",{name:"after"})))}};l.style=c;export{f as rwc_accordion,l as rwc_navigation};
