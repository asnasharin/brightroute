import{d as j,u as I,r as o,e as l,j as e,Q as A,F as n,B as d}from"./index-BH-Ykf6z.js";const D=()=>{const c=j(),b=I(),[i,y]=o.useState(""),[N,f]=o.useState(!1),[v,m]=o.useState(!1),[u,P]=o.useState(!1),[E,O]=o.useState(!1),[s,T]=o.useState({password:"",re_entered_pass:""}),[k,p]=o.useState(!1),_=async a=>{a.preventDefault();try{const t=new FormData(a.currentTarget).get("emailInput");if(y(t),(await c.post("/password/checkEmail",{emailId:t},{withCredentials:!0})).data.status==="failed"){f(!0);return}P(!0),d.success("Email sent successfully")}catch(r){console.log(r)}},C=async a=>{var r;a.preventDefault();try{const h=new FormData(a.currentTarget).get("OTPinput");if(h){const g=h.toString().replace(/\s/g,"");if(g.length!==4){d.error("Enter a valid OTP");return}((r=(await c.post("/password/OTPVerify",{userEmail:i,OTPNum:g},{withCredentials:!0})).data)==null?void 0:r.status)==="success"?O(!0):m(!0)}else d.error("Invalid OTP Number")}catch{d.error("Resend OTP and Try Again")}},w=a=>{const{name:r,value:t}=a.target;T({...s,[r]:t}),m(!1),p(!1)},S=async()=>{var r;if(s.password=s.password.replace(/\s/g,""),s.re_entered_pass=s.re_entered_pass.replace(/\s/g,""),s.password&&s.re_entered_pass&&s.password!==s.re_entered_pass){p(!0);return}if(!new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/).test(s.re_entered_pass)){d.error("Password must meet the validation criterias");return}try{const t=await c.post("/password/new-password",{userEmail:i,formData:s},{withCredentials:!0});t.data.status==="success"?(d.success((r=t.data)==null?void 0:r.message),b("/signin")):d.error(t.data.message)}catch(t){console.log(t)}},x=()=>{m(!1),p(!1),f(!1)};return l(n,{children:[e(A,{className:"w-40 md:w-80"}),e("div",{className:"w-full h-screen flex justify-center items-center bg-background-two",children:E===!1?e(n,{children:e("div",{className:"border border-gray-400 px-4 py-4 rounded-md",children:l("form",{onSubmit:u?C:_,children:[u?l(n,{children:[l("div",{className:"flex flex-col",children:[e("h1",{className:"text-md px-4 py-1 md:py-0 md:px-0 mb-2 text-white",children:"Enter the OTP send to your Email:"}),v?e(n,{children:e("h1",{className:"text-red-600 py-2",children:"Invalid OTP Please Try Again"})}):""]}),e("label",{className:"flex justify-center",children:e("input",{className:"placeholder:text-slate-400 block bg-gray-800 text-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-md focus:outline-none focus:border-dark-500 focus:ring-dark-500 focus:ring-1 w-72 md:w-96 sm:text-lg",type:"text",required:!0,name:"OTPinput",onChange:x})}),e("div",{children:e("span",{className:"text-blue-500 underline cursor-pointer mt-1",onClick:async()=>{var a;try{const r=await c.post("/password/checkEmail",{emailId:i},{withCredentials:!0});r.data.status==="success"&&d.success((a=r.data)==null?void 0:a.message)}catch(r){console.log(r)}},children:"Resend OTP"})}),e("br",{})]}):l("div",{children:[l("div",{className:"flex flex-col",children:[e("h1",{className:"text-md px-4 py-1 md:py-0 md:px-0 mb-2 text-white",children:"Please provide your email Address:"}),N?e(n,{children:e("h1",{className:"text-red-600 py-2",children:"Email not found"})}):""]}),e("label",{className:"flex justify-center",children:e("input",{className:"placeholder:text-slate-400 block bg-gray-800 text-white border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-md focus:outline-none focus:border-dark-500 focus:ring-dark-500 focus:ring-1 w-72 md:w-96 sm:text-lg",placeholder:"Email",type:"email",name:"emailInput",onChange:x,required:!0})}),e("br",{})]}),e("div",{className:"flex justify-center",children:e("button",{type:"submit",className:"border-1 border-slate-300 bg-color-five text-white rounded-md font-bold py-2 w-72 md:w-96 sm:text-lg",children:u?"Verify":"Get OTP"})})]})})}):e(n,{children:l("div",{className:"border border-gray-400 px-4 py-4 rounded-md",children:[e("div",{className:"flex flex-col",children:e("h1",{className:"text-md px-4 py-1 md:py-0 md:px-0 mb-2 text-white",children:"Enter New Password"})}),l("div",{children:[l("label",{className:"flex justify-center flex-col",children:[k?e(n,{children:e("h1",{className:"text-red-500",children:"Password not matching"})}):"",e("input",{className:"placeholder:text-slate-400 block bg-gray-800 text-white border border-slate-300 rounded-md py-1 pl-9 pr-3 shadow-md focus:outline-none focus:border-dark-500 focus:ring-dark-500 focus:ring-1 w-72 md:w-96 sm:text-lg",type:"text",name:"password",value:s==null?void 0:s.password,onChange:w,required:!0})]}),e("h1",{className:"text-white py-1",children:"Confirm New Password"}),e("label",{className:"flex justify-center flex-col",children:e("input",{className:"placeholder:text-slate-400 block bg-gray-800 text-white border border-slate-300 rounded-md py-1 pl-9 pr-3 shadow-md focus:outline-none focus:border-dark-500 focus:ring-dark-500 focus:ring-1 w-72 md:w-96 sm:text-lg",type:"text",name:"re_entered_pass",value:s==null?void 0:s.re_entered_pass,onChange:w,required:!0})}),l("div",{className:"py-2",children:[e("span",{className:"text-white",children:"Password must have :"}),l("div",{className:"",children:[e("li",{className:"text-white text-md",children:"Atleast 8 characters long"}),e("li",{className:"text-white text-md",children:"One uppercase and Lowercase letter"}),e("li",{className:"text-white text-md",children:"One Number and Special Character"})]})]})]}),e("div",{className:"flex justify-center mt-3",children:e("button",{type:"submit",className:"border-1 border-slate-300 bg-color-five text-white rounded-md font-bold py-2 w-72 md:w-96 sm:text-lg mt-2",onClick:S,children:"Change"})})]})})})]})},R=()=>e(n,{children:e(D,{})});export{R as default};
