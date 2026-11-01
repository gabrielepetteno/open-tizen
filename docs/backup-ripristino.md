# Backup e ripristino di app, launcher e Home Samsung Tizen

[Indice](../README.md)

## Materiale da conservare privatamente

- Originale scaricato, provenienza, versione e SHA256.
- Copia firmata che funziona sul tuo dispositivo.
- Certificati autore/distributore e segreti in archivio protetto.
- Configurazione launcher e preferenze persistite.
- Add-on e relativo stato, proteggendo URL personali.
- Scheda delle prove riuscite con modello e firmware.

Un file di backup non prova che sia ripristinabile. Per modifiche di sistema occorre un recupero verificato nelle condizioni effettive.

## Tornare a un launcher precedente

Mantieni ID e certificato autore. Preferisci una reinstallazione in-place della copia precedente già firmata, verificando che il downgrade sia accettato. Non disinstallare un launcher cui punta Home prima di ripristinare il mapping o mantenere un'app valida con lo stesso ID: la disinstallazione può perdere preferenze e lasciare un ID assente.

Conserva la build standard prima di Essential. Il builder dell'esempio produce solo un WGT non firmato: costruzione e firma sono fasi diverse.

## Ripristinare una lista canali

Puoi riabilitare la configurazione precedente conservata nel profilo. Sincronizza e ricostruisci la lista dal menu della guida. Tornare indietro non riporta online un URL esterno scaduto.

## Ripristinare Home

Il laboratorio conservava database e journal originali sulla TV e sul PC associati a una transazione. Il recupero verificava identità, modello, build e originali e manteneva i file sostituiti. Il tasto richiedeva riavvio completo successivo.

Quei file e hash non sono il backup della tua TV. Non copiare database di un altro dispositivo o valori predefiniti inventati. Non è stato verificato il recupero con SDB non operativo o dopo mancato avvio: non dichiararlo garantito. Se perdi collegamento conserva i file e interrompi gli esperimenti. Il reset è un'operazione distinta e potenzialmente distruttiva, non la normale conclusione della guida.
