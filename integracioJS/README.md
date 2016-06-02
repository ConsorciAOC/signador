# Llibreria integradors

Per tal de facilitar la integració amb el nostre servei hem creat una llibreria amb _Javascript_ que conté uns mètodes simples i uns
altres més customitzables per poder-te integrar més fàcilment amb el servei.

La llibreria _Javascript_ pels diferents entorns són la següent:

* Entorn PRE: [descarregar] (https://github.com/lcamps01/signador/blob/master/integracioJS/SignadorCentralitzat_PRE.js)
* Entorn PRO: [descarregar] (https://github.com/lcamps01/signador/blob/master/integracioJS/SignadorCentralitzat_PRO.js)

## Ús de la llibreria

A continuació comentem els diferents mètodes de la llibreria segons si es vol signar amb l'applet o amb l'apsa:

### 1. Consulta Applet:

Els mètodes bàsics per signar en el servei de l'applet són els següents:

````javascript
  signPDF( params );
  signXAdESHash( params );
  signCAdESHash( params );
````

El format dels paràmetres de l'objecte _JSON_ que esperen els mètodes 

````json
{
  "callback": "",
  "tokenId":  "",
  "docName": "",
  "document_to_sign": ""
}
````

El mètode customitzable per servei de l'applet és: ``sign( params )``

El format dels paràmetres de l'objecte _JSON_ que espera és el següent: 

````json
{
  "callback": "",
  "tokenId":  "",
  "descripcio": "",
  "keystore_type": "",
  "signature_mode": "",
  "doc_type": "",
  "docName": "",
  "document_to_sign": "",
  "hash_algorithm": ""
}
````

Descripció dels camps _JSON_:
*	**callback**: Url del servei a on realitzarà la crida per informar del resultat de la operació de signatura.
*	**tokenId**: El token que ens ha retornat el servei d'inici del procés.
*	**Descripció**: Camp de text amb la descripció del procés de signatura.
*	**keystore_type**: Tipus de keystore a utilitzar per a realitzar la signatura.
*	**signature_mode**: Mode de signatura.
*	**doc_type**: Tipus de document.
*	**doc_name**: Nom del document.
*	**document_to_sign**: Document original a signar n UTF-8 codificat en base64.
*	**hash_algorithm**: Algoritme de hash.

### 2. Consulta Apsa:

El mètode bàsic per signar en el servei de l'apsa és: ``signApsaHash( params );``

El format dels paràmetres de l'objecte _JSON_ que esperen els mètodes 

````json
{
  "callback": "",
  "tokenId":  "",
  "docName": "",
  "hash_a_xifrar": ""
}
````

El mètode customitzable per servei de l'apsa és: ``signApsa( params )``

El format dels paràmetres de l'objecte _JSON_ que espera és el següent: 

````json
{
  "callback": "",
  "tokenId":  "",
  "descripcio": "",
  "keystore_type": "",
  "docName": "",
  "hash_a_xifrar": ""
}
````

Descripció dels camps _JSON_:
*	**callback**: Url del servei a on realitzarà la crida per informar del resultat de la operació de signatura.
*	**tokenId**: El token que ens ha retornat el servei d'inici del procés.
*	**Descripció**: Camp de text amb la descripció del procés de signatura.
*	**keystore_type**: Tipus de keystore a utilitzar per a realitzar la signatura.
*	**doc_name**: Nom del document.
*	**hash_a_xifrar**: hash a signar.


## Exemples d'Ús
