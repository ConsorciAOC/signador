<!-- HOME-BUTTON-START -->
<a class="home-btn" href="./" title="Anar a l'inici"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="12" fill="#1769b0"/><path d="M12 5.4 L19.8 12.4 L17.9 12.4 L17.9 18.6 L13.7 18.6 L13.7 14 L10.3 14 L10.3 18.6 L6.1 18.6 L6.1 12.4 L4.2 12.4 Z" fill="#fff"/><rect x="14.7" y="6.4" width="1.7" height="3.2" fill="#fff"/></svg> INICI</a>
<style>
.home-btn{position:fixed;top:12px;left:12px;z-index:1001;display:inline-flex;align-items:center;gap:.45rem;background:#fff;border:1px solid #d1d5da;border-radius:6px;padding:.35rem .65rem;color:#1e6bb8;text-decoration:none;font-family:"Open Sans",Helvetica,Arial,sans-serif;font-weight:600;font-size:.85rem;letter-spacing:.03em;box-shadow:0 1px 3px rgba(0,0,0,.12)}
.home-btn:hover{background:#eef3f8}
.home-btn svg{width:1.25em;height:1.25em}
</style>
<!-- HOME-BUTTON-END -->

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
