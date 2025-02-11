import{b as ue}from"./chunk-4F6G6MIB.js";import{Aa as B,Ba as K,Cb as z,D as u,Dc as de,E as D,Ec as me,G as g,Ga as E,Hb as H,Ia as M,J as n,Jb as G,Nb as J,O as y,Ob as X,P as f,Rb as Y,S as $,Sb as Z,U as x,Xa as N,aa as a,ab as U,ba as O,bc as ee,ca as C,cc as te,ea as W,fa as S,ga as w,ha as r,ia as p,ja as d,jc as P,kc as oe,la as j,lc as ie,ma as V,n as k,na as v,nc as ne,pc as re,q as Q,qa as L,qc as pe,ra as I,rc as ae,sa as c,sc as se,ta as A,u as _,ua as b,vc as ce,x as F,xc as le,y as q,za as R}from"./chunk-WP53WVDH.js";import"./chunk-4CLCTAJ7.js";function Pe(e,s){if(e&1&&d(0,"i"),e&2){let t=s.$index,o=v();O(o.getStarClass(t+1))}}function _e(e,s){if(e&1&&(r(0,"p",1),c(1),p()),e&2){let t=v();n(),b("Avalia\xE7\xF5es: (",t.count(),")")}}var fe=(()=>{class e{constructor(){this.rating=u.required(),this.max=u.required(),this.count=u(0),this.stars=[]}ngOnInit(){for(let t=0;t<this.max();t++)this.stars.push(t)}getStarClass(t){return t<=this.rating()?"an-fill an-star":t-1+.5<this.rating()?"an-fill an-star-half":"an an-star"}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=f({type:e,selectors:[["app-rating"]],inputs:{rating:[1,"rating"],max:[1,"max"],count:[1,"count"]},decls:3,vars:1,consts:[[3,"class"],[1,"po-font-text-smaller"]],template:function(o,i){o&1&&(S(0,Pe,1,2,"i",0,W),x(2,_e,2,1,"p",1)),o&2&&(w(i.stars),n(2),C(i.count()?2:-1))},encapsulation:2})}}return e})();var xe=["poImage"],he=(()=>{class e{constructor(){this.poImageRef=y.required("poImage",{read:D}),this.product=u.required(),this.height=250}ngOnInit(){this.isSmartPhone()&&(this.height=420)}isSmartPhone(){return window.innerWidth<481}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=f({type:e,selectors:[["app-product-card"]],viewQuery:function(o,i){o&1&&L(i.poImageRef,xe,5,D),o&2&&I()},inputs:{product:[1,"product"]},decls:15,vars:15,consts:[["poImage",""],[1,"po-sm-12","po-md-12","po-lg-6","po-xl-4","po-mb-2",3,"p-height"],[1,"po-row"],[1,"po-md-5","po-lg-5"],["p-loading","lazy",3,"p-src","p-alt"],["p-trigger","click","p-title","Descri\xE7\xE3o","p-position","bottom",3,"p-target","p-hide-arrow"],[1,"po-md-7","po-lg-7"],[1,"po-font-text-large-bold","po-mb-1"],[1,"po-mb-1",3,"p-value"],["p-label","Pre\xE7o",3,"p-value"],[3,"rating","max","count"]],template:function(o,i){if(o&1&&(r(0,"po-widget",1),R(1),E(2,"currency"),r(3,"div",2)(4,"div",3),d(5,"po-image",4,0),r(7,"po-popover",5),c(8),p()(),r(9,"div",6)(10,"p",7),c(11),p(),d(12,"po-tag",8)(13,"po-info",9)(14,"app-rating",10),p()()()),o&2){let l;a("p-height",i.height);let m=(l=M(2,12,i.product().price,"BRL"))!==null&&l!==void 0?l:0;n(5),a("p-src",i.product().image)("p-alt",i.product().description),n(2),a("p-target",i.poImageRef())("p-hide-arrow",!0),n(),b(" ",i.product().description," "),n(3),A(i.product().title),n(),a("p-value",i.product().category),n(),a("p-value",m.toString()),n(),a("rating",i.product().rating.rate)("max",5)("count",i.product().rating.count)}},dependencies:[me,de,pe,re,G,H,fe,N,se,ae,te,ee],encapsulation:2,changeDetection:0})}}return e})();var ge=(()=>{class e{constructor(){this.apiUrl="https://fakestoreapi.com/products",this.limit=g(10),this.http=_(U),this.getProducts=ue({request:this.limit,loader:({request:t})=>this.http.get(`${this.apiUrl}?limit=${t}`).pipe(k(1))})}updateLimit(t){this.limit.set(t)}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275prov=Q({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var Ce=(()=>{class e{transform(t,o){return o?t.filter(i=>i.title.toLocaleLowerCase().startsWith(o.toLocaleLowerCase())||i.category.toLocaleLowerCase().startsWith(o.toLocaleLowerCase())):t}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275pipe=$({name:"productsSearch",type:e,pure:!0})}}return e})();var Se=(e,s)=>s.id;function we(e,s){if(e&1&&d(0,"app-product-card",7),e&2){let t=s.$implicit;a("product",t)}}function Le(e,s){e&1&&(r(0,"p"),c(1,"Nenhum produto encontrado."),p())}function Ie(e,s){if(e&1&&(S(0,we,1,1,"app-product-card",7,Se,!1,Le,2,0,"p"),E(3,"productsSearch")),e&2){let t=v(),o=K(1);w(M(3,1,o,t.filter()))}}function be(e,s){e&1&&(r(0,"p"),c(1,"Nenhum produto encontrado."),p())}function Re(e,s){e&1&&(r(0,"p",5),c(1,"Ops, ocorreu erro ao tentar listar os Produtos :("),p())}var Ze=(()=>{class e{constructor(){this.filter=g(""),this.filterKeys=["title","category"],this.limit=g(10),this.poSelect=y.required(P),this.productsService=_(ge),this.productsResource=this.productsService.getProducts,this.optionsLimit=[{label:"10",value:10},{label:"15",value:15},{label:"30",value:30}]}ngOnInit(){this.poSelect().modelValue=this.limit()}onChangeLimit(t){this.limit.set(t),this.productsService.updateLimit(this.limit())}onChangeFilter(t){this.filter.set(t.value)}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=f({type:e,selectors:[["app-products"]],viewQuery:function(o,i){o&1&&L(i.poSelect,P,5),o&2&&I()},decls:13,vars:9,consts:[["p-title","Produtos","p-subtitle","Exemplo de uso da API RxResource"],[1,"po-row"],["p-label","Itens por p\xE1gina","name","limit",1,"po-sm-12","po-md-4","po-lg-2","po-xl-2",3,"p-change","p-options"],["p-aria-label","Campos para pesquisa de Produtos",1,"po-sm-12","po-md-8","po-lg-4","po-xl-3","po-mt-md-4","po-mt-lg-4","po-mt-xl-4",3,"p-filter","p-items","p-disabled","p-filter-keys","p-show-listbox"],[1,"po-sm-12","po-md-12","po-lg-12","po-xl-12","po-mb-5"],[1,"po-sm-12","po-md-12","po-lg-12","po-xl-12","po-mb-2"],["p-text","Carregando produtos",3,"hidden"],[3,"product"]],template:function(o,i){if(o&1){let l=j();r(0,"po-page-default",0),R(1)(2)(3)(4),r(5,"div",1)(6,"po-select",2),V("p-change",function(h){return F(l),q(i.onChangeLimit(h))}),p(),r(7,"po-search",3),V("p-filter",function(h){return F(l),q(i.onChangeFilter(h))}),p(),r(8,"po-container",4),x(9,Ie,4,4)(10,be,2,0,"p")(11,Re,2,0,"p",5),d(12,"po-loading-overlay",6),p()()()}if(o&2){n();let l=B(i.productsResource.value()),m=i.productsResource.hasValue(),h=i.productsResource.isLoading(),ve=i.productsResource.error();n(5),a("p-options",i.optionsLimit),n(),a("p-items",l)("p-disabled",!m)("p-filter-keys",i.filterKeys)("p-show-listbox",!0),n(2),C(m?9:10),n(2),C(ve?11:-1),n(),a("hidden",!h)}},dependencies:[le,ce,X,J,Z,Y,ne,P,ie,oe,he,z,Ce],encapsulation:2})}}return e})();export{Ze as ProductsComponent};
