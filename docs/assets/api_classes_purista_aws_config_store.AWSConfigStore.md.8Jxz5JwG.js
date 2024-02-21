import{_ as a,c as o,o as r,V as e,m as t}from"./chunks/framework.ITQiifkM.js";const x=JSON.parse('{"title":"Class: AWSConfigStore","description":"","frontmatter":{},"headers":[],"relativePath":"api/classes/purista_aws_config_store.AWSConfigStore.md","filePath":"api/classes/purista_aws_config_store.AWSConfigStore.md","lastUpdated":1708505616000}'),i={name:"api/classes/purista_aws_config_store.AWSConfigStore.md"},n=e('<p><a href="./../README.html">PURISTA API</a> / <a href="./../modules.html">Modules</a> / <a href="./../modules/purista_aws_config_store.html">@purista/aws-config-store</a> / AWSConfigStore</p><h1 id="class-awsconfigstore" tabindex="-1">Class: AWSConfigStore <a class="header-anchor" href="#class-awsconfigstore" aria-label="Permalink to &quot;Class: AWSConfigStore&quot;">​</a></h1><p><a href="./../modules/purista_aws_config_store.html">@purista/aws-config-store</a>.AWSConfigStore</p><p>The config store adapter for AWS System Manager. It will store, retrive, update or remove configs in AWS System Manager.</p><p>For performance reasons, and to reduce costs, the config values are cached in memory after first fetch.</p><p>You can disable the whole caching via config by setting enableCache to false. If the cache is enabled, you can set the ttl for cached config values via config cacheTtl (in ms).</p><p>This will return the cached config if available and if ttl is not exceeded. If a config value exceeds the ttl, it does not automatically get removed from cache. It will be removed/overwritten on next get request.</p><h2 id="hierarchy" tabindex="-1">Hierarchy <a class="header-anchor" href="#hierarchy" aria-label="Permalink to &quot;Hierarchy&quot;">​</a></h2><ul><li><p><a href="./purista_core.ConfigStoreBaseClass.html"><code>ConfigStoreBaseClass</code></a>&lt;<a href="./../modules/purista_aws_config_store.html#awsconfigstoreconfig"><code>AWSConfigStoreConfig</code></a>&gt;</p><p>↳ <strong><code>AWSConfigStore</code></strong></p></li></ul><h2 id="table-of-contents" tabindex="-1">Table of contents <a class="header-anchor" href="#table-of-contents" aria-label="Permalink to &quot;Table of contents&quot;">​</a></h2><h3 id="constructors" tabindex="-1">Constructors <a class="header-anchor" href="#constructors" aria-label="Permalink to &quot;Constructors&quot;">​</a></h3><ul><li><a href="./purista_aws_config_store.AWSConfigStore.html#constructor">constructor</a></li></ul><h3 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h3><ul><li><a href="./purista_aws_config_store.AWSConfigStore.html#cache">cache</a></li><li><a href="./purista_aws_config_store.AWSConfigStore.html#client">client</a></li><li><a href="./purista_aws_config_store.AWSConfigStore.html#config">config</a></li><li><a href="./purista_aws_config_store.AWSConfigStore.html#logger">logger</a></li><li><a href="./purista_aws_config_store.AWSConfigStore.html#name">name</a></li></ul><h3 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;Methods&quot;">​</a></h3><ul><li><a href="./purista_aws_config_store.AWSConfigStore.html#destroy">destroy</a></li><li><a href="./purista_aws_config_store.AWSConfigStore.html#getconfig">getConfig</a></li><li><a href="./purista_aws_config_store.AWSConfigStore.html#getconfigimpl">getConfigImpl</a></li><li><a href="./purista_aws_config_store.AWSConfigStore.html#removeconfig">removeConfig</a></li><li><a href="./purista_aws_config_store.AWSConfigStore.html#removeconfigimpl">removeConfigImpl</a></li><li><a href="./purista_aws_config_store.AWSConfigStore.html#setconfig">setConfig</a></li><li><a href="./purista_aws_config_store.AWSConfigStore.html#setconfigimpl">setConfigImpl</a></li></ul><h2 id="constructors-1" tabindex="-1">Constructors <a class="header-anchor" href="#constructors-1" aria-label="Permalink to &quot;Constructors&quot;">​</a></h2><h3 id="constructor" tabindex="-1">constructor <a class="header-anchor" href="#constructor" aria-label="Permalink to &quot;constructor&quot;">​</a></h3><p>• <strong>new AWSConfigStore</strong>(<code>config</code>): <a href="./purista_aws_config_store.AWSConfigStore.html"><code>AWSConfigStore</code></a></p><h4 id="parameters" tabindex="-1">Parameters <a class="header-anchor" href="#parameters" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>config</code></td><td style="text-align:left;"><code>Object</code></td><td style="text-align:left;">-</td></tr><tr><td style="text-align:left;"><code>config.cacheTtl?</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">Cache time to live in ms</td></tr><tr><td style="text-align:left;"><code>config.client</code></td><td style="text-align:left;"><code>SSMClientConfig</code></td><td style="text-align:left;">AWS client options</td></tr><tr><td style="text-align:left;"><code>config.enableCache?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Enable cache</td></tr><tr><td style="text-align:left;"><code>config.enableGet?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Enable generally get method</td></tr><tr><td style="text-align:left;"><code>config.enableRemove?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Enable generally remove method</td></tr><tr><td style="text-align:left;"><code>config.enableSet?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Enable generally set method</td></tr><tr><td style="text-align:left;"><code>config.logLevel?</code></td><td style="text-align:left;"><a href="./../modules/purista_core.html#loglevelname"><code>LogLevelName</code></a></td><td style="text-align:left;">A log level for new logger if logger is not set</td></tr><tr><td style="text-align:left;"><code>config.logger?</code></td><td style="text-align:left;"><a href="./purista_core.Logger.html"><code>Logger</code></a></td><td style="text-align:left;">A logger instance</td></tr></tbody></table><h4 id="returns" tabindex="-1">Returns <a class="header-anchor" href="#returns" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><a href="./purista_aws_config_store.AWSConfigStore.html"><code>AWSConfigStore</code></a></p><h4 id="overrides" tabindex="-1">Overrides <a class="header-anchor" href="#overrides" aria-label="Permalink to &quot;Overrides&quot;">​</a></h4><p><a href="./purista_core.ConfigStoreBaseClass.html">ConfigStoreBaseClass</a>.<a href="./purista_core.ConfigStoreBaseClass.html#constructor">constructor</a></p><h4 id="defined-in" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/sebastianwessel/purista/blob/master/packages/aws-config-store/src/AWSConfigStore.impl.ts#L30" target="_blank" rel="noreferrer">aws-config-store/src/AWSConfigStore.impl.ts:30</a></p><h2 id="properties-1" tabindex="-1">Properties <a class="header-anchor" href="#properties-1" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><h3 id="cache" tabindex="-1">cache <a class="header-anchor" href="#cache" aria-label="Permalink to &quot;cache&quot;">​</a></h3><p>• <strong>cache</strong>: <a href="./../modules/purista_core.html#configstorecachemap"><code>ConfigStoreCacheMap</code></a></p><h4 id="inherited-from" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./purista_core.ConfigStoreBaseClass.html">ConfigStoreBaseClass</a>.<a href="./purista_core.ConfigStoreBaseClass.html#cache">cache</a></p><h4 id="defined-in-1" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-1" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p>core/dist/commonjs/core/ConfigStore/ConfigStoreBaseClass.impl.d.ts:20</p><hr><h3 id="client" tabindex="-1">client <a class="header-anchor" href="#client" aria-label="Permalink to &quot;client&quot;">​</a></h3><p>• <strong>client</strong>: <code>SSMClient</code></p><h4 id="defined-in-2" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-2" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/sebastianwessel/purista/blob/master/packages/aws-config-store/src/AWSConfigStore.impl.ts#L28" target="_blank" rel="noreferrer">aws-config-store/src/AWSConfigStore.impl.ts:28</a></p><hr><h3 id="config" tabindex="-1">config <a class="header-anchor" href="#config" aria-label="Permalink to &quot;config&quot;">​</a></h3><p>• <strong>config</strong>: <code>Object</code></p><h4 id="type-declaration" tabindex="-1">Type declaration <a class="header-anchor" href="#type-declaration" aria-label="Permalink to &quot;Type declaration&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>cacheTtl?</code></td><td style="text-align:left;"><code>number</code></td><td style="text-align:left;">Cache time to live in ms</td></tr><tr><td style="text-align:left;"><code>client</code></td><td style="text-align:left;"><code>SSMClientConfig</code></td><td style="text-align:left;">AWS client options</td></tr><tr><td style="text-align:left;"><code>enableCache?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Enable cache</td></tr><tr><td style="text-align:left;"><code>enableGet?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Enable generally get method</td></tr><tr><td style="text-align:left;"><code>enableRemove?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Enable generally remove method</td></tr><tr><td style="text-align:left;"><code>enableSet?</code></td><td style="text-align:left;"><code>boolean</code></td><td style="text-align:left;">Enable generally set method</td></tr><tr><td style="text-align:left;"><code>logLevel?</code></td><td style="text-align:left;"><a href="./../modules/purista_core.html#loglevelname"><code>LogLevelName</code></a></td><td style="text-align:left;">A log level for new logger if logger is not set</td></tr><tr><td style="text-align:left;"><code>logger?</code></td><td style="text-align:left;"><a href="./purista_core.Logger.html"><code>Logger</code></a></td><td style="text-align:left;">A logger instance</td></tr></tbody></table><h4 id="inherited-from-1" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-1" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./purista_core.ConfigStoreBaseClass.html">ConfigStoreBaseClass</a>.<a href="./purista_core.ConfigStoreBaseClass.html#config">config</a></p><h4 id="defined-in-3" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-3" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p>core/dist/commonjs/core/ConfigStore/ConfigStoreBaseClass.impl.d.ts:18</p><hr><h3 id="logger" tabindex="-1">logger <a class="header-anchor" href="#logger" aria-label="Permalink to &quot;logger&quot;">​</a></h3><p>• <strong>logger</strong>: <a href="./purista_core.Logger.html"><code>Logger</code></a></p><h4 id="inherited-from-2" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-2" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./purista_core.ConfigStoreBaseClass.html">ConfigStoreBaseClass</a>.<a href="./purista_core.ConfigStoreBaseClass.html#logger">logger</a></p><h4 id="defined-in-4" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-4" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p>core/dist/commonjs/core/ConfigStore/ConfigStoreBaseClass.impl.d.ts:17</p><hr><h3 id="name" tabindex="-1">name <a class="header-anchor" href="#name" aria-label="Permalink to &quot;name&quot;">​</a></h3><p>• <strong>name</strong>: <code>string</code></p><h4 id="inherited-from-3" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-3" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./purista_core.ConfigStoreBaseClass.html">ConfigStoreBaseClass</a>.<a href="./purista_core.ConfigStoreBaseClass.html#name">name</a></p><h4 id="defined-in-5" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-5" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p>core/dist/commonjs/core/ConfigStore/ConfigStoreBaseClass.impl.d.ts:19</p><h2 id="methods-1" tabindex="-1">Methods <a class="header-anchor" href="#methods-1" aria-label="Permalink to &quot;Methods&quot;">​</a></h2><h3 id="destroy" tabindex="-1">destroy <a class="header-anchor" href="#destroy" aria-label="Permalink to &quot;destroy&quot;">​</a></h3><p>▸ <strong>destroy</strong>(): <code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="returns-1" tabindex="-1">Returns <a class="header-anchor" href="#returns-1" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="inherited-from-4" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-4" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./purista_core.ConfigStoreBaseClass.html">ConfigStoreBaseClass</a>.<a href="./purista_core.ConfigStoreBaseClass.html#destroy">destroy</a></p><h4 id="defined-in-6" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-6" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p>core/dist/commonjs/core/ConfigStore/ConfigStoreBaseClass.impl.d.ts:70</p><hr><h3 id="getconfig" tabindex="-1">getConfig <a class="header-anchor" href="#getconfig" aria-label="Permalink to &quot;getConfig&quot;">​</a></h3><p>▸ <strong>getConfig</strong>&lt;<code>ConfigNames</code>&gt;(<code>...configNames</code>): <code>Promise</code>&lt;<a href="./../modules/purista_core.html#objectwithkeysfromstringarray"><code>ObjectWithKeysFromStringArray</code></a>&lt;<code>ConfigNames</code>&gt;&gt;</p><p>Returns the values for given config properties. This function <strong>SHOULD NOT</strong> be overwritten by store implementation. For implementation overwrite protected <code>getConfigImpl</code></p><h4 id="type-parameters" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>ConfigNames</code></td><td style="text-align:left;">extends <code>string</code>[]</td></tr></tbody></table><h4 id="parameters-1" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-1" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>...configNames</code></td><td style="text-align:left;"><code>ConfigNames</code></td></tr></tbody></table><h4 id="returns-2" tabindex="-1">Returns <a class="header-anchor" href="#returns-2" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<a href="./../modules/purista_core.html#objectwithkeysfromstringarray"><code>ObjectWithKeysFromStringArray</code></a>&lt;<code>ConfigNames</code>&gt;&gt;</p>',81),l=t("p",{"[configName]:":"",value:"","|":"",undefined:""},"an object of",-1),s=e('<h4 id="inherited-from-5" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-5" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./purista_core.ConfigStoreBaseClass.html">ConfigStoreBaseClass</a>.<a href="./purista_core.ConfigStoreBaseClass.html#getconfig">getConfig</a></p><h4 id="defined-in-7" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-7" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p>core/dist/commonjs/core/ConfigStore/ConfigStoreBaseClass.impl.d.ts:37</p><hr><h3 id="getconfigimpl" tabindex="-1">getConfigImpl <a class="header-anchor" href="#getconfigimpl" aria-label="Permalink to &quot;getConfigImpl&quot;">​</a></h3><p>▸ <strong>getConfigImpl</strong>&lt;<code>ConfigNames</code>&gt;(<code>...configNames</code>): <code>Promise</code>&lt;<a href="./../modules/purista_core.html#objectwithkeysfromstringarray"><code>ObjectWithKeysFromStringArray</code></a>&lt;<code>ConfigNames</code>&gt;&gt;</p><p>This method must be overwritten by actual store implementation.</p><h4 id="type-parameters-1" tabindex="-1">Type parameters <a class="header-anchor" href="#type-parameters-1" aria-label="Permalink to &quot;Type parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>ConfigNames</code></td><td style="text-align:left;">extends <code>string</code>[]</td></tr></tbody></table><h4 id="parameters-2" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-2" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;"><code>...configNames</code></td><td style="text-align:left;"><code>ConfigNames</code></td><td style="text-align:left;">list of config items</td></tr></tbody></table><h4 id="returns-3" tabindex="-1">Returns <a class="header-anchor" href="#returns-3" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<a href="./../modules/purista_core.html#objectwithkeysfromstringarray"><code>ObjectWithKeysFromStringArray</code></a>&lt;<code>ConfigNames</code>&gt;&gt;</p>',14),d=t("p",{"[configName]:":"",value:"","|":"",undefined:""},"an object of",-1),c=e('<h4 id="overrides-1" tabindex="-1">Overrides <a class="header-anchor" href="#overrides-1" aria-label="Permalink to &quot;Overrides&quot;">​</a></h4><p><a href="./purista_core.ConfigStoreBaseClass.html">ConfigStoreBaseClass</a>.<a href="./purista_core.ConfigStoreBaseClass.html#getconfigimpl">getConfigImpl</a></p><h4 id="defined-in-8" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-8" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/sebastianwessel/purista/blob/master/packages/aws-config-store/src/AWSConfigStore.impl.ts#L35" target="_blank" rel="noreferrer">aws-config-store/src/AWSConfigStore.impl.ts:35</a></p><hr><h3 id="removeconfig" tabindex="-1">removeConfig <a class="header-anchor" href="#removeconfig" aria-label="Permalink to &quot;removeConfig&quot;">​</a></h3><p>▸ <strong>removeConfig</strong>(<code>configName</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><p>Removes the config item given by config name. This function <strong>SHOULD NOT</strong> be overwritten by store implementation. For implementation overwrite protected <code>removeConfigImpl</code></p><h4 id="parameters-3" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-3" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>configName</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-4" tabindex="-1">Returns <a class="header-anchor" href="#returns-4" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="inherited-from-6" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-6" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./purista_core.ConfigStoreBaseClass.html">ConfigStoreBaseClass</a>.<a href="./purista_core.ConfigStoreBaseClass.html#removeconfig">removeConfig</a></p><h4 id="defined-in-9" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-9" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p>core/dist/commonjs/core/ConfigStore/ConfigStoreBaseClass.impl.d.ts:52</p><hr><h3 id="removeconfigimpl" tabindex="-1">removeConfigImpl <a class="header-anchor" href="#removeconfigimpl" aria-label="Permalink to &quot;removeConfigImpl&quot;">​</a></h3><p>▸ <strong>removeConfigImpl</strong>(<code>configName</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><p>This method must be overwritten by actual store implementation.</p><h4 id="parameters-4" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-4" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>configName</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-5" tabindex="-1">Returns <a class="header-anchor" href="#returns-5" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="overrides-2" tabindex="-1">Overrides <a class="header-anchor" href="#overrides-2" aria-label="Permalink to &quot;Overrides&quot;">​</a></h4><p><a href="./purista_core.ConfigStoreBaseClass.html">ConfigStoreBaseClass</a>.<a href="./purista_core.ConfigStoreBaseClass.html#removeconfigimpl">removeConfigImpl</a></p><h4 id="defined-in-10" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-10" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/sebastianwessel/purista/blob/master/packages/aws-config-store/src/AWSConfigStore.impl.ts#L58" target="_blank" rel="noreferrer">aws-config-store/src/AWSConfigStore.impl.ts:58</a></p><hr><h3 id="setconfig" tabindex="-1">setConfig <a class="header-anchor" href="#setconfig" aria-label="Permalink to &quot;setConfig&quot;">​</a></h3><p>▸ <strong>setConfig</strong>(<code>configName</code>, <code>configValue</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><p>Sets a config value This function <strong>SHOULD NOT</strong> be overwritten by store implementation. For implementation overwrite protected <code>setConfigImpl</code></p><h4 id="parameters-5" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-5" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>configName</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>configValue</code></td><td style="text-align:left;"><code>unknown</code></td></tr></tbody></table><h4 id="returns-6" tabindex="-1">Returns <a class="header-anchor" href="#returns-6" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="inherited-from-7" tabindex="-1">Inherited from <a class="header-anchor" href="#inherited-from-7" aria-label="Permalink to &quot;Inherited from&quot;">​</a></h4><p><a href="./purista_core.ConfigStoreBaseClass.html">ConfigStoreBaseClass</a>.<a href="./purista_core.ConfigStoreBaseClass.html#setconfig">setConfig</a></p><h4 id="defined-in-11" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-11" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p>core/dist/commonjs/core/ConfigStore/ConfigStoreBaseClass.impl.d.ts:69</p><hr><h3 id="setconfigimpl" tabindex="-1">setConfigImpl <a class="header-anchor" href="#setconfigimpl" aria-label="Permalink to &quot;setConfigImpl&quot;">​</a></h3><p>▸ <strong>setConfigImpl</strong>(<code>configName</code>, <code>configValue</code>): <code>Promise</code>&lt;<code>void</code>&gt;</p><p>This method must be overwritten by actual store implementation.</p><h4 id="parameters-6" tabindex="-1">Parameters <a class="header-anchor" href="#parameters-6" aria-label="Permalink to &quot;Parameters&quot;">​</a></h4><table><thead><tr><th style="text-align:left;">Name</th><th style="text-align:left;">Type</th></tr></thead><tbody><tr><td style="text-align:left;"><code>configName</code></td><td style="text-align:left;"><code>string</code></td></tr><tr><td style="text-align:left;"><code>configValue</code></td><td style="text-align:left;"><code>string</code></td></tr></tbody></table><h4 id="returns-7" tabindex="-1">Returns <a class="header-anchor" href="#returns-7" aria-label="Permalink to &quot;Returns&quot;">​</a></h4><p><code>Promise</code>&lt;<code>void</code>&gt;</p><h4 id="overrides-3" tabindex="-1">Overrides <a class="header-anchor" href="#overrides-3" aria-label="Permalink to &quot;Overrides&quot;">​</a></h4><p><a href="./purista_core.ConfigStoreBaseClass.html">ConfigStoreBaseClass</a>.<a href="./purista_core.ConfigStoreBaseClass.html#setconfigimpl">setConfigImpl</a></p><h4 id="defined-in-12" tabindex="-1">Defined in <a class="header-anchor" href="#defined-in-12" aria-label="Permalink to &quot;Defined in&quot;">​</a></h4><p><a href="https://github.com/sebastianwessel/purista/blob/master/packages/aws-config-store/src/AWSConfigStore.impl.ts#L66" target="_blank" rel="noreferrer">aws-config-store/src/AWSConfigStore.impl.ts:66</a></p>',52),h=[n,l,s,d,c];function f(g,m,p,u,b,C){return r(),o("div",null,h)}const S=a(i,[["render",f]]);export{x as __pageData,S as default};
