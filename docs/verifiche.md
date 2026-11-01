# Registro delle verifiche e limiti

[Indice](../README.md)

Data: 1 novembre 2026. AU7170/Tizen 6.0, firmware 2301.1. Le conferme visive vengono dall'utente davanti alla TV: i test locali non le sostituiscono.

| Elemento | Evidenza | Limite |
| --- | --- | --- |
| Arn0 installato | install completed e schermata vista | Un dispositivo |
| Sei app originali | Callback Netflix, Prime Video, YouTube, RaiPlay; conferma visiva Infinity e Disney+ | Apertura, non playback di tutti i servizi |
| TV Plus dal riquadro | Canali visti dopo adattamento launchAppControl | Verificato |
| Tasto Home rimappato | Pressione fisica dopo riavvio | Modello e firmware specifici |
| Avvio automatico | Apre TV Plus; valori originali ripristinati | Non riuscito |
| Essential più rapido | Due prove debug per profilo e conferma qualitativa | Campione piccolo |
| Layout nove app e HDMI | Layout e navigazione | Nessun segnale fisico HDMI provato |
| OmegaTube 1.3.4 | Video/audio e nessuno spot nel campione | Un video, SponsorBlock non verificato |
| Nuvio 2.0.8 Tpk60 | Firma, accesso e comandi fluidi | Verificato |
| VOD | Utente riferisce funzionamento dopo P2P | Titolo/campione non documentati; non esaustivo |
| Lista IPTV-org | 272 voci e guida vista | Alcuni URL obsoleti |
| Lista Free-TV | 443 voci nel gestore | Non tutti i canali provati |
| Italia 1 | Ricostruzione guida → video; proxy off → audio | Video/audio confermati |
| TeleNord | Nuovo URL raggiungibile | Playback finale non confermato |
| EPG completo | Zero programmi nel controllo gestore | Non verificato/disponibile nella configurazione |
| Debloat totale e DNS | Non eseguiti | Nessun risultato dichiarato |

## Verifiche riproducibili

```powershell
node --test examples/arn0-essential/test/apps-launch.test.cjs examples/arn0-essential/test/essential.test.cjs
```

Sono test di rendering, navigazione, errori e avvio con API simulate: non certificano firma, HDMI, decoder o firmware. I controlli documentali verificano link locali e dati privati; non equivalgono a una nuova prova fisica o alla verifica continua di servizi esterni.

Per aggiungere un esito registra modello, sistema, firmware, release, configurazione senza segreti, azione, immagine/audio e data. Conserva anche risultati negativi. Log originali e backup restano privati.
