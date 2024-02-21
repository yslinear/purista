import{_ as e,c as t,o as a,V as r}from"./chunks/framework.ITQiifkM.js";const m=JSON.parse('{"title":"Interface: StateStore","description":"","frontmatter":{},"headers":[],"relativePath":"api/interfaces/purista_core.StateStore.md","filePath":"api/interfaces/purista_core.StateStore.md","lastUpdated":1708505616000}'),o={name:"api/interfaces/purista_core.StateStore.md"},s=r('<p><a href="./../README.html">PURISTA API</a> / <a href="./../modules.html">Modules</a> / <a href="./../modules/purista_core.html">@purista/core</a> / StateStore</p><h1 id="interface-statestore" tabindex="-1">Interface: StateStore <a class="header-anchor" href="#interface-statestore" aria-label="Permalink to &quot;Interface: StateStore&quot;">​</a></h1><p><a href="./../modules/purista_core.html">@purista/core</a>.StateStore</p><p>Interface definition for state store implementations</p><h2 id="implemented-by" tabindex="-1">Implemented by <a class="header-anchor" href="#implemented-by" aria-label="Permalink to &quot;Implemented by&quot;">​</a></h2><ul><li><a href="./../classes/purista_core.DefaultStateStore.html"><code>DefaultStateStore</code></a></li></ul><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-label="Permalink to &quot;Table of contents&quot;">​</a></h2><h3 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h3><ul><li><a href="./purista_core.StateStore.html#getstate">getState</a></li><li><a href="./purista_core.StateStore.html#name">name</a></li><li><a href="./purista_core.StateStore.html#removestate">removeState</a></li><li><a href="./purista_core.StateStore.html#setstate">setState</a></li></ul><h3 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h3><ul><li><a href="./purista_core.StateStore.html#destroy">destroy</a></li></ul><h2 id="properties-1" tabindex="-1">Properties <a class="header-anchor" href="#properties-1" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="getstate" tabindex="-1">getState <a class="header-anchor" href="#getstate" aria-label="Permalink to &quot;getState&quot;">​</a></h3><p>• <strong>getState</strong>: <a href="./../modules/purista_core.html#stategetterfunction"><code>StateGetterFunction</code></a></p><p>get a state value</p><p><strong><code>Param</code></strong></p><p>name of state</p><p><strong><code>Throws</code></strong></p><p>UnhandledError</p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/sebastianwessel/purista/blob/master/packages/core/src/core/StateStore/types/StateStore.ts#L19" target="_blank" rel="noreferrer">core/StateStore/types/StateStore.ts:19</a></p><hr><h3 id="name" tabindex="-1">name <a class="header-anchor" href="#name" aria-label="Permalink to &quot;name&quot;">​</a></h3><p>• <strong>name</strong>: <code>string</code></p><p>name of store</p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/sebastianwessel/purista/blob/master/packages/core/src/core/StateStore/types/StateStore.ts#L12" target="_blank" rel="noreferrer">core/StateStore/types/StateStore.ts:12</a></p><hr><h3 id="removestate" tabindex="-1">removeState <a class="header-anchor" href="#removestate" aria-label="Permalink to &quot;removeState&quot;">​</a></h3><p>• <strong>removeState</strong>: <a href="./../modules/purista_core.html#statedeletefunction"><code>StateDeleteFunction</code></a></p><p>delete a state value</p><p><strong><code>Param</code></strong></p><p>name of state</p><p><strong><code>Throws</code></strong></p><p>UnhandledError</p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/sebastianwessel/purista/blob/master/packages/core/src/core/StateStore/types/StateStore.ts#L26" target="_blank" rel="noreferrer">core/StateStore/types/StateStore.ts:26</a></p><hr><h3 id="setstate" tabindex="-1">setState <a class="header-anchor" href="#setstate" aria-label="Permalink to &quot;setState&quot;">​</a></h3><p>• <strong>setState</strong>: <a href="./../modules/purista_core.html#statesetterfunction"><code>StateSetterFunction</code></a></p><p>set a state value</p><p><strong><code>Param</code></strong></p><p>name of state</p><p><strong><code>Param</code></strong></p><p>value of state</p><p><strong><code>Throws</code></strong></p><p>UnhandledError</p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/sebastianwessel/purista/blob/master/packages/core/src/core/StateStore/types/StateStore.ts#L34" target="_blank" rel="noreferrer">core/StateStore/types/StateStore.ts:34</a></p><h2 id="methods-1" tabindex="-1">Methods <a class="header-anchor" href="#methods-1" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="destroy" tabindex="-1">destroy <a class="header-anchor" href="#destroy" aria-label="Permalink to &quot;destroy&quot;">​</a></h3><p>▸ <strong>destroy</strong>(): <code>Promise</code>&lt;<code>void</code>&gt;</p><p>disconnects and shuts down the state store</p><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/sebastianwessel/purista/blob/master/packages/core/src/core/StateStore/types/StateStore.ts#L39" target="_blank" rel="noreferrer">core/StateStore/types/StateStore.ts:39</a></p>',57),n=[s];function i(d,l,c,h,p,u){return a(),t("div",null,n)}const S=e(o,[["render",i]]);export{m as __pageData,S as default};
