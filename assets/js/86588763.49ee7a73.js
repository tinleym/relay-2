(self.webpackChunk=self.webpackChunk||[]).push([[65972],{3905:(e,r,t)=>{"use strict";t.d(r,{Zo:()=>d,kt:()=>y});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),s=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},d=function(e){var r=s(e.components);return n.createElement(u.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(t),y=a,m=p["".concat(u,".").concat(y)]||p[y]||c[y]||o;return t?n.createElement(m,l(l({ref:r},d),{},{components:t})):n.createElement(m,l({ref:r},d))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=p;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},68629:(e,r,t)=>{"use strict";t.d(r,{Z:()=>c});var n=t(44256),a=t(67294);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function l(e){var r=e.children;return a.createElement("div",{className:"docsRating",id:"docsRating"},a.createElement("hr",null),r)}var i=function(){var e=a.useState(!1),r=e[0],t=e[1],n=function(e){t(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return r?"Thank you for letting us know!":a.createElement(a.Fragment,null,"Is this page useful?",a.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(1)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),a.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return n(0)}},a.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},u=function(){return a.createElement("p",null,"Let us know how these docs can be improved by",a.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},s=function(){return a.createElement(l,null,a.createElement(u,null),a.createElement(i,null))},d=function(){return a.createElement(l,null,a.createElement(i,null))};const c=function(){return(0,n.fbContent)({internal:a.createElement(s,null),external:a.createElement(d,null)})}},20542:(e,r,t)=>{"use strict";t.r(r),t.d(r,{frontMatter:()=>u,contentTitle:()=>s,metadata:()=>d,toc:()=>c,default:()=>y});var n=t(22122),a=t(19756),o=(t(67294),t(3905)),l=t(68629),i=["components"],u={id:"use-preloaded-query",title:"usePreloadedQuery",slug:"/api-reference/use-preloaded-query/",description:"API reference for usePreloadedQuery, a React hook used to read query data from the Relay store using a query reference",keywords:["read","query","query reference"]},s=void 0,d={unversionedId:"api-reference/hooks/use-preloaded-query",id:"version-v12.0.0/api-reference/hooks/use-preloaded-query",isDocsHomePage:!1,title:"usePreloadedQuery",description:"API reference for usePreloadedQuery, a React hook used to read query data from the Relay store using a query reference",source:"@site/versioned_docs/version-v12.0.0/api-reference/hooks/use-preloaded-query.md",sourceDirName:"api-reference/hooks",slug:"/api-reference/use-preloaded-query/",permalink:"/docs/api-reference/use-preloaded-query/",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v12.0.0/api-reference/hooks/use-preloaded-query.md",version:"v12.0.0",lastUpdatedBy:"Jon",lastUpdatedAt:1639074903,formattedLastUpdatedAt:"12/9/2021",frontMatter:{id:"use-preloaded-query",title:"usePreloadedQuery",slug:"/api-reference/use-preloaded-query/",description:"API reference for usePreloadedQuery, a React hook used to read query data from the Relay store using a query reference",keywords:["read","query","query reference"]},sidebar:"version-v12.0.0/docs",previous:{title:"useRelayEnvironment",permalink:"/docs/api-reference/use-relay-environment/"},next:{title:"useQueryLoader",permalink:"/docs/api-reference/use-query-loader/"}},c=[{value:"<code>usePreloadedQuery</code>",id:"usepreloadedquery",children:[{value:"Arguments",id:"arguments",children:[]},{value:"Flow Type Parameters",id:"flow-type-parameters",children:[]},{value:"Return Value",id:"return-value",children:[]}]}],p={toc:c};function y(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"usepreloadedquery"},(0,o.kt)("inlineCode",{parentName:"h2"},"usePreloadedQuery")),(0,o.kt)("p",null,"Hook used to access data fetched by an earlier call to ",(0,o.kt)("a",{parentName:"p",href:"../load-query"},(0,o.kt)("inlineCode",{parentName:"a"},"loadQuery"))," or with the help of ",(0,o.kt)("a",{parentName:"p",href:"../use-query-loader"},(0,o.kt)("inlineCode",{parentName:"a"},"useQueryLoader")),'. This implements the "render-as-you-fetch" pattern:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Call the ",(0,o.kt)("inlineCode",{parentName:"li"},"loadQuery")," callback returned from ",(0,o.kt)("inlineCode",{parentName:"li"},"useQueryLoader"),". This will store a query reference in React state.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"You can also call the imported ",(0,o.kt)("inlineCode",{parentName:"li"},"loadQuery")," directly, which returns a query reference. In that case, store the item in state or in a React ref, and call ",(0,o.kt)("inlineCode",{parentName:"li"},"dispose()")," on the value when you are no longer using it."))),(0,o.kt)("li",{parentName:"ul"},"Then, in your render method, consume the query reference with ",(0,o.kt)("inlineCode",{parentName:"li"},"usePreloadedQuery()"),". This call will suspend if the query is still pending, throw an error if it failed, and otherwise return the query results."),(0,o.kt)("li",{parentName:"ul"},"This pattern is encouraged over ",(0,o.kt)("inlineCode",{parentName:"li"},"useLazyLoadQuery()")," as it can allow fetching data earlier while not blocking rendering.")),(0,o.kt)("p",null,"For more information, see the ",(0,o.kt)("a",{parentName:"p",href:"../../guided-tour/rendering/queries"},"Rendering Queries")," guide."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import type {AppQuery as AppQueryType} from 'AppQuery.graphql';\n\nconst React = require('React');\n\nconst {graphql, useQueryLoader, usePreloadedQuery} = require('react-relay');\n\nconst AppQuery = graphql`\n  query AppQuery($id: ID!) {\n    user(id: $id) {\n      name\n    }\n  }\n`;\n\ntype Props = {\n  initialQueryRef: PreloadedQuery<AppQueryType>,\n};\n\nfunction NameLoader(props) {\n  const [queryReference, loadQuery] = useQueryLoader(\n    AppQuery,\n    props.initialQueryRef, /* e.g. provided by router */\n  );\n\n  return (<>\n    <Button\n      onClick={() => loadQuery({id: '4'})}\n      disabled={queryReference != null}\n    >\n      Reveal your name!\n    </Button>\n    <Suspense fallback=\"Loading...\">\n      {queryReference != null\n        ? <NameDisplay queryReference={queryReference} />\n        : null\n      }\n    </Suspense>\n  </>);\n}\n\nfunction NameDisplay({ queryReference }) {\n  const data = usePreloadedQuery<AppQueryType>(AppQuery, queryReference);\n\n  return <h1>{data.user?.name}</h1>;\n}\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"query"),": GraphQL query specified using a ",(0,o.kt)("inlineCode",{parentName:"li"},"graphql")," template literal."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"preloadedQueryReference"),": A ",(0,o.kt)("inlineCode",{parentName:"li"},"PreloadedQuery")," query reference, which can be acquired from ",(0,o.kt)("a",{parentName:"li",href:"../use-query-loader"},(0,o.kt)("inlineCode",{parentName:"a"},"useQueryLoader"))," or by calling ",(0,o.kt)("a",{parentName:"li",href:"../load-query"},(0,o.kt)("inlineCode",{parentName:"a"},"loadQuery()"))," .")),(0,o.kt)("h3",{id:"flow-type-parameters"},"Flow Type Parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"TQuery"),": Type parameter that should correspond to the Flow type for the specified query. This type is available to import from the the auto-generated file: ",(0,o.kt)("inlineCode",{parentName:"li"},"<query_name>.graphql.js"),".")),(0,o.kt)("h3",{id:"return-value"},"Return Value"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"data"),": Object that contains data which has been read out from the Relay store; the object matches the shape of specified query.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The Flow type for data will also match this shape, and contain types derived from the GraphQL Schema. For example, the type of ",(0,o.kt)("inlineCode",{parentName:"li"},"data")," above is: ",(0,o.kt)("inlineCode",{parentName:"li"},"{ user: ?{ name: ?string } }"),".")))),(0,o.kt)(l.Z,{mdxType:"DocsRating"}))}y.isMDXComponent=!0}}]);