# Il percorso reale AU7170: ordine delle operazioni e risultati

[Indice](../README.md) · [Prima installazione](prima-installazione-tv.md) · [Prove e limiti](verifiche.md)

Ricostruzione del lavoro del 1 novembre 2026 su AU7170/Tizen 6.0, con riferimenti alle procedure. L'ordine storico non impone di installare tutto: Nuvio funziona anche senza sostituire Home.

| Fase | Operazione eseguita | Esito e riferimento |
| --- | --- | --- |
| 1 | Inventario modello, firmware e rete; preparazione Developer Mode/PC | Collegamento sviluppatore operativo; [configurazione iniziale](prima-installazione-tv.md) |
| 2 | Scelta delle sei app da conservare e rimozione manuale di quelle eliminabili | Nessuna promessa di debloat totale; Manutenzione dispositivo assente |
| 3 | Build, firma locale e installazione Arn0 | Home vista e app aperte; HDMI rilevati ma segnale fisico non provato |
| 4 | Richiesta Home e avvio automatico, analisi dei progetti non ufficiali | Diagnosi separata prima delle modifiche al sistema |
| 5 | AeroTizen 2.5.0: diagnosi iniziale in timeout, prova con regola firewall temporanea limitata alla TV | Letture UID 901 ottenute; regola rimossa. Non era un requisito generale per installare le app |
| 6 | Backup Home; primo metodo di scrittura rifiutato dai permessi del database live | Arresto, senza disabilitare protezioni o assumere root |
| 7 | Valutazione metodo AU8000, conservazione originali e prova del recupero | Adattamento specifico di modello/build; [Home avanzata](home-avanzata.md) |
| 8 | Mapping Home, riavvio completo e tasto fisico | Arn0 si apre con Home, confermato dall'utente |
| 9 | TV Plus aggiunto come primo riquadro; avvio iniziale senza effetto | Corretto launchAppControl con PAYLOAD e type=CH; canali visti dal riquadro |
| 10 | Tre chiavi esistenti per prova di avvio automatico | Accensione su TV Plus, prova non riuscita; valori originali ripristinati |
| 11 | Diagnosi launcher lento e variante Essential | Rendering diretto, meno lavoro iniziale; due prove debug per profilo e ritorno sensibilmente più rapido riferito dall'utente |
| 12 | OmegaTube 1.3.4 firmato, installato e aggiunto accanto a YouTube | Video/audio, nessuno spot nel video provato; [dettagli](omegatube.md) |
| 13 | Nuvio Native Legacy 2.0.8 Tpk60 firmato e installato | QR/accesso completati dall'utente, catalogo e navigazione fluidi |
| 14 | Riquadro Nuvio aggiunto a Essential | Layout finale nove app e tre HDMI; test locali del launcher mantenuti |
| 15 | AIOMetadata italiano, OpenSubtitles, StreamViX, Torrentio e preferenze `it` | Account configurato senza pubblicare manifest personali; [Nuvio](nuvio.md) |
| 16 | Messaggio di sole sorgenti P2P | Utente abilita P2P locale e riferisce riproduzione; nessun debrid acquistato |
| 17 | Guida TV vuota | Diagnosi filtro genre StreamViX; categoria Sky mostra tre canali reali e segnaposto, non Sky Sport |
| 18 | NexoTV con IPTV-org Italia | 272 voci e guida estesa vista; alcuni URL obsoleti |
| 19 | Diagnosi TeleNord e passaggio a Free-TV via NexoTV M3U | Nuova lista con 443 voci; vecchia disattivata. Playback TeleNord finale non confermato |
| 20 | Italia 1 non raggiungibile, vecchio host ancora visibile nel registro | Nuovo URL raggiungibile dal PC e dalla TV; sola sincronizzazione non risolve |
| 21 | Cancellazione lista dalla Guida TV e ricostruzione | Italia 1 mostra il video |
| 22 | Audio assente e menu Nessuna traccia | Proxy TS disattivato e canale riaperto: audio e video confermati; [diagnosi](risoluzione-problemi.md) |
| 23 | Documentazione pubblica separata dal laboratorio | Solo riferimenti ed esempi senza certificati, transazioni o backup personali |

## Stato finale da riprodurre, non singole prove intermedie

Developer Mode e firma propri; sei app originali conservate; Arn0 Essential con TV Plus, OmegaTube e Nuvio; mapping Home verificato soltanto sul modello/build di riferimento. Avvio automatico ai valori originali, senza risultato positivo dichiarato. Nuvio con lista Free-TV attiva, IPTV-org precedente disattivata, guida ricostruita e proxy TS spento per la sorgente Italia 1 della prova.

La regola firewall usata per la diagnosi avanzata è stata rimossa; non sono stati configurati root, DNS del router, AdGuard Home, account debrid a pagamento o un nuovo player TeleNord. Il recupero con SDB assente e il segnale HDMI fisico non sono verificati.

## Limite della riproducibilità del mapping Home

Sono pubblicati sorgenti e build dell'esempio Essential, non un eseguibile universale che modifica Home. Gli helper del laboratorio e i backup erano legati all'identità della singola TV: il solo stesso Tizen non ne autorizza l'uso su un'altra. Per quella fase serve un adattamento controllato come spiegato nella pagina avanzata.
