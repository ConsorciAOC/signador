# Signador Centralitzat - En *Beta*

**La següent documentació està en construcció i és susceptible de patir canvis**

###Documentació del projecte del Signador centralitzat

Per a poder utilitzar el servei és necessari donar-se d'alta previament, per a fer-ho és necessari facilitar la següent informació:

*	Domini des del qual es realitzarà les peticions.
*	Imatge amb el logo de l'aplicació usuaria. Mida màxima 300 width x 100 height.
*	Imatge amb el logo que apareixerà a l'applet. Mida màxima 300 width x 100 height. *No obligatori*.
*	Clau per a identificar l'aplicació com usuaria del servei.

## Diagrama de flux

Per tal de donar context i entendre com funciona el servei a continuació és mostra un esquema del flux d'operació d'una aplicació contra el signador centralitzat per a intentar il·lustrar les crides i el funcionament del mateix:

![Diagrama flux signador centralitzat](/diagrama flux.png?raw=true "Diagrama flux signador centralitzat")

## Ús del servei

Per a utilizar el servei de signatura serà necessari la realització de les següents crides:

## 1. InitProcess: Servei per iniciar el procés de signatura

Cada operació de signatura requerirà d'un `token` per tal de poder iniciar el procés. El procés de signatura des del punt de vista de l'aplicació client és un procès asíncron per tant aquest `token` servirà per lligar després la signatura resultant amb el procés intern que l'ha requerit dins de l'aplicació client. Aquest `token` també identificarà la signatura a nivell intern del servei de signador centralitzat per tal de poder per exemple gestionar els errors si fos el cas, etc.

Per tal d'aconseguir el `token` s'ha de fer una crida al servei _REST_ ubicat al següent endpoint:

* Entorn PRE: http://signador-pre.aoc.cat/signador/initProcess
* Entorn PRO: http://signador.aoc.cat/signador/initProcess

La crida és simplement un _GET_ amb el qual s'han d'enviar obligatòriament les següents capçaleres http:
* **Authoritzation**:  SC \<Codi d'autenticació generat amb un algoritme HMAC codificat en base64\>
* **Origin**: Nom del domini que realitzarà les peticions.
* **Date**: Data amb el format `dd/MM/yyyy HH:mm` (Exemple: _28/05/2016 13:21_)

La resposta del servei _REST_ tindrà el següent format:

````json
{
	"status": "",
	"token": "",
	"message": ""
}
````
Els possibles valors dels camps són:
*	**status**: **OK** o **KO** en funció de si ha anat correctament o no.
*	**token**: El token generat pel servei necessari per a iniciar el procés de signatura.
*	**message**: El missatge d'error en cas que no hagi anat correctament.
	
Es comprovarà que la data proporcionada a la capçalera **Date** estigui dins del rang `now -1 hora < Date < now +1 hora`

### 1.1. http-header: Authoritzation - HMAC SHA256

Per a calcular la capçalera d'autorització es fa servir el *Message Authentication Code* (MAC) basat en una funció de resum criptogràfic (*HMAC*), en aquest cas com a funció de *Hash* farem servir *SHA256*. 

En aquest cas les dades a processar serà el mateix *nom del domini* tal i com s'ha especificat a l'alta, concatenat amb el caràcter underscore `_` i la *data* proporcionada a la capçalera date (exemple `http://ajuntament.cat_28/05/2016 13:21`). El secret per a procesar aquesta dada amb l'algoritme `HMAC_SHA256` serà la *clau* que s'ha triat també durant el procés d'alta. 

A continuació és mostra un exemple simplificat de com es podria generar la capçalera d'autenticació amb **Groovy**:

```java
import javax.crypto.Mac
import javax.crypto.spec.SecretKeySpec

def clau = 'changeit'
def algoritme = 'HmacSHA256'
def mac = Mac.getInstance(algoritme)

def domini = 'http://ajuntament.cat'
def date = new Date().format('dd/MM/yyyy HH:mm')
def dades = "${domini}_${date}"

def secretKeySpec = new SecretKeySpec(clau.getBytes(), algoritme)
mac.init(secretKeySpec)
byte[] digest = mac.doFinal(dades.getBytes())
digest.encodeBase64().toString()
```

De la mateixa forma en **Java** (ometen `try/catch`, `main` etc):

