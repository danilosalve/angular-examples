import{a as it}from"./chunk-B6NFIYSM.js";import{$ as k,Ba as Qe,Ca as et,Da as tt,E as je,F as Ne,Fa as $,G as Ue,H as Ae,J as Ve,Ja as ot,Ka as nt,La as B,Ma as q,O as ze,Q as $e,W as V,X as z,aa as Be,ba as qe,ca as X,da as Y,e as Ie,ea as He,fa as Z,ga as Q,ha as Ke,o as J,pa as Ge,q as Le,s as Fe,u as We,va as Je,wa as Xe,x as Re,xa as Ye,ya as Ze}from"./chunk-C7IOG66E.js";import{$b as U,Ab as D,Cc as A,Dc as L,Ea as b,Ec as w,Gd as S,Hc as ve,Ia as E,Kc as Se,Lc as Te,Mc as we,Qb as fe,Rb as m,Sc as Pe,Ub as ge,Xb as O,Y as se,Yb as be,Yc as Me,Zb as Ce,Zc as W,_b as N,a as ne,ac as s,b as ie,bc as c,bd as Ee,ca as M,cc as h,d as G,da as ce,fa as le,g as F,gc as _e,h as re,hb as r,ia as g,ic as ke,j,jc as I,kc as ye,lc as xe,o as ae,od as De,sa as pe,ta as me,ub as d,vb as he,vc as f,wc as T,wd as Oe,xa as de,xb as ue}from"./chunk-BMGFER63.js";import{a as p,b as x,d as oe}from"./chunk-4CLCTAJ7.js";var rt={name:"po-theme",type:{light:{color:{brand:{"01":{lightest:"#f2eaf6",lighter:"#d9c2e5",light:"#bd94d1",base:"#753399",dark:"#5b1c7d",darker:"#400e58",darkest:"#260538"},"02":{base:"#b92f72"},"03":{base:"#ffd464"}},action:x(p({},Be),{disabled:"var(--color-neutral-mid-40)"}),feedback:x(p({},X),{info:x(p({},X.info),{base:"#0079b8"})}),neutral:p({},qe)},onRoot:x(p({},Y.onRoot),{"--color-page-background-color-page":"var(--color-neutral-light-05)"}),perComponent:p({},Y.perComponent)},dark:{color:{brand:{"01":{darkest:"#f2eaf6",darker:"#d9c2e5",dark:"#bd94d1",base:"#753399",light:"#5b1c7d",lighter:"#400e58",lightest:"#260538"},"02":{base:"#b92f72"},"03":{base:"#ffd464"}},action:x(p({},He),{disabled:"var(--color-neutral-mid-40)"}),feedback:x(p({},Z),{info:x(p({},Z.info),{base:"#0079b8"})}),neutral:{light:{"00":"#1c1c1c","05":"#202020",10:"#2b2b2b",20:"#3b3b3b",30:"#5a5a5a"},mid:{40:"#7c7c7c",60:"#a1a1a1"},dark:{70:"#c1c1c1",80:"#d9d9d9",90:"#eeeeee",95:"#fbfbfb"}}},onRoot:x(p({},Q.onRoot),{"--color-page-background-color-page":"var(--color-neutral-light-05)"}),perComponent:p({},Q.perComponent)}},active:k.light};var at=(()=>{class e{constructor(){this.poTheme=g(Ke),this.poThemeSample=rt}changeTheme(t){this.poTheme.setTheme(this.poThemeSample,t),t===k.light?this.changeThemeTypeInStorage("po-theme-default"):this.changeThemeTypeInStorage("po-theme-dark")}onInitTheme(){let o=(this.getThemeTypeInStorage()||"po-theme-default")==="po-theme-default"?k.light:k.dark;return this.changeTheme(o),o}changeThemeTypeInStorage(t){localStorage.setItem("po-ui-theme",t)}getThemeTypeInStorage(){return localStorage.getItem("po-ui-theme")}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var st=(()=>{class e{constructor(){this.name="Aplicativo de exemplo Standalone",this.actions=[{icon:"an an-sun",label:"Tema claro",action:()=>this.changeTheme(k.light),disabled:()=>this.iconTheme()==="an an-sun"},{icon:"an an-moon",label:"Tema escuro",action:()=>this.changeTheme(k.dark),disabled:()=>this.iconTheme()==="an an-moon"}],this.iconTheme=E("an an-sun"),this.theme=g(at)}ngOnInit(){let t=this.theme.onInitTheme();this.changeTheme(t,!1)}changeTheme(t,o=!0){this.iconTheme.update(()=>t===k.light?"an an-sun":"an an-moon"),o&&this.theme.changeTheme(t)}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=d({type:e,selectors:[["app-toolbar"]],decls:1,vars:3,consts:[[3,"p-title","p-actions-icon","p-actions"]],template:function(o,n){o&1&&h(0,"po-toolbar",0),o&2&&m("p-title",n.name)("p-actions-icon",n.iconTheme())("p-actions",n.actions)},dependencies:[nt,ot],encapsulation:2})}}return e})();var ct=(()=>{class e{constructor(){this.menus=[{label:"P\xE1gina Inicial",link:"./",shortLabel:"Inicio",icon:"an an-house-line"},{label:"Formul\xE1rios",shortLabel:"Formul\xE1rios",icon:"an an-file",subItems:[{label:"Reaproveitando Formul\xE1rios",link:"forms/container-form",shortLabel:"Container"}]},{label:"Signals",shortLabel:"Signals",icon:"an an-radio-signal",subItems:[{label:"Exemplos Signals",link:"signals/samples",shortLabel:"Signals"},{label:"Formul\xE1rios Signals",link:"signals/form",shortLabel:"Formul\xE1rios"},{label:"Star Wars Veiculos",link:"signals/vehicle",shortLabel:"Veiculos"}]},{label:"Carregamento adiado",link:"defer",shortLabel:"Defer",icon:"an an-timer"},{label:"Componentes Din\xE2micos",shortLabel:"Din\xE2mico",icon:"an an-browsers",subItems:[{label:"Componentes",link:"dynamic/components",shortLabel:"Componentes"},{label:"Servi\xE7os",link:"dynamic/services",shortLabel:"Servi\xE7os"},{label:"Formul\xE1rios",link:"dynamic/forms",shortLabel:"Formul\xE1rios"}]},{label:"Produtos",link:"products",shortLabel:"Produtos",icon:"an an-shopping-cart-simple"},{label:"Rick & Morty | Personagens",link:"persons",shortLabel:"Personagens",icon:"an an-person"},{label:"Pok\xE9mon | Pok\xE9dex",link:"pokedex",shortLabel:"Pok\xE9dex",icon:"an an-poker-chip"},{label:"Usu\xE1rios",link:"users",shortLabel:"Usu\xE1rios",icon:"an an-user"}]}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=d({type:e,selectors:[["app-home"]],decls:4,vars:3,consts:[[1,"po-wrapper"],["p-logo","assets/img/logo/angular-menu.png","p-logo-alt","Logotipo do Angular","p-short-logo","assets/img/logo/angular-short-menu.png",3,"p-menus","p-collapsed","p-filter"]],template:function(o,n){o&1&&(s(0,"div",0),h(1,"app-toolbar")(2,"po-menu",1)(3,"router-outlet"),c()),o&2&&(r(2),m("p-menus",n.menus)("p-collapsed",!0)("p-filter",!0))},dependencies:[S,et,Qe,$,Ie,st],encapsulation:2})}}return e})();var kt={url:"",deserializer:e=>JSON.parse(e.data),serializer:e=>JSON.stringify(e)},yt="WebSocketSubject.error must be called with an object with an error code, and an optional reason: { code: number, reason: string }",H=class e extends re{constructor(i,t){if(super(),this._socket=null,i instanceof G)this.destination=t,this.source=i;else{let o=this._config=Object.assign({},kt);if(this._output=new F,typeof i=="string")o.url=i;else for(let n in i)i.hasOwnProperty(n)&&(o[n]=i[n]);if(!o.WebSocketCtor&&WebSocket)o.WebSocketCtor=WebSocket;else if(!o.WebSocketCtor)throw new Error("no WebSocket constructor can be found");this.destination=new j}}lift(i){let t=new e(this._config,this.destination);return t.operator=i,t.source=this,t}_resetState(){this._socket=null,this.source||(this.destination=new j),this._output=new F}multiplex(i,t,o){let n=this;return new G(a=>{try{n.next(i())}catch(_){a.error(_)}let l=n.subscribe({next:_=>{try{o(_)&&a.next(_)}catch(u){a.error(u)}},error:_=>a.error(_),complete:()=>a.complete()});return()=>{try{n.next(t())}catch(_){a.error(_)}l.unsubscribe()}})}_connectSocket(){let{WebSocketCtor:i,protocol:t,url:o,binaryType:n}=this._config,a=this._output,l=null;try{l=t?new i(o,t):new i(o),this._socket=l,n&&(this._socket.binaryType=n)}catch(u){a.error(u);return}let _=new ne(()=>{this._socket=null,l&&l.readyState===1&&l.close()});l.onopen=u=>{let{_socket:v}=this;if(!v){l.close(),this._resetState();return}let{openObserver:te}=this._config;te&&te.next(u);let K=this.destination;this.destination=ie.create(y=>{if(l.readyState===1)try{let{serializer:P}=this._config;l.send(P(y))}catch(P){this.destination.error(P)}},y=>{let{closingObserver:P}=this._config;P&&P.next(void 0),y&&y.code?l.close(y.code,y.reason):a.error(new TypeError(yt)),this._resetState()},()=>{let{closingObserver:y}=this._config;y&&y.next(void 0),l.close(),this._resetState()}),K&&K instanceof j&&_.add(K.subscribe(this.destination))},l.onerror=u=>{this._resetState(),a.error(u)},l.onclose=u=>{l===this._socket&&this._resetState();let{closeObserver:v}=this._config;v&&v.next(u),u.wasClean?a.complete():a.error(u)},l.onmessage=u=>{try{let{deserializer:v}=this._config;a.next(v(u))}catch(v){a.error(v)}}}_subscribe(i){let{source:t}=this;return t?t.subscribe(i):(this._socket||this._connectSocket(),this._output.subscribe(i),i.add(()=>{let{_socket:o}=this;this._output.observers.length===0&&(o&&(o.readyState===1||o.readyState===0)&&o.close(),this._resetState())}),i)}unsubscribe(){let{_socket:i}=this;i&&(i.readyState===1||i.readyState===0)&&i.close(),this._resetState(),super.unsubscribe()}};function ee(e){return new H(e)}var lt=(()=>{class e{constructor(){let t="wss://ws.coincap.io/prices?assets=ethereum,bitcoin";this.sockets$=ee(t)}getStockPrices(){return this.sockets$.asObservable()}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var pt=(()=>{class e{constructor(){this.orientation=Xe.Horizontal,this.stocks=E(null),this.unsub$=new F,this.coinsService=g(lt)}ngOnInit(){this.coinsService.getStockPrices().pipe(se(this.unsub$)).subscribe(t=>this.stocks.update(o=>p(p({},o),t)))}ngOnDestroy(){this.unsub$.next(!0),this.unsub$.complete()}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=d({type:e,selectors:[["app-coins"]],decls:5,vars:4,consts:[["target",""],["p-title","Cripto Moedas",1,"po-sm-12","po-md-12","po-lg-4","po-xl-3","po-mb-2"],["p-label","Bitcoin",3,"p-value","p-orientation"],["p-label","Ethereum",3,"p-value","p-orientation"],["p-icon","an an-question","p-tooltip","Exemplo de uso de um WebSocket",1,"po-clickable"]],template:function(o,n){if(o&1&&(s(0,"po-widget",1),h(1,"po-info",2)(2,"po-info",3)(3,"po-icon",4,0),c()),o&2){let a,l;r(),m("p-value",(a=n.stocks())==null?null:a.bitcoin)("p-orientation",n.orientation),r(),m("p-value",(l=n.stocks())==null?null:l.ethereum)("p-orientation",n.orientation)}},dependencies:[S,q,B,Ze,Ye,Ue,Ne,Ve,Ae],encapsulation:2})}}return e})();var xt=["*"],vt=(e,i,t,o,n)=>({"custom-content":e,circle:i,progress:t,"progress-dark":o,pulse:n});function St(e,i){e&1&&xe(0)}function Tt(e,i){if(e&1&&(s(0,"div",0),D(1,St,1,0),c()),e&2){let t=I(),o=w(0),n=w(1);m("ngClass",Se(5,vt,o==="custom-content",o==="circle",n==="progress",n==="progress-dark",n==="pulse"))("ngStyle",t.styles()),fe("aria-label",t.ariaLabel())("aria-valuetext",t.loadingText()),r(),O(o==="custom-content"?1:-1)}}var mt=new le("ngx-skeleton-loader.config"),dt=(()=>{class e{constructor(){this.#e=g(mt,{optional:!0}),this.count=b(this.#e?.count||1,{transform:Me}),this.loadingText=b(this.#e?.loadingText||"Loading..."),this.appearance=b(this.#e?.appearance||"line"),this.animation=b(this.#e?.animation||"progress"),this.ariaLabel=b(this.#e?.ariaLabel||"loading"),this.theme=b(this.#e?.theme||null),this.items=W(()=>{let t=this.count()||1;return this.appearance()==="custom-content"&&Pe()&&t!==1&&(console.error('`NgxSkeletonLoaderComponent` enforces elements with "custom-content" appearance as DOM nodes. Forcing "count" to "1".'),t=1),[...Array(t)].map((o,n)=>n)}),this.styles=W(()=>{let t=this.theme();return this.#e?.theme?.extendsFromRoot?p(p({},this.#e?.theme),t):t})}#e;static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=d({type:e,selectors:[["ngx-skeleton-loader"]],inputs:{count:[1,"count"],loadingText:[1,"loadingText"],appearance:[1,"appearance"],animation:[1,"animation"],ariaLabel:[1,"ariaLabel"],theme:[1,"theme"]},ngContentSelectors:xt,decls:4,vars:2,consts:[["aria-busy","true","aria-valuemin","0","aria-valuemax","100","role","progressbar","tabindex","-1",1,"skeleton-loader",3,"ngClass","ngStyle"]],template:function(o,n){o&1&&(ye(),A(0)(1),N(2,Tt,2,11,"div",0,Ce)),o&2&&(L(n.appearance()),r(),L(n.animation()),r(),U(n.items()))},dependencies:[De,Oe],styles:['.skeleton-loader[_ngcontent-%COMP%]{box-sizing:border-box;overflow:hidden;position:relative;background:#eff1f6 no-repeat;border-radius:4px;width:100%;height:20px;display:inline-block;margin-bottom:10px;will-change:transform}.skeleton-loader[_ngcontent-%COMP%]:after, .skeleton-loader[_ngcontent-%COMP%]:before{box-sizing:border-box}.skeleton-loader.circle[_ngcontent-%COMP%]{width:40px;height:40px;margin:5px;border-radius:50%}.skeleton-loader.progress[_ngcontent-%COMP%], .skeleton-loader.progress-dark[_ngcontent-%COMP%]{transform:translateZ(0)}.skeleton-loader.progress[_ngcontent-%COMP%]:after, .skeleton-loader.progress[_ngcontent-%COMP%]:before, .skeleton-loader.progress-dark[_ngcontent-%COMP%]:after, .skeleton-loader.progress-dark[_ngcontent-%COMP%]:before{box-sizing:border-box}.skeleton-loader.progress[_ngcontent-%COMP%]:before, .skeleton-loader.progress-dark[_ngcontent-%COMP%]:before{animation:_ngcontent-%COMP%_progress 2s ease-in-out infinite;background-size:200px 100%;position:absolute;z-index:1;top:0;left:0;width:200px;height:100%;content:""}.skeleton-loader.progress[_ngcontent-%COMP%]:before{background-image:linear-gradient(90deg,#fff0,#fff9,#fff0)}.skeleton-loader.progress-dark[_ngcontent-%COMP%]:before{background-image:linear-gradient(90deg,transparent,rgba(0,0,0,.2),transparent)}.skeleton-loader.pulse[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_pulse 1.5s cubic-bezier(.4,0,.2,1) infinite;animation-delay:.5s}.skeleton-loader.custom-content[_ngcontent-%COMP%]{height:100%;background:none}@media (prefers-reduced-motion: reduce){.skeleton-loader.pulse[_ngcontent-%COMP%], .skeleton-loader.progress-dark[_ngcontent-%COMP%], .skeleton-loader.custom-content[_ngcontent-%COMP%], .skeleton-loader.progress[_ngcontent-%COMP%]:before{animation:none}.skeleton-loader.progress[_ngcontent-%COMP%]:before, .skeleton-loader.progress-dark[_ngcontent-%COMP%], .skeleton-loader.custom-content[_ngcontent-%COMP%]{background-image:none}}@media screen and (min-device-width: 1200px){.skeleton-loader[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;cursor:wait}}@keyframes _ngcontent-%COMP%_progress{0%{transform:translate3d(-200px,0,0)}to{transform:translate3d(calc(200px + 100vw),0,0)}}@keyframes _ngcontent-%COMP%_pulse{0%{opacity:1}50%{opacity:.4}to{opacity:1}}'],changeDetection:0})}}return e})(),ht=(()=>{class e{static forRoot(t){return{ngModule:e,providers:[{provide:mt,useValue:t}]}}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275mod=he({type:e})}static{this.\u0275inj=ce({imports:[S]})}}return e})();var ut=(()=>{class e{constructor(){this.apiUrl="https://goweather.herokuapp.com/weather",this.city=E("S\xE3o Paulo"),this.getWeather=Ee({request:this.city,loader:n=>oe(this,[n],function*({request:t,abortSignal:o}){try{return yield(yield fetch(`${this.apiUrl}/${t}`,{signal:o})).json()}catch(a){this.handleError(a)}})})}updateCity(t){this.city.set(t)}handleError(t){throw t}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275prov=M({token:e,factory:e.\u0275fac,providedIn:"root"})}}return e})();var ft=(()=>{class e{transform(t){return`Dia ${t}`}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275pipe=ue({name:"dailyWeatherForecastTitle",type:e,pure:!0})}}return e})();var gt=(()=>{class e{constructor(){this.weather=b.required()}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=d({type:e,selectors:[["app-daily-weather-forecast"]],inputs:{weather:[1,"weather"]},decls:6,vars:5,consts:[[1,"po-sm-12","po-md-4","po-lg-4","po-xl-4","po-mb-2",3,"p-title"],[1,"po-font-subtitle",2,"text-align","center"],[1,"po-font-text-small",2,"text-align","center"]],template:function(o,n){o&1&&(s(0,"po-widget",0),Te(1,"dailyWeatherForecastTitle"),s(2,"p",1),f(3),c(),s(4,"p",2),f(5),c()()),o&2&&(m("p-title",we(1,3,n.weather().day)),r(3),T(n.weather().temperature),r(2),T(n.weather().wind))},dependencies:[q,B,ft],encapsulation:2,changeDetection:0})}}return e})();var Pt={sunny:"an an-sun",clear:"an an-sun",cloudy:"an an-cloud","partly cloudy":"an an-cloud-sun",rain:"an an-cloud-rain","light rain":"an an-cloud-rain",snow:"an an-snowflake","patchy rain nearby":"an an-cloud-rain"},bt=(()=>{class e{constructor(){this.description=b.required(),this.icon=W(()=>this.transformDescriptionIntoIcon(this.description()))}transformDescriptionIntoIcon(t){return t=(t||"").toLocaleLowerCase(),Pt[t]||""}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=d({type:e,selectors:[["app-weather-icon"]],inputs:{description:[1,"description"]},decls:1,vars:2,consts:[[2,"text-align","center"]],template:function(o,n){o&1&&h(0,"p",0),o&2&&ge(n.icon())},encapsulation:2})}}return e})();var Mt=()=>({width:"70px",height:"70px","border-radius":"10px"});function Et(e,i){e&1&&(s(0,"p",3),f(1,"Ops, ocorreu erro ao tentar buscar a previs\xE3o do tempo :("),c(),s(2,"p",4),f(3,"Tente novamente mais tarde."),c())}function Dt(e,i){if(e&1&&(s(0,"p",7),f(1),c(),s(2,"p",8),f(3),c(),s(4,"p",9),f(5),c(),h(6,"app-weather-icon",10)),e&2){let t=I(3),o=w(2);r(),T(t.city()),r(2),T(o.temperature),r(2),T(o.wind),r(),m("description",o.description)}}function Ot(e,i){e&1&&(s(0,"p",3),f(1,"Previs\xE3o do tempo n\xE3o encontrada para a cidade informada"),c(),s(2,"p",4),f(3,"Tente novamente mais tarde."),c())}function It(e,i){if(e&1&&h(0,"app-daily-weather-forecast",6),e&2){let t=i.$implicit;m("weather",t)}}function Lt(e,i){if(e&1&&(s(0,"po-container",4),D(1,Dt,7,4)(2,Ot,4,0),c(),s(3,"p",5),f(4,"Proximos dias"),c(),N(5,It,1,1,"app-daily-weather-forecast",6,be)),e&2){I(2);let t=w(2);r(),O(t.temperature&&t.wind?1:2),r(4),U(t.forecast)}}function Ft(e,i){e&1&&h(0,"ngx-skeleton-loader",11)(1,"ngx-skeleton-loader",12),e&2&&(r(),m("theme",ve(1,Mt)))}function Wt(e,i){if(e&1&&D(0,Lt,7,1)(1,Ft,2,2),e&2){I();let t=w(3);O(t?0:1)}}var Ct=(()=>{class e{constructor(){this.wheatherService=g(ut),this.wheatherResource=this.wheatherService.getWeather,this.form=new Fe({city:new We("",{nonNullable:!0,validators:[J.required,J.min(3)]})}),this.injector=g(de),this.city=it(this.form.controls.city.valueChanges??ae(void 0),{injector:this.injector}),this.form.patchValue({city:"S\xE3o Paulo"})}onChangeCity(){this.city()&&this.wheatherService.updateCity(this.city())}static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=d({type:e,selectors:[["app-weather"]],decls:9,vars:5,consts:[["p-title","Previs\xE3o do tempo",1,"po-sm-12","po-md-12","po-lg-6","po-xl-6","po-mb-2",2,"position","relative"],["p-icon","an an-map-pin","p-placeholder","Nome da Cidade: Exemplo S\xE3o Paulo","p-required","","p-clean","",1,"po-sm-12","po-md-12","po-lg-12","po-xl-12","po-mb-1",3,"p-change","formControl"],["p-text","Buscando Previs\xE3o do Tempo ",3,"hidden"],[1,"po-sm-12","po-md-12","po-lg-12","po-xl-12"],[1,"po-sm-12","po-md-12","po-lg-12","po-xl-12","po-mb-2"],[1,"po-font-text-large-bold","po-mb-1"],[3,"weather"],[1,"po-font-text-large-bold",2,"text-align","center"],[1,"po-font-subtitle",2,"text-align","center"],[1,"po-font-text-small",2,"text-align","center"],[3,"description"],["count","1","appearance","line",1,"h-3"],["count","3","appearance","circle",3,"theme"]],template:function(o,n){if(o&1){let a=_e();s(0,"po-container",0)(1,"po-input",1),ke("p-change",function(){return pe(a),me(n.onChangeCity())}),c(),A(2)(3)(4)(5),D(6,Et,4,0)(7,Wt,2,1),h(8,"po-loading-overlay",2),c()}if(o&2){r(),m("formControl",n.form.controls.city),r(),L(n.wheatherResource.value()),r(),L(n.wheatherResource.hasValue());let a=n.wheatherResource.isLoading(),l=n.wheatherResource.error();r(3),O(l?6:7),r(2),m("hidden",!a)}},dependencies:[z,V,Je,Ge,$e,ze,je,Le,Re,gt,bt,ht,dt],encapsulation:2})}}return e})();var _t=(()=>{class e{static{this.\u0275fac=function(o){return new(o||e)}}static{this.\u0275cmp=d({type:e,selectors:[["app-dashboard"]],decls:6,vars:0,consts:[["p-title","P\xE1gina Inicial"],[1,"po-row"],[1,"po-mb-2","po-sm-12","po-md-12","po-lg-12","po-xl-12"]],template:function(o,n){o&1&&(s(0,"po-page-default",0)(1,"div",1)(2,"po-container",2),h(3,"app-coins"),c(),s(4,"po-container",2),h(5,"app-weather"),c()()())},dependencies:[S,$,tt,z,V,pt,Ct],encapsulation:2})}}return e})();var sn=[{path:"",component:ct,title:"P\xE1gina Inicial",children:[{path:"",pathMatch:"full",title:"P\xE1gina Inicial",component:_t},{path:"defer",title:"Carregamento Adiado",loadComponent:()=>import("./chunk-QJ6DERZ5.js").then(e=>e.DeferComponent)},{path:"dynamic",title:"Componentes Din\xE2micos",loadChildren:()=>import("./chunk-SXL2I72Q.js").then(e=>e.DYNAMIC_ROUTES)},{path:"forms",title:"Formul\xE1rios",loadChildren:()=>import("./chunk-BQCXJN2R.js").then(e=>e.FORMS_ROUTES)},{path:"persons",title:"Rick & Morty | Personagens",loadComponent:()=>import("./chunk-ADIS4HLX.js").then(e=>e.PersonsComponent)},{path:"pokedex",title:"Pok\xE9mon",loadChildren:()=>import("./chunk-H5BPG2MQ.js").then(e=>e.POKEDEX_ROUTES)},{path:"products",title:"Produtos",loadChildren:()=>import("./chunk-57YQUR2N.js").then(e=>e.PRODUCT_ROUTES)},{path:"signals",title:"Signals",loadChildren:()=>import("./chunk-DDSIU35Y.js").then(e=>e.SIGNALS_ROUTES)},{path:"users",title:"Usu\xE1rios",loadChildren:()=>import("./chunk-ARBJI7V7.js").then(e=>e.USERS_ROUTES)}]}];export{sn as HOME_ROUTES};
