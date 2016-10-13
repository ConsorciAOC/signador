<h1>ESBORRANY</h1>

<h2>Que necessito per fer funcionar el <i>Signador</i>?</h2>

El signador és una aplicació web que funciona amb els següents navegadors; en el cas dels navegadors que fan _rapid release_ suportem fins a **tres versions anteriors a l'actual**:
 
 - Chrome [versions](https://en.wikipedia.org/wiki/Google_Chrome_version_history)
 - Firefox [versions](https://en.wikipedia.org/wiki/Firefox_version_history#Release_history)
 - Edge [version](https://en.wikipedia.org/wiki/Microsoft_Edge#Release_history) - Només sobre Windows
 
Els altres navegadors que suportem 
 
 - Safari [versió 5.1.10 i superiors](https://en.wikipedia.org/wiki/Safari_version_history) - Només sobre MAC OS X
 - Internet explorer [versio 8 i superiors](https://en.wikipedia.org/wiki/Internet_Explorer_version_history#Release_history_for_desktop_Windows_OS_version) - Només sobre Windows.
 
Donat que no disposem d'aplicació mobil per tal d'accedir al magatzem de certificats i poder realitzar la signatura, tot i que la aplicació web pot ser accedida amb navegadors mobils no donem suport als mateixos ja que no es pot finalitzar l'operació utilitzant un dispositiu mobil.

**DISCLAIMER:** Si disposes d'un navegador diferent dels especificats anteriorment (e.g. *Opera*, versions antigues) es possible que l'aplicació funcioni correctament, però en cas de necessitar del nostre suport només serà disponible per a les versions/entorns específicats.

<h3>Perquè només aquestes versions?</h3>

Molts dels nostres usuaris encara utilitzen versions antigues d'Internet explorer, per això hem de donar suport a les mateixes. En canvi per a les distribucions més modernes de navegadors; creiem que donar suport només a les ultimes versions té els següent avantatges:

 - Optimitzar els nostres recursos a l'hora de corregir/reproduïr bugs incidències.
 - El teu PC serà més segur i tindrà menys riscos de patir un atac.
 - Gaudiràs d'un millor experiència d'usuari i veuràs més característiques en les aplicacions web (no només el **Signador**).
 
Des dels següents enllaços pots baixar-te les ultimes versions estables dels nostres navegadors preferits tant per Windows, Linux o MAC:
 
  - [Firefox](https://www.mozilla.org/ca/firefox/new/)
  - [Chrome](https://www.google.com/chrome/browser/desktop/index.html)

<h2>Com executar el <i>JNLP</i>?</h2>

Per tal de poder realitzar l'operació de signatura en si, un cop accedit al servei del **Signador** es descarregarà un fitxer amb extensió *.jnlp*. 
Per tal de dur a terme la signatura serà necessari executar aquest fitxer.

A diferència de l'applet de signatura el *JNLP* s'executa fora del context del navegador, per tant en aquest sentit hauria de funcionar independentment de amb quin navegador s'hagi descarregat el fitxer *.jnlp*.

<h3>Sistemes operatius</h3>

Donem suport a l'execució del *JNLP* per a ser executat en els següents sistemes operatius:

 - *Ubuntu* - Versions [12.04 i superiors](https://wiki.ubuntu.com/Releases) 
 - *Windows* - Versions client [Vista i superiors](https://en.wikipedia.org/wiki/List_of_Microsoft_Windows_versions#Client_versions)
 - *Windows* - Versions servidor [Server2003 R2 i superiors](https://en.wikipedia.org/wiki/List_of_Microsoft_Windows_versions#Server_versions)
 - *MAC OS X* - 
 
**DISCLAIMER**: Igual que en el cas dels navegadors pot funcionar en altres versions de sistemes operatius (e.g. altres distribucions de Linux com pot ser [Mint](https://www.linuxmint.com/)), però també igual que en el cas dels navegadors, aquestes altres versions no rebran suport per part nostra en cas de problemes d'execució.
 
<h3>Requeriments</h3>

És necessari tenir instal·lada una versió de la Java JRE en l'ordinador on volem executar el *.jnlp*. 
Donem suport fins a tres versions anteriors a l'actual de JRE.

**DISCLAIMER**: Si disposes d'un entorn/versió diferent dels especificats anteriorment es possible que igualment tot et funcioni correctament, però en cas de necessitar de suport només serà disponible per a les versions/entorns específicats.

