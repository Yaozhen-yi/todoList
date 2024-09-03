import{r as v,a as x,c as r,b as e,w as o,v as w,d as g,e as n,F as h,f,g as V,o as t,t as _}from"./index-CoXVUlav.js";import{c as u,r as $,m as q,e as B,u as F}from"./index-Bm35nw7z.js";import{a as L}from"./axios-CgMOKQYv.js";const R={class:"form"},S=e("label",{for:"name"},"姓名(Name):",-1),U=e("label",{for:"password"},"密碼(Password):",-1),D=e("label",{for:"email"},"E-mail:",-1),E=e("br",null,null,-1),I=["disabled"],j={__name:"reginster",setup(N){const d=v(""),m=v(""),p=v(""),b=v(!1),y={name:{required:u.withMessage("**姓名必須填寫**",$)},password:{required:u.withMessage("**密碼必須填寫**",$),minLength:u.withMessage("**密碼必須是4個數字**",q(4))},email:{required:u.withMessage("**email必須填寫**",$),email:u.withMessage("**不是一個有效的 e-mail 地址**",B)}},a=F(y,{name:d,password:m,email:p}),M=x(),k=async()=>{if(a.value.$touch(),!a.value.$invalid)try{const c=await L.post("/register",{name:d.value,password:m.value,email:p.value});c.data.success?(console.log("id:",c.data.userId),alert("註冊成功！"),b.value=!0,M.push("/login")):alert("註冊失敗，請重試。")}catch{alert("註冊過程出現錯誤，請重試。")}};return(c,l)=>(t(),r("div",R,[e("form",{id:"dataForm",onSubmit:V(k,["prevent"]),method:"post"},[S,o(e("input",{id:"name","onUpdate:modelValue":l[0]||(l[0]=s=>d.value=s),type:"text",placeholder:"請輸入姓名"},null,512),[[w,d.value]]),o(e("span",null,[(t(!0),r(h,null,f(n(a).name.$errors,(s,i)=>(t(),r("span",{key:i},_(s.$message),1))),128))],512),[[g,n(a).name.$error]]),U,o(e("input",{type:"password",id:"password",name:"password","onUpdate:modelValue":l[1]||(l[1]=s=>m.value=s),placeholder:"請輸入密碼"},null,512),[[w,m.value]]),o(e("span",null,[(t(!0),r(h,null,f(n(a).password.$errors,(s,i)=>(t(),r("span",{key:i},_(s.$message),1))),128))],512),[[g,n(a).password.$error]]),D,o(e("input",{id:"email","onUpdate:modelValue":l[2]||(l[2]=s=>p.value=s),type:"email",placeholder:"請輸入email"},null,512),[[w,p.value]]),o(e("span",null,[(t(!0),r(h,null,f(n(a).email.$errors,(s,i)=>(t(),r("span",{key:i},_(s.$message),1))),128))],512),[[g,n(a).email.$error]]),E,e("button",{type:"submit",disabled:b.value},"註冊(Register)",8,I)],32)]))}};export{j as default};
