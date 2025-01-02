import{q as pt,a5 as Vt,a6 as wt,a as z,j as x,T as te,S as ae,k as Ce,r as Ae,z as Dt,U as St,R as q,F as Qe,u as kt,P as Et}from"./index-Cer2pxi4.js";import{l as Tt}from"./index-BGqeBFWL.js";import{a as Lt,u as Nt}from"./useAlert-CwV4OKQA.js";import{F as Ct}from"./FixedBottomButton-C-s7NunJ.js";import{T as Ot}from"./TextField-2T0BCDM4.js";import{a as Rt}from"./addDelimiter-BMsRaVVo.js";const Ut=({hotelId:e,roomId:s})=>{const r=Lt(),{data:a,isLoading:u}=pt({queryKey:["hotelWithRoom",e,s],queryFn:()=>Vt({hotelId:e,roomId:s}),onSuccess:({room:c})=>{c.avaliableCount===0&&r({title:"객실이 매진되었습니다.",description:"예약 가능한 방이 없습니다.",onButtonClick:()=>{window.history.back()}})}}),{mutateAsync:l}=Nt({mutationFn:c=>wt(c),onError:()=>{r({title:"예약 실패",description:"알 수 없는 에러가 발생헀습니다. 잠시 후 다시 시도해주세요",onButtonClick:()=>{window.history.back()}})}});return{data:a,isLoading:u,makeReservation:l}},Mt=({hotelName:e,room:s,startDate:r,endDate:a,nights:u})=>z("div",{style:{padding:24},children:[x(te,{typography:"t4",bold:!0,children:e}),x(ae,{size:8}),x("img",{src:s.imageUrl,alt:`${s.roomName}의 이미지`,css:Bt}),x(ae,{size:16}),z("div",{children:[x(te,{bold:!0,children:s.roomName}),x(ae,{size:4}),z("ul",{css:It,children:[z(Ce,{as:"li",justify:"space-between",children:[x(te,{color:"gray500",typography:"t6",children:"일정"}),x(te,{typography:"t6",children:`${r} - ${a} (${u}박)`})]}),Object.keys(s.basicInfo).map(l=>l in Ge?z(Ce,{as:"li",justify:"space-between",children:[z(te,{color:"gray500",typography:"t6",children:[Ge[l]," "]}),x(te,{typography:"t6",children:s.basicInfo[l]})]},l):null)]})]})]}),Ge={bed:"침대",maxOccupancy:"최대인원",squareMeters:"면적",smoke:"흡연여부"},Bt={name:"voo5c1",styles:"width:100%;height:270px;object-fit:cover;border-radius:4px"},It={name:"dbmd3v",styles:"li:not(last-child){margin-bottom:8px;}"},Pt=Dt("select",{target:"e1yk90nf0"})("height:52px;border-radius:10px;border:1px solid ",St.gray,";padding:0 16px;cursor:pointer;appearance:none;&:required:invalid{color:#c0c4c7;}"),qt=Ae.forwardRef(({label:e,options:s,placeholder:r,value:a,...u},l)=>z(Ce,{direction:"column",children:[e?x(te,{typography:"t6",color:"black",display:"inline-block",style:{marginBottom:6},children:e}):null,z(Pt,{required:!0,ref:l,value:a,...u,children:[x("option",{disabled:!0,hidden:!0,value:"",children:r}),s.map(({label:c,value:f})=>x("option",{value:f,children:c},c))]})]}));var ve=e=>e.type==="checkbox",ie=e=>e instanceof Date,O=e=>e==null;const ut=e=>typeof e=="object";var w=e=>!O(e)&&!Array.isArray(e)&&ut(e)&&!ie(e),$t=e=>w(e)&&e.target?ve(e.target)?e.target.checked:e.target.value:e,zt=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,jt=(e,s)=>e.has(zt(s)),Wt=e=>{const s=e.constructor&&e.constructor.prototype;return w(s)&&s.hasOwnProperty("isPrototypeOf")},Re=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function P(e){let s;const r=Array.isArray(e),a=typeof FileList<"u"?e instanceof FileList:!1;if(e instanceof Date)s=new Date(e);else if(e instanceof Set)s=new Set(e);else if(!(Re&&(e instanceof Blob||a))&&(r||w(e)))if(s=r?[]:{},!r&&!Wt(e))s=e;else for(const u in e)e.hasOwnProperty(u)&&(s[u]=P(e[u]));else return e;return s}var we=e=>Array.isArray(e)?e.filter(Boolean):[],D=e=>e===void 0,h=(e,s,r)=>{if(!s||!w(e))return r;const a=we(s.split(/[,[\].]+?/)).reduce((u,l)=>O(u)?u:u[l],e);return D(a)||a===e?D(e[s])?r:e[s]:a},W=e=>typeof e=="boolean",Ue=e=>/^\w*$/.test(e),ot=e=>we(e.replace(/["|']|\]/g,"").split(/\.|\[/)),A=(e,s,r)=>{let a=-1;const u=Ue(s)?[s]:ot(s),l=u.length,c=l-1;for(;++a<l;){const f=u[a];let V=r;if(a!==c){const U=e[f];V=w(U)||Array.isArray(U)?U:isNaN(+u[a+1])?{}:[]}if(f==="__proto__"||f==="constructor"||f==="prototype")return;e[f]=V,e=e[f]}return e};const Xe={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},j={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},X={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};q.createContext(null);var Ht=(e,s,r,a=!0)=>{const u={defaultValues:s._defaultValues};for(const l in e)Object.defineProperty(u,l,{get:()=>{const c=l;return s._proxyFormState[c]!==j.all&&(s._proxyFormState[c]=!a||j.all),e[c]}});return u},R=e=>w(e)&&!Object.keys(e).length,Kt=(e,s,r,a)=>{r(e);const{name:u,...l}=e;return R(l)||Object.keys(l).length>=Object.keys(s).length||Object.keys(l).find(c=>s[c]===j.all)},me=e=>Array.isArray(e)?e:[e];function Zt(e){const s=q.useRef(e);s.current=e,q.useEffect(()=>{const r=!e.disabled&&s.current.subject&&s.current.subject.subscribe({next:s.current.next});return()=>{r&&r.unsubscribe()}},[e.disabled])}var K=e=>typeof e=="string",Qt=(e,s,r,a,u)=>K(e)?(a&&s.watch.add(e),h(r,e,u)):Array.isArray(e)?e.map(l=>(a&&s.watch.add(l),h(r,l))):(a&&(s.watchAll=!0),r),Gt=(e,s,r,a,u)=>s?{...r[e],types:{...r[e]&&r[e].types?r[e].types:{},[a]:u||!0}}:{},Ye=e=>({isOnSubmit:!e||e===j.onSubmit,isOnBlur:e===j.onBlur,isOnChange:e===j.onChange,isOnAll:e===j.all,isOnTouch:e===j.onTouched}),Je=(e,s,r)=>!r&&(s.watchAll||s.watch.has(e)||[...s.watch].some(a=>e.startsWith(a)&&/^\.\w+/.test(e.slice(a.length))));const ge=(e,s,r,a)=>{for(const u of r||Object.keys(e)){const l=h(e,u);if(l){const{_f:c,...f}=l;if(c){if(c.refs&&c.refs[0]&&s(c.refs[0],u)&&!a)return!0;if(c.ref&&s(c.ref,c.name)&&!a)return!0;if(ge(f,s))break}else if(w(f)&&ge(f,s))break}}};var Xt=(e,s,r)=>{const a=me(h(e,r));return A(a,"root",s[r]),A(e,r,a),e},Me=e=>e.type==="file",H=e=>typeof e=="function",xe=e=>{if(!Re)return!1;const s=e?e.ownerDocument:0;return e instanceof(s&&s.defaultView?s.defaultView.HTMLElement:HTMLElement)},Fe=e=>K(e),Be=e=>e.type==="radio",pe=e=>e instanceof RegExp;const et={value:!1,isValid:!1},tt={value:!0,isValid:!0};var ct=e=>{if(Array.isArray(e)){if(e.length>1){const s=e.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:s,isValid:!!s.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!D(e[0].attributes.value)?D(e[0].value)||e[0].value===""?tt:{value:e[0].value,isValid:!0}:tt:et}return et};const rt={isValid:!1,value:null};var dt=e=>Array.isArray(e)?e.reduce((s,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:s,rt):rt;function st(e,s,r="validate"){if(Fe(e)||Array.isArray(e)&&e.every(Fe)||W(e)&&!e)return{type:r,message:Fe(e)?e:"",ref:s}}var oe=e=>w(e)&&!pe(e)?e:{value:e,message:""},it=async(e,s,r,a,u,l)=>{const{ref:c,refs:f,required:V,maxLength:U,minLength:p,min:v,max:Y,pattern:ne,validate:M,name:N,valueAsNumber:Z,mount:J}=e._f,m=h(r,N);if(!J||s.has(N))return{};const Q=f?f[0]:c,G=_=>{u&&Q.reportValidity&&(Q.setCustomValidity(W(_)?"":_||""),Q.reportValidity())},S={},le=Be(c),be=ve(c),se=le||be,ue=(Z||Me(c))&&D(c.value)&&D(m)||xe(c)&&c.value===""||m===""||Array.isArray(m)&&!m.length,B=Gt.bind(null,N,a,S),_e=(_,F,k,C=X.maxLength,$=X.minLength)=>{const I=_?F:k;S[N]={type:_?C:$,message:I,ref:c,...B(_?C:$,I)}};if(l?!Array.isArray(m)||!m.length:V&&(!se&&(ue||O(m))||W(m)&&!m||be&&!ct(f).isValid||le&&!dt(f).isValid)){const{value:_,message:F}=Fe(V)?{value:!!V,message:V}:oe(V);if(_&&(S[N]={type:X.required,message:F,ref:Q,...B(X.required,F)},!a))return G(F),S}if(!ue&&(!O(v)||!O(Y))){let _,F;const k=oe(Y),C=oe(v);if(!O(m)&&!isNaN(m)){const $=c.valueAsNumber||m&&+m;O(k.value)||(_=$>k.value),O(C.value)||(F=$<C.value)}else{const $=c.valueAsDate||new Date(m),I=fe=>new Date(new Date().toDateString()+" "+fe),ce=c.type=="time",de=c.type=="week";K(k.value)&&m&&(_=ce?I(m)>I(k.value):de?m>k.value:$>new Date(k.value)),K(C.value)&&m&&(F=ce?I(m)<I(C.value):de?m<C.value:$<new Date(C.value))}if((_||F)&&(_e(!!_,k.message,C.message,X.max,X.min),!a))return G(S[N].message),S}if((U||p)&&!ue&&(K(m)||l&&Array.isArray(m))){const _=oe(U),F=oe(p),k=!O(_.value)&&m.length>+_.value,C=!O(F.value)&&m.length<+F.value;if((k||C)&&(_e(k,_.message,F.message),!a))return G(S[N].message),S}if(ne&&!ue&&K(m)){const{value:_,message:F}=oe(ne);if(pe(_)&&!m.match(_)&&(S[N]={type:X.pattern,message:F,ref:c,...B(X.pattern,F)},!a))return G(F),S}if(M){if(H(M)){const _=await M(m,r),F=st(_,Q);if(F&&(S[N]={...F,...B(X.validate,F.message)},!a))return G(F.message),S}else if(w(M)){let _={};for(const F in M){if(!R(_)&&!a)break;const k=st(await M[F](m,r),Q,F);k&&(_={...k,...B(F,k.message)},G(k.message),a&&(S[N]=_))}if(!R(_)&&(S[N]={ref:Q,..._},!a))return S}}return G(!0),S};function Yt(e,s){const r=s.slice(0,-1).length;let a=0;for(;a<r;)e=D(e)?a++:e[s[a++]];return e}function Jt(e){for(const s in e)if(e.hasOwnProperty(s)&&!D(e[s]))return!1;return!0}function E(e,s){const r=Array.isArray(s)?s:Ue(s)?[s]:ot(s),a=r.length===1?e:Yt(e,r),u=r.length-1,l=r[u];return a&&delete a[l],u!==0&&(w(a)&&R(a)||Array.isArray(a)&&Jt(a))&&E(e,r.slice(0,-1)),e}var Te=()=>{let e=[];return{get observers(){return e},next:u=>{for(const l of e)l.next&&l.next(u)},subscribe:u=>(e.push(u),{unsubscribe:()=>{e=e.filter(l=>l!==u)}}),unsubscribe:()=>{e=[]}}},Oe=e=>O(e)||!ut(e);function re(e,s){if(Oe(e)||Oe(s))return e===s;if(ie(e)&&ie(s))return e.getTime()===s.getTime();const r=Object.keys(e),a=Object.keys(s);if(r.length!==a.length)return!1;for(const u of r){const l=e[u];if(!a.includes(u))return!1;if(u!=="ref"){const c=s[u];if(ie(l)&&ie(c)||w(l)&&w(c)||Array.isArray(l)&&Array.isArray(c)?!re(l,c):l!==c)return!1}}return!0}var ft=e=>e.type==="select-multiple",er=e=>Be(e)||ve(e),Le=e=>xe(e)&&e.isConnected,yt=e=>{for(const s in e)if(H(e[s]))return!0;return!1};function Ve(e,s={}){const r=Array.isArray(e);if(w(e)||r)for(const a in e)Array.isArray(e[a])||w(e[a])&&!yt(e[a])?(s[a]=Array.isArray(e[a])?[]:{},Ve(e[a],s[a])):O(e[a])||(s[a]=!0);return s}function ht(e,s,r){const a=Array.isArray(e);if(w(e)||a)for(const u in e)Array.isArray(e[u])||w(e[u])&&!yt(e[u])?D(s)||Oe(r[u])?r[u]=Array.isArray(e[u])?Ve(e[u],[]):{...Ve(e[u])}:ht(e[u],O(s)?{}:s[u],r[u]):r[u]=!re(e[u],s[u]);return r}var ye=(e,s)=>ht(e,s,Ve(s)),gt=(e,{valueAsNumber:s,valueAsDate:r,setValueAs:a})=>D(e)?e:s?e===""?NaN:e&&+e:r&&K(e)?new Date(e):a?a(e):e;function Ne(e){const s=e.ref;return Me(s)?s.files:Be(s)?dt(e.refs).value:ft(s)?[...s.selectedOptions].map(({value:r})=>r):ve(s)?ct(e.refs).value:gt(D(s.value)?e.ref.value:s.value,e)}var tr=(e,s,r,a)=>{const u={};for(const l of e){const c=h(s,l);c&&A(u,l,c._f)}return{criteriaMode:r,names:[...e],fields:u,shouldUseNativeValidation:a}},he=e=>D(e)?e:pe(e)?e.source:w(e)?pe(e.value)?e.value.source:e.value:e;const at="AsyncFunction";var rr=e=>!!e&&!!e.validate&&!!(H(e.validate)&&e.validate.constructor.name===at||w(e.validate)&&Object.values(e.validate).find(s=>s.constructor.name===at)),sr=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function nt(e,s,r){const a=h(e,r);if(a||Ue(r))return{error:a,name:r};const u=r.split(".");for(;u.length;){const l=u.join("."),c=h(s,l),f=h(e,l);if(c&&!Array.isArray(c)&&r!==l)return{name:r};if(f&&f.type)return{name:l,error:f};u.pop()}return{name:r}}var ir=(e,s,r,a,u)=>u.isOnAll?!1:!r&&u.isOnTouch?!(s||e):(r?a.isOnBlur:u.isOnBlur)?!e:(r?a.isOnChange:u.isOnChange)?e:!0,ar=(e,s)=>!we(h(e,s)).length&&E(e,s);const nr={mode:j.onSubmit,reValidateMode:j.onChange,shouldFocusError:!0};function lr(e={}){let s={...nr,...e},r={submitCount:0,isDirty:!1,isLoading:H(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{},errors:s.errors||{},disabled:s.disabled||!1},a={},u=w(s.defaultValues)||w(s.values)?P(s.defaultValues||s.values)||{}:{},l=s.shouldUnregister?{}:P(u),c={action:!1,mount:!1,watch:!1},f={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set},V,U=0;const p={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},v={values:Te(),array:Te(),state:Te()},Y=Ye(s.mode),ne=Ye(s.reValidateMode),M=s.criteriaMode===j.all,N=t=>i=>{clearTimeout(U),U=setTimeout(t,i)},Z=async t=>{if(!s.disabled&&(p.isValid||t)){const i=s.resolver?R((await se()).errors):await B(a,!0);i!==r.isValid&&v.state.next({isValid:i})}},J=(t,i)=>{!s.disabled&&(p.isValidating||p.validatingFields)&&((t||Array.from(f.mount)).forEach(n=>{n&&(i?A(r.validatingFields,n,i):E(r.validatingFields,n))}),v.state.next({validatingFields:r.validatingFields,isValidating:!R(r.validatingFields)}))},m=(t,i=[],n,y,d=!0,o=!0)=>{if(y&&n&&!s.disabled){if(c.action=!0,o&&Array.isArray(h(a,t))){const g=n(h(a,t),y.argA,y.argB);d&&A(a,t,g)}if(o&&Array.isArray(h(r.errors,t))){const g=n(h(r.errors,t),y.argA,y.argB);d&&A(r.errors,t,g),ar(r.errors,t)}if(p.touchedFields&&o&&Array.isArray(h(r.touchedFields,t))){const g=n(h(r.touchedFields,t),y.argA,y.argB);d&&A(r.touchedFields,t,g)}p.dirtyFields&&(r.dirtyFields=ye(u,l)),v.state.next({name:t,isDirty:_(t,i),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else A(l,t,i)},Q=(t,i)=>{A(r.errors,t,i),v.state.next({errors:r.errors})},G=t=>{r.errors=t,v.state.next({errors:r.errors,isValid:!1})},S=(t,i,n,y)=>{const d=h(a,t);if(d){const o=h(l,t,D(n)?h(u,t):n);D(o)||y&&y.defaultChecked||i?A(l,t,i?o:Ne(d._f)):C(t,o),c.mount&&Z()}},le=(t,i,n,y,d)=>{let o=!1,g=!1;const b={name:t};if(!s.disabled){const T=!!(h(a,t)&&h(a,t)._f&&h(a,t)._f.disabled);if(!n||y){p.isDirty&&(g=r.isDirty,r.isDirty=b.isDirty=_(),o=g!==b.isDirty);const L=T||re(h(u,t),i);g=!!(!T&&h(r.dirtyFields,t)),L||T?E(r.dirtyFields,t):A(r.dirtyFields,t,!0),b.dirtyFields=r.dirtyFields,o=o||p.dirtyFields&&g!==!L}if(n){const L=h(r.touchedFields,t);L||(A(r.touchedFields,t,n),b.touchedFields=r.touchedFields,o=o||p.touchedFields&&L!==n)}o&&d&&v.state.next(b)}return o?b:{}},be=(t,i,n,y)=>{const d=h(r.errors,t),o=p.isValid&&W(i)&&r.isValid!==i;if(s.delayError&&n?(V=N(()=>Q(t,n)),V(s.delayError)):(clearTimeout(U),V=null,n?A(r.errors,t,n):E(r.errors,t)),(n?!re(d,n):d)||!R(y)||o){const g={...y,...o&&W(i)?{isValid:i}:{},errors:r.errors,name:t};r={...r,...g},v.state.next(g)}},se=async t=>{J(t,!0);const i=await s.resolver(l,s.context,tr(t||f.mount,a,s.criteriaMode,s.shouldUseNativeValidation));return J(t),i},ue=async t=>{const{errors:i}=await se(t);if(t)for(const n of t){const y=h(i,n);y?A(r.errors,n,y):E(r.errors,n)}else r.errors=i;return i},B=async(t,i,n={valid:!0})=>{for(const y in t){const d=t[y];if(d){const{_f:o,...g}=d;if(o){const b=f.array.has(o.name),T=d._f&&rr(d._f);T&&p.validatingFields&&J([y],!0);const L=await it(d,f.disabled,l,M,s.shouldUseNativeValidation&&!i,b);if(T&&p.validatingFields&&J([y]),L[o.name]&&(n.valid=!1,i))break;!i&&(h(L,o.name)?b?Xt(r.errors,L,o.name):A(r.errors,o.name,L[o.name]):E(r.errors,o.name))}!R(g)&&await B(g,i,n)}}return n.valid},_e=()=>{for(const t of f.unMount){const i=h(a,t);i&&(i._f.refs?i._f.refs.every(n=>!Le(n)):!Le(i._f.ref))&&De(t)}f.unMount=new Set},_=(t,i)=>!s.disabled&&(t&&i&&A(l,t,i),!re(Ie(),u)),F=(t,i,n)=>Qt(t,f,{...c.mount?l:D(i)?u:K(t)?{[t]:i}:i},n,i),k=t=>we(h(c.mount?l:u,t,s.shouldUnregister?h(u,t,[]):[])),C=(t,i,n={})=>{const y=h(a,t);let d=i;if(y){const o=y._f;o&&(!o.disabled&&A(l,t,gt(i,o)),d=xe(o.ref)&&O(i)?"":i,ft(o.ref)?[...o.ref.options].forEach(g=>g.selected=d.includes(g.value)):o.refs?ve(o.ref)?o.refs.length>1?o.refs.forEach(g=>(!g.defaultChecked||!g.disabled)&&(g.checked=Array.isArray(d)?!!d.find(b=>b===g.value):d===g.value)):o.refs[0]&&(o.refs[0].checked=!!d):o.refs.forEach(g=>g.checked=g.value===d):Me(o.ref)?o.ref.value="":(o.ref.value=d,o.ref.type||v.values.next({name:t,values:{...l}})))}(n.shouldDirty||n.shouldTouch)&&le(t,d,n.shouldTouch,n.shouldDirty,!0),n.shouldValidate&&fe(t)},$=(t,i,n)=>{for(const y in i){const d=i[y],o=`${t}.${y}`,g=h(a,o);(f.array.has(t)||w(d)||g&&!g._f)&&!ie(d)?$(o,d,n):C(o,d,n)}},I=(t,i,n={})=>{const y=h(a,t),d=f.array.has(t),o=P(i);A(l,t,o),d?(v.array.next({name:t,values:{...l}}),(p.isDirty||p.dirtyFields)&&n.shouldDirty&&v.state.next({name:t,dirtyFields:ye(u,l),isDirty:_(t,o)})):y&&!y._f&&!O(o)?$(t,o,n):C(t,o,n),Je(t,f)&&v.state.next({...r}),v.values.next({name:c.mount?t:void 0,values:{...l}})},ce=async t=>{c.mount=!0;const i=t.target;let n=i.name,y=!0;const d=h(a,n),o=()=>i.type?Ne(d._f):$t(t),g=b=>{y=Number.isNaN(b)||ie(b)&&isNaN(b.getTime())||re(b,h(l,n,b))};if(d){let b,T;const L=o(),ee=t.type===Xe.BLUR||t.type===Xe.FOCUS_OUT,Ft=!sr(d._f)&&!s.resolver&&!h(r.errors,n)&&!d._f.deps||ir(ee,h(r.touchedFields,n),r.isSubmitted,ne,Y),ke=Je(n,f,ee);A(l,n,L),ee?(d._f.onBlur&&d._f.onBlur(t),V&&V(0)):d._f.onChange&&d._f.onChange(t);const Ee=le(n,L,ee,!1),At=!R(Ee)||ke;if(!ee&&v.values.next({name:n,type:t.type,values:{...l}}),Ft)return p.isValid&&(s.mode==="onBlur"&&ee?Z():ee||Z()),At&&v.state.next({name:n,...ke?{}:Ee});if(!ee&&ke&&v.state.next({...r}),s.resolver){const{errors:Ke}=await se([n]);if(g(L),y){const xt=nt(r.errors,a,n),Ze=nt(Ke,a,xt.name||n);b=Ze.error,n=Ze.name,T=R(Ke)}}else J([n],!0),b=(await it(d,f.disabled,l,M,s.shouldUseNativeValidation))[n],J([n]),g(L),y&&(b?T=!1:p.isValid&&(T=await B(a,!0)));y&&(d._f.deps&&fe(d._f.deps),be(n,T,b,Ee))}},de=(t,i)=>{if(h(r.errors,i)&&t.focus)return t.focus(),1},fe=async(t,i={})=>{let n,y;const d=me(t);if(s.resolver){const o=await ue(D(t)?t:d);n=R(o),y=t?!d.some(g=>h(o,g)):n}else t?(y=(await Promise.all(d.map(async o=>{const g=h(a,o);return await B(g&&g._f?{[o]:g}:g)}))).every(Boolean),!(!y&&!r.isValid)&&Z()):y=n=await B(a);return v.state.next({...!K(t)||p.isValid&&n!==r.isValid?{}:{name:t},...s.resolver||!t?{isValid:n}:{},errors:r.errors}),i.shouldFocus&&!y&&ge(a,de,t?d:f.mount),y},Ie=t=>{const i={...c.mount?l:u};return D(t)?i:K(t)?h(i,t):t.map(n=>h(i,n))},Pe=(t,i)=>({invalid:!!h((i||r).errors,t),isDirty:!!h((i||r).dirtyFields,t),error:h((i||r).errors,t),isValidating:!!h(r.validatingFields,t),isTouched:!!h((i||r).touchedFields,t)}),vt=t=>{t&&me(t).forEach(i=>E(r.errors,i)),v.state.next({errors:t?r.errors:{}})},qe=(t,i,n)=>{const y=(h(a,t,{_f:{}})._f||{}).ref,d=h(r.errors,t)||{},{ref:o,message:g,type:b,...T}=d;A(r.errors,t,{...T,...i,ref:y}),v.state.next({name:t,errors:r.errors,isValid:!1}),n&&n.shouldFocus&&y&&y.focus&&y.focus()},bt=(t,i)=>H(t)?v.values.subscribe({next:n=>t(F(void 0,i),n)}):F(t,i,!0),De=(t,i={})=>{for(const n of t?me(t):f.mount)f.mount.delete(n),f.array.delete(n),i.keepValue||(E(a,n),E(l,n)),!i.keepError&&E(r.errors,n),!i.keepDirty&&E(r.dirtyFields,n),!i.keepTouched&&E(r.touchedFields,n),!i.keepIsValidating&&E(r.validatingFields,n),!s.shouldUnregister&&!i.keepDefaultValue&&E(u,n);v.values.next({values:{...l}}),v.state.next({...r,...i.keepDirty?{isDirty:_()}:{}}),!i.keepIsValid&&Z()},$e=({disabled:t,name:i,field:n,fields:y})=>{(W(t)&&c.mount||t||f.disabled.has(i))&&(t?f.disabled.add(i):f.disabled.delete(i),le(i,Ne(n?n._f:h(y,i)._f),!1,!1,!0))},Se=(t,i={})=>{let n=h(a,t);const y=W(i.disabled)||W(s.disabled);return A(a,t,{...n||{},_f:{...n&&n._f?n._f:{ref:{name:t}},name:t,mount:!0,...i}}),f.mount.add(t),n?$e({field:n,disabled:W(i.disabled)?i.disabled:s.disabled,name:t}):S(t,!0,i.value),{...y?{disabled:i.disabled||s.disabled}:{},...s.progressive?{required:!!i.required,min:he(i.min),max:he(i.max),minLength:he(i.minLength),maxLength:he(i.maxLength),pattern:he(i.pattern)}:{},name:t,onChange:ce,onBlur:ce,ref:d=>{if(d){Se(t,i),n=h(a,t);const o=D(d.value)&&d.querySelectorAll&&d.querySelectorAll("input,select,textarea")[0]||d,g=er(o),b=n._f.refs||[];if(g?b.find(T=>T===o):o===n._f.ref)return;A(a,t,{_f:{...n._f,...g?{refs:[...b.filter(Le),o,...Array.isArray(h(u,t))?[{}]:[]],ref:{type:o.type,name:t}}:{ref:o}}}),S(t,!1,void 0,o)}else n=h(a,t,{}),n._f&&(n._f.mount=!1),(s.shouldUnregister||i.shouldUnregister)&&!(jt(f.array,t)&&c.action)&&f.unMount.add(t)}}},ze=()=>s.shouldFocusError&&ge(a,de,f.mount),_t=t=>{W(t)&&(v.state.next({disabled:t}),ge(a,(i,n)=>{const y=h(a,n);y&&(i.disabled=y._f.disabled||t,Array.isArray(y._f.refs)&&y._f.refs.forEach(d=>{d.disabled=y._f.disabled||t}))},0,!1))},je=(t,i)=>async n=>{let y;n&&(n.preventDefault&&n.preventDefault(),n.persist&&n.persist());let d=P(l);if(f.disabled.size)for(const o of f.disabled)A(d,o,void 0);if(v.state.next({isSubmitting:!0}),s.resolver){const{errors:o,values:g}=await se();r.errors=o,d=g}else await B(a);if(E(r.errors,"root"),R(r.errors)){v.state.next({errors:{}});try{await t(d,n)}catch(o){y=o}}else i&&await i({...r.errors},n),ze(),setTimeout(ze);if(v.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:R(r.errors)&&!y,submitCount:r.submitCount+1,errors:r.errors}),y)throw y},mt=(t,i={})=>{h(a,t)&&(D(i.defaultValue)?I(t,P(h(u,t))):(I(t,i.defaultValue),A(u,t,P(i.defaultValue))),i.keepTouched||E(r.touchedFields,t),i.keepDirty||(E(r.dirtyFields,t),r.isDirty=i.defaultValue?_(t,P(h(u,t))):_()),i.keepError||(E(r.errors,t),p.isValid&&Z()),v.state.next({...r}))},We=(t,i={})=>{const n=t?P(t):u,y=P(n),d=R(t),o=d?u:y;if(i.keepDefaultValues||(u=n),!i.keepValues){if(i.keepDirtyValues){const g=new Set([...f.mount,...Object.keys(ye(u,l))]);for(const b of Array.from(g))h(r.dirtyFields,b)?A(o,b,h(l,b)):I(b,h(o,b))}else{if(Re&&D(t))for(const g of f.mount){const b=h(a,g);if(b&&b._f){const T=Array.isArray(b._f.refs)?b._f.refs[0]:b._f.ref;if(xe(T)){const L=T.closest("form");if(L){L.reset();break}}}}a={}}l=s.shouldUnregister?i.keepDefaultValues?P(u):{}:P(o),v.array.next({values:{...o}}),v.values.next({values:{...o}})}f={mount:i.keepDirtyValues?f.mount:new Set,unMount:new Set,array:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},c.mount=!p.isValid||!!i.keepIsValid||!!i.keepDirtyValues,c.watch=!!s.shouldUnregister,v.state.next({submitCount:i.keepSubmitCount?r.submitCount:0,isDirty:d?!1:i.keepDirty?r.isDirty:!!(i.keepDefaultValues&&!re(t,u)),isSubmitted:i.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:d?{}:i.keepDirtyValues?i.keepDefaultValues&&l?ye(u,l):r.dirtyFields:i.keepDefaultValues&&t?ye(u,t):i.keepDirty?r.dirtyFields:{},touchedFields:i.keepTouched?r.touchedFields:{},errors:i.keepErrors?r.errors:{},isSubmitSuccessful:i.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1})},He=(t,i)=>We(H(t)?t(l):t,i);return{control:{register:Se,unregister:De,getFieldState:Pe,handleSubmit:je,setError:qe,_executeSchema:se,_getWatch:F,_getDirty:_,_updateValid:Z,_removeUnmounted:_e,_updateFieldArray:m,_updateDisabledField:$e,_getFieldArray:k,_reset:We,_resetDefaultValues:()=>H(s.defaultValues)&&s.defaultValues().then(t=>{He(t,s.resetOptions),v.state.next({isLoading:!1})}),_updateFormState:t=>{r={...r,...t}},_disableForm:_t,_subjects:v,_proxyFormState:p,_setErrors:G,get _fields(){return a},get _formValues(){return l},get _state(){return c},set _state(t){c=t},get _defaultValues(){return u},get _names(){return f},set _names(t){f=t},get _formState(){return r},set _formState(t){r=t},get _options(){return s},set _options(t){s={...s,...t}}},trigger:fe,register:Se,handleSubmit:je,watch:bt,setValue:I,getValues:Ie,reset:He,resetField:mt,clearErrors:vt,unregister:De,setError:qe,setFocus:(t,i={})=>{const n=h(a,t),y=n&&n._f;if(y){const d=y.refs?y.refs[0]:y.ref;d.focus&&(d.focus(),i.shouldSelect&&H(d.select)&&d.select())}},getFieldState:Pe}}function ur(e={}){const s=q.useRef(void 0),r=q.useRef(void 0),[a,u]=q.useState({isDirty:!1,isValidating:!1,isLoading:H(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},validatingFields:{},errors:e.errors||{},disabled:e.disabled||!1,defaultValues:H(e.defaultValues)?void 0:e.defaultValues});s.current||(s.current={...lr(e),formState:a});const l=s.current.control;return l._options=e,Zt({subject:l._subjects.state,next:c=>{Kt(c,l._proxyFormState,l._updateFormState)&&u({...l._formState})}}),q.useEffect(()=>l._disableForm(e.disabled),[l,e.disabled]),q.useEffect(()=>{if(l._proxyFormState.isDirty){const c=l._getDirty();c!==a.isDirty&&l._subjects.state.next({isDirty:c})}},[l,a.isDirty]),q.useEffect(()=>{e.values&&!re(e.values,r.current)?(l._reset(e.values,l._options.resetOptions),r.current=e.values,u(c=>({...c}))):l._resetDefaultValues()},[e.values,l]),q.useEffect(()=>{e.errors&&l._setErrors(e.errors)},[e.errors,l]),q.useEffect(()=>{l._state.mount||(l._updateValid(),l._state.mount=!0),l._state.watch&&(l._state.watch=!1,l._subjects.state.next({...l._formState})),l._removeUnmounted()}),q.useEffect(()=>{e.shouldUnregister&&l._subjects.values.next({values:l._getWatch()})},[e.shouldUnregister,l]),s.current.formState=Ht(a,l),s.current}const or=({forms:e,onSubmit:s,buttonLabel:r})=>{const{register:a,formState:u,handleSubmit:l}=ur({mode:"onBlur"}),c=Ae.useCallback(f=>{var V;return f.type==="TEXT_FIELD"?x(Qe,{children:x(Ot,{label:f.label,helpMessage:((V=u.errors[f.id])==null?void 0:V.message)||f.helpMessage,hasError:!!u.errors[f.id],...a(f.id,{required:f.required,pattern:lt[f.id]})})}):f.type==="SELECT"?x(Qe,{children:x(qt,{label:f.label,options:f.options,...a(f.id,{required:f.required,pattern:lt[f.id]})})}):null},[a,u.errors]);return z("div",{style:{padding:24},children:[x(te,{bold:!0,children:"예약정보"}),x(ae,{size:16}),x("form",{children:e.map((f,V)=>z(Ae.Fragment,{children:[c(f),V!==e.length-1&&x(ae,{size:8})]},f.id))}),x(ae,{size:60}),x(Ct,{label:r,disabled:!u.isValid,onClick:l(s)})]})},lt={name:{value:/^[가-힣]+$/,message:"한글명을 확인해주세요."},email:{value:/^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,message:"이메일 형식을 확인해주세요."},phone:{value:/^\d+$/,message:"휴대전화 번호를 확인해주세요."}},mr=()=>{const e=kt(),s=Et(),{hotelId:r,roomId:a,startDate:u,endDate:l,nights:c}=Tt.parse(window.location.search,{ignoreQueryPrefix:!0}),{data:f,isLoading:V,makeReservation:U}=Ut({hotelId:r,roomId:a}),p=async M=>{const N={userId:e==null?void 0:e.uid,hotelId:r,roomId:a,startDate:u,endDate:l,price:Y.price*Number(c),formValues:M};await U(N),s(`/reservation/done?hotelName=${v.name}`)};if(Ae.useEffect(()=>{[e,u,a,u,l,c].some(N=>N===null)&&window.history.back()},[e,r,a,u,l,c]),!f||V)return null;const{hotel:v,room:Y}=f,ne=`${c}박 ${Number(c)+1}일 ${Rt(Y.price*Number(c))}원 예약하기`;return z("div",{children:[x(Mt,{hotelName:v.name,room:Y,startDate:u,endDate:l,nights:c}),x(ae,{size:8,backgroundColor:"gray100"}),x(or,{onSubmit:p,forms:v.form,buttonLabel:ne})]})};export{mr as default};
