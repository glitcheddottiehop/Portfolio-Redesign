import{l as o,p as e,H as r}from"./index-19c43f58.js";const a='@font-face{font-family:"Inter";font-style:normal;font-weight:400;font-display:swap;src:url("assets/fonts/inter/Inter-Regular.woff2?v=1.0") format("woff2"), url("assets/fonts/inter/Inter-Regular.woff?v=1.0") format("woff")}@font-face{font-family:"Inter";font-style:normal;font-weight:500;font-display:swap;src:url("assets/fonts/inter/Inter-Medium.woff2?v=1.0") format("woff2"), url("assets/fonts/inter/Inter-Medium.woff?v=1.0") format("woff")}@font-face{font-family:"Inter";font-style:normal;font-weight:600;font-display:swap;src:url("assets/fonts/inter/Inter-SemiBold.woff2?v=1.0") format("woff2"), url("assets/fonts/inter/Inter-SemiBold.woff?v=1.0") format("woff")}:host{--folding-squares-color:rgb(70, 130, 180);--folding-squares-size:3rem;display:block}.folding-cube{margin:calc(var(--folding-squares-size) / 2) auto;width:var(--folding-squares-size);aspect-ratio:1;position:relative;-webkit-transform:rotateZ(45deg);transform:rotateZ(45deg)}.folding-cube .cube{float:left;width:50%;height:50%;position:relative;-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1)}.folding-cube .cube:before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--folding-squares-color);-webkit-animation:foldCubeAngle 2.4s infinite linear both;animation:foldCubeAngle 2.4s infinite linear both;-webkit-transform-origin:100% 100%;-ms-transform-origin:100% 100%;transform-origin:100% 100%}.folding-cube .cube2{-webkit-transform:scale(1.1) rotateZ(90deg);transform:scale(1.1) rotateZ(90deg)}.folding-cube .cube3{-webkit-transform:scale(1.1) rotateZ(180deg);transform:scale(1.1) rotateZ(180deg)}.folding-cube .cube4{-webkit-transform:scale(1.1) rotateZ(270deg);transform:scale(1.1) rotateZ(270deg)}.folding-cube .cube2:before{-webkit-animation-delay:0.3s;animation-delay:0.3s}.folding-cube .cube3:before{-webkit-animation-delay:0.6s;animation-delay:0.6s}.folding-cube .cube4:before{-webkit-animation-delay:0.9s;animation-delay:0.9s}@-webkit-keyframes foldCubeAngle{0%,10%{-webkit-transform:perspective(140px) rotateX(-180deg);transform:perspective(140px) rotateX(-180deg);opacity:0}25%,75%{-webkit-transform:perspective(140px) rotateX(0deg);transform:perspective(140px) rotateX(0deg);opacity:1}90%,100%{-webkit-transform:perspective(140px) rotateY(180deg);transform:perspective(140px) rotateY(180deg);opacity:0}}@keyframes foldCubeAngle{0%,10%{-webkit-transform:perspective(140px) rotateX(-180deg);transform:perspective(140px) rotateX(-180deg);opacity:0}25%,75%{-webkit-transform:perspective(140px) rotateX(0deg);transform:perspective(140px) rotateX(0deg);opacity:1}90%,100%{-webkit-transform:perspective(140px) rotateY(180deg);transform:perspective(140px) rotateY(180deg);opacity:0}}',s=class{constructor(t){o(this,t)}render(){return e(r,null,e("div",{class:"folding-cube"},e("div",{class:"cube1 cube"}),e("div",{class:"cube2 cube"}),e("div",{class:"cube4 cube"}),e("div",{class:"cube3 cube"})))}};s.style=a;export{s as rwc_folding_squares};
