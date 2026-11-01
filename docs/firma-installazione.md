# Firmare e installare WGT e TPK su Samsung Tizen

[Indice](../README.md) · [Nuvio](nuvio.md) · [Backup](backup-ripristino.md)

Arn0 e OmegaTube sono WGT Web; Nuvio nella prova è un TPK nativo. Un APK Android non è un pacchetto Tizen. Scegli la variante del sistema dalla release originale.

## Download e certificati

1. Conserva l'originale e controlla SHA256 se il produttore lo pubblica.
2. Crea una copia separata da firmare.
3. Usa i tuoi certificati autore e distributore con autorizzazione per la tua TV.
4. Installa solo la copia correttamente firmata.

```powershell
Get-FileHash -LiteralPath '.\downloads\app-originale.tpk' -Algorithm SHA256
```

L'asset originale Nuvio 2.0.8 Tpk60 verificato aveva SHA256 `DE1590F1414212E386A88E4A43672136971314B239456812A925DCDA7A813AEF`. Vale per quel file originale, non per la copia rifirmata o altre release.

Segui [Samsung: Creating Certificates](https://developer.samsung.com/smarttv/develop/getting-started/setting-up-sdk/creating-certificates.html). Mantieni lo stesso certificato autore per aggiornare un'app esistente. Non condividere chiavi, password o DUID.

Nuvio nativo dichiara requisiti Partner documentati upstream: un profilo Public generico può non bastare. Verifica il percorso di firma supportato dal progetto/tool. Un rifiuto non giustifica la rimozione di privilegi dal manifest o la disattivazione delle protezioni della TV.

Nella prova TizenSdb 1.1.8 ha firmato con certificati già presenti. Sintassi verificata nell'help:

```text
resign <pkg_path> <author> <distrib> <pass>
```

Il quarto argomento è un segreto: questa è una descrizione, non un comando da incollare con password nella cronologia. Usa una procedura locale protetta o un'interfaccia supportata per la firma. I wrapper privati basati su DPAPI del laboratorio non sono riutilizzabili con le chiavi di un altro utente e non sono inclusi.

## Installazione della copia firmata

Esempio PowerShell, da adattare ai tuoi percorsi:

```powershell
$tvIp = 'IP_DELLA_TUA_TV'
$sdb = 'C:\TizenTools\sdb.exe'
$client = 'C:\TizenTools\TizenSdb_v1.1.8.exe'
$package = (Resolve-Path '.\packages\signed\app.tpk').Path
& $sdb disconnect "${tvIp}:26101"
& $client install $tvIp $package
if ($LASTEXITCODE -ne 0) { throw 'Installazione non riuscita: conserva la versione precedente.' }
```

Per WGT usa il relativo percorso. Atteso nella prova: `install completed`. Controlla anche presenza e apertura sulla TV. Per Nuvio Tpk60 2.0.8 l'ID provato è `NuvioTV002.Nuvio`:

```powershell
& $client launch $tvIp 'NuvioTV002.Nuvio'
```

Usa l'ID effettivo se cambi variante o release. Un callback di avvio non conferma il video. Non disinstallare per aggirare un errore di firma: potresti perdere accessi e preferenze.

Prima di continuare prova accesso personale, telecomando, immagine, audio, lingua e ritorno Home. Installare non assegna automaticamente Home né avvio.

Riferimenti: [Apps2Samsung](https://github.com/Apps2Samsung/tizen-community-packages), [Nuvio nativo](https://github.com/iqui27/nuvio-native-legacy), [setup Arn0](https://github.com/NelsonEU/arn0-tv/blob/b35c292e5bc63648cb8fef576bf5eacd9ea488d1/docs/setup-tv.md).
