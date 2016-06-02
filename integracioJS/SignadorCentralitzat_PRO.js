/**
 * Objecte js necessari per invocar i poder utilitzar el signador centralitzat
 *  
 * @version 0.0.0.2 
 * @author albciff 
 * @author lcamps
 */
 	
var signadorCentralitzat = (function (jQry){

	// comprovem que ens han passat un objecte
	if(!jQry){
		// TODO: comprovar q es el de jquery... i no simplement not null
		// TODO: crear utils generic per llançar execptions
		throw { 
    		name:        "signadorCentralitzatException", 
    		level:       "Show Stopper", 
    		message:     "JQuery is mandatory", 
    		htmlMessage: "Error detected.",
    		toString:    function(){return this.name + ": " + this.message;} 
		}; 
		
		//throw signadorCentralitzatException('jQuery is mandatory...');
	}
	
	if( !console ) console = {}; console.log = function(){};
	
	var sc = {};
	
	/**
	 * Constants del keystore_type
	 */
	sc.keyType = {
		GENERIC_KEYSTORE : 0,
		MS_KEYSTORE : 1,
		PKCS12_KEYSTORE : 2,
		SMARTCARD_KEYSTORE : 3,
		MOZILLA_KEYSTORE : 4,
		JAVA_KEYSTORE : 5, 
		MACOSX_KEYSTORE : 6
	};
	
	/**
	 * Constants del Mode de signtura
	 */
	sc.signMode = { 
		CMS_ATTACHED : 1,
		CMS_DETACHED : 2,
		CMS_DETACHED_HASH : 3,
		CMS_IN_PDF : 4,
		XMLDSIG_ENVELOPED : 5,
		XMLDSIG_ENVELOPING : 6,
		XMLDSIG_DETACHED : 7,
		XMLDSIG_DETACHED_HASH : 8,
		XADES_BES_ENVELOPED : 9,
		XADES_BES_ENVELOPING : 10,
		XADES_BES_DETACHED : 11,
		XADES_BES_DETACHED_HASH : 12,
		XADES_T_ENVELOPED : 13,
		XADES_T_ENVELOPING : 14,
		XADES_T_DETACHED : 15,
		XADES_T_DETACHED_HASH : 16,
		CADES_BES_ATTACHED : 21,
		CADES_BES_DETACHED : 22,
		CADES_BES_DETACHED_HASH : 23,
		CADES_BES_IN_PDF : 24,
		CADES_T_ATTACHED : 25,
		CADES_T_DETACHED : 26,
		CADES_T_DETACHED_HASH : 27,
		CADES_T_IN_PDF : 28 
	};
	
	/**
	 * Constants del tipus de document
	 */
	sc.docType = {
		HASHDOC : 3,
		B64FILECONTENT : 4,
		URLFILE : 6
	};
	
	/**
	 * objecte amb la cfg de la signatura
	 */ 
	sc.cfg = function (){
		
		var cfg = {};

		var keystoreType = sc.keyType.GENERIC_KEYSTORE; // default Generic
		var signatureMode; // no default... es obligatori. 
		var documentType; // no default... es obligatori.
		var documentName; // no default... es obligatori.
		var documentToSign; // no default... es obligatori
		
		var hashAlgorithm = 'SHA1';				
		var callbackUrl; // no default : El callback s'hauria de passar al signPDFHash?? a la func?
		var tokenId; 
		var descripcio = 'Some description...' // default buit? no mandatory?
				
		/**
		 * 
		 */
		cfg.setKeystoreType = function (kt) {
			if(kt){
				if(typeof kt === 'number' )
					keystoreType = kt;
				else if(typeof kt === 'string'){
					kt = kt.toLowerCase();
					if(kt.indexOf('win')){
						keystoreType = 1; // windows keystore
					}else if(kt.indexOf('fire')){
						keystoreType = 4; // firefox keystore
					}
				}
			}
			console.log('[setKeystoreType] arg: ' + kt + ' keystoreType : ' + keystoreType);
			return this;
		};
		
		/**
		 * 
		 */
		cfg.setSignatureMode = function (sm) {
			if(sm){
				signatureMode = sm;
			}
			
			console.log('[setSignatureMode] arg: ' + sm + ' signatureMode : ' + signatureMode);
			return this;
		};
		
		/**
		 * 
		 */
		cfg.setDocumentType = function (dt) {
			if(dt){
				documentType = dt;
			}
			
			console.log('[setDocumentType] arg: ' + dt + ' documentType : ' + documentType);
			return this;
		};
		
		/**
		 * 
		 */
		cfg.setDocumentName = function (dn) {
			if(dn){
				documentName = dn;
			}
			
			console.log('[setDocumentName] arg: ' + dn + ' documentName: ' + documentName);
			return this;
		};
		
		/**
		 * 
		 */
		cfg.setDocumentToSign = function (dts) {
			if(dts){
				documentToSign = dts;
			}
			
			console.log('[setDocumentToSign] arg: ' + dts + ' documentToSign : ' + documentToSign);
			return this;
		};
		
		/**
		 * 
		 */
		cfg.setHashAlgorithm = function(ha){
			if(ha){
				hashAlgorithm = ha;
			}
			
			console.log('[setHashAlgorithm] arg: ' + ha + ' hashAlgorithm : ' + hashAlgorithm);
			return this;
		};
		
		/**
		 * 
		 */
		cfg.setCallbackUrl = function (cb){
			if( cb ){
				callbackUrl = cb;
			}
			
			console.log('[setCallbackUrl] arg: ' + cb + ' callbackUrl : ' + callbackUrl);
			return this;
		};
		
		/**
		 * 
		 */
		cfg.setTokenId = function (tdi){
			if( tdi ){
				tokenId = tdi;
			}
			
			console.log('[setTokenId] arg: ' + tdi + ' tokenId : ' + tokenId);
			return this;
		};
		
		/**
		 * 
		 */
		cfg.setDescripcio = function ( dsc ){
			if( dsc ){
				descripcio = dsc;
			}
			
			console.log('[setDescripcio] arg: ' + dsc + ' descripcio : ' + descripcio);
			return this;
		};
		
		/**
		 * objecte json de l'applet
		 */
		cfg.createConfig = function () {
			return { 
						callbackUrl : callbackUrl,
						tokenId : tokenId,
						descripcio : descripcio,
						applet_cfg :	{ 	keystore_type : keystoreType,
											signature_mode : signatureMode,
											doc_type : documentType,
											hash_algorithm : hashAlgorithm,
											doc_name : documentName,
											document_to_sign : documentToSign
										}
			};
		};
		
		/**
		 * Objecte json de l'apsa
		 */
		cfg.createApsaConfig = function (){
			return { 
				callbackUrl : callbackUrl,
				tokenId : tokenId,
				descripcio : descripcio,
				applet_apsa_cfg :	{ 	keystore_type : keystoreType,
										doc_name : documentName,
										hash_a_xifrar : documentToSign
									}
			};
		};
		
		return cfg;

	}();
	
	/**
	 * Mètode que realment inicia el procés de signatura.
	 * 
	 * Aquest mètode sempre s'ha d'invocar des del onclick d'un button
	 * provocat per l'usuari mai forçat des de JS, per evitar el tema del
	 * bloqueig de popups.
	 */
	sc.signar = function (data) {
		
		// obrim la finestra aqui pq si ho fem dins del callback
		// de la crida ajax el context canvi i tot i que l'acció vingui
		// del onclick del user tindriem problemes amb el bloqueig de popups
		var newWindow = window.open();
		
		// URL en funció del entorn
		var url = 'http://signador.aoc.cat/signador/startSignProcess';
				
		var successFn = function (window){ 
			return function (data){
				if(data.status === 'OK'){
					window.location = '/signador?id=' + data.tokenId;
				}else{
					// something wrong...
					alert(data.message);
					window.close();
				}
			}
		}(newWindow);
		
		var errorFn = function (window) {
			return function (jqXHR, textStatus, errorThrown){
					alert("Error a l'iniciar el procés" + textStatus + " " + errorThrown);
					window.close();
			}
		}(newWindow);
		
		ajaxGenericCall(url,data,successFn,errorFn);
		
	};

	// MÈTODES PRIVATS
		
	var signadorCentralitzatException = function (msg) {
		   this.value = 'Problema amb el signadorCentralitzat';
		   this.message = msg;
		   this.toString = function() {
		      return this.value + this.message;
		   };
	};
	
	/**
	 * Crida ajax gènerica per reutilizar a la resta de codi
	 */
	var ajaxGenericCall = function (url, data, successCallbackFn, errorCallbackFn) {
				
		jQry.ajax({
	    	headers: { 
	        	'Accept': 'application/json',
	        	'Content-Type': 'application/json' 
	    	},
	    	'type': 'POST',
	    	'url': url,
	    	'data': data ? JSON.stringify(data) : '',
	    	'dataType': 'json',
	    	'success': successCallbackFn,
	    	'error' : errorCallbackFn || function () { alert('Error en la invocació de ' + url);}
		});
		
	};
	
	// mètodes publics base per a fer les signatures predefinides
	
	/**
	 * Mètode per signar un PDF
	 *
	 * Aquest mètode utiliza el mode de signatura CADES_BES_IN_PDF
	 * i el tipus de document B64FILECONTENT
	 * I com a paràmetres d'entrada és necessari que l'ojecte json 
	 * contingui els següents camps: 
	 *  - callback: La Url de callback necessària per informar de la resposta.
	 * 	- tokenId: El token del procés de signatura.
	 *  - docName: Nom del document.
	 * 	- document_to_sign: PDF a signar en UTF-8 codificat en base64.
	 */
	sc.signPDF	= function( params ){
		var cfg = this.cfg.setSignatureMode( this.signMode.CADES_BES_IN_PDF )
			.setDocumentType( this.docType.B64FILECONTENT )
				.setDocumentName( params.docName )
					.setDocumentToSign( params.document_to_sign )
						.setTokenId( params.tokenId )
							.setCallbackUrl( params.callback );
		
		// invoke
		sc.signar( cfg.createConfig() );
	};
	
	/**
	 * Mètode per signar un HASH
	 *
	 * Aquest mètode utiliza el mode de signatura XADES_BES_DETACHED_HASH
	 * i el tipus de de document HASHDOC
	 * I com a paràmetres d'entrada és necessari que l'ojecte json 
	 * contingui els següents camps: 
	 *  - callback: La Url de callback necessària per informar de la resposta.
	 * 	- tokenId: El token del procés de signatura.
	 *  - docName: Nom del document.
	 * 	- document_to_sign: HASH a signar codificat en base64.
	 */
	sc.signXAdESHash = function( params ){
		var cfg = this.cfg.setSignatureMode( this.signMode.XADES_BES_DETACHED_HASH )
			.setDocumentType( this.docType.HASHDOC )
				.setDocumentName( params.docName )
					.setDocumentToSign( params.document_to_sign )
						.setTokenId( params.tokenId )
							.setCallbackUrl( params.callback );
				
		// invoke
		sc.signar( cfg.createConfig() );
	};
	
	/**
	 * Mètode per signar un HASH
	 *
	 * Aquest mètode utiliza el mode de signatura CADES_BES_DETACHED_HASH
	 * i el tipus de document HASHDOC
	 * I com a paràmetres d'entrada és necessari que l'ojecte json 
	 * contingui els següents camps: 
	 *  - callback: La Url de callback necessària per informar de la resposta.
	 * 	- tokenId: El token del procés de signatura.
	 *  - docName: Nom del document.
	 * 	- document_to_sign: HASH a signar codificat en base64.
	 */
	sc.signCAdESHash = function( params ){
		var cfg = this.cfg.setSignatureMode( this.signMode.CADES_BES_DETACHED_HASH )
			.setDocumentType( this.docType.HASHDOC )
				.setDocumentName( params.docName )
					.setDocumentToSign( params.document_to_sign )
						.setTokenId( params.tokenId )
							.setCallbackUrl( params.callback );
				
		// invoke
		sc.signar( cfg.createConfig() );
	};
	
	/**
	 * Mètode per signar un HASH a APSA
	 *
	 * I com a paràmetres d'entrada és necessari que l'ojecte json 
	 * contingui els següents camps: 
	 *  - callback: La Url de callback necessària per informar de la resposta.
	 * 	- tokenId: El token del procés de signatura.
	 *  - docName: Nom del document.
	 * 	- hash_a_xifrar: HASH a signar codificat en base64.
	 */
	sc.signApsaHash = function( params ){
		var cfg = this.cfg.setDocumentName( params.docName )
				.setDocumentToSign( params.hash_a_xifrar )
					.setTokenId( params.tokenId )
						.setCallbackUrl( params.callback );
			
		// invoke
		sc.signar( cfg.createApsaConfig() );
	};
	
	/**
	 * Mètode genèric per signar l'Applet
	 *
	 * Aquest mètode és totalment configurable i accepta tots els 
	 * paràmetres permesos per l'applet. 
	 * Els paràmetres permesos que poden contenir el JSON són els següents camps: 
	 *  - callback: La Url de callback necessària per informar de la resposta.
	 *  - descripcio: descripció del procés de signatura.
	 * 	- tokenId: El token del procés de signatura.
	 *  - keystore_type: Tipus de keystore a utilizar.
	 *  - signature_mode: Mode de signatura a utilizar
	 *	- doc_type: Tipus de document a utilizar.
	 *  - docName: Nom del document.
	 * 	- document_to_sign: PDF a signar en UTF-8 codificat en base64.
	 * 	- hash_algorithm: Algoritme de hash a utilizar.
	 */
	sc.sign = function( params ){
		var cfg = this.cfg.setCallbackUrl( params.callback )
				.setTokenId( params.tokenId )
					.setDescripcio( params.descripcio )
						.setKeystoreType( params.keystore_type )
							.setSignatureMode( params.signature_mode )
								.setDocumentType( params.doc_type )
									.setDocumentName( params.doc_name )
										.setHashAlgorithm( params.hash_algorithm )
											.setDocumentToSign( params.document_to_sign );
				
		// invoke
		sc.signar( cfg.createConfig() );
	};
	
	/**
	 * Mètode genèric per signar APSA
	 *
	 * Aquest mètode és totalment configurable i accepta tots els paràmetres 
	 * permesos per l'APSA.
	 * Els paràmetres permesos que poden contenir el JSON són els següents camps:: 
	 *  - callback: La Url de callback necessària per informar de la resposta.
	 * 	- tokenId: El token del procés de signatura.
	 *  - descripcio: descripció del procés de signatura.
	 *  - keystore_type: Tipus de keystore a utilizar.
	 *  - docName: Nom del document.
	 * 	- hash_a_xifrar: Hash a signar codificat en base64.
	 */
	sc.signApsa = function( params ){
		var cfg = this.cfg.setCallbackUrl( params.callback )
				.setTokenId( params.tokenId )
					.setDescripcio( params.descripcio )
						.setKeystoreType( params.keystore_type )
							.setDocumentName( params.doc_name )
								.setDocumentToSign( params.hash_a_xifrar );
				
		// invoke
		sc.signar( cfg.createApsaConfig() );
	};
	
	return sc;

})(jQuery);
