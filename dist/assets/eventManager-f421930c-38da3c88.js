class n{constructor(){this.subscribedEvents=[]}registerEventListener(e,s,t){e.addEventListener(s,t),this.subscribedEvents.push({element:e,name:s,callback:t})}clearEventListeners(){this.subscribedEvents.forEach(e=>{e.element.removeEventListener(e.name,e.callback)})}}export{n as E};