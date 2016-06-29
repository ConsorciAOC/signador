# Llibreria integradors - En *Beta*

**La següent documentació està en construcció i és susceptible de patir canvis**

Per tal de facilitar la integració amb el servei de signatura s'ha creat una llibreria _Javascript_ que conté uns mètodes simples per a generació de signatures de forma generiques i uns altres més customitzables. L'objectiu és facilitar el procés d'integració amb el servei.

Les llibreries _Javascript_ pels diferents entorns són les següents:

* [Entorn PRE](https://github.com/lcamps01/signador/blob/master/integracioJS/SignadorCentralitzat_PRE.js)
* [Entorn PRO] (https://github.com/lcamps01/signador/blob/master/integracioJS/SignadorCentralitzat_PRO.js)

## Ús de la llibreria

A continuació es descriuen els diferents mètodes de la llibreria segons si es vol signar amb l'applet o amb l'apsa:

### 1. Applet

Els mètodes bàsics per signar amb el servei utilitzant l'applet de signatura són els següents:

````javascript
  signPDF( params );
  signXAdESHash( params );
  signCAdESHash( params );
````
Aquests mètodes esperen tots un objecte de tipus _JSON_ amb el següent format:

```json
{
  "callbackUrl": "",
  "token":  "",
  "doc_name": "",
  "document_to_sign": ""
}
```

Descripció dels camps _JSON_:
*	**callbackUrl**: Url del servei a on realitzarà la crida per informar del resultat de la operació de signatura.
*	**token**: El token que ens ha retornat el servei d'inici del procés.
*	**doc_name**: Nom del document.
*	**document_to_sign**: Document original a signar n UTF-8 codificat en base64.

El mètode customitzable per servei de l'applet és: `sign( json )` a on el l'objecte _JSON_ que espera té el format de l'applet que s'ha descrit en l'apartat [2.1](https://github.com/ConsorciAOC/signador/blob/master/README.md)

### 2. Consulta Apsa:

El mètode bàsic per signar amb el servei utilitzant l'apsa és: `signApsaHash( params );`

El format dels paràmetres de l'objecte _JSON_ que esperen els mètodes és:

```json
{
  "callbackUrl": "",
  "token":  "",
  "doc_name": "",
  "hash_a_xifrar": ""
}
```

El mètode customitzable per servei de l'apsa és: `signApsa( params )`

El format dels paràmetres de l'objecte _JSON_ que espera és el següent: 

````javascript
{
  "callbackUrl": "",
  "token":  "",
  "descripcio": "", // no obligatori. valor per defecte: 'Operació de signatura'
  "responseB64": "", // no obligatori.
  "keystore_type": "", // no obligatori: valor per defecte: 0 --> GENERIC_KEYSTORE
  "doc_name": "",
  "hash_a_xifrar": "",
  "signingCertificate": "" // no obligatori
}
````

Descripció dels camps _JSON_:
*	**callbackUrl**: Url del servei a on realitzarà la crida per informar del resultat de la operació de signatura.
*	**token**: El token que ens ha retornat el servei d'inici del procés.
*	**descripcio**: Camp de text amb la descripció del procés de signatura.
*	**responseB64**: Camp per indicar si es vol que la resposta es retorni en base64 o en una _URL_ per descarregar-la.
*	**keystore_type**: Tipus de keystore a utilitzar per a realitzar la signatura.
*	**doc_name**: Nom del document.
*	**hash_a_xifrar**: hash a signar.
*	**signingCertificate**: Certificat per signar en base64.

### 3. Exemples d'ús

Per fer ús de la llibreria és tant simple com incloure la depèndencia de *Jquery* i la pròpia llibreria de l'aplicació com a recurs en la plana *HTML* on es vulgui utilitzar.

### 3.1 `signadorCentralitzat.sign( json )`

```javascript
<script type="text/javascript" src="%PATH%/jquery.js"></script> 
<script type="text/javascript" src="%PATH%/SignadorCentralitzat.js"></script>

<script type="text/javascript">
		
	$('#idBoto').click(function(){
		signadorCentralitzat.sign( { callbackUrl: $('#idUrlCallback').val(), 
		                              token: $('#tokenId').val() , 
		                              descripcio: $('#idDescripcio').val(),
		                              applet_cfg: {
		                              	keystore_type: $('#idKeystore').val(), 
		                                signature_mode: $('#idSignMode').val(), 
		                                doc_type: $('#idDocType').val(), 
		                                doc_name: $('#idNomDoc').val(), 
		                                document_to_sign: $('#idDoc').val(), 
		                                hash_algorithm: $('#idAlgorithm').val() 
		                              }});
	});
	
</script>
```

### 3.2 `signadorCentralitzat.signPDF( params )`

```javascript
<script type="text/javascript" src="%PATH%/jquery.js"></script> 
<script type="text/javascript" src="%PATH%/SignadorCentralitzat.js"></script>

<script type="text/javascript">
		
	$('#idBoto').click(function(){
		signadorCentralitzat.signPDF( { callbackUrl: $('#idUrlCallback').val(), 
		                                token: $('#tokenId').val() , 
		                                doc_name: $('#idNomDoc').val(), 
		                                document_to_sign: $('#idDoc').val() });
	});
	
</script>
```

### 3.3 `signadorCentralitzat.signXAdESHash( params )`

```javascript
<script type="text/javascript" src="%PATH%/jquery.js"></script> 
<script type="text/javascript" src="%PATH%/SignadorCentralitzat.js"></script>

<script type="text/javascript">
		
	$('#idBoto').click(function(){
		signadorCentralitzat.signXAdESHash( { callbackUrl: $('#idUrlCallback').val(), 
		                                      token: $('#tokenId').val() , 
		                                      doc_name: $('#idNomDoc').val(), 
		                                      document_to_sign: $('#idDoc').val() });
	});
	
</script>
```

### 3.4 `signadorCentralitzat.signCAdESHash( params )`

```javascript
<script type="text/javascript" src="%PATH%/jquery.js"></script> 
<script type="text/javascript" src="%PATH%/SignadorCentralitzat.js"></script>

<script type="text/javascript">
		
	$('#idBoto').click(function(){
		signadorCentralitzat.signCAdESHash( { callbackUrl: $('#idUrlCallback').val(), 
		                                      token: $('#tokenId').val() , 
		                                      doc_name: $('#idNomDoc').val(), 
		                                      document_to_sign: $('#idDoc').val()});
	});
	
</script>
```

### 3.5 `signadorCentralitzat.signApsaHash( params )`

```javascript
<script type="text/javascript" src="%PATH%/jquery.js"></script> 
<script type="text/javascript" src="%PATH%/SignadorCentralitzat.js"></script>

<script type="text/javascript">
		
	$('#idBoto').click(function(){
		signadorCentralitzat.signApsaHash( { callbackUrl: $('#idUrlCallback').val(), 
		                                     token: $('#tokenId').val(),
		                                     doc_name: $('#idNomDoc').val(), 
		                                     hash_a_xifrar: $('#idHash').val()});
	});
	
</script>
```

### 3.6 `signadorCentralitzat.signApsa( params )`

```javascript
<script type="text/javascript" src="%PATH%/jquery.js"></script> 
<script type="text/javascript" src="%PATH%/SignadorCentralitzat.js"></script>

<script type="text/javascript">
		
	$('#idBoto').click(function(){
		signadorCentralitzat.signApsa( { callbackUrl: $('#idUrlCallback').val(), 
		                                 token: $('#tokenId').val(),
		                                 descripcio: $('#idDescripcio').val(),
		                                 keystore_type: $('#idKeystore').val(), 
		                                 doc_name: $('#idNomDoc').val(), 
		                                 hash_a_xifrar: $('#idHash').val()});
	});
	
</script>
```
