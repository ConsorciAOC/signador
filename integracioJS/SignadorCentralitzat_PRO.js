/**
 * Objecte js d'exemple per a facilitar la generació d'operacions simples
 * predefinides contra el signador centralitzat.
 *
 *	Requereix versions de JQuery 1.6.1 o superiors
 *	Requereix de la generació previa d'un token d'operació
 *  
 * @version 0.0.0.3 
 * @author albciff 
 * @author lcamps
 */
 	
var signadorCentralitzat = (function (jQry){

	var signadorCentralitzatException = function (msg) {
		   this.value = 'Problema amb el signadorCentralitzat';
		   this.message = msg;
		   this.toString = function() {
		      return this.value + this.message;
		   };
	};
	
	var checkJqueryVersion = function(version){
		if(typeof version == undefined){ return false; }
		
		var versions = version.split('.');	
		
		if(versions[0] > 1 || versions[0] == 1 && versions[1] >= 6){
			return true;
		}
	
		return false;
	}

	// comprovem que ens han passat un objecte
	if(!jQry){
		throw signadorCentralitzatException('jQuery es obligatori');
	// comprovem la versió correcte
	}else if (!checkJqueryVersion(jQry.fn.jquery)){
		throw('Requereix una versió 1.6.1 o superior de jQuery');
	}
	
	if( !console ) { console = {}; console.log = function(){};}
	
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
		ALLFILESINDIR : 1,
		SINGLEFILE : 2,
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
		
		var hashAlgorithm = 'SHA-1';				
		var redirectUrl; // no default... es obligatori
		var token; 
		var descripcio = 'Operació de signatura' // default generic
		var responseB64;
		
		// apsa certificat
		var signingCertificate; // opcional
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
						keystoreType = sc.keyType.MS_KEYSTORE; // windows keystore
					}else if(kt.indexOf('fire')){
						keystoreType = sc.keyType.MOZILLA_KEYSTORE; // firefox keystore
					}
				}
			}else{
				// Posem el genèric
				keystoreType = sc.keyType.GENERIC_KEYSTORE;
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
			
			// console.log('[setDocumentToSign] arg: ' + dts + ' documentToSign : ' + documentToSign);
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
		cfg.setRedirectUrl = function (cb){
			if( cb ){
				redirectUrl = cb;
			}
			
			console.log('[setRedirectUrl] arg: ' + cb + ' redirectUrl : ' + redirectUrl);
			return this;
		};
			
		/**
		 * 
		 */
		cfg.setToken = function (tdi){
			if( tdi ){
				token = tdi;
			}
			
			console.log('[setToken] arg: ' + tdi + ' token : ' + token);
			return this;
		};
		
		/**
		 * 
		 */
		cfg.setResponseB64 = function ( rb64 ){
			if( rb64 ){
				responseB64 = rb64;
			}
			
			console.log('[setResponseB64] arg: ' + rb64 + ' responseB64 : ' + responseB64);
			return this;
		};
		
		/**
		 * 
		 */
		cfg.setSigningCertificate = function ( sc ){
			if( sc ){
				signingCertificate = sc;
			}
			
			console.log('[setSigningCertificate] arg: ' + sc + ' signingCertificate : ' + signingCertificate);
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
						redirectUrl : redirectUrl,
						token : token,
						descripcio : descripcio,
						responseB64 : responseB64,
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
				redirectUrl : redirectUrl,
				token : token,
				descripcio : descripcio,
				responseB64 : responseB64,
				applet_apsa_cfg :	{ 	keystore_type : keystoreType,
										doc_name : documentName,
										hash_a_xifrar : documentToSign,
										signingCertificate : signingCertificate
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
	sc.signar = function (data, openNewWindow) {
		
		var newWindow;
		
		if(openNewWindow){
			// obrim la finestra aqui pq si ho fem dins del redirect
			// de la crida ajax el context canvi i tot i que l'acció vingui
			// del onclick del user tindriem problemes amb el bloqueig de popups
			newWindow = window.open();
		}
		
		// URL en funció del entorn
		var url = 'https://signador.aoc.cat/signador/startSignProcess';
				
		var successFn = function (window){ 
			return function (data){
				if(data.status === 'OK'){
					window.location = 'https://signador.aoc.cat/signador?id=' + data.token;
				}else{
					// something wrong...
					alert(data.message);
					window.close();
				}
			}
		}(newWindow || window);
		
		var errorFn = function (window) {
			return function (jqXHR, textStatus, errorThrown){
					alert("Error a l'iniciar el procés" + textStatus + " " + errorThrown);
					if(window){window.close();}
			}
		}(newWindow);
		
		ajaxGenericCall(url,data,successFn,errorFn);
		
	};

	// MÈTODES PRIVATS
	
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
	 *  - redirectUrl: La Url de redireccio necessària per informar de la resposta.
	 * 	- token: El token del procés de signatura.
	 *  - doc_name: Nom del document.
	 * 	- document_to_sign: PDF a signar en UTF-8 codificat en base64.
	 */
	sc.signPDF	= function( params, openNewWindow ){
		var cfg = this.cfg.setSignatureMode( this.signMode.CADES_BES_IN_PDF )
			.setDocumentType( this.docType.B64FILECONTENT )
				.setDocumentName( params.doc_name )
					.setDocumentToSign( params.document_to_sign )
						.setToken( params.token )
							.setRedirectUrl( params.redirectUrl );
		
		// invoke
		sc.signar( cfg.createConfig(), openNewWindow );
	};
	
	/**
	 * Mètode per signar un HASH
	 *
	 * Aquest mètode utiliza el mode de signatura XADES_BES_DETACHED_HASH
	 * i el tipus de de document HASHDOC
	 * I com a paràmetres d'entrada és necessari que l'ojecte json 
	 * contingui els següents camps: 
	 *  - redirectUrl: La Url de redirect necessària per informar de la resposta.
	 * 	- token: El token del procés de signatura.
	 *  - doc_name: Nom del document.
	 * 	- document_to_sign: HASH a signar codificat en base64.
	 */
	sc.signXAdESHash = function( params, openNewWindow ){
		var cfg = this.cfg.setSignatureMode( this.signMode.XADES_BES_DETACHED_HASH )
			.setDocumentType( this.docType.HASHDOC )
				.setDocumentName( params.doc_name )
					.setDocumentToSign( params.document_to_sign )
						.setToken( params.token )
							.setRedirectUrl( params.redirectUrl );
				
		// invoke
		sc.signar( cfg.createConfig(), openNewWindow );
	};
	
	/**
	 * Mètode per signar un HASH
	 *
	 * Aquest mètode utiliza el mode de signatura CADES_BES_DETACHED_HASH
	 * i el tipus de document HASHDOC
	 * I com a paràmetres d'entrada és necessari que l'ojecte json 
	 * contingui els següents camps: 
	 *  - redirectUrl: La Url de redireccio necessària per informar de la resposta.
	 * 	- token: El token del procés de signatura.
	 *  - doc_name: Nom del document.
	 * 	- document_to_sign: HASH a signar codificat en base64.
	 */
	sc.signCAdESHash = function( params, openNewWindow ){
		var cfg = this.cfg.setSignatureMode( this.signMode.CADES_BES_DETACHED_HASH )
			.setDocumentType( this.docType.HASHDOC )
				.setDocumentName( params.doc_name )
					.setDocumentToSign( params.document_to_sign )
						.setToken( params.token )
							.setRedirectUrl( params.redirectUrl );
				
		// invoke
		sc.signar( cfg.createConfig(), openNewWindow );
	};
	
	/**
	 * Mètode per signar un HASH a APSA
	 *
	 * I com a paràmetres d'entrada és necessari que l'ojecte json 
	 * contingui els següents camps: 
	 *  - redirectUrl: La Url de redirect necessària per informar de la resposta.
	 * 	- token: El token del procés de signatura.
	 *  - doc_name: Nom del document.
	 * 	- hash_a_xifrar: HASH a signar codificat en base64.
	 */
	sc.signApsaHash = function( params, openNewWindow ){
		var cfg = this.cfg.setDocumentName( params.doc_name )
				.setDocumentToSign( params.hash_a_xifrar )
					.setToken( params.token )
						.setRedirectUrl( params.redirectUrl );
			
		// invoke
		sc.signar( cfg.createApsaConfig(), openNewWindow );
	};
	
	/**
	 * Mètode genèric per signar l'Applet
	 *
	 * Aquest mètode és totalment configurable i accepta tots els paràmetres permesos per l'applet. 
	 * Els paràmetre d'entrada ha de ser l'objecte JSON amb els paràmetres permesos per l'applet.
	 */
	sc.sign = function( json, openNewWindow ){				
		// invoke
		sc.signar( json, openNewWindow );
	};
	
	/**
	 * Mètode genèric per signar APSA
	 *
	 * Aquest mètode és totalment configurable i accepta tots els paràmetres 
	 * permesos per l'APSA.
	 * Els paràmetres permesos que poden contenir el JSON són els següents camps:: 
	 *  - redirectUrl: La Url de redireccio necessària per informar de la resposta.
	 * 	- token: El token del procés de signatura.
	 *  - descripcio: descripció del procés de signatura.
	 *  - responseB64: Si es vol rebre la resposta en base64 o amb la url de descarrega 
	 *  - keystore_type: Tipus de keystore a utilizar.
	 *  - doc_name: Nom del document.
	 * 	- hash_a_xifrar: Hash a signar codificat en base64.
	 *	- signingCertificate: Certificat per signar.
	 */
	sc.signApsa = function( params, openNewWindow ){
		var cfg = this.cfg.setRedirectUrl( params.redirectUrl )
					.setToken( params.token )
					.setDescripcio( params.descripcio )
					.setResponseB64( params.responseB64 )
					.setKeystoreType( params.keystore_type )
					.setDocumentName( params.doc_name )
					.setDocumentToSign( params.hash_a_xifrar )
					.setSigningCertificate( params.signingCertificate );
				
		// invoke
		sc.signar( cfg.createApsaConfig(), openNewWindow );
	};
	
	return sc;

})(jQuery);
