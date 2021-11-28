import{V as d,a as v,b as _,c as h}from"./vendor.10bf9365.js";const $=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerpolicy&&(n.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?n.credentials="include":o.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}};$();var L=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("nav",{attrs:{id:"nav"}},[t("div",{staticClass:"right"},[e.selectedPage!="home"?t("div",{staticClass:"element",on:{click:function(r){return e.changeSelectedPage("home")}}},[e._v(e._s(e.$t("home")))]):e._e()]),t("div",{staticClass:"left"},[t("div",{staticClass:"element",attrs:{id:"cv"}},[t("a",{staticClass:"button",attrs:{href:"documents/marcterradas.pdf",download:""}},[e._v(e._s(e.$t("download_cv")))])]),t("div",{staticClass:"element"},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedLanguage,expression:"selectedLanguage"}],on:{change:function(r){var o=Array.prototype.filter.call(r.target.options,function(n){return n.selected}).map(function(n){var i="_value"in n?n._value:n.value;return i});e.selectedLanguage=r.target.multiple?o:o[0]}}},e._l(e.languages,function(r,o){return t("option",{key:o,domProps:{value:o}},[e._v(e._s(r))])}),0)])])])},T=[];function m(e,a,t,r,o,n,i,p){var s=typeof e=="function"?e.options:e;a&&(s.render=a,s.staticRenderFns=t,s._compiled=!0),r&&(s.functional=!0),n&&(s._scopeId="data-v-"+n);var l;if(i?(l=function(c){c=c||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!c&&typeof __VUE_SSR_CONTEXT__!="undefined"&&(c=__VUE_SSR_CONTEXT__),o&&o.call(this,c),c&&c._registeredComponents&&c._registeredComponents.add(i)},s._ssrRegister=l):o&&(l=p?function(){o.call(this,(s.functional?this.parent:this).$root.$options.shadowRoot)}:o),l)if(s.functional){s._injectStyles=l;var k=s.render;s.render=function(j,b){return l.call(b),k(j,b)}}else{var g=s.beforeCreate;s.beforeCreate=g?[].concat(g,l):[l]}return{exports:e,options:s}}const E={name:"Nav",computed:{languages:function(){return this.$store.getters["language/getLanguages"]},selectedLanguage:{get:function(){return this.$store.getters["language/getSelectedLanguage"]},set:function(e){this.$store.commit("language/setSelectedLanguage",e)}},selectedPage:{get:function(){return this.$store.getters.getSelectedPage}}},methods:{changeSelectedPage:function(e){this.selectedPage!==e&&this.$router.push(e)}}},S={};var I=m(E,L,T,!1,D,null,null,null);function D(e){for(let a in S)this[a]=S[a]}var A=function(){return I.exports}(),H=function(){var e=this,a=e.$createElement;return e._self._c,e._m(0)},x=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("footer",{attrs:{id:"footer"}},[t("div",{staticClass:"element"},[t("a",{attrs:{href:"https://github.com/marcterradas",target:"_blank",rel:"noopener"}},[t("div",{staticClass:"imageContainer"},[t("img",{staticClass:"image",attrs:{id:"github",alt:"github",src:"/img/github.png","data-src":"/img/githubHover.png"}}),t("img",{staticClass:"image",attrs:{id:"githubHover",alt:"githubHover",src:"/img/githubHover.png"}})])])]),t("div",{staticClass:"element"},[t("a",{attrs:{href:"https://www.linkedin.com/in/marc-terradas-zapata/",target:"_blank",rel:"noopener"}},[t("div",{staticClass:"imageContainer"},[t("img",{staticClass:"image",attrs:{id:"linkedin",alt:"linkedin",src:"/img/linkedin.png","data-src":"/img/linkedinHover.png"}}),t("img",{staticClass:"image",attrs:{id:"linkedinHover",alt:"linkedinHover",src:"/img/linkedinHover.png"}})])])])])}];const J={},f={};var F=m(J,H,x,!1,V,null,null,null);function V(e){for(let a in f)this[a]=f[a]}var O=function(){return F.exports}(),B=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},[t("Nav"),t("router-view"),t("Footer")],1)},N=[];const R={name:"App",components:{Nav:A,Footer:O}},y={};var Q=m(R,B,N,!1,G,null,null,null);function G(e){for(let a in y)this[a]=y[a]}var W=function(){return Q.exports}();const q="modulepreload",M={},K="/",u=function(a,t){return!t||t.length===0?a():Promise.all(t.map(r=>{if(r=`${K}${r}`,r in M)return;M[r]=!0;const o=r.endsWith(".css"),n=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${n}`))return;const i=document.createElement("link");if(i.rel=o?"stylesheet":q,o||(i.as="script",i.crossOrigin=""),i.href=r,document.head.appendChild(i),o)return new Promise((p,s)=>{i.addEventListener("load",p),i.addEventListener("error",s)})})).then(()=>a())},z="Marc Terradas Zapata",X="Full Stack Developer",Z="Catal\xE0",U="Inici",Y="Experi\xE8ncia Laboral",ee="Educaci\xF3",te="Projectes",ae="Sobre mi",oe="Descarregar CV",ne={intowin:{position:"Full Stack Developer",company:"Intowin",duration:"Juny 2019 - Present",duration2:"{y} Anys {m} Mes | {y} Anys {m} Mesos",type:"Jornada completa",location:"Matar\xF3 i Remot",description:"Frontend: Vue.js, SASS, HTML, CSS, JS, jQuery <br> Backend: CodeIgniter, PHP, Python, MySQL <br> Control de versions amb Git <br> Metodologia: Scrum i Kanban"},kriter:{position:"Full Stack Developer",company:"Kriter Software",duration:"Juny 2018 - Juny 2019",duration2:"1 Any 1 Mes",type:"Mitja Jornada",location:"Matar\xF3",description:"Frontend: Bootstrap, SASS, HTML, CSS, JS, jQuery <br> Backend: Spring Boot, PHP, Java, Node.js, MySQL, MongoDB <br> Control de versions amb Git <br> Servei T\xE8cnic: Trucades i Correus Electr\xF2nics"},hospital:{position:"T\xE9cnico Inform\xE1tico",company:"Consorci Sanitari del Maresme",duration:"Octubre 2016 - Marzo 2017",duration2:"6 Mesos",type:"Becario",location:"Matar\xF3",description:"Manteniment d'Ordinadors, port\xE0tils i Impressores <br> Desplegament de xarxes <br> C\xF2pies de seguretat"}},re={daw:{degree:"CFGS Desenvolupament d'Aplicacions Web (DAW)",place:"I.E.S Thos i Codina (Matar\xF3)",description:"Sistemes Operatius Lliures i Serveis en Xarxa <br> Java, JavaScript, PHP, MySQL, HTML, CSS <br> Desplegament d'Aplicacions Web <br> Projecte Final de Grau",duration:"2017 - 2019"},smx:{degree:"CFGM Sistemes Microinform\xE0tics i Xarxes (SMX)",place:"I.E.S Thos i Codina (Matar\xF3)",description:"Manteniment d'Ordinadors <br> Sistemes Operatius Lliures (Client i Servidor) <br> Desplegament de xarxes <br> Seguretat Inform\xE0tica <br> Desplegament d'Aplicacions Web <br> Angl\xE8s T\xE8cnic <br> Projecte Final de Grau",duration:"2014 - 2016"},b2:{degree:"Angl\xE8s - B2",place:"Universitat Oberta de Catalunya",certificated:"Juny 2020",link:"Veure certificat"}},ie={title:"Hola",subtitle:"El meu nom \xE9s Marc Terradas Zapata",text1:"Tinc {age} anys, vaig n\xE9ixer el 26/04/1998 a Barcelona, i soc desenvolupador de software amb {experience} anys d'experi\xE8ncia",text2:"El stack tecnol\xF2gic que m\xE9s m'agrada \xE9s: <b>Vue.js</b>, <b>Node.js</b> i <b>MongoDB</b>. Tamb\xE9 treballo amb <b>PHP</b>, <b>Python</b>, <b>Java</b> i <b>MySQL</b>",text3:"Els idiomes que parlo s\xF3n: <b>Catal\xE0</b> (nivell natiu), <b>Castell\xE0</b> (nivell natiu) i <b>Angl\xE8s</b> (nivell B2)",text4:"La meva passi\xF3 a part de la programaci\xF3 \xE9s el m\xF3n de l'esport. Porto fent esport des dels 3 anys, els que m\xE9s he practicat i gaudit han estat: b\xE0squet (on vaig aprendre des de petit a treballar en equip), judo i atletisme"},se={deployer:{description:"Node.js script per automatitzar el desplegament d'una app de Vue.js per a Github Pages."},portfolio:{description:"P\xE0gina web constru\xEFda amb Vue.js sobre la meva experi\xE8ncia laboral, estudis i projectes de codi obert com a programador."}};var ce={name:z,title:X,language:Z,home:U,work_title:Y,education_title:ee,projects_title:te,aboutMe_title:ae,download_cv:oe,work:ne,education:re,aboutMe:ie,projects:se};const le="Marc Terradas Zapata",de="Full Stack Developer",ue="Castellano",pe="Inicio",me="Experiencia Laboral",ge="Educaci\xF3n",be="Proyectos",ve="Sobre mi",_e="Descargar CV",he={intowin:{position:"Full Stack Developer",company:"Intowin",duration:"Junio 2019 - Presente",duration2:"{y} A\xF1os {m} Mes | {y} A\xF1os {m} Meses",type:"Jornada Completa",location:"Matar\xF3 y Remoto",description:"Frontend: Vue.js, SASS, HTML, CSS, JS, jQuery <br> Backend: CodeIgniter, PHP, Python, MySQL <br> Control de versiones con Git <br> Metodolog\xEDa: Scrum y Kanban"},kriter:{position:"Full Stack Developer",company:"Kriter Software",duration:"Junio 2018 - Junio 2019",duration2:"1 A\xF1o 1 Mes",type:"Media Jornada",location:"Matar\xF3",description:"Frontend: Bootstrap, SASS, HTML, CSS, JS, jQuery <br> Backend: Spring Boot, PHP, Java, Node.js, MySQL, MongoDB <br> Control de versiones con Git <br> Servicio T\xE9cnico: Llamadas y Correos Electr\xF3nicos"},hospital:{position:"T\xE9cnico Inform\xE1tico",company:"Consorci Sanitari del Maresme",duration:"Octubre 2016 - Marzo 2017",duration2:"6 Meses",type:"Becario",location:"Matar\xF3",description:"Mantenimiento de Ordenadores, Port\xE1tiles e Impresoras <br> Despliegue de redes <br> Copias de seguridad"}},Se={daw:{degree:"CFGS Desarrollo de Aplicaciones Web (DAW)",place:"I.E.S Thos i Codina (Matar\xF3)",description:"Sistemas Operativos Libres y Servicios en Red <br> Java, JavaScript, PHP, MySQL, HTML, CSS <br> Despliegue de Aplicaciones Web <br> Proyecto Final de Grado",duration:"2017 - 2019"},smx:{degree:"CFGM Sistemas Microinform\xE1ticos y Redes (SMX)",place:"I.E.S Thos i Codina (Matar\xF3)",description:"Mantenimiento de Ordenadores <br> Sistemas Operativos Libres (Cliente y Servidor) <br> Despliegue de redes <br> Seguridad Inform\xE1tica <br> Despliegue de Aplicaciones Web <br> Ingl\xE9s T\xE9cnico <br> Proyecto Final de Grado",duration:"2014 - 2016"},b2:{degree:"Ingles - B2",place:"Universitat Oberta de Catalunya",certificated:"Junio 2020",link:"Ver certificado"}},fe={title:"Hola",subtitle:"Mi nombre es Marc Terradas Zapata",text1:"Tengo {age} a\xF1os, nac\xED el 26/04/1998 en Barcelona, y soy desarrollador de software con {experience} a\xF1os de experiencia",text2:"El stack tecnol\xF3gico que m\xE1s me gusta es: <b>Vue.js</b>, <b>Node.js</b> y <b>MongoDB</b>. Tambi\xE9n trabajo con <b>PHP</b>, <b>Python</b>, <b>Java</b> y <b>MySQL</b>",text3:"Los idiomas que hablo son: <b>Catal\xE1n</b> (nivel nativo), <b>Castellano</b> (nivel nativo) e <b>Ingl\xE9s</b> (nivel B2)",text4:"Mi pasi\xF3n aparte de la programaci\xF3n es el mundo del deporte. Llevo haciendo deporte des de los 3 a\xF1os, los que m\xE1s he practicado y disfrutado han sido: baloncesto (donde aprend\xED des de peque\xF1o a trabajar en equipo), judo y atletismo"},ye={deployer:{description:"Node.js script para automatizar el despliegue de una app de Vue.js en GitHub Pages."},portfolio:{description:"P\xE1gina web construida con Vue.js sobre mi experiencia laboral, estudios y proyectos de c\xF3digo abierto como programador."}};var Me={name:le,title:de,language:ue,home:pe,work_title:me,education_title:ge,projects_title:be,aboutMe_title:ve,download_cv:_e,work:he,education:Se,aboutMe:fe,projects:ye};const Ce="Marc Terradas Zapata",Pe="Full Stack Developer",we="English",ke="Home",je="Work Experience",$e="Education",Le="Projects",Te="About me",Ee="Download CV",Ie={intowin:{position:"Full Stack Developer",company:"Intowin",duration:"June 2019 - Present",duration2:"{y} Years {m} Month | {y} Years {m} Months",type:"Full Time",location:"Matar\xF3 and Remote",description:"Frontend: Vue.js, SASS, HTML, CSS, JS, jQuery <br> Backend: CodeIgniter, PHP, Python, MySQL <br> Version control with Git Methodology: Scrum and Kanban"},kriter:{position:"Full Stack Developer",company:"Kriter Software",duration:"June 2018 - June 2019",duration2:"1 Year 1 Month",type:"Part Time",location:"Matar\xF3",description:"Frontend: Bootstrap, SASS, HTML, CSS, JS, jQuery <br> Backend: Spring Boot, PHP, Java, Node.js, MySQL, MongoDB <br> Version control with Git <br> Technical Service: Calls and Emails"},hospital:{position:"Computer Technician",company:"Consorci Sanitari del Maresme",duration:"October 2016 - March 2017",duration2:"6 Months",type:"Apprenticeship",location:"Matar\xF3",description:"Hardware Maintenance (Computers, Laptops and Printers) <br> Network Deployment <br> Data Backups"}},De={daw:{degree:"Associate Degree, Web Development",place:"Thos i Codina High School",description:"Open Operating Systems and Network Services <br> Java, JavaScript, PHP, MySQL, HTML, CSS <br> Web Applications Deployment <br> End of Degree Project",duration:"2017 - 2019"},smx:{degree:"Associate Degree, Systems and Networks",place:"Thos i Codina High School",description:"Hardware Maintenance <br> Open Operating Systems (Client and Server) <br> Network Deployment <br> Information Security <br> Web Applications Deployment <br> Technical English <br> End of Degree Project",duration:"2014 - 2016"},b2:{degree:"English - B2",place:"Universitat Oberta de Catalunya",certificated:"June 2020",link:"See certificate"}},Ae={title:"Hello",subtitle:"My name is Marc Terradas Zapata",text1:"I am {age} years old, I was born on 04/26/1998 in Barcelona, and I am a software developer with {experience} years of experience",text2:"The technology stack that I like the most is: <b>Vue.js</b>, <b>Node.js</b> and <b>MongoDB</b>. I also work with <b>PHP</b>, <b>Python</b>, <b>Java</b> and <b>MySQL</b>",text3:"The languages I speak are: <b>Catalan</b> (native level), <b>Spanish</b> (native level) and <b>English</b> (B2 level)",text4:"My passion apart from programming is the world of sports. I have been doing sports since I was 3 years old, the ones that I have practiced and enjoyed the most have been: basketball (where I learned from as a child to work as a team), judo and athletics"},He={deployer:{description:"Node.js script to automate deploy of Vue.js app to GitHub Pages."},portfolio:{description:"Website build with Vue.js about my work experience, studies and personal open source projects as a developer."}};var xe={name:Ce,title:Pe,language:we,home:ke,work_title:je,education_title:$e,projects_title:Le,aboutMe_title:Te,download_cv:Ee,work:Ie,education:De,aboutMe:Ae,projects:He};d.use(v);const Je={cat:ce,es:Me,en:xe},C=new v({locale:localStorage.getItem("language")?localStorage.getItem("language"):"en",fallbackLocale:localStorage.getItem("language")?localStorage.getItem("language"):"en",messages:Object.assign(Je)}),Fe={languages:{cat:"Catal\xE0",es:"Castellano",en:"English"},selectedLanguage:localStorage.getItem("language")?localStorage.getItem("language"):"en"},Ve={getLanguages:e=>e.languages,getSelectedLanguage:e=>e.selectedLanguage},Oe={},Be={setSelectedLanguage(e,a){e.selectedLanguage=a,C.locale=a,localStorage.setItem("language",a)}};var Ne={namespaced:!0,state:Fe,getters:Ve,actions:Oe,mutations:Be};d.use(_);var P=new _.Store({state:{selectedPage:"home"},getters:{getSelectedPage:e=>e.selectedPage},mutations:{setSelectedPage:(e,a)=>{e.selectedPage=a}},actions:{},modules:{language:Ne}});const Re=()=>u(()=>import("./Home.cef72ce1.js"),["assets/Home.cef72ce1.js","assets/Home.c72bdec8.css","assets/vendor.10bf9365.js"]),Qe=()=>u(()=>import("./Work.e7a572ad.js"),["assets/Work.e7a572ad.js","assets/Work.7d993a0a.css","assets/vendor.10bf9365.js"]),Ge=()=>u(()=>import("./Education.a6cc3765.js"),["assets/Education.a6cc3765.js","assets/Education.4db96d8e.css","assets/vendor.10bf9365.js"]),We=()=>u(()=>import("./AboutMe.046b5061.js"),["assets/AboutMe.046b5061.js","assets/AboutMe.31038931.css","assets/vendor.10bf9365.js"]),qe=()=>u(()=>import("./Projects.4b88579a.js"),["assets/Projects.4b88579a.js","assets/Projects.9fd8d588.css","assets/vendor.10bf9365.js"]);d.use(h);const Ke=[{path:"/work",name:"work",component:Qe},{path:"/education",name:"education",component:Ge},{path:"/about",name:"about",component:We},{path:"/projects",name:"projects",component:qe},{path:"*",name:"home",component:Re}],w=new h({mode:"hash",routes:Ke});w.beforeEach((e,a,t)=>{P.commit("setSelectedPage",e.name),t(),window.scrollTo(0,0)});d.config.productionTip=!1;new d({router:w,store:P,i18n:C,render:e=>e(W)}).$mount("#app");export{m as n};
