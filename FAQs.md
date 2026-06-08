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

# Preguntes freqüents

Recull d'errors recurrents amb els que es poden trobar els integradors.

## Manca alguna de les capçaleres per a l'autorització

En el cas que us trobeu la següent resposta del signador a la crida `/initProcess`:

```
token=null, message=Manca alguna de les capçaleres per a l'autorització., status=KO, signResult=null, signingUrl=null, type=null
```

Es perquè com indica el missatge, manca alguna de les capçaleres, si al revisar-ho esteu segurs que les esteu incloent totes, el problema és probablement que manca la capçalera `Origin`.


Si esteu utilitzant la classe java `java.net.HttpURLConnection` directament per a fer la crida, internament aquesta restringeix l'enviament d'algunes capçaleres http, entre elles la `Origin'. 

Per tal d'evitar-ho, podeu setejar la propietat `-Dsun.net.http.allowRestrictedHeaders=true` com a paràmetre d'arrencada de la crida a la JVM o directament fent ús `System.setProperty("sun.net.http.allowRestrictedHeaders", "true")` abans de la crida al signador.
