# Nuvio su Samsung Tizen: film, serie e configurazione italiana

[Indice](../README.md) · [Firma](firma-installazione.md) · [Canali italiani](canali-italiani.md)

La prova riguarda il fork **Nuvio Native Legacy 2.0.8**, variante **NuvioTpk60**. Non confondere fork, Web client e altri progetti omonimi. Scarica dalla [release](https://github.com/iqui27/nuvio-native-legacy/releases/tag/v2.0.8) secondo la [compatibilità](compatibilita.md).

Dopo installazione, apri Nuvio. Nella prova compare QR/codice di accesso: completa personalmente dal tuo dispositivo senza condividerlo. Arrivare alla home conferma l'accesso, non la disponibilità dei video.

## Catalogo e sorgenti sono componenti diversi

| Componente | Compito | Non dimostra |
| --- | --- | --- |
| Catalogo | Titoli, locandine, sinossi | Disponibilità di un video |
| Add-on di sorgenti | Risorse riproducibili | Compatibilità, lingua, autorizzazione |
| Sottotitoli | Tracce testuali | Audio italiano |
| Client | Apertura della risorsa | Accesso ai cataloghi a pagamento |

## Configurazione del profilo

1. Apri il pannello account su `nuvio.tv`, sullo stesso profilo della TV.
2. In Addons usa Add Addon, URL del configuratore, nome riconoscibile e Enabled.
3. Salva, ricarica e riapri Edit per controllare lo stato. Non condividere URL personali.
4. Sulla TV usa Impostazioni → Add-on → Sincronizza.

Nel client provato il menu locale sincronizza le impostazioni dell'account; non offre necessariamente gli stessi comandi del pannello Web.

Configurazione effettuata nel percorso:

- **AIOMetadata italiano:** film e serie, sei cataloghi TMDB: Popular, Trending e Top Rated per ciascun tipo; fuso Europe/Rome. [Istanza usata](https://aiometadata.elfhosted.com/). La password di configurazione è scelta dall'utente; il manifest generato è personale.
- **OpenSubtitles v3:** conservato.
- **StreamViX** e **Torrentio:** sorgenti, con priorità italiana dove disponibile. I riferimenti sono nelle [fonti](fonti.md). Verifica provenienza e autorizzazione delle risorse; la priorità non garantisce la traccia italiana.
- Il vecchio catalogo Nuvio è conservato ma disattivato per ridurre duplicati. Non è necessario eliminarlo.

Nelle TV Settings del profilo sono state impostate lingua audio e sottotitoli `it`. Salva e rileggi dopo ricaricamento. Una preferenza non crea una traccia che il file non contiene.

## Prima prova

Scegli un contenuto che puoi vedere e inizialmente una risoluzione moderata. Verifica immagine, suono, lingua, avanzamento e ritorno alla home. Un errore di add-on mancanti richiede una sorgente, non un altro catalogo.

Se compaiono soltanto sorgenti P2P, il client può richiedere P2P nelle impostazioni locali o un account debrid. Nella prova l'utente ha abilitato P2P e riferito riproduzione funzionante; nessun debrid è stato acquistato. L'opzione locale non si trasferisce automaticamente dal pannello cloud. Abilitala solo se intendi riprodurre e condividere risorse per cui hai i diritti. Non serve per il flusso diretto di Italia 1 descritto qui.

Non è stata verificata ogni opera, sorgente, lingua o formato. Non sono stati verificati accessi gratuiti a Netflix, Prime Video, NOW o Sky Sport. Consulta [problemi e soluzioni](risoluzione-problemi.md).
