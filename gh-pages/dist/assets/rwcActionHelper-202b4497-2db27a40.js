class t{static getLastComponentId(){return t.lastComponentId++}static getDefaultComponentKey(a){return`${t.RWC_ACTION_PREFIX}-${a}-${t.getLastComponentId()}`}static bindRWCActions(a,c,e,l,r="click"){if(e.length>0){const i=e.map(s=>`[data-${t.RWC_ACTION_PREFIX}-${s}='${l}']`).join(", ");document.querySelectorAll(i).forEach(s=>{e.forEach(n=>{if(s.getAttribute(`data-${t.RWC_ACTION_PREFIX}-${n}`)){const o=this.createCallback(a,c,n);a.eventManager.registerEventListener(s,r,o)}})})}}static createCallback(a,c,e){return l=>{var r;((r=l.detail)===null||r===void 0?void 0:r.origin)!==c&&a[e].call(a,l)}}}t.RWC_ACTION_PREFIX="rwc";t.lastComponentId=1;export{t as R};