/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ~9.3.0, @magento/venia-sample-backends: ~0.0.1, @magento/upward-security-headers: ~1.0.7, @magento/pwa-theme-venia: ~1.2.0, @magento/pwa-buildpack: ~11.2.0, @magento/peregrine: ~12.3.0, @magento/pagebuilder: ~7.2.0, @magento/eslint-config: ~1.5.0, @magento/babel-preset-peregrine: ~1.2.0, @apollo/client: ~3.4.0 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"Dx+2":function(t,e,o){"use strict"
o.r(e),o.d(e,"default",function(){return j})
var n,r=o("q1tI"),c=o.n(r),a=o("17x9"),s=o("zrp3"),i=o("y1Xp"),l=o("LboF"),m=o.n(l),u=o("z+Nk"),d={injectType:"singletonStyleTag",insert:"head",singleton:!0},g=(m()(u.a,d),u.a.locals||{}),_=function CMSPageShimmer(t){var e=Object(i.a)(g,t.classes)
return c.a.createElement("div",{className:e.root,"aria-live":"polite","aria-busy":"true"},c.a.createElement(s.a,{width:"100%",height:"880px",key:"banner"}))},p=o("J4zp"),h=o.n(p),f=o("+TN3"),y=o("OlZo"),b=o("VkAN"),W=o.n(b),x=o("UYTu"),F={getCMSPageQuery:Object(x.a)(n||(n=W()(["\n    query GetCmsPage($identifier: String!) {\n        cmsPage(identifier: $identifier) {\n            url_key\n            content\n            content_heading\n            title\n            page_layout\n            meta_title\n            meta_keywords\n            meta_description\n        }\n    }\n"])))},P=o("STDB"),v=o("UPvi"),C=function CMSPage(t){var e=function useCmsPage(t){var e=t.identifier,o=Object(i.a)(F,t.operations).getCMSPageQuery,n=Object(f.a)(o,{variables:{identifier:e},fetchPolicy:"cache-and-network",nextFetchPolicy:"cache-first"}),c=n.loading,a=n.data,s=Object(y.b)(),l=h()(s,2)[1].actions.setPageLoading
Object(r.useEffect)(function(){return function(){l(!1)}},[l]),Object(r.useEffect)(function(){l(c)},[c,l])
var m=c&&!a
return{cmsPage:a?a.cmsPage:null,shouldShowLoadingIndicator:m}}({identifier:t.identifier}),o=e.cmsPage,n=e.shouldShowLoadingIndicator,a=Object(i.a)(g,t.classes)
if(n)return c.a.createElement(_,{classes:a})
var s=o.content_heading,l=o.title,m=o.meta_title,u=o.meta_description,d=o.page_layout,p=o.content,b=""!==s?c.a.createElement("h1",{className:a.heading},s):null,W=m||l,x=d?a["root_".concat(function toCamelCase(t){return t.replace(/[-_ ]([a-zA-Z])/g,function(t){return t.substr(1).toUpperCase()})}(d))]:a.root
return c.a.createElement(r.Fragment,null,c.a.createElement(v.b,null,W),c.a.createElement(v.a,{name:"title",content:W}),c.a.createElement(v.a,{name:"description",content:u}),c.a.createElement("article",{className:x},b,c.a.createElement(P.a,{html:p})))}
C.propTypes={identifier:a.string,classes:Object(a.shape)({root:a.string,heading:a.string,root_empty:a.string,root_1column:a.string,root_2columnsLeft:a.string,root_2columnsRight:a.string,root_3columns:a.string,root_cmsFullWidth:a.string,root_categoryFullWidth:a.string,root_productFullWidth:a.string})}
var j=C},"z+Nk":function(t,e,o){"use strict"
var n=o("JPst"),r=o.n(n)()(function(t){return t[1]})
r.push([t.i,".cms-root-KW0 {\n}\n\n.cms-heading-sxp {\n\n    /* Medium */\n}\n\n.cms-root_empty-U3Y,\n.cms-root_1column--u6,\n.cms-root_2columnsLeft-Nov,\n.cms-root_2columnsRight-cyA,\n.cms-root_3columns-BoF,\n.cms-root_cmsFullWidth-bCA,\n.cms-root_categoryFullWidth-tbj,\n.cms-root_productFullWidth-CzL {\n}\n",""]),r.locals={root:"cms-root-KW0 px-4",heading:"cms-heading-sxp mb-2 mt-4 text-center text-3xl md_mb-10 md_text-5xl",root_empty:"cms-root_empty-U3Y cms-root-KW0 px-4",root_1column:"cms-root_1column--u6 cms-root-KW0 px-4",root_2columnsLeft:"cms-root_2columnsLeft-Nov cms-root-KW0 px-4",root_2columnsRight:"cms-root_2columnsRight-cyA cms-root-KW0 px-4",root_3columns:"cms-root_3columns-BoF cms-root-KW0 px-4",root_cmsFullWidth:"cms-root_cmsFullWidth-bCA cms-root-KW0 px-4",root_categoryFullWidth:"cms-root_categoryFullWidth-tbj cms-root-KW0 px-4",root_productFullWidth:"cms-root_productFullWidth-CzL cms-root-KW0 px-4"},e.a=r}}])
