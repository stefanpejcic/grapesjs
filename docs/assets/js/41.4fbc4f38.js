(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{516:function(t,a,e){"use strict";e.r(a);var s=e(56),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"pages"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pages"}},[t._v("#")]),t._v(" Pages")]),t._v(" "),e("p",[t._v("You can customize the initial state of the module from the editor initialization")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" editor "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" grapesjs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("pageManager")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("pages")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n       "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'page-id'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n       "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("styles")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v(".my-class { color: red }")]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or a JSON of styles")]),t._v("\n       "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("component")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<div class=\"my-class\">My element</div>'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or a JSON of components")]),t._v("\n     "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("Once the editor is instantiated you can use its API. Before using these methods you should get the module from the instance")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pageManager "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" editor"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Pages"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"available-events"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#available-events"}},[t._v("#")]),t._v(" Available Events")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("page:add")]),t._v(" - Added new page. The page is passed as an argument to the callback")]),t._v(" "),e("li",[e("code",[t._v("page:remove")]),t._v(" - Page removed. The page is passed as an argument to the callback")]),t._v(" "),e("li",[e("code",[t._v("page:select")]),t._v(" - New page selected. The newly selected page and the previous one, are passed as arguments to the callback")]),t._v(" "),e("li",[e("code",[t._v("page:update")]),t._v(" - Page updated. The updated page and the object containing changes are passed as arguments to the callback")]),t._v(" "),e("li",[e("code",[t._v("page")]),t._v(" - Catch-all event for all the events mentioned above. An object containing all the available data about the triggered event is passed as an argument to the callback")])]),t._v(" "),e("h2",{attrs:{id:"methods"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#methods"}},[t._v("#")]),t._v(" Methods")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#add"}},[t._v("add")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#get"}},[t._v("get")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#getall"}},[t._v("getAll")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#getallwrappers"}},[t._v("getAllWrappers")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#getmain"}},[t._v("getMain")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#remove"}},[t._v("remove")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#select"}},[t._v("select")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#getselected"}},[t._v("getSelected")])])]),t._v(" "),e("h2",{attrs:{id:"getall"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getall"}},[t._v("#")]),t._v(" getAll")]),t._v(" "),e("p",[t._v("Get all pages")]),t._v(" "),e("h3",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" arrayOfPages "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pageManager"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAll")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Returns "),e("strong",[e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array",target:"_blank",rel:"noopener noreferrer"}},[t._v("Array"),e("OutboundLink")],1),t._v("<"),e("RouterLink",{attrs:{to:"/api/page.html"}},[t._v("Page")]),t._v(">")],1)]),t._v(" "),e("h2",{attrs:{id:"add"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#add"}},[t._v("#")]),t._v(" add")]),t._v(" "),e("p",[t._v("Add new page")]),t._v(" "),e("h3",{attrs:{id:"parameters"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("props")]),t._v(" "),e("strong",[e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object"),e("OutboundLink")],1)]),t._v(" Page properties")]),t._v(" "),e("li",[e("code",[t._v("opts")]),t._v(" "),e("strong",[e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object",target:"_blank",rel:"noopener noreferrer"}},[t._v("Object"),e("OutboundLink")],1),t._v("?")]),t._v(" Options (optional, default "),e("code",[t._v("{}")]),t._v(")")])]),t._v(" "),e("h3",{attrs:{id:"examples-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-2"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" newPage "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pageManager"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'new-page-id'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// without an explicit ID, a random one will be created")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("styles")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token template-string"}},[e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v(".my-class { color: red }")]),e("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or a JSON of styles")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("component")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<div class=\"my-class\">My element</div>'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or a JSON of components")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Returns "),e("strong",[e("RouterLink",{attrs:{to:"/api/page.html"}},[t._v("Page")])],1)]),t._v(" "),e("h2",{attrs:{id:"remove"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#remove"}},[t._v("#")]),t._v(" remove")]),t._v(" "),e("p",[t._v("Remove page")]),t._v(" "),e("h3",{attrs:{id:"parameters-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameters-2"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("page")]),t._v(" "),e("strong",[t._v("("),e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("String"),e("OutboundLink")],1),t._v(" | "),e("RouterLink",{attrs:{to:"/api/page.html"}},[t._v("Page")]),t._v(")")],1),t._v(" Page or page id")]),t._v(" "),e("li",[e("code",[t._v("opts")]),t._v(" "),e("strong",[t._v("any")]),t._v("  (optional, default "),e("code",[t._v("{}")]),t._v(")")])]),t._v(" "),e("h3",{attrs:{id:"examples-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-3"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" removedPage "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pageManager"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'page-id'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or by passing the page")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" somePage "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pageManager"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'page-id'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\npageManager"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("remove")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("somePage"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Returns "),e("strong",[e("RouterLink",{attrs:{to:"/api/page.html"}},[t._v("Page")])],1),t._v(" Removed Page")]),t._v(" "),e("h2",{attrs:{id:"get"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#get"}},[t._v("#")]),t._v(" get")]),t._v(" "),e("p",[t._v("Get page by id")]),t._v(" "),e("h3",{attrs:{id:"parameters-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameters-3"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("id")]),t._v(" "),e("strong",[e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("String"),e("OutboundLink")],1)]),t._v(" Page id")])]),t._v(" "),e("h3",{attrs:{id:"examples-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-4"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" somePage "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pageManager"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'page-id'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Returns "),e("strong",[e("RouterLink",{attrs:{to:"/api/page.html"}},[t._v("Page")])],1)]),t._v(" "),e("h2",{attrs:{id:"getmain"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getmain"}},[t._v("#")]),t._v(" getMain")]),t._v(" "),e("p",[t._v("Get main page (the first one available)")]),t._v(" "),e("h3",{attrs:{id:"examples-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-5"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mainPage "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pageManager"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMain")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Returns "),e("strong",[e("RouterLink",{attrs:{to:"/api/page.html"}},[t._v("Page")])],1)]),t._v(" "),e("h2",{attrs:{id:"getallwrappers"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getallwrappers"}},[t._v("#")]),t._v(" getAllWrappers")]),t._v(" "),e("p",[t._v("Get wrapper components (aka body) from all pages and frames.")]),t._v(" "),e("h3",{attrs:{id:"examples-6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-6"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" wrappers "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pageManager"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getAllWrappers")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Get all `image` components from the project")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" allImages "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" wrappers"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("wrp")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" wrp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("findType")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'image'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("flat")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Returns "),e("strong",[e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array",target:"_blank",rel:"noopener noreferrer"}},[t._v("Array"),e("OutboundLink")],1),t._v("<"),e("RouterLink",{attrs:{to:"/api/component.html"}},[t._v("Component")]),t._v(">")],1)]),t._v(" "),e("h2",{attrs:{id:"select"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#select"}},[t._v("#")]),t._v(" select")]),t._v(" "),e("p",[t._v("Change the selected page. This will switch the page rendered in canvas")]),t._v(" "),e("h3",{attrs:{id:"parameters-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#parameters-4"}},[t._v("#")]),t._v(" Parameters")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("page")]),t._v(" "),e("strong",[t._v("("),e("a",{attrs:{href:"https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String",target:"_blank",rel:"noopener noreferrer"}},[t._v("String"),e("OutboundLink")],1),t._v(" | "),e("RouterLink",{attrs:{to:"/api/page.html"}},[t._v("Page")]),t._v(")")],1),t._v(" Page or page id")]),t._v(" "),e("li",[e("code",[t._v("opts")]),t._v("   (optional, default "),e("code",[t._v("{}")]),t._v(")")])]),t._v(" "),e("h3",{attrs:{id:"examples-7"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-7"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("pageManager"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("select")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'page-id'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// or by passing the page")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" somePage "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pageManager"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'page-id'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\npageManager"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("select")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("somePage"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Returns "),e("strong",[t._v("this")])]),t._v(" "),e("h2",{attrs:{id:"getselected"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getselected"}},[t._v("#")]),t._v(" getSelected")]),t._v(" "),e("p",[t._v("Get the selected page")]),t._v(" "),e("h3",{attrs:{id:"examples-8"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-8"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" selectedPage "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pageManager"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSelected")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("Returns "),e("strong",[e("RouterLink",{attrs:{to:"/api/page.html"}},[t._v("Page")])],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);