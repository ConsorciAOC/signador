:warning:
```
No es dona suport a aquest tipus d'integració. És només per al GEEC i l'aplicació de la intranet de la ORGT.
```

# Integració directe aplicació nativa

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
				"aliasEncoded" : "alias del certificat en base64"
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
	"signResult" : "zip codificat en base64 amb la signatura resultant"
	"error" : "Possible missatge d'error"
}
```

* `status` : Indica el resultat de la petició. `OK` si tot ha anat bé. `KO` si s'ha produït algun error.
* `signResult` : Retorna un `zip` codificat en base64 que conté les n signatures que s'hagin generat. Per establir l'ordre del document/hash enviat a signar, i la resposta, el nom dels documents dins del `zip` és númeric respectant l'ordre d'entrada de `0..n`.
* `errror` : Missatge d'error en cas de que el `status` sigui `KO`.




