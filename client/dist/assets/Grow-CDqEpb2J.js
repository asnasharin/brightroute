import{e as F,f as nt,_ as I}from"./generateUtilityClasses-HJM5CisE.js";import{a0 as O,R as k,r as _,p as et}from"./index-BH-Ykf6z.js";import{u as it}from"./useTheme-lBEU8uLq.js";import{u as ot}from"./useTimeout-BKMNU8Hp.js";import{_ as rt,T as $}from"./TransitionGroupContext-cleRVXZm.js";const j={disabled:!1};var st=function(u){return u.scrollTop},C="unmounted",x="exited",v="entering",b="entered",U="exiting",c=function(l){rt(u,l);function u(i,n){var t;t=l.call(this,i,n)||this;var e=n,o=e&&!e.isMounting?i.enter:i.appear,a;return t.appearStatus=null,i.in?o?(a=x,t.appearStatus=v):a=b:i.unmountOnExit||i.mountOnEnter?a=C:a=x,t.state={status:a},t.nextCallback=null,t}u.getDerivedStateFromProps=function(n,t){var e=n.in;return e&&t.status===C?{status:x}:null};var s=u.prototype;return s.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},s.componentDidUpdate=function(n){var t=null;if(n!==this.props){var e=this.state.status;this.props.in?e!==v&&e!==b&&(t=v):(e===v||e===b)&&(t=U)}this.updateStatus(!1,t)},s.componentWillUnmount=function(){this.cancelNextCallback()},s.getTimeouts=function(){var n=this.props.timeout,t,e,o;return t=e=o=n,n!=null&&typeof n!="number"&&(t=n.exit,e=n.enter,o=n.appear!==void 0?n.appear:e),{exit:t,enter:e,appear:o}},s.updateStatus=function(n,t){if(n===void 0&&(n=!1),t!==null)if(this.cancelNextCallback(),t===v){if(this.props.unmountOnExit||this.props.mountOnEnter){var e=this.props.nodeRef?this.props.nodeRef.current:O.findDOMNode(this);e&&st(e)}this.performEnter(n)}else this.performExit();else this.props.unmountOnExit&&this.state.status===x&&this.setState({status:C})},s.performEnter=function(n){var t=this,e=this.props.enter,o=this.context?this.context.isMounting:n,a=this.props.nodeRef?[o]:[O.findDOMNode(this),o],p=a[0],h=a[1],N=this.getTimeouts(),L=o?N.appear:N.enter;if(!n&&!e||j.disabled){this.safeSetState({status:b},function(){t.props.onEntered(p)});return}this.props.onEnter(p,h),this.safeSetState({status:v},function(){t.props.onEntering(p,h),t.onTransitionEnd(L,function(){t.safeSetState({status:b},function(){t.props.onEntered(p,h)})})})},s.performExit=function(){var n=this,t=this.props.exit,e=this.getTimeouts(),o=this.props.nodeRef?void 0:O.findDOMNode(this);if(!t||j.disabled){this.safeSetState({status:x},function(){n.props.onExited(o)});return}this.props.onExit(o),this.safeSetState({status:U},function(){n.props.onExiting(o),n.onTransitionEnd(e.exit,function(){n.safeSetState({status:x},function(){n.props.onExited(o)})})})},s.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},s.safeSetState=function(n,t){t=this.setNextCallback(t),this.setState(n,t)},s.setNextCallback=function(n){var t=this,e=!0;return this.nextCallback=function(o){e&&(e=!1,t.nextCallback=null,n(o))},this.nextCallback.cancel=function(){e=!1},this.nextCallback},s.onTransitionEnd=function(n,t){this.setNextCallback(t);var e=this.props.nodeRef?this.props.nodeRef.current:O.findDOMNode(this),o=n==null&&!this.props.addEndListener;if(!e||o){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[e,this.nextCallback],p=a[0],h=a[1];this.props.addEndListener(p,h)}n!=null&&setTimeout(this.nextCallback,n)},s.render=function(){var n=this.state.status;if(n===C)return null;var t=this.props,e=t.children;t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef;var o=F(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return k.createElement($.Provider,{value:null},typeof e=="function"?e(n,o):k.cloneElement(k.Children.only(e),o))},u}(k.Component);c.contextType=$;c.propTypes={};function S(){}c.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:S,onEntering:S,onEntered:S,onExit:S,onExiting:S,onExited:S};c.UNMOUNTED=C;c.EXITED=x;c.ENTERING=v;c.ENTERED=b;c.EXITING=U;const at=c,ut=l=>l.scrollTop;function A(l,u){var s,i;const{timeout:n,easing:t,style:e={}}=l;return{duration:(s=e.transitionDuration)!=null?s:typeof n=="number"?n:n[u.mode]||0,easing:(i=e.transitionTimingFunction)!=null?i:typeof t=="object"?t[u.mode]:t,delay:e.transitionDelay}}const lt=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function w(l){return`scale(${l}, ${l**2})`}const dt={entering:{opacity:1,transform:w(1)},entered:{opacity:1,transform:"none"}},P=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),H=_.forwardRef(function(u,s){const{addEndListener:i,appear:n=!0,children:t,easing:e,in:o,onEnter:a,onEntered:p,onEntering:h,onExit:N,onExited:L,onExiting:W,style:M,timeout:m="auto",TransitionComponent:X=at}=u,z=F(u,lt),K=ot(),G=_.useRef(),g=it(),D=_.useRef(null),q=nt(D,t.ref,s),T=r=>f=>{if(r){const E=D.current;f===void 0?r(E):r(E,f)}},B=T(h),J=T((r,f)=>{ut(r);const{duration:E,delay:R,easing:d}=A({style:M,timeout:m,easing:e},{mode:"enter"});let y;m==="auto"?(y=g.transitions.getAutoHeightDuration(r.clientHeight),G.current=y):y=E,r.style.transition=[g.transitions.create("opacity",{duration:y,delay:R}),g.transitions.create("transform",{duration:P?y:y*.666,delay:R,easing:d})].join(","),a&&a(r,f)}),Q=T(p),V=T(W),Y=T(r=>{const{duration:f,delay:E,easing:R}=A({style:M,timeout:m,easing:e},{mode:"exit"});let d;m==="auto"?(d=g.transitions.getAutoHeightDuration(r.clientHeight),G.current=d):d=f,r.style.transition=[g.transitions.create("opacity",{duration:d,delay:E}),g.transitions.create("transform",{duration:P?d:d*.666,delay:P?E:E||d*.333,easing:R})].join(","),r.style.opacity=0,r.style.transform=w(.75),N&&N(r)}),Z=T(L),tt=r=>{m==="auto"&&K.start(G.current||0,r),i&&i(D.current,r)};return et.jsx(X,I({appear:n,in:o,nodeRef:D,onEnter:J,onEntered:Q,onEntering:B,onExit:Y,onExited:Z,onExiting:V,addEndListener:tt,timeout:m==="auto"?null:m},z,{children:(r,f)=>_.cloneElement(t,I({style:I({opacity:0,transform:w(.75),visibility:r==="exited"&&!o?"hidden":void 0},dt[r],M,t.props.style),ref:q},f))}))});H.muiSupportAuto=!0;const mt=H;export{mt as G,at as T,A as g,ut as r};
