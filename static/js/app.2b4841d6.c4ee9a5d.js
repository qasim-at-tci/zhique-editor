(self.webpackChunk=self.webpackChunk||[]).push([[453],{94470:e=>{"use strict";var t=Object.prototype.hasOwnProperty,n=Object.prototype.toString,r=Object.defineProperty,i=Object.getOwnPropertyDescriptor,a=function(e){return"function"==typeof Array.isArray?Array.isArray(e):"[object Array]"===n.call(e)},o=function(e){if(!e||"[object Object]"!==n.call(e))return!1;var r,i=t.call(e,"constructor"),a=e.constructor&&e.constructor.prototype&&t.call(e.constructor.prototype,"isPrototypeOf");if(e.constructor&&!i&&!a)return!1;for(r in e);return void 0===r||t.call(e,r)},s=function(e,t){r&&"__proto__"===t.name?r(e,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):e[t.name]=t.newValue},l=function(e,n){if("__proto__"===n){if(!t.call(e,n))return;if(i)return i(e,n).value}return e[n]};e.exports=function e(){var t,n,r,i,c,u,g=arguments[0],h=1,d=arguments.length,f=!1;for("boolean"==typeof g&&(f=g,g=arguments[1]||{},h=2),(null==g||"object"!=typeof g&&"function"!=typeof g)&&(g={});h<d;++h)if(null!=(t=arguments[h]))for(n in t)r=l(g,n),g!==(i=l(t,n))&&(f&&i&&(o(i)||(c=a(i)))?(c?(c=!1,u=r&&a(r)?r:[]):u=r&&o(r)?r:{},s(g,{name:n,newValue:e(f,u,i)})):void 0!==i&&s(g,{name:n,newValue:i}));return g}},21102:(e,t,n)=>{"use strict";var r=n(46291),i=a(Error);function a(e){return t.displayName=e.displayName||e.name,t;function t(t){return t&&(t=r.apply(null,arguments)),new e(t)}}e.exports=i,i.eval=a(EvalError),i.range=a(RangeError),i.reference=a(ReferenceError),i.syntax=a(SyntaxError),i.type=a(TypeError),i.uri=a(URIError),i.create=a},46291:e=>{!function(){var t;function n(e){for(var t,n,r,i,a=1,o=[].slice.call(arguments),s=0,l=e.length,c="",u=!1,g=!1,h=function(){return o[a++]},d=function(){for(var n="";/\d/.test(e[s]);)n+=e[s++],t=e[s];return n.length>0?parseInt(n):null};s<l;++s)if(t=e[s],u)switch(u=!1,"."==t?(g=!1,t=e[++s]):"0"==t&&"."==e[s+1]?(g=!0,t=e[s+=2]):g=!0,i=d(),t){case"b":c+=parseInt(h(),10).toString(2);break;case"c":c+="string"==typeof(n=h())||n instanceof String?n:String.fromCharCode(parseInt(n,10));break;case"d":c+=parseInt(h(),10);break;case"f":r=String(parseFloat(h()).toFixed(i||6)),c+=g?r:r.replace(/^0/,"");break;case"j":c+=JSON.stringify(h());break;case"o":c+="0"+parseInt(h(),10).toString(8);break;case"s":c+=h();break;case"x":c+="0x"+parseInt(h(),10).toString(16);break;case"X":c+="0x"+parseInt(h(),10).toString(16).toUpperCase();break;default:c+=t}else"%"===t?u=!0:c+=t;return c}(t=e.exports=n).format=n,t.vsprintf=function(e,t){return n.apply(null,[e].concat(t))},"undefined"!=typeof console&&"function"==typeof console.log&&(t.printf=function(){console.log(n.apply(null,arguments))})}()},78892:e=>{"use strict";e.exports=function(e,n){for(var r,i,a,o=e||"",s=n||"div",l={},c=0;c<o.length;)t.lastIndex=c,a=t.exec(o),(r=o.slice(c,a?a.index:o.length))&&(i?"#"===i?l.id=r:l.className?l.className.push(r):l.className=[r]:s=r,c+=r.length),a&&(i=a[0],c++);return{type:"element",tagName:s,properties:l,children:[]}};var t=/[#.]/g},62502:(e,t,n)=>{"use strict";var r=n(99560),i=n(66632),a=n(78892),o=n(36582).Q,s=n(56851).Q;e.exports=function(e,t,n){var i=n?function(e){for(var t,n=e.length,r=-1,i={};++r<n;)i[(t=e[r]).toLowerCase()]=t;return i}(n):null;return function(e,n){var r,o=a(e,t),s=Array.prototype.slice.call(arguments,2),g=o.tagName.toLowerCase();if(o.tagName=i&&l.call(i,g)?i[g]:g,n&&c(n,o)&&(s.unshift(n),n=null),n)for(r in n)h(o.properties,r,n[r]);return u(o.children,s),"template"===o.tagName&&(o.content={type:"root",children:o.children},o.children=[]),o};function h(t,n,i){var a,l,c;null!=i&&i==i&&(l=(a=r(e,n)).property,"string"==typeof(c=i)&&(a.spaceSeparated?c=o(c):a.commaSeparated?c=s(c):a.commaOrSpaceSeparated&&(c=o(s(c).join(" ")))),"style"===l&&"string"!=typeof i&&(c=function(e){var t,n=[];for(t in e)n.push([t,e[t]].join(": "));return n.join("; ")}(c)),"className"===l&&t.className&&(c=t.className.concat(c)),t[l]=function(e,t,n){var r,i,a;if("object"!=typeof n||!("length"in n))return g(e,t,n);for(i=n.length,r=-1,a=[];++r<i;)a[r]=g(e,t,n[r]);return a}(a,l,c))}};var l={}.hasOwnProperty;function c(e,t){return"string"==typeof e||"length"in e||function(e,t){var n=t.type;return!("input"===e||!n||"string"!=typeof n)&&("object"==typeof t.children&&"length"in t.children||(n=n.toLowerCase(),"button"===e?"menu"!==n&&"submit"!==n&&"reset"!==n&&"button"!==n:"value"in t))}(t.tagName,e)}function u(e,t){var n,r;if("string"!=typeof t&&"number"!=typeof t)if("object"==typeof t&&"length"in t)for(n=-1,r=t.length;++n<r;)u(e,t[n]);else{if("object"!=typeof t||!("type"in t))throw new Error("Expected node, nodes, or string, got `"+t+"`");e.push(t)}else e.push({type:"text",value:String(t)})}function g(e,t,n){var r=n;return e.number||e.positiveNumber?isNaN(r)||""===r||(r=Number(r)):(e.boolean||e.overloadedBoolean)&&("string"!=typeof r||""!==r&&i(n)!==i(t)||(r=!0)),r}},52579:(e,t,n)=>{"use strict";var r=n(97247),i=n(62502)(r,"div");i.displayName="html",e.exports=i},31742:(e,t,n)=>{"use strict";e.exports=n(52579)},47802:e=>{function t(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach((function(n){var r=e[n];"object"!=typeof r||Object.isFrozen(r)||t(r)})),e}var n=t,r=t;n.default=r;class i{constructor(e){void 0===e.data&&(e.data={}),this.data=e.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function a(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function o(e,...t){const n=Object.create(null);for(const t in e)n[t]=e[t];return t.forEach((function(e){for(const t in e)n[t]=e[t]})),n}const s=e=>!!e.kind;class l{constructor(e,t){this.buffer="",this.classPrefix=t.classPrefix,e.walk(this)}addText(e){this.buffer+=a(e)}openNode(e){if(!s(e))return;let t=e.kind;e.sublanguage||(t=`${this.classPrefix}${t}`),this.span(t)}closeNode(e){s(e)&&(this.buffer+="</span>")}value(){return this.buffer}span(e){this.buffer+=`<span class="${e}">`}}class c{constructor(){this.rootNode={children:[]},this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(e){this.top.children.push(e)}openNode(e){const t={kind:e,children:[]};this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(e){return this.constructor._walk(e,this.rootNode)}static _walk(e,t){return"string"==typeof t?e.addText(t):t.children&&(e.openNode(t),t.children.forEach((t=>this._walk(e,t))),e.closeNode(t)),e}static _collapse(e){"string"!=typeof e&&e.children&&(e.children.every((e=>"string"==typeof e))?e.children=[e.children.join("")]:e.children.forEach((e=>{c._collapse(e)})))}}class u extends c{constructor(e){super(),this.options=e}addKeyword(e,t){""!==e&&(this.openNode(t),this.addText(e),this.closeNode())}addText(e){""!==e&&this.add(e)}addSublanguage(e,t){const n=e.root;n.kind=t,n.sublanguage=!0,this.add(n)}toHTML(){return new l(this,this.options).value()}finalize(){return!0}}function g(e){return e?"string"==typeof e?e:e.source:null}const h=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,d="[a-zA-Z]\\w*",f="[a-zA-Z_]\\w*",p="\\b\\d+(\\.\\d+)?",m="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",b="\\b(0b[01]+)",y={begin:"\\\\[\\s\\S]",relevance:0},x={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[y]},v={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[y]},E={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},w=function(e,t,n={}){const r=o({className:"comment",begin:e,end:t,contains:[]},n);return r.contains.push(E),r.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):",relevance:0}),r},N=w("//","$"),_=w("/\\*","\\*/"),R=w("#","$"),k={className:"number",begin:p,relevance:0},O={className:"number",begin:m,relevance:0},j={className:"number",begin:b,relevance:0},M={className:"number",begin:p+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},A={begin:/(?=\/[^/\n]*\/)/,contains:[{className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[y,{begin:/\[/,end:/\]/,relevance:0,contains:[y]}]}]},I={className:"title",begin:d,relevance:0},S={className:"title",begin:f,relevance:0};var L=Object.freeze({__proto__:null,MATCH_NOTHING_RE:/\b\B/,IDENT_RE:d,UNDERSCORE_IDENT_RE:f,NUMBER_RE:p,C_NUMBER_RE:m,BINARY_NUMBER_RE:b,RE_STARTERS_RE:"!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",SHEBANG:(e={})=>{const t=/^#![ ]*\//;return e.binary&&(e.begin=function(...e){return e.map((e=>g(e))).join("")}(t,/.*\b/,e.binary,/\b.*/)),o({className:"meta",begin:t,end:/$/,relevance:0,"on:begin":(e,t)=>{0!==e.index&&t.ignoreMatch()}},e)},BACKSLASH_ESCAPE:y,APOS_STRING_MODE:x,QUOTE_STRING_MODE:v,PHRASAL_WORDS_MODE:E,COMMENT:w,C_LINE_COMMENT_MODE:N,C_BLOCK_COMMENT_MODE:_,HASH_COMMENT_MODE:R,NUMBER_MODE:k,C_NUMBER_MODE:O,BINARY_NUMBER_MODE:j,CSS_NUMBER_MODE:M,REGEXP_MODE:A,TITLE_MODE:I,UNDERSCORE_TITLE_MODE:S,METHOD_GUARD:{begin:"\\.\\s*[a-zA-Z_]\\w*",relevance:0},END_SAME_AS_BEGIN:function(e){return Object.assign(e,{"on:begin":(e,t)=>{t.data._beginMatch=e[1]},"on:end":(e,t)=>{t.data._beginMatch!==e[1]&&t.ignoreMatch()}})}});function B(e,t){"."===e.input[e.index-1]&&t.ignoreMatch()}function P(e,t){t&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=B,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,void 0===e.relevance&&(e.relevance=0))}function T(e,t){Array.isArray(e.illegal)&&(e.illegal=function(...e){return"("+e.map((e=>g(e))).join("|")+")"}(...e.illegal))}function C(e,t){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function D(e,t){void 0===e.relevance&&(e.relevance=1)}const H=["of","and","for","in","not","or","if","then","parent","list","value"];function $(e,t,n="keyword"){const r={};return"string"==typeof e?i(n,e.split(" ")):Array.isArray(e)?i(n,e):Object.keys(e).forEach((function(n){Object.assign(r,$(e[n],t,n))})),r;function i(e,n){t&&(n=n.map((e=>e.toLowerCase()))),n.forEach((function(t){const n=t.split("|");r[n[0]]=[e,U(n[0],n[1])]}))}}function U(e,t){return t?Number(t):function(e){return H.includes(e.toLowerCase())}(e)?0:1}function z(e,{plugins:t}){function n(t,n){return new RegExp(g(t),"m"+(e.case_insensitive?"i":"")+(n?"g":""))}class r{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(e,t){t.position=this.position++,this.matchIndexes[this.matchAt]=t,this.regexes.push([t,e]),this.matchAt+=function(e){return new RegExp(e.toString()+"|").exec("").length-1}(e)+1}compile(){0===this.regexes.length&&(this.exec=()=>null);const e=this.regexes.map((e=>e[1]));this.matcherRe=n(function(e,t="|"){let n=0;return e.map((e=>{n+=1;const t=n;let r=g(e),i="";for(;r.length>0;){const e=h.exec(r);if(!e){i+=r;break}i+=r.substring(0,e.index),r=r.substring(e.index+e[0].length),"\\"===e[0][0]&&e[1]?i+="\\"+String(Number(e[1])+t):(i+=e[0],"("===e[0]&&n++)}return i})).map((e=>`(${e})`)).join(t)}(e),!0),this.lastIndex=0}exec(e){this.matcherRe.lastIndex=this.lastIndex;const t=this.matcherRe.exec(e);if(!t)return null;const n=t.findIndex(((e,t)=>t>0&&void 0!==e)),r=this.matchIndexes[n];return t.splice(0,n),Object.assign(t,r)}}class i{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(e){if(this.multiRegexes[e])return this.multiRegexes[e];const t=new r;return this.rules.slice(e).forEach((([e,n])=>t.addRule(e,n))),t.compile(),this.multiRegexes[e]=t,t}resumingScanAtSamePosition(){return 0!==this.regexIndex}considerAll(){this.regexIndex=0}addRule(e,t){this.rules.push([e,t]),"begin"===t.type&&this.count++}exec(e){const t=this.getMatcher(this.regexIndex);t.lastIndex=this.lastIndex;let n=t.exec(e);if(this.resumingScanAtSamePosition())if(n&&n.index===this.lastIndex);else{const t=this.getMatcher(0);t.lastIndex=this.lastIndex+1,n=t.exec(e)}return n&&(this.regexIndex+=n.position+1,this.regexIndex===this.count&&this.considerAll()),n}}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=o(e.classNameAliases||{}),function t(r,a){const s=r;if(r.isCompiled)return s;[C].forEach((e=>e(r,a))),e.compilerExtensions.forEach((e=>e(r,a))),r.__beforeBegin=null,[P,T,D].forEach((e=>e(r,a))),r.isCompiled=!0;let l=null;if("object"==typeof r.keywords&&(l=r.keywords.$pattern,delete r.keywords.$pattern),r.keywords&&(r.keywords=$(r.keywords,e.case_insensitive)),r.lexemes&&l)throw new Error("ERR: Prefer `keywords.$pattern` to `mode.lexemes`, BOTH are not allowed. (see mode reference) ");return l=l||r.lexemes||/\w+/,s.keywordPatternRe=n(l,!0),a&&(r.begin||(r.begin=/\B|\b/),s.beginRe=n(r.begin),r.endSameAsBegin&&(r.end=r.begin),r.end||r.endsWithParent||(r.end=/\B|\b/),r.end&&(s.endRe=n(r.end)),s.terminatorEnd=g(r.end)||"",r.endsWithParent&&a.terminatorEnd&&(s.terminatorEnd+=(r.end?"|":"")+a.terminatorEnd)),r.illegal&&(s.illegalRe=n(r.illegal)),r.contains||(r.contains=[]),r.contains=[].concat(...r.contains.map((function(e){return function(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map((function(t){return o(e,{variants:null},t)}))),e.cachedVariants?e.cachedVariants:V(e)?o(e,{starts:e.starts?o(e.starts):null}):Object.isFrozen(e)?o(e):e}("self"===e?r:e)}))),r.contains.forEach((function(e){t(e,s)})),r.starts&&t(r.starts,a),s.matcher=function(e){const t=new i;return e.contains.forEach((e=>t.addRule(e.begin,{rule:e,type:"begin"}))),e.terminatorEnd&&t.addRule(e.terminatorEnd,{type:"end"}),e.illegal&&t.addRule(e.illegal,{type:"illegal"}),t}(s),s}(e)}function V(e){return!!e&&(e.endsWithParent||V(e.starts))}function K(e){const t={props:["language","code","autodetect"],data:function(){return{detectedLanguage:"",unknownLanguage:!1}},computed:{className(){return this.unknownLanguage?"":"hljs "+this.detectedLanguage},highlighted(){if(!this.autoDetect&&!e.getLanguage(this.language))return console.warn(`The language "${this.language}" you specified could not be found.`),this.unknownLanguage=!0,a(this.code);let t={};return this.autoDetect?(t=e.highlightAuto(this.code),this.detectedLanguage=t.language):(t=e.highlight(this.language,this.code,this.ignoreIllegals),this.detectedLanguage=this.language),t.value},autoDetect(){return!this.language||(e=this.autodetect,Boolean(e||""===e));var e},ignoreIllegals:()=>!0},render(e){return e("pre",{},[e("code",{class:this.className,domProps:{innerHTML:this.highlighted}})])}};return{Component:t,VuePlugin:{install(e){e.component("highlightjs",t)}}}}const G={"after:highlightElement":({el:e,result:t,text:n})=>{const r=W(e);if(!r.length)return;const i=document.createElement("div");i.innerHTML=t.value,t.value=function(e,t,n){let r=0,i="";const o=[];function s(){return e.length&&t.length?e[0].offset!==t[0].offset?e[0].offset<t[0].offset?e:t:"start"===t[0].event?e:t:e.length?e:t}function l(e){i+="<"+F(e)+[].map.call(e.attributes,(function(e){return" "+e.nodeName+'="'+a(e.value)+'"'})).join("")+">"}function c(e){i+="</"+F(e)+">"}function u(e){("start"===e.event?l:c)(e.node)}for(;e.length||t.length;){let t=s();if(i+=a(n.substring(r,t[0].offset)),r=t[0].offset,t===e){o.reverse().forEach(c);do{u(t.splice(0,1)[0]),t=s()}while(t===e&&t.length&&t[0].offset===r);o.reverse().forEach(l)}else"start"===t[0].event?o.push(t[0].node):o.pop(),u(t.splice(0,1)[0])}return i+a(n.substr(r))}(r,W(i),n)}};function F(e){return e.nodeName.toLowerCase()}function W(e){const t=[];return function e(n,r){for(let i=n.firstChild;i;i=i.nextSibling)3===i.nodeType?r+=i.nodeValue.length:1===i.nodeType&&(t.push({event:"start",offset:r,node:i}),r=e(i,r),F(i).match(/br|hr|img|input/)||t.push({event:"stop",offset:r,node:i}));return r}(e,0),t}const X={},q=e=>{console.error(e)},Z=(e,...t)=>{console.log(`WARN: ${e}`,...t)},J=(e,t)=>{X[`${e}/${t}`]||(console.log(`Deprecated as of ${e}. ${t}`),X[`${e}/${t}`]=!0)},Q=a,Y=o,ee=Symbol("nomatch");var te=function(e){const t=Object.create(null),r=Object.create(null),a=[];let o=!0;const s=/(^(<[^>]+>|\t|)+|\n)/gm,l="Could not find the language '{}', did you forget to load/include a language module?",c={disableAutodetect:!0,name:"Plain text",contains:[]};let g={noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:null,__emitter:u};function h(e){return g.noHighlightRe.test(e)}function d(e,t,n,r){let i="",a="";"object"==typeof t?(i=e,n=t.ignoreIllegals,a=t.language,r=void 0):(J("10.7.0","highlight(lang, code, ...args) has been deprecated."),J("10.7.0","Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277"),a=e,i=t);const o={code:i,language:a};k("before:highlight",o);const s=o.result?o.result:f(o.language,o.code,n,r);return s.code=o.code,k("after:highlight",s),s}function f(e,n,r,s){function c(e,t){const n=v.case_insensitive?t[0].toLowerCase():t[0];return Object.prototype.hasOwnProperty.call(e.keywords,n)&&e.keywords[n]}function u(){null!=_.subLanguage?function(){if(""===O)return;let e=null;if("string"==typeof _.subLanguage){if(!t[_.subLanguage])return void k.addText(O);e=f(_.subLanguage,O,!0,R[_.subLanguage]),R[_.subLanguage]=e.top}else e=p(O,_.subLanguage.length?_.subLanguage:null);_.relevance>0&&(j+=e.relevance),k.addSublanguage(e.emitter,e.language)}():function(){if(!_.keywords)return void k.addText(O);let e=0;_.keywordPatternRe.lastIndex=0;let t=_.keywordPatternRe.exec(O),n="";for(;t;){n+=O.substring(e,t.index);const r=c(_,t);if(r){const[e,i]=r;if(k.addText(n),n="",j+=i,e.startsWith("_"))n+=t[0];else{const n=v.classNameAliases[e]||e;k.addKeyword(t[0],n)}}else n+=t[0];e=_.keywordPatternRe.lastIndex,t=_.keywordPatternRe.exec(O)}n+=O.substr(e),k.addText(n)}(),O=""}function h(e){return e.className&&k.openNode(v.classNameAliases[e.className]||e.className),_=Object.create(e,{parent:{value:_}}),_}function d(e,t,n){let r=function(e,t){const n=e&&e.exec(t);return n&&0===n.index}(e.endRe,n);if(r){if(e["on:end"]){const n=new i(e);e["on:end"](t,n),n.isMatchIgnored&&(r=!1)}if(r){for(;e.endsParent&&e.parent;)e=e.parent;return e}}if(e.endsWithParent)return d(e.parent,t,n)}function m(e){return 0===_.matcher.regexIndex?(O+=e[0],1):(I=!0,0)}function b(e){const t=e[0],r=n.substr(e.index),i=d(_,e,r);if(!i)return ee;const a=_;a.skip?O+=t:(a.returnEnd||a.excludeEnd||(O+=t),u(),a.excludeEnd&&(O=t));do{_.className&&k.closeNode(),_.skip||_.subLanguage||(j+=_.relevance),_=_.parent}while(_!==i.parent);return i.starts&&(i.endSameAsBegin&&(i.starts.endRe=i.endRe),h(i.starts)),a.returnEnd?0:t.length}let y={};function x(t,a){const s=a&&a[0];if(O+=t,null==s)return u(),0;if("begin"===y.type&&"end"===a.type&&y.index===a.index&&""===s){if(O+=n.slice(a.index,a.index+1),!o){const t=new Error("0 width match regex");throw t.languageName=e,t.badRule=y.rule,t}return 1}if(y=a,"begin"===a.type)return function(e){const t=e[0],n=e.rule,r=new i(n),a=[n.__beforeBegin,n["on:begin"]];for(const n of a)if(n&&(n(e,r),r.isMatchIgnored))return m(t);return n&&n.endSameAsBegin&&(n.endRe=new RegExp(t.replace(/[-/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")),n.skip?O+=t:(n.excludeBegin&&(O+=t),u(),n.returnBegin||n.excludeBegin||(O=t)),h(n),n.returnBegin?0:t.length}(a);if("illegal"===a.type&&!r){const e=new Error('Illegal lexeme "'+s+'" for mode "'+(_.className||"<unnamed>")+'"');throw e.mode=_,e}if("end"===a.type){const e=b(a);if(e!==ee)return e}if("illegal"===a.type&&""===s)return 1;if(A>1e5&&A>3*a.index)throw new Error("potential infinite loop, way more iterations than matches");return O+=s,s.length}const v=N(e);if(!v)throw q(l.replace("{}",e)),new Error('Unknown language: "'+e+'"');const E=z(v,{plugins:a});let w="",_=s||E;const R={},k=new g.__emitter(g);!function(){const e=[];for(let t=_;t!==v;t=t.parent)t.className&&e.unshift(t.className);e.forEach((e=>k.openNode(e)))}();let O="",j=0,M=0,A=0,I=!1;try{for(_.matcher.considerAll();;){A++,I?I=!1:_.matcher.considerAll(),_.matcher.lastIndex=M;const e=_.matcher.exec(n);if(!e)break;const t=x(n.substring(M,e.index),e);M=e.index+t}return x(n.substr(M)),k.closeAllNodes(),k.finalize(),w=k.toHTML(),{relevance:Math.floor(j),value:w,language:e,illegal:!1,emitter:k,top:_}}catch(t){if(t.message&&t.message.includes("Illegal"))return{illegal:!0,illegalBy:{msg:t.message,context:n.slice(M-100,M+100),mode:t.mode},sofar:w,relevance:0,value:Q(n),emitter:k};if(o)return{illegal:!1,relevance:0,value:Q(n),emitter:k,language:e,top:_,errorRaised:t};throw t}}function p(e,n){n=n||g.languages||Object.keys(t);const r=function(e){const t={relevance:0,emitter:new g.__emitter(g),value:Q(e),illegal:!1,top:c};return t.emitter.addText(e),t}(e),i=n.filter(N).filter(R).map((t=>f(t,e,!1)));i.unshift(r);const a=i.sort(((e,t)=>{if(e.relevance!==t.relevance)return t.relevance-e.relevance;if(e.language&&t.language){if(N(e.language).supersetOf===t.language)return 1;if(N(t.language).supersetOf===e.language)return-1}return 0})),[o,s]=a,l=o;return l.second_best=s,l}const m={"before:highlightElement":({el:e})=>{g.useBR&&(e.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ /]*>/g,"\n"))},"after:highlightElement":({result:e})=>{g.useBR&&(e.value=e.value.replace(/\n/g,"<br>"))}},b=/^(<[^>]+>|\t)+/gm,y={"after:highlightElement":({result:e})=>{g.tabReplace&&(e.value=e.value.replace(b,(e=>e.replace(/\t/g,g.tabReplace))))}};function x(e){let t=null;const n=function(e){let t=e.className+" ";t+=e.parentNode?e.parentNode.className:"";const n=g.languageDetectRe.exec(t);if(n){const t=N(n[1]);return t||(Z(l.replace("{}",n[1])),Z("Falling back to no-highlight mode for this block.",e)),t?n[1]:"no-highlight"}return t.split(/\s+/).find((e=>h(e)||N(e)))}(e);if(h(n))return;k("before:highlightElement",{el:e,language:n}),t=e;const i=t.textContent,a=n?d(i,{language:n,ignoreIllegals:!0}):p(i);k("after:highlightElement",{el:e,result:a,text:i}),e.innerHTML=a.value,function(e,t,n){const i=t?r[t]:n;e.classList.add("hljs"),i&&e.classList.add(i)}(e,n,a.language),e.result={language:a.language,re:a.relevance,relavance:a.relevance},a.second_best&&(e.second_best={language:a.second_best.language,re:a.second_best.relevance,relavance:a.second_best.relevance})}const v=()=>{v.called||(v.called=!0,J("10.6.0","initHighlighting() is deprecated.  Use highlightAll() instead."),document.querySelectorAll("pre code").forEach(x))};let E=!1;function w(){"loading"!==document.readyState?document.querySelectorAll("pre code").forEach(x):E=!0}function N(e){return e=(e||"").toLowerCase(),t[e]||t[r[e]]}function _(e,{languageName:t}){"string"==typeof e&&(e=[e]),e.forEach((e=>{r[e.toLowerCase()]=t}))}function R(e){const t=N(e);return t&&!t.disableAutodetect}function k(e,t){const n=e;a.forEach((function(e){e[n]&&e[n](t)}))}"undefined"!=typeof window&&window.addEventListener&&window.addEventListener("DOMContentLoaded",(function(){E&&w()}),!1),Object.assign(e,{highlight:d,highlightAuto:p,highlightAll:w,fixMarkup:function(e){return J("10.2.0","fixMarkup will be removed entirely in v11.0"),J("10.2.0","Please see https://github.com/highlightjs/highlight.js/issues/2534"),t=e,g.tabReplace||g.useBR?t.replace(s,(e=>"\n"===e?g.useBR?"<br>":e:g.tabReplace?e.replace(/\t/g,g.tabReplace):e)):t;var t},highlightElement:x,highlightBlock:function(e){return J("10.7.0","highlightBlock will be removed entirely in v12.0"),J("10.7.0","Please use highlightElement now."),x(e)},configure:function(e){e.useBR&&(J("10.3.0","'useBR' will be removed entirely in v11.0"),J("10.3.0","Please see https://github.com/highlightjs/highlight.js/issues/2559")),g=Y(g,e)},initHighlighting:v,initHighlightingOnLoad:function(){J("10.6.0","initHighlightingOnLoad() is deprecated.  Use highlightAll() instead."),E=!0},registerLanguage:function(n,r){let i=null;try{i=r(e)}catch(e){if(q("Language definition for '{}' could not be registered.".replace("{}",n)),!o)throw e;q(e),i=c}i.name||(i.name=n),t[n]=i,i.rawDefinition=r.bind(null,e),i.aliases&&_(i.aliases,{languageName:n})},unregisterLanguage:function(e){delete t[e];for(const t of Object.keys(r))r[t]===e&&delete r[t]},listLanguages:function(){return Object.keys(t)},getLanguage:N,registerAliases:_,requireLanguage:function(e){J("10.4.0","requireLanguage will be removed entirely in v11."),J("10.4.0","Please see https://github.com/highlightjs/highlight.js/pull/2844");const t=N(e);if(t)return t;throw new Error("The '{}' language is required, but not loaded.".replace("{}",e))},autoDetection:R,inherit:Y,addPlugin:function(e){!function(e){e["before:highlightBlock"]&&!e["before:highlightElement"]&&(e["before:highlightElement"]=t=>{e["before:highlightBlock"](Object.assign({block:t.el},t))}),e["after:highlightBlock"]&&!e["after:highlightElement"]&&(e["after:highlightElement"]=t=>{e["after:highlightBlock"](Object.assign({block:t.el},t))})}(e),a.push(e)},vuePlugin:K(e).VuePlugin}),e.debugMode=function(){o=!1},e.safeMode=function(){o=!0},e.versionString="10.7.3";for(const e in L)"object"==typeof L[e]&&n(L[e]);return Object.assign(e,L),e.addPlugin(m),e.addPlugin(G),e.addPlugin(y),e}({});e.exports=te},89497:(e,t,n)=>{"use strict";n.r(t)}}]);