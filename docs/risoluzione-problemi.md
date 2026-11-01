# Risolvere errori Nuvio, canali senza audio e problemi della home Tizen

[Indice](../README.md)

## Metodo

Cambia un elemento per volta. Registra app/versione, contenuto o canale, errore esatto e ultimo cambiamento. HTTP 200 di una playlist non certifica suono e immagine; l'errore di un host non dimostra assenza generale di Internet.

## Guida vuota: gli add-on non rispondono

Controlla che l'add-on dichiari cataloghi TV utilizzabili senza filtri obbligatori incompatibili. Nella prova StreamViX rispondeva HTTP 200 ma lista vuota senza `genre`; la guida interpretava il risultato come mancata risposta. Vedi [canali italiani](canali-italiani.md).

## Soltanto quattro canali

La categoria Sky provata comprendeva tre canali reali e un segnaposto. Il rimedio è stato un add-on di lista italiana dedicato, non l'accumulo di sorgenti VOD.

## Italia 1 non si apre

Il vecchio host `live3-mediaset-it.akamaized.net` falliva la risoluzione dal PC. La nuova lista puntava a `live02-seg.msf.cdn.mediaset.net`, raggiungibile anche dalla TV. Il riepilogo di rete mostrava nella sessione 12 richieste e 12 errori al vecchio host.

La sola sincronizzazione non è bastata. **Cancellare la lista dalla Guida TV, ricaricarla e cercare nuovamente il canale** ha fatto partire il video. Lascia attiva la lista aggiornata e disattiva la vecchia. Non cambiare DNS o protezioni sulla base del messaggio generico di connessione.

## Italia 1 mostra il video ma non ha audio

Sintomo verificato: menu Audio con Nessuna traccia. La sorgente dichiarava audio italiano stereo AAC-HE in una playlist separata `EXT-X-MEDIA`.

1. Apri Impostazioni → Live TV / TV in diretta.
2. Annota il valore di Inoltra il canale tramite l'app (proxy) / Proxy TS.
3. Se attivo, disattivalo.
4. Esci dal canale e riaprilo dalla guida.

**Esito su AU7170/Nuvio 2.0.8: immagine e suono funzionanti.** `app.c:urlCanal` può avvolgere la sorgente nel proxy locale; `proxyts.c:pxLer` sceglie la variante video e non ricompone la rendition audio separata. Il confronto proxy acceso/spento ha confermato il problema nel caso provato.

Se era già spento, questo meccanismo non spiega il tuo caso. Controlla tracce, audio di un'altra app e formato della sorgente. Non impostare conversioni DTS per un flusso AAC senza evidenza.

Fonti: [app.c 2.0.8](https://github.com/iqui27/nuvio-native-legacy/blob/v2.0.8/src/app.c), [proxyts.c 2.0.8](https://github.com/iqui27/nuvio-native-legacy/blob/v2.0.8/src/proxyts.c).

## TeleNord compare ma non parte

La vecchia voce puntava a una playlist HTTP 404. La lista sostitutiva conteneva Tele Nord Genova con un collegamento aggiornato e raggiungibile. **Playback finale in Nuvio non confermato:** l'utente ha interrotto quella prova. Non è una correzione dichiarata conclusa.

## TV Plus nel launcher non apre i canali

`com.samsung.tv.tvPlusDeeplinker` è un ricevitore senza finestra. Il semplice `application.launch` poteva restituire successo senza mostrare canali. L'esempio Essential include, solo per quell'ID, `launchAppControl` con `PAYLOAD={"values":{}}` e `type=CH`. Apertura dal riquadro confermata nella prova.

## Leggere il registro

Nuvio 2.0.8 offre il registro sullo schermo nelle impostazioni di informazioni/assistenza. Chiudi il dettaglio con OK e seleziona Video, Problemi o Rete. Una riga `swap` misura il rendering dell'interfaccia; non è l'errore del canale. Il riepilogo Rete distingue gli host in errore dall'assenza generale di connessione.

Non fotografare QR di login, URL completi, token e account. Controlla l'opzione di invio automatico del log: leggere il registro locale non richiede inviarlo a terzi.

## Home lenta o avvio automatico assente

Leggi [misure Essential](arn0-essential.md) e [Home avanzata](home-avanzata.md). Il ritorno dal tasto Home e l'avvio dopo accensione sono comportamenti diversi. Un tempo di debug non è una misura fisica del telecomando.
