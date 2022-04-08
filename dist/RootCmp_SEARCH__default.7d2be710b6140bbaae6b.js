/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ~9.3.0, @magento/venia-sample-backends: ~0.0.1, @magento/upward-security-headers: ~1.0.7, @magento/pwa-theme-venia: ~1.2.0, @magento/pwa-buildpack: ~11.2.0, @magento/peregrine: ~12.3.0, @magento/pagebuilder: ~7.2.0, @magento/eslint-config: ~1.5.0, @magento/babel-preset-peregrine: ~1.2.0, @apollo/client: ~3.4.0 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0Ip5":function(e,t,a){"use strict"
var n=a("JPst"),r=a.n(n)()(function(e){return e[1]})
r.push([e.i,":root {\n    --search-sidebar-width: 325px;\n}\n\n.searchPage-root-z9X {\n    padding: 1rem;\n}\n\n.searchPage-noResult-u1x {\n    display: flex;\n}\n\n.searchPage-headerButtons-Gt1 {\n    display: flex;\n    flex-basis: 100%;\n    justify-content: center;\n    margin: 1rem 0;\n}\n\n.searchPage-heading-K4n {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n\n.searchPage-searchInfo-GU7 {\n    line-height: var(--venia-global-typography-heading-lineHeight);\n    margin: 2.5rem 0 1rem;\n    max-width: 75vw;\n}\n\n.searchPage-totalPages-TJ1 {\n    margin-left: 0.5rem;\n}\n\n.searchPage-headingHighlight-BYR {\n    font-weight: var(--venia-global-fontWeight-bold);\n}\n\n.searchPage-sidebar-oT7 {\n    display: none;\n}\n\n@media (min-width: 1024px) {\n    .searchPage-root-z9X {\n        display: flex;\n        flex-wrap: nowrap;\n    }\n\n    .searchPage-heading-K4n {\n        justify-content: space-between;\n        flex-wrap: nowrap;\n        align-items: center;\n    }\n\n    .searchPage-searchInfo-GU7 {\n        margin: 0;\n        flex-basis: 100%;\n    }\n\n    .searchPage-headerButtons-Gt1 {\n        justify-content: flex-end;\n    }\n\n    .searchPage-sidebar-oT7 {\n        display: flex;\n        align-self: flex-start;\n        width: var(--search-sidebar-width);\n        padding-top: 4rem;\n    }\n\n    .searchPage-searchContent-6z0 {\n        flex-grow: 1;\n    }\n}\n",""]),r.locals={root:"searchPage-root-z9X",noResult:"searchPage-noResult-u1x",headerButtons:"searchPage-headerButtons-Gt1",heading:"searchPage-heading-K4n",searchInfo:"searchPage-searchInfo-GU7",totalPages:"searchPage-totalPages-TJ1",headingHighlight:"searchPage-headingHighlight-BYR",sidebar:"searchPage-sidebar-oT7",searchContent:"searchPage-searchContent-6z0"},t.a=r},N6ZK:function(e,t,a){"use strict"
a.r(t),a.d(t,"default",function(){return ae})
var n,r,c,l,s,i=a("J4zp"),o=a.n(i),u=a("q1tI"),g=a.n(u),h=a("dDsW"),d=a("kriW"),m=a("17x9"),p=a("lSNA"),f=a.n(p),b=a("RIqP"),P=a.n(b),y=a("+TN3"),E=a("Lm/n"),S=a("Ty5D"),v=a("y1Xp"),j=a("OlZo"),O=a("Cszt"),w=a("PKba"),x=a("IOPv"),_=a("Unmo"),N=a("+wQL"),z=a("VkAN"),T=a.n(z),F=a("UYTu"),I=Object(F.a)(n||(n=T()(["\n    query getPageSize {\n        # eslint-disable-next-line @graphql-eslint/require-id-when-available\n        storeConfig {\n            store_code\n            grid_per_page\n        }\n    }\n"]))),C=Object(F.a)(r||(r=T()(["\n    query getProductFiltersBySearch($search: String!) {\n        products(search: $search) {\n            aggregations {\n                label\n                count\n                attribute_code\n                options {\n                    label\n                    value\n                }\n                position\n            }\n        }\n    }\n"]))),M=Object(F.a)(c||(c=T()(["\n    query ProductSearch(\n        $currentPage: Int = 1\n        $inputText: String!\n        $pageSize: Int = 6\n        $filters: ProductAttributeFilterInput!\n        $sort: ProductAttributeSortInput\n    ) {\n        products(\n            currentPage: $currentPage\n            pageSize: $pageSize\n            search: $inputText\n            filter: $filters\n            sort: $sort\n        ) {\n            items {\n                id\n                uid\n                name\n                price_range {\n                    maximum_price {\n                        regular_price {\n                            currency\n                            value\n                        }\n                    }\n                }\n                sku\n                small_image {\n                    url\n                }\n                stock_status\n                __typename\n                url_key\n            }\n            page_info {\n                total_pages\n            }\n            total_count\n        }\n    }\n"]))),R={getFilterInputsQuery:Object(F.a)(l||(l=T()(['\n    query GetFilterInputsForSearch {\n        __type(name: "ProductAttributeFilterInput") {\n            inputFields {\n                name\n                type {\n                    name\n                }\n            }\n        }\n    }\n']))),getPageSize:I,getProductFiltersBySearchQuery:C,getSearchAvailableSortMethods:Object(F.a)(s||(s=T()(["\n    query getSearchAvailableSortMethods($search: String!) {\n        products(search: $search) {\n            sort_fields {\n                options {\n                    label\n                    value\n                }\n            }\n        }\n    }\n"]))),productSearchQuery:M},k=a("C0us"),$=a("rP9t"),A=a("vh/y"),B=a("tuiD"),q=a("JCOj"),D=a("LboF"),L=a.n(D),U=a("0Ip5"),G={injectType:"singletonStyleTag",insert:"head",singleton:!0},J=(L()(U.a,G),U.a.locals||{}),Q=a("Y5d+"),H=a("hbEb"),K=a("pezu"),X=a("RL9Z"),Y=a("LlM3"),W=a("zrp3"),Z=a("UPvi"),V=g.a.lazy(function(){return Promise.all([a.e(0),a.e(10)]).then(a.bind(null,"dzHx"))}),ee=g.a.lazy(function(){return Promise.all([a.e(0),a.e(11)]).then(a.bind(null,"SAkj"))}),te=function SearchPage(e){var t=Object(v.a)(J,e.classes),a=function useSearchPage(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(v.a)(R,e.operations),a=t.getFilterInputsQuery,n=t.getPageSize,r=t.getProductFiltersBySearchQuery,c=t.getSearchAvailableSortMethods,l=t.productSearchQuery,s=Object(y.a)(n,{fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first"}).data,i=Object(E.a)(c,{fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first"}),g=o()(i,2),h=g[0],d=g[1].data,m=s&&s.storeConfig.grid_per_page,p=Object(_.a)({sortFromSearch:!0}),b=o()(p,1)[0],z=b.sortAttribute,T=b.sortDirection,F=Object(u.useRef)(b),I=Object(S.h)(),C=I.search,M=Object(u.useRef)(C),k=Object(O.a)(),$=o()(k,2),A=$[0],B=$[1],q=A.currentPage,D=A.totalPages,L=B.setCurrentPage,U=B.setTotalPages,G=Object(j.b)(),J=o()(G,2)[1],Q=J.toggleDrawer,H=J.actions.setPageLoading,K=Object(x.a)("query",I),X=Object(u.useMemo)(function(){var e=Object(N.c)(C)
if(0===e.size)return null
var t=e.get("category_id")
return t?P()(t).map(function(e){return e.split(",")[0]}).join(", "):null},[C]),Y=Object(u.useCallback)(function(){Q("filter")},[Q]),W=Object(y.a)(a),Z=W.called,V=W.data,ee=W.loading,te=Object(u.useMemo)(function(){var e=new Map
return V&&V.__type.inputFields.forEach(function(t){var a=t.name,n=t.type
e.set(a,n.name)}),e},[V]),ae={currentPage:q,setPage:L,totalPages:D},ne=Object(E.a)(l,{fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first"}),re=o()(ne,2),ce=re[0],le=re[1],se=le.called,ie=le.loading,oe=le.error,ue=le.data,ge=!!ue&&ie
Object(u.useEffect)(function(){H(ge)},[ge,H]),Object(u.useEffect)(function(){if(te.size&&m){var e=Object(N.c)(C),t={}
e.forEach(function(e,a){t[a]=Object(N.b)(e,te.get(a))}),ce({variables:{currentPage:Number(q),filters:t,inputText:K,pageSize:Number(m),sort:f()({},z,T)}})}},[q,te,K,ce,m,C,T,z]),Object(u.useEffect)(function(){var e=ue?ue.products.page_info.total_pages:null
return U(e),function(){U(null)}},[ue,U]),Object(u.useEffect)(function(){var e=new URLSearchParams(M.current),t=new URLSearchParams(C)
e.delete("page"),t.delete("page"),e.toString()===t.toString()&&F.current.sortAttribute.toString()===b.sortAttribute.toString()&&F.current.sortDirection.toString()===b.sortDirection.toString()||(L(1,!0),M.current=C,F.current=b)},[b,C,L]),Object(u.useEffect)(function(){K&&h({variables:{search:K}})},[K,h])
var he=Object(E.a)(r,{fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first"}),de=o()(he,2),me=de[0],pe=de[1].data
Object(u.useEffect)(function(){K&&me({variables:{search:K}})},[me,K,C])
var fe=pe?pe.products.aggregations:null,be=Z&&!se||ie||ee
return Object(w.a)(q),{availableSortMethods:d?d.products.sort_fields.options:null,data:ue,error:oe,filters:fe,loading:be,openDrawer:Y,pageControl:ae,searchCategory:X,searchTerm:K,sortProps:p}}(),n=a.availableSortMethods,r=a.data,c=a.error,l=a.filters,s=a.loading,i=a.pageControl,m=a.searchCategory,p=a.searchTerm,b=a.sortProps,z=Object(h.a)().formatMessage,T=o()(b,1)[0],F=Object(u.useMemo)(function(){return!r&&s?g.a.createElement(u.Fragment,null,g.a.createElement("section",{className:t.gallery},g.a.createElement($.a,{items:Array.from({length:12}).fill(null)})),g.a.createElement("section",{className:t.pagination})):!r&&c?g.a.createElement("div",{className:t.noResult},g.a.createElement(d.a,{id:"searchPage.noResult",defaultMessage:"No results found. The search term may be missing or invalid."})):r?0===r.products.items.length?g.a.createElement("div",{className:t.noResult},g.a.createElement(d.a,{id:"searchPage.noResultImportant",defaultMessage:"No results found!"})):g.a.createElement(u.Fragment,null,g.a.createElement("section",{className:t.gallery},g.a.createElement(A.a,{items:r.products.items})),g.a.createElement("section",{className:t.pagination},g.a.createElement(k.a,{pageControl:i}))):null},[t.gallery,t.noResult,t.pagination,c,s,r,i]),I=r&&r.products&&r.products.total_count?r.products.total_count:0,C=l&&l.length,M=null===l,D=I&&n,L=!I&&s,U=C?g.a.createElement(K.a,{filters:l}):M?g.a.createElement(X.a,null):null,G=C?g.a.createElement(V,{filters:l}):null,te=C?g.a.createElement(ee,{filters:l}):M?g.a.createElement(Y.a,null):null,ae=D?n&&g.a.createElement(B.a,{sortProps:b,availableSortMethods:n}):L?g.a.createElement(q.a,null):null,ne=D?g.a.createElement(Q.a,{currentSort:T}):L?g.a.createElement(H.a,null):null,re=s?g.a.createElement(W.a,{width:5}):r?p?g.a.createElement(d.a,{id:"searchPage.searchTerm",values:{highlight:function highlight(e){return g.a.createElement("span",{className:t.headingHighlight},e)},category:m,term:p},defaultMessage:"Showing results for <highlight>{term}</highlight>{category, select, null {} other { in <highlight>{category}</highlight>}}:"}):g.a.createElement(d.a,{id:"searchPage.searchTermEmpty",defaultMessage:"Showing all results:"}):null,ce=r&&!s?g.a.createElement("span",{className:t.totalPages},z({id:"searchPage.totalPages",defaultMessage:"{totalCount} items"},{totalCount:I})):s?g.a.createElement(W.a,{width:5}):null,le=[p,"".concat("Default Store View"," Search")].filter(Boolean).join(" - ")
return g.a.createElement("article",{className:t.root},g.a.createElement("div",{className:t.sidebar},g.a.createElement(u.Suspense,{fallback:g.a.createElement(Y.a,null)},te)),g.a.createElement("div",{className:t.searchContent},g.a.createElement("div",{className:t.heading},g.a.createElement("div",{className:t.searchInfo},re,ce),g.a.createElement("div",{className:t.headerButtons},U,ae),ne),F,g.a.createElement(u.Suspense,{fallback:null},G)),g.a.createElement(Z.c,null,le),g.a.createElement(Z.a,{name:"title",content:le}),g.a.createElement(Z.a,{name:"description",content:le}))},ae=te
te.propTypes={classes:Object(m.shape)({noResult:m.string,root:m.string,totalPages:m.string})}}}])