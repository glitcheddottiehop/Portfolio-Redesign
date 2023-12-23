import{l as r,m as o,p as n,H as s,q as a}from"./index-f173c7d3.js";import{E as d}from"./eventManager-f421930c-38da3c88.js";const p='@font-face{font-family:"Inter";font-style:normal;font-weight:400;font-display:swap;src:url("assets/fonts/inter/Inter-Regular.woff2?v=1.0") format("woff2"), url("assets/fonts/inter/Inter-Regular.woff?v=1.0") format("woff")}@font-face{font-family:"Inter";font-style:normal;font-weight:500;font-display:swap;src:url("assets/fonts/inter/Inter-Medium.woff2?v=1.0") format("woff2"), url("assets/fonts/inter/Inter-Medium.woff?v=1.0") format("woff")}@font-face{font-family:"Inter";font-style:normal;font-weight:600;font-display:swap;src:url("assets/fonts/inter/Inter-SemiBold.woff2?v=1.0") format("woff2"), url("assets/fonts/inter/Inter-SemiBold.woff?v=1.0") format("woff")}:host{--dropdown-background-color:#fff;--dropdown-border:1px solid rgb(224, 224, 224);--dropdown-border-radius:0.5rem;--dropdown-box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);--dropdown-max-width:100%;--dropdown-wrapper-transition:height var(--dropdown-animation-duration) ease-in-out;--dropdown-container-margin:0.125rem 0 0 0;--dropdown-container-padding:0.5rem 0;--dropdown-item-padding:0.125rem 0.5rem;--dropdown-item-background-color:transparent;--dropdown-item-hover-background-color:rgb(238, 238, 238);--dropdown-animation-duration:200ms;display:block;position:relative}.wrapper{background-color:var(--dropdown-background-color);border:var(--dropdown-border);border-radius:var(--dropdown-border-radius);box-shadow:var(--dropdown-box-shadow);height:0;left:-99999px;margin:var(--dropdown-container-margin);max-width:var(--dropdown-wrapper-max-width);overflow:hidden;position:absolute;transition:visibility 0ms var(--dropdown-animation-duration), left 0ms var(--dropdown-animation-duration), var(--dropdown-wrapper-transition)}.wrapper.open{left:0;visibility:visible;height:auto;transition:var(--dropdown-wrapper-transition)}.wrapper.mode-fixed{position:fixed}.wrapper.size-auto .container{display:inline-block}.container{padding:var(--dropdown-container-padding)}::slotted(*){background-color:var(--dropdown-item-background-color);padding:var(--dropdown-item-padding)}::slotted(*:hover){background-color:var(--dropdown-item-hover-background-color)}',l=class{constructor(t){r(this,t),this.dropdownOpenEvent=o(this,"dropdownOpen",7),this.dropdownCloseEvent=o(this,"dropdownClose",7),this.eventManager=new d,this.openMode="manual",this.position="bottom",this.size="parent",this.mode="fixed",this.isOpen=!1}componentWillLoad(){this.parent=this.host.parentElement,this.init()}componentDidLoad(){this.wrapperElement.style.height="0px"}disconnectedCallback(){this.eventManager.clearEventListeners()}async init(){this.eventManager.clearEventListeners(),this.initHoverEvents(),this.initClickEvents()}onWindowScroll(){this.mode==="fixed"&&this.calculateDropdownOffset()}onWindowResize(){this.isOpen&&this.setState(!1)}async onDocumentClick(t){this.isOpen&&!t.composedPath().includes(this.wrapperElement)&&(await new Promise(requestAnimationFrame),this.setState(!1))}initHoverEvents(){this.openMode==="hover"&&(this.eventManager.registerEventListener(this.parent,"mouseenter",()=>this.setState(!0)),this.eventManager.registerEventListener(this.parent,"mouseleave",()=>this.setState(!1)))}initClickEvents(){this.openMode==="toggle"&&this.eventManager.registerEventListener(this.parent,"click",async()=>{this.isOpen||(await new Promise(requestAnimationFrame),this.setState(!0))})}async setState(t){this.handleStateChange(t)}async handleStateChange(t){this.isOpen=t,this.isOpen?this.dropdownOpenEvent.emit():this.dropdownCloseEvent.emit(),await new Promise(requestAnimationFrame),this.calculateDropdownSize(),this.calculateDropdownOffset()}async calculateDropdownOffset(){if(this.wrapperElement&&this.parent){let t=this.getStartingOffset();t=this.calculateSideOffset(t),t=this.fixOverflow(t),this.wrapperElement.style.left=this.isOpen?`${t.x}px`:"",this.wrapperElement.style.top=`${t.y}px`}}getStartingOffset(){return this.mode==="fixed"?{x:this.parent.getBoundingClientRect().left,y:this.parent.getBoundingClientRect().top}:{x:0,y:0}}calculateSideOffset({x:t,y:e}){return this.position==="side"?(t+=this.parent.offsetWidth,this.mode==="absolute"&&(e=-this.parent.offsetHeight)):this.mode==="fixed"&&(e+=this.parent.offsetHeight),{x:t,y:e}}fixOverflow({x:t,y:e}){const i=this.mode==="absolute"?this.parent.getBoundingClientRect().left+t+this.wrapperElement.offsetWidth:t+this.wrapperElement.offsetWidth;return i>window.innerWidth&&(t-=i-window.innerWidth),{x:t,y:e}}async calculateDropdownSize(){this.wrapperElement.style.height=`${this.isOpen?this.containerElement.offsetHeight:0}px`,this.mode==="fixed"&&this.size==="parent"?this.wrapperElement.style.width=`${this.parent.offsetWidth}px`:this.wrapperElement.style.width=""}render(){return n(s,null,n("div",{ref:t=>this.wrapperElement=t,class:{wrapper:!0,open:this.isOpen,[`mode-${this.mode}`]:!0,[`size-${this.size}`]:!0}},n("div",{ref:t=>this.containerElement=t,class:"container"},n("div",{class:"content"},n("slot",null)))))}get host(){return a(this)}};l.style=p;export{l as rwc_dropdown};