# Signador Centralitzat - En *Beta*

**La següent documentació està en construcció i és susceptible de patir canvis**

###Documentació del projecte del Signador centralitzat

Per a poder utilitzar el servei és necessari donar-se d'alta previament, per a fer-ho és necessari facilitar la següent informació:

*	Domini des del qual es realitzarà les peticions.
*	Imatge amb el logo de l'aplicació usuaria. Mida màxima 300 width x 100 height.
*	Imatge amb el logo que apareixerà a l'applet. Mida màxima 300 width x 100 height. *No obligatori*.
*	Clau per a identificar l'aplicació com usuaria del servei.
*	Allow Native, per si es permet el funcionament del servei amb l'aplicació nativa. **en desenvolupament**

## Diagrama de flux

Existeixen dues formes d'integrar-se amb el servei, la part inicial és comú en ambdues, només canvia la forma en quèwe l'aplicació recupera la signatura, ambdues formes es descriuen més avall en aquest mateix document. Per tal de donar context i entendre els dos mètodes de funcionament del servei a continuació és mostren els diagrames de flux d'operació d'una aplicació contra el signador per a intentar il·lustrar les crides i el funcionament del mateix per als dos casos:

### Diagrama de flux amb redirect

![Diagrama flux signador amb redirect](/imgs/redirectFlow.png?raw=true "Diagrama flux signador amb redirect")

### Diagrama de flux amb callback

![Diagrama flux signador amb callback](/imgs/callbackFlow.png?raw=true "Diagrama flux signador amb callback")

## Ús del servei

Per a utilizar el servei de signatura serà necessari la realització de les següents crides:

## 1. InitProcess: Servei per iniciar el procés de signatura

Cada operació de signatura requerirà d'un `token` per tal de poder iniciar el procés. El procés de signatura des del punt de vista de l'aplicació client és un procès asíncron per tant aquest `token` servirà per lligar després la signatura resultant amb el procés intern que l'ha requerit dins de l'aplicació client. Aquest `token` també identificarà la signatura a nivell intern del servei de signador centralitzat per tal de poder per exemple gestionar els errors si fos el cas, etc.

Per tal d'aconseguir el `token` s'ha de fer una crida al servei _REST_ ubicat al següent endpoint:

* Entorn PRE: https://signador-pre.aoc.cat/signador/initProcess
* Entorn PRO: https://signador.aoc.cat/signador/initProcess

La crida és simplement un _GET_ amb el qual s'han d'enviar obligatòriament les següents capçaleres http:
* **Authoritzation**:  SC \<Codi d'autenticació generat amb un algoritme HMAC codificat en base64\>
* **Origin**: Nom del domini que realitzarà les peticions.
* **Date**: Data amb el format `dd/MM/yyyy HH:mm` (Exemple: _28/05/2016 13:21_)

La resposta del servei _REST_ tindrà el següent format:

```json
{
	"status": "",
	"token": "",
	"message": ""
}
```
Els possibles valors dels camps són:
*	**status**: **OK** o **KO** en funció de si ha anat correctament o no.
*	**token**: El token generat pel servei necessari per a iniciar el procés de signatura.
*	**message**: El missatge d'error en cas que no hagi anat correctament.
	
Es comprovarà que la data proporcionada a la capçalera **Date** estigui dins del rang `now -1 hora < Date < now +1 hora`

**Nota**: Donat que es tracta d'una autenticació aquesta crida no suporta el _CORS_ i per tant la crida s'ha de fer des del backend.

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

Proveïm aquests codis a tall d'exemple, per veure exemples en altres llenguatges de programació de com calcular el _HMAC_ podeu consultar el següent [recurs](http://www.jokecamp.com/blog/examples-of-creating-base64-hashes-using-hmac-sha256-in-different-languages/)

Podeu trobar també un exemple complet en _Groovy_ de com invocar el `/initProcess` per aconseguir el _token_ de l'operació [aqui](https://github.com/albciff/groovy-scripts/blob/master/scripts/HTTPBuilder_get_initProcess_signador.groovy)

