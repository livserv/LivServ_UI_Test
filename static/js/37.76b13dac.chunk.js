"use strict";(self.webpackChunklib_prop_ui=self.webpackChunklib_prop_ui||[]).push([[37],{8478:(e,t,n)=>{n.d(t,{Jt:()=>r,TF:()=>l,bE:()=>a,yJ:()=>s});var i=n(32026),o=n(44364);async function r(e,t){return c("GET",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function a(e,t){return c("POST",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function s(e,t){return c("PUT",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function l(e,t){return c("DELETE",e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:{})}async function c(e,t,n){let{headers:i,noAuth:o,...r}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};const a="POST"===e||"PUT"===e||"DELETE"===e;t=function(e,t){if(!e)return e;const n=t&&Object.keys(t);if(null!==n&&void 0!==n&&n.length){const i=n.reduce(((e,n)=>{let i=t[n];return null===i||void 0===i?e:(i=`${n}=${encodeURIComponent(i)}`,e?`${e}&${i}`:i)}),"");i&&(e=`${e}${e.includes("?")?"&":"?"}${i}`)}if(e.startsWith("https://"))return e;return`${d}${e}`}(t,a?void 0:n);const s=n instanceof FormData;if(s||(n=n&&"object"===typeof n&&a?JSON.stringify(n):void 0),i||(i={}),s||(i["Content-Type"]="application/json"),i.Accept="application/json",!1!==o){const e=sessionStorage.getItem("token");e&&(i.Authorization=`Bearer ${e}`)}try{const o=await fetch(t,{...r,headers:i,body:n,method:e}),a=await o.json();if(o.ok){const{data:e,...t}=a;return delete t.status,e&&!Object.keys(t).length?e:a}throw a.message?new Error(a.message):a}catch(c){var l;throw console.error("Error calling API: ",c),null!==(l=c.message)&&void 0!==l&&l.includes("fetch")?new Error("Unable to reach server. Please check your network connectivity and try again."):new Error(c.message)}}const d=(0,i.s8)(o.jn,"/")},15744:(e,t,n)=>{n.d(t,{A:()=>u});var i=n(42074),o=n(24184);const r=n.p+"static/media/logo-dark.d226cf818f1e58f97ab4.png";var a=n(16243),s=n(49556),l=n(33340),c=n(32026),d=n(44414);const u=e=>{let{sx:t,to:n,consoleSettings:u}=e;const h=(0,l.C$)((e=>e.defaultId));let m=r;return null!==u&&void 0!==u&&u.logo&&(m=(0,c.Ke)(null===u||void 0===u?void 0:u.domain,null===u||void 0===u?void 0:u.logo)),(0,c.TZ)(u),(0,c.wE)(u),(0,d.jsx)(o.A,{disableRipple:!0,component:i.N_,onClick:()=>(0,s.G8)([h]),to:n||a.Ay.defaultPath,sx:t,children:(0,d.jsx)("img",{src:m,alt:null!==u&&void 0!==u&&u.displayName?null===u||void 0===u?void 0:u.displayName:"LivServ",width:"100"})})}},16243:(e,t,n)=>{n.d(t,{Ay:()=>i,Y7:()=>o});const i={defaultPath:"/dashboard/default",fontFamily:"'Public Sans', sans-serif",i18n:"en",miniDrawer:!1,container:!0,mode:"light",presetColor:"default",themeDirection:"ltr"},o=260},21537:(e,t,n)=>{n.d(t,{A:()=>x});var i=n(9950),o=n(78317),r=n(60899),a=n(51637),s=n(44414);const l=e=>{let{children:t,...n}=e;return(0,s.jsx)(a.A,{sx:{maxWidth:{xs:400,lg:475},margin:{xs:2.5,md:3},"& > *":{flexGrow:1,flexBasis:"50%"}},content:!1,...n,border:!1,boxShadow:!0,children:(0,s.jsx)(o.A,{sx:{p:{xs:2,sm:3,md:4,xl:5}},children:t})})};var c=n(15744),d=n(72930),u=n(62999),h=n(81616),m=n(82053),A=n(36080);const v=e=>{var t,n,i,o,r,a;let{consoleSettings:l}=e;const c=(0,d.A)((e=>e.breakpoints.down("sm")));return(0,s.jsx)(u.A,{maxWidth:"xl",children:(0,s.jsxs)(h.A,{direction:c?"column":"row",justifyContent:c?"center":"space-between",spacing:2,textAlign:c?"center":"inherit",children:[(0,s.jsxs)(m.A,{variant:"subtitle2",color:"secondary",component:"span",children:["\xa9 \xa0",(0,s.jsx)(m.A,{component:A.A,variant:"subtitle2",href:null!==l&&void 0!==l&&l.website?l.website:"https://livserv.ai/",target:"_blank",underline:"hover",children:null!==l&&void 0!==l&&l.displayName?null===l||void 0===l?void 0:l.displayName:"LivServ"}),"\xa0 ",null!==l&&void 0!==l&&null!==(t=l.footer)&&void 0!==t&&t.copyright?null===l||void 0===l||null===(n=l.footer)||void 0===n?void 0:n.copyRightText:2025]}),(0,s.jsxs)(h.A,{direction:c?"column":"row",spacing:c?1:3,textAlign:c?"center":"inherit",children:[(0,s.jsx)(m.A,{variant:"subtitle2",color:"secondary",component:A.A,href:null!==l&&void 0!==l&&null!==(i=l.footer)&&void 0!==i&&i.privacyPolicyUrl?null===l||void 0===l||null===(o=l.footer)||void 0===o?void 0:o.privacyPolicyUrl:"https://livserv.com/livservprivacypolicy.html",target:"_blank",underline:"hover",children:"Privacy Policy"}),(0,s.jsx)(m.A,{variant:"subtitle2",color:"secondary",component:A.A,href:null!==l&&void 0!==l&&null!==(r=l.footer)&&void 0!==r&&r.contactUrl?null===l||void 0===l||null===(a=l.footer)||void 0===a?void 0:a.contactUrl:"https://livserv.ai/contact-us/",target:"_blank",underline:"hover",children:"Contact us"})]})]})})};var f=n(75157);const p=()=>(0,s.jsx)(o.A,{sx:{position:"absolute",filter:"blur(18px)",zIndex:-1,bottom:0}}),x=e=>{var t,n;let{children:a}=e;const[d,u]=(0,i.useState)(null),[h,m]=(0,i.useState)(!0);return(0,i.useEffect)((()=>{(async()=>{const e=window.location.hostname;try{const t=await(0,f.f)(e);u(t),m(!1)}catch(t){u({}),console.error("Failed to fetch organization props:",t)}})()}),[]),(0,s.jsxs)(o.A,{sx:{minHeight:"100vh",margin:0,padding:0},children:[(0,s.jsx)(p,{}),(0,s.jsxs)(r.Ay,{container:!0,direction:"column",justifyContent:"flex-end",children:[(0,s.jsx)(r.Ay,{item:!0,xs:12,sx:{p:2,bgcolor:null!==d&&void 0!==d&&null!==(t=d.header)&&void 0!==t&&t.backgroundColor?null===d||void 0===d||null===(n=d.header)||void 0===n?void 0:n.backgroundColor:"#fafafb",height:"100px"},children:!h&&(0,s.jsx)(c.A,{consoleSettings:d})}),(0,s.jsx)(r.Ay,{item:!0,xs:12,children:(0,s.jsx)(r.Ay,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:{xs:"calc(100vh - 162px)",md:"calc(100vh - 112px)"}},children:(0,s.jsx)(r.Ay,{item:!0,children:(0,s.jsx)(l,{children:a})})})}),(0,s.jsx)(r.Ay,{item:!0,xs:12,sx:{m:3,mt:1},children:!h&&(0,s.jsx)(v,{consoleSettings:d})})]})]})}},32026:(e,t,n)=>{n.d(t,{G6:()=>s,Ke:()=>h,OX:()=>c,PE:()=>u,TZ:()=>m,Yq:()=>a,do:()=>d,qW:()=>l,s8:()=>o,wE:()=>A});var i=n(44364);function o(e,t){return e.replace(new RegExp(`${r(t)}+$`),"")}function r(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function a(e){const t=new Date(e),n=t.getDate();return`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][t.getMonth()]} ${n}, ${t.getFullYear()}`}function s(e,t,n){if(!t&&!e)return n;e=e||{};const i=Array.isArray(e)?[...e]:{...e};if(t.includes(".")){const o=t.indexOf("."),r=t.substring(0,o),a=t.substring(o+1);i[r]=s(e[r],a,n)}else i[t]=n;return i}function l(e,t){return btoa(`${e}_${t}_whatsapp_int`)}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12;const t="abcdefghijklmnopqrstuvwxyz0123456789";let n="";for(let i=0;i<e;i++)n+=t.charAt(Math.floor(36*Math.random()));return n}function d(e,t,n){if(!t&&!e)return n;e=e||{};const i=Array.isArray(e)?[...e]:{...e};if(t.includes(".")){const o=t.indexOf("."),r=t.substring(0,o),a=t.substring(o+1);i[r]=d(e[r],a,n)}else i[t]=n;return i}function u(e,t){const n=new Blob([e],{type:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"text/csv"}),i=document.createElement("a");i.href=URL.createObjectURL(n),i.download=t,document.body.appendChild(i),i.click(),document.body.removeChild(i)}function h(e,t){return!t||t.startsWith("http")?t:(t.startsWith("/")&&(t=t.substring(1)),`${i.J}/${e}/${t}`)}function m(e){let t=document.querySelector("link[rel~='icon']");t||(t=document.createElement("link"),t.rel="icon",document.getElementsByTagName("head")[0].appendChild(t)),null!==e&&void 0!==e&&e.domain?null!==e&&void 0!==e&&e.favicon&&(t.href=h(null===e||void 0===e?void 0:e.domain,null===e||void 0===e?void 0:e.favicon)):t.href="/favicon.png"}function A(e){null!==e&&void 0!==e&&e.domain?null!==e&&void 0!==e&&e.displayName&&(document.title=null===e||void 0===e?void 0:e.displayName):document.title="LivServ"}},32829:(e,t,n)=>{n.d(t,{A:()=>r});var i=n(25371),o=n(44414);function r(e){let{children:t,type:n}=e;return(0,o.jsx)(i.P.div,{whileHover:{scale:1},whileTap:{scale:.9},children:t})}r.defaultProps={type:"scale"}},44364:(e,t,n)=>{n.d(t,{DX:()=>c,J:()=>l,Og:()=>r,jn:()=>i,mB:()=>s,pA:()=>a,pR:()=>o});const i="https://devbackend.livhousing.com:444",o="c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",r={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_GOOGLE_MAPS_API_KEY:"AIzaSyAQMYGdP2AmloNtJm4ZDrJxPuSfuo2RSXM",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.TRAINING_MEDIA_MAXSIZE,a={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_GOOGLE_MAPS_API_KEY:"AIzaSyAQMYGdP2AmloNtJm4ZDrJxPuSfuo2RSXM",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.CONVERSATION_MEDIA_MAXSIZE,s="AIzaSyAQMYGdP2AmloNtJm4ZDrJxPuSfuo2RSXM",l="https://livserv-organizations.s3.ap-south-1.amazonaws.com",c={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_IP_DATA_API_KEY:"c17b949cf58c45cae47ce1cc65efc8240f77a2a69ca09ad4c4208852",REACT_APP_VERSION:"1",REACT_APP_GOOGLE_MAPS_API_KEY:"AIzaSyAQMYGdP2AmloNtJm4ZDrJxPuSfuo2RSXM",REACT_APP_BACKEND_URL:"https://devbackend.livhousing.com:444"}.REACT_APP_NGROK_BACKEND_URL||"https://devbackend.livhousing.com:444"},49556:(e,t,n)=>{n.d(t,{G8:()=>o,sd:()=>r});var i=n(33340);function o(e){i.C$.setState({openItem:e})}function r(e){i.C$.setState({drawerOpen:e})}},51637:(e,t,n)=>{n.d(t,{A:()=>u});var i=n(9950),o=n(14857),r=n(48089),a=n(45180),s=n(82053),l=n(50704),c=n(44414);const d={p:2.5,"& .MuiCardHeader-action":{m:"0px auto",alignSelf:"center"}},u=(0,i.forwardRef)(((e,t)=>{let{border:n=!0,boxShadow:i,children:u,content:h=!0,contentSX:m={},darkTitle:A,elevation:v,secondary:f,shadow:p,sx:x={},title:g,...y}=e;const _=(0,o.A)();return i="dark"===_.palette.mode?i||!0:i,(0,c.jsxs)(r.A,{elevation:v||0,ref:t,...y,sx:{border:n?"1px solid":"none",borderRadius:2,borderColor:"dark"===_.palette.mode?_.palette.divider:_.palette.grey.A800,boxShadow:!i||n&&"dark"!==_.palette.mode?"inherit":p||_.customShadows.z1,":hover":{boxShadow:i?p||_.customShadows.z1:"inherit"},"& pre":{m:0,p:"16px !important",fontFamily:_.typography.fontFamily,fontSize:"0.75rem"},...x},children:[!A&&g&&(0,c.jsx)(a.A,{sx:d,titleTypographyProps:{variant:"subtitle1"},title:g,action:f}),A&&g&&(0,c.jsx)(a.A,{sx:d,title:(0,c.jsx)(s.A,{variant:"h3",children:g}),action:f}),h&&(0,c.jsx)(l.A,{sx:m,children:u}),!h&&u]})}))},75157:(e,t,n)=>{n.d(t,{K:()=>r,f:()=>o});var i=n(8478);async function o(e){return await i.Jt(`/organization/organization-props/console-settings/${e}`,{},{noAuth:!0})}async function r(e){return await i.Jt(`/organization/organization-props/${e}`,{},{noAuth:!0})}},78317:(e,t,n)=>{n.d(t,{A:()=>g});var i=n(58168),o=n(98587),r=n(9950),a=n(72004),s=n(62595),l=n(84222),c=n(28620),d=n(84917),u=n(44414);const h=["className","component"];var m=n(44501),A=n(80376),v=n(67550);const f=(0,n(1763).A)("MuiBox",["root"]),p=(0,A.A)(),x=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{themeId:t,defaultTheme:n,defaultClassName:m="MuiBox-root",generateClassName:A}=e,v=(0,s.default)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(l.A);return r.forwardRef((function(e,r){const s=(0,d.A)(n),l=(0,c.A)(e),{className:f,component:p="div"}=l,x=(0,o.A)(l,h);return(0,u.jsx)(v,(0,i.A)({as:p,ref:r,className:(0,a.A)(f,A?A(m):m),theme:t&&s[t]||s},x))}))}({themeId:v.A,defaultTheme:p,defaultClassName:f.root,generateClassName:m.A.generate}),g=x},86604:(e,t,n)=>{n.d(t,{f3:()=>a,ti:()=>o,xw:()=>r});var i=n(8478);async function o(e){return await i.bE("/organization/forgot-password",{email:e},{noAuth:!0})}async function r(e,t,n){return await i.bE("/organization/reset-password",{password:e,email:t,code:n},{noAuth:!0})}async function a(e,t,n){return await i.bE(`/organization/${n}/update-password`,{currentPassword:e,newPassword:t})}},89609:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var i=n(42074),o=n(60899),r=n(81616),a=n(82053),s=n(9950),l=n(3788),c=n(2660),d=n(24516),u=n(29714),h=n(61467),m=n(32829),A=n(93383),v=n(86604),f=n(44414);const p=()=>{const[e,t]=(0,s.useState)(!1),[n,i]=(0,s.useState)("");return e?(0,f.jsx)(x,{email:n}):(0,f.jsx)(h.l1,{initialValues:{email:""},validationSchema:u.Ik().shape({email:u.Yj().email("Must be a valid email").max(255).required("Email is required")}),onSubmit:async(e,n)=>{let{setErrors:o,setStatus:r,setSubmitting:a}=n;try{await(0,v.ti)(e.email),r({success:!0}),a(!1),t(!0),i(e.email)}catch(s){r({success:!1}),o({submit:s.message}),a(!1)}},children:e=>{let{errors:t,handleBlur:n,handleChange:i,handleSubmit:a,isSubmitting:s,touched:u,values:h}=e;return(0,f.jsx)("form",{noValidate:!0,onSubmit:a,children:(0,f.jsxs)(o.Ay,{container:!0,spacing:3,children:[(0,f.jsx)(o.Ay,{item:!0,xs:12,children:(0,f.jsxs)(r.A,{spacing:1,children:[(0,f.jsx)(l.A,{htmlFor:"verify-email",children:"Email Address"}),(0,f.jsx)(c.A,{id:"verify-email",type:"email",value:h.email,name:"email",onBlur:n,onChange:i,placeholder:"Enter email address",fullWidth:!0,error:Boolean(u.email&&t.email)}),u.email&&t.email&&(0,f.jsx)(d.A,{error:!0,id:"standard-weight-helper-text-email-login",children:t.email})]})}),t.submit&&(0,f.jsx)(o.Ay,{item:!0,xs:12,children:(0,f.jsx)(d.A,{error:!0,children:t.submit})}),(0,f.jsx)(o.Ay,{item:!0,xs:12,children:(0,f.jsx)(m.A,{children:(0,f.jsx)(A.A,{disableElevation:!0,isLoading:s,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Verify Email"})})})]})})}})};function x(e){let{email:t}=e;return(0,f.jsxs)(o.Ay,{container:!0,spacing:3,children:[(0,f.jsxs)(o.Ay,{item:!0,xs:12,children:["A verification email has been sent to ",(0,f.jsxs)("b",{children:[t,"."]})]}),(0,f.jsx)(o.Ay,{item:!0,xs:12,children:"To initiate the password reset process, kindly click on the verification link enclosed in the email."})]})}var g=n(21537);const y=()=>(0,f.jsx)(g.A,{children:(0,f.jsxs)(o.Ay,{container:!0,spacing:3,children:[(0,f.jsx)(o.Ay,{item:!0,xs:12,children:(0,f.jsx)(r.A,{direction:"row",justifyContent:"space-between",alignItems:"baseline",sx:{mb:{xs:-.5,sm:.5}},children:(0,f.jsx)(a.A,{variant:"h3",children:"Email Verification"})})}),(0,f.jsx)(o.Ay,{item:!0,xs:12,children:(0,f.jsx)(p,{})}),(0,f.jsx)(o.Ay,{container:!0,justifyContent:"center",children:(0,f.jsx)(a.A,{component:i.N_,to:"/login",variant:"body1",sx:{textDecoration:"none",paddingTop:2},color:"primary",children:"Back to login"})})]})})},93383:(e,t,n)=>{n.d(t,{A:()=>s});var i=n(9950),o=n(10226),r=n(46639),a=n(44414);const s=function(e){let{onClick:t,disabled:n,isLoading:s,children:l,...c}=e;const[d,u]=i.useState(s);return(0,a.jsxs)(o.A,{onClick:e=>{if(!t)return;const n=t(e);"function"===typeof(null===n||void 0===n?void 0:n.finally)&&(u(!0),n.finally((()=>u(!1))))},disabled:d||s||n,...c,children:[(d||s)&&(0,a.jsx)(r.A,{size:16,color:"primary",style:{marginRight:"10px"}}),l]})}}}]);