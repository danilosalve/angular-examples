import{a as it}from"./chunk-5OTICICK.js";import{$b as qe,A as de,Aa as A,Ac as et,Ba as D,Bc as tt,Ca as O,Dc as $,E as g,Ea as Se,Ga as xe,Gb as je,H as M,Ha as Te,Hb as Ne,Hc as ot,Ia as we,Ib as Ue,Ic as nt,Jb as Ae,Jc as B,K as a,Kc as q,Lb as Ve,Ma as Pe,Na as Me,Oa as W,Q as d,Qb as ze,R as he,Ra as De,Rb as $e,T as ue,Ta as Oe,Ua as Ee,Ub as V,V as I,Vb as z,Zb as y,_a as x,_b as Be,a as ne,aa as fe,ac as X,b as ie,ba as m,bc as Y,c as K,ca as ge,cc as He,d as E,da as L,dc as Z,e as re,ea as be,ec as Q,f as j,fa as Ce,fc as Ge,g as ae,ga as N,gb as Ie,ha as U,ia as l,ja as c,ka as h,ma as ye,na as ke,nc as Ke,o as se,oa as F,pa as _e,q as P,qa as ve,qb as J,r as ce,s as le,sb as Le,ta as v,tc as Je,u as f,ua as T,ub as Fe,uc as Xe,vc as Ye,wb as We,wc as Ze,x as pe,y as me,zb as Re,zc as Qe}from"./chunk-S4L3GTJS.js";import{a as p,b as _,d as oe}from"./chunk-4CLCTAJ7.js";var rt={name:"po-theme",type:{light:{color:{brand:{"01":{lightest:"#f2eaf6",lighter:"#d9c2e5",light:"#bd94d1",base:"#753399",dark:"#5b1c7d",darker:"#400e58",darkest:"#260538"},"02":{base:"#b92f72"},"03":{base:"#ffd464"}},action:_(p({},Be),{disabled:"var(--color-neutral-mid-40)"}),feedback:_(p({},X),{info:_(p({},X.info),{base:"#0079b8"})}),neutral:p({},qe)},onRoot:_(p({},Y.onRoot),{"--color-page-background-color-page":"var(--color-neutral-light-05)"}),perComponent:p({},Y.perComponent)},dark:{color:{brand:{"01":{darkest:"#f2eaf6",darker:"#d9c2e5",dark:"#bd94d1",base:"#753399",light:"#5b1c7d",lighter:"#400e58",lightest:"#260538"},"02":{base:"#b92f72"},"03":{base:"#ffd464"}},action:_(p({},He),{disabled:"var(--color-neutral-mid-40)"}),feedback:_(p({},Z),{info:_(p({},Z.info),{base:"#0079b8"})}),neutral:{light:{"00":"#1c1c1c","05":"#202020",10:"#2b2b2b",20:"#3b3b3b",30:"#5a5a5a"},mid:{40:"#7c7c7c",60:"#a1a1a1"},dark:{70:"#c1c1c1",80:"#d9d9d9",90:"#eeeeee",95:"#fbfbfb"}}},onRoot:_(p({},Q.onRoot),{"--color-page-background-color-page":"var(--color-neutral-light-05)"}),perComponent:p({},Q.perComponent)}},active:y.light};var at=(()=>{class e{constructor(){this.poTheme=f(Ge),this.poThemeSample=rt}changeTheme(o){this.poTheme.setTheme(this.poThemeSample,o),o===y.light?this.changeThemeTypeInStorage("po-theme-default"):this.changeThemeTypeInStorage("po-theme-dark")}onInitTheme(){let t=(this.getThemeTypeInStorage()||"po-theme-default")==="po-theme-default"?y.light:y.dark;return this.changeTheme(t),t}changeThemeTypeInStorage(o){localStorage.setItem("po-ui-theme",o)}getThemeTypeInStorage(){return localStorage.getItem("po-ui-theme")}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var st=(()=>{class e{constructor(){this.name="Aplicativo de exemplo Standalone",this.actions=[{icon:"an an-sun",label:"Tema claro",action:()=>this.changeTheme(y.light),disabled:()=>this.iconTheme()==="an an-sun"},{icon:"an an-moon",label:"Tema escuro",action:()=>this.changeTheme(y.dark),disabled:()=>this.iconTheme()==="an an-moon"}],this.iconTheme=M("an an-sun"),this.theme=f(at)}ngOnInit(){let o=this.theme.onInitTheme();this.changeTheme(o,!1)}changeTheme(o,t=!0){this.iconTheme.update(()=>o===y.light?"an an-sun":"an an-moon"),t&&this.theme.changeTheme(o)}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=d({type:e,selectors:[["app-toolbar"]],decls:1,vars:3,consts:[[3,"p-title","p-actions-icon","p-actions"]],template:function(t,n){t&1&&h(0,"po-toolbar",0),t&2&&m("p-title",n.name)("p-actions-icon",n.iconTheme())("p-actions",n.actions)},dependencies:[nt,ot],encapsulation:2})}}return e})();var ct=(()=>{class e{constructor(){this.menus=[{label:"P\xE1gina Inicial",link:"./",shortLabel:"Inicio",icon:"an an-house-line"},{label:"Formul\xE1rios",shortLabel:"Formul\xE1rios",icon:"an an-file",subItems:[{label:"Reaproveitando Formul\xE1rios",link:"forms/container-form",shortLabel:"Container"}]},{label:"Signals",shortLabel:"Signals",icon:"an an-radio-signal",subItems:[{label:"Exemplos Signals",link:"signals/samples",shortLabel:"Signals"},{label:"Formul\xE1rios Signals",link:"signals/form",shortLabel:"Formul\xE1rios"},{label:"Star Wars Veiculos",link:"signals/vehicle",shortLabel:"Veiculos"}]},{label:"Carregamento adiado",link:"defer",shortLabel:"Defer",icon:"an an-timer"},{label:"Componente Din\xE2mico",shortLabel:"Din\xE2mico",icon:"an an-browsers",subItems:[{label:"Componentes",link:"dynamic/components",shortLabel:"Componentes"},{label:"Servi\xE7os",link:"dynamic/services",shortLabel:"Servi\xE7os"},{label:"Formul\xE1rios",link:"dynamic/forms",shortLabel:"Formul\xE1rios"}]},{label:"Produtos",link:"products",shortLabel:"Produtos",icon:"an an-shopping-cart-simple"},{label:"Rick & Morty | Personagens",link:"persons",shortLabel:"Personagens",icon:"an an-person"},{label:"Usu\xE1rios",link:"users",shortLabel:"Usu\xE1rios",icon:"an an-user"}]}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=d({type:e,selectors:[["app-home"]],decls:4,vars:3,consts:[[1,"po-wrapper"],["p-logo","assets/img/logo/angular-removebg-preview.png","p-logo-alt","Logotipo do Angular","p-short-logo","assets/img/logo/angular_gradient.png",3,"p-menus","p-collapsed","p-filter"]],template:function(t,n){t&1&&(l(0,"div",0),h(1,"app-toolbar")(2,"po-menu",1)(3,"router-outlet"),c()),t&2&&(a(2),m("p-menus",n.menus)("p-collapsed",!0)("p-filter",!0))},dependencies:[x,et,Qe,$,Ie,st],encapsulation:2})}}return e})();var kt={url:"",deserializer:e=>JSON.parse(e.data),serializer:e=>JSON.stringify(e)},_t="WebSocketSubject.error must be called with an object with an error code, and an optional reason: { code: number, reason: string }",H=class e extends re{constructor(i,o){if(super(),this._socket=null,i instanceof K)this.destination=o,this.source=i;else{let t=this._config=Object.assign({},kt);if(this._output=new E,typeof i=="string")t.url=i;else for(let n in i)i.hasOwnProperty(n)&&(t[n]=i[n]);if(!t.WebSocketCtor&&WebSocket)t.WebSocketCtor=WebSocket;else if(!t.WebSocketCtor)throw new Error("no WebSocket constructor can be found");this.destination=new j}}lift(i){let o=new e(this._config,this.destination);return o.operator=i,o.source=this,o}_resetState(){this._socket=null,this.source||(this.destination=new j),this._output=new E}multiplex(i,o,t){let n=this;return new K(r=>{try{n.next(i())}catch(C){r.error(C)}let s=n.subscribe({next:C=>{try{t(C)&&r.next(C)}catch(u){r.error(u)}},error:C=>r.error(C),complete:()=>r.complete()});return()=>{try{n.next(o())}catch(C){r.error(C)}s.unsubscribe()}})}_connectSocket(){let{WebSocketCtor:i,protocol:o,url:t,binaryType:n}=this._config,r=this._output,s=null;try{s=o?new i(t,o):new i(t),this._socket=s,n&&(this._socket.binaryType=n)}catch(u){r.error(u);return}let C=new ne(()=>{this._socket=null,s&&s.readyState===1&&s.close()});s.onopen=u=>{let{_socket:S}=this;if(!S){s.close(),this._resetState();return}let{openObserver:te}=this._config;te&&te.next(u);let G=this.destination;this.destination=ie.create(k=>{if(s.readyState===1)try{let{serializer:w}=this._config;s.send(w(k))}catch(w){this.destination.error(w)}},k=>{let{closingObserver:w}=this._config;w&&w.next(void 0),k&&k.code?s.close(k.code,k.reason):r.error(new TypeError(_t)),this._resetState()},()=>{let{closingObserver:k}=this._config;k&&k.next(void 0),s.close(),this._resetState()}),G&&G instanceof j&&C.add(G.subscribe(this.destination))},s.onerror=u=>{this._resetState(),r.error(u)},s.onclose=u=>{s===this._socket&&this._resetState();let{closeObserver:S}=this._config;S&&S.next(u),u.wasClean?r.complete():r.error(u)},s.onmessage=u=>{try{let{deserializer:S}=this._config;r.next(S(u))}catch(S){r.error(S)}}}_subscribe(i){let{source:o}=this;return o?o.subscribe(i):(this._socket||this._connectSocket(),this._output.subscribe(i),i.add(()=>{let{_socket:t}=this;this._output.observers.length===0&&(t&&(t.readyState===1||t.readyState===0)&&t.close(),this._resetState())}),i)}unsubscribe(){let{_socket:i}=this;i&&(i.readyState===1||i.readyState===0)&&i.close(),this._resetState(),super.unsubscribe()}};function ee(e){return new H(e)}var lt=(()=>{class e{constructor(){let o="wss://ws.coincap.io/prices?assets=ethereum,bitcoin";this.sockets$=ee(o)}getStockPrices(){return this.sockets$.asObservable()}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var pt=(()=>{class e{constructor(){this.orientation=Xe.Horizontal,this.stocks=M(null),this.unsub$=new E,this.coinsService=f(lt)}ngOnInit(){this.coinsService.getStockPrices().pipe(se(this.unsub$)).subscribe(o=>this.stocks.update(t=>p(p({},t),o)))}ngOnDestroy(){this.unsub$.next(!0),this.unsub$.complete()}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=d({type:e,selectors:[["app-coins"]],decls:5,vars:4,consts:[["target",""],["p-title","Cripto Moedas",1,"po-sm-12","po-md-12","po-lg-4","po-xl-3","po-mb-2"],["p-label","Bitcoin",3,"p-value","p-orientation"],["p-label","Ethereum",3,"p-value","p-orientation"],["p-icon","an an-question","p-tooltip","Exemplo de uso de um WebSocket",1,"po-clickable"]],template:function(t,n){if(t&1&&(l(0,"po-widget",1),h(1,"po-info",2)(2,"po-info",3)(3,"po-icon",4,0),c()),t&2){let r,s;a(),m("p-value",(r=n.stocks())==null?null:r.bitcoin)("p-orientation",n.orientation),a(),m("p-value",(s=n.stocks())==null?null:s.ethereum)("p-orientation",n.orientation)}},dependencies:[x,q,B,Ze,Ye,Ue,Ne,Ve,Ae],encapsulation:2})}}return e})();var vt=["*"],St=(e,i,o,t,n)=>({"custom-content":e,circle:i,progress:o,"progress-dark":t,pulse:n});function xt(e,i){e&1&&ve(0)}function Tt(e,i){if(e&1&&(l(0,"div",0),I(1,xt,1,0),c()),e&2){let o=F(),t=O(0),n=O(1);m("ngClass",xe(5,St,t==="custom-content",t==="circle",n==="progress",n==="progress-dark",n==="pulse"))("ngStyle",o.styles()),fe("aria-label",o.ariaLabel())("aria-valuetext",o.loadingText()),a(),L(t==="custom-content"?1:-1)}}var mt=new le("ngx-skeleton-loader.config"),dt=(()=>{class e{constructor(){this.#e=f(mt,{optional:!0}),this.count=g(this.#e?.count||1,{transform:Me}),this.loadingText=g(this.#e?.loadingText||"Loading..."),this.appearance=g(this.#e?.appearance||"line"),this.animation=g(this.#e?.animation||"progress"),this.ariaLabel=g(this.#e?.ariaLabel||"loading"),this.theme=g(this.#e?.theme||null),this.items=W(()=>{let o=this.count()||1;return this.appearance()==="custom-content"&&Pe()&&o!==1&&(console.error('`NgxSkeletonLoaderComponent` enforces elements with "custom-content" appearance as DOM nodes. Forcing "count" to "1".'),o=1),[...Array(o)].map((t,n)=>n)}),this.styles=W(()=>{let o=this.theme();return this.#e?.theme?.extendsFromRoot?p(p({},this.#e?.theme),o):o})}#e;static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=d({type:e,selectors:[["ngx-skeleton-loader"]],inputs:{count:[1,"count"],loadingText:[1,"loadingText"],appearance:[1,"appearance"],animation:[1,"animation"],ariaLabel:[1,"ariaLabel"],theme:[1,"theme"]},ngContentSelectors:vt,decls:4,vars:2,consts:[["aria-busy","true","aria-valuemin","0","aria-valuemax","100","role","progressbar","tabindex","-1",1,"skeleton-loader",3,"ngClass","ngStyle"]],template:function(t,n){t&1&&(_e(),A(0)(1),N(2,Tt,2,11,"div",0,Ce)),t&2&&(D(n.appearance()),a(),D(n.animation()),a(),U(n.items()))},dependencies:[Oe,Ee],styles:['.skeleton-loader[_ngcontent-%COMP%]{box-sizing:border-box;overflow:hidden;position:relative;background:#eff1f6 no-repeat;border-radius:4px;width:100%;height:20px;display:inline-block;margin-bottom:10px;will-change:transform}.skeleton-loader[_ngcontent-%COMP%]:after, .skeleton-loader[_ngcontent-%COMP%]:before{box-sizing:border-box}.skeleton-loader.circle[_ngcontent-%COMP%]{width:40px;height:40px;margin:5px;border-radius:50%}.skeleton-loader.progress[_ngcontent-%COMP%], .skeleton-loader.progress-dark[_ngcontent-%COMP%]{transform:translateZ(0)}.skeleton-loader.progress[_ngcontent-%COMP%]:after, .skeleton-loader.progress[_ngcontent-%COMP%]:before, .skeleton-loader.progress-dark[_ngcontent-%COMP%]:after, .skeleton-loader.progress-dark[_ngcontent-%COMP%]:before{box-sizing:border-box}.skeleton-loader.progress[_ngcontent-%COMP%]:before, .skeleton-loader.progress-dark[_ngcontent-%COMP%]:before{animation:_ngcontent-%COMP%_progress 2s ease-in-out infinite;background-size:200px 100%;position:absolute;z-index:1;top:0;left:0;width:200px;height:100%;content:""}.skeleton-loader.progress[_ngcontent-%COMP%]:before{background-image:linear-gradient(90deg,#fff0,#fff9,#fff0)}.skeleton-loader.progress-dark[_ngcontent-%COMP%]:before{background-image:linear-gradient(90deg,transparent,rgba(0,0,0,.2),transparent)}.skeleton-loader.pulse[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_pulse 1.5s cubic-bezier(.4,0,.2,1) infinite;animation-delay:.5s}.skeleton-loader.custom-content[_ngcontent-%COMP%]{height:100%;background:none}@media (prefers-reduced-motion: reduce){.skeleton-loader.pulse[_ngcontent-%COMP%], .skeleton-loader.progress-dark[_ngcontent-%COMP%], .skeleton-loader.custom-content[_ngcontent-%COMP%], .skeleton-loader.progress[_ngcontent-%COMP%]:before{animation:none}.skeleton-loader.progress[_ngcontent-%COMP%]:before, .skeleton-loader.progress-dark[_ngcontent-%COMP%], .skeleton-loader.custom-content[_ngcontent-%COMP%]{background-image:none}}@media screen and (min-device-width: 1200px){.skeleton-loader[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;cursor:wait}}@keyframes _ngcontent-%COMP%_progress{0%{transform:translate3d(-200px,0,0)}to{transform:translate3d(calc(200px + 100vw),0,0)}}@keyframes _ngcontent-%COMP%_pulse{0%{opacity:1}50%{opacity:.4}to{opacity:1}}'],changeDetection:0})}}return e})(),ht=(()=>{class e{static forRoot(o){return{ngModule:e,providers:[{provide:mt,useValue:o}]}}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275mod=he({type:e})}static{this.\u0275inj=ce({imports:[x]})}}return e})();var ut=(()=>{class e{constructor(){this.apiUrl="https://goweather.herokuapp.com/weather",this.city=M("S\xE3o Paulo"),this.getWeather=De({request:this.city,loader:n=>oe(this,[n],function*({request:o,abortSignal:t}){try{return yield(yield fetch(`${this.apiUrl}/${o}`,{signal:t})).json()}catch(r){this.handleError(r)}})})}updateCity(o){this.city.set(o)}handleError(o){throw o}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275prov=P({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var ft=(()=>{class e{transform(o){return`Dia ${o}`}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275pipe=ue({name:"dailyWeatherForecastTitle",type:e,pure:!0})}}return e})();var gt=(()=>{class e{constructor(){this.weather=g.required()}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=d({type:e,selectors:[["app-daily-weather-forecast"]],inputs:{weather:[1,"weather"]},decls:6,vars:5,consts:[[1,"po-sm-12","po-md-4","po-lg-4","po-xl-4","po-mb-2",3,"p-title"],[1,"po-font-subtitle",2,"text-align","center"],[1,"po-font-text-small",2,"text-align","center"]],template:function(t,n){t&1&&(l(0,"po-widget",0),Te(1,"dailyWeatherForecastTitle"),l(2,"p",1),v(3),c(),l(4,"p",2),v(5),c()()),t&2&&(m("p-title",we(1,3,n.weather().day)),a(3),T(n.weather().temperature),a(2),T(n.weather().wind))},dependencies:[q,B,ft],encapsulation:2,changeDetection:0})}}return e})();var Pt={sunny:"an an-sun",clear:"an an-sun",cloudy:"an an-cloud","partly cloudy":"an an-cloud-sun",rain:"an an-cloud-rain",snow:"an an-snowflake"},bt=(()=>{class e{constructor(){this.description=g.required(),this.icon=W(()=>this.transformDescriptionIntoIcon(this.description()))}transformDescriptionIntoIcon(o){return o=o.toLocaleLowerCase(),Pt[o]||""}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=d({type:e,selectors:[["app-weather-icon"]],inputs:{description:[1,"description"]},decls:1,vars:2,consts:[[2,"text-align","center"]],template:function(t,n){t&1&&h(0,"p",0),t&2&&ge(n.icon())},encapsulation:2})}}return e})();var Mt=()=>({width:"70px",height:"70px","border-radius":"10px"});function Dt(e,i){e&1&&(l(0,"p",2),v(1,"Ops, ocorreu erro ao tentar buscar a previs\xE3o do tempo :("),c())}function Ot(e,i){if(e&1&&h(0,"app-daily-weather-forecast",9),e&2){let o=i.$implicit;m("weather",o)}}function Et(e,i){if(e&1&&(l(0,"po-container",2)(1,"p",4),v(2),c(),l(3,"p",5),v(4),c(),l(5,"p",6),v(6),c(),h(7,"app-weather-icon",7),c(),l(8,"p",8),v(9,"Proximos dias"),c(),N(10,Ot,1,1,"app-daily-weather-forecast",9,be)),e&2){let o=F(2),t=O(2);a(2),T(o.city()),a(2),T(t.temperature),a(2),T(t.wind),a(),m("description",t.description),a(3),U(t.forecast)}}function It(e,i){e&1&&h(0,"ngx-skeleton-loader",10)(1,"ngx-skeleton-loader",11),e&2&&(a(),m("theme",Se(1,Mt)))}function Lt(e,i){if(e&1&&I(0,Et,12,4)(1,It,2,2),e&2){F();let o=O(3);L(o?0:1)}}var Ct=(()=>{class e{constructor(){this.wheatherService=f(ut),this.wheatherResource=this.wheatherService.getWeather,this.form=new Fe({city:new We("",{nonNullable:!0,validators:[J.required,J.min(3)]})}),this.injector=f(de),this.city=it(this.form.controls.city.valueChanges??ae(void 0),{injector:this.injector}),this.form.patchValue({city:"S\xE3o Paulo"})}onChangeCity(){this.city()&&this.wheatherService.updateCity(this.city())}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=d({type:e,selectors:[["app-weather"]],decls:9,vars:5,consts:[[1,"po-sm-12","po-md-12","po-lg-6","po-xl-6","po-mb-2",2,"position","relative"],["p-icon","an an-map-pin","p-placeholder","Nome da Cidade: Exemplo S\xE3o Paulo","p-required","","p-clean","",1,"po-sm-12","po-md-12","po-lg-12","po-xl-12","po-mb-1",3,"p-change","formControl"],[1,"po-sm-12","po-md-12","po-lg-12","po-xl-12","po-mb-2"],["p-text","Buscando Previs\xE3o do Tempo ",3,"hidden"],[1,"po-font-text-large-bold",2,"text-align","center"],[1,"po-font-subtitle",2,"text-align","center"],[1,"po-font-text-small",2,"text-align","center"],[3,"description"],[1,"po-font-text-large-bold","po-mb-1"],[3,"weather"],["count","1","appearance","line",1,"h-3"],["count","3","appearance","circle",3,"theme"]],template:function(t,n){if(t&1){let r=ye();l(0,"po-container",0)(1,"po-input",1),ke("p-change",function(){return pe(r),me(n.onChangeCity())}),c(),A(2)(3)(4)(5),I(6,Dt,2,0,"p",2)(7,Lt,2,1),h(8,"po-loading-overlay",3),c()}if(t&2){a(),m("formControl",n.form.controls.city),a(),D(n.wheatherResource.value()),a(),D(n.wheatherResource.hasValue());let r=n.wheatherResource.isLoading(),s=n.wheatherResource.error();a(3),L(s?6:7),a(2),m("hidden",!r)}},dependencies:[z,V,Je,Ke,$e,ze,je,Le,Re,gt,bt,ht,dt],encapsulation:2})}}return e})();var yt=(()=>{class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=d({type:e,selectors:[["app-dashboard"]],decls:6,vars:0,consts:[["p-title","P\xE1gina Inicial"],[1,"po-row"],[1,"po-mb-2","po-sm-12","po-md-12","po-lg-12","po-xl-12"]],template:function(t,n){t&1&&(l(0,"po-page-default",0)(1,"div",1)(2,"po-container",2),h(3,"app-coins"),c(),l(4,"po-container",2),h(5,"app-weather"),c()()())},dependencies:[x,$,tt,z,V,pt,Ct],encapsulation:2})}}return e})();var rn=[{path:"",component:ct,title:"P\xE1gina Inicial",children:[{path:"",pathMatch:"full",title:"P\xE1gina Inicial",component:yt},{path:"defer",title:"Carregamento Adiado",loadComponent:()=>import("./chunk-FLHYNNBD.js").then(e=>e.DeferComponent)},{path:"dynamic",title:"Componentes Din\xE2micos",loadChildren:()=>import("./chunk-FJYI37VQ.js").then(e=>e.DYNAMIC_ROUTES)},{path:"forms",title:"Formul\xE1rios",loadChildren:()=>import("./chunk-7ZAHASJ2.js").then(e=>e.FORMS_ROUTES)},{path:"persons",title:"Rick & Morty | Personagens",loadComponent:()=>import("./chunk-R7WK7QSG.js").then(e=>e.PersonsComponent)},{path:"products",title:"Produtos",loadChildren:()=>import("./chunk-2PW2CQAT.js").then(e=>e.PRODUCT_ROUTES)},{path:"signals",title:"Signals",loadChildren:()=>import("./chunk-RWP4FPYI.js").then(e=>e.SIGNALS_ROUTES)},{path:"users",title:"Usu\xE1rios",loadChildren:()=>import("./chunk-IW4UHBB3.js").then(e=>e.USERS_ROUTES)}]}];export{rn as HOME_ROUTES};