```java
import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import java.util.Base64.Encoder;
import java.text.SimpleDateFormat;
import java.util.Date;

String domini = "http://ajuntament.cat";
SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy HH:mm");
String date = sdf.format(new Date());
String dades = domini + "_" + date;

String clau = "legalizeit";
String algoritme = "HmacSHA256";
Mac mac = Mac.getInstance(algoritme);
SecretKeySpec secretKeySpec = new SecretKeySpec(clau.getBytes(), algoritme);
mac.init(secretKeySpec);
byte[] digest = mac.doFinal(dades.getBytes());
Encoder encoder = java.util.Base64.getEncoder();
encoder.encodeToString(digest);
```

**Nota**: La classe `java.util.Base64` existeix a partir de la versió 8 de *Java*, si es desenvolupa amb una altre versió és pot utilitzat qualsevol altre codificador en *Base64* com per exemple el [`javax.xml.bind.DatatypeConverter`](https://docs.oracle.com/javase/7/docs/api/javax/xml/bind/DatatypeConverter.html) que es troba dins de la versió 6 i 7 de *Java*. O el `org.apache.commons.codec.binary.Base64` del [Apache Commons Codec](http://commons.apache.org/proper/commons-codec/), o tants d'altres.

Proveïm aquests codis a tall d'exemple, per veure exemples en altres llenguatges de programació podeu consultar el següent [_recurs_](http://www.jokecamp.com/blog/examples-of-creating-base64-hashes-using-hmac-sha256-in-different-languages/)

## 2. StartSignProcess: Servei per realitzar el procés de signatura de l'applet o de l'apsa segons la configuració

Un cop és diposa del `token` per a l'operació de signatura, es pot iniciar el porcés. Per tal de fer-ho es necessari associar la configuració de signatura que realitzarà l'usuari amb el `token` d'operació obtingut.

Per a fer-ho, s'ha de realitzar una crida al servei _REST_ al següent endpoint:

* Entorn PRE: http://signador-pre.aoc.cat/signador/startSignProcess
* Entorn PRO: http://signador.aoc.cat/signador/startSignProcess
 
En aquesta crida també és necessari afegir la capçalera http **Origin** amb el nom del domini. Si la crida és fa des de *Javascript* utilitzant domini registrat els pròpis navegadors per un tema de seguretat ja afegeixen la capçalera a la crida, [veure CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS).

### 2.1. StartSignProcess: Applet de signatura

La crida consisteix en un *POST* on s'envia un objecte _JSON_, aquest objecte per a iniciar el procés de signatura amb l'applet té la següent forma:

````json
{
	"callbackUrl": "",
	"token": "",
	"descripcio": "",
	"applet_cfg":{
		"keystore_type": "",
		"signature_mode": "",
		"doc_type": "",
		"doc_name": "",					
		"document_to_sign": "",
		"hash_algorithm": "",
		"pdf_cfg": {
			"pdf_visible_signature": "",
			"pdf_reserved_space": "",
			"pdf_signature_field": "", 
			"pdf_certification_level": "",
			"pdf_reason": "",
			"pdf_location": "",
			"pdf_signature_image": "",
			"pdf_signature_rectangle": "",
			"pdf_signature_page_number": "",
			"pdf_signature_rotation": "",
			"pdf_show_adobe_sign_validation": ""
		},
		"certs_cfg": {
			"allowed_CAs": "",
			"allowed_OIDs": "",
			"selected_alias": "",
			"selected_CN": "",
			"subject_Text": "",
			"required_nif": ""
		},
		"xml_cfg": {
			"n_enveloping": "",
			"n_detached": "",
			"uris_to_be_signed": "",
			"includeXMLTimestamp": "",
			"xmlts_tsa_url": "",
			"canonicalizationWithComments": "",
			"protectKeyInfo": ""
		},
		"cms_cfg": {
			"timeStamp_CMS_signature": "",
			"cmsts_tsa_url": ""
		},
		"ades_cfg": {
			"commitment_identifier": "",
			"commitment_description": "",
			"commitment_object_reference": "",
			"signer_role": "",
			"signature_policy": "",
			"signature_policy_hash": "",
			"signature_policy_qualifier": "",
			"signature_policy_hash_algorithm": ""	
		}
	}
}
````

Al següent apartat és descriu amb més detall l'ús de cadascún d'aquests camps, notis només que la gran part dels mateixos és opcional i no és necessari enviar-los per a poder iniciar el procés correctament.

### 2.2. StartSignProcess: Applet de PSA (APSA light)

Per al cas d'iniciar el procés per a carregar l'applet de PSA, l' objecte _JSON_ a enviar té la següent forma.

````json
{
	"callbackUrl": "",
	"token": "",
	"descripcio": "",
	"applet_apsa_cfg": {
			"keystore_type": "",
			"doc_name": "",							
			"hash_a_xifrar": "",
			"signingCertificate": ""
	}
}
````

### 2.3. Camps comuns de la configuració

Descripció dels camps _JSON_ comuns de la configuració:
*	**callbackUrl**: Url del servei a on es realitzarà la crida per informar del resultat de la operació de signatura. La url no ha d'incloure el domini, ja que aquest paràmetre s'encadenarà amb el domini registrat. **Camp obligatori**.
*	**token**: El token que ens ha retornat el servei d'inici del procés. **Camp obligatori**.
*	**Descripció**: Camp de text amb la descripció del procés de signatura. No és obligatori.

### 2.4. Camps de la configuració de l'Applet

Descripció dels camps _JSON_ de la configuració de l'applet:
*	**keystore_type**: Tipus de keystore a utilitzar per a realitzar la signatura. Per garantir la compatibilitat amb totes els sistemes es recomana informar com a valor `0`. **Camp obligatori**.
*	**signature_mode**: Mode de signatura. **Camp obligatori**.
*	**doc_type**: Tipus de document. **Camp obligatori**.
*	**doc_name**: Nom del document. **Camp obligatori**.
*	**document_to_sign**: Document original a signar n UTF-8 codificat en base64. **Camp obligatori**.
*	**hash_algorithm**: Algoritme de hash. Per defecte SHA-1. Camp no obligatori.

En cas que es vulgui signar més d'un document o hash el servei ho permet, posant els diferents documents o hashos separats per `;` (al camp `document_to_sign`) amb els seus respectius noms també separat per `;` (al camp `doc_name`). El número d'elements d'aquests dos camps ha de coincidir.

### 2.5. Camps de la configuració de l'APSA

Descripció dels camps _JSON_ de la configuració de l'apsa:
*	**keystore_type**: Tipus de keystore. **Camp obligatori**.
*	**doc_name**: Nom del document. **Camp obligatori**.
*	**hash_a_xifrar**: hash a signar. **Camp obligatori**.
*	**signingCertificate**: Certificat per signar en base64. Camp no obligatori.

En cas que es vulgui signar més d'un document o hash el servei ho permet, posant els diferents documents o hashos separats per `;` (al camp `hash_a_xifrar`) amb els seus respectius noms també separat per `;` (al camp `doc_name`). El número d'elements d'aquests dos camps ha de coincidir.

### 2.6. Possibles valors dels camps de configuració:

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
*       1: allFilesInDir
*       2: singleFile
*	3: hashDoc.
*	4: B64fileContent.
*	6: urlFile.

### 2.7. Filtres de certificats: **certs_cfg**

L'objecte **certs_cfg** és opcional i permet especificar filtratges a l'hora de seleccionar el certificat per part de l'usuari. Si el filtre és prou específic per donar només una coincidència a l'usuari no se li mostrarà el diàleg de selecció de certificats i se seleccionarà de forma automàtica la coincidència, en cas que n'hi hagi més d'un és mostrarà el diàleg de selecció amb els certificats que coincideixin amb el criteri proporcionat:

* 	**allowed_CAs**: Permet filtrar mitjançant el _CommonName_ de l'_IssuerDistinguishedName_ del certificat. Es poden indicar múltiples entrades separades per punts i comes `;`. El filtre és _case insensitive_. Exemple: `“EC-SAFP;EC-idCAT”`.
* 	**allowed_OIDs**: Permet filtrar mitjançant l'identificador de la directiva de certificat que apareix a l'extensió _Bases del certificat_. Es poden indicar múltiples entrades separades per punts i comes `;`.
* 	**selected_alias**: Permet filtrar per l'àlies del certificat. Es comprova que existeixi en el dispositiu / magatzem seleccionat.
* 	**selected_CN**: Permet filtrar per el _CommonName_ dins del _SubjectDistinguishedName_ del certificat.
* 	**subject_Text**: Permet filtrar per una cadena de text que ha d'estar present dins de qualsevol dels camps del _SubjectDistinguishedName_ del certificat. El filtre és _case insensitive_. Exemple: `“Director General”`
* 	**required_nif**: Aquest paràmetre no permet el filtrage a priori, sinó que el que fa és realitzar una comprovació contra [PSIS](http://web.aoc.cat/blog/serveis/validador/) previa a la realització de la signatura, validant que el certificat seleccionat per l'usuari és correspon amb el _NIF_ indicat en aquest camp. Cas que no sigui així l'applet no continuarà amb l'operació de signatura i mostrarà el missatge d'error corresponent. 

### 2.8. Aparença i configuració de sigantures PDF: **pdf_cfg**
* 	**pdf_visible_signature**: Permet indicar a l'applet que la signatura que es crearà al document PDF sigui invisible (valor a `false`). Per defecte el valor és `true` (visible). Si hi ha camps de signatura, aquest paràmetre no té afectació i es signarà en els camp/s buits de signatura.
* 	**pdf_reserved_space**: Permet especificar l'espai de memòria a reservar per la signatura dins del document PDF. Cal indicar aquest valor en `KBytes`. Per defecte, el valor que pren aquest paràmetre en funció del tipus de signatura és: 
	* 	Signatura CMS:      	26 KB 
	* 	Signatura CAdES: 	500 KB.
* 	**pdf_signature_field**: Si el document PDF a signar disposa de camps de signatura buits, és possible indicar el nom del camp que es desitja signar mitjançant aquest paràmetre.
* 	**pdf_certification_level**: Permet especificar el nivell de certificació de la signatura d'un document PDF. Els possibles valors d'aquest atribut són:
	* 	0 : Document no certificat (opció per defecte).
	* 	1 : Document certificat. No es permeten canvis.
	* 	2 : Document certificat. Es permet l'emplenament de formularis.
	* 	3 : Document certificat. Es permet l'emplenament de formularis, i anotacions.
* 	**pdf_reason**: Permet indicar el motiu de la signatura (camp propi d'Adobe). L'ús d'aquest paràmetre deshabilita aquesta opció en el diàleg de signatura de documents PDF.
* 	**pdf_location**: Permet indicar una localització (camp propi d'Adobe). L'ús d'aquest paràmetre deshabilita aquesta opció en el diàleg de signatura de documents PDF.
* 	**pdf_signature_image**: Ens permet escollir la imatge que apareix a la signatura d'un document PDF. El valor d'aquest paràmetre haurà de ser la codificació en Base64 del fitxer amb l'imatge
* 	**pdf_signature_rectangle**: Quan no hi ha camps de signatura i la signatura ha de ser visible, hi ha l'opció de seleccionar on es crearà el camp de la mateixa. Aquest paràmetre permet especificar les coordenades del quadre de signatura dins de la plana. El valor d'aquest paràmetre per defecte és `100 100 200 200`. Les coordenades s'indiquen de forma numèrica i separades per espais, el valor de les mateixes es correspon a: `LowerLeftX LowerLeftY UpperRightX UpperRightY`.
* 	**pdf_signature_page_number**: Indica en quina plana del document ha d'anar la signatura. És possible indicar que la signatura es coloqui a l'última plana del document PDF especificant el valor `0`, o també és possible indicar que sigui visible a totes les planes del mateix especificant el valor `-1`.
* 	**pdf_signature_rotation**: Permet rotar el camp de signatura visible dins del PDF, rotant la imatge i el text del mateix. Els possibles valors són `90`,`180`,`270` (per defecte pren el valor `0`). El gir es fa en sentit anti-horari el nombre de graus especificats.
* 	**pdf_show_adobe_sign_validation**: Al visualitzar la signatura a través de l'Abobe aquest per defecte mostra  el tick, cross o el interrogant i la descripció de l'estat: signature valid, signature invalid, signature not yet verified (a banda de la imatge, text etc que afegeix l'applet). Aquest paràmetre permet configurar si es vol que es mostri o no aquesta informació donant com a valor `true` o `false`. Per defecte aquest paràmetre pren el valor `false` i per tant aquesta informació no es mostra.

## 3. StartSignProcess: Resposta

La resposta del servei _REST_ a aquestes crides tindrà el següent format:

````json
{
	"status": "OK/KO",
	"token": "12345",
	"message": ""
}
````

Els possibles valors dels camps:
*	**status**: **OK** o **KO** en funció que si ha anat correctament o no.
*	**token**: El token del procés de signatura.
*	**message**: El missatge d'error en cas que no hagi anat correctament.

## 4. Signatura per part de l'usuari

Un cop s'ha aconseguit el `token` i creada la configuració de signatura vinculada al mateix, l'aplicació client ha de redirigir l'usuari a la web del signador centralitzat per tal de que aquest pugui acabar realitzant la signatura. Per tal de fer-ho s'ha de realitzar un _GET_ passant com a paràmetre un `id` amd el valor del `token` a la següent URL:

* Entorn PRE: http://signador-pre.aoc.cat/signador/?id=token
* Entorn PRO: http://signador.aoc.cat/signador/?id=token

Aquesta plana s'encarregarà de la creació de signatura per part de l'usuari a través d'un [**JNLP**](https://docs.oracle.com/javase/tutorial/deployment/deploymentInDepth/jnlp.html).

El temps màxim permès per processar la petició és de 5 minuts. Si el client no ha generat la signatura passat aquest temps, la petició es donarà per finalitzada amb error de timeout.

## 5. Callback Resposta

Un cop el client hagi executat la signatura a través del **JNLP**, el servei del signador rebrà la signatura i respondrà a l'aplicació client utilitzant la URL de callback que s'hagi informat en els paràmetres de configuració. El servei retornarà la resposta amb la signatura generada en cas que hagi anat bé o el motiu de l'error en cas que no.

El format del _JSON_ que enviarem a l'endpoint informat será el següent:
````json
{
   "status": "OK/KO",
   "token": "id del token",
   "signResult": "resultat de la signatura",
   "type": "XML/CMS/PDF/HASH/ZIP",
   "error": "motiu de l'error"
}
````
Els possibles valors dels camps:
*	**status**: **OK** o **KO** en funció que si ha anat correctament o no.
*	**token**: El token del procés de signatura.
*	**signResult**: El resultat de la signatura en base64.
*	**type**: El tipus del resultat que retornem. Els possibles valors son: **XML/CMS/PDF/HASH/ZIP**.
*	**error**: El motiu d'error en cas que no hagi anat correctament.

Serà necessari per tant per part de l'aplicació client d'implementar un endpoint que accepti rebre un _POST_ amb el contingut del _JSON_ especificat en aquesta punt. Amb la resposta anirà la capçalera http `Content-Type: application/json`.

En cas que l'operació sigui de *Multisignatura*, es a dir que el client faci varies signatures en una mateixa operació, l'aplicació rebrà una unica resposta amb el `token` igual que es fa amb signatures simples. La diferència serà que en aquesta cas la resposta serà un document _ZIP_ que contindrà les diferents signatures generades.

**NOTES:** 
* És tasca de l'aplicació client validar que la signatura compleix amb els requeriments esperats com per exemple que l'ha signat la persona desitjada, que el certificat no està revocat, que la signatura és vàlida etc.
* No hi ha política de reintents pel que fa a l'enviament de la signatura per part del signador a l'aplicació client, en cas que hi hagi algún problema amb aquest, s'haurà de tornar a iniciar l'operació.

## 6. Demo / Serveis integrats

Podeu veure una **Demo** d'una integració del servei a les següents Urls:

* [Demo preproducció](http://signador-pre.aoc.cat/signador/demo)
* [Demo producció](http://signador.aoc.cat/signador/demo)

A banda de la **Demo** a tall d'exemple també es mostren les Urls del **Signasuite** que és un servei de validació/creació de signatures etc. que properament estarà també integrat amb el servei del signador:

* [Signasuite preproducció](http://signasuite-pre.aoc.cat/signasuite/inici)
* [Signasuite producció](http://signasuite.aoc.cat/signasuite/inici)

## 7. TODO: Altres

* Recomanació HTTPS
* Recomanació tipus signatures (Hash)
* Restriccions mida màxima documents
* doc_type 1,2 explicar funcionament.

## Llibreria integradors

Per a facilitar el procés d'integració posem a disposició dels integradors una llibreria feta en *Javascript* per a poder-se integrar en el servei. Trobareu més detall sobre la mateixa [aqui](https://github.com/ConsorciAOC/signador/blob/master/integracioJS/README.md).
