# Signador Centralitzat
###Documentació del projecte del Signador centralitzat:

Per a poder utilitzar el servei és necessari donar-se d'alta previament, per a fer-ho és necessari facilitar la següent informació:

*	Domini des del qual es realitzarà les peticions.
*	Imatge amb el logo de l'aplicació usuaria.
*	Clau per a identificar l'aplicació com usuaria del servei.

## Ús del servei

Per a utilizar el servei de signatura serà necessari realitzar les següents crides:

## 1. InitProcess: Servei per iniciar el procés de signatura

Cada operació de signatura requerira d'un `token` per tal de poder iniciar el procés. El procés de signatura des del punt de vista de l'aplicació client és un procès asíncron per tant aquest `token` servirà per lligar desprès la signatura resultant amb el procés intern q l'ha requerit dins de l'aplicació client. Aquest `token` també identificarà la signatura a nivell intern del servei de signador centralitzat per tal de poder per exemple gestionar els errors si fos el cas etc.

Per tal d'aconseguir el `token` s'ha de fer una crida al servei _REST_:

* Entorn PRE: http://signador-pre.aoc.cat/signador/initProcess
* Entorn PRO: http://signador.aoc.cat/signador/initProcess

La crida és simplement un _GET_ amb el qual s'han d'enviar obligatòriament les següents capçaleres http:
* **Authoritzation**:  SC <Codi d'autenticació generat amb un algoritme HMAC codificat en base64>
* **Origin**: Nom del domini que realitzarà les peticions.

La resposta del servei _REST_ tindrà el següent format:

````json
{
	"status": "",
	"tokenId": "",
	"message": ""
}
````
Els possibles valors dels camps són:
*	**status**: **OK** o **KO** en funció de si ha anat correctament o no.
*	**tokenId**: El token generat pel servei necessari per a iniciar el procés de signatura.
*	**message**: El missatge d'error en cas que no hagi anat correctament.

## 1.1 http-header: Authoritzation - HMAC SHA256

Per a calcular la capçalera d'autorització es fa servir el *Message Authentication Code* (MAC) basat en una funció de resum criptogràfic (*HMAC*), en aquest cas com a funció de *Hash* farem servir *SHA256*. 

En aquest cas les dades a processar serà el mateix *nom del domini* tal i com s'ha especificat a l'alta i el secret per a procesar aquesta dada serà la *clau* que s'ha triat també en el procés d'alta. 

A continuació és mostra un exemple simplificat de com quedaria la crida feta amb **Groovy**:

```java
import javax.crypto.Mac
import javax.crypto.spec.SecretKeySpec

def clau = 'LaTerraMulladaFaOlorDeRevolucio'
Mac mac = Mac.getInstance("HmacSHA256")
SecretKeySpec secretKeySpec = new SecretKeySpec(clau.getBytes(), "HmacSHA256")
mac.init(secretKeySpec)
byte[] digest = mac.doFinal('http://dominiAppClient.cat'.getBytes())
digest.encodeBase64().toString()
```

## 2. StartSignProcess: Servei per realitzar el procés de signatura de l'applet o de l'apsa segons la configuració

S'ha de fer una crida al servei _REST_:
* Entorn PRE: http://signador-pre.aoc.cat/signador/startSignProcess
* Entorn PRO: http://signador.aoc.cat/signador/startSignProcess

El _JSON_ a enviar per iniciar procés de l'applet:
````json
{
	"callbackUrl": "",
	"tokenId": "",
	"descripcio": "descripció de proves",
	"applet_cfg":{
		"keystore_type": "0",
		"signature_mode": "12",
		"doc_type": "3",
		"doc_name": "nom",					
		"document_to_sign": "CfwqKKwXitsErA=",
		"hash_algorithm": "SHA1"
	}
}
````
El _JSON_ a enviar per iniciar procés de l'apsa:
````json
{
	"callbackUrl": "",
	"tokenId": "",
	"descripcio": "descripció de proves apsa",
	"applet_apsa_cfg": {
			"keystore_type": "1",
			"doc_name": "nom",							
			"hash_a_xifrar": "gYbYj9w6",
			"signingCertificate": ""
	}
}
````
Descripció dels camps _JSON_ comuns de la configuració:
*	**callbackUrl**: Url del servei a on realitzarà la crida per informar del resultat de la operació de signatura. La url no ha d'incloure el domini. És un camp obligatori.
*	**tokenId**: El token que ens ha retornat el servei d'inici del procés. És un camp obligatori.
*	**Descripció**: Descripció del procés de signatura. No és obligatori.

