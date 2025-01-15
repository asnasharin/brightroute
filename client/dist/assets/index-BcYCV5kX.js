import{p as C,t as S,b as E,d as R,r as g,u as j,a as k,e as l,j as t,F as y,B as A}from"./index-BH-Ykf6z.js";import{j as w}from"./generateUtilityClasses-HJM5CisE.js";import{r as N}from"./createSvgIcon-BIW1WnVJ.js";import{N as T}from"./index-BZKSan8_.js";import"./emotion-react.browser.esm-ZdKyTOPI.js";import"./createSvgIcon-LLNz0GyT.js";import"./useTimeout-BKMNU8Hp.js";import"./ownerWindow-D1Z5qid2.js";import"./Toast-8TpPbULq.js";import"./index-BVfO-N0a.js";import"./index-DYTiCvF8.js";/* empty css                     */import"./no-profile-image-7REqqSE_.js";var x={},D=w;Object.defineProperty(x,"__esModule",{value:!0});var _=x.default=void 0,I=D(N()),M=C;_=x.default=(0,I.default)((0,M.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8z"}),"CheckCircle");var v={},$=w;Object.defineProperty(v,"__esModule",{value:!0});var P=v.default=void 0,z=$(N()),U=C;P=v.default=(0,z.default)((0,U.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2m0 16H8V7h11z"}),"ContentCopy");var q=function(){var o=document.getSelection();if(!o.rangeCount)return function(){};for(var a=document.activeElement,e=[],i=0;i<o.rangeCount;i++)e.push(o.getRangeAt(i));switch(a.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":a.blur();break;default:a=null;break}return o.removeAllRanges(),function(){o.type==="Caret"&&o.removeAllRanges(),o.rangeCount||e.forEach(function(c){o.addRange(c)}),a&&a.focus()}},F=q,b={"text/plain":"Text","text/html":"Url",default:"Text"},H="Copy to clipboard: #{key}, Enter";function L(o){var a=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return o.replace(/#{\s*key\s*}/g,a)}function V(o,a){var e,i,c,f,p,n,h=!1;a||(a={}),e=a.debug||!1;try{c=F(),f=document.createRange(),p=document.getSelection(),n=document.createElement("span"),n.textContent=o,n.ariaHidden="true",n.style.all="unset",n.style.position="fixed",n.style.top=0,n.style.clip="rect(0, 0, 0, 0)",n.style.whiteSpace="pre",n.style.webkitUserSelect="text",n.style.MozUserSelect="text",n.style.msUserSelect="text",n.style.userSelect="text",n.addEventListener("copy",function(s){if(s.stopPropagation(),a.format)if(s.preventDefault(),typeof s.clipboardData>"u"){e&&console.warn("unable to use e.clipboardData"),e&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var r=b[a.format]||b.default;window.clipboardData.setData(r,o)}else s.clipboardData.clearData(),s.clipboardData.setData(a.format,o);a.onCopy&&(s.preventDefault(),a.onCopy(s.clipboardData))}),document.body.appendChild(n),f.selectNodeContents(n),p.addRange(f);var d=document.execCommand("copy");if(!d)throw new Error("copy command was unsuccessful");h=!0}catch(s){e&&console.error("unable to copy using execCommand: ",s),e&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(a.format||"text",o),a.onCopy&&a.onCopy(window.clipboardData),h=!0}catch(r){e&&console.error("unable to copy using clipboardData: ",r),e&&console.error("falling back to prompt"),i=L("message"in a?a.message:H),window.prompt(i,o)}}finally{p&&(typeof p.removeRange=="function"?p.removeRange(f):p.removeAllRanges()),n&&document.body.removeChild(n),c()}return h}var B=V;const O=S(B),ne=()=>{const{paymentId:o}=E(),a=R(),[e,i]=g.useState(null),[c,f]=g.useState(null),[p,n]=g.useState(),h=j(),{user:d}=k(r=>r.userAuth);g.useEffect(()=>{(async()=>{var r,u;try{const m=await a.get(`/mentor/paymentDetails/${o}`,{withCredentials:!0});n((u=(r=m.data)==null?void 0:r.paymentDetails)==null?void 0:u.mentee_id),i(m.data.paymentDetails)}catch(m){console.log(m)}})()},[a,o]),g.useEffect(()=>{e&&(async()=>{var m;const u=await a.get(`/mentor/plan/${e==null?void 0:e.mentor_plan_id}`);f((m=u.data)==null?void 0:m.plan)})()},[a,e]);const s=r=>{O(r)&&A.success("Copied to Clipboard")};return l(y,{children:[t(T,{}),t("div",{className:"w-full h-screen bg-background-two text-white",children:t("div",{className:"w-full h-full flex justify-center px-6 py-3",children:l("figure",{className:"w-full bg-gray-800 rounded-xl px-8 md:w-1/2",children:[(d==null?void 0:d.role)==="mentor"?t("div",{className:"pt-6 space-y-4",children:l("blockquote",{children:[t("p",{className:"text-lg font-medium",children:e==null?void 0:e.goal_of_mentorship}),l("p",{className:"text-lg font-medium mt-2",children:[e==null?void 0:e.time_to_reach_goal,l("div",{children:[t("small",{className:"text-gray-100 uppercase underline",children:"Message:"})," ",t("br",{}),t("p",{className:"",children:e==null?void 0:e.message_to_mentor})]})]})]})}):"",t("div",{className:"flex justify-center py-5 mt-2",children:l("div",{className:"w-full rounded-md px-2 py-2 bg-gray-800",children:[t("h1",{className:"uppercase text-white font-bold py-2",children:"Payment Details"}),t("hr",{}),l("div",{children:[l("h1",{className:"py-2 text-white",children:["Status:",l("span",{className:"text-green-500 font-bold px-2 bg-gray-800",children:["Completed ",t(_,{})]})]}),l("h1",{className:"text-white",children:["Amount:",t("span",{className:"font-bold text-green-500 text-xl px-2",children:c==null?void 0:c.planAmount})]}),l("h1",{className:"mt-2 text-white",children:["Plan Type:",t("span",{className:"font-bold px-2",children:c==null?void 0:c.planType})]}),l("div",{className:"mt-3",children:[t("h1",{className:"text-white",children:"Services:"}),c==null?void 0:c.planServices.map((r,u)=>t(y,{children:t("div",{className:"py-1 text-white",children:l("h1",{className:"font-bold",children:[l("span",{className:"px-1",children:[u+1,"."]}),r==null?void 0:r.serviceName,l("span",{className:"px-2",children:[r!=null&&r.serviceCount?"(Weekly) Count - ":"",r!=null&&r.serviceCount?r.serviceCount:""]})]})},u)}))]}),t("h1",{className:"mt-2 text-white",children:"Razor Pay ID"}),t("div",{className:"mt-1",children:t("span",{className:"cursor-pointer hover:bg-gray-300 rounded-full",children:l("div",{children:[t("input",{className:"rounded px-2 py-2 bg-gray-800",value:e==null?void 0:e.razorPay_id,disabled:!0,type:"text"}),t("span",{className:"px-2",onClick:()=>s(e==null?void 0:e.razorPay_id),children:t(P,{className:"text-gray-400"})})]})})})]})]})}),t("div",{className:"text-center",children:(d==null?void 0:d.role)==="mentor"?t(y,{}):t(y,{children:t("button",{className:"bg-color-five w-full text-white px-5 py-2 rounded",onClick:()=>{h(`/my-mentors/mentor-profile/${e==null?void 0:e.mentor_id}`)},children:"Mentor Profile"})})})]})})})]})};export{ne as default};
