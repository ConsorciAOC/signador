Per si s'han de refer els diagrames.

https://www.websequencediagrams.com/

title Signador Centralitzat - redirectUrl GET

Usuari->Aplicacio: Acces web app X
Aplicacio -> Aplicacio: HMAC(domini,secret,date)
Aplicacio -> SC: GET initProcess { Auth }
SC -> Aplicacio: response { token,status,message }
Aplicacio -> SC: POST startSignProcess { AppletCfg }
SC -> Aplicacio: response status OK/KO
Usuari -> SC: GET signador/?id=token
SC -> Usuari: JNLP
Usuari->Usuari: 
note right of Usuari: Load applet
note right of Usuari: Ge signature
Usuari-->SC: JNLP send signature
SC->Aplicacio: redirect?token=operationId
Aplicacio ->+SC: /getSignature?token=operationId
SC-->-Aplicacio: signResult
Aplicacio-> Usuari: download Signatura



title Signador Centralitzat - callbackUrl POST

Usuari->Aplicacio: Acces web app X
Aplicacio -> Aplicacio: HMAC(domini,secret,date)
Aplicacio -> SC: GET initProcess { Auth }
SC -> Aplicacio: response { token,status,message }
Aplicacio -> SC: POST startSignProcess { AppletCfg }
SC -> Aplicacio: response status OK/KO
Usuari -> SC: GET signador/?id=token
SC -> Usuari: JNLP
Usuari->Usuari: 
note right of Usuari: Load applet
note right of Usuari: Ge signature
Usuari-->SC: JNLP send signature
Aplicacio->Aplicacio: Finished?
SC->Aplicacio: callback(signResult)
Aplicacio->Aplicacio: Finished?
Aplicacio-> Usuari: download Signatura
