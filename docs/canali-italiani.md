# Canali italiani e Guida TV in Nuvio su Tizen

[Indice](../README.md) · [Problemi e soluzioni](risoluzione-problemi.md)

## Lista della configurazione finale

Il percorso usa [NexoTV](https://github.com/joaosavi/nexotv) come add-on per liste M3U. Dall'istanza indicata nel progetto apri Configure, scegli il provider M3U e inserisci la lista italiana mantenuta da Free-TV:

```text
https://raw.githubusercontent.com/Free-TV/IPTV/master/playlists/playlist_italy.m3u8
```

È una lista di terzi: controlla provenienza, restrizioni territoriali e termini delle sorgenti. Può cambiare e contenere flussi non funzionanti. Questo URL è pubblico; il manifest configurato ottenuto dal gestore è invece personale.

1. Controlla il risultato del gestore: nella prova 443 voci.
2. Ottieni il manifest e aggiungilo al tuo profilo Nuvio con nome TV Italia · Free-TV.
3. Salva e verifica Enabled.
4. Se conservi la precedente lista IPTV-org, disattivala per distinguere le configurazioni senza cancellarla subito.
5. Sincronizza gli add-on sulla TV.
6. Se rimangono vecchie voci: Guida TV → Opzioni → Pulisci/Cancella lista canali; conferma e attendi la ricostruzione.
7. Cerca il canale dalla guida, senza usare i recenti.

Le etichette possono variare. La funzione della guida ricostruisce l'elenco dagli add-on: non è il reset della TV o dell'account.

## Due liste, due risultati

| Configurazione | Voci osservate | Esito |
| --- | --- | --- |
| IPTV-org Italia via NexoTV | 272, pagine 100/100/72 | Guida estesa vista; alcuni URL obsoleti |
| Free-TV Italia via NexoTV M3U | 443 | Lista sostitutiva; Italia 1 provato con audio/video |

Conteggi del 1 novembre 2026, non promessa di riproduzione di ogni voce. Entrambe possono mostrare il fornitore NexoTV: il nome da solo non identifica la lista attiva.

## Italia 1 verificato

Lista sostitutiva attiva, precedente disattivata; guida ricostruita. In Impostazioni → Live TV, **Inoltra il canale tramite l'app (proxy) / Proxy TS disattivato**. Dopo chiusura e riapertura del canale: immagine e suono confermati.

Il proxy è globale: altri canali possono avere esigenze differenti. Annota il valore e prova quelli che usi. La soluzione riguarda la release 2.0.8 e la sorgente della prova, non ogni release futura.

## La precedente guida limitata

Il catalogo TV StreamViX richiedeva `genre`, mentre la guida 2.0.8 interrogava senza filtro. La query `genre=Sky` aveva mostrato TV8, Cielo, Sky TG24 e un segnaposto. Non includeva Sky Sport né tutta la TV italiana. L'add-on di liste dedicato ha ampliato l'elenco.

## EPG e limiti

Il controllo del gestore riportava zero programmi EPG: lista canali e palinsesto sono dati diversi. Non è stato verificato ogni flusso. Alcune dirette possono richiedere autenticazione o l'app ufficiale; RaiPlay, Mediaset Infinity e Samsung TV Plus restano alternative appropriate quando previste dal servizio.
