<!-- TOP-MENU-START -->
<nav class="site-topnav">
<a href="https://consorciaoc.github.io/signador/">SIGNADOR</a>
<a href="https://consorciaoc.github.io/signador/guiaUsuaris/nativa.html">NATIVA</a>
<a href="https://consorciaoc.github.io/signador/guiaUsuaris/jnlp.html">JNLP</a>
<span class="soon" title="Properament (encara no disponible)">NATIVA MULTIUSUARI<span class="b">aviat</span></span><!-- Enllaç definitiu (activar quan estigui llest): <a href="https://consorciaoc.github.io/signador/multiUsuari/">NATIVA MULTIUSUARI</a> -->
<a href="https://consorciaoc.github.io/signador/guiaUsuaris/signaturaRemota.html" class="active">TCAT-RA</a>
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
.main-content img{max-width:680px !important;height:auto;display:block;border:1px solid #e1e4e8;border-radius:4px;margin:.4rem 0}
.main-content img[src$="image4.png"],.main-content img[src$="image5.png"],.main-content img[src$="image6.png"],.main-content img[src$="image7.png"],.main-content img[src$="image9.png"],.main-content img[src$="image10.png"],.main-content img[src$="image11.png"]{max-width:340px !important}
</style>
<!-- TOC-HOME-OVERRIDE-END -->

# Signatura remota

_Signatura al núvol amb TCAT-RA · Integració i Manual d'usuari._

## 1. Sol·licitud del servei

Per tal que els usuaris d'una aplicació integrada amb Signador puguin fer ús de la signatura al núvol amb TCAT-RA (TCAT Remot + signatura Avançada), és necessari que l'ens responsable de l'aplicació integrada sol·liciti al Consorci AOC el permís per l'activació de la signatura al núvol per la seva aplicació al Signador.

Per tal de fer la sol·licitud, simplement cal demanar-ho a través del servei de Suport del Consorci AOC.

Un cop una aplicació ha obtingut el permís per fer ús de la signatura al núvol, a la primera plana del procés de signatura apareixerà la opció de signar amb certificats en local o al núvol:

![](imgs/signaturaRemota/image3.png)

La opció de "Certificat en local" farà ús de la Nativa o del JNLP per signar amb certificats digitals en targeta criptogràfica o instal·lats al propi ordinador de l'usuari.

La opció de "Certificat al núvol" permet la signatura amb certificats al núvol, en aquest cas certificats del servei TCAT-RA del Consorci AOC.

Recordem que per poder fer ús de la signatura al núvol és necessari que l'usuari en disposi d'un certificat TCAT-RA. Per sol·licitar-lo, poseu-vos en contacte amb el servei de Suport del Consorci AOC.

## 2. Nota per integradors

El procés de signatura remota no executa programari en la màquina de l'usuari. Per tant no en té accés. Amb la Nativa, en el cas de la signatura de documents en carpeta, els documents signats es guarden a la mateixa carpeta original. Amb la signatura remota això no és possible, i les signatures es retornen en un fitxer zip (de la mateixa manera que amb la signatura de múltiples documents).

## 3. Manual d'usuari

### 3.1. Primer accés a la signatura amb TCAT-RA

Quan parlem de primer accés, ens referim al primer cop que un usuari intenta signar amb la TCAT-RA. No ens referim al primer cop cada dia, per exemple, sinó únicament a la primera vegada que utilitzi la TCAT-RA mitjançant el Signador.

#### 3.1.1 L'usuari NO té cookie de sessió

Si l'usuari no ha iniciat sessió (és a dir, no ha fet servir mai la TCAT-RA des del Signador), en prémer "Certificat al núvol" se'l redirigeix cap al Servei de Signatura Remota (SSR en endavant) del Consorci AOC, per obtenir els seus certificats.

Autenticació de l'usuari en SSR per donar permís per obtenir la llista dels seus certificats. Primer se li demana el DNI a l'usuari (si ja ha accedit prèviament, es mostra el seu DNI directament al camp *User*):

![](imgs/signaturaRemota/image4.png)

Un cop insertat el DNI, continua el procés d'autenticació i autorització:

![](imgs/signaturaRemota/image5.png)

Un cop seleccionat el primer factor d'autenticació (*password* o *email*), s'enviarà un codi per correu electrònic a l'usuari, que haurà d'introduir en la següent pantalla:

![](imgs/signaturaRemota/image6.png)

Un cop introduït el codi a la pantalla anterior, se li demanarà a l'usuari que introdueixi les dades per autenticar-se. Per exemple, en cas que prèviament hagués seleccionat *Password*, se li demanarà d'introduir el seu password de la TCAT-RA:

![](imgs/signaturaRemota/image7.png)

Un cop l'usuari autoritza la obtenció d'informació sobre els seus certificats, es mostra ja la pantalla amb la llista dels certificats que tingui disponibles a la TCAT-RA per signar. Per exemple:

![](imgs/signaturaRemota/image8.png)

#### 3.1.2. L'usuari SÍ té cookie de sessió

Això vol dir que l'usuari prèviament ja ha obtingut informació dels seus certificats segons el procés descrit a l'apartat anterior.

En aquest cas la pantalla inicial serà directament aquesta, sense necessitat d'autenticació en SSR:

![](imgs/signaturaRemota/image8.png)

### 3.2. Refrescar certificats

Si en algun moment l'usuari vol de nou recuperar els seus certificats des de la TCAT-RA, podrà fer-ho clicant aquest botó. El procés serà el mateix que el descrit a l'apartat 2.1. Es recuperaran els seus certificats carregats a la TCAT-RA, i la informació sobre aquests s'actualitzarà als sistemes Signador.

### 3.3. Signatura

El procés de signatura inclou autenticació i autorització en SSR, per part de l'usuari.

Un cop l'usuari clica en el botó "Signar", se li redirigirà cap a SSR per a que doni el seu consentiment per realitzar la signatura. Els passos són els mateixos que en el cas de la recuperació dels certificats, si bé en aquest cas el procés que s'autoritza és la generació de la signatura.

![](imgs/signaturaRemota/image9.png)

![](imgs/signaturaRemota/image10.png)

![](imgs/signaturaRemota/image11.png)

Un cop fet això, el procés de signatura continuarà de la mateixa manera que amb la resta de certificats (és a dir, de la mateixa manera que amb Nativa/JNLP).
