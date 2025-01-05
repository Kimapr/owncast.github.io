"use strict";(self.webpackChunkowncast_web=self.webpackChunkowncast_web||[]).push([[1649,6742],{"./components/modals/AuthModal/AuthModal.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),recoil__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/recoil/es/index.js"),_AuthModal__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./components/modals/AuthModal/AuthModal.tsx"),_stores_ClientConfigStore__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./components/stores/ClientConfigStore.tsx");const Example=()=>{const setCurrentUser=(0,recoil__WEBPACK_IMPORTED_MODULE_2__.lZ)(_stores_ClientConfigStore__WEBPACK_IMPORTED_MODULE_4__.gN);return(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((()=>setCurrentUser({id:"1",displayName:"Test User",displayColor:3,isModerator:!1})),[]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_AuthModal__WEBPACK_IMPORTED_MODULE_3__.AuthModal,{forceTabs:!0})})},__WEBPACK_DEFAULT_EXPORT__={title:"owncast/Modals/Auth",component:_AuthModal__WEBPACK_IMPORTED_MODULE_3__.AuthModal,parameters:{}},Basic={render:()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(recoil__WEBPACK_IMPORTED_MODULE_2__.bi,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Example,{})})},__namedExportsOrder=["Basic"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:"{\n  render: Template\n}",...Basic.parameters?.docs?.source}}}},"./components/modals/AuthModal/AuthModal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AuthModal:()=>AuthModal});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),tabs=__webpack_require__("./node_modules/antd/es/tabs/index.js"),es=__webpack_require__("./node_modules/recoil/es/index.js"),react_error_boundary_esm=__webpack_require__("./node_modules/react-error-boundary/dist/react-error-boundary.esm.js"),IndieAuthModal=__webpack_require__("./components/modals/IndieAuthModal/IndieAuthModal.tsx"),FediAuthModal=__webpack_require__("./components/modals/FediAuthModal/FediAuthModal.tsx"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),AuthModal_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/modals/AuthModal/AuthModal.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(AuthModal_module.A,options);const AuthModal_AuthModal_module=AuthModal_module.A&&AuthModal_module.A.locals?AuthModal_module.A.locals:void 0;var ClientConfigStore=__webpack_require__("./components/stores/ClientConfigStore.tsx"),ComponentError=__webpack_require__("./components/ui/ComponentError/ComponentError.tsx");const AuthModal=({forceTabs})=>{const authenticated=(0,es.vc)(ClientConfigStore.td),accessToken=(0,es.vc)(ClientConfigStore.Dr),currentUser=(0,es.vc)(ClientConfigStore.gN),clientConfig=(0,es.vc)(ClientConfigStore.Ar);if(!currentUser)return null;const{displayName}=currentUser,{federation}=clientConfig,{enabled:fediverseEnabled}=federation,items=[{label:(0,jsx_runtime.jsxs)("span",{className:AuthModal_AuthModal_module.tabContent,children:[(0,jsx_runtime.jsx)("img",{className:AuthModal_AuthModal_module.icon,src:"/img/indieauth.png",alt:"IndieAuth"}),"IndieAuth"]}),key:"1",children:(0,jsx_runtime.jsx)(IndieAuthModal.H,{authenticated,displayName,accessToken})},{label:(0,jsx_runtime.jsxs)("span",{className:AuthModal_AuthModal_module.tabContent,children:[(0,jsx_runtime.jsx)("img",{className:AuthModal_AuthModal_module.icon,src:"/img/fediverse-black.png",alt:"Fediverse auth"}),"FediAuth"]}),key:"2",children:(0,jsx_runtime.jsx)(FediAuthModal.c,{authenticated,displayName,accessToken})}];return(0,jsx_runtime.jsx)(react_error_boundary_esm.tH,{fallbackRender:({error,resetErrorBoundary})=>(0,jsx_runtime.jsx)(ComponentError.O,{componentName:"AuthModal",message:error.message,retryFunction:resetErrorBoundary}),children:(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(tabs.A,{defaultActiveKey:"1",items,type:"card",size:"small",renderTabBar:fediverseEnabled||forceTabs?null:()=>null})})})};try{AuthModal.displayName="AuthModal",AuthModal.__docgenInfo={description:"",displayName:"AuthModal",props:{forceTabs:{defaultValue:null,description:"",name:"forceTabs",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/modals/AuthModal/AuthModal.tsx#AuthModal"]={docgenInfo:AuthModal.__docgenInfo,name:"AuthModal",path:"components/modals/AuthModal/AuthModal.tsx#AuthModal"})}catch(__react_docgen_typescript_loader_error){}},"./components/modals/FediAuthModal/FediAuthModal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>FediAuthModal});var jsx_runtime=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),collapse=__webpack_require__("./node_modules/antd/es/collapse/index.js"),input=__webpack_require__("./node_modules/antd/es/input/index.js"),es_button=__webpack_require__("./node_modules/antd/es/button/index.js"),spin=__webpack_require__("./node_modules/antd/es/spin/index.js"),space=__webpack_require__("./node_modules/antd/es/space/index.js"),es_alert=__webpack_require__("./node_modules/antd/es/alert/index.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),dynamic=__webpack_require__("./node_modules/next/dynamic.js"),dynamic_default=__webpack_require__.n(dynamic),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),FediAuthModal_module=__webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/modals/FediAuthModal/FediAuthModal.module.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(FediAuthModal_module.A,options);const FediAuthModal_FediAuthModal_module=FediAuthModal_module.A&&FediAuthModal_module.A.locals?FediAuthModal_module.A.locals:void 0;var validators=__webpack_require__("./utils/validators.ts"),console=__webpack_require__("./node_modules/console-browserify/index.js");const{Panel}=collapse.A,CheckCircleOutlined=dynamic_default()((()=>Promise.all([__webpack_require__.e(3827),__webpack_require__.e(1918)]).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/@ant-design/icons/CheckCircleOutlined.js",23))),{loadableGenerated:{webpack:()=>["./node_modules/@ant-design/icons/CheckCircleOutlined.js"]},ssr:!1}),FediAuthModal=({authenticated,displayName,accessToken})=>{const[errorMessage,setErrorMessage]=(0,react.useState)(null),[loading,setLoading]=(0,react.useState)(!1),[valid,setValid]=(0,react.useState)(!1),[account,setAccount]=(0,react.useState)(""),[code,setCode]=(0,react.useState)(""),[verifyingCode,setVerifyingCode]=(0,react.useState)(!1),message=authenticated?(0,jsx_runtime.jsxs)("span",{children:[(0,jsx_runtime.jsx)("b",{children:"You are already authenticated"}),". However, you can add other domains or log in as a different user."]}):(0,jsx_runtime.jsxs)("span",{children:["Receive a direct message on the Fediverse to link your account to"," ",(0,jsx_runtime.jsx)("strong",{children:displayName}),", or login as a previously linked chat user."]});let errorMessageText=errorMessage;errorMessageText&&errorMessageText.includes("url does not support indieauth")&&(errorMessageText="The provided URL is either invalid or does not support IndieAuth.");const makeRequest=async(url,data)=>{const rawResponse=await fetch(url,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(data)}),content=await rawResponse.json();content.message&&(setErrorMessage(content.message),setLoading(!1))},inputCodeStep=(0,jsx_runtime.jsxs)("div",{children:["Paste in the code that was sent to your Fediverse account. If you did not receive a code, make sure you can accept direct messages.",(0,jsx_runtime.jsxs)("div",{className:FediAuthModal_FediAuthModal_module.codeInputContainer,children:[(0,jsx_runtime.jsx)(input.A,{value:code,onChange:e=>setCode(e.target.value),className:FediAuthModal_FediAuthModal_module.codeInput,placeholder:"123456",maxLength:6}),(0,jsx_runtime.jsx)(es_button.A,{type:"primary",onClick:async()=>{setLoading(!0);const url=`/api/auth/fediverse/verify?accessToken=${accessToken}`,data={code};try{await makeRequest(url,data),window.location.href="/"}catch(e){console.error(e),setErrorMessage(e)}setLoading(!1)},disabled:code.length<6,className:FediAuthModal_FediAuthModal_module.submitButton,children:"Verify Code"})]})]}),inputAccountStep=(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("div",{children:"Your Fediverse Account"}),(0,jsx_runtime.jsx)(input.A.Search,{addonBefore:"@",onInput:e=>{var acct;setAccount(e.target.value),acct=e.target.value,setValid((0,validators.JP)(acct))},value:account,placeholder:"youraccount@yourserver.com",status:!valid&&account.length>0?"error":void 0,onSearch:async()=>{if(!valid)return;setLoading(!0),setErrorMessage(null);const url=`/api/auth/fediverse?accessToken=${accessToken}`,data={account:account.replace(/^@+/,"")};try{await makeRequest(url,data),setVerifyingCode(!0)}catch(e){console.error(e),setErrorMessage(e)}setLoading(!1)},enterButton:(0,jsx_runtime.jsx)(es_button.A,{type:valid?"primary":"default",disabled:!valid||0===account.length,children:(0,jsx_runtime.jsx)(CheckCircleOutlined,{})})})]});return(0,jsx_runtime.jsx)(spin.A,{spinning:loading,children:(0,jsx_runtime.jsxs)(space.A,{direction:"vertical",children:[message,errorMessageText&&(0,jsx_runtime.jsx)(es_alert.A,{message:"Error",description:errorMessageText,type:"error",showIcon:!0}),verifyingCode?inputCodeStep:inputAccountStep,(0,jsx_runtime.jsx)(collapse.A,{ghost:!0,children:(0,jsx_runtime.jsx)(Panel,{header:"Learn more about using the Fediverse to authenticate with chat.",children:(0,jsx_runtime.jsx)("p",{children:"You can link your chat identity with your Fediverse identity. Next time you want to use this chat identity you can again go through the Fediverse authentication."})},"header")}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("strong",{children:"Note"}),": This is for authentication purposes only, and no personal information will be accessed or stored."]})]})})};try{FediAuthModal.displayName="FediAuthModal",FediAuthModal.__docgenInfo={description:"",displayName:"FediAuthModal",props:{authenticated:{defaultValue:null,description:"",name:"authenticated",required:!0,type:{name:"boolean"}},displayName:{defaultValue:null,description:"",name:"displayName",required:!0,type:{name:"string"}},accessToken:{defaultValue:null,description:"",name:"accessToken",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/modals/FediAuthModal/FediAuthModal.tsx#FediAuthModal"]={docgenInfo:FediAuthModal.__docgenInfo,name:"FediAuthModal",path:"components/modals/FediAuthModal/FediAuthModal.tsx#FediAuthModal"})}catch(__react_docgen_typescript_loader_error){}},"./components/modals/IndieAuthModal/IndieAuthModal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H:()=>IndieAuthModal});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_barrel_optimize_names_Alert_Button_Collapse_Input_Space_Spin_Typography_antd__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/antd/es/collapse/index.js"),_barrel_optimize_names_Alert_Button_Collapse_Input_Space_Spin_Typography_antd__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/antd/es/typography/index.js"),_barrel_optimize_names_Alert_Button_Collapse_Input_Space_Spin_Typography_antd__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/antd/es/spin/index.js"),_barrel_optimize_names_Alert_Button_Collapse_Input_Space_Spin_Typography_antd__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/antd/es/space/index.js"),_barrel_optimize_names_Alert_Button_Collapse_Input_Space_Spin_Typography_antd__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/antd/es/alert/index.js"),_barrel_optimize_names_Alert_Button_Collapse_Input_Space_Spin_Typography_antd__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/antd/es/input/index.js"),_barrel_optimize_names_Alert_Button_Collapse_Input_Space_Spin_Typography_antd__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/antd/es/button/index.js"),next_dynamic__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/next/dynamic.js"),next_dynamic__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__),react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_utils_validators__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./utils/validators.ts");const{Panel}=_barrel_optimize_names_Alert_Button_Collapse_Input_Space_Spin_Typography_antd__WEBPACK_IMPORTED_MODULE_3__.A,{Link}=_barrel_optimize_names_Alert_Button_Collapse_Input_Space_Spin_Typography_antd__WEBPACK_IMPORTED_MODULE_4__.A,CheckCircleOutlined=next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()((()=>Promise.all([__webpack_require__.e(3827),__webpack_require__.e(1918)]).then(__webpack_require__.t.bind(__webpack_require__,"./node_modules/@ant-design/icons/CheckCircleOutlined.js",23))),{loadableGenerated:{webpack:()=>["./node_modules/@ant-design/icons/CheckCircleOutlined.js"]},ssr:!1}),IndieAuthModal=({authenticated,displayName:username,accessToken})=>{const[errorMessage,setErrorMessage]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),[loading,setLoading]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(!1),[valid,setValid]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(!1),[host,setHost]=(0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),message=authenticated?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("b",{children:"You are already authenticated"}),". However, you can add other domains or log in as a different user."]}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span",{children:["Use your own domain to authenticate ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{children:username})," or login as a previously"," ","authenticated chat user using IndieAuth."]});let errorMessageText=errorMessage;errorMessageText&&errorMessageText.includes("url does not support indieauth")&&(errorMessageText="The provided URL is either invalid or does not support IndieAuth.");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Button_Collapse_Input_Space_Spin_Typography_antd__WEBPACK_IMPORTED_MODULE_6__.A,{spinning:loading,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_barrel_optimize_names_Alert_Button_Collapse_Input_Space_Spin_Typography_antd__WEBPACK_IMPORTED_MODULE_7__.A,{direction:"vertical",children:[message,errorMessageText&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Button_Collapse_Input_Space_Spin_Typography_antd__WEBPACK_IMPORTED_MODULE_8__.A,{message:"Error",description:errorMessageText,type:"error",showIcon:!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:"Your domain"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Button_Collapse_Input_Space_Spin_Typography_antd__WEBPACK_IMPORTED_MODULE_9__.A.Search,{addonBefore:"https://",onInput:e=>{if(":"===e.nativeEvent.data)return;setHost(e.target.value);const h=`https://${e.target.value}`;var url;url=h,(0,_utils_validators__WEBPACK_IMPORTED_MODULE_5__.AY)(url)&&url.includes(".")?setValid(!0):setValid(!1)},type:"url",value:host,placeholder:"yoursite.com",status:!valid&&host.length>0?"error":void 0,onSearch:async()=>{if(valid){setLoading(!0);try{const url=`/api/auth/indieauth?accessToken=${accessToken}`,data={authHost:`https://${host}`},rawResponse=await fetch(url,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(data)}),content=await rawResponse.json();if(content.message)return setErrorMessage(content.message),void setLoading(!1);if(!content.redirect)return setErrorMessage("Auth provider did not return a redirect URL."),void setLoading(!1);if(content.redirect){const{redirect}=content;window.location=redirect}}catch(e){setErrorMessage(e.message)}setLoading(!1)}},enterButton:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Button_Collapse_Input_Space_Spin_Typography_antd__WEBPACK_IMPORTED_MODULE_10__.A,{type:valid?"primary":"default",disabled:!valid||0===host.length,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(CheckCircleOutlined,{})})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Button_Collapse_Input_Space_Spin_Typography_antd__WEBPACK_IMPORTED_MODULE_3__.A,{ghost:!0,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Panel,{header:"Learn more about using IndieAuth to authenticate with chat.",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:"IndieAuth allows for a completely independent and decentralized way of identifying yourself using your own domain."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p",{children:["If you run an Owncast instance, you can use that domain here. Otherwise,"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Link,{href:"https://indieauth.net/#providers",children:"learn more about how you can support IndieAuth"}),"."]})]},"header")}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("strong",{children:"Note"}),": This is for authentication purposes only, and no personal information will be accessed or stored."]})]})})};try{IndieAuthModal.displayName="IndieAuthModal",IndieAuthModal.__docgenInfo={description:"",displayName:"IndieAuthModal",props:{authenticated:{defaultValue:null,description:"",name:"authenticated",required:!0,type:{name:"boolean"}},displayName:{defaultValue:null,description:"",name:"displayName",required:!0,type:{name:"string"}},accessToken:{defaultValue:null,description:"",name:"accessToken",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/modals/IndieAuthModal/IndieAuthModal.tsx#IndieAuthModal"]={docgenInfo:IndieAuthModal.__docgenInfo,name:"IndieAuthModal",path:"components/modals/IndieAuthModal/IndieAuthModal.tsx#IndieAuthModal"})}catch(__react_docgen_typescript_loader_error){}},"./components/ui/ComponentError/ComponentError.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{O:()=>ComponentError});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/jsx-runtime.js"),_barrel_optimize_names_Alert_Button_antd__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/antd/es/alert/index.js"),_barrel_optimize_names_Alert_Button_antd__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/antd/es/button/index.js");const openBugReport=()=>{window.open("https://github.com/owncast/owncast/issues/new?assignees=&labels=&template=bug-report-feature-request.yml","_blank")},ErrorContent=({message,componentName,details,canRetry})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:"There was an unexpected error. It would be appreciated if you would report this so it can be fixed in the future."}),!!canRetry&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p",{children:"You may optionally retry, however functionality might not work as expected."}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("code",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:message&&`Error: ${message}`}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{children:["Component: ",componentName]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{children:details&&details})]})]}),ComponentError=({message,componentName,details,retryFunction})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Button_antd__WEBPACK_IMPORTED_MODULE_1__.A,{message:"Error",showIcon:!0,description:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ErrorContent,{message,details,componentName,canRetry:!!retryFunction}),type:"error",action:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[retryFunction&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Button_antd__WEBPACK_IMPORTED_MODULE_2__.A,{ghost:!0,size:"small",onClick:retryFunction,children:"Retry"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_barrel_optimize_names_Alert_Button_antd__WEBPACK_IMPORTED_MODULE_2__.A,{ghost:!0,size:"small",danger:!0,onClick:openBugReport,children:"Report Error"})]})});try{ComponentError.displayName="ComponentError",ComponentError.__docgenInfo={description:"",displayName:"ComponentError",props:{message:{defaultValue:null,description:"",name:"message",required:!1,type:{name:"string"}},componentName:{defaultValue:null,description:"",name:"componentName",required:!0,type:{name:"string"}},details:{defaultValue:null,description:"",name:"details",required:!1,type:{name:"string"}},retryFunction:{defaultValue:null,description:"",name:"retryFunction",required:!1,type:{name:"() => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/ui/ComponentError/ComponentError.tsx#ComponentError"]={docgenInfo:ComponentError.__docgenInfo,name:"ComponentError",path:"components/ui/ComponentError/ComponentError.tsx#ComponentError"})}catch(__react_docgen_typescript_loader_error){}},"./utils/validators.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AY:()=>isValidUrl,JP:()=>isValidFediverseAccount,vI:()=>DEFAULT_TEXTFIELD_URL_PATTERN});const DEFAULT_TEXTFIELD_URL_PATTERN="https?://.*";function isValidUrl(url,validProtocols=["http:","https:"]){try{const validationObject=new URL(url);if(""===validationObject.protocol||""===validationObject.hostname||!validProtocols.includes(validationObject.protocol))return!1}catch(e){return!1}return!0}function isValidFediverseAccount(account){const sanitized=account.replace(/^@+/,"");return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(sanitized).toLowerCase())}},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/modals/AuthModal/AuthModal.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".A16QFfaJ4cobnElmenNd{flex-direction:row;display:flex;justify-content:center;align-items:center}.A16QFfaJ4cobnElmenNd .zfb1REE440DtUTe19ZvA{height:15px;padding-right:5px}","",{version:3,sources:["webpack://./components/modals/AuthModal/AuthModal.module.scss"],names:[],mappings:"AAAA,sBACE,kBAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA,CAEA,4CACE,WAAA,CACA,iBAAA",sourcesContent:[".tabContent {\n  flex-direction: row;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  .icon {\n    height: 15px;\n    padding-right: 5px;\n  }\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={tabContent:"A16QFfaJ4cobnElmenNd",icon:"zfb1REE440DtUTe19ZvA"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[17].use[1]!./node_modules/resolve-url-loader/index.js!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[17].use[3]!./components/modals/FediAuthModal/FediAuthModal.module.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".AFFWVbJomufBXfHPzW0d{display:flex;justify-content:center;flex-direction:column}.AFFWVbJomufBXfHPzW0d .x63iu67imRumXk_ZW6W5{font-size:1.6rem;font-family:monospace;max-width:220px;margin:auto;text-align:center;letter-spacing:6px;border-color:var(--theme-color-palette-9);color:var(--theme-color-palette-9)}.AFFWVbJomufBXfHPzW0d .hoCXtQEUFKO8yU2i2UI6{max-width:150px;margin:auto;margin-top:10px}","",{version:3,sources:["webpack://./components/modals/FediAuthModal/FediAuthModal.module.scss"],names:[],mappings:"AAAA,sBAkBE,YAAA,CACA,sBAAA,CACA,qBAAA,CAnBA,4CACE,gBAAA,CACA,qBAAA,CACA,eAAA,CACA,WAAA,CACA,iBAAA,CACA,kBAAA,CACA,yCAAA,CACA,kCAAA,CAGF,4CACE,eAAA,CACA,WAAA,CACA,eAAA",sourcesContent:[".codeInputContainer {\n  .codeInput {\n    font-size: 1.6rem;\n    font-family: monospace;\n    max-width: 220px;\n    margin: auto;\n    text-align: center;\n    letter-spacing: 6px;\n    border-color: var(--theme-color-palette-9);\n    color: var(--theme-color-palette-9);\n  }\n\n  .submitButton {\n    max-width: 150px;\n    margin: auto;\n    margin-top: 10px;\n  }\n\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n"],sourceRoot:""}]),___CSS_LOADER_EXPORT___.locals={codeInputContainer:"AFFWVbJomufBXfHPzW0d",codeInput:"x63iu67imRumXk_ZW6W5",submitButton:"hoCXtQEUFKO8yU2i2UI6"};const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___}}]);