## 2. StartSignProcess: Servei per realitzar el procés de signatura de l'applet o de l'apsa segons la configuració

Un cop és diposa del `token` per a l'operació de signatura, es pot iniciar el porcés. Per tal de fer-ho es necessari associar la configuració de signatura que realitzarà l'usuari amb el `token` d'operació obtingut.

Per a fer-ho, s'ha de realitzar una crida al servei _REST_ al següent endpoint:

* Entorn PRE: https://signador-pre.aoc.cat/signador/startSignProcess
* Entorn PRO: https://signador.aoc.cat/signador/startSignProcess
 
En aquesta crida també és necessari afegir la capçalera http **Origin** amb el nom del domini. Si la crida és fa des de *Javascript* utilitzant domini registrat els pròpis navegadors per un tema de seguretat ja afegeixen la capçalera a la crida, [veure CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS).

### 2.1. StartSignProcess: Applet de signatura

La crida consisteix en un *POST* on s'envia un objecte _JSON_, aquest objecte per a iniciar el procés de signatura amb l'applet té la següent forma. És **important remarcar** que en funció de si s'informa el camp `callbackUrl` o `redirectUrl` canviarà la gestió del flux del usuari i la recuperació de la signatura per part de l'aplicació client.

```javascript
{
	"callbackUrl": "" o "redirectUrl": "", // S'ha d'informar o un o l'altre
	"token": "",
	"descripcio": "",
	"responseB64": "",
	"applet_cfg":{
		"keystore_type": "",
		"signature_mode": "",
		"doc_type": "",
		"doc_name": "",					
		"document_to_sign": "",
		"hash_algorithm": "",
		"pkcs11_files": "",
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
			"required_nif": "",
			"psis_validation": ""
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
```

Al següent apartat és descriu amb més detall l'ús de cadascún d'aquests camps, notis només que la gran part dels mateixos és opcional i no és necessari enviar-los per a poder iniciar el procés correctament.

Podeu trobar també un exemple simple en _Groovy_ de com invocar el `/startSignProcess` passant una configuració de signatura d'exemple [aqui](https://github.com/albciff/groovy-scripts/blob/master/scripts/HTTPBuilder_post_startSignProcess_signador.groovy)

### 2.2. StartSignProcess: Applet de PSA (APSA light)

Per al cas d'iniciar el procés per a carregar l'applet de PSA, l' objecte _JSON_ a enviar té la següent forma. És **important remarcar** que en funció de si s'informa el camp `callbackUrl` o `redirectUrl` canviarà la gestió del flux del usuari i la recuperació de la signatura per part de l'aplicació client.

```javascript
{
	"callbackUrl": "" o "redirectUrl": "", // S'ha d'informar o un o l'altre
	"token": "",
	"descripcio": "",
	"responseB64": "",
	"applet_apsa_cfg": {
			"keystore_type": "",
			"doc_name": "",							
			"hash_a_xifrar": "",
			"signingCertificate": ""
	}
}
```

### 2.3. Camps comuns de la configuració

Descripció dels camps _JSON_ comuns de la configuració:
*	**callbackUrl**: Url del servei a on es realitzarà la crida per informar del resultat de la operació de signatura. La url no ha d'incloure el domini, ja que aquest paràmetre s'encadenarà amb el domini registrat.
* 	**redirectUrl**: Url per fer la redirecció del servei un cop ha finalitzat la operació de signatura. La url no ha d'incloure el domini, ja que aquest paràmetre s'encadenarà amb el domini registrat.
*	**token**: El token que ens ha retornat el servei d'inici del procés. **Camp obligatori**.
*	**descripció**: Camp de text amb la descripció del procés de signatura. No és obligatori.
*	**responseB64**: Permet indicar si es vol que la resposta es retorni en base64 o en una URL per descarregar-la. Els possibles valors són `true` o `false`. Per defecte aquest paràmetre pren el valor `true`. No és obligatori.