Descripció dels camps _JSON_ de la configuració de l'applet:
*	**keystore_type**: Tipus de keystore. Camp obligatori. 
*	**signature_mode**: Mode de signatura. Camp obligatori.
*	**doc_type**: Tipus de document. Camp obligatori.
*	**doc_name**: Nom del document. Camp obligatori. 
*	**document_to_sign**: Document en UTF-8 a signar en base64. Camp obligatori.
*	**hash_algorithm**: Algoritme de hash. Camp no obligatori. Per defecte SHA-1.

Descripció dels camps JSON de la configuració de l'apsa:
*	**keystore_type**: Tipus de keystore. Camp obligatori.
*	**doc_name**: Nom del document. Camp obligatori.
*	**hash_a_xifrar**: hash a signar. Camp obligatori.
*	**signingCertificate**: Certificat per signar en base64. Camp no obligatori.

Els possibles valors acceptats del **keystore_type** són:
*	0: Generic_keystore.
*	1: MS_keystore.
*	2: PKCS12_keystore.
*	3: Smartcard_keystore.
*	4: Mozilla_keystore.
*	5: Java_keystore.
*	6: MacOSX_keystore.

Els possibles valors acceptats del **signature_mode** són:
*	1: CMS_attached.
*	2: CMS_detached.
*	3: CMS_detached_hash.
*	4: CMS_in_PDF.
*	5: XMLdsig_enveloped.
*	6: XMLdsig_enveloping.
*	7: XMLdsig_detached.
*	8: XMLdsig_detached_hash.
*	9: XAdES_BES_enveloped.
*	10: XAdES_BES_enveloping.
*	11: XAdES_BES_detached.
*	12: XAdES_BES_detached_hash.
*	13: XAdES_T_enveloped.
*	14: XAdES_T_enveloping.
*	15: XAdES_T_detached.
*	16: XAdES_T_detached_hash.
*	21: CAdES_BES_attached.
*	22: CAdES_BES_detached.
*	23: CAdES_BES_detached_hash.
*	24: CAdES_BES_in_PDF.
*	25: CAdES_T_attached.
*	26: CAdES_T_detached.
*	27: CAdES_T_detached_hash.
*	28: CAdES_T_in_PDF.

Els possibles valors acceptats del **doc_type** són:
*	3: hashDoc.
*	4: B64fileContent.
*	6: urlFile.

En cas que es vulgui signar més d'un document o hash el servei ho permet, posant els diferents documents o hashos separats per [;] amb el seu respectiu nom també separat per [;].

La resposta del servei _REST_ tindrà el següent format:

````json
{
	"status": "OK/KO",
	"tokenId": "12345",
	"message": ""
}
````
Els possibles valors dels camps:
*	**status**: **OK** o **KO** en funció que si ha anat correctament o no.
*	**tokenId**: El token del procés de signatura.
*	**message**: El missatge d'error en cas que no hagi anat correctament.

## 3.	Resposta

Un cop s'hagi executat el **JNLP**, el servei respondrà en la url de callback que s'hagi passat en els paràmetres de configuració, per informar de la resposta de la signatura en cas que hagi anat bé o el motiu de l'error en cas que no.

El format del _JSON_ que enviarem a l'endpoint informat será el següent:
````json
{
   "token": "id del token",
   "signResult": "resultat de la signatura",
   "type": "XML/CMS/PDF/HASH",
   "error": "motiu de l’error"
}
````
Els possibles valors dels camps:
*	**token**: El token del procés de signatura.
*	**signResult**: El resultat de la signatura en base64.
*	**type**: El tipus del resultat que retornem. Els possibles valors son: **XML/CMS/PDF/HASH**.
*	**error**: El motiu d'error en cas que no hagi anat correctament.

El temps màxim permès per processar la petició és de 5 minuts. Passat aquest temps la petició es donarà per finalitzada amb error de timeout.
