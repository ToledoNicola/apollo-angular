(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{151:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=o.a.createContext({}),p=function(e){var t=o.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return o.a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),b=p(n),u=a,m=b["".concat(i,".").concat(u)]||b[u]||s[u]||r;return n?o.a.createElement(m,l(l({ref:t},d),{},{components:n})):o.a.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),o=n(9),r=(n(0),n(151)),i={title:"Apollo Cache",description:"A guide to customizing and directly accessing your Apollo cache"},l={unversionedId:"basics/caching",id:"version-1.0/basics/caching",isDocsHomePage:!1,title:"Apollo Cache",description:"A guide to customizing and directly accessing your Apollo cache",source:"@site/versioned_docs/version-1.0/basics/caching.md",slug:"/basics/caching",permalink:"/docs/1.0/basics/caching",editUrl:"https://github.com/kamilkisiela/apollo-angular/edit/master/website/versioned_docs/version-1.0/basics/caching.md",version:"1.0",sidebar:"version-1.0/docs",previous:{title:"Network layer (Apollo Link)",permalink:"/docs/1.0/basics/network-layer"},next:{title:"Local state management",permalink:"/docs/1.0/basics/local-state"}},c=[{value:"InMemoryCache",id:"inmemorycache",children:[{value:"Installation",id:"installation",children:[]},{value:"Configuration",id:"configuration",children:[]},{value:"Normalization",id:"normalization",children:[]}]},{value:"Direct Cache Access",id:"direct-cache-access",children:[{value:"readQuery",id:"readquery",children:[]},{value:"readFragment",id:"readfragment",children:[]},{value:"writeQuery<code>and</code>writeFragment",id:"writequeryandwritefragment",children:[]}]},{value:"Recipes",id:"recipes",children:[{value:"Server side rendering",id:"server-side-rendering",children:[]}]}],d={rightToc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"inmemorycache"},"InMemoryCache"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"apollo-cache-inmemory")," is the default cache implementation for Apollo Client 2.0. ",Object(r.b)("inlineCode",{parentName:"p"},"InMemoryCache")," is a normalized data store that supports all of Apollo Client 1.0's features without the dependency on Redux."),Object(r.b)("p",null,"In some instances, you may need to manipulate the cache directly, such as updating the store after a mutation. We'll cover some common use cases ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#recipes"}),"here"),"."),Object(r.b)("h3",{id:"installation"},"Installation"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install apollo-cache-inmemory --save\n")),Object(r.b)("p",null,"After installing the package, you'll want to initialize the cache constructor. Then, you can pass in your newly created cache to ApolloClient."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { InMemoryCache } from 'apollo-cache-inmemory';\nimport { Apollo } from 'apollo-angular';\nimport { HttpLink } from 'apollo-angular-link-http';\n\n@NgModule({ ... })\nclass AppModule {\n  constructor(\n    apollo: Apollo,\n    httpLink: HttpLink\n  ) {\n    const cache = new InMemoryCache();\n\n    apollo.create({\n      link: httpLink.create(),\n      cache\n    });\n  }\n}\n")),Object(r.b)("h3",{id:"configuration"},"Configuration"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"InMemoryCache")," constructor takes an optional config object with properties to customize your cache:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"addTypename: A boolean to determine whether to add __typename to the document (default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),")"),Object(r.b)("li",{parentName:"ul"},"dataIdFromObject: A function that takes a data object and returns a unique identifier to be used when normalizing the data in the store. Learn more about how to customize ",Object(r.b)("inlineCode",{parentName:"li"},"dataIdFromObject")," in the ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#normalization"}),"Normalization")," section."),Object(r.b)("li",{parentName:"ul"},"fragmentMatcher: By default, the ",Object(r.b)("inlineCode",{parentName:"li"},"InMemoryCache")," uses a heuristic fragment matcher. If you are using fragments on unions and interfaces, you will need to use an ",Object(r.b)("inlineCode",{parentName:"li"},"IntrospectionFragmentMatcher"),". For more information, please read ","[our guide to setting up fragment matching for unions & interfaces]","."),Object(r.b)("li",{parentName:"ul"},"cacheRedirects (previously known as cacheResolvers or customResolvers): A map of custom ways to resolve data from other parts of the cache.")),Object(r.b)("h3",{id:"normalization"},"Normalization"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"InMemoryCache")," normalizes your data before saving it to the store by splitting the result into individual objects, creating a unique identifier for each object, and storing those objects in a flattened data structure. By default, ",Object(r.b)("inlineCode",{parentName:"p"},"InMemoryCache")," will attempt to use the commonly found primary keys of ",Object(r.b)("inlineCode",{parentName:"p"},"id")," and ",Object(r.b)("inlineCode",{parentName:"p"},"_id")," for the unique identifier if they exist along with ",Object(r.b)("inlineCode",{parentName:"p"},"__typename")," on an object."),Object(r.b)("p",null,"If ",Object(r.b)("inlineCode",{parentName:"p"},"id")," and ",Object(r.b)("inlineCode",{parentName:"p"},"_id")," are not specified, or if ",Object(r.b)("inlineCode",{parentName:"p"},"__typename")," is not specified, ",Object(r.b)("inlineCode",{parentName:"p"},"InMemoryCache")," will fall back to the path to the object in the query, such as ",Object(r.b)("inlineCode",{parentName:"p"},"ROOT_QUERY.allPeople.0")," for the first record returned on the ",Object(r.b)("inlineCode",{parentName:"p"},"allPeople")," root query."),Object(r.b)("p",null,'This "getter" behavior for unique identifiers can be configured manually via the ',Object(r.b)("inlineCode",{parentName:"p"},"dataIdFromObject")," option passed to the ",Object(r.b)("inlineCode",{parentName:"p"},"InMemoryCache")," constructor, so you can pick which field is used if some of your data follows unorthodox primary key conventions."),Object(r.b)("p",null,"For example, if you wanted to key off of the ",Object(r.b)("inlineCode",{parentName:"p"},"key")," field for all of your data, you could configure ",Object(r.b)("inlineCode",{parentName:"p"},"dataIdFromObject")," like so:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const cache = new InMemoryCache({\n  dataIdFromObject: object => object.key\n});\n")),Object(r.b)("p",null,"This also allows you to use different unique identifiers for different data types by keying off of the ",Object(r.b)("inlineCode",{parentName:"p"},"__typename")," property attached to every object typed by GraphQL.  For example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const cache = new InMemoryCache({\n  dataIdFromObject: object => {\n    switch (object.__typename) {\n      case 'foo': return object.key; // use `key` as the primary key\n      case 'bar': return object.blah; // use `blah` as the primary key\n      default: return object.id || object._id; // fall back to `id` and `_id` for all other types\n    }\n  }\n});\n")),Object(r.b)("h2",{id:"direct-cache-access"},"Direct Cache Access"),Object(r.b)("p",null,"To interact directly with your cache, you can use the Apollo Client class methods readQuery, readFragment, writeQuery, and writeFragment. These methods are available to us via the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.apollographql.com/docs/react/api/apollo-client/#ApolloClient.mutate"}),Object(r.b)("inlineCode",{parentName:"a"},"DataProxy")," interface"),". An instance of ApolloClient can be accessed by ",Object(r.b)("inlineCode",{parentName:"p"},"getClient()")," method of ",Object(r.b)("inlineCode",{parentName:"p"},"Apollo")," Service."),Object(r.b)("p",null,"Any code demonstration in the following sections will assume that we have already initialized an instance of ",Object(r.b)("inlineCode",{parentName:"p"},"ApolloClient")," and that we have imported the ",Object(r.b)("inlineCode",{parentName:"p"},"gql")," tag from ",Object(r.b)("inlineCode",{parentName:"p"},"graphql-tag"),"."),Object(r.b)("h3",{id:"readquery"},"readQuery"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"readQuery")," method is very similar to the ","[",Object(r.b)("inlineCode",{parentName:"p"},"query")," method on ",Object(r.b)("inlineCode",{parentName:"p"},"ApolloClient"),"][]"," except that ",Object(r.b)("inlineCode",{parentName:"p"},"readQuery")," will ",Object(r.b)("em",{parentName:"p"},"never")," make a request to your GraphQL server. The ",Object(r.b)("inlineCode",{parentName:"p"},"query")," method, on the other hand, may send a request to your server if the appropriate data is not in your cache whereas ",Object(r.b)("inlineCode",{parentName:"p"},"readQuery")," will throw an error if the data is not in your cache. ",Object(r.b)("inlineCode",{parentName:"p"},"readQuery")," will ",Object(r.b)("em",{parentName:"p"},"always")," read from the cache. You can use ",Object(r.b)("inlineCode",{parentName:"p"},"readQuery")," by giving it a GraphQL query like so:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"@Component({ ... })\nclass AppComponent {\n  constructor(apollo: Apollo) {\n    const { todo } = apollo.getClient().readQuery({\n      query: gql`\n        query ReadTodo {\n          todo(id: 5) {\n            id\n            text\n            completed\n          }\n        }\n      `,\n    });\n  }\n}\n")),Object(r.b)("p",null,"If all of the data needed to fulfill this read is in Apollo Client\u2019s normalized data cache then a data object will be returned in the shape of the query you wanted to read. If not all of the data needed to fulfill this read is in Apollo Client\u2019s cache then an error will be thrown instead, so make sure to only read data that you know you have!"),Object(r.b)("p",null,"You can also pass variables into ",Object(r.b)("inlineCode",{parentName:"p"},"readQuery"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"@Component({ ... })\nclass AppComponent {\n  constructor(apollo: Apollo) {\n    const { todo } = apollo.getClient().readQuery({\n      query: gql`\n        query ReadTodo($id: Int!) {\n          todo(id: $id) {\n            id\n            text\n            completed\n          }\n        }\n      `,\n      variables: {\n        id: 5,\n      },\n    });\n  }\n}\n")),Object(r.b)("h3",{id:"readfragment"},"readFragment"),Object(r.b)("p",null,"This method allows you great flexibility around the data in your cache. Whereas ",Object(r.b)("inlineCode",{parentName:"p"},"readQuery")," only allowed you to read data from your root query type, ",Object(r.b)("inlineCode",{parentName:"p"},"readFragment")," allows you to read data from ",Object(r.b)("em",{parentName:"p"},"any node you have queried"),". This is incredibly powerful. You use this method as follows:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"@Component({ ... })\nclass AppComponent {\n  constructor(apollo: Apollo) {\n    const todo = apollo.getClient().readFragment({\n      id: ..., // `id` is any id that could be returned by `dataIdFromObject`.\n      fragment: gql`\n        fragment myTodo on Todo {\n          id\n          text\n          completed\n        }\n      `,\n    });\n  }\n}\n")),Object(r.b)("p",null,"The first argument is the id of the data you want to read from the cache. That id must be a value that was returned by the ",Object(r.b)("inlineCode",{parentName:"p"},"dataIdFromObject")," function you defined when initializing ",Object(r.b)("inlineCode",{parentName:"p"},"ApolloClient"),". So for example if you initialized ",Object(r.b)("inlineCode",{parentName:"p"},"ApolloClient")," like so:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"@NgModule({ ... })\nclass AppModule {\n  constructor(apollo: Apollo) {\n    apollo.create({\n      ..., // other options\n      dataIdFromObject: object => object.id,\n    });\n  }\n}\n")),Object(r.b)("p",null,"...and you requested a todo before with an id of ",Object(r.b)("inlineCode",{parentName:"p"},"5"),", then you can read that todo out of your cache with the following:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"@Component({ ... })\nclass AppComponent {\n  constructor(apollo: Apollo) {\n    const todo = apollo.getClient().readFragment({\n      id: '5',\n      fragment: gql`\n        fragment myTodo on Todo {\n          id\n          text\n          completed\n        }\n      `,\n    });\n  }\n}\n")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note:")," Most people add a ",Object(r.b)("inlineCode",{parentName:"p"},"__typename")," to the id in ",Object(r.b)("inlineCode",{parentName:"p"},"dataIdFromObject"),". If you do this then don\u2019t forget to add the ",Object(r.b)("inlineCode",{parentName:"p"},"__typename")," when you are reading a fragment as well. So for example your id may be ",Object(r.b)("inlineCode",{parentName:"p"},"Todo_5")," and not just ",Object(r.b)("inlineCode",{parentName:"p"},"5"),".")),Object(r.b)("p",null,"If a todo with that id does not exist in the cache you will get ",Object(r.b)("inlineCode",{parentName:"p"},"null")," back. If a todo of that id does exist in the cache, but that todo does not have the ",Object(r.b)("inlineCode",{parentName:"p"},"text")," field then an error will be thrown."),Object(r.b)("p",null,"The beauty of ",Object(r.b)("inlineCode",{parentName:"p"},"readFragment")," is that the todo could have come from anywhere! The todo could have been selected as a singleton (",Object(r.b)("inlineCode",{parentName:"p"},"{ todo(id: 5) { ... } }"),"), the todo could have come from a list of todos (",Object(r.b)("inlineCode",{parentName:"p"},"{ todos { ... } }"),"), or the todo could have come from a mutation (",Object(r.b)("inlineCode",{parentName:"p"},"mutation { createTodo { ... } }"),"). As long as at some point your GraphQL server gave you a todo with the provided id and fields ",Object(r.b)("inlineCode",{parentName:"p"},"id"),", ",Object(r.b)("inlineCode",{parentName:"p"},"text"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"completed")," you can read it from the cache at any part of your code."),Object(r.b)("h3",{id:"writequeryandwritefragment"},"writeQuery",Object(r.b)("inlineCode",{parentName:"h3"},"and"),"writeFragment"),Object(r.b)("p",null,"Not only can you read arbitrary data from the Apollo Client cache, but you can also write any data that you would like to the cache. The methods you use to do this are ",Object(r.b)("inlineCode",{parentName:"p"},"writeQuery")," and ",Object(r.b)("inlineCode",{parentName:"p"},"writeFragment"),". They will allow you to change data in your local cache, but it is important to remember that ",Object(r.b)("em",{parentName:"p"},"they will not change any data on your server"),". If you reload your environment then changes made with ",Object(r.b)("inlineCode",{parentName:"p"},"writeQuery")," and ",Object(r.b)("inlineCode",{parentName:"p"},"writeFragment")," will disappear."),Object(r.b)("p",null,"These methods have the same signature as their ",Object(r.b)("inlineCode",{parentName:"p"},"readQuery")," and ",Object(r.b)("inlineCode",{parentName:"p"},"readFragment")," counterparts except they also require an additional ",Object(r.b)("inlineCode",{parentName:"p"},"data")," variable. So for example, if you wanted to update the ",Object(r.b)("inlineCode",{parentName:"p"},"completed")," flag locally for your todo with id ",Object(r.b)("inlineCode",{parentName:"p"},"'5'")," you could execute the following:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"@Component({ ... })\nclass AppComponent {\n  constructor(apollo: Apollo) {\n    apollo.getClient().writeFragment({\n      id: '5',\n      fragment: gql`\n        fragment myTodo on Todo {\n          completed\n        }\n      `,\n      data: {\n        completed: true,\n      },\n    });\n  }\n}\n")),Object(r.b)("p",null,"Any subscriber to the Apollo Client store will instantly see this update and render new UI accordingly."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note:")," Again, remember that using ",Object(r.b)("inlineCode",{parentName:"p"},"writeQuery")," or ",Object(r.b)("inlineCode",{parentName:"p"},"writeFragment")," only changes data ",Object(r.b)("em",{parentName:"p"},"locally"),". If you reload your environment then changes made with these methods will no longer exist.")),Object(r.b)("p",null,"Or if you wanted to add a new todo to a list fetched from the server, you could use ",Object(r.b)("inlineCode",{parentName:"p"},"readQuery")," and ",Object(r.b)("inlineCode",{parentName:"p"},"writeQuery")," together."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"const query = gql`\n  query MyTodoAppQuery {\n    todos {\n      id\n      text\n      completed\n    }\n  }\n`;\n\n@Component({ ... })\nclass AppComponent {\n  constructor(apollo: Apollo) {\n    const data = apollo.getClient().readQuery({ query });\n\n    const myNewTodo = {\n      id: '6',\n      text: 'Start using Apollo Client.',\n      completed: false,\n    };\n\n    apollo.getClient().writeQuery({\n      query,\n      data: {\n        todos: [...data.todos, myNewTodo],\n      },\n    });\n  }\n}\n")),Object(r.b)("h2",{id:"recipes"},"Recipes"),Object(r.b)("p",null,"Here are some common situations where you would need to access the cache directly. If you're manipulating the cache in an interesting way and would like your example to be featured, please send in a pull request!"),Object(r.b)("h3",{id:"server-side-rendering"},"Server side rendering"),Object(r.b)("p",null,"If you would like to learn more about server side rendering, please check out more in depth guide ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/1.0/recipes/server-side-rendering"}),"here"),"."))}p.isMDXComponent=!0}}]);