**Nota: És obligatori informar el camp** `callbackUrl` **o el** `redirectUrl`, **no s'han d'informar els dos**.

### 2.4. Camps de la configuració de l'Applet

Descripció dels camps _JSON_ de la configuració de l'applet:
*	**keystore_type**: Tipus de keystore a utilitzar per a realitzar la signatura. Per garantir la compatibilitat amb totes els sistemes es recomana informar com a valor `0`. **Camp obligatori**.
*	**signature_mode**: Mode de signatura. **Camp obligatori**.
*	**doc_type**: Tipus de document. **Camp obligatori**.
*	**doc_name**: Nom del document. **Camp obligatori**.
*	**document_to_sign**: Document original a signar en format UTF-8 i codificat en base64. **Camp obligatori**.
*	**hash_algorithm**: Algoritme de hash. Per defecte `SHA-1`. Altres possibles valors: `SHA-256` i `SHA-512`. Camp no obligatori.
*	**pkcs11_files**: Indica la ruta dels drivers necessaris d'un o varis dispositius _PKCS11_ per a que l'aplicació carregui les claus d'aquests. Les rutes dels drivers s'han d’especificar de la següent forma: _pathDriver1,ID1;pathDriver2,ID2;..._. El _pathDriver_ és la ruta absoluta del controlador del dispositiu _PKCS11_. L'_ID_ és una cadena de text arbitrària que l'aplicació utilitza internament per a diferenciar els diferents dispositius. Aquest _ID_ també és el que es mostrarà al popup que demana el PIN amb el text: *Introduïu el PIN per a (ID):*. 
També és poden especificar rutes mútuament excloents, per exemple en el cas que un mateix dispositiu _PKCS11_ pugui tenir diferents versions de controladors (amb diferents rutes) o és vulgui donar suport a diferents sistemes operatius; en aquest cas es pot especificar de la següent forma _[pathDriverAVersio1,pathDriverAVersio2,pathDriverAVersioN,pathDriverASistemaOperatiu2],IDA_. En aquest cas l'aplicació anirà provant de carregar els drivers especificades entre `[ ]` en el ordre establert fins que en pugui carregar una, un cop carregada la resta ja no es provaran. Per a la configuració es poden combinar les dues formes, per exemple: _[pathDriverAVersio1,pathDriverAVersio2],IDA;pathB,IDB_. Camp no obligatori.

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
* 	**psis_validation**: Igual que el paràmetre **required_nif** aquest paràmetre fa una validació previa del certificat abans de realitzar la signatura. Simplement valida que el certificat sigui reconegut per [PSIS](http://web.aoc.cat/blog/serveis/validador/).

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


### 2.9. Paràmetres de signatura XML: **xml_cfg**
            
* 	**n_enveloping**: En el cas d'utilitzar qualsevol de les formes de signatura XML enveloping havent de signar múltiples documents, ja sigui documents locals o remots utilitzant la seva URL, és possible generar una única signatura que inclogui referències a tots els documents signats, en comptes d'una signatura per cadascún dels documents. Per a fer-ho aquest paràmetre ha de prendre el valor `true`. Per defecte el valor és `false`. 
* 	**n_detached**: Igual que amb el **n_enveloping** però per a les signatures XML detached, permet generar una signatura XML amb referències a tots els documents signats. La diferència respecte la opció anterior és la possibilitat de poder utilitzar també els resums criptogràfics precalculats dels documents a signar. Per a fer-ho aquest paràmetre ha de prendre el valor `true`. Per defecte el valor és `false`. 
* 	**uris_to_be_signed**: En cas de signatures de tipus XAdES enveloped, és possible mitjançant aquest paràmetre, especificar el node o nodes a signar, en lloc de signar tot el document. Els identificadors s'han d'especificar separats per `;` i cal que es corresponguin amb el valor del atribut `id` dels `<nodes>` del document sobre els que es vol realitzar la signatura. En cas que s'especifiquin identificadors de nodes que no existeixen al document, retornarà un missatge d'error indicant que els atributs no existeixen al document a signar.
* 	**includeXMLTimestamp**: En cas que la signatura incorpori un segell de temps, indica si aquest ha de ser del tipus `XMLTimeStamp` o `EncapsulatedTimeStamp`. Per defecte aquest paràmetre pren el valor `true` que indica que el segell serà de tipus `XMLTimeStamp`, si es vol que el tipus sigui `EncapsulatedTimeStamp` s'ha de posar el valor del paràmetre a `false`.
* 	**xmlts_tsa_url**: Indica l'adreça URL del servei de segellat de temps `XMLTimestamp`. El seu valor per defecte és el servei de segellat de temps de PSIS per segells de temps de format XML segons l'estàndard definit per OASIS al protocol DSS: http://psis.catcert.net/psis/catcert/dss. És molt important tenir en compte que, en cas de modificar el valor d'aquest paràmetre, cal garantir que el servei de segellat que estem seleccionant treballi segons el protocol corresponent. 
* 	**canonicalizationWithComments**: Indica si l'algoritme de canonicalització emprat en la generació de la signatura XML tindrà en compte comentaris o no. Per defecte pren el valor `false`, i per tant ometrà els comentaris. En cas de voler el contrari, el valor del paràmetre a de ser `true`.
* 	**protectKeyInfo**: Valor booleà que indica si s'ha de signar l'element `<KeyInfo>` amb la informació de la clau amb la que s'ha realitzat la signatura. Per defecte pren el valor `false`.

### 2.10. Paràmetres de signatura CMS: **cms_cfg**

* 	**timeStamp_CMS_signature**: Permet afegir un segell de temps a les signatures CMS (no aplica per a CAdES-T que per definició ja incorporen el segell de temps) i per extensió a les signatures CMS incrustades en un PDF. Per activar-ho cal posar el valor del paràmetre a `true`. Per defecte el valor és `false`.
* 	**cmsts_tsa_url**: Indica l'adreça URL del servei de segellat de temps de segells binaris. El seu valor per defecte és el servei de segellat de temps segons el protocol [RFC3161](https://www.ietf.org/rfc/rfc3161.txt) de PSIS: http://psis.catcert.net/psis/catcert/tsp. S'ha de tenir en compte que en cas de canviar aquest valor el servei de TSA que es proporcioni compleixi amb aquest RFC.

### 2.11. Paràmetres de polítiques per als formats avançats de signatura XAdES i CAdES: **ades_cfg**

* 	**commitment_identifier**: Permet especificar el compromís de signatura.
* 	**commitment_description**: Descripció del compromís de signatura, en cas que aquest s'hagi especificat. És un paràmetre opcional, és a dir, es pot especificar compromís sense descripció. _Disponible només per signatures XAdES_.
* 	**commitment_object_reference**: Referència a l'atribut sobre el que s'aplica el compromís de signatura. En cas de no especificar res, el compromís s'aplica sobre tots els atributs. _Disponible només per signatures XAdES_.
* 	**signer_role**: Permet incloure el rol del signatari (_ClaimedRole_) com a element signat dins de la signatura.
* 	**signature_policy**: Permet incloure la política contra la que s'haurà de validar la signatura generada. El valor del paràmetre haurà de ser l'OID de la política de signatura (implica l'ús del paràmetre **signature_policy_hash**)
* 	**signature_policy_hash**: El valor d'aquest paràmetre conté el hash codificat en Base64 del document XML que descriu la política de signatura contra la que es validarà la signatura generada.
* 	**signature_policy_qualifier**: Qualificador de l'identificador de la política de signatura. 
* 	**signature_policy_hash_algorithm**: Algoritme de resum criptogràfic emprat per a calcular el **signature_policy_hash**. Els possibles valors són: `SHA-1`, `SHA-256`, `SHA-512`.

## 3. StartSignProcess: Resposta

La resposta del servei _REST_ a aquestes crides tindrà el següent format:

```json
{
	"status": "OK/KO",
	"token": "12345",
	"message": ""
}
```

Els possibles valors dels camps:
*	**status**: **OK** o **KO** en funció que si ha anat correctament o no.
*	**token**: El token del procés de signatura.
*	**message**: El missatge d'error en cas que no hagi anat correctament.

## 4. Signatura per part de l'usuari

Un cop s'ha aconseguit el `token` i creada la configuració de signatura vinculada al mateix, l'aplicació client ha de redirigir l'usuari a la web del signador centralitzat per tal de que aquest pugui acabar realitzant la signatura. Per tal de fer-ho s'ha de realitzar un _GET_ passant com a paràmetre un `id` amd el valor del `token` a la següent URL:

* Entorn PRE: https://signador-pre.aoc.cat/signador/?id=token
* Entorn PRO: https://signador.aoc.cat/signador/?id=token

Aquesta plana s'encarregarà de la creació de signatura per part de l'usuari a través d'un [**JNLP**](https://docs.oracle.com/javase/tutorial/deployment/deploymentInDepth/jnlp.html) o d'una **aplicació nativa** que properament estarà disponible.

Si l'usuari té instal·lada l'aplicació nativa la signatura és realitzara amb aquest component, cas que no la signatura es farà a través del _JNLP_

El temps màxim permès per processar la petició és de 5 minuts. Si el client no ha generat la signatura passat aquest temps, la petició es donarà per finalitzada amb error de timeout.

En [l'apartat de compatibilitat](https://github.com/ConsorciAOC/signador#8-compatibilitat) s'explica les compatibilitat i el funcionament d'aquests dos mètodes per a realitzar la signatura.

## 5. Recuperar la signatura per part de l'aplicació

Un cop el client hagi realitzat la signatura a través del **JNLP**, el servei del signador rebrà la signatura i en funció de la configuració retornarà la signatura d'una forma o un altre. Els paràmetres que marquen la configuració del retorn són `callbackUrl` o `redirectUrl`, la diferència s'explica a continuació.

### 5.1 Opcio 1: `redirectUrl` : Redirecció *GET* 

En cas que en el `/StartSignProcess` s'hagi informat el paràmetre `redirectUrl`, l'aplicació del signador farà una redirecció a la url informada retornant el flux a l'aplicació client. En la url de redirecció, s'afegira el paràmetre `token_id` amb el valor del token perquè l'aplicació pugui saber de quina operació és tracta, per exemple `https://applicacio/redirect?token_id=bec40de2-510f-4f19-bdfd-2a6595d708b7`.

Un cop la aplicació client prengui el control podrà demanar la resposta de l'operació a través del servei _REST_ `/getSignature` descrit a continuació.

### 5.1.1 `getSignature`: Servei _REST_ per consultar el resultat de l'operació

Per tal d'obtenir la resposta de la signatura s'ha de fer una crida al servei _REST_ ubicat a la següent URL: 

* Entorn PRE: https://signador-pre.aoc.cat/signador/getSignature?identificador=token
* Entorn PRO: https://signador.aoc.cat/signador/getSignature?identificador=token

La crida és simplement un _GET_ passant com a paràmetre un `identificador` amb el valor del `token` rebut en la url de redirecció, igual que la resta de crides també ha d'incloure les següents capçaleres:

* **Authoritzation**:  SC \<Codi d'autenticació generat amb un algoritme HMAC codificat en base64\>
* **Origin**: Nom del domini que realitzarà les peticions.
* **Date**: Data amb el format `dd/MM/yyyy HH:mm` (Exemple: _28/05/2016 13:21_)

La resposta d'aquest servei tindrà el següent format.

```json
{
   "status": "OK/KO",
   "token": "id del token",
   "signResult": "resultat de la signatura",
   "type": "XML/CMS/PDF/HASH/ZIP",
   "error": "motiu de l'error"
}
```
Els possibles valors dels camps:
*	**status**: **OK** o **KO** en funció que si ha anat correctament o no.
*	**token**: El token del procés de signatura.
*	**signResult**: El resultat de la signatura en base64, o una _URL_ per descarregar la resposta.
*	**type**: El tipus del resultat que retornem. Els possibles valors son: **XML/CMS/PDF/HASH/ZIP**.
*	**error**: El motiu d'error en cas que no hagi anat correctament.

En cas que l'operació sigui de *Multisignatura*, es a dir que el client faci varies signatures en una mateixa operació, la resposta del servei tindrà una unica resposta amb el `token` igual que es fa amb signatures simples. La diferència serà que en aquesta cas la resposta serà un document _ZIP_ que contindrà les diferents signatures generades.

**NOTES:** 
* La consulta de la resposta només estarà disponible 15 dies.

### 5.2 Opcio 2: `callbackUrl` : Callback *POST*

A diferència de l'opció 1, en cas que l'aplicació client hagi informat el paràmetre `callbackURL`, quan l'usuari hagi finalitzat la signatura el servei respondrà a l'aplicació client utilitzant la URL de callback que s'hagi informat en els paràmetres de configuració i facilitarà la signatura en aquell endpoint via *POST*. El servei retornarà la resposta amb la signatura generada en cas que hagi anat bé o el motiu de l'error en cas que no.

El format del _JSON_ que enviarem a l'endpoint informat será el següent:

```json
{
   "status": "OK/KO",
   "token": "id del token",
   "signResult": "resultat de la signatura",
   "type": "XML/CMS/PDF/HASH/ZIP",
   "error": "motiu de l'error"
}
```
Els possibles valors dels camps:
*	**status**: **OK** o **KO** en funció que si ha anat correctament o no.
*	**token**: El token del procés de signatura.
*	**signResult**: El resultat de la signatura en base64, o una _URL_ per descarregar la resposta.
*	**type**: El tipus del resultat que retornem. Els possibles valors son: **XML/CMS/PDF/HASH/ZIP**.
*	**error**: El motiu d'error en cas que no hagi anat correctament.

Serà necessari per tant per part de l'aplicació client d'implementar un endpoint que accepti rebre un _POST_ amb el contingut del _JSON_ especificat en aquesta punt. Amb la resposta anirà la capçalera http `Content-Type: application/json`.

En cas que l'operació sigui de *Multisignatura*, es a dir que el client faci varies signatures en una mateixa operació, l'aplicació rebrà una unica resposta amb el `token` igual que es fa amb signatures simples. La diferència serà que en aquesta cas la resposta serà un document _ZIP_ que contindrà les diferents signatures generades.

**NOTES:** 
* És tasca de l'aplicació client validar que la signatura compleix amb els requeriments esperats com per exemple que l'ha signat la persona desitjada, que el certificat no està revocat, que la signatura és vàlida etc.
* No hi ha política de reintents pel que fa a l'enviament de la signatura per part del signador a l'aplicació client, en cas que hi hagi algún problema amb aquest, s'haurà de tornar a iniciar l'operació.

### 5.2.1 URL descàrrega

Per alleugerir el pes del *POST* es possible iniciar el procés indicant en el paràmetre `responseB64` amb valor `false`, d'aquesta forma en la resposta es rebrà en el `signResult` una URL amb la qual es podrà descarregar la resposta realitzant simplement un _GET_  inclohent les següents capçaleres http:

* **Authoritzation**:  SC \<Codi d'autenticació generat amb un algoritme HMAC codificat en base64\>
* **Origin**: Nom del domini que realitzarà les peticions.
* **Date**: Data amb el format `dd/MM/yyyy HH:mm` (Exemple: _28/05/2016 13:21_)

**NOTES:** 
* La descàrrega de la resposta només estarà disponible 15 dies.

### 5.3 Conclusions

La primera solució implementada va ser la **Opcio 2: `callbackUrl` : Callback _POST_**, desprès però de veure les necessitats de les aplicacions, la problemàtica que genera aquesta solució (possibles errors de timeout en el _POST_ de resposta, polling _ajax_ de l'aplicació client per tal de mantenir l'estat de l'operació, ...) i el fet de que alguns clients ens han traslladat el seu neguit al respecte s'ha decidit implementar l'altre via: **Opcio 1: `redirectUrl` : Redirecció _GET_** aquesta via és més neta, genera menys trafic i per tant té un millor rendiment, i permet un millor flux de cara a l'usuari per a la gestió de la signatura. Per tant recomanem en la mesura del possible utilitzar la opció del `redirectUrl`.

## 6. Demo / Serveis integrats

Podeu veure una **Demo** d'una integració del servei amb les dues modalitats als següents enllaços:

**Opcio 1: `redirectUrl` : Redirecció _GET_**

* [Demo preproducció GET](https://signador-pre.aoc.cat/signador/demoGet)
* [Demo producció GET](https://signador.aoc.cat/signador/demoGet)

**Opcio 2: `callbackUrl` : Callback _POST_**

* [Demo preproducció POST](https://signador-pre.aoc.cat/signador/demo)
* [Demo producció POST](https://signador.aoc.cat/signador/demo)

A banda de la **Demo** a tall d'exemple també es mostren els enllaços del **Signasuite** que és un servei de validació/creació de signatures etc. que properament estarà també integrat amb el servei del signador:

* [Signasuite preproducció](http://signasuite-pre.aoc.cat/signasuite/inici)
* [Signasuite producció](http://signasuite.aoc.cat/signasuite/inici)

## 7. Recomanacions/Restriccions

* El servei té una restricció de mida pel que respecta a les peticions, els frontalts estan configurats per no acceptar missatges de mida superior a `7MB`. Per tant s'ha de tenir en compte aquesta restricció a l'hora de passar documents grans codificats en base64 dins del camp `document_to_sign`.
* Es recomanable per a l'agilitat del servei i de les pròpies aplicacions usuaris (tenint també en compte la restricció de mida dels documents a signar) signar sempre que sigui possible el resum criptogràfic del document en comptes del document sencer. D'aquesta manera el servei funcionarà de forma més àgil i els temps de resposta tant per l'aplicació client com per a l'usuari final que realitza la signatura seràn més optims. No s'ha d'oblidar també que finalment és l'aplicació client la que haurà de gestionar aquestes signatures i per qualsevol aplicació sempre serà més fàcil treballar amb signatures de pocs KB que de MB.
* De moment no hi ha cap restricció al respecte, però s'exigirà en un futur, que les aplicacions que s'integrin amb el servei utilitzin protocol HTTPS tant en les crides com en el callback encarregat de rebre la signatura.

## 8. Compatibilitat

En aquest apartat podreu trobar els enllaços a la informació sobre la pròpia aplicació així com les eines que portaran a terme la signatura en la màquina d'usuari, en aquestes guies s'explica la compatibilitat del servei i de les eines pel que fa a versions de sistemes operatius, navegadors, etc que suporta:

### [8.1 Servei del signador](https://github.com/ConsorciAOC/signador/blob/master/guiaUsuaris/compatibilitatSignador.md)
### [8.2 JNLP](https://github.com/ConsorciAOC/signador/blob/master/guiaUsuaris/jnlp.md)
### [8.3 Nativa **en desenvolupament**](https://github.com/ConsorciAOC/signador/blob/master/guiaUsuaris/nativa.md)

## Llibreria integradors

Per a facilitar el procés d'integració posem a disposició dels integradors una llibreria feta en *Javascript* per a poder-se integrar en el servei. Trobareu més detall sobre la mateixa [aqui](https://github.com/ConsorciAOC/signador/blob/master/integracioJS/README.md).
