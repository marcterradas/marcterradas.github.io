(function(e){function t(t){for(var n,r,s=t[0],c=t[1],l=t[2],d=0,u=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&u.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(u.length)u.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,r=1;r<a.length;r++){var s=a[r];0!==o[s]&&(n=!1)}n&&(i.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={app:0},o={app:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-0695460e":"6265f435","chunk-4ee9bb3d":"7580d1f4","chunk-5dd9a075":"484ddcb4","chunk-758ecc91":"a4675b48"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={"chunk-0695460e":1,"chunk-4ee9bb3d":1,"chunk-5dd9a075":1,"chunk-758ecc91":1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var n="css/"+({}[e]||e)+"."+{"chunk-0695460e":"33f4c025","chunk-4ee9bb3d":"10d2e3cb","chunk-5dd9a075":"10427651","chunk-758ecc91":"52f147fe"}[e]+".css",o=c.p+n,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===n||d===o))return t()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){l=u[s],d=l.getAttribute("data-href");if(d===n||d===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[e],p.parentNode.removeChild(p),a(i)},p.href=o;var g=document.getElementsByTagName("head")[0];g.appendChild(p)})).then((function(){r[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,a){n=o[e]=[t,a]}));t.push(n[2]=i);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(e);var u=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(p);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",u.name="ChunkLoadError",u.type=n,u.request=r,a[1](u)}o[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var p=d;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"08d3":function(e){e.exports=JSON.parse('{"name":"Marc Terradas Zapata","title":"Full Stack Developer","language":"Català","home":"Inici","work":"Experiència Laboral","education":"Educació","about_me":"Sobre mi","download_cv":"Descarregar CV","work_description":{"intowin":{"position":"Full Stack Developer","company":"Intowin","duration":"Juny 2019 - Present","duration2":"{y} Anys {m} Mes | {y} Anys {m} Mesos","type":"Jornada completa","location":"Mataró i Remot","description":"Frontend: Vue.js, SASS, HTML, CSS, JS, jQuery <br> Backend: CodeIgniter, PHP, Python, MySQL <br> Control de versions amb Git <br> Metodologia: Scrum i Kanban"},"kriter":{"position":"Full Stack Developer","company":"Kriter Software","duration":"Juny 2018 - Juny 2019","duration2":"1 Any 1 Mes","type":"Mitja Jornada","location":"Mataró","description":"Frontend: Bootstrap, SASS, HTML, CSS, JS, jQuery <br> Backend: Spring Boot, PHP, Java, Node.js, MySQL, MongoDB <br> Control de versions amb Git <br> Servei Tècnic: Trucades i Correus Electrònics"},"hospital":{"position":"Técnico Informático","company":"Consorci Sanitari del Maresme","duration":"Octubre 2016 - Marzo 2017","duration2":"6 Mesos","type":"Becario","location":"Mataró","description":"Manteniment d\'Ordinadors, portàtils i Impressores <br> Desplegament de xarxes <br> Còpies de seguretat"}},"education_description":{"daw":{"degree":"CFGS Desenvolupament d\'Aplicacions Web (DAW)","place":"I.E.S Thos i Codina (Mataró)","description":"Sistemes Operatius Lliures i Serveis en Xarxa <br> Java, JavaScript, PHP, MySQL, HTML, CSS <br> Desplegament d\'Aplicacions Web <br> Projecte Final de Grau","duration":"2017 - 2019"},"smx":{"degree":"CFGM Sistemes Microinformàtics i Xarxes (SMX)","place":"I.E.S Thos i Codina (Mataró)","description":"Manteniment d\'Ordinadors <br> Sistemes Operatius Lliures (Client i Servidor) <br> Desplegament de xarxes <br> Seguretat Informàtica <br> Desplegament d\'Aplicacions Web <br> Anglès Tècnic <br> Projecte Final de Grau","duration":"2014 - 2016"},"b2":{"degree":"Anglès - B2","place":"Universitat Oberta de Catalunya","certificated":"Juny 2020","link":"Veure certificat"}},"about_me_description":{"birthday":"26/04/1998, Barcelona","description":{"part1":"Hola!, em dic Marc, tinc {age} i sóc desenvolupador de software amb {experience} anys d\'experiència"},"title":"Hola","subtitle":"El meu nom és Marc Terradas Zapata","text1":"Tinc {age} anys, vaig néixer el 26/04/1998 a Barcelona, i soc desenvolupador de software amb {experience} anys d\'experiència","text2":"El stack tecnològic que més m\'agrada és: <b>Vue.js</b>, <b>Node.js</b> i <b>MongoDB</b>. També treballo amb <b>PHP</b>, <b>Python</b>, <b>Java</b> i <b>MySQL</b>","text3":"Els idiomes que parlo són: <b>Català</b> (nivell natiu), <b>Castellà</b> (nivell natiu) i <b>Anglès</b> (nivell B2)","text4":"La meva passió a part de la programació és el món de l\'esport. Porto fent esport des dels 3 anys, els que més he practicat i gaudit han estat: bàsquet (on vaig aprendre des de petit a treballar en equip), judo i atletisme"}}')},"0dae":function(e,t,a){e.exports=a.p+"img/linkedin.ba58e222.png"},"2cdc":function(e,t,a){e.exports=a.p+"img/linkedinHover.2f432b0e.png"},4631:function(e,t,a){"use strict";a("b6ec")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Nav"),a("router-view"),a("Footer")],1)},o=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{attrs:{id:"nav"}},[a("div",{staticClass:"right"},["home"!=e.selectedPage?a("div",{staticClass:"element",on:{click:function(t){return e.changeSelectedPage("home")}}},[e._v(e._s(e.$t("home")))]):e._e()]),a("div",{staticClass:"left"},[a("div",{staticClass:"element",attrs:{id:"cv"}},[a("a",{staticClass:"button",attrs:{href:"documents/marcterradas.pdf",download:""}},[e._v(e._s(e.$t("download_cv")))])]),a("div",{staticClass:"element"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedLanguage,expression:"selectedLanguage"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedLanguage=t.target.multiple?a:a[0]}}},e._l(e.languages,(function(t,n){return a("option",{key:n,domProps:{value:n}},[e._v(e._s(t))])})),0)])])])},s=[],c={name:"Nav",computed:{languages:function(){return this.$store.getters["language/getLanguages"]},selectedLanguage:{get:function(){return this.$store.getters["language/getSelectedLanguage"]},set:function(e){this.$store.commit("language/setSelectedLanguage",e)}},selectedPage:{get:function(){return this.$store.getters["getSelectedPage"]}}},methods:{changeSelectedPage:function(e){this.selectedPage!==e&&this.$router.push(e)}}},l=c,d=(a("f52f"),a("2877")),u=Object(d["a"])(l,i,s,!1,null,null,null),p=u.exports,g=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},b=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{attrs:{id:"footer"}},[n("div",{staticClass:"element"},[n("a",{attrs:{href:"https://github.com/marcterradas",target:"_blank"}},[n("div",{staticClass:"imageContainer"},[n("img",{staticClass:"image",attrs:{id:"github",src:a("84a8"),"data-src":"../../../public/img/githubHover.png"}}),n("img",{staticClass:"image",attrs:{id:"githubHover",src:a("d8fe")}})])])]),n("div",{staticClass:"element"},[n("a",{attrs:{href:"https://www.linkedin.com/in/marc-terradas-zapata/",target:"_blank"}},[n("div",{staticClass:"imageContainer"},[n("img",{staticClass:"image",attrs:{id:"linkedin",src:a("0dae"),"data-src":"../../../public/img/linkedinHover.png"}}),n("img",{staticClass:"image",attrs:{id:"linkedinHover",src:a("2cdc")}})])])])])}],m={},f=m,h=(a("4631"),Object(d["a"])(f,g,b,!1,null,null,null)),v=h.exports,S={name:"App",components:{Nav:p,Footer:v}},y=S,M=(a("5c0b"),Object(d["a"])(y,r,o,!1,null,null,null)),k=M.exports,C=(a("d3b7"),a("3ca3"),a("ddb0"),a("b0c0"),a("8c4f")),w=a("2f62"),P=a("a925"),x=a("08d3"),L=a("dbff"),_=a("cf46");n["a"].use(P["a"]);var T={cat:x,es:L,en:_},j=new P["a"]({locale:localStorage.getItem("language")?localStorage.getItem("language"):"en",fallbackLocale:localStorage.getItem("language")?localStorage.getItem("language"):"en",messages:Object.assign(T)}),D=j,I={languages:{cat:"Català",es:"Castellano",en:"English"},selectedLanguage:localStorage.getItem("language")?localStorage.getItem("language"):"en"},H={getLanguages:function(e){return e.languages},getSelectedLanguage:function(e){return e.selectedLanguage}},J={},E={setSelectedLanguage:function(e,t){e.selectedLanguage=t,D.locale=t,localStorage.setItem("language",t)}},A={namespaced:!0,state:I,getters:H,actions:J,mutations:E};n["a"].use(w["a"]);var O=new w["a"].Store({state:{selectedPage:"home"},getters:{getSelectedPage:function(e){return e.selectedPage}},mutations:{setSelectedPage:function(e,t){e.selectedPage=t}},actions:{},modules:{language:A}}),B=function(){return a.e("chunk-758ecc91").then(a.bind(null,"bb51"))},F=function(){return a.e("chunk-4ee9bb3d").then(a.bind(null,"f126"))},N=function(){return a.e("chunk-5dd9a075").then(a.bind(null,"7a0c"))},Q=function(){return a.e("chunk-0695460e").then(a.bind(null,"59e7"))};n["a"].use(C["a"]);var G=[{path:"/work",name:"work",component:F},{path:"/education",name:"education",component:N},{path:"/about",name:"about",component:Q},{path:"*",name:"home",component:B}],V=new C["a"]({mode:"hash",routes:G});V.beforeEach((function(e,t,a){O.commit("setSelectedPage",e.name),a(),window.scrollTo(0,0)}));var q=V;n["a"].config.productionTip=!1,new n["a"]({router:q,store:O,i18n:D,render:function(e){return e(k)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";a("9c0c")},"84a8":function(e,t,a){e.exports=a.p+"img/github.41397de2.png"},9834:function(e,t,a){},"9c0c":function(e,t,a){},b6ec:function(e,t,a){},cf46:function(e){e.exports=JSON.parse('{"name":"Marc Terradas Zapata","title":"Full Stack Developer","language":"English","home":"Home","work":"Work Experience","education":"Education","about_me":"About me","download_cv":"Download CV","work_description":{"intowin":{"position":"Full Stack Developer","company":"Intowin","duration":"June 2019 - Present","duration2":"{y} Years {m} Month | {y} Years {m} Months","type":"Full Time","location":"Mataró and Remote","description":"Frontend: Vue.js, SASS, HTML, CSS, JS, jQuery <br> Backend: CodeIgniter, PHP, Python, MySQL <br> Version control with Git Methodology: Scrum and Kanban"},"kriter":{"position":"Full Stack Developer","company":"Kriter Software","duration":"June 2018 - June 2019","duration2":"1 Year 1 Month","type":"Part Time","location":"Mataró","description":"Frontend: Bootstrap, SASS, HTML, CSS, JS, jQuery <br> Backend: Spring Boot, PHP, Java, Node.js, MySQL, MongoDB <br> Version control with Git <br> Technical Service: Calls and Emails"},"hospital":{"position":"Computer Technician","company":"Consorci Sanitari del Maresme","duration":"October 2016 - March 2017","duration2":"6 Months","type":"Apprenticeship","location":"Mataró","description":"Hardware Maintenance (Computers, Laptops and Printers) <br> Network Deployment <br> Data Backups"}},"education_description":{"daw":{"degree":"Associate Degree, Web Development","place":"Thos i Codina High School","description":"Open Operating Systems and Network Services <br> Java, JavaScript, PHP, MySQL, HTML, CSS <br> Web Applications Deployment <br> End of Degree Project","duration":"2017 - 2019"},"smx":{"degree":"Associate Degree, Systems and Networks","place":"Thos i Codina High School","description":"Hardware Maintenance <br> Open Operating Systems (Client and Server) <br> Network Deployment <br> Information Security <br> Web Applications Deployment <br> Technical English <br> End of Degree Project","duration":"2014 - 2016"},"b2":{"degree":"English - B2","place":"Universitat Oberta de Catalunya","certificated":"June 2020","link":"See certificate"}},"about_me_description":{"birthday":"1998-04-26, Barcelona","description":{"part1":"Hi! My name is Marc, I\'m {age} years old and I\'m a software developer with {experience} years of experience"},"title":"Hello","subtitle":"My name is Marc Terradas Zapata","text1":"I am {age} years old, I was born on 04/26/1998 in Barcelona, and I am a software developer with {experience} years of experience","text2":"The technology stack that I like the most is: <b>Vue.js</b>, <b>Node.js</b> and <b>MongoDB</b>. I also work with <b>PHP</b>, <b>Python</b>, <b>Java</b> and <b>MySQL</b>","text3":"The languages I speak are: <b>Catalan</b> (native level), <b>Spanish</b> (native level) and <b>English</b> (B2 level)","text4":"My passion apart from programming is the world of sports. I have been doing sports since I was 3 years old, the ones that I have practiced and enjoyed the most have been: basketball (where I learned from as a child to work as a team), judo and athletics"}}')},d8fe:function(e,t,a){e.exports=a.p+"img/githubHover.efc057a8.png"},dbff:function(e){e.exports=JSON.parse('{"name":"Marc Terradas Zapata","title":"Full Stack Developer","language":"Castellano","home":"Inicio","work":"Experiencia Laboral","education":"Educación","about_me":"Sobre mi","download_cv":"Descargar CV","work_description":{"intowin":{"position":"Full Stack Developer","company":"Intowin","duration":"Junio 2019 - Presente","duration2":"{y} Años {m} Mes | {y} Años {m} Meses","type":"Jornada Completa","location":"Mataró y Remoto","description":"Frontend: Vue.js, SASS, HTML, CSS, JS, jQuery <br> Backend: CodeIgniter, PHP, Python, MySQL <br> Control de versiones con Git <br> Metodología: Scrum y Kanban"},"kriter":{"position":"Full Stack Developer","company":"Kriter Software","duration":"Junio 2018 - Junio 2019","duration2":"1 Año 1 Mes","type":"Media Jornada","location":"Mataró","description":"Frontend: Bootstrap, SASS, HTML, CSS, JS, jQuery <br> Backend: Spring Boot, PHP, Java, Node.js, MySQL, MongoDB <br> Control de versiones con Git <br> Servicio Técnico: Llamadas y Correos Electrónicos"},"hospital":{"position":"Técnico Informático","company":"Consorci Sanitari del Maresme","duration":"Octubre 2016 - Marzo 2017","duration2":"6 Meses","type":"Becario","location":"Mataró","description":"Mantenimiento de Ordenadores, Portátiles e Impresoras <br> Despliegue de redes <br> Copias de seguridad"}},"education_description":{"daw":{"degree":"CFGS Desarrollo de Aplicaciones Web (DAW)","place":"I.E.S Thos i Codina (Mataró)","description":"Sistemas Operativos Libres y Servicios en Red <br> Java, JavaScript, PHP, MySQL, HTML, CSS <br> Despliegue de Aplicaciones Web <br> Proyecto Final de Grado","duration":"2017 - 2019"},"smx":{"degree":"CFGM Sistemas Microinformáticos y Redes (SMX)","place":"I.E.S Thos i Codina (Mataró)","description":"Mantenimiento de Ordenadores <br> Sistemas Operativos Libres (Cliente y Servidor) <br> Despliegue de redes <br> Seguridad Informática <br> Despliegue de Aplicaciones Web <br> Inglés Técnico <br> Proyecto Final de Grado","duration":"2014 - 2016"},"b2":{"degree":"Ingles - B2","place":"Universitat Oberta de Catalunya","certificated":"Junio 2020","link":"Ver certificado"}},"about_me_description":{"birthday":"26/04/1998, Barcelona","description":{"part1":"Hola!, me llamo Marc, tengo {age} años y soy desarrollador de software con {experience} años de experiencia"},"title":"Hola","subtitle":"Mi nombre es Marc Terradas Zapata","text1":"Tengo {age} años, nací el 26/04/1998 en Barcelona, y soy desarrollador de software con {experience} años de experiencia","text2":"El stack tecnológico que más me gusta es: <b>Vue.js</b>, <b>Node.js</b> y <b>MongoDB</b>. También trabajo con <b>PHP</b>, <b>Python</b>, <b>Java</b> y <b>MySQL</b>","text3":"Los idiomas que hablo son: <b>Catalán</b> (nivel nativo), <b>Castellano</b> (nivel nativo) e <b>Inglés</b> (nivel B2)","text4":"Mi pasión aparte de la programación es el mundo del deporte. Llevo haciendo deporte des de los 3 años, los que más he practicado y disfrutado han sido: baloncesto (donde aprendí des de pequeño a trabajar en equipo), judo y atletismo"}}')},f52f:function(e,t,a){"use strict";a("9834")}});
//# sourceMappingURL=app.5be4e563.js.map