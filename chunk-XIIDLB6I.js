import{a}from"./chunk-G2ANY3IU.js";import{a as V}from"./chunk-HIUZRFYO.js";import{A as c,Bb as B,Cb as M,G as e,Ga as S,H as h,Hb as _,Ja as x,Lb as k,N as f,R as g,Sb as L,Tb as T,Z as o,ba as t,bb as j,ca as i,cb as D,da as C,g as n,ga as v,jb as I,ka as p,kb as A,la as b,lb as P,ma as l,mb as F,nb as G,u as d,ua as E,va as y,za as N}from"./chunk-LDDZ43SR.js";import"./chunk-4CLCTAJ7.js";var Z=(()=>{class s extends V{constructor(u){super("signals/samples"),this.fb=u,this.exampleData={name:"Danilo Salve",buildingName:"Casa",buildingNumber:"123",streetAddress:"Rua Xpto",city:"S\xE3o Paulo",state:"SP",country:"Brasil",postalCode:"00000000"},this.getterCallCount=0,this.signalCallCount=0,this.injector=d(c),this.fullAddressSignal=N(()=>(this.signalCallCount++,[this.buildingName?.(),this.buildingNumber?.(),this.streetAddress?.(),this.city?.(),this.state?.(),this.country?.(),this.postalCode?.()].filter(Boolean).join(", "))),this.form=this.fb.group({name:"",buildingName:[""],buildingNumber:[""],streetAddress:[""],city:[""],state:[""],country:[""],postalCode:[""]}),this.buildingName=a(this.form.controls.buildingName.valueChanges??n(void 0),{injector:this.injector}),this.buildingNumber=a(this.form.controls.buildingNumber.valueChanges??n(void 0),{injector:this.injector}),this.streetAddress=a(this.form.controls.streetAddress.valueChanges??n(void 0),{injector:this.injector}),this.city=a(this.form.controls.city.valueChanges??n(void 0),{injector:this.injector}),this.state=a(this.form.controls.state.valueChanges??n(void 0),{injector:this.injector}),this.country=a(this.form.controls.country.valueChanges??n(void 0),{injector:this.injector}),this.postalCode=a(this.form.controls.postalCode.valueChanges??n(void 0),{injector:this.injector}),this.form.patchValue(this.exampleData)}get fullAddressGetter(){return this.getterCallCount++,[this.form.value.buildingName,this.form.value.buildingNumber,this.form.value.streetAddress,this.form.value.city,this.form.value.state,this.form.value.country,this.form.value.postalCode].filter(Boolean).join(", ")}static{this.\u0275fac=function(m){return new(m||s)(h(P))}}static{this.\u0275cmp=f({type:s,selectors:[["app-signals-form"]],features:[g],decls:25,vars:17,consts:[["p-title","Signals Form","p-subtitle","Compara\xE7\xE3o de Signals vs GET",3,"p-back"],[1,"po-row"],["p-title","Formul\xE1rio",1,"po-mb-2","po-sm-12",3,"formGroup"],["formControlName","name","p-label","Nome","p-placeholder","EX: Danilo Salve","p-help","Informe o seu nome","p-pattern","^[\\D]*$","p-error-pattern","Valor digitado inv\xE1lido, preencha o campo somente com Letras","p-icon","an an-user","p-clean","",1,"po-sm-12","po-md-12","po-lg-7","po-xl-7",3,"p-no-autocomplete"],["formControlName","buildingName","p-label","Descri\xE7\xE3o do endere\xE7o","p-placeholder","Ex: Trabalho","p-help","Informe o tipo de endere\xE7o","p-icon","an an-warehouse","p-clean","",1,"po-sm-12","po-md-6","po-lg-7","po-xl-7",3,"p-no-autocomplete"],["formControlName","postalCode","p-label","CEP","p-placeholder","00000-000","p-help","Informe o CEP","p-mask","99999-999","p-clean","",1,"po-sm-12","po-md-6","po-lg-5","po-xl-5",3,"p-no-autocomplete"],["formControlName","streetAddress","p-label","Logradouro","p-placeholder","Ex: Avenida Xpto","p-help","Informe o Logradouro","p-icon","an an-map-pin","p-clean","",1,"po-sm-12","po-md-12","po-lg-7","po-xl-7",3,"p-no-autocomplete"],["formControlName","buildingNumber","p-label","N\xFAmero","p-placeholder","0","p-help","Informe o n\xFAmero do logradouro","p-clean","",1,"po-sm-12","po-md-12","po-lg-5","po-xl-5",3,"p-no-autocomplete"],["formControlName","city","p-label","Cidade","p-placeholder","Ex: S\xE3o Paulo","p-help","Informe o nome da cidade","p-icon","an an-city","p-error-pattern","Valor digitado inv\xE1lido, preencha o campo somente com Letras","p-pattern","^[\\D]*$","p-clean","",1,"po-sm-12","po-md-6","po-lg-5","po-xl-5",3,"p-no-autocomplete"],["formControlName","state","p-label","Estado","p-placeholder","Ex: SP","p-help","Informe a sigla do estado","p-mask","@@","p-clean","",1,"po-sm-12","po-md-6","po-lg-2","po-xl-2",3,"p-no-autocomplete","p-upper-case"],["formControlName","country","p-label","Pais","p-placeholder","Ex: Brasil","p-help","Informe o nome do pa\xEDs","p-error-pattern","Valor digitado inv\xE1lido, preencha o campo somente com Letras","p-pattern","^[\\D]*$","p-clean","",1,"po-sm-12","po-md-6","po-lg-5","po-xl-5",3,"p-no-autocomplete"],["p-title","Resultados:",1,"po-mb-5","po-sm-12"]],template:function(m,r){m&1&&(t(0,"po-page-detail",0),v("p-back",function(){return r.onBack()}),t(1,"div",1)(2,"po-container",2),C(3,"po-input",3)(4,"po-input",4)(5,"po-input",5)(6,"po-input",6)(7,"po-input",7)(8,"po-input",8)(9,"po-input",9)(10,"po-input",10),i(),t(11,"po-container",11)(12,"h3"),p(13,"Example Data"),i(),t(14,"pre"),p(15),E(16,"json"),i(),t(17,"p"),p(18),i(),t(19,"p"),p(20),i(),t(21,"p"),p(22),i(),t(23,"p"),p(24),i()()()()),m&2&&(e(2),o("formGroup",r.form),e(),o("p-no-autocomplete",!0),e(),o("p-no-autocomplete",!0),e(),o("p-no-autocomplete",!0),e(),o("p-no-autocomplete",!0),e(),o("p-no-autocomplete",!0),e(),o("p-no-autocomplete",!0),e(),o("p-no-autocomplete",!0)("p-upper-case",!0),e(),o("p-no-autocomplete",!0),e(5),b(y(16,15,r.exampleData)),e(3),l("Address (Getter): ",r.fullAddressGetter,""),e(2),l("Address (Computed Signal): ",r.fullAddressSignal(),""),e(2),l("Getter Call Count: ",r.getterCallCount,""),e(2),l("Computed Signal Call Count: ",r.signalCallCount,""))},dependencies:[x,S,T,L,k,_,M,B,F,j,D,G,I,A],encapsulation:2})}}return s})();export{Z as SignalsFormComponent};
