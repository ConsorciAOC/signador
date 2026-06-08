<!-- TOP-MENU-START -->
<nav class="site-topnav">
<a href="https://consorciaoc.github.io/signador/">SIGNADOR</a>
<a href="https://consorciaoc.github.io/signador/guiaUsuaris/nativa.html">NATIVA</a>
<a href="https://consorciaoc.github.io/signador/guiaUsuaris/jnlp.html">JNLP</a>
<span class="soon" title="Properament (encara no disponible)">NATIVA MULTIUSUARI<span class="b">aviat</span></span><!-- Enllaç definitiu (activar quan estigui llest): <a href="https://consorciaoc.github.io/signador/multiUsuari/">NATIVA MULTIUSUARI</a> -->
<span class="soon" title="Properament (encara no disponible)">TCAT-RA<span class="b">aviat</span></span><!-- Enllaç definitiu (activar quan estigui llest): <a href="https://consorciaoc.github.io/signador/guiaUsuaris/tcatra.html">TCAT-RA</a> -->
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

<h2>Que necessito per fer funcionar el <i>Signador</i>?</h2>

El signador és una aplicació web que funciona amb els següents navegadors; en el cas dels navegadors que fan _rapid release_ suportem fins a **tres versions anteriors a l'actual**:
 
 - Chrome [versions](https://en.wikipedia.org/wiki/Google_Chrome_version_history)
 - Firefox [versions](https://en.wikipedia.org/wiki/Firefox_version_history#Release_history)
 - Edge [version](https://en.wikipedia.org/wiki/Microsoft_Edge#Release_history) - Només sobre Windows
 
Els altres navegadors que suportem 
 
 - Safari [versió 10.0 i superiors](https://en.wikipedia.org/wiki/Safari_version_history) - Només sobre MAC OS X
 - Internet explorer [versio 10 i superiors](https://en.wikipedia.org/wiki/Internet_Explorer_version_history#Release_history_for_desktop_Windows_OS_version) - Només sobre Windows.
 
Donat que no disposem d'aplicació mobil per tal d'accedir al magatzem de certificats i poder realitzar la signatura, tot i que la aplicació web pot ser accedida amb navegadors mobils no donem suport als mateixos ja que no es pot finalitzar l'operació utilitzant un dispositiu mobil.

**NOTA:** Si disposes d'un navegador diferent dels especificats anteriorment (e.g. *Opera*, o versions antigues dels especificats) es possible que l'aplicació funcioni correctament, però en cas de necessitar del nostre suport només serà disponible per a les versions/entorns específicats.

<h3>Perquè només aquestes versions?</h3>

Molts dels nostres usuaris encara utilitzen versions antigues d'Internet explorer, per això hem de donar suport a les mateixes. En canvi per a les distribucions més modernes de navegadors; creiem que donar suport només a les ultimes versions té els següent avantatges:

 - Optimitzar els nostres recursos a l'hora de corregir/reproduïr bugs incidències.
 - El teu PC serà més segur i tindrà menys riscos de patir un atac (no et convenç, revisa [les vulnerabilitats del teu navegador](https://www.ssllabs.com/ssltest/viewMyClient.html))
 - Gaudiràs d'un millor experiència d'usuari i veuràs més característiques en les aplicacions web (no només el **Signador**).
 
Des dels següents enllaços pots baixar-te les ultimes versions estables dels nostres navegadors preferits tant per Windows, Linux o MAC:
 
  - [Firefox](https://www.mozilla.org/ca/firefox/new/)
  - [Chrome](https://www.google.com/chrome/browser/desktop/index.html)
