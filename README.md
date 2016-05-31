# Signador Centralitzat
Documentació del projecte de signador centralitzat

Per donar-se d’alta en el servei primer s’ha d’informar la següent informació:
*	Domini del qual es realitzarà les peticions.
*	Imatge amb el logo. 

Per integrar-se al servei de signatura s’han de fer les següents crides:

## 1. InitProcess: Servei per iniciar el procés de signatura

S’ha de fer una crida al servei REST:

*[Servei init] (http://signador.aoc.cat/signador/initProcess)

Capçaleres obligatòries a enviar:
* **Authoritzation**:  codi d’autenticació generat amb una HMAC.
* **Origin**: IP del domini que realitzarà les peticions.

Resposta del servei REST:

El servei ens retornarà un JSON amb el següent format:
````json
{
	"status": "",
	"tokenId": "",
	"message": ""
}
````
Els possibles valors dels camps:
*	**status**: **OK** o **KO** en funció que si ha anat correctament o no.
*	**tokenId**: El token generat pel servei necessari per iniciar el procés de signatura.
*	**message**: El missatge d’error en cas que no hagi anat correctament.

## 2. StartSignProcess: Servei per realitzar el procés de signatura de l’applet o de l’apsa segons la configuració

S’ha de fer una crida al servei REST:

* [Servei Start](http://signador.aoc.cat/signador/startSignProcess)

* **JSON** a enviar per iniciar procés de l’applet:
````json
{
	"callbackUrl": "",
	"tokenId": "",
	"descripcio": "descripcio de proves",
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
* **JSON** a enviar per iniciar procés de l’apsa:
````json
{
	"callbackUrl": "",
	"tokenId": "",
	"descripcio": "descripcio de proves apsa",
	"applet_apsa_cfg": {
			"keystore_type": "1",
			"doc_name": "nom",							
			"hash_a_xifrar": "gYbYj9w6",
			"signingCertificate": ""
	}
}
````
Descripció dels camps JSON comuns de la configuració:
*	**callbackUrl**: Url del servei a on realitzarà la crida per informar del resultat de la operació de signatura. La url no ha d’incloure el domini. És un camp obligatori.
*	**tokenId**: El token que ens ha retornat el servei d’inici del procés. És un camp obligatori.
*	**Descripció**: Descripció del procés de signatura. No és obligatori.

Descripció dels camps JSON de la configuració de l’applet:
*	**keystore_type**: Tipus de keystore. Camp obligatori.
*	**signature_mode**: Mode de signatura. Camp obligatori.
*	**doc_type**: Tipus de document. Camp obligatori.
*	**doc_name**: Nom del document. Camp obligatori. 
*	**document_to_sign**: Document en UTF-8 a signar en base64. Camp obligatori.
*	**hash_algorithm**: Algoritme de hash. Camp no obligatori. Per defecte SHA-1.

Descripció dels camps JSON de la configuració de l’apsa:
*	**keystore_type**: Tipus de keystore. Camp obligatori.
*	**doc_name**: Nom del document. Camp obligatori.
*	**hash_a_xifrar**: hash a signar. Camp obligatori.
*	**signingCertificate**: Certificat per signar en base64. Camp no obligatori.
En cas que es vulgui signar més d’un document o hash el servei ho permet, posant els diferents documents o hashos separats per “;” amb el seu respectiu nom també separat per “;”.

Resposta del servei REST:

El servei ens retornarà un JSON amb el següent format:
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
*	**message**: El missatge d’error en cas que no hagi anat correctament.

## 3.	Resposta

Un cop s’hagi executat el **JNLP**, el servei respondrà en la url de callback que s’hagi passat en els paràmetres de configuració, per informar de la resposta de la signatura en cas que hagi anat bé o el motiu de l’error en cas que no.

El format del JSON que enviarem a l’endpoint informat será el següent:
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
*	**error**: El motiu d’error en cas que no hagi anat correctament.
El temps màxim permès per processar la petició és de 5 minuts. Passat aquest temps la petició es donarà per finalitzada amb error de timeout.
