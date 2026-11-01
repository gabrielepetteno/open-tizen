# Configurazione iniziale Samsung Tizen: Developer Mode, PC e prima installazione

[Indice](../README.md) · [Tutti i link ufficiali](link-ufficiali.md) · [Percorso effettivamente eseguito](percorso-verificato.md)

Questa è la sequenza da seguire partendo da una TV ancora non preparata. Il riferimento provato è AU7170/Tizen 6.0; per altri sistemi leggi prima la [compatibilità](compatibilita.md). I nomi dei menu possono variare. La configurazione delle app è distinta dalla modifica avanzata del sistema.

## 1. Identificare TV e firmware

Apri Impostazioni → Supporto → Informazioni su questa TV / Contatta Samsung, secondo il modello. Annota modello commerciale e versione software. Usa i tool di sviluppo per confermare Tizen se il menu non lo mostra. La data di acquisto non identifica da sola la piattaforma.

Conserva seriale, MAC e DUID solo privatamente. Il DUID potrà servire al certificato distributore: non è una voce da pubblicare. Il dispositivo di riferimento aveva Tizen 6.0 e firmware retail 2301.1. Non cambiare firmware per far coincidere il numero: le compatibilità si verificano, non si forzano.

## 2. Preparare rete e accessi normali

- TV collegata a Internet e PC sulla stessa rete raggiungibile, preferibilmente senza rete ospiti o isolamento tra dispositivi.
- Verifica che un'app già presente si apra e riproduca audio/video; annota il punto di partenza.
- Completa sul dispositivo eventuali schermate iniziali e accessi agli store/servizi richiesti, con i tuoi account.
- Trova l'IP locale della TV in Rete/Stato rete/Impostazioni IP, e quello della scheda attiva del PC con `ipconfig` o le impostazioni Windows.

Sono due indirizzi diversi: **Developer Mode richiede l'IP del PC; SDB si collega all'IP della TV**. Se DHCP cambia uno dei due, aggiorna il relativo campo o comando. Non inoltrare la porta SDB su Internet.

## 3. Conservare le app utili e rimuovere solo quelle eliminabili

Nel percorso sono state mantenute Netflix, Prime Video, YouTube, RaiPlay, Mediaset Infinity e Disney+. Rakuten e le altre app non utilizzate sono state rimosse manualmente dove il menu lo consentiva: Home → Apps → impostazioni/ingranaggio → seleziona app → Elimina.

Se Elimina è grigio, la funzione normale non lo consente. Non è stato eseguito un debloat completo dei servizi di sistema. Rimuovere dalla home e disinstallare sono azioni diverse. La voce Manutenzione dispositivo non era disponibile sulla TV della prova: non è un requisito per continuare.

## 4. Sbloccare Developer Mode

1. Premi Home e apri **Apps**.
2. Apri **Impostazioni app / App Settings** se presente; la posizione cambia con il modello.
3. Inserisci **12345**, usando i numeri del telecomando o il tastierino numerico a schermo. Fallo nel pannello Apps, non nella ricerca di un titolo.
4. Nel popup imposta **Developer mode: On**.
5. Inserisci l'IP locale del **PC autorizzato** e conferma.
6. Riavvia la TV come richiesto dal popup.
7. Riapri Apps e verifica l'indicazione **Develop Mode**.

