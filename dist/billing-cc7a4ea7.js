"use strict";(self.webpackJsonpCheckout=self.webpackJsonpCheckout||[]).push([[876],{48574:(e,t,n)=>{n.r(t),n.d(t,{default:()=>N});var r=n(97582),s=n(91074),i=n(67627),a=n(92574),o=n(19053),d=n(95593),l=n(88870),u=n(69638),c=n(55409),g=n(76741),m=n(74161),p=n(98119),h=n(76417),f=n(19686),v=n(56204),b=n(6803),A=n(97204),C=n(24648),_=n(75667),E=n(78500),Z=n(96543),y=n(34323),k=n(17175),S=n(67570),F=n(60452),w=n(16206),B=n(78379),U=n(45855),I=n(77683);const M=(0,v.Z)((0,h.withFormik)({handleSubmit:function(e,t){(0,t.props.onSubmit)(e)},mapPropsToValues:function(e){var t=e.getFields,n=e.customerMessage,s=e.billingAddress;return(0,r.__assign)((0,r.__assign)({},(0,Z.Z)(t(s&&s.countryCode),s)),{orderComment:n})},isInitialValid:function(e){var t=e.billingAddress,n=e.getFields,r=e.language;return!!t&&(0,y.Z)({language:r,formFields:n(t.countryCode)}).isValidSync(t)},validationSchema:function(e){var t=e.language,n=e.getFields;return"amazonpay"===e.methodId?(0,f.Vo)((function(e){return(0,k.Z)({translate:(0,y.w)(t),formFields:n(e&&e.countryCode)})})):(0,f.Vo)((function(e){return(0,y.Z)({language:t,formFields:n(e&&e.countryCode)})}))},enableReinitialize:!0})((function(e){var t=e.googleMapsApiKey,n=e.billingAddress,s=e.countriesWithAutocomplete,d=e.customer,l=d.addresses,u=d.isGuest,c=e.getFields,g=e.countries,m=e.isUpdating,p=e.setFieldValue,h=e.shouldShowOrderComments,f=e.values,v=e.methodId,Z=e.isFloatingLabelEnabled,y=e.updateAddress,k=e.onUnhandledError,M=(0,i.useState)(!1),z=M[0],L=M[1],P=(0,i.useRef)(null),N=(0,b.Z)(),V=N.isPayPalAxoEnabled,K=N.mergedBcAndPayPalConnectAddresses,O="amazonpay"===v,x=c(f.countryCode),W=x.filter((function(e){return e.custom})),R=W.length>0,G=O&&R?W:x,J=V?K:l,T=(null==J?void 0:J.length)>0,D=n&&(0,A.Z)(n,J,c(n.countryCode)),H=function(e){return(0,r.__awaiter)(void 0,void 0,void 0,(function(){var t;return(0,r.__generator)(this,(function(n){switch(n.label){case 0:L(!0),n.label=1;case 1:return n.trys.push([1,3,4,5]),[4,y(e)];case 2:return n.sent(),[3,5];case 3:return(t=n.sent())instanceof Error&&k(t),[3,5];case 4:return L(!1),[7];case 5:return[2]}}))}))};return i.createElement(w.Z,{autoComplete:"on"},O&&n&&i.createElement("div",{className:"form-fieldset"},i.createElement(I.Z,{address:n})),i.createElement(B.Z,{id:"checkoutBillingAddress",ref:P},T&&!O&&i.createElement(B.Z,{id:"billingAddresses"},i.createElement(U.Z,{isLoading:z},i.createElement(C.Z,{addresses:J,onSelectAddress:H,onUseNewAddress:function(){H({})},selectedAddress:D?n:void 0,type:_.Z.Billing}))),!D&&i.createElement(o.Z,{isLoading:z},i.createElement(E.Z,{countries:g,countriesWithAutocomplete:s,countryCode:f.countryCode,formFields:G,googleMapsApiKey:t,isFloatingLabelEnabled:Z,setFieldValue:p,shouldShowSaveAddress:!u}))),h&&i.createElement(S.Z,null),i.createElement("div",{className:"form-actions"},i.createElement(F.ZP,{disabled:m||z,id:"checkout-billing-continue",isLoading:m||z,type:"submit",variant:F.Wu.Primary},i.createElement(a.Z,{id:"common.continue_action"}))))})));var z=n(41957);function L(e){var t=(0,z.Z)(e);return t&&["amazonpay"].indexOf(t.providerId)>-1?t.providerId:void 0}var P=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.handleSubmit=function(e){return(0,r.__awaiter)(t,void 0,void 0,(function(){var t,n,s,i,a,o,u,c,g,m,p=e.orderComment,h=(0,r.__rest)(e,["orderComment"]);return(0,r.__generator)(this,(function(e){switch(e.label){case 0:t=this.props,n=t.updateAddress,s=t.updateCheckout,i=t.customerMessage,a=t.billingAddress,o=t.navigateNextStep,u=t.onUnhandledError,c=[],(g=(0,d.Z)(h))&&!(0,l.Z)(g,a)&&c.push(n(g)),i!==p&&c.push(s({customerMessage:p})),e.label=1;case 1:return e.trys.push([1,3,,4]),[4,Promise.all(c)];case 2:return e.sent(),o(),[3,4];case 3:return(m=e.sent())instanceof Error&&u(m),[3,4];case 4:return[2]}}))}))},t}return(0,r.__extends)(t,e),t.prototype.componentDidMount=function(){return(0,r.__awaiter)(this,void 0,void 0,(function(){var e,t,n,i,a,o;return(0,r.__generator)(this,(function(r){switch(r.label){case 0:e=this.props,t=e.initialize,n=e.onReady,i=void 0===n?s.noop:n,a=e.onUnhandledError,r.label=1;case 1:return r.trys.push([1,3,,4]),[4,t()];case 2:return r.sent(),i(),[3,4];case 3:return(o=r.sent())instanceof Error&&a(o),[3,4];case 4:return[2]}}))}))},t.prototype.render=function(){var e=this.props,t=e.updateAddress,n=e.isInitializing,s=(0,r.__rest)(e,["updateAddress","isInitializing"]);return i.createElement(o.Z,{isLoading:n},i.createElement("div",{className:"checkout-form"},i.createElement("div",{className:"form-legend-container"},i.createElement(p.Z,{testId:"billing-address-heading"},i.createElement(a.Z,{id:"billing.billing_address_heading"}))),i.createElement(M,(0,r.__assign)({},s,{onSubmit:this.handleSubmit,updateAddress:t}))))},t}(i.Component);const N=(0,u.Z)((function(e){var t=e.checkoutService,n=e.checkoutState,r=n.data,s=r.getCheckout,i=r.getConfig,a=r.getCart,o=r.getCustomer,d=r.getBillingAddress,l=r.getBillingAddressFields,u=r.getBillingCountries,p=n.statuses,h=p.isLoadingBillingCountries,f=p.isUpdatingBillingAddress,v=p.isUpdatingCheckout,b=i(),A=o(),C=s(),_=a();if(!(b&&A&&C&&_))return null;var E=b.checkoutSettings,Z=E.enableOrderComments,y=E.googleMapsApiKey,k=["US","CA","AU","NZ"];return E.features["CHECKOUT-4183.checkout_google_address_autocomplete_uk"]&&k.push("GB"),{billingAddress:d(),countries:u()||c.L,countriesWithAutocomplete:k,customer:A,customerMessage:C.customerMessage,getFields:l,googleMapsApiKey:y,initialize:t.loadBillingAddressFields,isInitializing:h(),isUpdating:f()||v(),methodId:L(C),shouldShowOrderComments:Z&&(0,m.Z)(_)<1,updateAddress:t.updateBillingAddress,updateCheckout:t.updateCheckout,isFloatingLabelEnabled:(0,g.Z)(b.checkoutSettings)}}))(P)}}]);
//# sourceMappingURL=billing-cc7a4ea7.js.map