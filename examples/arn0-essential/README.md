# Arn0 Essential: esempio riproducibile

[Guida](../../docs/arn0-essential.md) · [Crediti](../../THIRD_PARTY_NOTICES.md)

Contiene HTML/JS essenziali, adattatore TV Plus e test del laboratorio. Non è una copia completa di Arn0: manifest e asset arrivano dalla base upstream fissata.

## Preparare una copia separata

Dalla radice di questa repository, PowerShell 7, Git e Node.js 22:

```powershell
git clone https://github.com/NelsonEU/arn0-tv.git .local/arn0-tv
git -C .local/arn0-tv checkout b35c292e5bc63648cb8fef576bf5eacd9ea488d1
Copy-Item -LiteralPath examples/arn0-essential/src/essential.html -Destination .local/arn0-tv/src/essential.html
Copy-Item -LiteralPath examples/arn0-essential/src/js/apps.js -Destination .local/arn0-tv/src/js/apps.js
Copy-Item -LiteralPath examples/arn0-essential/src/js/inputs.js -Destination .local/arn0-tv/src/js/inputs.js
Copy-Item -LiteralPath examples/arn0-essential/src/js/essential.js -Destination .local/arn0-tv/src/js/essential.js
Copy-Item -LiteralPath examples/arn0-essential/config.example.js -Destination .local/arn0-tv/src/js/config.local.js
```

Usa una copia dedicata: quei file del checkout appena clonato saranno sostituiti. Adatta config.local.js alle app realmente presenti. Non copiare preferenze raw o geolocalizzazione di altri utenti.

## Test

```powershell
node --test examples/arn0-essential/test/apps-launch.test.cjs examples/arn0-essential/test/essential.test.cjs
```

I 19 test usano API simulate: rendering, navigazione, errori e TV Plus. Non verificano firma, HDMI o la tua TV.

## Build non firmata

```powershell
pwsh -NoProfile -File examples/arn0-essential/Build-Essential.ps1 -UpstreamDir .local/arn0-tv -OutputFile output/arn0-essential.wgt
```

Il builder controlla sintassi dei quattro script e impacchetta manifest, icona, HTML, bundle e quattro loghi della copia upstream. Non firma, non installa e non assegna Home. Mantieni i crediti degli asset se distribuisci un derivato. Output escluso da Git.

Poi [firma e installa](../../docs/firma-installazione.md) con i tuoi certificati. Mantieni ID e autore per aggiornare. Le preferenze arn0.prefs.v1 possono prevalere sull'ordine del file; il launcher filtra la configurazione ma non certifica che ogni ID sia installato. I metadati upstream non dimostrano l'avvio automatico.
