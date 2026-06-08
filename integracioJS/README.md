---
title: "Llibreria integradors"
description: "Llibreria JavaScript d'integració amb el Signador"
---
<!-- TOP-MENU-START -->
<nav class="site-topnav">
<a href="https://consorciaoc.github.io/signador/">SIGNADOR</a>
<a href="https://consorciaoc.github.io/signador/guiaUsuaris/nativa.html">NATIVA</a>
<a href="https://consorciaoc.github.io/signador/guiaUsuaris/jnlp.html" class="active">JNLP</a>
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

# Llibreria integradors

Per tal de facilitar la integració amb el servei de signatura s'ha creat una llibreria _Javascript_ que conté uns mètodes simples per a generació de signatures de forma generiques i uns altres més customitzables. L'objectiu és facilitar el procés d'integració amb el servei.

Les llibreries _Javascript_ pels diferents entorns són les següents:

* [Entorn PRE](https://github.com/lcamps01/signador/blob/master/integracioJS/SignadorCentralitzat_PRE.js)
* [Entorn PRO](https://github.com/lcamps01/signador/blob/master/integracioJS/SignadorCentralitzat_PRO.js)

## Ús de la llibreria

A continuació es descriuen els diferents mètodes de la llibreria segons si es vol signar amb l'applet o amb l'apsa:

### 1. Applet

Els mètodes bàsics per signar amb el servei utilitzant l'applet de signatura són els següents:

````javascript
  signPDF( params );
  signXAdESHash( params );
  signCAdESHash( params );
````
Aquests mètodes esperen tots un objecte de tipus _JSON_ amb el següent format:

```json
{
  "redirectUrl": "",
  "token":  "",
  "doc_name": "",
  "document_to_sign": ""
}
```

Descripció dels camps _JSON_:
*	**redirectUrl**: Url per fer la redirecció del servei un cop ha finalitzat la operació de signatura.
*	**token**: El token que ens ha retornat el servei d'inici del procés.
*	**doc_name**: Nom del document.
*	**document_to_sign**: Document original a signar n UTF-8 codificat en base64.

El mètode customitzable per servei de l'applet és: `sign( json )` a on el l'objecte _JSON_ que espera té el format de l'applet que s'ha descrit en l'apartat [2.1](https://github.com/ConsorciAOC/signador/blob/master/README.md#21-startsignprocess-applet-de-signatura)

### 2. Consulta Apsa:

El mètode bàsic per signar amb el servei utilitzant l'apsa és: `signApsaHash( params );`

El format dels paràmetres de l'objecte _JSON_ que esperen els mètodes és:

```json
{
  "redirectUrl": "",
  "token":  "",
  "doc_name": "",
  "hash_a_xifrar": ""
}
```

El mètode customitzable per servei de l'apsa és: `signApsa( params )`

El format dels paràmetres de l'objecte _JSON_ que espera és el següent: 

````javascript
{
  "redirectUrl": "",
  "token":  "",
  "descripcio": "", // no obligatori. valor per defecte: 'Operació de signatura'
  "responseB64": "", // no obligatori.
  "keystore_type": "", // no obligatori: valor per defecte: 0 --> GENERIC_KEYSTORE
  "doc_name": "",
  "hash_a_xifrar": "",
  "signingCertificate": "" // no obligatori
}
````

Descripció dels camps _JSON_:
*	**redirectUrl**: Url per fer la redirecció del servei un cop ha finalitzat la operació de signatura.
*	**token**: El token que ens ha retornat el servei d'inici del procés.
*	**descripcio**: Camp de text amb la descripció del procés de signatura.
*	**responseB64**: Camp per indicar si es vol que la resposta es retorni en base64 o en una _URL_ per descarregar-la.
*	**keystore_type**: Tipus de keystore a utilitzar per a realitzar la signatura.
*	**doc_name**: Nom del document.
*	**hash_a_xifrar**: hash a signar.
*	**signingCertificate**: Certificat per signar en base64.

### 3. Exemples d'ús

Per fer ús de la llibreria és tant simple com incloure la depèndencia de *Jquery* (versió mínima _1.6.1_) i la pròpia llibreria de l'aplicació com a recurs en la plana *HTML* on es vulgui utilitzar.

### 3.1 HTML de proves

El HTML de proves podria tenir una estructura similar a:

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Prova concepte integració signador via JS</title>
<script language="javascript" src="./jquery-1.12.4.js"></script>
<script language="javascript" src="./SignadorCentralitzat.js"></script>
<script language="javascript">
	$(function() {
		$('#signarBtn').click(function(){
			var json = {
				"doc_name" : "doc_prova",
				"document_to_sign" : "JVBERi0xLjQNJeLjz9MNC....",
				"token" : $('#token').val(),
				"redirectUrl" : ""
			};
			signadorCentralitzat.signPDF(json);	
		});
		
	});
</script>
</head>
	<body>
		<div>
			TOKEN: <input type="text" id="token" maxlength="100"></input>
			<input type="button" id="signarBtn" value="Signar"></input>
		</div>
	</body>
</html>
```

### 3.2 API

Els mètodes disponibles del objecte `signadorCentralitzat` són:

#### 3.2.1 `signadorCentralitzat.sign( json[,openNewWindow] )`

Permet realitzat una signatura especificant tots els paràmetres de la configuració desitjants al argument `json`, opcionalment és pot específicar també l'argument `openNewWindow` si es desitja que l'operació s'obri en una nova finestra, per defecte si no s'informa pren el valor `false` i la redirecció al signador es realitza en la finestra actual.

#### Exemple

```javascript
<script type="text/javascript" src="%PATH%/jquery.js"></script> 
<script type="text/javascript" src="%PATH%/SignadorCentralitzat.js"></script>

<script type="text/javascript">
		
	$('#idBoto').click(function(){
		signadorCentralitzat.sign( { redirectUrl: $('#idUrlRedirect').val(), 
		                              token: $('#tokenId').val() , 
		                              descripcio: $('#idDescripcio').val(),
		                              applet_cfg: {
		                              	keystore_type: $('#idKeystore').val(), 
		                                signature_mode: $('#idSignMode').val(), 
		                                doc_type: $('#idDocType').val(), 
		                                doc_name: $('#idNomDoc').val(), 
		                                document_to_sign: $('#idDoc').val(), 
		                                hash_algorithm: $('#idAlgorithm').val() 
		                              }});
	});
	
</script>
```

#### 3.2.2 `signadorCentralitzat.signPDF( params [,openNewWindow] )`

Permet realitzat una signatura PDF per defecte especificant només els paràmetres impresindibles de la configuració per a signar en aquesta modalitat en l'argument `json`, opcionalment és pot específicar també l'argument `openNewWindow` si es desitja que l'operació s'obri en una nova finestra, per defecte si no s'informa pren el valor `false` i la redirecció al signador es realitza en la finestra actual.

#### Exemple

```javascript
<script type="text/javascript" src="%PATH%/jquery.js"></script> 
<script type="text/javascript" src="%PATH%/SignadorCentralitzat.js"></script>

<script type="text/javascript">
		
	$('#idBoto').click(function(){
		signadorCentralitzat.signPDF( { redirectUrl: $('#idUrlRedirect').val(), 
		                                token: $('#tokenId').val() , 
		                                doc_name: $('#idNomDoc').val(), 
		                                document_to_sign: $('#idDoc').val() });
	});
	
</script>
```

#### 3.2.3 `signadorCentralitzat.signXAdESHash( params [,openNewWindow] )`

Permet realitzat una signatura XAdES sobre un HASH per defecte especificant només els paràmetres impresindibles de la configuració per a signar en aquesta modalitat en l'argument `json`, opcionalment és pot específicar també l'argument `openNewWindow` si es desitja que l'operació s'obri en una nova finestra, per defecte si no s'informa pren el valor `false` i la redirecció al signador es realitza en la finestra actual.

#### Exemple

```javascript
<script type="text/javascript" src="%PATH%/jquery.js"></script> 
<script type="text/javascript" src="%PATH%/SignadorCentralitzat.js"></script>

<script type="text/javascript">
		
	$('#idBoto').click(function(){
		signadorCentralitzat.signXAdESHash( { redirectUrl: $('#idUrlRedirect').val(), 
		                                      token: $('#tokenId').val() , 
		                                      doc_name: $('#idNomDoc').val(), 
		                                      document_to_sign: $('#idDoc').val() });
	});
	
</script>
```

#### 3.2.4 `signadorCentralitzat.signCAdESHash( params [,openNewWindow] )`

Permet realitzat una signatura CAdES sobre un HASH per defecte especificant només els paràmetres impresindibles de la configuració per a signar en aquesta modalitat en l'argument `json`, opcionalment és pot específicar també l'argument `openNewWindow` si es desitja que l'operació s'obri en una nova finestra, per defecte si no s'informa pren el valor `false` i la redirecció al signador es realitza en la finestra actual.

#### Exemple

```javascript
<script type="text/javascript" src="%PATH%/jquery.js"></script> 
<script type="text/javascript" src="%PATH%/SignadorCentralitzat.js"></script>

<script type="text/javascript">
		
	$('#idBoto').click(function(){
		signadorCentralitzat.signCAdESHash( { redirectUrl: $('#idUrlRedirect').val(), 
		                                      token: $('#tokenId').val() , 
		                                      doc_name: $('#idNomDoc').val(), 
		                                      document_to_sign: $('#idDoc').val()});
	});
	
</script>
```

#### 3.2.5 `signadorCentralitzat.signApsaHash( params [,openNewWindow] )`

Permet realitzat una signatura Apsa sobre un HASH per defecte especificant només els paràmetres impresindibles de la configuració per a signar en aquesta modalitat en l'argument `json`, opcionalment és pot específicar també l'argument `openNewWindow` si es desitja que l'operació s'obri en una nova finestra, per defecte si no s'informa pren el valor `false` i la redirecció al signador es realitza en la finestra actual.

#### Exemple

```javascript
<script type="text/javascript" src="%PATH%/jquery.js"></script> 
<script type="text/javascript" src="%PATH%/SignadorCentralitzat.js"></script>

<script type="text/javascript">
		
	$('#idBoto').click(function(){
		signadorCentralitzat.signApsaHash( { redirectUrl: $('#idUrlRedirect').val(), 
		                                     token: $('#tokenId').val(),
		                                     doc_name: $('#idNomDoc').val(), 
		                                     hash_a_xifrar: $('#idHash').val()});
	});
	
</script>
```

#### 3.2.6 `signadorCentralitzat.signApsa( params [,openNewWindow] )`

Permet realitzat una signatura especificant tots els paràmetres de la configuració desitjants al argument `json` en la modalitat APSA, opcionalment és pot específicar també l'argument `openNewWindow` si es desitja que l'operació s'obri en una nova finestra, per defecte si no s'informa pren el valor `false` i la redirecció al signador es realitza en la finestra actual.

#### Exemple

```javascript
<script type="text/javascript" src="%PATH%/jquery.js"></script> 
<script type="text/javascript" src="%PATH%/SignadorCentralitzat.js"></script>

<script type="text/javascript">
		
	$('#idBoto').click(function(){
		signadorCentralitzat.signApsa( { redirectUrl: $('#idUrlRedirect').val(), 
		                                 token: $('#tokenId').val(),
		                                 descripcio: $('#idDescripcio').val(),
		                                 keystore_type: $('#idKeystore').val(), 
		                                 doc_name: $('#idNomDoc').val(), 
		                                 hash_a_xifrar: $('#idHash').val()});
	});
	
</script>
```
