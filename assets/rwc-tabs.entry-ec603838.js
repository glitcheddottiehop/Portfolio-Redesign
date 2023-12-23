import{l as c,m as h,p as i,H as b,q as m}from"./index-19c43f58.js";import{E as l}from"./eventManager-f421930c-38da3c88.js";import{R as d}from"./rwcActionHelper-202b4497-2db27a40.js";class v{constructor(e=!1,s=!1){this.dragging=e,this.moving=s}}class g{constructor(e=0,s=0,o=0,a=0){this.left=e,this.top=s,this.x=o,this.y=a}}class n{get dragging(){return this.state.dragging&&this.state.moving}constructor(e){this.position=new g,this.state=new v,this.element=null,this.initialCursorStyle="",this.dragTimeout=null,this.mouseDownHandler=s=>{s.composedPath().includes(this.element)&&(this.startDrag(),this.position={left:this.element.scrollLeft,top:this.element.scrollTop,x:s.clientX,y:s.clientY},document.addEventListener("mousemove",this.mouseMoveHandler),document.addEventListener("mouseup",this.mouseUpHandler))},this.mouseMoveHandler=s=>{const o=s.clientX-this.position.x,a=s.clientY-this.position.y;(o!==0||a!==0)&&(this.state.moving=!0),this.element.scrollTop=this.position.top-a,this.element.scrollLeft=this.position.left-o},this.mouseUpHandler=()=>{document.removeEventListener("mousemove",this.mouseMoveHandler),document.removeEventListener("mouseup",this.mouseUpHandler),this.element.style.cursor=this.initialCursorStyle,this.stopDrag()},this.init(e)}init(e){this.element=e,this.initialCursorStyle=e.style.cursor||"",this.element.addEventListener("mousedown",this.mouseDownHandler)}destroy(){this.element.removeEventListener("mouseDown",this.mouseDownHandler)}startDrag(){this.stopDrag(),this.dragTimeout=setTimeout(()=>{this.state.dragging=!0},n.DRAG_STATE_DELAY)}stopDrag(){this.dragTimeout!==null&&(clearTimeout(this.dragTimeout),this.dragTimeout=null),(this.state.dragging||this.state.moving)&&setTimeout(()=>{this.state.dragging=!1,this.state.moving=!1},1)}}n.DRAG_STATE_DELAY=200;const u='@font-face{font-family:"Inter";font-style:normal;font-weight:400;font-display:swap;src:url("assets/fonts/inter/Inter-Regular.woff2?v=1.0") format("woff2"), url("assets/fonts/inter/Inter-Regular.woff?v=1.0") format("woff")}@font-face{font-family:"Inter";font-style:normal;font-weight:500;font-display:swap;src:url("assets/fonts/inter/Inter-Medium.woff2?v=1.0") format("woff2"), url("assets/fonts/inter/Inter-Medium.woff?v=1.0") format("woff")}@font-face{font-family:"Inter";font-style:normal;font-weight:600;font-display:swap;src:url("assets/fonts/inter/Inter-SemiBold.woff2?v=1.0") format("woff2"), url("assets/fonts/inter/Inter-SemiBold.woff?v=1.0") format("woff")}:host{--tabs-tab-text-color:rgb(33, 33, 33);--tabs-tab-hover-text-color:rgb(33, 33, 33);--tabs-tab-active-text-color:rgb(33, 33, 33);--tabs-tab-padding:0.25rem 0.5rem;--tabs-tab-border-bottom:2px solid transparent;--tabs-tab-hover-border-bottom-color:rgb(224, 224, 224);--tabs-tab-active-border-bottom-color:#111;--tabs-tab-transition:border-bottom-color var(--tabs-animation-duration) linear, color var(--tabs-animation-duration) linear;--tabs-segments-wrapper-background-color:rgb(224, 224, 224);--tabs-segments-wrapper-padding:0.25rem;--tabs-segments-wrapper-border-radius:100vh;--tabs-segment-text-color:rgb(33, 33, 33);--tabs-segment-hover-text-color:rgb(33, 33, 33);--tabs-segment-active-text-color:#fff;--tabs-segment-hover-background-color:rgb(238, 238, 238);--tabs-segment-transition-background-color:background-color var(--tabs-animation-duration) linear;--tabs-segment-transition-color:color var(--tabs-animation-duration) linear var(--tabs-animation-duration);--tabs-segment-indicator-background-color:#111;--tabs-segment-indicator-transition:left var(--tabs-animation-duration) ease-in-out, width var(--tabs-animation-duration) ease-in-out;--tabs-indicator-border-radius:100vh;--tabs-animation-duration:200ms;display:block;position:relative}.container{overflow-x:scroll;position:relative;scrollbar-width:none;-ms-overflow-style:none}.container::-webkit-scrollbar{display:none}.tabs-container{width:fit-content;position:relative}.tabs-inner-container{display:flex;flex-direction:row;position:relative;width:fit-content;user-select:none;z-index:1}.indicator{bottom:0;left:0;position:absolute}::slotted(*){cursor:pointer;white-space:nowrap;padding:var(--tabs-tab-padding)}.mode-underline ::slotted(*){border-bottom:var(--tabs-tab-border-bottom);color:var(--tabs-tab-text-color);transition:var(--tabs-tab-transition)}.mode-underline ::slotted(*:hover){border-bottom-color:var(--tabs-tab-hover-border-bottom-color);color:var(--tabs-tab-hover-text-color)}.mode-underline ::slotted(.active){border-bottom-color:var(--tabs-tab-active-border-bottom-color);color:var(--tabs-tab-active-text-color)}.mode-segments .tabs-wrapper{background-color:var(--tabs-segments-wrapper-background-color);padding:var(--tabs-segments-wrapper-padding);border-radius:var(--tabs-segments-wrapper-border-radius);width:fit-content}.mode-segments .indicator{background-color:var(--tabs-segment-indicator-background-color);border-radius:var(--tabs-indicator-border-radius);bottom:unset;height:100%;top:0;transition:var(--tabs-segment-indicator-transition)}.mode-segments ::slotted(*){border-radius:100vh;color:var(--tabs-segment-text-color);transition:var(--tabs-segment-transition-background-color), var(--tabs-segment-transition-color)}.mode-segments ::slotted(*:hover){color:var(--tabs-segment-hover-text-color)}.mode-segments ::slotted(*:hover:not(.active)){background-color:var(--tabs-segment-hover-background-color)}.mode-segments ::slotted(.active){color:var(--tabs-segment-active-text-color);transition:var(--tabs-segment-transition-color)}',r=class{constructor(t){c(this,t),this.changeEvent=h(this,"indexChange",7),this.eventManager=new l,this.tabEventManager=new l,this.actions=["goTo"],this.textAnimationCoroutine=null,this.dragMove=null,this.resizeHandler=()=>{var e;((e=this.tabs)===null||e===void 0?void 0:e.length)>0&&this.tabs[this.validateTargetIndex(this.activeTab)].scrollIntoView({behavior:"smooth",inline:"center"})},this.rwcKey=d.getDefaultComponentKey("tabs"),this.mode="underline",this.defaultTab=0,this.activeTab=0}validateTargetIndex(t){return t>this.tabs.length-1||t<0?0:t}get tabsWrapperPaddingLeft(){var t;return Number.parseFloat((t=getComputedStyle(this.tabsWrapper).paddingLeft)!==null&&t!==void 0?t:"0")}onWindowResize(){this.resizeHandler()}componentWillLoad(){this.activeTab=this.defaultTab>0?this.defaultTab:0}componentDidLoad(){this.init()}disconnectedCallback(){this.dragMove.destroy(),this.eventManager.clearEventListeners()}init(){this.initTabClickEvents(),this.initDefaultTab(),this.dragMove=new n(this.root),this.initGoToEventListeners()}initDefaultTab(){this.activeTab=this.validateTargetIndex(this.activeTab),this.tabs.length>0&&(this.indicator.style.width=this.tabs[this.activeTab].getBoundingClientRect().width+"px",this.indicator.style.left=this.tabs[this.activeTab].offsetLeft-this.tabsWrapperPaddingLeft+"px",this.tabs[this.activeTab].classList.add("active"))}initTabClickEvents(){this.tabEventManager.clearEventListeners(),this.tabs=this.tabContainer.assignedElements(),this.tabs.forEach((t,e)=>{this.tabEventManager.registerEventListener(t,"click",()=>{this.dragMove.dragging||this.goTo(e)})})}async goTo(t){const e=this.validateTargetIndex(t instanceof CustomEvent?Number.parseInt(t.detail.next):t);if(this.activeTab!==t){this.tabs.forEach(o=>{o.classList.remove(r.ACTIVE_TAB_CLASS)}),this.tabs[e].scrollIntoView({behavior:"smooth",inline:"center"}),this.indicator.style.left=this.tabs[e].offsetLeft-this.tabsWrapperPaddingLeft+"px",this.indicator.style.width=this.tabs[e].getBoundingClientRect().width+"px";const s=t instanceof CustomEvent?t:null;this.setActiveTab(e,s),this.cancelTextAnimation()}}setActiveTab(t,e){var s;this.tabs[t].classList.add(r.ACTIVE_TAB_CLASS),this.changeEvent.emit((s=e==null?void 0:e.detail)!==null&&s!==void 0?s:{origin:this.host,next:t,previous:this.activeTab}),this.activeTab=t}cancelTextAnimation(){clearInterval(this.textAnimationCoroutine)}initGoToEventListeners(){d.bindRWCActions(this,this.host,this.actions,this.rwcKey,"indexChange")}renderIndicator(){return i("div",{class:"indicator",ref:t=>this.indicator=t})}render(){return i(b,null,i("div",{class:{container:!0,[`mode-${this.mode}`]:!0},ref:t=>this.root=t},i("div",{class:"tabs-wrapper",ref:t=>this.tabsWrapper=t},i("div",{class:"tabs-container"},i("div",{class:"tabs-inner-container"},i("slot",{ref:t=>this.tabContainer=t,onSlotchange:()=>this.initTabClickEvents()})),this.renderIndicator()))))}get host(){return m(this)}};r.ACTIVE_TAB_CLASS="active";r.style=u;export{r as rwc_tabs};