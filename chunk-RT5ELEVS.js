import{$a as U,Aa as G,Ab as _,Ba as Q,Bb as k,Cb as N,Eb as K,Fa as M,Fb as X,G as a,H as F,Hb as Y,Ib as Z,Ja as R,L as l,Lb as P,N as p,Rb as ee,Tb as te,Z as s,ba as i,bb as S,ca as r,cb as b,da as h,eb as j,fa as I,ga as u,gb as W,h as w,hb as v,j as q,jb as O,ka as d,kb as $,la as T,lb as z,ma as V,mb as H,nb as J,oa as x,pa as D,qa as L,sa as A,u as f,x as C,y as g,za as B,zb as y}from"./chunk-LDDZ43SR.js";import"./chunk-4CLCTAJ7.js";var ie=(()=>{class o{constructor(e){this.fb=e,this.counter=l(0),this.info=B(()=>`O nome agora \xE9 ${this.name()} e o valor do contador era ${Q(this.counter)} quando o nome mudou`),this.name=l("Nome n\xE3o informado"),this.titleCasePipe=f(M),this.form=this.fb.group({name:["",U.required]})}ngOnInit(){this.form.valueChanges.pipe(q(500),w(e=>(e.name=e.name||"Nome n\xE3o informado",e))).subscribe({next:e=>this.name.update(t=>t=this.titleCasePipe.transform(e.name))})}incrementCount(){this.counter.update(e=>e+1)}static{this.\u0275fac=function(t){return new(t||o)(F(z))}}static{this.\u0275cmp=p({type:o,selectors:[["app-untracked"]],features:[A([M])],decls:8,vars:3,consts:[["p-title","Exemplo Untracked"],[1,"po-row",3,"formGroup"],["formControlName","name","p-placeholder","Digite o nome aqui","p-label","Nome","p-clean","","p-required","",1,"po-sm-12","po-mb-2"],["p-label","Incrementar Contador",1,"po-mb-2","po-sm-12","po-md-12","po-lg-3","po-xl-2",3,"p-click"],[1,"po-mb-1","po-sm-12"],[1,"po-sm-12"]],template:function(t,n){t&1&&(i(0,"po-container",0)(1,"form",1),h(2,"po-input",2),i(3,"po-button",3),u("p-click",function(){return n.incrementCount()}),r(),i(4,"p",4),d(5),r(),i(6,"p",5),d(7),r()()()),t&2&&(a(),s("formGroup",n.form),a(4),T(n.info()),a(2),V("Contador Atual: ",n.counter(),""))},dependencies:[R,_,y,P,Y,N,k,J,v,S,b,O,$],encapsulation:2})}}return o})();var re=(()=>{class o{constructor(){this.courses=[{value:"BEGINNERS",label:"Angular para Iniciantes",defaultQuantity:10},{value:"SIGNALS",label:"Angular | Se aprofundando em Signals",defaultQuantity:20},{value:"SSR",label:"Angular | Se aprofundando em SSR",defaultQuantity:30}],this.selectedCourse=l("BEGINNERS"),this.quantity=G({source:()=>({courseCode:this.selectedCourse}),computation:e=>this.courses.find(t=>t.value===e.courseCode())?.defaultQuantity??1}),this.poNotificationService=f(K)}onQuantityChanged(e){this.quantity.set(parseInt(e))}onAddToCart(){this.poNotificationService.success(`${this.quantity()} adicionado para o curso ${this.selectedCourse()}`)}onCourseSelected(e){this.selectedCourse.set(e)}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275cmp=p({type:o,selectors:[["app-linked"]],decls:8,vars:6,consts:[["f","ngForm"],["p-title","Exemplo Linked"],[1,"po-font-subtitle","po-mb-2"],["name","courses","p-label","Cursos","p-placeholder","Selecione um curso","p-clean","",3,"p-change","p-options","p-remove-initial-filter","p-required"],["name","quantity",3,"ngModelChange","ngModel","p-min","p-max"],["p-label","Adicionar ao carrinho",3,"p-click"]],template:function(t,n){if(t&1){let c=I();i(0,"po-container",1)(1,"h1",2),d(2,"Carrinho de compras"),r(),i(3,"form",null,0)(5,"po-combo",3),u("p-change",function(m){return C(c),g(n.onCourseSelected(m))}),r(),i(6,"po-number",4),L("ngModelChange",function(m){return C(c),D(n.quantity,m)||(n.quantity=m),g(m)}),r()(),i(7,"po-button",5),u("p-click",function(){return C(c),g(n.onAddToCart())}),r()()}t&2&&(a(5),s("p-options",n.courses)("p-remove-initial-filter",!0)("p-required",!0),a(),x("ngModel",n.quantity),s("p-min",0)("p-max",10))},dependencies:[N,k,_,y,P,X,Z,H,v,S,b,W,j],encapsulation:2})}}return o})();var _e=(()=>{class o{static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275cmp=p({type:o,selectors:[["app-signals-sample"]],decls:3,vars:0,consts:[["p-title","Exemplos Signals","p-subtitle","Exemplos de uso de Signals"]],template:function(t,n){t&1&&(i(0,"po-page-default",0),h(1,"app-untracked")(2,"app-linked"),r())},dependencies:[te,ee,ie,re],encapsulation:2})}}return o})();export{_e as SignalsSampleComponent};
