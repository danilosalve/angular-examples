import{Aa as J,Da as K,Fa as X,W as k,X as A,Z as f,_ as Q,la as U,ma as G,ua as N,xa as W,ya as $,za as O}from"./chunk-C7IOG66E.js";import{Ab as P,Cc as B,Da as L,Dc as b,Ea as d,Ec as y,Hc as _,Ia as m,Rb as r,Xb as C,Zc as g,ac as a,bc as p,bd as j,ca as T,cc as u,fb as H,gc as F,hb as n,ia as v,ic as h,jc as l,qb as V,sa as D,sc as R,ta as M,tc as q,ub as c,vc as S,xc as z}from"./chunk-BMGFER63.js";import{d as E}from"./chunk-4CLCTAJ7.js";function oe(o,x){if(o&1&&(a(0,"po-container",1)(1,"div",2),u(2,"po-image",3),p(),a(3,"div",4),u(4,"po-info",5)(5,"po-info",6)(6,"po-info",7),p()()),o&2){let e=l();n(2),r("p-src",e.image())("p-height",240),n(2),r("p-value",e.species()),n(),r("p-value",e.type()),n(),r("p-value",e.episodes().toString())}}var Z=(()=>{class o{constructor(){this.person=d.required(),this.episodes=g(()=>(this.person().episode||[]).length),this.image=g(()=>this.person().image||""),this.species=g(()=>this.person().species||""),this.type=g(()=>this.person().type||"N\xE3o informado")}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275cmp=c({type:o,selectors:[["app-person-detail"]],inputs:{person:[1,"person"]},decls:2,vars:1,consts:[[1,"po-row"],[1,"po-sm-12","po-md-12","po-lg-12","po-xl-12"],[1,"po-md-5","po-lg-5"],["p-alt","Foto do Personagem","p-loading","lazy",3,"p-src","p-height"],[1,"po-md-7","po-lg-7"],["p-label","Especie",3,"p-value"],["p-label","Tipo",3,"p-value"],["p-label","Quantidades de Episodios",3,"p-value"]],template:function(t,i){t&1&&(a(0,"div",0),P(1,oe,7,5,"po-container",1),p()),t&2&&(n(),C(i.person()?1:-1))},dependencies:[J,O,A,k,$,W],encapsulation:2,changeDetection:0})}}return o})();var w=(()=>{class o{constructor(){this.apiUrl="https://rickandmortyapi.com/api/character",this.page=m(1),this.persons=[],this.getPersons=j({request:this.page,loader:i=>E(this,[i],function*({request:e,abortSignal:t}){try{let s=yield(yield fetch(`${this.apiUrl}/?page=${e}`,{signal:t})).json();return this.persons.length>0?this.persons=this.persons.concat(s.results):this.persons=s.results,s=this.persons,s}catch(s){this.handleError(s)}})})}getColumns(){return[{property:"id",label:"Id",sortable:!0,type:"number"},{property:"name",label:"Nome",sortable:!0,type:"string"},{property:"status",label:"Status",sortable:!0,type:"label",visible:this.IsColumnVisible(),labels:[{value:"Alive",color:"color-10",label:"Vivo"},{value:"Dead",color:"color-02",label:"Morto"},{value:"unknown",color:"color-07",label:"Desconhecido"}]},{property:"species",label:"Esp\xE9cie",sortable:!0,type:"string",visible:this.IsColumnVisible()},{property:"gender",label:"G\xEAnero",sortable:!0,type:"label",visible:this.IsColumnVisible(),labels:[{value:"Female",color:"color-06",label:"Feminino"},{value:"Male",color:"color-02",label:"Masculino"},{value:"Genderless",color:"color-08",label:"Sem g\xEAnero"},{value:"unknown",color:"color-07",label:"Desconhecido"}]},{property:"location.name",label:"Localiza\xE7\xE3o",sortable:!0,type:"string",visible:this.IsColumnVisible()},{property:"type",label:"Tipo",sortable:!0,type:"string",visible:!1}]}updatePage(e){this.page.set(e)}handleError(e){throw e}IsColumnVisible(){return window.innerWidth>480}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275prov=T({token:o,factory:o.\u0275fac,providedIn:"root"})}}return o})();var ie=()=>["name"],ee=(()=>{class o{constructor(){this.persons=d.required(),this.isLoading=d(!1),this.viewDetailPerson=L(),this.loadMorePersons=L(),this.personsService=v(w),this.columns=this.personsService.getColumns(),this.height=400,this.filterType=U.contains,this.actions=[{label:"Compartilhar",action:this.viewDetail.bind(this),icon:"an an-share",disabled:!0},{label:"Detalhes",action:this.viewDetail.bind(this),icon:"an an-arrow-square-in"}]}onResize(){setTimeout(()=>this.setHeight(),200)}loadPersons(){this.loadMorePersons.emit()}viewDetail(e){this.viewDetailPerson.emit(e)}ngAfterViewInit(){this.onResize()}setHeight(){let e=[];e.push(this.getElementHeightById(".po-page-header")),e.push(this.getElementHeightById(".po-row po-table-footer-show-more ng-star-inserted")),this.height=this.calculateHeight(e)-145}getElementHeightById(e){let t=document.querySelector(e);return t?t.clientHeight:0}calculateHeight(e){return e.reduce((t,i)=>t-i,window.innerHeight)}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275cmp=c({type:o,selectors:[["app-persons-list"]],hostBindings:function(t,i){t&1&&h("resize",function(){return i.onResize()},!1,H)},inputs:{persons:[1,"persons"],isLoading:[1,"isLoading"]},outputs:{viewDetailPerson:"viewDetailPerson",loadMorePersons:"loadMorePersons"},decls:1,vars:12,consts:[["p-container","shadow",3,"p-show-more","p-items","p-loading","p-height","p-columns","p-draggable","p-sort","p-filtered-columns","p-hide-table-search","p-filter-type","p-actions","p-actions-right"]],template:function(t,i){t&1&&(a(0,"po-table",0),h("p-show-more",function(){return i.loadPersons()}),p()),t&2&&r("p-items",i.persons())("p-loading",i.isLoading())("p-height",i.height)("p-columns",i.columns)("p-draggable",!0)("p-sort",!0)("p-filtered-columns",_(11,ie))("p-hide-table-search",!1)("p-filter-type",i.filterType)("p-actions",i.actions)("p-actions-right",!0)},dependencies:[N,G],encapsulation:2,changeDetection:0})}}return o})();var ne=()=>[];function se(o,x){if(o&1&&(a(0,"p"),S(1,"Ops, ocorreu erro ao tentar listar os Usu\xE1rios :("),p(),S(2)),o&2){l();let e=y(3);n(2),z(" ",e," ")}}function re(o,x){if(o&1){let e=F();a(0,"app-persons-list",4),h("loadMorePersons",function(){D(e);let i=l();return M(i.loadPersons())})("viewDetailPerson",function(i){D(e);let s=l();return M(s.viewDetail(i))}),p()}if(o&2){l();let e=y(1),t=y(2);r("persons",e)("isLoading",t)}}var xe=(()=>{class o{constructor(){this.modal=V.required(f),this.page=m(1),this.personsService=v(w),this.personsResource=this.personsService.getPersons,this.person=m(void 0)}loadPersons(){this.page.update(e=>e+1),this.personsService.updatePage(this.page())}restartPersons(){this.personsResource.reload()}viewDetail(e){this.person.set(e),this.modal().open()}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275cmp=c({type:o,selectors:[["app-persons"]],viewQuery:function(t,i){t&1&&R(i.modal,f,5),t&2&&q()},decls:8,vars:7,consts:[["p-title","Rick & Morty | Personagens","p-subtitle","Exemplo de uso da API resource"],[3,"persons","isLoading"],["p-size","lg",3,"p-title"],[3,"person"],[3,"loadMorePersons","viewDetailPerson","persons","isLoading"]],template:function(t,i){if(t&1&&(a(0,"po-page-default",0),B(1)(2)(3),P(4,se,3,1)(5,re,1,2,"app-persons-list",1),a(6,"po-modal",2),u(7,"app-person-detail",3),p()()),t&2){let s;n(),b(i.personsResource.value()||_(6,ne)),n(),b(i.personsResource.isLoading()),n();let te=b(i.personsResource.error());n(),C(te?4:5),n(2),r("p-title",((s=i.person())==null?null:s.name)||"Detalhes"),n(),r("person",i.person())}},dependencies:[X,K,Q,f,ee,Z],encapsulation:2})}}return o})();export{xe as PersonsComponent};
