import{a as L}from"./chunk-UNT5N7K4.js";import{Ab as v,Ac as w,Bb as M,Db as b,Ga as F,Ha as q,J as t,Kb as y,Lb as Q,Mb as U,O as B,P as d,Rb as D,Sb as P,T as O,Wa as E,aa as r,ha as i,hc as h,ia as p,ic as X,ja as m,la as R,ma as J,nc as N,pb as n,qa as k,qb as z,ra as j,rb as u,sa as g,sb as s,u as c,ua as S,wc as H,x as V,xb as f,xc as K,y as _,yc as I,zb as C,zc as G}from"./chunk-WP53WVDH.js";import"./chunk-4CLCTAJ7.js";var x=(()=>{class o{constructor(){this.controlContainer=c(z)}ngOnInit(){this.form=this.controlContainer.control}static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275cmp=d({type:o,selectors:[["app-address"]],decls:7,vars:7,consts:[[3,"formGroup"],["formControlName","street","p-label","Endere\xE7o","p-placeholder","Ex: Rua Exemplo","p-required","","p-clean","",3,"p-no-autocomplete"],["formControlName","addressNumber","p-label","N\xFAmero","p-placeholder","123","p-required","","p-clean","",3,"p-no-autocomplete"],["formControlName","city","p-label","Cidade","p-placeholder","S\xE3o Paulo","p-required","","p-clean","",3,"p-no-autocomplete"],["formControlName","state","p-label","Estado","p-placeholder","SP","p-required","","p-clean","",3,"p-no-autocomplete"],["formControlName","zipCode","p-label","CEP","p-placeholder","00000-000","p-required","","p-clean","",3,"p-no-autocomplete"],["formControlName","complement","p-label","Complemento","p-placeholder","Ex: Apartamento 123","p-clean","",3,"p-no-autocomplete"]],template:function(e,a){e&1&&(i(0,"form",0),m(1,"po-input",1)(2,"po-number",2)(3,"po-input",3)(4,"po-input",4)(5,"po-input",5)(6,"po-input",6),p()),e&2&&(r("formGroup",a.form),t(),r("p-no-autocomplete",!0),t(),r("p-no-autocomplete",!0),t(),r("p-no-autocomplete",!0),t(),r("p-no-autocomplete",!0),t(),r("p-no-autocomplete",!0),t(),r("p-no-autocomplete",!0))},dependencies:[b,f,u,s,C,v,N,h,X,P],encapsulation:2})}}return o})();var Y=(()=>{class o{constructor(){this.fb=c(M)}ngOnInit(){this.form=this.onFormBuild()}onFormBuild(){return this.fb.group({name:["",n.required],document:["",n.required],street:["",n.required],addressNumber:[0,n.required],city:["",n.required],state:["",n.required],zipCode:["",n.required],complement:[""]})}static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275cmp=d({type:o,selectors:[["app-person"]],decls:12,vars:7,consts:[["p-title","Pessoas"],[3,"formGroup"],["p-label","Dados Gerais",3,"p-active"],["formControlName","name","p-label","Nome","p-placeholder","Jo\xE3o da Silva","p-clean","","p-required","",3,"p-no-autocomplete"],["formControlName","document","p-label","CPF","p-placeholder","000.000.000-00","p-mask","999.999.999-99","p-clean","","p-required","",3,"p-no-autocomplete"],["p-label","Endere\xE7o"],["p-label","JSON"]],template:function(e,a){e&1&&(i(0,"po-container",0)(1,"form",1)(2,"po-tabs")(3,"po-tab",2),m(4,"po-input",3)(5,"po-input",4),p(),i(6,"po-tab",5),m(7,"app-address"),p(),i(8,"po-tab",6)(9,"pre"),g(10),F(11,"json"),p()()()()()),e&2&&(t(),r("formGroup",a.form),t(2),r("p-active",!0),t(),r("p-no-autocomplete",!0),t(),r("p-no-autocomplete",!0),t(5),S(" ",q(11,5,a.form.getRawValue()),""))},dependencies:[b,f,u,s,C,v,P,D,N,h,w,I,G,x,E],encapsulation:2})}}return o})();var Z=(()=>{class o{constructor(){this.fb=c(M)}ngOnInit(){this.form=this.onFormBuild()}onFormBuild(){return this.fb.group({name:["",n.required],document:["",n.required],street:["AV. XISTO",n.required],addressNumber:[0,n.required],city:["S\xE3o Paulo",n.required],state:["SP",n.required],zipCode:["",n.required],complement:[""]})}static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275cmp=d({type:o,selectors:[["app-seller"]],decls:12,vars:7,consts:[["p-title","Vendedores"],[3,"formGroup"],["p-label","Dados Gerais",3,"p-active"],["formControlName","name","p-label","Nome","p-placeholder","Jo\xE3o da Silva","p-clean","","p-required","",3,"p-no-autocomplete"],["formControlName","document","p-label","CNPJ","p-placeholder","00.000.000/0000-00","p-mask","99.999.999/9999-99","p-clean","","p-required","",3,"p-no-autocomplete"],["p-label","Endere\xE7o"],["p-label","JSON"]],template:function(e,a){e&1&&(i(0,"po-container",0)(1,"form",1)(2,"po-tabs")(3,"po-tab",2),m(4,"po-input",3)(5,"po-input",4),p(),i(6,"po-tab",5),m(7,"app-address"),p(),i(8,"po-tab",6)(9,"pre"),g(10),F(11,"json"),p()()()()()),e&2&&(t(),r("formGroup",a.form),t(2),r("p-active",!0),t(),r("p-no-autocomplete",!0),t(),r("p-no-autocomplete",!0),t(5),S(" ",q(11,5,a.form.getRawValue()),""))},dependencies:[b,f,u,s,C,v,P,D,N,h,w,I,G,E,x],encapsulation:2})}}return o})();var $=(()=>{class o extends L{constructor(){super(""),this.accordionItem=B.required(y)}ngAfterContentInit(){this.accordionItem().expand()}static{this.\u0275fac=function(e){return new(e||o)}}static{this.\u0275cmp=d({type:o,selectors:[["app-control-container"]],viewQuery:function(e,a){e&1&&k(a.accordionItem,y,5),e&2&&j()},features:[O],decls:9,vars:0,consts:[["person",""],["seller",""],["p-title","Formul\xE1rios","p-subtitle","Control Container",3,"p-back"],[1,"po-row"],[1,"po-sm-12","po-md-12","po-lg-12","po-xl-12","po-mb-5"],["p-label","Pessoas"],["p-label","Vendedores"]],template:function(e,a){if(e&1){let ee=R();i(0,"po-page-detail",2),J("p-back",function(){return V(ee),_(a.onBack())}),i(1,"div",3)(2,"po-accordion",4)(3,"po-accordion-item",5,0),m(5,"app-person"),p(),i(6,"po-accordion-item",6,1),m(8,"app-seller"),p()()()()}},dependencies:[K,H,Y,Z,U,Q,y],encapsulation:2})}}return o})();var Ie=[{path:"",title:"Formul\xE1rios",children:[{path:"container-form",pathMatch:"full",title:"Formul\xE1rios | Control Container",component:$}]}];export{Ie as FORMS_ROUTES};
