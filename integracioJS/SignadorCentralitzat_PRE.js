/**
 * Objecte js necessari per invocar i poder utilitzar el signador centralitzat
 *  
 * @version 0.0.0.2 
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

	// comprovem que ens han passat un objecte
	if(!jQry){
		throw signadorCentralitzatException('jQuery es obligatori');
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
		var callbackUrl; // no default... es obligatori
		var token; 
		var descripcio = 'Operació de signatura' // default generic
		var responseB64;
		
		/**
		 *Paràmetres opcionals
		 */
		// apsa certificat
		var signingCertificate;
		
		// Filtratge certificats
		var allowedCAs;
		var allowedOIDs;
		var selectedAlias;
		var selectedCN;
		var subjectText;
		var psisValidation;
		var requiredNif;
				
		// PDF params
		var visibleSignature;
		var reservedSpace;
		var signatureField; 
		var certificationLevel;
		var reason;
		var location;
		var signatureImage;
		var signatureRectangle;
		var signaturePageNumber;
		var signatureRotation;
		var showSignValidation;
		
		//XML params
		var enveloping;
		var detached;
		var urisSigned;
		var xmltimestamp;
		var urltsa;
		var canonComments;
		var protectKey;
		
		// CMS params
		var cmsTimestamp;
		var cmsTsa;
		
		// AdES params
		var commitmentIdentifier;
		var commitmentDescription;
		var commitmentReference;
		var signerRole;
		var policy;
		var policyHash;
		var policyQualifier;
		var policyAlgorithm;				
				
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
		 * 
		 */
		cfg.setAllowedCAs = function ( acas ){
			if( acas ){
				allowedCAs = acas;
			}
			
			console.log('[setAllowedCAs] arg: ' + acas + ' allowedCAs : ' + allowedCAs);
			return this;
		};
				
		/**
		 * 
		 */
		cfg.setAllowedOIDs = function ( aoids ){
			if( aoids ){
				allowedOIDs = aoids;
			}
			
			console.log('[setAllowedOIDs] arg: ' + aoids + ' allowedOIDs : ' + allowedOIDs);
			return this;
		};
		
		/**
		 * 
		 */
		cfg.setSelectedAlias = function ( selAlias ){
			if( selAlias ){
				selectedAlias = selAlias;
			}
			
			console.log('[setSelectedAlias] arg: ' + selAlias + ' selectedAlias : ' + selectedAlias);
			return this;
		};
		
		/**
		 * 
		 */
		cfg.setSelectedCN = function ( selCN ){
			if( selCN ){
				selectedCN = selCN;
			}
			
			console.log('[setSelectedCN] arg: ' + selCN + ' selectedCN : ' + selectedCN);
			return this;
		};
		
		/**
		 * 
		 */
		cfg.setSubjectText = function ( sTxt ){
			if( sTxt ){
				subjectText = sTxt;
			}
			
			console.log('[setSubjectText] arg: ' + sTxt + ' subjectText : ' + subjectText);
			return this;
		};
		
		/**
		 * 
		 */
		cfg.setRequiredNif = function ( rNif ){
			if( rNif ){
				requiredNif = rNif;
			}
			
			console.log('[setRequiredNif] arg: ' + rNif + ' requiredNif : ' + requiredNif);
			return this;
		};
		
		/**
		 * 
		 */
		cfg.setPsisValidation = function ( pv ){
			if( pv ){
				psisValidation = pv;
			}
			
			console.log('[setPsisValidation] arg: ' + rNif + ' psisValidation : ' + psisValidation);
			return this;
		};

		/**
		 * 
		 */
		cfg.setVisibleSignature = function ( vSig ){
			if( vSig){
				visibleSignature = vSig;
			}
			
			console.log('[setVisibleSignature] arg: ' + vSig + ' visibleSignature : ' + visibleSignature);
			return this;
		};
		
		/**
		 * 
		 */
		cfg.setReservedSpace = function ( rSpc ){
			if( rSpc ){
				reservedSpace = rSpc;
			}
			
			console.log('[setReservedSpace] arg: ' + rSpc + ' reservedSpace : ' + reservedSpace);
			return this;
		};
		
		/**
		 * 
		 */
		cfg.setSignatureField = function ( sf ){
			if( sf ){
				signatureField = sf;
			}
			
			console.log('[setSignatureField] arg: ' + sf + ' signatureField : ' + signatureField);
			return this;
		};
		
		/**
		 * 
		 */
		cfg.setCertificationLevel = function ( cl ){
			if( cl ){
				certificationLevel = cl;
			}
			
			console.log('[setCertificationLevel] arg: ' + cl + ' certificationLevel : ' + certificationLevel);
			return this;
		};
		
		/**
		 * 
		 */
		cfg.setReason = function ( r ){
			if( r ){
				reason = r;
			}
			
			console.log('[setReason] arg: ' + r + ' reason : ' + reason);
			return this;
		};
		
		/**
		 * 
		 */
		cfg.setLocation = function ( l ){
			if( l ){
				location = l;
			}
			
			console.log('[setLocation] arg: ' + l + ' location : ' + location);
			return this;
		};
		
		/**
		 * 
		 */
		cfg.setSignatureImage = function ( si ){
			if( si ){
				signatureImage = si;
			}
			
			console.log('[setSignatureImage] arg: ' + si + ' signatureImage : ' + signatureImage);
			return this;
		};
		
		/**
		 * 
		 */
		cfg.setSignatureRectangle = function ( sr ){
			if( sr ){
				signatureRectangle = sr;
			}
			
			console.log('[setSignatureRectangle] arg: ' + sr + ' signatureRectangle : ' + signatureRectangle);
			return this;
		};
		
		/**
		 * 
		 */
		cfg.setSignaturePageNumber = function ( spn ){
			if( spn ){
				signaturePageNumber = spn;
			}
			
			console.log('[setSignaturePageNumber] arg: ' + spn + ' signaturePageNumber : ' + signaturePageNumber);
			return this;
		};
		
		/**
		 * 
		 */
		cfg.setSignatureRotation = function ( sr ){
			if( sr ){
				signatureRotation = sr;
			}
			
			console.log('[setSignatureRotation] arg: ' + sr + ' signatureRotation : ' + signatureRotation);
			return this;
		};
		
		/**
		 * 
		 */
		cfg.setShowSignValidation = function ( ssv ){
			if( ssv ){
				showSignValidation = ssv;
			}
			
			console.log('[setShowSignValidation] arg: ' + ssv + ' showSignValidation : ' + showSignValidation);
			return this;
		};
		
		/**
		 * 
		 */
		cfg.setEnveloping = function ( env ){
			if( env ){
				enveloping = env;
			}
			
			console.log('[setEnveloping] arg: ' + env + ' enveloping : ' + enveloping);
			return this;
		};
		
		/**
		 * 
		 */
		cfg.setDetached = function ( dtc ){
			if( dtc ){
				detached = dtc;
			}
			
			console.log('[setDetached] arg: ' + dtc + ' detached : ' + detached);
			return this;
		};
		
		/**
		 * 
		 */
		cfg.setUrisSigned = function ( uri ){
			if( uri ){
				urisSigned = uri;
			}
			
			console.log('[setUrisSigned] arg: ' + uri + ' urisSigned : ' + urisSigned);
			return this;
		};
		
		/**
		 * 
		 */
		cfg.setXmltimestamp = function ( xtp ){
			if( xtp ){
				xmltimestamp = xtp;
			}
			
			console.log('[setXmltimestamp] arg: ' + xtp + ' xmltimestamp : ' + xmltimestamp);
			return this;
		};
		
		/**
		 * 
		 */
		cfg.setUrltsa = function ( tsa ){
			if( tsa ){
				urltsa = tsa;
			}
			
			console.log('[setUrltsa] arg: ' + tsa + ' urltsa : ' + urltsa);
			return this;
		};
		
		/**
		 * 
		 */
		cfg.setCanonComments = function ( cc ){
			if( cc ){
				canonComments = cc;
			}
			
			console.log('[setCanonComments] arg: ' + cc + ' canonComments : ' + canonComments);
			return this;
		};
		
		/**
		 * 
		 */
		cfg.setProtectKey = function ( pk ){
			if( pk ){
				protectKey = pk;
			}
			
			console.log('[setProtectKey] arg: ' + pk + ' protectKey : ' + protectKey);
			return this;
		};
		
		/**
		 * 
		 */
		cfg.setCmsTimestamp = function ( ct ){
			if( ct ){
				cmsTimestamp = ct;
			}
			
			console.log('[setCmsTimestamp] arg: ' + ct + ' cmsTimestamp : ' + cmsTimestamp);
			return this;
		};
		
		/**
		 * 
		 */
		cfg.setCmsTsa = function ( ctsa ){
			if( ctsa ){
				cmsTsa = ctsa;
			}
			
			console.log('[setCmsTsa] arg: ' + ctsa + ' cmsTsa : ' + cmsTsa);
			return this;
		};
		
		/**
		 * 
		 */
		cfg.setCommitmentIdentifier = function ( ci ){
			if( ci ){
				commitmentIdentifier = ci;
			}
			
			console.log('[setCommitmentIdentifier] arg: ' + ci + ' commitmentIdentifier : ' + commitmentIdentifier);
			return this;
		};
		
		/**
		 * 
		 */
		cfg.setCommitmentDescription = function ( cd ){
			if( cd ){
				commitmentDescription = cd;
			}
			
			console.log('[setCommitmentDescription] arg: ' + cd + ' commitmentDescription : ' + commitmentDescription);
			return this;
		};
		
		/**
		 * 
		 */
		cfg.setCommitmentReference = function ( cr ){
			if( cr ){
				commitmentReference = cr;
			}
			
			console.log('[setCommitmentReference] arg: ' + cr + ' commitmentReference : ' + commitmentReference);
			return this;
		};
		
		/**
		 * 
		 */
		cfg.setSignerRole = function ( sr ){
			if( sr ){
				signerRole = sr;
			}
			
			console.log('[setSignerRole] arg: ' + tsa + ' signerRole : ' + signerRole);
			return this;
		};
		
		/**
		 * 
		 */
		cfg.setPolicy = function ( p ){
			if( p ){
				policy = p;
			}
			
			console.log('[setPolicy] arg: ' + p + ' policy : ' + policy);
			return this;
		};
		
		/**
		 * 
		 */
		cfg.setPolicyHash = function ( ph ){
			if( ph ){
				policyHash = ph;
			}
			
			console.log('[setPolicyHash] arg: ' + ph + ' policyHash : ' + policyHash);
			return this;
		};
		
		/**
		 * 
		 */
		cfg.setPolicyQualifier = function ( pq ){
			if( pq ){
				policyQualifier = pq;
			}
			
			console.log('[setPolicyQualifier] arg: ' + pq + ' policyQualifier : ' + policyQualifier);
			return this;
		};
		
		/**
		 * 
		 */
		cfg.setPolicyAlgorithm = function ( pa ){
			if( pa ){
				policyAlgorithm = pa;
			}
			
			console.log('[setPolicyAlgorithm] arg: ' + pa + ' policyAlgorithm : ' + policyAlgorithm);
			return this;
		};
				
		/**
		 * objecte json de l'applet
		 */
		cfg.createConfig = function () {
			return { 
						callbackUrl : callbackUrl,
						token : token,
						descripcio : descripcio,
						responseB64 : responseB64,
						applet_cfg :	{ 	keystore_type : keystoreType,
											signature_mode : signatureMode,
											doc_type : documentType,
											hash_algorithm : hashAlgorithm,
											doc_name : documentName,
											document_to_sign : documentToSign,
											pdf_cfg : {
												pdf_visible_signature : visibleSignature,
												pdf_reserved_space : reservedSpace,
												pdf_signature_field : signatureField, 
												pdf_certification_level : certificationLevel,
												pdf_reason : reason,
												pdf_location : location,
												pdf_signature_image : signatureImage,
												pdf_signature_rectangle : signatureRectangle,
												pdf_signature_page_number : signaturePageNumber,
												pdf_signature_rotation : signatureRotation,
												pdf_show_adobe_sign_validation : showSignValidation
											},
											certs_cfg : {
												allowed_CAs : allowedCAs,
												allowed_OIDs : allowedOIDs,
												selected_alias : selectedAlias,
												selected_CN : selectedCN,
												subject_Text : subjectText,
												psis_validation : psisValidation,
												required_nif : requiredNif
											},
											xml_cfg : {
												n_enveloping : enveloping,
												n_detached : detached,
												uris_to_be_signed : urisSigned,
												includeXMLTimestamp : xmltimestamp,
												xmlts_tsa_url : urltsa,
												canonicalizationWithComments : canonComments,
												protectKeyInfo : protectKey
											},
											cms_cfg : {
												timeStamp_CMS_signature : cmsTimestamp,
												cmsts_tsa_url : cmsTsa
											},
											ades_cfg : {
												commitment_identifier : commitmentIdentifier,
												commitment_description : commitmentDescription,
												commitment_object_reference : commitmentReference,
												signer_role : signerRole,
												signature_policy : policy,
												signature_policy_hash : policyHash,
												signature_policy_qualifier: policyQualifier,
												signature_policy_hash_algorithm : policyAlgorithm	
											}
										}
					};
		};
		
		/**
		 * Objecte json de l'apsa
		 */
		cfg.createApsaConfig = function (){
			return { 
				callbackUrl : callbackUrl,
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
	sc.signar = function (data) {
		
		// obrim la finestra aqui pq si ho fem dins del callback
		// de la crida ajax el context canvi i tot i que l'acció vingui
		// del onclick del user tindriem problemes amb el bloqueig de popups
		var newWindow = window.open();
		
		// URL en funció del entorn
		var url = 'http://signador-pre.aoc.cat/signador/startSignProcess';
				
		var successFn = function (window){ 
			return function (data){
				if(data.status === 'OK'){
					window.location = '/signador?id=' + data.token;
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
	 * 	- token: El token del procés de signatura.
	 *  - doc_name: Nom del document.
	 * 	- document_to_sign: PDF a signar en UTF-8 codificat en base64.
	 */
	sc.signPDF	= function( params ){
		var cfg = this.cfg.setSignatureMode( this.signMode.CADES_BES_IN_PDF )
			.setDocumentType( this.docType.B64FILECONTENT )
				.setDocumentName( params.doc_name )
					.setDocumentToSign( params.document_to_sign )
						.setToken( params.token )
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
	 * 	- token: El token del procés de signatura.
	 *  - doc_name: Nom del document.
	 * 	- document_to_sign: HASH a signar codificat en base64.
	 */
	sc.signXAdESHash = function( params ){
		var cfg = this.cfg.setSignatureMode( this.signMode.XADES_BES_DETACHED_HASH )
			.setDocumentType( this.docType.HASHDOC )
				.setDocumentName( params.doc_name )
					.setDocumentToSign( params.document_to_sign )
						.setToken( params.token )
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
	 * 	- token: El token del procés de signatura.
	 *  - doc_name: Nom del document.
	 * 	- document_to_sign: HASH a signar codificat en base64.
	 */
	sc.signCAdESHash = function( params ){
		var cfg = this.cfg.setSignatureMode( this.signMode.CADES_BES_DETACHED_HASH )
			.setDocumentType( this.docType.HASHDOC )
				.setDocumentName( params.doc_name )
					.setDocumentToSign( params.document_to_sign )
						.setToken( params.token )
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
	 * 	- token: El token del procés de signatura.
	 *  - doc_name: Nom del document.
	 * 	- hash_a_xifrar: HASH a signar codificat en base64.
	 */
	sc.signApsaHash = function( params ){
		var cfg = this.cfg.setDocumentName( params.doc_name )
				.setDocumentToSign( params.hash_a_xifrar )
					.setToken( params.token )
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
	 *  - responseB64: Si es vol rebre la resposta en base64 o amb la url de descarrega
	 * 	- token: El token del procés de signatura.
	 *  - keystore_type: Tipus de keystore a utilizar.
	 *  - signature_mode: Mode de signatura a utilizar
	 *	- doc_type: Tipus de document a utilizar.
	 *  - doc_name: Nom del document.
	 * 	- document_to_sign: PDF a signar en UTF-8 codificat en base64.
	 * 	- hash_algorithm: Algoritme de hash a utilizar.
	 * 	- allowedCAs:
	 *	- allowedOIDs:
	 *	- selectedAlias:
	 *	- selectedCN:
	 *	- subjectText:
	 *	- psisValidation:
	 *	- requiredNif:
	 *	- visibleSignature:
	 *	- reservedSpace:
	 *	- signatureField:
	 *	- certificationLevel:
	 *	- reason:
	 *	- location:
	 *	- signatureImage:
	 *	- signatureRectangle:
	 *	- signaturePageNumber:
	 * 	- signatureRotation:
	 *	- showSignValidation:
	 *	- enveloping:
	 *	- detached:
	 * 	- urisSigned:
	 *	- timestamp:
	 *	- tsa:
	 * 	- canonicalization:
	 *	- protectKey:
	 *	- cmsTimestamp:
	 *	- cmsTsaUrl:
	 *	- commitmentIdentifier:
	 *	- commitmentDescription:
	 *	- commitmentReference:
	 *	- signerRole:
	 *	- policy:
	 *	- policyHash:
	 *	- policyQualifier:
	 *	- policyAlgorithm:
	 */
	sc.sign = function( params ){
		var cfg = this.cfg.setCallbackUrl( params.callback )
					.setToken( params.token )
					.setDescripcio( params.descripcio )
					.setResponseB64( params.responseB64 )
					.setKeystoreType( params.keystore_type )
					.setSignatureMode( params.signature_mode )
					.setDocumentType( params.doc_type )
					.setDocumentName( params.doc_name )
					.setHashAlgorithm( params.hash_algorithm )
					.setDocumentToSign( params.document_to_sign )
					.setAllowedCAs( params.allowedCAs )
					.setAllowedOIDs( params.allowedOIDs )
					.setSelectedAlias( params.selectedAlias )
					.setSelectedCN( params.selectedCN )
					.setSubjectText( params.subjectText )
					.setPsisValidation( params.psisValidation )
					.setRequiredNif( params.requiredNif )
					.setVisibleSignature( params.visibleSignature )
					.setReservedSpace( params.reservedSpace )
					.setSignatureField( params.signatureField )
					.setCertificationLevel( params.certificationLevel )
					.setReason( params.reason )
					.setLocation( params.location )
					.setSignatureImage( params.signatureImage )
					.setSignatureRectangle( params.signatureRectangle )
					.setSignaturePageNumber( params.signaturePageNumber )
					.setSignatureRotation( params.signatureRotation )
					.setShowSignValidation( params.showSignValidation )
					.setEnveloping( params.enveloping )
					.setDetached( params.detached )
					.setUrisSigned( params.urisSigned )
					.setXmltimestamp( params.timestamp )
					.setUrltsa( params.tsa )
					.setCanonComments( params.canonicalization )
					.setProtectKey( params.protectKey )
					.setCmsTimestamp( params.cmsTimestamp )
					.setCmsTsa( params.cmsTsaUrl )
					.setCommitmentIdentifier( params.commitmentIdentifier )
					.setCommitmentDescription( params.commitmentDescription )
					.setCommitmentReference( params.commitmentReference )
					.setSignerRole( params.signerRole )
					.setPolicy( params.policy )
					.setPolicyHash( params.policyHash )
					.setPolicyQualifier( params.policyQualifier )
					.setPolicyAlgorithm( params.policyAlgorithm );
				
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
	 * 	- token: El token del procés de signatura.
	 *  - descripcio: descripció del procés de signatura.
	 *  - responseB64: Si es vol rebre la resposta en base64 o amb la url de descarrega 
	 *  - keystore_type: Tipus de keystore a utilizar.
	 *  - doc_name: Nom del document.
	 * 	- hash_a_xifrar: Hash a signar codificat en base64.
	 *	- signingCertificate: Certificat per signar.
	 */
	sc.signApsa = function( params ){
		var cfg = this.cfg.setCallbackUrl( params.callback )
					.setToken( params.token )
					.setDescripcio( params.descripcio )
					.setResponseB64( params.responseB64 )
					.setKeystoreType( params.keystore_type )
					.setDocumentName( params.doc_name )
					.setDocumentToSign( params.hash_a_xifrar )
					.setSigningCertificate( params.signingCertificate );
				
		// invoke
		sc.signar( cfg.createApsaConfig() );
	};
	
	return sc;

})(jQuery);
