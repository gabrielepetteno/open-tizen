# Arn0 Essential: home leggera con app e ingressi HDMI

[Indice](../README.md) · [Esempio riproducibile](../examples/arn0-essential/README.md)

La variante locale mostra app e HDMI configurati prima di interrogare API native. Usa font di sistema, sfondo piatto, un bundle JavaScript e niente animazione di messa a fuoco; i loghi sono facoltativi e successivi ai primi fotogrammi.

Deriva da [Arn0 TV](https://github.com/NelsonEU/arn0-tv) al commit `b35c292e5bc63648cb8fef576bf5eacd9ea488d1`, con ID `Arn0Lnchr0.Launcher`. Non è una release ufficiale upstream.

## Configurazione

La prova finale comprende TV Plus, Netflix, Prime Video, YouTube, OmegaTube, Nuvio, RaiPlay, Mediaset Infinity, Disney+ e HDMI 1/2/3. Adatta gli ID alle app presenti nella tua regione. La home contiene collegamenti, non abbonamenti. L'esempio disattiva suoni, log di rete e meteo geolocalizzato.

Segui il [README dell'esempio](../examples/arn0-essential/README.md), poi [firma e installazione](firma-installazione.md). Verifica il launcher dalla lista Apps prima del mapping Home. Le preferenze `arn0.prefs.v1` possono prevalere sull'ordine del file: cambiare configurazione non prova che la schermata della TV sia già cambiata. Conserva le preferenze prima di correggerle.

## Misure: prima comparazione a sette app

| Due prove per profilo, in debug | Standard | Essential |
| --- | --- | --- |
| Pronto osservato dal PC | 3507 / 4516 ms | 2095 / 3017 ms |
| Media osservata | 4011,5 ms | 2556 ms |
| Evento load della pagina | 1622 / 1536 ms | 427 / 391 ms |

Riduzione media 36,3%, campione di due prove. Comprende comandi SDK e polling di rete: non è una misura del tasto Home, una stima statistica robusta o una promessa per altri modelli. Le aggiunte successive sono state provate separatamente. In uso normale, dopo TV Plus e Home, l'utente ha riferito ritorno sensibilmente più rapido.

Il processo del launcher non risultava più presente dopo TV Plus: il ritorno richiedeva un nuovo avvio. I dati non provano un'accelerazione di tutto il sistema operativo.

## HDMI e televisione normale

Tre ingressi rilevati e riquadri presenti; immagine e audio da dispositivi HDMI non provati. TV Plus dal riquadro verificato; TV Plus non è il sintonizzatore digitale terrestre. Prima di modificare Home controlla il ritorno a Source/TV e alle sorgenti che usi.

Il mapping Home e l'accensione sono trattati nel [percorso avanzato](home-avanzata.md).
