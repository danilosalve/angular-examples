import{a as L}from"./chunk-GDNKVTJS.js";import{a as D}from"./chunk-PWD5EPYB.js";import{D as v,Ga as E,Ha as B,W as P,X as W,q as S,r as y,ra as b,sa as I,t as F,v as M,w,xa as T}from"./chunk-LUFRNRS2.js";import{Ac as g,Bc as p,Cc as d,Sb as l,bc as o,cc as r,hb as a,ia as C,jc as _,rb as m,vb as u,wc as f,xc as h,zb as N}from"./chunk-FC34NM5Q.js";import"./chunk-4CLCTAJ7.js";var q=(()=>{class i{constructor(){this.firstName=m.required(),this.lastName=m.required(),this.age=m.required()}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275cmp=u({type:i,selectors:[["app-child-form"]],inputs:{firstName:[1,"firstName"],lastName:[1,"lastName"],age:[1,"age"]},outputs:{firstName:"firstNameChange",lastName:"lastNameChange",age:"ageChange"},decls:4,vars:7,consts:[["name","firstName","p-label","Nome","p-placeholder","Informe o nome","p-pattern","^[A-Z][a-z]+$","p-error-pattern","Informe somente Letras - Somente a primeira letra deve ser mai\xFAscula","p-required","","p-clean","",3,"ngModelChange","ngModel","p-no-autocomplete"],["name","lastName","p-label","Sobrenome","p-placeholder","Informe o Sobrenome","p-pattern","^[A-Z][a-z]+$","p-error-pattern","Informe somente Letras - Somente a primeira letra deve ser mai\xFAscula","p-required","","p-clean","",3,"ngModelChange","ngModel","p-no-autocomplete"],["name","age","p-label","Idade","p-placeholder","0","p-clean","",3,"ngModelChange","ngModel","p-min","p-no-autocomplete"]],template:function(n,e){n&1&&(o(0,"form")(1,"po-input",0),d("ngModelChange",function(t){return p(e.firstName,t)||(e.firstName=t),t}),r(),o(2,"po-input",1),d("ngModelChange",function(t){return p(e.lastName,t)||(e.lastName=t),t}),r(),o(3,"po-number",2),d("ngModelChange",function(t){return p(e.age,t)||(e.age=t),t}),r()()),n&2&&(a(),g("ngModel",e.firstName),l("p-no-autocomplete",!0),a(),g("ngModel",e.lastName),l("p-no-autocomplete",!0),a(),g("ngModel",e.age),l("p-min",0)("p-no-autocomplete",!0))},dependencies:[T,b,I,v,w,S,y,M,F],encapsulation:2})}}return i})();var X=(()=>{class i extends D{constructor(){super("signals/samples"),this.deviceService=C(L),this.firstName=m(""),this.lastName=m(""),this.age=m(0),this.containerHeight=this.deviceService.isSmartPhone()||this.deviceService.isTable()?0:340}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275cmp=u({type:i,selectors:[["app-signals-form-simple"]],inputs:{firstName:[1,"firstName"],lastName:[1,"lastName"],age:[1,"age"]},outputs:{firstName:"firstNameChange",lastName:"lastNameChange",age:"ageChange"},features:[N],decls:11,vars:8,consts:[["p-title","Formul\xE1rio Simples","p-subtitle","Formul\xE1rio Signal sem ReactForm",3,"p-back"],[1,"po-row"],["p-title","Componente Filho",1,"po-sm-12","po-md-12","po-lg-6","po-xl-6",3,"p-height"],[3,"firstNameChange","lastNameChange","ageChange","firstName","lastName","age"],["p-title","Resultado",1,"po-sm-12","po-md-12","po-lg-6","po-xl-6",3,"p-height"],[1,"po-font-text"]],template:function(n,e){n&1&&(o(0,"po-page-detail",0),_("p-back",function(){return e.onBack()}),o(1,"div",1)(2,"po-container",2)(3,"app-child-form",3),d("firstNameChange",function(t){return p(e.firstName,t)||(e.firstName=t),t})("lastNameChange",function(t){return p(e.lastName,t)||(e.lastName=t),t})("ageChange",function(t){return p(e.age,t)||(e.age=t),t}),r()(),o(4,"po-container",4)(5,"pre",5),f(6),r(),o(7,"pre",5),f(8),r(),o(9,"pre",5),f(10),r()()()()),n&2&&(a(2),l("p-height",e.containerHeight),a(),g("firstName",e.firstName)("lastName",e.lastName)("age",e.age),a(),l("p-height",e.containerHeight),a(2),h(e.firstName()),a(2),h(e.lastName()),a(2),h(e.age()))},dependencies:[B,E,q,W,P],encapsulation:2})}}return i})();export{X as SignalsFormSimpleComponent};
