(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{366:function(s,t,a){"use strict";a.r(t);var n=a(42),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),a("p",[s._v("ZHI.ZSystem是一个不包含任何业务操作的.NET组件库，其内部实现了大量的对象扩展函数，同时还集成了超多的工具类，以便于.NET工程师的日常编程工作。")]),s._v(" "),a("h2",{attrs:{id:"快速上手"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速上手"}},[s._v("#")]),s._v(" 快速上手")]),s._v(" "),a("p",[s._v("使用一款.NET组件库的方式非常简单，使用nuget包管理器即可。")]),s._v(" "),a("ol",[a("li",[s._v("在nuget包管理器中搜索ZHI.ZSystem")]),s._v(" "),a("li",[s._v("选择想要安装的版本进行安装即可（推荐安装最新版本）")]),s._v(" "),a("li",[s._v("引入命名空间ZHI.ZSystem")])]),s._v(" "),a("h2",{attrs:{id:"语法案例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法案例"}},[s._v("#")]),s._v(" 语法案例")]),s._v(" "),a("p",[s._v("假设你已经引入了命名空间")]),s._v(" "),a("div",{staticClass:"language-csharp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("using")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("ZHI"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ZSystem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[s._v("案例一：使用扩展语法。DateTimeToTimeStamp()是ZHI.ZSystem对System.DateTime对象的扩展函数。")])]),s._v(" "),a("div",{staticClass:"language-csharp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Example")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" date "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" DateTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Now"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//返回类型为long的时间戳")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" timestamp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" DateTimeHelper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("DateTimeToTimeStamp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//返回类型为long的时间戳（13位，精确到毫秒） TimeStampUnit:组件库内置枚举 ")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" datetime "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" DateTimeHelper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("TimeStampToDateTime")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("timestamp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("ul",[a("li",[s._v("案例二：使用工具类。EncodeHelper是ZHI.ZSystem内实现编码操作的工具类。")])]),s._v(" "),a("div",{staticClass:"language-csharp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Example")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" input "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ABCDEFG123456"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//对字符串进行base64编码")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" base64String "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" EncodeHelper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Base64Encode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//对字符串进行base64解码")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" decodeString "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" EncodeHelper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Base64Decode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("base64String"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("ul",[a("li",[s._v("案例三：使用内部对象。ZConvert是ZHI.ZSystem内实现数据转换对象。")])]),s._v(" "),a("div",{staticClass:"language-csharp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token return-type class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("Example")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//将字符串/object转为数字")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" number "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123456"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" number1 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ZConvert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("TryToInt32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//可使用：TryToInt16()、TryToInt64()")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")])]),s._v(" number2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ZConvert"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("TryToUInt32")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//可使用：TryToUInt16()、TryToUInt64()")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("更多案例，我们推荐你参考"),a("RouterLink",{attrs:{to:"/api/extends/#介绍"}},[s._v("教程")])],1)])}),[],!1,null,null,null);t.default=e.exports}}]);