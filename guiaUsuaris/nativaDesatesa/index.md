---
title: "Instal·lació desatesa (MSI)"
description: "Documentació del servei Signador"
---
<!-- TOP-MENU-START -->
<nav class="site-topnav">
<a href="https://consorciaoc.github.io/signador/">SIGNADOR</a>
<a href="https://consorciaoc.github.io/signador/guiaUsuaris/nativa.html" class="active">NATIVA</a>
<a href="https://consorciaoc.github.io/signador/guiaUsuaris/jnlp.html">JNLP</a>
<a href="https://consorciaoc.github.io/signador/multiUsuari/">NATIVA MULTIUSUARI</a>
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

<p>Aquesta pàgina descriu com instal·lar l'<a href="/signador/guiaUsuaris/nativa.html">Aplicació Nativa del Signador</a> de manera <strong>desatesa</strong> (silenciosa) a Windows a partir del paquet <code>.msi</code>, sense la interacció de l'usuari amb l'assistent gràfic. Si busqueu la instal·lació pas a pas amb l'assistent, consulteu la <a href="/signador/guiaUsuaris/nativa.html#41-windows">guia d'instal·lació de la nativa</a>.</p>

<h2 id="introduccio">1. Introducció</h2>

<p>L'Aplicació Nativa del Signador és una aplicació d'escriptori que s'instal·la a l'equip de l'usuari i s'executa en segon pla (com a servei), atenent les peticions de signatura que el navegador li fa. La <em>instal·lació desatesa</em> permet desplegar-la sense obrir cap finestra ni respondre a l'assistent gràfic.</p>

<p>Aquest tipus d'instal·lació està pensat per a administradors de sistemes que han de desplegar l'aplicació en molts equips alhora; per exemple mitjançant <em>scripts</em>, polítiques de grup (GPO) o eines de desplegament de programari (SCCM, Intune, etc.).</p>

<p><strong>Nota:</strong> Si només heu d'instal·lar l'aplicació en un únic equip, és més senzill fer servir l'instal·lable gràfic (doble clic i seguir l'assistent). La instal·lació desatesa és especialment útil quan es vol automatitzar o repetir el desplegament.</p>

<h2 id="requisits">2. Requisits previs</h2>

<ul>
<li><strong>Sistema operatiu:</strong> Windows client 7 o superior, o Windows Server 2008 o superior.</li>
<li><strong>Permisos d'administrador:</strong> La instal·lació escriu a <code>C:\Program Files</code> i registra components del sistema, per la qual cosa cal executar la consola de comandes com a administrador.</li>
<li><strong>Arquitectura:</strong> Cal fer servir el paquet MSI que correspongui a l'arquitectura de l'equip (32 o 64 bits). Si es configura la integració amb Firefox, l'arquitectura del paquet ha de coincidir amb la del Firefox instal·lat.</li>
<li><strong>Firefox (opcional):</strong> Només si voleu signar amb els certificats del magatzem de Firefox. En aquest cas necessitareu la ruta d'instal·lació del navegador.</li>
<li><strong>Connectivitat:</strong> L'aplicació respon al domini <code>nativa.aoclocal.cat</code>, que ha de resoldre contra <code>127.0.0.1</code> (localhost). En entorns amb tallafocs o proxy corporatiu cal validar que aquesta resolució funcioni correctament.</li>
</ul>

<h2 id="obtencio">3. Obtenció del paquet MSI</h2>

<p>El paquet s'obté des de la pàgina de descàrrega de la nativa, un cop l'organització s'ha donat d'alta al servei amb l'opció de nativa activada. Cal escollir la versió corresponent al sistema operatiu i l'arquitectura:</p>

