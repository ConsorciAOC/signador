<!-- TOP-MENU-START -->
<nav class="site-topnav">
<a href="https://consorciaoc.github.io/signador/">SIGNADOR</a>
<a href="https://consorciaoc.github.io/signador/guiaUsuaris/nativa.html">NATIVA</a>
<a href="https://consorciaoc.github.io/signador/guiaUsuaris/jnlp.html">JNLP</a>
<span class="soon" title="Properament (encara no disponible)">TCAT-RA<span class="b">aviat</span></span>
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
.doc-toc__show{top:64px !important}
.page-header{padding-top:1.33rem !important;padding-bottom:1.33rem !important}
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
#docTocNav li.lvl1{border-top:1px solid #e1e4e8;margin-top:.35rem;padding-top:.15rem}
#docTocNav>ul>li.lvl1:first-child{border-top:0;margin-top:0;padding-top:0}
#docTocNav li.lvl1>.toc-row>.toc-link{font-weight:700;color:#159957;text-transform:uppercase;font-size:.78rem;letter-spacing:.04em}
#docTocNav li.lvl1>.toc-row>.toc-link:hover{background:#eaf5ef}
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
var hs=[].slice.call(scope.querySelectorAll('h1,h2,h3,h4,h5,h6')).filter(function(h){return !h.closest('#docToc');});
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

:warning:`No es dona suport a aquest tipus d'integració. És només per a les següents aplicacions:`
* `GEEC`
* `Intranet ORGT`
* `Intranet de la DIBA`
* `Aplicació ACA`

# Integració directa aplicació nativa

La nativa quan arrenca intenta utilitzar el primer port lliure del rang 9090-9095. Podeu revisar la [guia d'instal·lació de la nativa](../guiaUsuaris/nativa.md#11-connectivitat) per veure els temes relacionats amb la connectivitat i la instal·lació de la mateixa.

Les peticions als endpoints de la nativa s'han de fer en format JSON, al respecte de la missatgeria aplica la mateixa documentació ja especificada en la [guia d'integració del servei](../README.md). La única diferència és que en el cas d'integració directe amb l'aplicació nativa no és necessari informar cap dels elements principals vinculats a l'ús del servei a través de la web app del signador, per tan *NO s'han d'especificar* els següents camps al missatge.

```json
	"callbackUrl": "" o "redirectUrl": "", // S'ha d'informar o un o l'altre
	"token": "",
	"descripcio": "",
	"responseB64": "",
```

Per tal de poder fer una integració directe i realitzar una signatura seran necessaries dues crides, la primera crida que s'hauría de dur a terme és la de recuperar les claus que té disponibles l'usuari, i un cop recuperades s'ha d'escollir una d'aquestes i fer una segona crida al procés de signar indicant la clau que es vol emprar.

La petició en format JSON serà la mateixa per les dues operacions, l'única diferència és que en la segona operació com a paràmetre de la URL s'haurà de passar la dada de la clau amb la que es signarà.

# Recuperar les claus `/getCertificate` 

La primera petició consistiria en una crida tipus `POST` al endpoint `/getCertificate` del servei, passant el missatge `JSON` amb la configuració de la signatura a realitzar.

Aquest enpoint retornarà una resposta amb la següent forma:

```json
{
	"status" : "OK/KO",
	"aliasList" : 	[
				{
				"alias" : "alias del certificat",
				"aliasEncoded" : "alias del certificat en base64",
				"certificat" : "clau pública en base64"
				},
				...
			],
	"error" : "Possible missatge d'error"
}
```

* `status` : Indica el resultat de la petició. `OK` si tot ha anat bé. `KO` si s'ha produït algun error.
* `aliasList` : Llista amb la informació de totes les claus disponibles per signar del magatzem.
* `errror` : Missatge d'error en cas de que el `status` sigui `KO`.

Dins del `aliasList` cadascuna de les claus retorna la següent informació:

* `alias` : Cadena de text amb la referència de la clau dins del magatzem.
* `aliasEncoded` : És el `alias` codificat en base64.
* `certificat` : Clau pública codificada en base64.

A partir d'aquesta llista de certificats, es decisió de la aplicació client que fa la crida a la nativa veure com presenta aquesta informació a l'usuari per tal de que aquest pugui seleccionar la clau desitjada per a signar.

# Signar `/signature` 

Utilitzant el mateix missatge en format `JSON` que s'ha enviat a l'endpoint `/getCertificate`, s'ha de realitzar un `POST` contra `/signature` passant com a paràmetre de la url, l'alias codificat en base64 del certificat amb el que es vol signar. A tall d'exemple la url quedaria com `/signature?alias=<aliasEncoded del certificat seleccionat per signar>`.

La resposta en aquest cas té la següent forma:

```json
{
	"status" : "OK/KO",
	"signResult" : "zip codificat en base64 amb la signatura resultant",
	"error" : "Possible missatge d'error"
}
```

* `status` : Indica el resultat de la petició. `OK` si tot ha anat bé. `KO` si s'ha produït algun error.
* `signResult` : Retorna un `zip` codificat en base64 que conté les n signatures que s'hagin generat. Per establir l'ordre del document/hash enviat a signar, i la resposta, el nom dels documents dins del `zip` és númeric respectant l'ordre d'entrada de `0..n`.
* `errror` : Missatge d'error en cas de que el `status` sigui `KO`.

# Exemple

Aqui podeu trobar un [exemple](integracioDirecteExemple.html) de la integració amb les crides definides fetes en un `html` amb `js`. L'exemple d'integració directe amb la nativa, recupera la llista de certificats disponibles del client, els pinta en un `<select>` per pantalla, per a que l'usuari pugui triar amb quin vol signar, i un cop seleccionat realitza la segona crida per a signar. Recupera el fitxer `zip` amb les signatures dels documents i el descarrega.



