# Samsung Tizen Guide — Nuvio, canali italiani e home personalizzata

Guida pratica in italiano per installare applicazioni su Samsung Tizen, configurare Nuvio per film, serie e TV in diretta e usare una home essenziale con app e HDMI.

**Basata su prove reali del 1 novembre 2026 su Samsung AU7170, Tizen 6.0.** Una prova su questo modello non certifica tutte le TV Tizen. Progetto indipendente, non affiliato a Samsung o agli sviluppatori delle applicazioni.

## Inizia da qui

| Obiettivo | Guida |
| --- | --- |
| Verificare modello e sistema | [Compatibilità](docs/compatibilita.md) |
| Collegare Windows alla TV | [PC e Developer Mode](docs/preparazione-pc.md) |
| Firmare e installare WGT/TPK | [Firma e installazione](docs/firma-installazione.md) |
| Configurare film e serie | [Nuvio in italiano](docs/nuvio.md) |
| Aggiungere canali e Guida TV | [Canali italiani](docs/canali-italiani.md) |
| Risolvere Italia 1 senza audio | [Problemi e soluzioni](docs/risoluzione-problemi.md) |
| Creare la home app e HDMI | [Arn0 Essential](docs/arn0-essential.md) |
| Comprendere tasto Home e avvio | [Percorso avanzato](docs/home-avanzata.md) |
| Provare un client video alternativo | [OmegaTube](docs/omegatube.md) |
| Alleggerire la TV e recuperare | [Ottimizzazione](docs/ottimizzazione.md) · [Backup](docs/backup-ripristino.md) |

## Percorso consigliato

1. Identifica modello, Tizen e firmware e conserva un inventario privato.
2. Abilita Developer Mode e verifica il collegamento dal PC.
3. Installa una sola app con pacchetto adatto e certificati propri.
4. Prova Nuvio: accesso, catalogo, sorgente autorizzata, video e audio.
5. Aggiungi la TV in diretta e verifica i canali che ti interessano.
6. Installa Arn0 come normale app; la rimappatura Home è facoltativa e separata.
7. Conserva backup, versioni e risultati delle prove.

Non serve modificare Home per usare Nuvio. Le installazioni descritte non richiedono root; la personalizzazione avanzata Home modifica invece dati di sistema.

## Risultati realmente ottenuti

- **Nuvio Native Legacy 2.0.8, Tpk60:** installazione, accesso, navigazione e riproduzione riferita dall'utente.
- **Guida italiana estesa:** molti canali elencati, disponibilità variabile. Italia 1 con video e audio dopo ricostruzione della lista e disattivazione del proxy TS.
- **Arn0 0.6.12 Essential locale:** riquadri app, ritorno più rapido alla home e tasto Home funzionante sul modello di prova.
- **OmegaTube 1.3.4:** video e audio; nessuno spot nel video provato.
- **Non riuscito:** avvio automatico Arn0 all'accensione; impostazioni originali ripristinate.
- **Non verificati:** segnale fisico HDMI, ogni canale, EPG completo e tutti i codec/cataloghi.

Nuvio è un client: una locandina non è una sorgente video e non concede accesso al titolo. Servono risorse e diritti di visione appropriati. Nessun player rende automaticamente gratuiti Netflix, Prime Video, NOW o Sky Sport.

## Contenuti della repository

`docs/` contiene il percorso, i problemi risolti, le verifiche e le fonti. [L'esempio Arn0 Essential](examples/arn0-essential/README.md) contiene sorgenti, configurazione dimostrativa e test. Nessun certificato, link personale, database della TV o pacchetto firmato è incluso.

## Domande frequenti

**Funziona su tutte le Samsung?** No: consulta la [matrice di compatibilità](docs/compatibilita.md).

**Vedo il titolo ma non le sorgenti.** Cataloghi e sorgenti hanno compiti diversi: leggi [Nuvio](docs/nuvio.md).

**Devo tenere il PC acceso?** Non per gli add-on remoti della configurazione provata. Un server multimediale o proxy sul PC cambierebbe il requisito.

**Posso eliminare ogni app preinstallata?** Alcune hanno Elimina disabilitato; non è stato verificato un debloat totale.

**Arn0 parte all'accensione?** È verificato il tasto Home, non l'avvio automatico.

## Contribuire e aggiornare

Esito della preparazione: [verifica locale della repository](docs/verifica-repository.md).

Leggi [come contribuire](CONTRIBUTING.md), [verifiche](docs/verifiche.md) e [fonti primarie](docs/fonti.md). Prima di un aggiornamento annota la versione precedente e il percorso di recupero. I menu e i servizi possono cambiare.

Testi e codice originale: [MIT](LICENSE). Le attribuzioni e le condizioni dei componenti derivati sono nei [crediti](THIRD_PARTY_NOTICES.md).
