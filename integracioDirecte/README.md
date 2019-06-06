# Integració directe aplicació nativa

<pre 
 <p>No es dona suport a aquest tipus d'integració. És només per al GEEC i l'aplicació de la intranet de la ORGT</p>
</pre>



La nativa quan arrenca intenta utilitzar el primer port lliure del rang 9090-9095. Podeu revisar la [guia d'instal·lació de la nativa](../guiaUsuaris/nativa.md#11-connectivitat) per veure els temes relacionats amb la connectivitat i la instal·lació de la mateixa.

Les peticions als endpoints de la nativa s'han de fer en format JSON, al respecte de la missatgeria aplica la mateixa documentació ja especificada en la [guia d'integració del servei](../README.md). La única diferència és que en el cas d'integració directe amb l'aplicació nativa no és necessari informar cap dels elements principals vinculats a l'ús del servei a través de la web app del signador, per tan *NO s'han d'especificar* els següents camps al missatge.

```
	"callbackUrl": "" o "redirectUrl": "", // S'ha d'informar o un o l'altre
	"token": "",
	"descripcio": "",
	"responseB64": "",
```

Per tal de poder fer una integració directe i realitzar una signatura seran necessaries dues crides, la primera crida que s'hauría de dur a terme és la de recuperar les claus que té disponibles l'usuari, i un cop recuperades s'ha d'escollir una d'aquestes i fer una segona crida al procés de signar indicant la clau que es vol emprar.

La petició en format JSON serà la mateixa per les dues operacions, l'única diferència és que en la segona operació com a paràmetre de la URL s'haurà de passar la dada de la clau amb la que es signarà.

# Recuperar les claus `/getCertificate` 

TODO ACABAR
