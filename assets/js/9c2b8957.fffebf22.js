(self.webpackChunk=self.webpackChunk||[]).push([[2354],{3905:(e,t,r)=>{"use strict";r.r(t),r.d(t,{MDXContext:()=>u,MDXProvider:()=>m,mdx:()=>f,useMDXComponents:()=>c,withMDXComponents:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),d=function(e){return function(t){var r=c(t.components);return n.createElement(e,l({},t,{components:r}))}},c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||l;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},36742:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var n=r(79973),a=r(67294),l=r(73727),i=r(52263),o=r(13919),s=r(10412),u=(0,a.createContext)({collectLink:function(){}}),d=r(44996),c=r(18780),m=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const p=function(e){var t,r,p=e.isNavLink,h=e.to,f=e.href,v=e.activeClassName,y=e.isActive,g=e["data-noBrokenLinkCheck"],w=e.autoAddBaseUrl,b=void 0===w||w,x=(0,n.Z)(e,m),R=(0,i.default)().siteConfig,k=R.trailingSlash,N=R.baseUrl,C=(0,d.useBaseUrlUtils)().withBaseUrl,O=(0,a.useContext)(u),E=h||f,T=(0,o.Z)(E),j=null==E?void 0:E.replace("pathname://",""),U=void 0!==j?(r=j,b&&function(e){return e.startsWith("/")}(r)?C(r):r):void 0;U&&T&&(U=(0,c.applyTrailingSlash)(U,{trailingSlash:k,baseUrl:N}));var I=(0,a.useRef)(!1),L=p?l.OL:l.rU,q=s.default.canUseIntersectionObserver,P=(0,a.useRef)();(0,a.useEffect)((function(){return!q&&T&&null!=U&&window.docusaurus.prefetch(U),function(){q&&P.current&&P.current.disconnect()}}),[P,U,q,T]);var _=null!==(t=null==U?void 0:U.startsWith("#"))&&void 0!==t&&t,S=!U||!T||_;return U&&T&&!_&&!g&&O.collectLink(U),S?a.createElement("a",Object.assign({href:U},E&&!T&&{target:"_blank",rel:"noopener noreferrer"},x)):a.createElement(L,Object.assign({},x,{onMouseEnter:function(){I.current||null==U||(window.docusaurus.preload(U),I.current=!0)},innerRef:function(e){var t,r;q&&e&&T&&(t=e,r=function(){null!=U&&window.docusaurus.prefetch(U)},P.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(P.current.unobserve(t),P.current.disconnect(),r())}))})),P.current.observe(t))},to:U||""},p&&{isActive:y,activeClassName:v}))}},13919:(e,t,r)=>{"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{b:()=>n,Z:()=>a})},44996:(e,t,r)=>{"use strict";r.r(t),r.d(t,{useBaseUrlUtils:()=>l,default:()=>i});var n=r(52263),a=r(13919);function l(){var e=(0,n.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,l=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var l=void 0===n?{}:n,i=l.forcePrependBaseUrl,o=void 0!==i&&i,s=l.absolute,u=void 0!==s&&s;if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(o)return t+r;var d=r.startsWith(t)?r:t+r.replace(/^\//,"");return u?e+d:d}(l,r,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,l().withBaseUrl)(e,t)}},8802:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=t.trailingSlash,n=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===r)return e;var a,l=e.split(/[#?]/)[0],i="/"===l||l===n?l:(a=l,r?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(l,i)}},18780:function(e,t,r){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var a=r(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(a).default}});var l=r(29964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(l).default}})},29964:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},68629:(e,t,r)=>{"use strict";r.d(t,{Z:()=>p});var n=r(36742),a=r(44256),l=r(67294);function i(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function o(e){var t=e.children;return l.createElement("div",{className:"docsRating",id:"docsRating"},l.createElement("hr",null),t)}var s=function(){var e=l.useState(!1),t=e[0],r=e[1],n=function(e){r(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return t?"Thank you for letting us know!":l.createElement(l.Fragment,null,"Is this page useful?",l.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(1)}},l.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),l.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(0)}},l.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},u=function(){return l.createElement("p",null,"Let us know how these docs can be improved by",l.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:i},"Filing a task"))},d=function(){return l.createElement("p",null,"Help us make the site even better by"," ",l.createElement(n.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},c=function(){return l.createElement(o,null,l.createElement(u,null),l.createElement(s,null),l.createElement(d,null))},m=function(){return l.createElement(o,null,l.createElement(s,null),l.createElement(d,null))};const p=function(){return(0,a.fbContent)({internal:l.createElement(c,null),external:l.createElement(m,null)})}},56107:(e,t,r)=>{"use strict";r.r(t),r.d(t,{frontMatter:()=>s,contentTitle:()=>u,metadata:()=>d,toc:()=>c,default:()=>p});var n=r(74034),a=r(79973),l=(r(67294),r(3905)),i=(r(68629),r(44256)),o=["components"],s={id:"relay-resolvers",title:"Relay Resolvers",slug:"/guides/relay-resolvers/",description:"Relay guide to Relay Resolvers",keywords:["resolvers","derived","selectors","reactive"]},u=void 0,d={unversionedId:"guides/relay-resolvers",id:"guides/relay-resolvers",isDocsHomePage:!1,title:"Relay Resolvers",description:"Relay guide to Relay Resolvers",source:"@site/docs/guides/relay-resolvers.md",sourceDirName:"guides",slug:"/guides/relay-resolvers/",permalink:"/docs/next/guides/relay-resolvers/",editUrl:"https://github.com/facebook/relay/tree/main/website/docs/guides/relay-resolvers.md",tags:[],version:"current",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1646938552,formattedLastUpdatedAt:"3/10/2022",frontMatter:{id:"relay-resolvers",title:"Relay Resolvers",slug:"/guides/relay-resolvers/",description:"Relay guide to Relay Resolvers",keywords:["resolvers","derived","selectors","reactive"]},sidebar:"docs",previous:{title:"@required Directive",permalink:"/docs/next/guides/required-directive/"},next:{title:"Upgrading to Relay Hooks",permalink:"/docs/next/migration-and-compatibility/"}},c=[{value:"Doblock Fields",id:"doblock-fields",children:[],level:2},{value:"Relay Resolver Signature",id:"relay-resolver-signature",children:[],level:2},{value:"How They Work",id:"how-they-work",children:[],level:2},{value:"Current Limitations",id:"current-limitations",children:[],level:2}],m={toc:c};function p(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.mdx)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("p",null,"Relay Resolvers is an experimental Relay feature which enables modeling derived state as client-only fields in Relay\u2019s GraphQL graph. Similar to server ",(0,l.mdx)("a",{parentName:"p",href:"https://graphql.org/learn/execution/"},"resolvers"),", a Relay Resolver is a function which defines how to compute the value of a GraphQL field. However, unlike server resolvers, Relay Resolvers are evaluated reactively on the client. A Relay Resolver reads fields off of its parent object and returns a derived result. If any of those fields change, Relay will automatically reevaluate the resolver."),(0,l.mdx)("p",null,"Relay Resolvers are particularly valuable in apps which store client state in Relay via ",(0,l.mdx)("a",{parentName:"p",href:"https://relay.dev/docs/guides/client-schema-extensions/"},"client schema extensions"),", since they allow you to compose together client data, server data \u2014 and even other Relay Resolver fields \u2014 into fields which update reactively as the underlying data changes."),(0,l.mdx)("p",null,"Relay Resolvers were originally conceived of as an alternative to Flux-style ",(0,l.mdx)("a",{parentName:"p",href:"https://redux.js.org/usage/deriving-data-selectors"},"selectors")," and can be thought of as providing similar capabilities."),(0,l.mdx)("p",null,"Concretely, Relay Resolvers are defined as functions annotated with a special docblock syntax. The Relay compiler will automatically recognize these docblocks in any JavaScript file and use them to extend the schema that is available within your project."),(0,l.mdx)("p",null,"Let\u2019s look at an example Relay Resolver:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import type {UserGreetingResolver$key} from 'UserGreetingResolver.graphql';\nimport {graphql} from 'relay-runtime';\nimport {readFragment} from 'relay-runtime/store/ResolverFragments';\n\n/**\n * @RelayResolver\n *\n * @onType User\n * @fieldName greeting\n * @rootFragment UserGreetingResolver\n *\n * A greeting for the user which includes their name and title.\n */\nexport default function userGreetingResolver(userKey: UserGreetingResolver$key): string {\n  const user = readFragment(graphql`\n    fragment UserGreetingResolver on User {\n      honorific\n      last_name\n    }`, userKey);\n\n  return `Hello ${user.honorific} ${user.last_name}!`;\n}\n")),(0,l.mdx)("p",null,"This resolver adds a new field ",(0,l.mdx)("inlineCode",{parentName:"p"},"greeting")," to the ",(0,l.mdx)("inlineCode",{parentName:"p"},"User")," object type. It reads the ",(0,l.mdx)("inlineCode",{parentName:"p"},"honorific")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},"last_name")," fields off of the parent ",(0,l.mdx)("inlineCode",{parentName:"p"},"User")," and derives a greeting string. The new ",(0,l.mdx)("inlineCode",{parentName:"p"},"greeting")," field may now be used by any Relay component throughout your project which has access to a ",(0,l.mdx)("inlineCode",{parentName:"p"},"User"),"."),(0,l.mdx)("p",null,"Consuming this new field looks identical to consuming a field defined in the server schema:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"function MyGreeting({userKey}) {\n  const user = useFragment(`\n    fragment MyGreeting on User {\n      greeting\n    }`, userKey);\n  return<h1>{user.greeting}<h1>;\n}\n")),(0,l.mdx)("h2",{id:"doblock-fields"},"Doblock Fields"),(0,l.mdx)("p",null,"The Relay compiler looks for the following fields in any docblocks that includes ",(0,l.mdx)("inlineCode",{parentName:"p"},"@RelayResolver"),":"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"@RelayResolvers")," (required)"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"@onType")," or ",(0,l.mdx)("inlineCode",{parentName:"li"},"@onInterface")," (required) The GraphQL type/interface on which the new field should be exposed"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"@fieldName")," (required) The name of the new field"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"@rootFragment")," (required) The name of the fragment read by ",(0,l.mdx)("inlineCode",{parentName:"li"},"readFragment")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"@deprecated")," (optional) Indicates that the field is ",(0,l.mdx)("a",{parentName:"li",href:"https://spec.graphql.org/June2018/#sec--deprecated"},"deprecated"),". May be optionally followed text giving the reason that the field is deprecated.")),(0,l.mdx)("p",null,"The  docblock may also contain free text. This free text will be used as the field\u2019s human-readable description, which will be surfaced in Relay\u2019s editor support on hover and in autocomplete results."),(0,l.mdx)("h2",{id:"relay-resolver-signature"},"Relay Resolver Signature"),(0,l.mdx)("p",null,"In order for Relay to be able to call a Relay Resolver, it must conform to a set of conventions:"),(0,l.mdx)("ol",null,(0,l.mdx)("li",{parentName:"ol"},"The resolver function must accept a single argument, which is the key for its root fragment."),(0,l.mdx)("li",{parentName:"ol"},"The resolver function must be the default export of its module (only one resolver per module)"),(0,l.mdx)("li",{parentName:"ol"},"The resolver must read its fragment using the special ",(0,l.mdx)("inlineCode",{parentName:"li"},"readFragment")," function."),(0,l.mdx)("li",{parentName:"ol"},"The resolver function must be pure"),(0,l.mdx)("li",{parentName:"ol"},"The resolver\u2019s return value must be immutable")),(0,l.mdx)("p",null,"Unlike server resolvers, Relay Resolvers may return any JavaScript value. This includes classes, functions and arrays. However, we generally encourage having Relay Resolvers return scalar values and only returning more complex JavaScript values (like functions) as an escape hatch."),(0,l.mdx)(i.FbInternalOnly,{mdxType:"FbInternalOnly"},"## Lint Rule",(0,l.mdx)("p",null,"In many cases, the contents of the docblock can be derived from the javascript implementation. In those cases, the ",(0,l.mdx)("a",{parentName:"p",href:"https://www.internalfb.com/eslint/relay-resolvers"},(0,l.mdx)("inlineCode",{parentName:"a"},"relay-resolvers"))," ESLint rule rule will offer auto-fixes to derive the docblock from the implementation and ensure that the two remain in sync. The lint rule also enforces a naming convention for resolver function and modules names.")),(0,l.mdx)("h2",{id:"how-they-work"},"How They Work"),(0,l.mdx)("p",null,"When parsing your project, the Relay compiler looks for ",(0,l.mdx)("inlineCode",{parentName:"p"},"@RelayResolver")," docblocks and uses them to add special fields to the GraphQL schema. If a query or fragment references one of these fields, Relay\u2019s generated artifact for that query or fragment will automatically include an ",(0,l.mdx)("inlineCode",{parentName:"p"},"import")," of the resolver function. ",(0,l.mdx)("em",{parentName:"p"},"Note that this can happen recursively if the Relay Resolver field you are reading itself reads one or more Relay Resolver fields.")),(0,l.mdx)("p",null,"When the field is first read by a component, Relay will evaluate the Relay Resolver function and cache the result. Other components that read the same field will read the same cached value. If at any point any of the fields that the resolver reads (via its root fragment) change, Relay will reevaluate the resolver. If the return value changes (determined by ",(0,l.mdx)("inlineCode",{parentName:"p"},"===")," equality) Relay will propagate that change to all components (and other Relay Resolvers) that are currently reading the field."),(0,l.mdx)("h2",{id:"current-limitations"},"Current Limitations"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Relay Resolvers are still considered experimental. To use them you must ensure that the ",(0,l.mdx)("inlineCode",{parentName:"li"},"ENABLE_RELAY_RESOLVERS")," runtime feature flag is enabled, and that the ",(0,l.mdx)("inlineCode",{parentName:"li"},"enable_relay_resolver_transform")," feature flag is enabled in your project\u2019s Relay config file."),(0,l.mdx)("li",{parentName:"ul"},"Relay Resolvers don\u2019t yet have access to query variables. If this is functionality that would be useful to you, please get in touch."),(0,l.mdx)("li",{parentName:"ul"},"Currently Relay Resolvers only work with Haste module resolution, where modules are imported using their globally unique name, rather than by path."),(0,l.mdx)("li",{parentName:"ul"},"Error Handling: Currently if a Relay Resolver errors, it will throw in the component that first reads it. In the future we plan to have the following behavior:",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"If a Relay Resolver throws an error during evaluation the consumer of the field will get ",(0,l.mdx)("inlineCode",{parentName:"li"},"null")," and the error will be logged. This follows the GraphQL spec\u2019s documented ",(0,l.mdx)("a",{parentName:"li",href:"https://redux.js.org/usage/deriving-data-selectors"},"best practice")," of returning null when a field resolver errors in order to make reading data as robust as possible."),(0,l.mdx)("li",{parentName:"ul"},"If your component requires a non-null value in order to render, and can\u2019t provide a reasonable fallback experience, you can annotate the field access with ",(0,l.mdx)("inlineCode",{parentName:"li"},"@required"),".")))))}p.isMDXComponent=!0}}]);