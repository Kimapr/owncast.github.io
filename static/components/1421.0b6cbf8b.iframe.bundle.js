(self.webpackChunkowncast_web=self.webpackChunkowncast_web||[]).push([[1421],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),console=__webpack_require__("./node_modules/console-browserify/index.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./node_modules/antd/es/_util/hooks/useFlexGapSupport.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_styleChecker__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/antd/es/_util/styleChecker.js");const __WEBPACK_DEFAULT_EXPORT__=function(){var _React$useState=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),_React$useState2=(0,_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.A)(_React$useState,2),flexible=_React$useState2[0],setFlexible=_React$useState2[1];return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((function(){setFlexible((0,_styleChecker__WEBPACK_IMPORTED_MODULE_2__.Pu)())}),[]),flexible}},"./node_modules/antd/es/_util/styleChecker.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Pu:()=>detectFlexGapSupported,qz:()=>canUseDocElement});var flexGapSupported,rc_util_es_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rc-util/es/Dom/canUseDom.js"),canUseDocElement=function canUseDocElement(){return(0,rc_util_es_Dom_canUseDom__WEBPACK_IMPORTED_MODULE_0__.A)()&&window.document.documentElement},detectFlexGapSupported=function detectFlexGapSupported(){if(!canUseDocElement())return!1;if(void 0!==flexGapSupported)return flexGapSupported;var flex=document.createElement("div");return flex.style.display="flex",flex.style.flexDirection="column",flex.style.rowGap="1px",flex.appendChild(document.createElement("div")),flex.appendChild(document.createElement("div")),document.body.appendChild(flex),flexGapSupported=1===flex.scrollHeight,document.body.removeChild(flex),flexGapSupported}},"./node_modules/next/dist/shared/lib/dynamic.js":(module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),function _export(target,all){for(var name in all)Object.defineProperty(target,name,{enumerable:!0,get:all[name]})}(exports,{default:function(){return dynamic},noSSR:function(){return noSSR}});const _interop_require_default=__webpack_require__("./node_modules/@swc/helpers/cjs/_interop_require_default.cjs"),_jsxruntime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_loadablesharedruntime=(__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_interop_require_default._(__webpack_require__("./node_modules/next/dist/shared/lib/loadable.shared-runtime.js"))),isServerSide="undefined"==typeof window;function convertModule(mod){return{default:(null==mod?void 0:mod.default)||mod}}function noSSR(LoadableInitializer,loadableOptions){if(delete loadableOptions.webpack,delete loadableOptions.modules,!isServerSide)return LoadableInitializer(loadableOptions);const Loading=loadableOptions.loading;return()=>(0,_jsxruntime.jsx)(Loading,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}function dynamic(dynamicOptions,options){let loadableFn=_loadablesharedruntime.default,loadableOptions={loading:param=>{let{error,isLoading,pastDelay}=param;return null}};dynamicOptions instanceof Promise?loadableOptions.loader=()=>dynamicOptions:"function"==typeof dynamicOptions?loadableOptions.loader=dynamicOptions:"object"==typeof dynamicOptions&&(loadableOptions={...loadableOptions,...dynamicOptions}),loadableOptions={...loadableOptions,...options};const loaderFn=loadableOptions.loader;return loadableOptions.loadableGenerated&&(loadableOptions={...loadableOptions,...loadableOptions.loadableGenerated},delete loadableOptions.loadableGenerated),"boolean"!=typeof loadableOptions.ssr||loadableOptions.ssr?loadableFn({...loadableOptions,loader:()=>null!=loaderFn?loaderFn().then(convertModule):Promise.resolve(convertModule((()=>null)))}):(delete loadableOptions.webpack,delete loadableOptions.modules,noSSR(loadableFn,loadableOptions))}("function"==typeof exports.default||"object"==typeof exports.default&&null!==exports.default)&&void 0===exports.default.__esModule&&(Object.defineProperty(exports.default,"__esModule",{value:!0}),Object.assign(exports.default,exports),module.exports=exports.default)},"./node_modules/next/dist/shared/lib/loadable-context.shared-runtime.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"LoadableContext",{enumerable:!0,get:function(){return LoadableContext}});const LoadableContext=__webpack_require__("./node_modules/@swc/helpers/cjs/_interop_require_default.cjs")._(__webpack_require__("./node_modules/next/dist/compiled/react/index.js")).default.createContext(null)},"./node_modules/next/dist/shared/lib/loadable.shared-runtime.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"default",{enumerable:!0,get:function(){return _default}});const _react=__webpack_require__("./node_modules/@swc/helpers/cjs/_interop_require_default.cjs")._(__webpack_require__("./node_modules/next/dist/compiled/react/index.js")),_loadablecontextsharedruntime=__webpack_require__("./node_modules/next/dist/shared/lib/loadable-context.shared-runtime.js");const ALL_INITIALIZERS=[],READY_INITIALIZERS=[];let initialized=!1;function load(loader){let promise=loader(),state={loading:!0,loaded:null,error:null};return state.promise=promise.then((loaded=>(state.loading=!1,state.loaded=loaded,loaded))).catch((err=>{throw state.loading=!1,state.error=err,err})),state}function createLoadableComponent(loadFn,options){let opts=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},options),subscription=null;function init(){if(!subscription){const sub=new LoadableSubscription(loadFn,opts);subscription={getCurrentValue:sub.getCurrentValue.bind(sub),subscribe:sub.subscribe.bind(sub),retry:sub.retry.bind(sub),promise:sub.promise.bind(sub)}}return subscription.promise()}if("undefined"==typeof window&&ALL_INITIALIZERS.push(init),!initialized&&"undefined"!=typeof window){const moduleIds=opts.webpack?opts.webpack():opts.modules;moduleIds&&READY_INITIALIZERS.push((ids=>{for(const moduleId of moduleIds)if(ids.includes(moduleId))return init()}))}function LoadableComponent(props,ref){!function useLoadableModule(){init();const context=_react.default.useContext(_loadablecontextsharedruntime.LoadableContext);context&&Array.isArray(opts.modules)&&opts.modules.forEach((moduleName=>{context(moduleName)}))}();const state=_react.default.useSyncExternalStore(subscription.subscribe,subscription.getCurrentValue,subscription.getCurrentValue);return _react.default.useImperativeHandle(ref,(()=>({retry:subscription.retry})),[]),_react.default.useMemo((()=>state.loading||state.error?_react.default.createElement(opts.loading,{isLoading:state.loading,pastDelay:state.pastDelay,timedOut:state.timedOut,error:state.error,retry:subscription.retry}):state.loaded?_react.default.createElement(function resolve(obj){return obj&&obj.default?obj.default:obj}(state.loaded),props):null),[props,state])}return LoadableComponent.preload=()=>init(),LoadableComponent.displayName="LoadableComponent",_react.default.forwardRef(LoadableComponent)}class LoadableSubscription{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};const{_res:res,_opts:opts}=this;res.loading&&("number"==typeof opts.delay&&(0===opts.delay?this._state.pastDelay=!0:this._delay=setTimeout((()=>{this._update({pastDelay:!0})}),opts.delay)),"number"==typeof opts.timeout&&(this._timeout=setTimeout((()=>{this._update({timedOut:!0})}),opts.timeout))),this._res.promise.then((()=>{this._update({}),this._clearTimeouts()})).catch((_err=>{this._update({}),this._clearTimeouts()})),this._update({})}_update(partial){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...partial},this._callbacks.forEach((callback=>callback()))}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(callback){return this._callbacks.add(callback),()=>{this._callbacks.delete(callback)}}constructor(loadFn,opts){this._loadFn=loadFn,this._opts=opts,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function Loadable(opts){return createLoadableComponent(load,opts)}function flushInitializers(initializers,ids){let promises=[];for(;initializers.length;){let init=initializers.pop();promises.push(init(ids))}return Promise.all(promises).then((()=>{if(initializers.length)return flushInitializers(initializers,ids)}))}Loadable.preloadAll=()=>new Promise(((resolveInitializers,reject)=>{flushInitializers(ALL_INITIALIZERS).then(resolveInitializers,reject)})),Loadable.preloadReady=ids=>(void 0===ids&&(ids=[]),new Promise((resolvePreload=>{const res=()=>(initialized=!0,resolvePreload());flushInitializers(READY_INITIALIZERS,ids).then(res,res)}))),"undefined"!=typeof window&&(window.__NEXT_PRELOADREADY=Loadable.preloadReady);const _default=Loadable},"./node_modules/next/dynamic.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/next/dist/shared/lib/dynamic.js")},"./node_modules/rc-resize-observer/es/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>es});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),toArray=__webpack_require__("./node_modules/rc-util/es/Children/toArray.js"),objectSpread2=(__webpack_require__("./node_modules/rc-util/es/warning.js"),__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js")),esm_typeof=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js"),findDOMNode=__webpack_require__("./node_modules/rc-util/es/Dom/findDOMNode.js"),es_ref=__webpack_require__("./node_modules/rc-util/es/ref.js"),CollectionContext=react.createContext(null);var ResizeObserver_es=__webpack_require__("./node_modules/resize-observer-polyfill/dist/ResizeObserver.es.js"),elementListeners=new Map;var resizeObserver=new ResizeObserver_es.A((function onResize(entities){entities.forEach((function(entity){var _elementListeners$get,target=entity.target;null===(_elementListeners$get=elementListeners.get(target))||void 0===_elementListeners$get||_elementListeners$get.forEach((function(listener){return listener(target)}))}))}));var classCallCheck=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),createClass=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),inherits=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),createSuper=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createSuper.js"),DomWrapper=function(_React$Component){(0,inherits.A)(DomWrapper,_React$Component);var _super=(0,createSuper.A)(DomWrapper);function DomWrapper(){return(0,classCallCheck.A)(this,DomWrapper),_super.apply(this,arguments)}return(0,createClass.A)(DomWrapper,[{key:"render",value:function render(){return this.props.children}}]),DomWrapper}(react.Component);function SingleObserver(props,ref){var children=props.children,disabled=props.disabled,elementRef=react.useRef(null),wrapperRef=react.useRef(null),onCollectionResize=react.useContext(CollectionContext),isRenderProps="function"==typeof children,mergedChildren=isRenderProps?children(elementRef):children,sizeRef=react.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),canRef=!isRenderProps&&react.isValidElement(mergedChildren)&&(0,es_ref.f3)(mergedChildren),originRef=canRef?mergedChildren.ref:null,mergedRef=(0,es_ref.xK)(originRef,elementRef),getDom=function getDom(){var _elementRef$current;return(0,findDOMNode.Ay)(elementRef.current)||(elementRef.current&&"object"===(0,esm_typeof.A)(elementRef.current)?(0,findDOMNode.Ay)(null===(_elementRef$current=elementRef.current)||void 0===_elementRef$current?void 0:_elementRef$current.nativeElement):null)||(0,findDOMNode.Ay)(wrapperRef.current)};react.useImperativeHandle(ref,(function(){return getDom()}));var propsRef=react.useRef(props);propsRef.current=props;var onInternalResize=react.useCallback((function(target){var _propsRef$current=propsRef.current,onResize=_propsRef$current.onResize,data=_propsRef$current.data,_target$getBoundingCl=target.getBoundingClientRect(),width=_target$getBoundingCl.width,height=_target$getBoundingCl.height,offsetWidth=target.offsetWidth,offsetHeight=target.offsetHeight,fixedWidth=Math.floor(width),fixedHeight=Math.floor(height);if(sizeRef.current.width!==fixedWidth||sizeRef.current.height!==fixedHeight||sizeRef.current.offsetWidth!==offsetWidth||sizeRef.current.offsetHeight!==offsetHeight){var size={width:fixedWidth,height:fixedHeight,offsetWidth,offsetHeight};sizeRef.current=size;var mergedOffsetWidth=offsetWidth===Math.round(width)?width:offsetWidth,mergedOffsetHeight=offsetHeight===Math.round(height)?height:offsetHeight,sizeInfo=(0,objectSpread2.A)((0,objectSpread2.A)({},size),{},{offsetWidth:mergedOffsetWidth,offsetHeight:mergedOffsetHeight});null==onCollectionResize||onCollectionResize(sizeInfo,target,data),onResize&&Promise.resolve().then((function(){onResize(sizeInfo,target)}))}}),[]);return react.useEffect((function(){var currentElement=getDom();return currentElement&&!disabled&&function observe(element,callback){elementListeners.has(element)||(elementListeners.set(element,new Set),resizeObserver.observe(element)),elementListeners.get(element).add(callback)}(currentElement,onInternalResize),function(){return function unobserve(element,callback){elementListeners.has(element)&&(elementListeners.get(element).delete(callback),elementListeners.get(element).size||(resizeObserver.unobserve(element),elementListeners.delete(element)))}(currentElement,onInternalResize)}}),[elementRef.current,disabled]),react.createElement(DomWrapper,{ref:wrapperRef},canRef?react.cloneElement(mergedChildren,{ref:mergedRef}):mergedChildren)}const es_SingleObserver=react.forwardRef(SingleObserver);function ResizeObserver(props,ref){var children=props.children;return("function"==typeof children?[children]:(0,toArray.A)(children)).map((function(child,index){var key=(null==child?void 0:child.key)||"".concat("rc-observer-key","-").concat(index);return react.createElement(es_SingleObserver,(0,esm_extends.A)({},props,{key,ref:0===index?ref:void 0}),child)}))}var RefResizeObserver=react.forwardRef(ResizeObserver);RefResizeObserver.Collection=function Collection(_ref){var children=_ref.children,onBatchResize=_ref.onBatchResize,resizeIdRef=react.useRef(0),resizeInfosRef=react.useRef([]),onCollectionResize=react.useContext(CollectionContext),onResize=react.useCallback((function(size,element,data){resizeIdRef.current+=1;var currentId=resizeIdRef.current;resizeInfosRef.current.push({size,element,data}),Promise.resolve().then((function(){currentId===resizeIdRef.current&&(null==onBatchResize||onBatchResize(resizeInfosRef.current),resizeInfosRef.current=[])})),null==onCollectionResize||onCollectionResize(size,element,data)}),[onBatchResize,onCollectionResize]);return react.createElement(CollectionContext.Provider,{value:onResize},children)};const es=RefResizeObserver},"./node_modules/rc-util/es/Children/toArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>toArray});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),react_is__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rc-util/node_modules/react-is/index.js");function toArray(children){var option=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},ret=[];return react__WEBPACK_IMPORTED_MODULE_0__.Children.forEach(children,(function(child){(null!=child||option.keepEmpty)&&(Array.isArray(child)?ret=ret.concat(toArray(child)):(0,react_is__WEBPACK_IMPORTED_MODULE_1__.isFragment)(child)&&child.props?ret=ret.concat(toArray(child.props.children,option)):ret.push(child))})),ret}}}]);