- [Descarrega] (https://signador.aoc.cat/signador/downloadNativaMsi)

<p>El fitxer descarregat té un nom del tipus <code>ANS_windows-x64_&lt;versió&gt;.msi</code> (per exemple <code>ANS_windows-x64_1_0_3_4.msi</code>). Als exemples d'aquesta pàgina es fa servir aquest nom; substituïu-lo pel de la versió que hàgiu descarregat.</p>

<h2 id="installacio-desatesa">4. Instal·lació desatesa</h2>

<p>La instal·lació es fa amb l'eina <code>msiexec</code>, inclosa a Windows. Obriu una finestra de <strong>Símbol del sistema (CMD)</strong> o <strong>PowerShell</strong> com a administrador i situeu-vos a la carpeta on hàgiu desat el fitxer MSI.</p>

<h3 id="installacio-basica">4.1 Instal·lació bàsica (sense fitxer de paràmetres)</h3>

<p>Instal·la l'aplicació amb els valors per defecte, sense mostrar cap finestra i generant un fitxer de registre:</p>

<pre><code>msiexec /i .\ANS_windows-x64_1_0_3_4.msi /qn /Lp .\out.log</code></pre>

<p>On:</p>

<ul>
<li><code>/i</code> indica que es vol instal·lar el paquet.</li>
<li><code>/qn</code> executa la instal·lació en mode silenciós, sense interfície d'usuari.</li>
<li><code>/Lp .\out.log</code> desa al fitxer <code>out.log</code> les propietats de la instal·lació. Podeu fer servir <code>/L*v .\out.log</code> per a un registre detallat complet (recomanat per a diagnòstic).</li>
</ul>

<h3 id="installacio-parametres">4.2 Instal·lació amb fitxer de paràmetres (transform .mst)</h3>

<p>Si voleu personalitzar la instal·lació (directori de destinació, idioma, integració amb Firefox, etc.) podeu aplicar un fitxer de transformació <code>.mst</code> amb l'opció <code>/t</code>:</p>

<pre><code>msiexec /i ANS_windows-x64_1_0_3_4.msi /t params.mst /qn /Lv .\out.log</code></pre>

<p>El fitxer <code>params.mst</code> conté els paràmetres de configuració, un per línia. Exemple de contingut:</p>

<pre><code>configureFirefox$Boolean=true
firefoxDirectory=C\:\\Program Files\\Mozilla Firefox
sys.adminRights$Boolean=true
sys.installationDir=C\:\\Program Files\\Signador
sys.languageId=en
sys.programGroupAllUsers$Boolean=true
sys.programGroupDisabled$Boolean=false
sys.programGroupName=APP Nativa Signador
userCheckForUpdates$Boolean=true</code></pre>

<p><strong>Nota:</strong> a les rutes de Windows cal escapar els caràcters especials: els dos punts s'escriuen com <code>\:</code> i les barres invertides es dupliquen (<code>\\</code>). Per exemple, <code>C:\Program Files</code> s'escriu <code>C\:\\Program Files</code>.</p>

<h2 id="parametres-configuracio">5. Paràmetres de configuració</h2>

<p>La taula següent descriu els paràmetres que es poden indicar al fitxer de configuració. Els paràmetres acabats en <code>$Boolean</code> accepten els valors <code>true</code> o <code>false</code>.</p>

<table>
<thead><tr><th>Paràmetre</th><th>Descripció</th></tr></thead>
<tbody>
<tr><td><code>configureFirefox$Boolean</code></td><td>Indica si es vol configurar el Signador perquè treballi amb Firefox (fent servir els certificats del navegador).</td></tr>
<tr><td><code>firefoxDirectory</code></td><td>Directori d'instal·lació de Firefox. Només s'aplica si <code>configureFirefox</code> és <code>true</code>. Ha de correspondre a l'arquitectura del paquet.</td></tr>
<tr><td><code>sys.installationDir</code></td><td>Directori on s'instal·larà el Signador. Per defecte <code>C:\Program Files\Signador</code> (64 bits) o <code>C:\Program Files (x86)\Signador</code> (32 bits).</td></tr>
<tr><td><code>sys.languageId</code></td><td>Idioma de l'instal·lador. Valors admesos: <code>es</code> (castellà), <code>ca</code> (català), <code>en</code> (anglès).</td></tr>
<tr><td><code>sys.adminRights$Boolean</code></td><td>Indica que la instal·lació s'executa amb permisos d'administrador.</td></tr>
<tr><td><code>sys.programGroupAllUsers$Boolean</code></td><td>Crea el grup de programes (menú d'inici) per a tots els usuaris de l'equip.</td></tr>
<tr><td><code>sys.programGroupDisabled$Boolean</code></td><td>Si és <code>true</code>, no es crea cap grup de programes al menú d'inici.</td></tr>
<tr><td><code>sys.programGroupName</code></td><td>Nom del grup de programes al menú d'inici.</td></tr>
<tr><td><code>userCheckForUpdates$Boolean</code></td><td>Indica si es volen cercar actualitzacions automàticament cada cop que s'engega el Signador. Recomanem deixar-ho actiu, tret que l'usuari no tingui permisos per actualitzar.</td></tr>
</tbody>
</table>

<h2 id="referencia-msiexec">6. Referència d'opcions de msiexec</h2>

<p>Aquesta és la sintaxi general de l'eina Windows Installer (<code>msiexec.exe</code>):</p>

<pre><code>msiexec /Opció &lt;Paràmetre necessari&gt; [Paràmetre opcional]</code></pre>

<h3 id="opcions-installacio">6.1 Opcions d'instal·lació</h3>

<table>
<thead><tr><th>Opció</th><th>Descripció</th></tr></thead>
<tbody>
<tr><td><code>/i &lt;Producte.msi&gt;</code></td><td>Instal·la o configura un producte.</td></tr>
<tr><td><code>/a &lt;Producte.msi&gt;</code></td><td>Instal·lació administrativa: instal·la un producte a la xarxa.</td></tr>
<tr><td><code>/j[u|m] &lt;Producte.msi&gt;</code></td><td>Anuncia un producte: <code>m</code> per a tots els usuaris, <code>u</code> per a l'usuari actual.</td></tr>
<tr><td><code>/x &lt;Producte.msi | Codi&gt;</code></td><td>Desinstal·la el producte.</td></tr>
</tbody>
</table>

<h3 id="opcions-visualitzacio">6.2 Opcions de visualització (nivell d'interfície)</h3>

<table>
<thead><tr><th>Opció</th><th>Descripció</th></tr></thead>
<tbody>
<tr><td><code>/quiet</code></td><td>Mode silenciós, sense interacció de l'usuari.</td></tr>
<tr><td><code>/passive</code></td><td>Mode desatès: només es mostra la barra de progrés.</td></tr>
<tr><td><code>/qn</code></td><td>Sense interfície d'usuari (silenciós).</td></tr>
<tr><td><code>/qb</code></td><td>Interfície bàsica.</td></tr>
<tr><td><code>/qr</code></td><td>Interfície reduïda.</td></tr>
<tr><td><code>/qf</code></td><td>Interfície completa (valor per defecte).</td></tr>
<tr><td><code>/help</code></td><td>Mostra la informació d'ajuda.</td></tr>
</tbody>
</table>

<h3 id="opcions-reinici">6.3 Opcions de reinici</h3>

<table>
<thead><tr><th>Opció</th><th>Descripció</th></tr></thead>
<tbody>
<tr><td><code>/norestart</code></td><td>No reinicia l'equip un cop finalitzada la instal·lació.</td></tr>
<tr><td><code>/promptrestart</code></td><td>Demana a l'usuari que reiniciï l'equip si cal.</td></tr>
<tr><td><code>/forcerestart</code></td><td>Reinicia sempre l'equip després de la instal·lació.</td></tr>
</tbody>
</table>

<h3 id="opcions-registre">6.4 Opcions de registre (logs)</h3>

<p>L'opció <code>/l</code> seguida de banderes controla què es registra. La sintaxi és <code>/l[i|w|e|a|r|u|c|m|o|p|v|x|+|!|*] &lt;Fitxer&gt;</code>.</p>

<table>
<thead><tr><th>Bandera</th><th>Registra</th></tr></thead>
<tbody>
<tr><td><code>i</code></td><td>Missatges d'estat.</td></tr>
<tr><td><code>w</code></td><td>Avisos no greus.</td></tr>
<tr><td><code>e</code></td><td>Tots els missatges d'error.</td></tr>
<tr><td><code>a</code></td><td>Inici de les accions.</td></tr>
<tr><td><code>r</code></td><td>Registres específics de l'acció.</td></tr>
<tr><td><code>u</code></td><td>Sol·licituds de l'usuari.</td></tr>
<tr><td><code>c</code></td><td>Paràmetres inicials de la interfície.</td></tr>
<tr><td><code>m</code></td><td>Informació de sortida per falta de memòria o error greu.</td></tr>
<tr><td><code>o</code></td><td>Missatges d'espai insuficient al disc.</td></tr>
<tr><td><code>p</code></td><td>Propietats de Terminal Server.</td></tr>
<tr><td><code>v</code></td><td>Informació detallada (verbose).</td></tr>
<tr><td><code>x</code></td><td>Informació de depuració addicional.</td></tr>
<tr><td><code>+</code></td><td>Afegeix al fitxer de registre existent.</td></tr>
<tr><td><code>!</code></td><td>Buida cada línia al registre.</td></tr>
<tr><td><code>*</code></td><td>Registra tota la informació, excepte les opcions <code>v</code> i <code>x</code>.</td></tr>
</tbody>
</table>

<p>L'opció <code>/log &lt;Fitxer&gt;</code> és equivalent a <code>/l* &lt;Fitxer&gt;</code>. Per a diagnòstic, la combinació més útil és <code>/L*v &lt;Fitxer&gt;</code>, que genera un registre complet i detallat.</p>

<h3 id="altres-opcions">6.5 Altres opcions</h3>

<table>
<thead><tr><th>Opció</th><th>Descripció</th></tr></thead>
<tbody>
<tr><td><code>/update &lt;Update.msp&gt;</code></td><td>Aplica actualitzacions (fitxers <code>.msp</code>), separades per punt i coma.</td></tr>
<tr><td><code>/f[p|e|c|m|s|o|d|a|u|v]</code></td><td>Repara un producte instal·lat (les banderes controlen quins fitxers o entrades es reparen).</td></tr>
<tr><td><code>PROPIETAT=Valor</code></td><td>Estableix propietats públiques del paquet des de la línia de comandes.</td></tr>
</tbody>
</table>

<p><strong>Nota:</strong> Windows Installer utilitzat com a referència: versió 5.0.19041.3636. Per a més detalls consulteu el SDK de Windows Installer de Microsoft.</p>

<h2 id="certificat">7. Pas posterior imprescindible: instal·lació del certificat</h2>

<p>Perquè l'aplicació funcioni cal instal·lar el seu certificat al magatzem del navegador o del sistema operatiu. Aquest pas no es pot ometre.</p>

<p>En la instal·lació gràfica, en engegar l'aplicació apareix un avís per acceptar la instal·lació del certificat al magatzem de Windows (això habilita Chrome, Edge i Internet Explorer). En un desplegament desatès, si aquest avís no s'accepta caldrà importar el certificat manualment. El certificat, anomenat <code>root.crt</code>, es troba a la carpeta d'instal·lació:</p>

<ul>
<li><strong>Windows 64 bits:</strong> <code>C:\Program Files\Signador\lib\certificate</code></li>
<li><strong>Windows 32 bits:</strong> <code>C:\Program Files (x86)\Signador\lib\certificate</code></li>
</ul>

<p>Per importar-lo manualment al magatzem de Windows: obriu <em>Opcions d'Internet</em> &rarr; pestanya <em>Contingut</em> &rarr; <em>Certificats</em> &rarr; pestanya <em>Entitats de certificació arrel de confiança</em> &rarr; <em>Importar</em>, i seleccioneu el fitxer <code>root.crt</code>. Trobareu les instruccions detallades amb captures a l'apartat <a href="/signador/guiaUsuaris/nativa.html#61-windows">Instal·lar certificat</a> de la guia de la nativa.</p>

<p><strong>Nota:</strong> Firefox disposa del seu propi magatzem de certificats. Si voleu signar amb Firefox, cal importar el mateix <code>root.crt</code> a Firefox (Opcions &rarr; Certificats &rarr; Visualitza els certificats &rarr; pestanya Entitats &rarr; Importar) i marcar-lo com a fiable per identificar llocs web. Aquest pas només cal fer-lo una vegada per equip.</p>

<h2 id="validacio">8. Validació</h2>

<p>Un cop instal·lada l'aplicació i acceptat el certificat, comproveu que tot funciona amb la pàgina de test:</p>

<ul>
<li><strong>Entorn PRE:</strong> <a href="https://signador-pre.aoc.cat/signador/testNativa">https://signador-pre.aoc.cat/signador/testNativa</a></li>
<li><strong>Entorn PRO:</strong> <a href="https://signador.aoc.cat/signador/testNativa">https://signador.aoc.cat/signador/testNativa</a></li>
</ul>

<p>Si la instal·lació és correcta, la pàgina mostrarà un missatge d'èxit. Si mostra un error, reviseu que el certificat estigui instal·lat i, si el problema persisteix, contacteu amb el Suport a Usuari del Consorci AOC.</p>

<h2 id="desinstallacio">9. Desinstal·lació desatesa</h2>

<p>Per desinstal·lar el producte de manera silenciosa feu servir l'opció <code>/x</code> amb el mateix paquet MSI:</p>

<pre><code>msiexec /x .\ANS_windows-x64_1_0_3_4.msi /qn /Lp .\uninstall.log</code></pre>

<p>Alternativament, podeu executar el desinstal·lador que es troba a la carpeta d'instal·lació (<code>uninstall.exe</code>). En equips amb Windows 10 podeu prémer la tecla Windows, escriure <code>uninstall</code> i obrir el <em>Desinstal·lador de APP nativa signador</em>.</p>

<h2 id="troubleshooting">10. Resolució de problemes</h2>

<p>Els fitxers de registre són la principal eina de diagnòstic. N'hi ha de dos tipus:</p>

<ul>
<li><strong>Registre de la instal·lació:</strong> el fitxer que hàgiu indicat amb l'opció <code>/L</code> (per exemple <code>out.log</code>). Feu servir <code>/L*v</code> per obtenir el màxim detall.</li>
<li><strong>Registres d'execució de l'aplicació:</strong> es troben a la carpeta d'instal·lació (<code>$SIGNADOR_HOME</code>), als fitxers <code>log\webappTemp.log</code> i <code>error.log</code>.</li>
</ul>

<p>Amb la instal·lació per defecte, <code>$SIGNADOR_HOME</code> és <code>C:\Program Files\Signador</code> (64 bits) o <code>C:\Program Files (x86)\Signador</code> (32 bits). Per tant els logs són, per exemple, a <code>C:\Program Files\Signador\log\webappTemp.log</code> i <code>C:\Program Files\Signador\error.log</code>.</p>

<p>Problemes habituals:</p>

<table>
<thead><tr><th>Símptoma</th><th>Possible causa i solució</th></tr></thead>
<tbody>
<tr><td>La pàgina de test dóna error</td><td>El certificat no està instal·lat o acceptat. Reviseu l'apartat 7.</td></tr>
<tr><td>Sempre apareix l'opció JNLP</td><td>No es resol el domini <code>nativa.aoclocal.cat</code> contra <code>127.0.0.1</code>. Reviseu tallafocs, proxy i DNS corporatius.</td></tr>
<tr><td>Error d'arquitectura amb Firefox</td><td>El paquet (32/64 bits) no coincideix amb l'arquitectura del Firefox instal·lat. Instal·leu el paquet corresponent.</td></tr>
<tr><td>No es detecta un certificat en dispositiu PKCS11</td><td>Afegiu la ruta de la llibreria <code>.dll</code> al fitxer <code>Signador.vmoptions</code> amb el paràmetre <code>-Duser.pkcs11.path=...</code> (vegeu la <a href="/signador/guiaUsuaris/nativa.html#91-pkcs11-addicionals">configuració avançada</a>).</td></tr>
</tbody>
</table>

<p>Per obrir una petició de suport, aneu al <a href="https://www.aoc.cat/suport/">portal de suport</a>, descriviu el problema i adjunteu-hi el sistema operatiu, el navegador i els fitxers de log. El formulari no accepta l'extensió <code>.log</code>; canvieu-la a <code>.txt</code> abans d'adjuntar-los.</p>

<h2 id="annex">11. Annex: exemple complet</h2>

<p>Seqüència completa per a un desplegament amb integració amb Firefox i registre detallat. Executeu-la com a administrador des de la carpeta que conté el MSI i el fitxer <code>params.mst</code>.</p>

<p><strong>1.</strong> Contingut del fitxer <code>params.mst</code> (rutes escapades):</p>

<pre><code>configureFirefox$Boolean=true
firefoxDirectory=C\:\\Program Files\\Mozilla Firefox
sys.adminRights$Boolean=true
sys.installationDir=C\:\\Program Files\\Signador
sys.languageId=ca
sys.programGroupAllUsers$Boolean=true
sys.programGroupDisabled$Boolean=false
sys.programGroupName=APP Nativa Signador
userCheckForUpdates$Boolean=true</code></pre>

<p><strong>2.</strong> Comanda d'instal·lació:</p>

<pre><code>msiexec /i ANS_windows-x64_1_0_3_4.msi /t params.mst /qn /L*v .\install.log /norestart</code></pre>

<p><strong>3.</strong> Comprovació: obriu la pàgina de test de l'entorn corresponent i verifiqueu el missatge d'èxit.</p>
