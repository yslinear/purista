import{_ as l}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as d,o as i,c,b as e,e as a,w as n,d as t,a as o}from"./app-aQ4vLSXI.js";const h={},p=e("h1",{id:"class-natsstatestore",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#class-natsstatestore","aria-hidden":"true"},"#"),t(" Class: NatsStateStore")],-1),u=o(`<p>A state store for using NATS (with JetStream) as storage.</p><p><strong><code>Example</code></strong></p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  port<span class="token operator">:</span> <span class="token number">8222</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">NatsStateStore</span><span class="token punctuation">(</span><span class="token punctuation">{</span> config <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">await</span> store<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token string">&#39;stateKey&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span> myState<span class="token operator">:</span> <span class="token string">&#39;value&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">let</span> value <span class="token operator">=</span> <span class="token keyword">await</span> store<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token string">&#39;stateKey&#39;</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token comment">// outputs: { stateKey: { myState: &#39;value&#39; } }</span>

<span class="token keyword">await</span> store<span class="token punctuation">.</span><span class="token function">removeState</span><span class="token punctuation">(</span><span class="token string">&#39;stateKey&#39;</span><span class="token punctuation">)</span>

value <span class="token operator">=</span> <span class="token keyword">await</span> store<span class="token punctuation">.</span><span class="token function">getState</span><span class="token punctuation">(</span><span class="token string">&#39;stateKey&#39;</span><span class="token punctuation">)</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token comment">// outputs: undefined</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hierarchy" tabindex="-1"><a class="header-anchor" href="#hierarchy" aria-hidden="true">#</a> Hierarchy</h2>`,4),f=e("code",null,"StateStoreBaseClass",-1),g=e("code",null,"NatsStateStoreConfig",-1),m=e("p",null,[t("↳ "),e("strong",null,[e("code",null,"NatsStateStore")])],-1),_=e("h2",{id:"table-of-contents",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#table-of-contents","aria-hidden":"true"},"#"),t(" Table of contents")],-1),b=e("h3",{id:"constructors",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#constructors","aria-hidden":"true"},"#"),t(" Constructors")],-1),S=e("h3",{id:"properties",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#properties","aria-hidden":"true"},"#"),t(" Properties")],-1),x=e("h3",{id:"methods",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#methods","aria-hidden":"true"},"#"),t(" Methods")],-1),y=e("h2",{id:"constructors-1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#constructors-1","aria-hidden":"true"},"#"),t(" Constructors")],-1),k=e("h3",{id:"constructor",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#constructor","aria-hidden":"true"},"#"),t(" constructor")],-1),v=e("strong",null,"new NatsStateStore",-1),N=e("code",null,"config?",-1),w=e("code",null,"NatsStateStore",-1),C=o('<h4 id="parameters" tabindex="-1"><a class="header-anchor" href="#parameters" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>config?</code></td><td style="text-align:left;"><code>Object</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>config.cacheTtl?</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">Cache time to live in ms</td></tr><tr><td style="text-align:left;"><code>config.enableCache?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Enable cache</td></tr><tr><td style="text-align:left;"><code>config.enableGet?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Enable generally get method</td></tr><tr><td style="text-align:left;"><code>config.enableRemove?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Enable generally remove method</td></tr><tr><td style="text-align:left;"><code>config.enableSet?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Enable generally set method</td></tr><tr><td style="text-align:left;"><code>config.keyValueStoreName?</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>config.logLevel?</code></td><td style="text-align:left;"><code>LogLevelName</code></td><td style="text-align:left;">A log level for new logger if logger is not set</td></tr><tr><td style="text-align:left;"><code>config.logger?</code></td><td style="text-align:left;"><code>Logger</code></td><td style="text-align:left;">A logger instance</td></tr></tbody></table><h4 id="returns" tabindex="-1"><a class="header-anchor" href="#returns" aria-hidden="true">#</a> Returns</h4>',3),L=e("code",null,"NatsStateStore",-1),P=e("h4",{id:"overrides",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#overrides","aria-hidden":"true"},"#"),t(" Overrides")],-1),B=e("p",null,"StateStoreBaseClass&lt;NatsStateStoreConfig&gt;.constructor",-1),D=e("h4",{id:"defined-in",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in","aria-hidden":"true"},"#"),t(" Defined in")],-1),R={href:"https://github.com/sebastianwessel/purista/blob/master/packages/nats-state-store/src/NatsStateStore.impl.ts#L34",target:"_blank",rel:"noopener noreferrer"},E=o('<h2 id="properties-1" tabindex="-1"><a class="header-anchor" href="#properties-1" aria-hidden="true">#</a> Properties</h2><h3 id="config" tabindex="-1"><a class="header-anchor" href="#config" aria-hidden="true">#</a> config</h3><p>• <strong>config</strong>: <code>Object</code></p><h4 id="type-declaration" tabindex="-1"><a class="header-anchor" href="#type-declaration" aria-hidden="true">#</a> Type declaration</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>cacheTtl?</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">Cache time to live in ms</td></tr><tr><td style="text-align:left;"><code>enableCache?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Enable cache</td></tr><tr><td style="text-align:left;"><code>enableGet?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Enable generally get method</td></tr><tr><td style="text-align:left;"><code>enableRemove?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Enable generally remove method</td></tr><tr><td style="text-align:left;"><code>enableSet?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Enable generally set method</td></tr><tr><td style="text-align:left;"><code>keyValueStoreName</code></td><td style="text-align:left;"><code>string</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>logLevel?</code></td><td style="text-align:left;"><code>LogLevelName</code></td><td style="text-align:left;">A log level for new logger if logger is not set</td></tr><tr><td style="text-align:left;"><code>logger?</code></td><td style="text-align:left;"><code>Logger</code></td><td style="text-align:left;">A logger instance</td></tr></tbody></table><h4 id="inherited-from" tabindex="-1"><a class="header-anchor" href="#inherited-from" aria-hidden="true">#</a> Inherited from</h4><p>StateStoreBaseClass.config</p><h4 id="defined-in-1" tabindex="-1"><a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a> Defined in</h4><p>core/lib/types/core/StateStore/StateStoreBaseClass.impl.d.ts:10</p><hr><h3 id="connection" tabindex="-1"><a class="header-anchor" href="#connection" aria-hidden="true">#</a> connection</h3><p>• <strong>connection</strong>: <code>undefined</code> | <code>NatsConnection</code></p><h4 id="defined-in-2" tabindex="-1"><a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a> Defined in</h4>',13),T={href:"https://github.com/sebastianwessel/purista/blob/master/packages/nats-state-store/src/NatsStateStore.impl.ts#L29",target:"_blank",rel:"noopener noreferrer"},V=e("hr",null,null,-1),A=e("h3",{id:"kv",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#kv","aria-hidden":"true"},"#"),t(" kv")],-1),K=e("p",null,[t("• "),e("strong",null,"kv"),t(": "),e("code",null,"undefined"),t(" | "),e("code",null,"KV")],-1),I=e("h4",{id:"defined-in-3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#defined-in-3","aria-hidden":"true"},"#"),t(" Defined in")],-1),O={href:"https://github.com/sebastianwessel/purista/blob/master/packages/nats-state-store/src/NatsStateStore.impl.ts#L32",target:"_blank",rel:"noopener noreferrer"},M=o('<hr><h3 id="logger" tabindex="-1"><a class="header-anchor" href="#logger" aria-hidden="true">#</a> logger</h3><p>• <strong>logger</strong>: <code>Logger</code></p><h4 id="inherited-from-1" tabindex="-1"><a class="header-anchor" href="#inherited-from-1" aria-hidden="true">#</a> Inherited from</h4><p>StateStoreBaseClass.logger</p><h4 id="defined-in-4" tabindex="-1"><a class="header-anchor" href="#defined-in-4" aria-hidden="true">#</a> Defined in</h4><p>core/lib/types/core/StateStore/StateStoreBaseClass.impl.d.ts:9</p><hr><h3 id="name" tabindex="-1"><a class="header-anchor" href="#name" aria-hidden="true">#</a> name</h3><p>• <strong>name</strong>: <code>string</code></p><h4 id="inherited-from-2" tabindex="-1"><a class="header-anchor" href="#inherited-from-2" aria-hidden="true">#</a> Inherited from</h4><p>StateStoreBaseClass.name</p><h4 id="defined-in-5" tabindex="-1"><a class="header-anchor" href="#defined-in-5" aria-hidden="true">#</a> Defined in</h4><p>core/lib/types/core/StateStore/StateStoreBaseClass.impl.d.ts:11</p><hr><h3 id="sc" tabindex="-1"><a class="header-anchor" href="#sc" aria-hidden="true">#</a> sc</h3><p>• <strong>sc</strong>: <code>Codec</code>&lt;<code>unknown</code>&gt;</p><h4 id="defined-in-6" tabindex="-1"><a class="header-anchor" href="#defined-in-6" aria-hidden="true">#</a> Defined in</h4>',18),j={href:"https://github.com/sebastianwessel/purista/blob/master/packages/nats-state-store/src/NatsStateStore.impl.ts#L31",target:"_blank",rel:"noopener noreferrer"},G=o('<h2 id="methods-1" tabindex="-1"><a class="header-anchor" href="#methods-1" aria-hidden="true">#</a> Methods</h2><h3 id="destroy" tabindex="-1"><a class="header-anchor" href="#destroy" aria-hidden="true">#</a> destroy</h3><p>▸ <strong>destroy</strong>(): <code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="returns-1" tabindex="-1"><a class="header-anchor" href="#returns-1" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="overrides-1" tabindex="-1"><a class="header-anchor" href="#overrides-1" aria-hidden="true">#</a> Overrides</h4><p>StateStoreBaseClass.destroy</p><h4 id="defined-in-7" tabindex="-1"><a class="header-anchor" href="#defined-in-7" aria-hidden="true">#</a> Defined in</h4>',8),H={href:"https://github.com/sebastianwessel/purista/blob/master/packages/nats-state-store/src/NatsStateStore.impl.ts#L123",target:"_blank",rel:"noopener noreferrer"},J=o('<hr><h3 id="getstate" tabindex="-1"><a class="header-anchor" href="#getstate" aria-hidden="true">#</a> getState</h3><p>▸ <strong>getState</strong>(<code>...stateNames</code>): <code>Promise</code>&lt;<code>Record</code>&lt;<code>string</code>, <code>unknown</code>&gt;&gt;</p><h4 id="parameters-1" tabindex="-1"><a class="header-anchor" href="#parameters-1" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>...stateNames</code></td><td style="text-align:left;"><code>string</code>[]</td></tr></tbody></table><h4 id="returns-2" tabindex="-1"><a class="header-anchor" href="#returns-2" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>Record</code>&lt;<code>string</code>, <code>unknown</code>&gt;&gt;</p><h4 id="overrides-2" tabindex="-1"><a class="header-anchor" href="#overrides-2" aria-hidden="true">#</a> Overrides</h4><p>StateStoreBaseClass.getState</p><h4 id="defined-in-8" tabindex="-1"><a class="header-anchor" href="#defined-in-8" aria-hidden="true">#</a> Defined in</h4>',10),U={href:"https://github.com/sebastianwessel/purista/blob/master/packages/nats-state-store/src/NatsStateStore.impl.ts#L70",target:"_blank",rel:"noopener noreferrer"},q=o('<hr><h3 id="getstore" tabindex="-1"><a class="header-anchor" href="#getstore" aria-hidden="true">#</a> getStore</h3><p>▸ <strong>getStore</strong>(): <code>Promise</code>&lt;<code>KV</code>&gt;</p><h4 id="returns-3" tabindex="-1"><a class="header-anchor" href="#returns-3" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>KV</code>&gt;</p><h4 id="defined-in-9" tabindex="-1"><a class="header-anchor" href="#defined-in-9" aria-hidden="true">#</a> Defined in</h4>',6),z={href:"https://github.com/sebastianwessel/purista/blob/master/packages/nats-state-store/src/NatsStateStore.impl.ts#L42",target:"_blank",rel:"noopener noreferrer"},F=o('<hr><h3 id="removestate" tabindex="-1"><a class="header-anchor" href="#removestate" aria-hidden="true">#</a> removeState</h3><p>▸ <strong>removeState</strong>(<code>stateName</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="parameters-2" tabindex="-1"><a class="header-anchor" href="#parameters-2" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>stateName</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-4" tabindex="-1"><a class="header-anchor" href="#returns-4" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="overrides-3" tabindex="-1"><a class="header-anchor" href="#overrides-3" aria-hidden="true">#</a> Overrides</h4><p>StateStoreBaseClass.removeState</p><h4 id="defined-in-10" tabindex="-1"><a class="header-anchor" href="#defined-in-10" aria-hidden="true">#</a> Defined in</h4>',10),Q={href:"https://github.com/sebastianwessel/purista/blob/master/packages/nats-state-store/src/NatsStateStore.impl.ts#L91",target:"_blank",rel:"noopener noreferrer"},W=o('<hr><h3 id="setstate" tabindex="-1"><a class="header-anchor" href="#setstate" aria-hidden="true">#</a> setState</h3><p>▸ <strong>setState</strong>(<code>stateName</code>, <code>stateValue</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="parameters-3" tabindex="-1"><a class="header-anchor" href="#parameters-3" aria-hidden="true">#</a> Parameters</h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>stateName</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>stateValue</code></td><td style="text-align:left;"><code>unknown</code></td></tr></tbody></table><h4 id="returns-5" tabindex="-1"><a class="header-anchor" href="#returns-5" aria-hidden="true">#</a> Returns</h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="overrides-4" tabindex="-1"><a class="header-anchor" href="#overrides-4" aria-hidden="true">#</a> Overrides</h4><p>StateStoreBaseClass.setState</p><h4 id="defined-in-11" tabindex="-1"><a class="header-anchor" href="#defined-in-11" aria-hidden="true">#</a> Defined in</h4>',10),X={href:"https://github.com/sebastianwessel/purista/blob/master/packages/nats-state-store/src/NatsStateStore.impl.ts#L107",target:"_blank",rel:"noopener noreferrer"};function Y(Z,$){const s=d("RouterLink"),r=d("ExternalLinkIcon");return i(),c("div",null,[e("p",null,[a(s,{to:"/api/"},{default:n(()=>[t("PURISTA API")]),_:1}),t(" / "),a(s,{to:"/api/modules.html"},{default:n(()=>[t("Modules")]),_:1}),t(" / "),a(s,{to:"/api/modules/purista_nats_state_store.html"},{default:n(()=>[t("@purista/nats-state-store")]),_:1}),t(" / NatsStateStore")]),p,e("p",null,[a(s,{to:"/api/modules/purista_nats_state_store.html"},{default:n(()=>[t("@purista/nats-state-store")]),_:1}),t(".NatsStateStore")]),u,e("ul",null,[e("li",null,[e("p",null,[f,t("<"),a(s,{to:"/api/modules/purista_nats_state_store.html#natsstatestoreconfig"},{default:n(()=>[g]),_:1}),t(">")]),m])]),_,b,e("ul",null,[e("li",null,[a(s,{to:"/api/classes/purista_nats_state_store.NatsStateStore.html#constructor"},{default:n(()=>[t("constructor")]),_:1})])]),S,e("ul",null,[e("li",null,[a(s,{to:"/api/classes/purista_nats_state_store.NatsStateStore.html#config"},{default:n(()=>[t("config")]),_:1})]),e("li",null,[a(s,{to:"/api/classes/purista_nats_state_store.NatsStateStore.html#connection"},{default:n(()=>[t("connection")]),_:1})]),e("li",null,[a(s,{to:"/api/classes/purista_nats_state_store.NatsStateStore.html#kv"},{default:n(()=>[t("kv")]),_:1})]),e("li",null,[a(s,{to:"/api/classes/purista_nats_state_store.NatsStateStore.html#logger"},{default:n(()=>[t("logger")]),_:1})]),e("li",null,[a(s,{to:"/api/classes/purista_nats_state_store.NatsStateStore.html#name"},{default:n(()=>[t("name")]),_:1})]),e("li",null,[a(s,{to:"/api/classes/purista_nats_state_store.NatsStateStore.html#sc"},{default:n(()=>[t("sc")]),_:1})])]),x,e("ul",null,[e("li",null,[a(s,{to:"/api/classes/purista_nats_state_store.NatsStateStore.html#destroy"},{default:n(()=>[t("destroy")]),_:1})]),e("li",null,[a(s,{to:"/api/classes/purista_nats_state_store.NatsStateStore.html#getstate"},{default:n(()=>[t("getState")]),_:1})]),e("li",null,[a(s,{to:"/api/classes/purista_nats_state_store.NatsStateStore.html#getstore"},{default:n(()=>[t("getStore")]),_:1})]),e("li",null,[a(s,{to:"/api/classes/purista_nats_state_store.NatsStateStore.html#removestate"},{default:n(()=>[t("removeState")]),_:1})]),e("li",null,[a(s,{to:"/api/classes/purista_nats_state_store.NatsStateStore.html#setstate"},{default:n(()=>[t("setState")]),_:1})])]),y,k,e("p",null,[t("• "),v,t("("),N,t("): "),a(s,{to:"/api/classes/purista_nats_state_store.NatsStateStore.html"},{default:n(()=>[w]),_:1})]),C,e("p",null,[a(s,{to:"/api/classes/purista_nats_state_store.NatsStateStore.html"},{default:n(()=>[L]),_:1})]),P,B,D,e("p",null,[e("a",R,[t("nats-state-store/src/NatsStateStore.impl.ts:34"),a(r)])]),E,e("p",null,[e("a",T,[t("nats-state-store/src/NatsStateStore.impl.ts:29"),a(r)])]),V,A,K,I,e("p",null,[e("a",O,[t("nats-state-store/src/NatsStateStore.impl.ts:32"),a(r)])]),M,e("p",null,[e("a",j,[t("nats-state-store/src/NatsStateStore.impl.ts:31"),a(r)])]),G,e("p",null,[e("a",H,[t("nats-state-store/src/NatsStateStore.impl.ts:123"),a(r)])]),J,e("p",null,[e("a",U,[t("nats-state-store/src/NatsStateStore.impl.ts:70"),a(r)])]),q,e("p",null,[e("a",z,[t("nats-state-store/src/NatsStateStore.impl.ts:42"),a(r)])]),F,e("p",null,[e("a",Q,[t("nats-state-store/src/NatsStateStore.impl.ts:91"),a(r)])]),W,e("p",null,[e("a",X,[t("nats-state-store/src/NatsStateStore.impl.ts:107"),a(r)])])])}const ae=l(h,[["render",Y],["__file","purista_nats_state_store.NatsStateStore.html.vue"]]);export{ae as default};
