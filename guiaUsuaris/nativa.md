<h2>Què necessito per utilitzar l'<i>Aplicació Nativa</i>?</h2>

L'aplicació nativa és una aplicació d'escriptori que s'instal·la en la màquina del client i s'executa com a servei (en segon pla). 

## 1. Sistemes operatius

Donem suport a la instal·lació i execució de l'aplicació nativa en els següents sistemes operatius:

 - *Ubuntu* - Versions [12.04 i superiors](https://wiki.ubuntu.com/Releases) 
 - *Windows* - Versions client [Vista i superiors](https://en.wikipedia.org/wiki/List_of_Microsoft_Windows_versions#Client_versions)
 - *Windows* - Versions servidor [Server2003 R2 i superiors](https://en.wikipedia.org/wiki/List_of_Microsoft_Windows_versions#Server_versions)
 - *MAC OS X* - Versions [OS.X 10.9 i superiors](https://en.wikipedia.org/wiki/MacOS#Release_history)
 
**Nota**: Igual que en el cas dels navegadors pot funcionar en altres versions de sistemes operatius (e.g. altres distribucions de Linux com pot ser [Mint](https://www.linuxmint.com/)), però també igual que en el cas dels navegadors, aquestes altres versions no rebran suport per part nostra en cas de problemes d'execució.

## 2. Descarrega

Per poder-la utilitzar cal que alhora de donar-se d'alta al servei, s'informi que es vol utilitzar la nativa _(allow Native)_. 
Un cop el procés d'alta s'hagi realitzat, ja es pot descarregar la versió de l'aplicació corresponent segons l'entorn que es vulgui utilitzar:

- Entorn [PRE](https://signador-pre.aoc.cat/signador/installNativa)
- Entorn [PRO](https://signador.aoc.cat/signador/installNativa)

En la pàgina d'instal·lació de la nativa l'usuari pot escollir la versió del Sistema Operatiu (tal i com es veu en la següent imatge).

![instalableSample](https://github.com/ConsorciAOC/signador/blob/master/guiaUsuaris/imgs/instalableSample.png)

**Nota**: Per defecte el navegador detecta el Sistema Operatiu i es descarrega la versió adequada.

## 3. Instal·lació

Un cop descarregat l'executable procedim a realitzar la instal·lació.

Per instal.lar segueixi els següents passos de l'assistent d'instal·lació:

![assistent1Sample](https://github.com/ConsorciAOC/signador/blob/master/guiaUsuaris/imgs/assistent1Sample.png)

![assistent2Sample](https://github.com/ConsorciAOC/signador/blob/master/guiaUsuaris/imgs/assistent2Sample.png)

![assistent3Sample](https://github.com/ConsorciAOC/signador/blob/master/guiaUsuaris/imgs/assistent3Sample.png)

![assistent4Sample](https://github.com/ConsorciAOC/signador/blob/master/guiaUsuaris/imgs/assistent4Sample.png)

![assistent5Sample](https://github.com/ConsorciAOC/signador/blob/master/guiaUsuaris/imgs/assistent5Sample.png)

![assistent6Sample](https://github.com/ConsorciAOC/signador/blob/master/guiaUsuaris/imgs/assistent6Sample.png)

Un cop s'hagi instal·lat i arranqui l'aplicació, en cas que ho fagis en Windows li apareixerà el següent missatge:

![installCert](https://github.com/ConsorciAOC/signador/blob/master/guiaUsuaris/imgs/installCert.PNG)

Pel correcte funcionament de l'aplicació ha d'acceptar la instal·lació del certificat.

## 4. Validació

Un cop s'hagi instal·lat l'aplicació nativa, es pot realitzar un simple test de funcionament per comprovar que la instal·lació s'ha realitzat correctament.

- Entorn [PRE](https://signador-pre.aoc.cat/signador/testNativa)
- Entorn [PRO](https://signador.aoc.cat/signador/testNativa)

Si el procés s'ha realitzat correctament la pàgina de test ens mostrarà la següent imatge:

![testSample](https://github.com/ConsorciAOC/signador/blob/master/guiaUsuaris/imgs/testSample.png)

En cas contrari, es mostrarà el següent error:

![testKOSample](https://github.com/ConsorciAOC/signador/blob/master/guiaUsuaris/imgs/testKOSample.png)

**NOTES:** 
* Si acabeu d'instal·lar l'aplicació nativa reviseu el següent apartat d'instal·lar el cerfiticat.
* Si el problema persisteix poseu-vos en contacte amb el Suport a Usuari del Consorci AOC.

## 5. Instal·lar Certificat

Perquè funcioni l'aplicació nativa és obligatori que s'instal·li el certificat en el seu navegador o sistema operatiu.

### 5.1 Windows

La càrrega del certificat al magatzem de _Windows_ permet el correcte funcionament de l'aplicació amb Internet explorer, Edge i Chrome.

A més a més en el magatzem de _Windows_ s'instal·la automàticament, tot i que s'ha d'acceptar la instal·lació del certificat mitjançant un popup que apareix durant aquesta. 

En cas que no s'hagi cancel·lat l'instal·lació en aquest popup serà necessari que l'usuari ho faci manualment seguint els següents passos:

* Cerca en el buscador de windows: _Opcions d'internet_

![opcionsWIN](https://github.com/ConsorciAOC/signador/blob/master/guiaUsuaris/imgs/opcionsWIN.png)

* Obre les Opcions d'internet --> accedeix a la pestanya Contingut --> Certificats

![visualitzaWIN](https://github.com/ConsorciAOC/signador/blob/master/guiaUsuaris/imgs/visualitzaWIN.png)

* En la pantalla de certificats, accedir a la pestanya Entitats de Certificació arrel de confiança i clicar a Importar

![importCertWIN](https://github.com/ConsorciAOC/signador/blob/master/guiaUsuaris/imgs/importCertWIN.png)

* En la pantalla d'assistent per la importació de certificats cliqui a següent

![importCert2WIN](https://github.com/ConsorciAOC/signador/blob/master/guiaUsuaris/imgs/importCert2WIN.png)

* Cliqui a examinar per escollir el certificat a Importar

![importCert3WIN](https://github.com/ConsorciAOC/signador/blob/master/guiaUsuaris/imgs/importCert3WIN.png)

* Escull el certificat a importar.
El certificat a instal·lar, root.crt, es troba a la carpeta a on s'ha instal·lat l'aplicació nativa, per defecte és a: 
C:\Program Files (x86)\Signador\lib\certificate

![escullCertWIN](https://github.com/ConsorciAOC/signador/blob/master/guiaUsuaris/imgs/escullCertWIN.png)

* Un cop seleccionat el certificat cliqui a següent

![importCert4WIN](https://github.com/ConsorciAOC/signador/blob/master/guiaUsuaris/imgs/importCert4WIN.png)

* En la següent pantalla torni a clicar següent

![importCert5WIN](https://github.com/ConsorciAOC/signador/blob/master/guiaUsuaris/imgs/importCert5WIN.png)

* Cliqui a Finalitzar per importar el certificat

![importCert6WIN](https://github.com/ConsorciAOC/signador/blob/master/guiaUsuaris/imgs/importCert6WIN.png)

* Torni a realitzar una validació.

### 5.2 Firefox

_Firefox_ disposa del seu propi magatzem de claus, per tant independentment del sistema operatiu sobre el que s'estigui executant, si vol fer servir l'aplicació amb _Firefox_ serà necessari carregar el certificat segueint els següents passos que apliquen per qualsevol sistema operatiu:

* Obrir Firefox --> Accedir a Opcions 

![opcionsFF](https://github.com/ConsorciAOC/signador/blob/master/guiaUsuaris/imgs/opcionsFF.png)

* Avançat --> Certificats --> Visualitza els Certificats

![visualitzaFF](https://github.com/ConsorciAOC/signador/blob/master/guiaUsuaris/imgs/visualitzaFF.png)

* En la pantalla de certificats, accedir a la pestanya Entitats i clicar a Importar

![importCertFF](https://github.com/ConsorciAOC/signador/blob/master/guiaUsuaris/imgs/importCertFF.png)

* Escull el certificat a importar.
El certificat a instal·lar, root.crt, es troba a la carpeta a on s'ha instal·lat l'aplicació nativa, per defecte és a: 

- *Windows 32 bits*  C:\Program Files (x86)\Signador\lib\certificate
- *Windows 64 bits*  C:\Program Files\Signador\lib\certificate
- *Linux 32 bits*   TODO: Update path
- *Linux 64 bits*   TODO: Update path
- *MACOSX*  /Applications/Signador.app/Contents/Resources/app/lib/certificate

![escullCertFF](https://github.com/ConsorciAOC/signador/blob/master/guiaUsuaris/imgs/escullCertFF.png)

* Un cop seleccionat el certificat, marqui a confiar per identificar a llocs web

![confiarCertFF](https://github.com/ConsorciAOC/signador/blob/master/guiaUsuaris/imgs/confiarCertFF.png)

* Torni a realitzar una validació.

**Nota**: Si el problema persisteix poseu-vos en contacte amb el Suport a Usuari del Consorci AOC.

### 5.3 MAC OS X

Per a MAC OS X el certificat és carrega de forma automàtica però l'usuari ha de procedir a acceptar-lo manualment amb les passes que es descriuen a continuació:

TODO: Process snapshots

## 6. Funcionament

Un cop s'ha instal·lat l'aplicació i aquesta funciona correctament, el canvi del funcionament de la versió **JNLP** a la **Nativa** és totalment transparent per l'usuari. 

Els únics canvis són visuals, ja que no es descarrega cap fitxer com en el cas de la versió **JNLP**.
A l'usuari se li mostra un llistat dels certificats dels que disposa i només ha d'escollir el que vol per signar. 
A continuació es mostra un exemple de la pantalla de funcionament del signador en cas de tenir la nativa instal·lada.

![nativaSample](https://github.com/ConsorciAOC/signador/blob/master/guiaUsuaris/imgs/nativaSample.png)

## 7. Desinstal·lació

En cas que es vulgui desinstal·lar, s'ha d'accedir a la carpeta a on s'hagi instal·lat la aplicació, executar el fitxer _uninstall.exe_ i seguir els següents passos:

![desinstalar1Sample](https://github.com/ConsorciAOC/signador/blob/master/guiaUsuaris/imgs/desinstalar1Sample.png)

![desinstalar2Sample](https://github.com/ConsorciAOC/signador/blob/master/guiaUsuaris/imgs/desinstalar2Sample.png)

