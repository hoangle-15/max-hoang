/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ~9.3.0, @magento/venia-sample-backends: ~0.0.1, @magento/upward-security-headers: ~1.0.7, @magento/pwa-theme-venia: ~1.2.0, @magento/pwa-buildpack: ~11.2.0, @magento/peregrine: ~12.3.0, @magento/pagebuilder: ~7.2.0, @magento/eslint-config: ~1.5.0, @magento/babel-preset-peregrine: ~1.2.0, @apollo/client: ~3.4.0 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"1//Z":function(e,t,n){"use strict"
n.r(t)
var a=n("HPDi")
n.d(t,"default",function(){return a.a})
var o=n("xg11")
n.d(t,"ProductOptionsShimmer",function(){return o.a})},BDXZ:function(e,t,n){"use strict"
var a=n("JPst"),o=n.n(a),r=n("fivx"),c=o()(function(e){return e[1]})
c.i(r.a,"",!0),c.push([e.i,".swatch-root-6VC {\n    background: var(--venia-swatch-bg);\n    border-color: rgba(0, 0, 0, 0.1);\n    color: white;\n    width: 3rem;\n    --venia-swatch-bg: var(--venia-global-color-gray);\n}\n\n.swatch-root_selected--kC {\n    background: linear-gradient(-45deg, rgba(0, 0, 0, 0.2), transparent),\n        var(--venia-swatch-bg);\n}\n\n.swatch-root_focused-27- {\n}\n.swatch-root_selected_focused-WQx {\n}\n\n.swatch-checked-blv {\n    opacity: 1;\n    transition-property: opacity;\n    transition-duration: 256ms;\n}\n\n.swatch-unchecked-Aap {\n    opacity: 0;\n}\n",""]),c.locals={root:"swatch-root-6VC "+r.a.locals.root,root_selected:"swatch-root_selected--kC swatch-root-6VC "+r.a.locals.root,root_focused:"swatch-root_focused-27- swatch-root-6VC "+r.a.locals.root,root_selected_focused:"swatch-root_selected_focused-WQx swatch-root_selected--kC swatch-root-6VC "+r.a.locals.root,checked:"swatch-checked-blv",unchecked:"swatch-unchecked-Aap swatch-checked-blv"},t.a=c},HNsA:function(e,t,n){"use strict"
var a=n("JPst"),o=n.n(a),r=n("O7RW"),c=o()(function(e){return e[1]})
c.i(r.a,"",!0),c.push([e.i,".swatchList-root-m0x {\n}\n",""]),c.locals={root:"swatchList-root-m0x "+r.a.locals.root},t.a=c},HPDi:function(e,t,n){"use strict"
var a=n("pVnL"),o=n.n(a),r=n("q1tI"),c=n.n(r),l=n("17x9"),s=n("kriW"),i=n("y1Xp"),u={fashion_color:"swatch"},d=n("EpH3"),b=n("oTwF"),f=n("JoNN"),h=n("LboF"),p=n.n(h),m=n("BDXZ"),v={injectType:"singletonStyleTag",insert:"head",singleton:!0},g=(p()(m.a,v),m.a.locals||{}),y=function Swatch(e){var t=e.hasFocus,n=e.isSelected,a=e.item,o=a.label,l=a.value_index,s=a.swatch_data,u=e.onClick,h=e.style,p=function useSwatch(e){var t=e.onClick,n=e.value_index
return{handleClick:Object(r.useCallback)(function(){t(n)},[n,t])}}({onClick:u,value_index:l}).handleClick,m=Object(i.a)(g,e.classes),v=Object(r.useMemo)(function(){return n?m.checked:m.unchecked},[m.checked,m.unchecked,n]),y=h
if(s){var _=s.thumbnail,C=s.value,w=""
if(_){var O=Object(d.c)(_,"image-swatch")(48)
w='url("'.concat(O,'")')}else w=C
y=Object.assign({},h,{"--venia-swatch-bg":w})}var k=m[function getClassName(e,t,n){return"".concat(e).concat(t?"_selected":"").concat(n?"_focused":"")}("root",n,t)]
return c.a.createElement("button",{className:k,onClick:p,style:y,title:o,type:"button"},c.a.createElement(b.a,{classes:{root:v},src:f.a}))}
y.propTypes={hasFocus:l.bool,isSelected:l.bool,item:Object(l.shape)({label:l.string.isRequired,value_index:Object(l.oneOfType)([l.number,l.string]).isRequired}).isRequired,onClick:l.func.isRequired,style:l.object},y.defaultProps={hasFocus:!1,isSelected:!1}
var _=y,C=n("HNsA"),w={injectType:"singletonStyleTag",insert:"head",singleton:!0},O=(p()(C.a,w),C.a.locals||{}),k=function SwatchList(e){var t=e.getItemKey,n=e.selectedValue,a=void 0===n?{}:n,o=e.items,l=e.onSelectionChange,s=Object(i.a)(O,e.classes),u=Object(r.useMemo)(function(){return o.map(function(e){var n=e.label===a.label
return c.a.createElement(_,{key:t(e),isSelected:n,item:e,onClick:l})})},[t,a.label,o,l])
return c.a.createElement("div",{className:s.root},u)}
k.propTypes={classes:Object(l.shape)({root:l.string}),getItemKey:l.func,selectedValue:l.object,items:Object(l.arrayOf)(l.object),onSelectionChange:l.func},k.displayName="SwatchList"
var S=k,j=n("fivx"),T={injectType:"singletonStyleTag",insert:"head",singleton:!0},x=(p()(j.a,T),j.a.locals||{}),V=function Tile(e){var t=e.hasFocus,n=e.isSelected,a=e.item,o=a.label,l=a.value_index,s=function useTile(e){var t=e.onClick,n=e.value_index
return{handleClick:Object(r.useCallback)(function(){t(n)},[n,t])}}({onClick:e.onClick,value_index:l}).handleClick,u=Object(i.a)(x,e.classes)[function getClassName(e,t,n){return"".concat(e).concat(t?"_selected":"").concat(n?"_focused":"")}("root",n,t)]
return c.a.createElement("button",{className:u,onClick:s,title:o,type:"button"},c.a.createElement("span",null,o))},E=V
V.propTypes={hasFocus:l.bool,isSelected:l.bool,item:Object(l.shape)({label:l.string.isRequired,value_index:Object(l.oneOfType)([l.number,l.string]).isRequired}).isRequired,onClick:l.func.isRequired},V.defaultProps={hasFocus:!1,isSelected:!1}
var L=n("O6fr"),N=function TileList(e){var t=e.getItemKey,n=e.selectedValue,a=void 0===n?{}:n,o=e.items,l=e.onSelectionChange,s=Object(i.a)(L.a,e.classes),u=Object(r.useMemo)(function(){return o.map(function(e){var n=e.label===a.label
return c.a.createElement(E,{key:t(e),isSelected:n,item:e,onClick:l})})},[t,a.label,o,l])
return c.a.createElement("div",{className:s.root},u)}
N.propTypes={classes:Object(l.shape)({root:l.string}),getItemKey:l.func,selectedValue:l.object,items:Object(l.arrayOf)(l.object),onSelectionChange:l.func},N.displayName="TileList"
var R=N,q=n("WqNE"),A=n("J4zp"),I=n.n(A),J=function getItemKey(e){return e.value_index},M=function getListComponent(e,t){return"swatch"===function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).attribute_code
return u[e]}({attribute_code:e,values:t})?S:R},F=function Option(e){var t=e.attribute_code,n=e.attribute_id,a=e.label,o=e.onSelectionChange,l=e.selectedValue,u=e.values,d=function useOption(e){var t=e.attribute_id,n=e.onSelectionChange,a=e.selectedValue,o=e.values,c=Object(r.useState)(null),l=I()(c,2),s=l[0],i=l[1],u=Object(r.useMemo)(function(){var e={},t=s||a
return t&&(e=o.find(function(e){return e.default_label===t})||{}),e},[a,s,o]),d=Object(r.useMemo)(function(){return new Map(o.map(function(e){return[e.value_index,e.store_label]}))},[o]),b=s||u.default_label||"None"
return{handleSelectionChange:Object(r.useCallback)(function(e){i(d.get(e)),n&&n(t,e)},[t,n,d]),initialSelection:u,selectedValueDescription:b}}({attribute_id:n,label:a,onSelectionChange:o,selectedValue:l,values:u}),b=d.handleSelectionChange,f=d.initialSelection,h=d.selectedValueDescription,p=Object(r.useMemo)(function(){return M(t,u)},[t,u]),m=Object(i.a)(q.a,e.classes)
return c.a.createElement("div",{className:m.root},c.a.createElement("span",{className:m.title},a),c.a.createElement(p,{getItemKey:J,selectedValue:f,items:u,onSelectionChange:b}),c.a.createElement("dl",{className:m.selection},c.a.createElement("dt",{className:m.selectionLabel},c.a.createElement(s.a,{id:"productOptions.selectedLabel",defaultMessage:"Selected {label}:",values:{label:a}})),c.a.createElement("dd",null,h)))}
F.propTypes={attribute_code:l.string.isRequired,attribute_id:l.string,classes:Object(l.shape)({root:l.string,title:l.string}),label:l.string.isRequired,onSelectionChange:l.func,selectedValue:Object(l.oneOfType)([l.number,l.string]),values:Object(l.arrayOf)(l.object).isRequired}
var K=F
function _createForOfIteratorHelper(t,a){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]
if(!o){if(Array.isArray(t)||(o=function _unsupportedIterableToArray(e,t){if(!e)return
if("string"==typeof e)return _arrayLikeToArray(e,t)
var n=Object.prototype.toString.call(e).slice(8,-1)
"Object"===n&&e.constructor&&(n=e.constructor.name)
if("Map"===n||"Set"===n)return Array.from(e)
if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(e,t)}(t))||a&&t&&"number"==typeof t.length){o&&(t=o)
var r=0,c=function F(){}
return{s:c,n:function n(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function e(t){throw t},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,i=!0,u=!1
return{s:function s(){o=o.call(t)},n:function n(){var e=o.next()
return i=e.done,e},e:function e(t){u=!0,l=t},f:function f(){try{i||null==o.return||o.return()}finally{if(u)throw l}}}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length)
for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n]
return a}var P=function Options(e){var t=e.classes,n=e.onSelectionChange,a=e.options,l=e.selectedValues,s=function useOptions(e){var t,n=e.onSelectionChange,a=e.selectedValues,o=Object(r.useCallback)(function(e,t){n&&n(e,t)},[n]),c=new Map,l=_createForOfIteratorHelper(a)
try{for(l.s();!(t=l.n()).done;){var s=t.value,i=s.option_label,u=s.value_label
c.set(i,u)}}catch(e){l.e(e)}finally{l.f()}return{handleSelectionChange:o,selectedValueMap:c}}({onSelectionChange:n,selectedValues:void 0===l?[]:l}),i=s.handleSelectionChange,u=s.selectedValueMap
return a.map(function(e){return c.a.createElement(K,o()({},e,{classes:t,key:e.attribute_id,onSelectionChange:i,selectedValue:u.get(e.label)}))})}
P.propTypes={onSelectionChange:l.func,options:l.array.isRequired,selectedValues:l.array}
t.a=P},fivx:function(e,t,n){"use strict"
var a=n("JPst"),o=n.n(a),r=n("G4iS"),c=o()(function(e){return e[1]})
c.i(r.a,"",!0),c.push([e.i,".tile-root-zJL {\n    border: 1px solid rgb(var(--venia-global-color-text));\n    border-radius: 2px;\n    height: 3rem;\n    min-width: 3rem;\n    padding: 0 0.5rem;\n}\n\n.tile-root_selected-Kmb {\n    background-color: rgb(var(--venia-global-color-text));\n    color: white;\n}\n.tile-root_focused-Rt5 {\n}\n.tile-root_selected_focused-sYj {\n}\n",""]),c.locals={root:"tile-root-zJL "+r.a.locals.root,root_selected:"tile-root_selected-Kmb tile-root-zJL "+r.a.locals.root,root_focused:"tile-root_focused-Rt5 tile-root-zJL "+r.a.locals.root,root_selected_focused:"tile-root_selected_focused-sYj tile-root_selected-Kmb tile-root-zJL "+r.a.locals.root},t.a=c}}])
