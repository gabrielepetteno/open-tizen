# Preparare Windows e collegare Samsung Tizen in Developer Mode

[Indice](../README.md) · [Passo successivo: firma](firma-installazione.md)

TV e PC devono potersi raggiungere nella rete locale. Annota privatamente IP della TV, IP del PC, modello, Tizen e firmware. Usa l'IP della scheda realmente collegata; rete ospiti e VPN possono impedire la comunicazione.

## Strumenti della prova

| Strumento | Versione | Uso |
| --- | --- | --- |
| SDB Samsung | 4.2.36 | Connessione/debug |
| TizenSdb | 1.1.8 | Firma, installazione, avvio |
| Apps2Samsung CLI | 3.1.0 | Inventario app |
| Tizen CLI | 2.5.25 | Certificazione |
| Node.js | 22 | Build e test |
| PowerShell | 7 | Comandi Windows |

Scarica da Samsung o dai rispettivi progetti; verifica hash quando pubblicati e note di versione. La guida non distribuisce questi eseguibili. Le versioni sono una fotografia del percorso, non un aggiornamento automatico.

## Developer Mode sulla TV

1. Apri Apps.
2. Inserisci dal telecomando 1, 2, 3, 4, 5 per il pannello sviluppatore, se previsto dal modello.
3. Abilita Developer Mode e inserisci l'IP del PC, non della TV.
4. Riavvia come richiesto e verifica che la modalità sia attiva.

Se menu o sequenza differiscono, consulta [Samsung TV Device](https://developer.samsung.com/smarttv/develop/getting-started/using-sdk/tv-device.html). Non provare codici del menu di servizio a caso.

## Verifica di connessione

Sostituisci i valori dimostrativi con quelli del tuo ambiente:

```powershell
$tvIp = 'IP_DELLA_TUA_TV'
$sdb = 'C:\TizenTools\sdb.exe'
& $sdb connect "${tvIp}:26101"
& $sdb devices
```

Atteso: dispositivo collegato. Se manca, controlla indirizzi, rete, modalità e riavvio prima di cambiare firewall o certificati.

```powershell
& $sdb disconnect "${tvIp}:26101"
```

Client diversi possono interferire: usa SDB ufficiale per il debug e disconnettilo prima di TizenSdb. Apps2Samsung CLI può riavviare il daemon SDB: evita operazioni simultanee.

Conserva fuori da Git DUID, seriale, MAC, password, token, certificati e inventari completi. Per una segnalazione bastano modello, firmware, versione e messaggio redatto.
