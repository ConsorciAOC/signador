# Preguntes freqüents 

## Quines connectivitats necessito per a fer ús del signador?

* `https://signador.aoc.cat` (port per defecte 443)
* `https://nativa.aoclocal.cat` (ports del 9090 al 9095)

Opcionalment si feu signatures amb segells de temps també seria necessari obrir conectivitats a PSIS:

* `http://psis.catcert.net` (port per defecte 80)

## Es poden deshabilitar les actualitzacions automàtiques?

L'aplicació nativa cada cop que arrenca comprova si disposa d'actualitzacions i en cas que en detecti alguna demana a l'usuari si desitja instal·lar la nova versió.

En cas d'entorns corporatius on les instal·lacions de l'aplicació nativa les ha dut a terme un administrador, pot donar-se el cas que els usuaris no tinguin permisos suficients per dur a terme les actualitzacions de l'aplicació nativa o que aquestes les vulgui fer l'administrador de forma controlada.

De moment la versió actual de l'aplicació nativa no permet indicar si es volen o no fer comprovacions de l'actualització per tant en cas que aquestes es vulguin controlar el que es pot fer es bloquejar la següent _URL_:

* `https://signador.aoc.cat/signador/updates`

Aquesta és la _URL_ on és connecta l'aplicació nativa per tal de comprovar si hi ha actualitzacions disponibles, per tant si la _URL_ es bloqueja l'aplicació no indicarà en cap cas que hi ha actualitzacions. S'ha d'anar amb compte però de blocar només la _URL_ i no el domini ja que si es bloqueja completament el domini `https://signador.aoc.cat` no es podrà utilitzar la plana per tal de signar.

## Problemes amb la càrrega de claus en altres dispositius via PKCS11 (targes/smartCards)

Si l'aplicació que ha realitzat la integració, no especifica la ruta a les llibreries amb els drivers de la tarja o la smartcard amb la que es vol signar, potser que les claus contingudes dins d'aquest dispositiu no apareguin per a ser seleccionades per a signar. En aquest cas l'usuari pot especificar la ruta a la llibreria destijada de la següent forma. En el directori d'instal·lació de l'aplicació nativa trobareu el següent fitxer: *Signador.vmoptions*. Heu d'editar aquest fitxer i afegir la següent propietat a les ja existents:

```
-Duser.pkcs11.path=/path/al/teu/pkcs11.so
```

Un cop fet, al tornar a realitzar la operació de signatura, si s'ha especificat correctament la clau d'aquest dispositiu apareixerà en el requadre de selecció.
