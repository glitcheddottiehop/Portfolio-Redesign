import{l as e,p as r}from"./index-19c43f58.js";const a='@font-face{font-family:"Inter";font-style:normal;font-weight:400;font-display:swap;src:url("assets/fonts/inter/Inter-Regular.woff2?v=1.0") format("woff2"), url("assets/fonts/inter/Inter-Regular.woff?v=1.0") format("woff")}@font-face{font-family:"Inter";font-style:normal;font-weight:500;font-display:swap;src:url("assets/fonts/inter/Inter-Medium.woff2?v=1.0") format("woff2"), url("assets/fonts/inter/Inter-Medium.woff?v=1.0") format("woff")}@font-face{font-family:"Inter";font-style:normal;font-weight:600;font-display:swap;src:url("assets/fonts/inter/Inter-SemiBold.woff2?v=1.0") format("woff2"), url("assets/fonts/inter/Inter-SemiBold.woff?v=1.0") format("woff")}:host{--card-border-width:2px;--card-border-style:solid;--card-border-color:rgb(224, 224, 224);--card-hover-border-color:rgb(144, 238, 144);--card-border-radius:0.75rem;--card-border-transition:border-bottom-color 0.4s, border-left-color 0.4s, border-right-color 0.4s, border-top-color 0.4s, width 0.4s ease-in-out, height 0.4s ease-in-out;--card-box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);--card-box-shadow-animated-hover:0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);--card-container-transition:box-shadow 0.4s ease-in-out;--card-inner-padding:1rem}.container{border-radius:var(--card-border-radius);padding:var(--card-inner-padding);position:relative;transition:var(--card-container-transition)}.shadow{box-shadow:var(--card-box-shadow)}.shadow:hover{box-shadow:var(--card-box-shadow-animated-hover)}.border:not(.animate-border){border-color:var(--card-border-color);border-style:var(--card-border-style);border-width:var(--card-border-width);border-radius:var(--card-border-radius);transition:border-color 100ms linear}.border:not(.animate-border):hover{border-color:var(--card-hover-border-color)}.animate-border::before,.animate-border::after{border-color:transparent;border-style:var(--card-border-style);border-width:var(--card-border-width);border-radius:var(--card-border-radius);content:"";height:0;width:0;position:absolute;transition:var(--card-border-transition)}.animate-border::before{left:0;top:0}.animate-border::after{right:0;bottom:0}.animate-border:hover::before,.animate-border:hover::after{height:calc(100% - var(--card-border-width) * 2);width:calc(100% - var(--card-border-width) * 2)}.animate-border:hover::before{border-top-color:var(--card-hover-border-color);border-left-color:var(--card-hover-border-color)}.animate-border:hover::after{border-bottom-color:var(--card-hover-border-color);border-right-color:var(--card-hover-border-color)}.pointer:hover{cursor:pointer}',t=class{constructor(o){e(this,o),this.renderShadow=!0,this.renderBorder=!1,this.animateBorder=!1,this.pointer=!1}render(){return r("div",{class:{container:!0,"animate-border":this.animateBorder,border:this.renderBorder,shadow:this.renderShadow,pointer:this.pointer}},r("slot",null))}};t.style=a;export{t as rwc_card};