Fonte primaria: [Samsung: collegare la TV all'SDK](https://developer.samsung.com/smarttv/develop/getting-started/using-sdk/tv-device.html). La documentazione ufficiale descrive questa sequenza; non è una procedura per entrare nel menu di servizio.

Non servono un APK, un'opzione Android «Origini sconosciute», root o un codice del menu di servizio per queste installazioni Tizen. Non modificare avvio Smart Hub, ultima app o impostazioni di fabbrica come prerequisito inventato.

## 5. Preparare il PC e provare SDB

Scarica gli strumenti dai [riferimenti originali](link-ufficiali.md). Nel percorso sono stati usati SDB Samsung 4.2.36, TizenSdb 1.1.8, Apps2Samsung CLI 3.1.0, Tizen CLI 2.5.25, Node.js 22 e PowerShell 7. Versioni della prova, non obbligo di usare una release vecchia su ogni modello.

Non occorre modificare permanentemente PATH: puoi usare percorsi espliciti. Esempio da personalizzare:

```powershell
$tvIp = 'IP_DELLA_TUA_TV'
$sdb = 'C:\TizenTools\sdb.exe'
& $sdb connect "${tvIp}:26101"
& $sdb devices
```

Prosegui solo se la TV compare collegata. Se non compare: rivedi i due IP, modalità attiva, riavvio, rete e client concorrenti. Un timeout non dimostra da solo che serva disabilitare il firewall. Il normale Developer Mode su questa TV non dava una shell generale: il fallimento di `sdb shell` non equivale a installazione impossibile.

Nel laboratorio Apps2Samsung e i client diversi potevano interferire col daemon. Disconnetti SDB prima di usare TizenSdb per firma/installazione, evitando sessioni simultanee. Dettagli in [preparazione del PC](preparazione-pc.md).

## 6. Autorizzare la TV nei certificati

La sola Developer Mode non basta a rendere valido qualsiasi pacchetto. Per il percorso Samsung Certificate Manager:

1. Installa Samsung Certificate Extension nel contesto SDK previsto.
2. Apri Tools → Certificate Manager e crea/importa un profilo **Samsung → TV**.
3. Crea un certificato autore oppure importa il tuo esistente se aggiorni un'app.
4. Completa personalmente l'accesso Samsung quando richiesto.
5. Crea/importa il distributore con il livello di privilegio richiesto dal pacchetto e il DUID della **tua** TV.
6. Conserva profilo, chiavi e password in un backup protetto.

Segui [Samsung: Creating Certificates](https://developer.samsung.com/smarttv/develop/getting-started/setting-up-sdk/creating-certificates.html) e il metodo supportato dall'installer scelto. Non presumere che un profilo Public vada bene per Nuvio nativo: quel pacchetto dichiara requisiti Partner. Se il tool richiede anche un profilo dispositivo/autorizzazione di installazione, completa la sua procedura documentata per quel dispositivo; non riusare XML o DUID di altri.

Il nostro laboratorio ha riusato certificati locali già presenti nel suo flusso di firma e non li distribuisce. Un lettore deve predisporre i propri. Un rifiuto di firma richiede diagnosi; non togliere privilegi dal manifest, non disabilitare protezioni e non disinstallare subito la versione funzionante.

## 7. Scaricare, firmare e installare una sola app

Scegli il WGT/TPK della piattaforma giusta, conserva l'originale e verifica SHA256 quando pubblicato. Firma una copia. Segui i comandi e le condizioni in [firma e installazione](firma-installazione.md).

Il percorso reale ha iniziato dal launcher Arn0 e ha poi aggiunto OmegaTube e Nuvio. Se ti interessa soltanto Nuvio, puoi iniziare dal suo pacchetto Tpk60 per Tizen 6 senza installare prima un launcher. Il fork provato è Nuvio Native Legacy 2.0.8, non un APK Android né un altro client omonimo.

Dopo `install completed`, apri dalla lista Apps e verifica lo schermo. Il comando di avvio da solo non certifica che il contenuto sia visibile.

## 8. Completare Nuvio e gli add-on

Apri Nuvio, completa personalmente accesso QR/codice e verifica la home. Nel pannello [account Nuvio](https://nuvio.tv/account), sullo stesso profilo della TV, configura cataloghi e add-on. Salva, ricarica e verifica Enabled; poi sincronizza gli add-on sulla TV.

La configurazione finale e i link sono nelle pagine [Nuvio in italiano](nuvio.md) e [servizi ufficiali](link-ufficiali.md). Lingue audio e sottotitoli `it`; AIOMetadata in italiano con sei cataloghi TMDB; OpenSubtitles conservato. Per sorgenti P2P, se le vuoi usare, l'abilitazione avviene nelle impostazioni locali con risorse che hai diritto di condividere; non è necessaria per Italia 1 diretto.

Per i canali usa la [procedura completa della guida TV](canali-italiani.md). Dopo sostituzione lista, la sola sincronizzazione può non bastare: ricostruisci l'elenco dalla Guida TV. Per Italia 1 sulla 2.0.8 è stato necessario disattivare **Proxy TS / Inoltra il canale tramite l'app** e riaprire il canale per avere anche l'audio.

## 9. Personalizzare Home solo dopo le prove delle app

Arn0 come app normale è già utilizzabile. Essential, mapping Home e accensione sono tre passi distinti. La variante Essential è riproducibile dall'[esempio incluso](../examples/arn0-essential/README.md); il mapping è nel [percorso avanzato](home-avanzata.md), con backup e recupero specifici del firmware. L'avvio automatico non ha superato la prova e i valori originali sono stati ripristinati.

## Lista di controllo finale

- [ ] Modello, Tizen e firmware identificati; dati privati conservati fuori da Git.
- [ ] Apps mostra Develop Mode dopo il riavvio e contiene l'IP corretto del PC.
- [ ] SDB vede la TV; client concorrenti chiusi.
- [ ] Profilo di firma valido per la TV e per i privilegi del pacchetto.
- [ ] Originali, certificati e versione precedente conservati privatamente.
- [ ] App visibile e navigabile dalla lista Apps.
- [ ] Contenuto di prova con video, audio, lingua e ritorno Home verificati.
- [ ] Per Nuvio: profilo corretto, add-on salvati e sincronizzati, guida aggiornata.
- [ ] Mapping Home trattato a parte; nessun avvio automatico presunto.
