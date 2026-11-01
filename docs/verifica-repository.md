# Verifica della repository locale

[Indice](../README.md)

Verifica del 1 novembre 2026 sulla preparazione documentale, prima del primo commit. Nessuna nuova prova sulla TV è stata eseguita; i risultati del dispositivo sono quelli registrati nella [matrice delle prove](verifiche.md).

## Comandi e risultati

- `node --test examples/arn0-essential/test/apps-launch.test.cjs examples/arn0-essential/test/essential.test.cjs`: 19 test, 19 superati, zero fallimenti.
- `git archive` del commit Arn0 fissato, estrazione in directory temporanea, applicazione dei soli file dell'esempio e `Build-Essential.ps1`: build non firmata riuscita; 8 elementi ZIP, 11257 byte. Controllati manifest, HTML, bundle, icona e quattro loghi; bundle con configurazione Nuvio e adattatore TV Plus. Nessuna firma o installazione.
- Controllo di tutti i collegamenti Markdown a file locali: nessuna destinazione mancante. Gli anchor interni non sono oggetto di questo controllo.
- Controllo della selezione dei file e scansione per indirizzi privati, identificativi noti del dispositivo originale, percorsi personali, URL configurati personali e firme note di segreti: nessun riscontro. Questo controllo non è una garanzia matematica di assenza di ogni segreto.
- `git status --short`: soltanto file nuovi del progetto. Nessun commit e nessun remote configurato.
- `git status --short` del laboratorio Arn0: stato preesistente conservato; nessuna modifica aggiuntiva nel sorgente del laboratorio.

## Limiti

Nessun servizio esterno è garantito online nel tempo; i link primari e le versioni sono indicati nelle fonti. Non è stata eseguita una nuova firma o installazione dell'esempio sulla TV. La firma resta dipendente dai certificati del lettore e dai requisiti del pacchetto. Nessun sito, GitHub Pages, sitemap o pubblicazione remota è stato creato.

Prima della pubblicazione serve la revisione dei file esatti destinati al commit secondo la [procedura di pubblicazione](pubblicazione.md).

## Controlli prima della pubblicazione autorizzata

Ripetuti i 19 test: tutti superati. Controlli sintattici Node e parser PowerShell superati. Semgrep con regole p/javascript e metriche disattivate: 68 regole, 4 file JavaScript di sorgente/configurazione analizzati, zero risultati; le fixture di test sono escluse dai filtri predefiniti. Il controllo dei 34 file destinati alla pubblicazione non ha rilevato link locali mancanti o le classi di dati privati cercate. Nessun pacchetto firmato, certificato o backup è incluso. Lo stato senza remote/commit riportato sopra riguarda la preparazione iniziale.
