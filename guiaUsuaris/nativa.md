<!-- TOP-MENU-START -->
<nav class="site-topnav">
<a href="https://consorciaoc.github.io/signador/">SIGNADOR</a>
<a href="https://consorciaoc.github.io/signador/guiaUsuaris/nativa.html" class="active">NATIVA</a>
<a href="https://consorciaoc.github.io/signador/guiaUsuaris/jnlp.html">JNLP</a>
<span class="soon" title="Properament (encara no disponible)">NATIVA MULTIUSUARI<span class="b">aviat</span></span><!-- Enllaç definitiu (activar quan estigui llest): <a href="https://consorciaoc.github.io/signador/multiUsuari/">NATIVA MULTIUSUARI</a> -->
<a href="https://consorciaoc.github.io/signador/guiaUsuaris/signaturaRemota.html">TCAT-RA</a>
</nav>
<style>
body{padding-top:54px}
.site-topnav{position:fixed;top:0;left:0;right:0;height:54px;display:flex;align-items:stretch;gap:2px;background:#10303f;z-index:1100;padding:0 8px;font-family:"Open Sans",Helvetica,Arial,sans-serif}
.site-topnav a{display:flex;align-items:center;color:#dfe8ee;text-decoration:none;padding:0 20px;font-weight:600;font-size:.9rem;letter-spacing:.03em;border-bottom:3px solid transparent}
.site-topnav a:hover{background:#15425a;color:#fff}
.site-topnav a.active{color:#fff;background:#15425a;border-bottom-color:#2bbf86}
.site-topnav .soon{display:flex;align-items:center;padding:0 20px;font-weight:600;font-size:.9rem;letter-spacing:.03em;color:#8a98a3;cursor:default}
.site-topnav .soon .b{font-size:.6rem;background:#2bbf86;color:#04331f;border-radius:9px;padding:1px 7px;margin-left:7px}
#docToc{top:54px !important;height:calc(100vh - 54px) !important}
.doc-toc__show{top:64px !important;font-size:.82rem !important;padding:.3rem .55rem !important}
.page-header{padding-top:0.9rem !important;padding-bottom:0.9rem !important}
.project-name{font-size:2rem !important;margin-bottom:.02rem !important}
.page-header .project-tagline{margin-top:0 !important;margin-bottom:.85rem !important}
.page-header .btn{display:inline-block;color:rgba(255,255,255,.85);background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.3);border-radius:.3rem;padding:.3rem .7rem !important;font-size:.78rem !important;font-weight:600;text-decoration:none;margin-bottom:.3rem !important}
.page-header .btn:hover{background:rgba(255,255,255,.2)}
</style>
<!-- TOP-MENU-END -->

<!-- TOC-SIDEBAR-START -->
<div id="docToc" class="doc-toc">
<div class="doc-toc__head"><span>Índex</span><button id="docTocHide" title="Amaga l'índex" aria-label="Amaga l'índex">&#10094;</button></div>
<nav id="docTocNav" class="doc-toc__nav"></nav>
<div id="docTocResize" class="doc-toc__resize" title="Arrossega per canviar l'amplada"></div>
</div>
<button id="docTocShow" class="doc-toc__show" title="Mostra l'índex">&#9776; Índex</button>
<style>
:root{--toc-w:300px}
html{scroll-behavior:smooth}
body{transition:margin-left .2s ease}
body.toc-open{margin-left:var(--toc-w)}
#docToc{position:fixed;top:0;left:0;height:100vh;width:var(--toc-w);background:#fafbfc;border-right:1px solid #e1e4e8;display:flex;flex-direction:column;z-index:1000;font-family:"Open Sans",Helvetica,Arial,sans-serif;font-size:.85rem;transition:transform .2s ease}
body.toc-closed #docToc{transform:translateX(-100%)}
#docToc .doc-toc__head{display:flex;align-items:center;justify-content:space-between;padding:.7rem 1rem;font-weight:700;color:#159957;border-bottom:1px solid #e1e4e8;background:#fff}
#docToc .doc-toc__head button{border:0;background:transparent;cursor:pointer;font-size:1rem;color:#586069}
#docToc .doc-toc__home{display:flex;align-items:center;padding:.5rem 1rem;color:#1e6bb8;text-decoration:none;border-bottom:1px solid #e1e4e8;font-size:.85rem;font-weight:600;letter-spacing:.03em;background:#fff}
#docToc .doc-toc__home:hover{background:#eef3f8;text-decoration:underline}
#docToc .doc-toc__home-ico{width:1.2em;height:1.2em;margin-right:.45rem;flex:0 0 auto}
#docTocNav{overflow:auto;padding:.4rem .25rem;flex:1}
#docTocNav ul{list-style:none;margin:0;padding:0}
#docTocNav ul ul{padding-left:.7rem}
#docTocNav .toc-row{display:flex;align-items:flex-start}
#docTocNav .toc-toggle{flex:0 0 1.1rem;width:1.1rem;border:0;background:transparent;cursor:pointer;color:#959da5;font-size:.7rem;line-height:1.7;padding:0;visibility:hidden}
#docTocNav li.has-children>.toc-row>.toc-toggle{visibility:visible}
#docTocNav .toc-toggle::before{content:"\25BE"}
#docTocNav li.collapsed>.toc-row>.toc-toggle::before{content:"\25B8"}
#docTocNav li.collapsed>ul{display:none}
#docTocNav .toc-link{display:block;flex:1;padding:.22rem .4rem;color:#586069;text-decoration:none;border-left:3px solid transparent;line-height:1.35}
#docTocNav .toc-link:hover{background:#eef3f8;border-left-color:#159957}
#docTocNav li.has-children>.toc-row>.toc-link{color:#000;font-weight:600}
#docTocNav li.lvl3>.toc-row>.toc-link{color:#000;font-weight:600}
#docTocNav li.lvl4>.toc-row>.toc-link{font-size:.82rem}
#docTocNav li.lvl5>.toc-row>.toc-link,#docTocNav li.lvl6>.toc-row>.toc-link{font-size:.8rem}
#docTocNav li.lvl2{border-top:1px solid #e1e4e8;margin-top:.35rem;padding-top:.15rem}
#docTocNav>ul>li.lvl2:first-child{border-top:0;margin-top:0;padding-top:0}
#docTocNav li.lvl2>.toc-row>.toc-link{font-weight:700;color:#159957;text-transform:uppercase;font-size:.78rem;letter-spacing:.04em}
#docTocNav li.lvl2>.toc-row>.toc-link:hover{background:#eaf5ef}
.doc-toc__resize{position:absolute;top:0;right:-3px;width:6px;height:100%;cursor:col-resize}
.doc-toc__show{position:fixed;top:10px;left:10px;z-index:1001;display:none;border:1px solid #d1d5da;background:#fff;color:#159957;border-radius:4px;padding:.35rem .6rem;cursor:pointer;font-weight:600;box-shadow:0 1px 3px rgba(0,0,0,.12)}
body.toc-closed .doc-toc__show{display:block}
@media(max-width:42em){body.toc-open{margin-left:0}#docToc{width:min(85vw,320px)}}
</style>
<script>
(function(){
function init(){
var nav=document.getElementById('docTocNav');
if(!nav)return;
var scope=document.querySelector('.main-content')||document.body;
var hs=[].slice.call(scope.querySelectorAll('h2,h3,h4,h5,h6')).filter(function(h){return !h.closest('#docToc');});
if(!hs.length)return;
var rootUl=document.createElement('ul');
var stack=[{level:1,ul:rootUl}];
hs.forEach(function(h){
 var level=parseInt(h.tagName.substring(1),10);
 if(!h.id){h.id=h.textContent.trim().toLowerCase().replace(/[^a-z0-9 -]/g,'').replace(/\s+/g,'-');}
 while(stack.length>1 && stack[stack.length-1].level>=level){stack.pop();}
 var parent=stack[stack.length-1];
 var li=document.createElement('li');
 li.className='toc-li lvl'+level;
 li.setAttribute('data-id',h.id);
 var row=document.createElement('div');row.className='toc-row';
 var btn=document.createElement('button');btn.className='toc-toggle';btn.type='button';btn.setAttribute('aria-label','Desplega/replega');
 var a=document.createElement('a');a.href='#'+h.id;a.className='toc-link';a.textContent=h.textContent.trim();
 row.appendChild(btn);row.appendChild(a);li.appendChild(row);
 parent.ul.appendChild(li);
 var childUl=document.createElement('ul');li.appendChild(childUl);
 stack.push({level:level,ul:childUl,li:li});
});
rootUl.querySelectorAll('li.toc-li').forEach(function(li){
 var c=li.querySelector(':scope > ul');
 if(c && c.children.length){li.classList.add('has-children');}
 else if(c){c.parentNode.removeChild(c);}
});
nav.appendChild(rootUl);
function loadC(){try{return JSON.parse(localStorage.getItem('docTocCollapsed')||'[]');}catch(e){return [];}}
function saveC(){var ids=[];rootUl.querySelectorAll('li.has-children.collapsed').forEach(function(x){ids.push(x.getAttribute('data-id'));});try{localStorage.setItem('docTocCollapsed',JSON.stringify(ids));}catch(e){}}
var col=loadC();
rootUl.querySelectorAll('li.has-children').forEach(function(li){if(col.indexOf(li.getAttribute('data-id'))>=0)li.classList.add('collapsed');});
nav.addEventListener('click',function(e){var b=e.target.closest('.toc-toggle');if(!b)return;e.preventDefault();b.closest('li.toc-li').classList.toggle('collapsed');saveC();});
var body=document.body;
function setOpen(o){body.classList.toggle('toc-open',o);body.classList.toggle('toc-closed',!o);try{localStorage.setItem('docTocOpen',o?'1':'0');}catch(e){}}
document.getElementById('docTocHide').onclick=function(){setOpen(false);};
document.getElementById('docTocShow').onclick=function(){setOpen(true);};
var saved=null;try{saved=localStorage.getItem('docTocOpen');}catch(e){}
setOpen(saved!=='0');
var root=document.documentElement,w=null;try{w=localStorage.getItem('docTocW');}catch(e){}
if(w){root.style.setProperty('--toc-w',w+'px');}
var rz=document.getElementById('docTocResize'),drag=false;
rz.addEventListener('mousedown',function(e){drag=true;e.preventDefault();document.body.style.userSelect='none';});
window.addEventListener('mousemove',function(e){if(!drag)return;var nw=Math.min(560,Math.max(180,e.clientX));root.style.setProperty('--toc-w',nw+'px');});
window.addEventListener('mouseup',function(){if(!drag)return;drag=false;document.body.style.userSelect='';var cur=getComputedStyle(root).getPropertyValue('--toc-w').trim().replace('px','');try{localStorage.setItem('docTocW',cur);}catch(e){}});
}
if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',init);}else{init();}
})();
</script>
<!-- TOC-SIDEBAR-END -->
<!-- TOC-HOME-OVERRIDE-START -->
<style>
/* Subapartats de nivell 3 sense negreta, en gris com les fulles */
#docTocNav li.lvl3>.toc-row>.toc-link{color:#586069;font-weight:400}
</style>
<!-- TOC-HOME-OVERRIDE-END -->

<h2>Què necessito per utilitzar l'<i>Aplicació Nativa</i>?</h2>

L'aplicació nativa és una aplicació d'escriptori que s'instal·la en la màquina del client i s'executa com a servei (en segon pla).

L'aplicació de la nativa es distribueix sota el termes de la [llicencia del MIT](../LICENSE.MD)

## 1. Sistemes operatius

Donem suport a la instal·lació i execució de l'aplicació nativa en els següents sistemes operatius:

 - *Ubuntu* - Versions [14.04 i superiors](https://wiki.ubuntu.com/Releases) 
 - *Windows* - Versions client [7 i superiors](https://en.wikipedia.org/wiki/List_of_Microsoft_Windows_versions#Client_versions)
 - *Windows* - Versions servidor [Server2008 i superiors](https://en.wikipedia.org/wiki/List_of_Microsoft_Windows_versions#Server_versions)
 - *MAC OS X* - Versions [OS.X 10.12 i superiors](https://en.wikipedia.org/wiki/MacOS#Release_history)
 
Indicar que aquest llistat s'anirà actualitzant, però no es donarà suport sobre sistemes operatius les versions dels quals hagin estat declarades obsoletes - [*EOL*](https://en.wikipedia.org/wiki/End-of-life_(product)) - per el propi fabricant.
 
**Nota**: Igual que en el cas dels navegadors pot funcionar en altres versions de sistemes operatius (e.g. altres distribucions de Linux com pot ser [Mint](https://www.linuxmint.com/)), però també igual que en el cas dels navegadors, aquestes altres versions no rebran suport per part nostra en cas de problemes d'execució.

### 1.1 Connectivitat

L'aplicació nativa és una aplicació en segon pla que respon a les crides que el navegador realitza contra el domini `nativa.aoclocal.cat`. En els nostres servidors de DNS d'aquesta adreça resol contra `127.0.0.1 (localhost)`. En cas d'entorns corporatius amb firewall, proxies, etc s'hauria de validar la resolució correcte d'aquest domini ja que d'altra manera el servei no podrà conectar amb l'aplicació nativa i sempre presentarà el _JNLP_ com a opció per a realitzar la signatura.

## 2. Descarrega

Per poder-la utilitzar cal que a l'hora de donar-se d'alta al servei, s'informi que es vol utilitzar la nativa _(allow Native)_. 
Un cop el procés d'alta s'hagi realitzat, ja es pot descarregar la versió de l'aplicació corresponent segons l'entorn que es vulgui utilitzar:

- Entorn [PRE](https://signador-pre.aoc.cat/signador/installNativa)
- Entorn [PRO](https://signador.aoc.cat/signador/installNativa)

En la pàgina d'instal·lació de la nativa l'usuari pot escollir la versió del Sistema Operatiu (tal i com es veu en la següent imatge).

![instalableSample](imgs/instalableSample.png)

**Nota**: Per defecte el navegador detecta el Sistema Operatiu i es descarrega la versió adequada.

**Nota 2**: En aquest enllaç https://github.com/ConsorciAOC/signador/releases podeu trobar en alguns casos release de proves que encara no s'han publicat al web (però que ho faran en breu) i que en alguns casos poden resoldré alguna causística o problema concret. Cal tenir en compte també que de vegades aquestes versions poden necessitar d'un canvi al web que encara no s'ha produït i poden no funcionar, en les _notes_ de la release trobareu l'avís si és el cas.

## 3. Instal·lació

Un cop descarregat l'executable procedim a realitzar la instal·lació. A continuació trobareu la instal·lació per a cadascún dels sistemes operatius suportats:

* [3.1 Windows](#31-windows)
* [3.2 MACOSX](#32-mac-os-x)
* [3.3 Ubuntu](#33-ubuntu)

### 3.1 Windows 

Un cop descarregat l'instal·lable per a Windows només cal fer doble clic sobre el mateix i seguir les següents passes de l'assistent d'instal·lació:

En aquesta primera pantalla, fa la carrega necessaria per a començar el procés d'instal·lació:

![assistent1Sample](imgs/nativa/windows/assitentInstall1.png)

Pantalla de benvinguda de l'instal·lador, amb una breu descripció, fem clic a `Següent>` per continuar el procés:

![assistent2Sample](imgs/nativa/windows/assitentInstall2.png)

Indica la carpeta per defecte on s'instal·larà la aplicació, en cas que volguem seleccionar-ne una de diferent podem fer-ho mitjançant el botó `Explorar`, en cas que ja ens sembli bé la ruta proposada fem clic a `Següent>`

![assistent3Sample](imgs/nativa/windows/assitentInstall3.png)

En aquesta pantalla apareixen les següents opcions:

* La primera permet indicar si es desitja que cada vegada que el PC arrenqui es comprovi si existeix una nova versió de l'aplicació nativa. Hi ha alguns entorns on el control/permisos de la instal·lació no las té el propi usuari sinó un usuari administrador, amb el que és molest que aparegui el missatge d'actualització quan en realitat no es diposa de permisos per dur-la a terme, en aquests casos, es possible que l'usuari vulgui evitar les comprovacions de les actualitzacions i ho pot fer desactivant aquesta opció. Per a la resta de casos recomanem tenir l'opció d'actualitzacions seleccionada.
* La segona opció permet indicar si es desitja signar des de _Firefox_ emprant els certificats del propi navegador, en cas que només es vulgui signar fent servir els certificats del propi sistema operatiu podem deixar l'opció desmarcada.

![assistent4Sample](imgs/nativa/windows/assitentInstall4.png)

Us apareixerà aquesta pantalla només en cas d'haver seleccionat l'opció per a signar des de _Firefox_ emprant els certificats del navegador, és necessari indicar la ruta on aquest està instal·lat per tal de que es puguin accedir a les llibreries necessàries corresponents a la versió del navegador de l'usuari per evitar errors durant les carregues.

![assistent5Sample](imgs/nativa/windows/assitentInstall5.png)

Tingueu en compte que si esteu duent a terme la instal·lació de la nativa de 32/64 bits, la ruta de _Firefox_ que indiqueu s'ha de correspondre amb aquesta arquitectura. En aquesta mateixa passa es farà la comprovació pertinent, en cas que la versió de la nativa i de _Firefox_ no és correspongui mostrarà el següent error. En cas que això us passi, haureu d'instal·lar la versió de la nativa amb l'arquitectura que és correspongui a la vostra versió de _Firefox_.

![assistent5Sample_error](imgs/nativa/windows/assistentInstall5_error.png)

En aquesta pantalla podrem seleccionar si desitgem accesos directes o la creació d'un menu d'inici, en qualsevol cas seleccionem la configuració desitjada i fem clic a `Següent>`:

![assistent6Sample](imgs/nativa/windows/assitentInstall6.png)

Aquest és el missatge final del instal·lador, un cop fem clic a `Finalitzar` arrencarà l'aplicació.

![assistent7Sample](imgs/nativa/windows/assitentInstall7.png)

Un cop s'hagi instal·lat i arrenqui l'aplicació, en cas que ho faci en Windows li apareixerà el següent missatge:

![installCert](imgs/installCertificate.PNG)

Pel correcte funcionament de l'aplicació ha d'acceptar la instal·lació del certificat. En aquest cas això permetra utilitzar l'aplicació des del _Chrome_, _Edge_, i _Explorer_.

Si a més a més es vol fer servir la nativa en Windows sobre _Firefox_ cal carregar la clau generada al magatzem de confiança del propi _Firefox_, aquesta passa només és necessari fer-lo una única vegada. Podeu veure les instruccions al apartat [5.2 Firefox](#52-firefox).

### 3.2 MAC OS X

:warning: En cas que us bloquegi la instal·lació, seguiu primer [aquestes passes](https://github.com/ConsorciAOC/signador/blob/master/guiaUsuaris/jnlp.md#problemes-espec%C3%ADfics-per-a-mac-os-x) abans de continuar amb l'instal·lació (són del bloqueig amb _JNLP_ però és el mateix que succeeix amb la nativa).

Un cop descarregat l'instal·lable per a *MAC OS X* només cal fer obrir el `.dmg`, fer clic sobre l'aplicació i seguir les següents passes de l'assistent d'instal·lació:

![installMac1](imgs/nativa/macosx/installMac1.png)

Panell de carrega previ a la instal·lació:

![installMac2](imgs/nativa/macosx/installMac2.png)

En aquest punt ens demana la contrasenya del usuari per tal de poder instal·lar l'aplicació. En el prompt indica que *Install4j* és un problema amb el software amb el que generem l'instal·lable, però és correcte.

![installMac3](imgs/nativa/macosx/installMac3.png)

Pantalla de benvinguda de l'instal·lador, amb una breu descripció, fem clic a `Següent>` per continuar el procés:

![installMac4](imgs/nativa/macosx/installMac4.png)

Indica la carpeta per defecte on s'instal·larà la aplicació, en cas que volguem seleccionar-ne una de diferent podem fer-ho mitjançant el botó `Explorar`, en cas que ja ens sembli bé la ruta proposada fem clic a `Següent>`

![installMac5](imgs/nativa/macosx/installMac5.png)

En aquesta pantalla apareixen l'opció d'ndicar si es desitja que cada vegada que el PC arrenqui es comprovi si existeix una nova versió de l'aplicació nativa. Hi ha alguns entorns on el control/permisos de la instal·lació no las té el propi usuari sinó un usuari administrador, amb el que és molest que aparegui el missatge d'actualització quan en realitat no es diposa de permisos per dur-la a terme, en aquests casos, es possible que l'usuari vulgui evitar les comprovacions de les actualitzacions i ho pot fer desactivant aquesta opció. Per a la resta de casos recomanem tenir l'opció d'actualitzacions seleccionada.

![installMac6](imgs/nativa/macosx/installMac6.png)

Aquest és el missatge final del instal·lador, un cop fem clic a `Finalitzar` arrencarà l'aplicació.

![installMac7](imgs/nativa/macosx/installMac7.png)

Un cop finalitzada la instal·lació per al correcte funcionament de l'aplicació serà necessari instal·lar el certificat al magatzem de claus propi de MAC OS X, per a utilitzar l'aplicació amb _Safari_ o _Chrome_, podeu veure les instruccions al apartat [5.3 MAC OS X](#53-MAC-OS-X). O en cas de voler utilitzar _Firefox_ instal·lar el certificat al magatzem d'aquest navegador, podeu veure les instruccions al apartat [5.2 Firefox](#52-firefox)

### 3.3 Ubuntu

La operació d'instal·lació a Ubuntu s'ha de fer amb l'usuari que utilitzarà l'aplicació i el que tingui les claus amb les que desitja signar carregades al magatzem de claus del firefox.

Amb l'usuari amb el que volem fer la instal·lació i amb el que hagim descarregat l'instal·lador, cerquem l'instal·lador i donem permissos d'execució:

`chmod 754 AppNativaSignador-x64.sh`

Ara ja podem executar l'instal·lador:

`./AppNativaSignador-x64.sh`

A partir d'aqui podràs instal·lar l'aplicatiu seguint les passes de l'instal·lador:

![ubuntu_install_1](imgs/ubuntu/install/1.png)

![ubuntu_install_2](imgs/ubuntu/install/2.png)

Proposa l'instal·lació en la `/home` de l'usuari:

![ubuntu_install_3](imgs/ubuntu/install/3.png)

Permet desactivar la comprovació d'actualitzacions a l'iniciar l'aplicació:

![ubuntu_install_4](imgs/ubuntu/install/4.png)

La selecció d'aquesta ruta és important, s'ha de seleccionar el directori d'instal·lació on es troba el firefox, d'altre manera l'aplicació no serà capaç de carregar els certificats d'aquest magatzem:

![ubuntu_install_5](imgs/ubuntu/install/5.png)

![ubuntu_install_6](imgs/ubuntu/install/6.png)

![ubuntu_install_6](imgs/ubuntu/install/7.png)

![ubuntu_install_6](imgs/ubuntu/install/8.png)

Un cop instal·lat, l'instal·lador no arrenca l'aplicatiu de la nativa. Per tal de fer-ho caldrà anar al directori de l'instal·lació (per defecte `$HOME/Signador`) i arrencar l'aplicació. Ho podeu fer amb la següent comanda:

`$HOME/Signador/Signador`

Cada cop que arrenqueu el sistema i vulgueu fer ús de la nativa, haureu d'arrencar-la amb aquesta comanda.

La primera vegada que l'aplicació s'executa genera les claus necessaries per al seu funcionament, aquest procés només és fa el primer cop que arrenca, la resta de vegades aprofita les claus ja generades.

Abans de fer la validació, en el cas d'Ubuntu, serà necessari carregar la clau generada al magatzem de confiança del navegador, aquesta passa només és necessari fer-lo una única vegada. Podeu veure les instruccions al apartat [5.2 Firefox](#52-firefox)

## 4. Validació

Un cop s'hagi instal·lat l'aplicació nativa, es pot realitzar un simple test de funcionament per comprovar que la instal·lació s'ha realitzat correctament.

- Entorn [PRE](https://signador-pre.aoc.cat/signador/testNativa)
- Entorn [PRO](https://signador.aoc.cat/signador/testNativa)

Si el procés s'ha realitzat correctament la pàgina de test ens mostrarà la següent imatge:

![testSample](imgs/testSample.png)

En cas contrari, es mostrarà el següent error:

![testKOSample](imgs/testKOSample.png)

**NOTES:** 
* Si acabeu d'instal·lar l'aplicació nativa reviseu el següent apartat d'instal·lar el cerfiticat.
* Si el problema persisteix poseu-vos en contacte amb el Suport a Usuari del Consorci AOC.

## 5. Instal·lar Certificat

Perquè funcioni l'aplicació nativa és obligatori que s'instal·li el certificat en el seu navegador o sistema operatiu.

### 5.1 Windows

La càrrega del certificat al magatzem de _Windows_ permet el correcte funcionament de l'aplicació amb Internet explorer, Edge i Chrome.

A més a més en el magatzem de _Windows_ s'instal·la automàticament, tot i que s'ha d'acceptar la instal·lació del certificat mitjançant un popup que apareix durant aquesta. 

En cas que no s'hagi cancel·lat l'instal·lació en aquest popup serà necessari que l'usuari ho faci manualment seguint les següents passes:

* Cerca en el buscador de windows: _Opcions d'internet_

![opcionsWIN](imgs/opcionsWIN.png)

* Obre les Opcions d'internet --> accedeix a la pestanya Contingut --> Certificats

![visualitzaWIN](imgs/visualitzaWIN.png)

* En la pantalla de certificats, accedir a la pestanya Entitats de Certificació arrel de confiança i clicar a Importar

![importCertWIN](imgs/importCertWIN.png)

* En la pantalla d'assistent per la importació de certificats cliqui a següent

![importCert2WIN](imgs/importCert2WIN.png)

* Cliqui a examinar per escollir el certificat a Importar

![importCert3WIN](imgs/importCert3WIN.png)

* Escull el certificat a importar.
El certificat a instal·lar, root.crt, es troba a la carpeta a on s'ha instal·lat l'aplicació nativa, per defecte és a: 
C:\Program Files (x86)\Signador\lib\certificate

![escullCertWIN](imgs/escullCertWIN.png)

* Un cop seleccionat el certificat cliqui a següent

![importCert4WIN](imgs/importCert4WIN.png)

* En la següent pantalla torni a clicar següent

![importCert5WIN](imgs/importCert5WIN.png)

* Cliqui a Finalitzar per importar el certificat

![importCert6WIN](imgs/importCert6WIN.png)

* Torni a realitzar una validació.

### 5.2 Firefox

_Firefox_ disposa del seu propi magatzem de claus, per tant independentment del sistema operatiu sobre el que s'estigui executant, si vol fer servir l'aplicació amb _Firefox_ serà necessari carregar el certificat segueint les següents passes que apliquen per qualsevol sistema operatiu:

* Obrir Firefox --> Accedir a Opcions 

![opcionsFF](imgs/opcionsFF.png)

* Avançat --> Certificats --> Visualitza els Certificats

![visualitzaFF](imgs/visualitzaFF.png)

* En la pantalla de certificats, accedir a la pestanya Entitats i clicar a Importar

![importCertFF](imgs/importCertFF.png)

* Escull el certificat a importar.
El certificat a instal·lar, `root.crt`, es troba a la carpeta a on s'ha instal·lat l'aplicació nativa, per defecte és a: 

- *Windows 32 bits*  C:\Program Files (x86)\Signador\lib\certificate
- *Windows 64 bits*  C:\Program Files\Signador\lib\certificate
- *Linux 32 bits*   $HOME/Signador/lib/certificate
- *Linux 64 bits*   $HOME/Signador/lib/certificate
- *MACOSX*  /Applications/Signador.app/Contents/Resources/app/lib/certificate

**En el cas de Linux en cas de no trobar el `root.crt`, recordeu que aquest es genera quan s'arrenca l'aplicació per primer cop, per tant si no el trobeu, recordeu arrencar l'aplicació tal i com s'indica en els [pases de la instal·lació](#33-ubuntu)**

![escullCertFF](imgs/escullCertFF.png)

* Un cop seleccionat el certificat, marqui a confiar per identificar a llocs web

![confiarCertFF](imgs/confiarCertFF.png)

* Torni a realitzar una validació.

### 5.3 MAC OS X

Per a MAC OS X es carreguen dos certificat de forma automàtica però l'usuari ha de procedir a acceptar-los manualment amb les passes que es descriuen a continuació:

* Cerca en el buscador de MAC: _llaveros_

![searchMAC](imgs/searchMAC.png)

* A _Llaveros_ escull la categoria _Certificats_. En el llistat aparèixen dos certificats amb els noms: _Aplicació nativa - AOC_ i _nativa.aoclocal.cat_.
Escull _nativa.aoclocal.cat_.

![llistatMAC](imgs/llavero_certs.jpg)

* En el certificat, escull la opció "Confiar sempre".

![trustCertMAC](imgs/nativa.aoclocal.cat.png)

* Repetir el pas anterior pel certificat _Aplicació nativa - AOC_.
Torna a la categoria _Certificats_, escull el certificat _Aplicació nativa - AOC_, i per últim escull "Confiar sempre".

![trustCertMAC](imgs/trustCertMAC.png)

* Torni a realitzar una validació.

### Firefox
Si fa servir Firefox, podria ser que aquest no confïi per defecte en els certificats del sistema. Per tal de que confiïi en els certificats a _Llaveros_, cal configurar Firefox de la següent manera:
* Escriure "about:config" en la barra de cerca de Firefox. 
* Acceptar el risc i continuar.
* Cercar "security.enterprise_roots.enabled", i posar-ho a "true".
D'aquesta manera Firefox confiarà en els certificats instal·lats al sistema (_Llaveros_).

**Nota**: Si el problema persisteix poseu-vos en contacte amb el Suport a Usuari del Consorci AOC.

## 6. Funcionament

Un cop s'ha instal·lat l'aplicació i aquesta funciona correctament, el canvi del funcionament de la versió **JNLP** a la **Nativa** és totalment transparent per l'usuari. 

Els únics canvis són visuals, ja que no es descarrega cap fitxer com en el cas de la versió **JNLP**.
A l'usuari se li mostra un llistat dels certificats dels que disposa i només ha d'escollir el que vol per signar. 
A continuació es mostra un exemple de la pantalla de funcionament del signador en cas de tenir la nativa instal·lada.

![nativaSample](imgs/nativaSample.png)

## 7. Desinstal·lació

A continuació és mostren les passes necessaries per a desinstal·lar l'aplicació depenent del sistems operatiu.

### 7.1 Windows

En cas que es vulgui desinstal·lar, es pot accedir a la carpeta a on s'hagi instal·lat la aplicació (per defecte `C:\Program Files (x86)\Signador` o `C:\Program Files\Signador`), executar el fitxer _uninstall.exe_:

![uninstallWinPrevi](imgs/nativa/windows/uninstallexeWin.png)

I seguir les següents passes.

![desinstalar1Sample](imgs/desinstalar1Sample.png)

![desinstalar2Sample](imgs/desinstalar2Sample.png)

Si disposeu d'un sistema operatiu Windows 10, podeu utilitzar la tecla <kbd><img src="imgs/nativa/windows/winlogo.png"/></kbd> i directament escriure `uninstall`, obrir el `Desinstal·lador de APP nativa signador` i seguir les mateixes passes de desinstal·lació.

![uninstallWin10](imgs/nativa/windows/uninstallWin10.png)

### 7.2 MAC OS X

En aquest cas, només cal anar a `Aplicacions` des del `Finder` i arrosegar el `Signador.app` a la paperera, demanarà la contrasenya d'usuari per a confirmar l'esborrat:

![uninstallMac1](imgs/nativa/macosx/uninstallMac1.png)

![uninstallMac2](imgs/nativa/macosx/uninstallMac2.png)

## 8. Configuració avançada

### 8.1 PKCS11 addicionals

En cas que fent ús del signador a través del magatzem de Firefox, el signador no detecti algun certificat carregat en un dispositiu PKCS11, es pot intentar indicar al signador a través d'un paràmetre de configuració la llibreria d'aquest per tal de que la carregui.

Per tal de fer-ho, cal afegir la ruta amb el _.so (linux) o la .dll (windows)_ de la llibreria nativa del dispositiu PKCS11 al fitxer `$SIGNADOR_HOME/Signador.vmoptions`, mitjançant el següent paràmetre: `-Duser.pkcs11.path=/path/al/teu/pkcs11.so`.

El fitxer `Signador.vmoptions` té un contingut similar a:

```
-Duser.firefox.dir=/usr/lib/firefox
-Djava.net.useSystemProxies=true
-Djavax.net.ssl.trustStore=/home/albert/Signador/lib/certificate/cacerts
```

Només caldria afegir doncs una línia extra indicant la ruta a la llibreria de la següent forma:

```
-Duser.pkcs11.path=/path/al/teu/pkcs11.so << AQUEST ÉS EL PARÀMETRE
-Duser.firefox.dir=/usr/lib/firefox
-Djava.net.useSystemProxies=true
-Djavax.net.ssl.trustStore=/home/albert/Signador/lib/certificate/cacerts
```

## 9. Troubleshooting

En cas de problemes amb l'execució de l'aplicació nativa podeu obrir una petició a través del nostre [portal de suport](https://www.aoc.cat/suport/) fent una descripció del problema, i afegint la següent informació: *sistema operatiu*, *navegador*, i si és possible els fitxers amb els logs de l'execució que podeu trobar en el path de la instal·lació de la nativa a `$SIGNADOR_HOME/log/webappTemp.log` i `$SIGNADOR_HOME/error.log`. El formulari no accepta adjunts amb extensió `.log`, haureu de canviar l'extensió a `.txt` abans d'adjuntar-los.

En el cas de sistemes operatius Windows, seguint la instal·lació per defecte, la variable `$SIGNADOR_HOME` pren el valor `C:\Program Files (x86)\Signador` per a l'instal·lable de _32-bit_ i `C:\Program Files\Signador` per al de _64-bit_. Per tant els fitxers de logs els trobareu a `C:\Program Files (x86)\Signador\log\webappTemp.log`,`C:\Program Files (x86)\Signador\error.log` i `C:\Program Files\Signador\log\webappTemp.log` i `C:\Program Files\Signador\error.log` respectivament.

En el cas de sistema operatiu Ubuntu, la variable `$SIGNADOR_HOME` en la instal·lació per defecte pren el valor `$HOME\Signador` i podeu accedir a la carpeta dels logs amb la comanda `cd $HOME\Signador\` per a trobar el fitxer `error.log` i la comanda `cd $HOME\Sigandor\log` per a trobar el fitxer `webappTemp.log`.

En el cas de sistema operatiu Mac OS X, trobarem els logs del Signador en la següent carpeta relativa al directori d'instal·lació del Signador:
![logMac1](imgs/nativa/macosx/mac_nativa_log.png)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             