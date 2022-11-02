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
