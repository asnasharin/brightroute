import{r as n,a as x,d as w,e as l,j as e,F as o,L as u}from"./index-BH-Ykf6z.js";import{M as v}from"./MentorPaymentCard-D84QA1fL.js";import{N as b}from"./index-BZKSan8_.js";import"./generateUtilityClasses-HJM5CisE.js";import"./emotion-react.browser.esm-ZdKyTOPI.js";import"./createSvgIcon-BIW1WnVJ.js";import"./createSvgIcon-LLNz0GyT.js";import"./useTimeout-BKMNU8Hp.js";import"./ownerWindow-D1Z5qid2.js";import"./sweetalert2.all-D9aI5KS5.js";import"./Toast-8TpPbULq.js";import"./index-BVfO-N0a.js";import"./index-DYTiCvF8.js";/* empty css                     */import"./no-profile-image-7REqqSE_.js";const J=()=>{const[s,i]=n.useState(null),{user:r}=x(t=>t.userAuth),[c,a]=n.useState(!1),d=w(),[p,m]=n.useState(null),[f,y]=n.useState(null),g=()=>{m(t=>!t)};return f&&location.reload(),n.useEffect(()=>{(async()=>{try{const t=await d.get(`/mentor/plans/${r==null?void 0:r._id}`,{withCredentials:!0});if(t.data.status==="success"){const h=t.data.plans;h.length>0?(i(h),a(!0)):a(!1)}else a(!1)}catch(t){console.log(t)}})()},[p,m,d]),l(o,{children:[e(b,{}),e("div",{className:"w-full h-full md:h-screen bg-background-two",children:c?l(o,{children:[s&&(s==null?void 0:s.length)>=2?"":e(o,{children:e("div",{className:"w-full flex justify-end items-center relative",children:e(u,{to:"/mentor/new-plan",className:"absolute top-5 right-10 border px-5 py-1 rounded-md text-white bg-color-one",children:"Create Plans"})})}),e("div",{className:"w-full h-full flex justify-center items-center md:px-16 py-14",children:e(v,{mentorPlans:c?s:null,mentor:"mentor",onChildData:g,setMentorPlans:(r==null?void 0:r.role)==="mentor"?i:()=>()=>null})})]}):e("div",{className:"h-screen flex justify-center items-center",children:e("div",{className:"shadow-lg",children:l("div",{className:"block max-w-sm p-6 bg-gray-800 border border-gray-200 rounded-lg shadow text-black",children:[e("h5",{className:"mb-2 text-2xl font-bold tracking-tight text-white",children:"You don't have any plans yet. Please create one"}),e("p",{className:"font-norma text-gray-400",children:"These plans will be visible to the mentees and they can purchase youre plan to Enroll for mentorship."}),e("div",{className:"mt-5",children:e(u,{to:"/mentor/new-plan",children:l("div",{className:"inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-color-five rounded-lg hover:bg-teal-900 focus:ring-1 focus:outline-none focus:ring-blue-300 dark:hover:bg-dark-700 cursor-pointer",children:["Create Plan",e("svg",{className:"rtl:rotate-180 w-3.5 h-3.5 ms-2","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 14 10",children:e("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M1 5h12m0 0L9 1m4 4L9 9"})})]})})})]})})})})]})};export{J as default};
