import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{r,a as c,b as e,e as s,w as o,F as h,d as n,c as i,o as l}from"./app.6c1bf1c7.js";const u={},_=n("@purista/core"),p=n(" / "),f=n("Exports"),m=n(" / EBMessageType"),b=i('<h1 id="enumeration-ebmessagetype" tabindex="-1"><a class="header-anchor" href="#enumeration-ebmessagetype" aria-hidden="true">#</a> Enumeration: EBMessageType</h1><p>Type of event bridge message</p><h2 id="table-of-contents" tabindex="-1"><a class="header-anchor" href="#table-of-contents" aria-hidden="true">#</a> Table of contents</h2><h3 id="enumeration-members" tabindex="-1"><a class="header-anchor" href="#enumeration-members" aria-hidden="true">#</a> Enumeration members</h3>',4),g=n("Command"),y=n("CommandErrorResponse"),v=n("CommandSuccessResponse"),E=n("InfoServiceDrain"),T=n("InfoServiceFunctionAdded"),B=n("InfoServiceInit"),x=n("InfoServiceNotReady"),M=n("InfoServiceReady"),S=n("InfoServiceShutdown"),w=i('<h2 id="enumeration-members-1" tabindex="-1"><a class="header-anchor" href="#enumeration-members-1" aria-hidden="true">#</a> Enumeration members</h2><h3 id="command" tabindex="-1"><a class="header-anchor" href="#command" aria-hidden="true">#</a> Command</h3><p>\u2022 <strong>Command</strong> = <code>&quot;command&quot;</code></p><p>Command message type: Message which is sent from a single sender to exactly one single receiver. The sender expects a answer response from receiver within a specific time frame (ttl). If the sender does not receive a answer within this time frame, the command will be rejected with timeout error.</p><h4 id="defined-in" tabindex="-1"><a class="header-anchor" href="#defined-in" aria-hidden="true">#</a> Defined in</h4>',5),I={href:"https://github.com/sebastianwessel/purista/blob/5a4aa45/src/core/types/EBMessageType.enum.ts#L11",target:"_blank",rel:"noopener noreferrer"},R=n("src/core/types/EBMessageType.enum.ts:11"),k=e("hr",null,null,-1),D=e("h3",{id:"commanderrorresponse",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#commanderrorresponse","aria-hidden":"true"},"#"),n(" CommandErrorResponse")],-1),L=e("p",null,[n("\u2022 "),e("strong",null,"CommandErrorResponse"),n(" = "),e("code",null,'"commandErrorResponse"')],-1),C=e("h4",{id:"defined-in-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-1","aria-hidden":"true"},"#"),n(" Defined in")],-1),N={href:"https://github.com/sebastianwessel/purista/blob/5a4aa45/src/core/types/EBMessageType.enum.ts#L15",target:"_blank",rel:"noopener noreferrer"},F=n("src/core/types/EBMessageType.enum.ts:15"),A=e("hr",null,null,-1),V=e("h3",{id:"commandsuccessresponse",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#commandsuccessresponse","aria-hidden":"true"},"#"),n(" CommandSuccessResponse")],-1),q=e("p",null,[n("\u2022 "),e("strong",null,"CommandSuccessResponse"),n(" = "),e("code",null,'"commandSuccessResponse"')],-1),j=e("h4",{id:"defined-in-2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-2","aria-hidden":"true"},"#"),n(" Defined in")],-1),z={href:"https://github.com/sebastianwessel/purista/blob/5a4aa45/src/core/types/EBMessageType.enum.ts#L13",target:"_blank",rel:"noopener noreferrer"},G=n("src/core/types/EBMessageType.enum.ts:13"),H=e("hr",null,null,-1),J=e("h3",{id:"infoservicedrain",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#infoservicedrain","aria-hidden":"true"},"#"),n(" InfoServiceDrain")],-1),K=e("p",null,[n("\u2022 "),e("strong",null,"InfoServiceDrain"),n(" = "),e("code",null,'"infoServiceDrain"')],-1),O=e("h4",{id:"defined-in-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-3","aria-hidden":"true"},"#"),n(" Defined in")],-1),P={href:"https://github.com/sebastianwessel/purista/blob/5a4aa45/src/core/types/EBMessageType.enum.ts#L27",target:"_blank",rel:"noopener noreferrer"},Q=n("src/core/types/EBMessageType.enum.ts:27"),U=e("hr",null,null,-1),W=e("h3",{id:"infoservicefunctionadded",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#infoservicefunctionadded","aria-hidden":"true"},"#"),n(" InfoServiceFunctionAdded")],-1),X=e("p",null,[n("\u2022 "),e("strong",null,"InfoServiceFunctionAdded"),n(" = "),e("code",null,'"infoServiceFunctionAdded"')],-1),Y=e("h4",{id:"defined-in-4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-4","aria-hidden":"true"},"#"),n(" Defined in")],-1),Z={href:"https://github.com/sebastianwessel/purista/blob/5a4aa45/src/core/types/EBMessageType.enum.ts#L26",target:"_blank",rel:"noopener noreferrer"},$=n("src/core/types/EBMessageType.enum.ts:26"),ee=e("hr",null,null,-1),ne=e("h3",{id:"infoserviceinit",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#infoserviceinit","aria-hidden":"true"},"#"),n(" InfoServiceInit")],-1),se=e("p",null,[n("\u2022 "),e("strong",null,"InfoServiceInit"),n(" = "),e("code",null,'"infoServiceInit"')],-1),te=e("p",null,"Info message type: Message which is sent from a single sender to unspecified receivers. The sender does not expect any answer to this message and does not process any reply to this message. Info messages are fire & forget broadcasting messages.",-1),oe=e("h4",{id:"defined-in-5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-5","aria-hidden":"true"},"#"),n(" Defined in")],-1),ae={href:"https://github.com/sebastianwessel/purista/blob/5a4aa45/src/core/types/EBMessageType.enum.ts#L23",target:"_blank",rel:"noopener noreferrer"},re=n("src/core/types/EBMessageType.enum.ts:23"),ie=e("hr",null,null,-1),de=e("h3",{id:"infoservicenotready",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#infoservicenotready","aria-hidden":"true"},"#"),n(" InfoServiceNotReady")],-1),ce=e("p",null,[n("\u2022 "),e("strong",null,"InfoServiceNotReady"),n(" = "),e("code",null,'"infoServiceNotReady"')],-1),he=e("h4",{id:"defined-in-6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-6","aria-hidden":"true"},"#"),n(" Defined in")],-1),le={href:"https://github.com/sebastianwessel/purista/blob/5a4aa45/src/core/types/EBMessageType.enum.ts#L25",target:"_blank",rel:"noopener noreferrer"},ue=n("src/core/types/EBMessageType.enum.ts:25"),_e=e("hr",null,null,-1),pe=e("h3",{id:"infoserviceready",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#infoserviceready","aria-hidden":"true"},"#"),n(" InfoServiceReady")],-1),fe=e("p",null,[n("\u2022 "),e("strong",null,"InfoServiceReady"),n(" = "),e("code",null,'"infoServiceReady"')],-1),me=e("h4",{id:"defined-in-7",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-7","aria-hidden":"true"},"#"),n(" Defined in")],-1),be={href:"https://github.com/sebastianwessel/purista/blob/5a4aa45/src/core/types/EBMessageType.enum.ts#L24",target:"_blank",rel:"noopener noreferrer"},ge=n("src/core/types/EBMessageType.enum.ts:24"),ye=e("hr",null,null,-1),ve=e("h3",{id:"infoserviceshutdown",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#infoserviceshutdown","aria-hidden":"true"},"#"),n(" InfoServiceShutdown")],-1),Ee=e("p",null,[n("\u2022 "),e("strong",null,"InfoServiceShutdown"),n(" = "),e("code",null,'"infoServiceShutdown"')],-1),Te=e("h4",{id:"defined-in-8",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-8","aria-hidden":"true"},"#"),n(" Defined in")],-1),Be={href:"https://github.com/sebastianwessel/purista/blob/5a4aa45/src/core/types/EBMessageType.enum.ts#L28",target:"_blank",rel:"noopener noreferrer"},xe=n("src/core/types/EBMessageType.enum.ts:28");function Me(Se,we){const t=r("RouterLink"),a=r("ExternalLinkIcon");return l(),c(h,null,[e("p",null,[s(t,{to:"/api/"},{default:o(()=>[_]),_:1}),p,s(t,{to:"/api/modules.html"},{default:o(()=>[f]),_:1}),m]),b,e("ul",null,[e("li",null,[s(t,{to:"/api/enums/EBMessageType.html#command"},{default:o(()=>[g]),_:1})]),e("li",null,[s(t,{to:"/api/enums/EBMessageType.html#commanderrorresponse"},{default:o(()=>[y]),_:1})]),e("li",null,[s(t,{to:"/api/enums/EBMessageType.html#commandsuccessresponse"},{default:o(()=>[v]),_:1})]),e("li",null,[s(t,{to:"/api/enums/EBMessageType.html#infoservicedrain"},{default:o(()=>[E]),_:1})]),e("li",null,[s(t,{to:"/api/enums/EBMessageType.html#infoservicefunctionadded"},{default:o(()=>[T]),_:1})]),e("li",null,[s(t,{to:"/api/enums/EBMessageType.html#infoserviceinit"},{default:o(()=>[B]),_:1})]),e("li",null,[s(t,{to:"/api/enums/EBMessageType.html#infoservicenotready"},{default:o(()=>[x]),_:1})]),e("li",null,[s(t,{to:"/api/enums/EBMessageType.html#infoserviceready"},{default:o(()=>[M]),_:1})]),e("li",null,[s(t,{to:"/api/enums/EBMessageType.html#infoserviceshutdown"},{default:o(()=>[S]),_:1})])]),w,e("p",null,[e("a",I,[R,s(a)])]),k,D,L,C,e("p",null,[e("a",N,[F,s(a)])]),A,V,q,j,e("p",null,[e("a",z,[G,s(a)])]),H,J,K,O,e("p",null,[e("a",P,[Q,s(a)])]),U,W,X,Y,e("p",null,[e("a",Z,[$,s(a)])]),ee,ne,se,te,oe,e("p",null,[e("a",ae,[re,s(a)])]),ie,de,ce,he,e("p",null,[e("a",le,[ue,s(a)])]),_e,pe,fe,me,e("p",null,[e("a",be,[ge,s(a)])]),ye,ve,Ee,Te,e("p",null,[e("a",Be,[xe,s(a)])])],64)}var ke=d(u,[["render",Me],["__file","EBMessageType.html.vue"]]);export{ke as default};
