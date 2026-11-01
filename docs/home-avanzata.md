# Tasto Home e avvio automatico Arn0: percorso avanzato Tizen 6

[Indice](../README.md) · [Backup e recupero](backup-ripristino.md)

## App e sistema sono interventi diversi

Installare un WGT è diverso dal cambiare l'app associata a Home. Non esiste in questo percorso una API pubblica per assegnarlo dal launcher. Sono stati eseguiti helper non ufficiali come sviluppatore UID 901, senza root, modificando dati di sistema dopo verifica del recupero.

Riferimenti: [AeroTizen](https://github.com/helalaou/AeroTizen), [metodo AU8000](https://github.com/DavidNgugi/samsung-tv-unlock). Versioni e compatibilità possono cambiare.

## Percorso effettivo sulla AU7170

1. Diagnosi e backup prima di cambiare Home.
2. Primo metodo arrestato: database live root:root 0644 non scrivibile da UID 901.
3. Valutazione separata del metodo AU8000 e prova di conservazione/ripristino degli originali.
4. Modifica mirata di XF86Home in key_filter e registrazione Arn0 in managed_app; riga remote-management conservata.
5. Riavvio completo e pressione fisica Home: Arn0 confermato dall'utente.

Il recupero provato conservava database, journal, inode, proprietario, permessi, etichette SMACK e mtime. Letture e rinomine possono cambiare atime/ctime. Originali e transazione sono specifici del dispositivo, non pubblicati.

## Nessun comando universale

Gli helper del laboratorio hanno controlli e percorsi della singola TV: sostituire soltanto l'IP renderebbe ingannevole la guida. Questa pagina documenta metodo ed esito, **non è un installer generico del mapping Home**.

Su un'altra TV occorrono identificazione di modello/build, schema e permessi effettivi, metodo di esecuzione revisionato, transazione atomica, condizioni di arresto e prova di recupero. Se mancano, usa Arn0 dalla lista Apps. Non togliere controlli né disattivare protezioni.

Il metodo nativo upstream Arn0 si riferiva a Q70B/Tizen 6.5 con altro firmware: non è stato eseguito presumendolo compatibile con AU7170.

## Avvio automatico: prova non riuscita

Sono state provate tre impostazioni esistenti con rilettura e recupero. L'utente ha osservato circa 15 secondi e apertura su TV Plus; il boot ID era cambiato, dunque la prova includeva riavvio completo. Il comportamento richiesto non è stato ottenuto e i tre valori originali sono stati ripristinati.

Il tempo iniziale di accensione non era misurato: non si può attribuire quel ritardo con certezza alla modifica. Avvio da standby con RAM mantenuta e dopo distacco di corrente non dimostrati. Non presentare il percorso come avvio automatico funzionante.
