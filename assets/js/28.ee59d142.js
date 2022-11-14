(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{675:function(e,t,a){"use strict";a.r(t);var r=a(10),v=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"proxy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proxy"}},[e._v("#")]),e._v(" Proxy")]),e._v(" "),a("p",[e._v("Proxy 用于修改某些操作的默认行为，等同于在语言层面上做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程。")]),e._v(" "),a("p",[e._v("可以理解成在目标对象之前架设一层“"),a("code",[e._v("拦截")]),e._v("”，外界对该对象进行访问时，都必须先通过这层拦截，因此提供一种机制，可以对外界的访问进行过滤和改写。")]),e._v(" "),a("p",[e._v("Proxy可以译为“代理器”")]),e._v(" "),a("h3",{attrs:{id:"声明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#声明"}},[e._v("#")]),e._v(" 声明")]),e._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" proxy "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Proxy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("target"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" handler"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),a("ul",[a("li",[e._v("target: 拦截对象")]),e._v(" "),a("li",[e._v("handler: 参数也是对象，定制拦截行为")])]),e._v(" "),a("h3",{attrs:{id:"方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法"}},[e._v("#")]),e._v(" 方法")]),e._v(" "),a("blockquote",[a("p",[e._v("对于可以设置、但没有设置拦截的操作，则直接落在目标对象上，按照原先的方式产生结果。")])]),e._v(" "),a("ol",[a("li",[a("p",[a("code",[e._v("get(target, propKey, receiver)")]),e._v(":拦截对象属性的读取，例如"),a("code",[e._v("proxy.foo")]),e._v("和"),a("code",[e._v("proxy['foo']")])]),e._v(" "),a("ul",[a("li",[e._v("拦截对象不存在的属性，返回"),a("code",[e._v("undefined")])]),e._v(" "),a("li",[e._v("可继承")]),e._v(" "),a("li",[e._v("receiver指向原始的读操作所在的那个对象")]),e._v(" "),a("li",[e._v("如果一个属性不可配置（"),a("code",[e._v("configurable")]),e._v(")且不可写（"),a("code",[e._v("writable")]),e._v("），则不能修改改属性，否则报错")]),e._v(" "),a("li",[e._v("应用场景：函数名链式使用、生成各种DOM")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("set(target, propKey, value, receiver)")]),e._v(":拦截对象属性的设置,例如"),a("code",[e._v("proxy.foo = 1")]),e._v("和"),a("code",[e._v("proxy['foo'] = 1")]),e._v(",返回一个"),a("code",[e._v("boolean")])]),e._v(" "),a("ul",[a("li",[e._v("receiver指向原始的读操作所在的那个对象")]),e._v(" "),a("li",[e._v("如果拦截对象的某个属性不可写（"),a("code",[e._v("writable")]),e._v("）,那么"),a("code",[e._v("set")]),e._v("方法不起作用")]),e._v(" "),a("li",[e._v("严格模式下不返还"),a("code",[e._v("true")]),e._v("就会报错")]),e._v(" "),a("li",[e._v("应用场景：验证设置的数据、数据绑定、内部属性不被外部使用（_）")])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("apply(target, ctx, args)")]),e._v(": 拦截proxy实例作为函数调用的操作，例如"),a("code",[e._v("proxy(...args)")]),e._v("、"),a("code",[e._v("proxy.call(object, ...args)")]),e._v("和"),a("code",[e._v("proxy.apply(...)")]),e._v("操作")]),e._v(" "),a("ul",[a("li",[e._v("call&apply使用时要兼容get")]),e._v(" "),a("li",[e._v("直接调用Reflect.apply方法,也会被拦截"),a("code",[e._v("Reflect.apply(fnProxy, null, [9, 10]) // 38")])])])]),e._v(" "),a("li",[a("p",[a("code",[e._v("construct(target, args, newTarget)")]),e._v(": 拦截proxy实例作为构造函数调用的操作，例如"),a("code",[e._v("new proxy(...args)")])]),e._v(" "),a("ul",[a("li",[e._v("目标对象必须是函数，否则报错")]),e._v(" "),a("li",[e._v("返回的必须是一个对象，否则报错")]),e._v(" "),a("li",[a("code",[e._v("this")]),e._v("指向"),a("code",[e._v("handler")]),e._v(",而不是实例对象")])])])]),e._v(" "),a("h3",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[e._v("#")]),e._v(" 示例")]),e._v(" "),a("p",{staticClass:"codepen",staticStyle:{height:"600px","box-sizing":"border-box",display:"flex","align-items":"center","justify-content":"center",border:"2px solid",margin:"1em 0",padding:"1em"},attrs:{"data-height":"600","data-theme-id":"dark","data-default-tab":"js","data-slug-hash":"QWQgbMg","data-user":"Jun_9527"}},[a("span",[e._v("See the Pen "),a("a",{attrs:{href:"https://codepen.io/Jun_9527/pen/QWQgbMg"}},[e._v("\n  15 Proxy")]),e._v(" by Jun_9527 ("),a("a",{attrs:{href:"https://codepen.io/Jun_9527"}},[e._v("@Jun_9527")]),e._v(")\n  on "),a("a",{attrs:{href:"https://codepen.io"}},[e._v("CodePen")]),e._v(".")])]),e._v(" "),a("script",{attrs:{async:"",src:"https://cpwebassets.codepen.io/assets/embed/ei.js"}})])}),[],!1,null,null,null);t.default=v.exports}}]);