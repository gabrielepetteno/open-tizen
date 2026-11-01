# Link ufficiali: app Samsung Tizen, Nuvio, add-on e servizi della configurazione

[Indice](../README.md) · [Prima installazione](prima-installazione-tv.md) · [Fonti tecniche](fonti.md)

Riferimenti aggiornati il **2 novembre 2026**. Per richiesta del titolare sono link ufficiali e di progetto, **non referral commerciali**: nessun codice affiliato o parametro di tracciamento aggiunto. I siti di comunità e i fork sono identificati come tali; non sono applicazioni Samsung ufficiali.

## Applicazioni aggiunte e progetti di comunità

| Componente | Progetto e download | Ruolo nella prova |
| --- | --- | --- |
| Arn0 TV | [Repository](https://github.com/NelsonEU/arn0-tv) · [base esatta](https://github.com/NelsonEU/arn0-tv/tree/b35c292e5bc63648cb8fef576bf5eacd9ea488d1) | Launcher; Essential è la variante locale della guida, non una release upstream |
| Nuvio Native Legacy | [Fork usato](https://github.com/iqui27/nuvio-native-legacy) · [release 2.0.8](https://github.com/iqui27/nuvio-native-legacy/releases/tag/v2.0.8) | Tpk60 realmente provato sulla AU7170 |
| Nuvio | [Sito](https://nuvio.tv/) · [pannello account](https://nuvio.tv/account) · [catalogo pubblico](https://catalog.nuvio.tv/manifest.json) | Profili/add-on e catalogo preesistente; nel percorso quel catalogo è conservato ma disattivato |
| Nuvio upstream | [NuvioMedia/NuvioTVSmart](https://github.com/NuvioMedia/NuvioTVSmart) | Riferimento della famiglia smart TV; distinto dal fork installato |
| OmegaTube | [Repository](https://github.com/IIyn/omegatube) · [release 1.3.4](https://github.com/IIyn/omegatube/releases/tag/v1.3.4) | App alternativa aggiunta accanto a YouTube; selezionare il WGT della piattaforma |

I link latest mostrano versioni correnti, non certificano gli stessi risultati della release provata. Installa la variante giusta e verifica firma e note del progetto.

## Add-on e dati configurati nel profilo Nuvio

| Componente | Riferimento pubblico | Stato e funzione |
| --- | --- | --- |
| AIOMetadata | [Configuratore dell'istanza usata](https://aiometadata.elfhosted.com/configure/) | Metadati italiani, sei cataloghi TMDB; manifest finale personale non condiviso |
| TMDB | [Sito del servizio](https://www.themoviedb.org/) | Fonte dei metadati; vedere le condizioni della propria configurazione |
| OpenSubtitles v3 | [Servizio OpenSubtitles](https://www.opensubtitles.org/) · [manifest pubblico dell'add-on](https://opensubtitles-v3.strem.io/manifest.json) | Add-on sottotitoli già presente e conservato; non confondere il servizio con un nuovo account automaticamente creato |
| StreamViX | [Repository](https://github.com/qwertyuiop8899/StreamViX) · [configuratore dell'istanza usata](https://streamvix.hayd.uk/configure) | Add-on di sorgenti; filtro TV genre diagnosticato nel percorso |
| Torrentio | [Configuratore](https://torrentio.strem.fun/configure) | Priorità italiana nella prova; non garantisce lingua o diritti sui singoli file |
| NexoTV | [Repository](https://github.com/joaosavi/nexotv) · [configuratore pubblico indicato dal progetto](https://263f84288ddb-nexotv.baby-beamup.club/configure) | Add-on M3U per la guida italiana; URL configurato personale non pubblicato |
| Free-TV Italia | [Repository](https://github.com/Free-TV/IPTV) · [playlist Italia](https://github.com/Free-TV/IPTV/blob/master/playlists/playlist_italy.m3u8) | Lista finale attiva via NexoTV |
| IPTV-org Italia | [Repository](https://github.com/iptv-org/iptv) · [playlist Italia](https://github.com/iptv-org/iptv/blob/master/streams/it.m3u) | Lista precedente, disattivata nella configurazione finale |

Il controllo automatico del 2 novembre ha ricevuto HTTP 403 da alcune istanze (OpenSubtitles v3, NexoTV, StreamViX e Torrentio), mentre account Nuvio e manifest catalogo rispondevano HTTP 200. Un rifiuto alle richieste automatiche non certifica indisponibilità dal browser o dalla TV: i configuratori sono riferimenti rilevati dai progetti/percorso, non una promessa di uptime. Non aggiungere account debrid o servizi a pagamento come se fossero stati installati: non lo sono stati.

## App originali conservate nella home

| Servizio | Sito ufficiale | Riscontro nel percorso |
| --- | --- | --- |
| Samsung TV Plus | [Samsung Italia TV Plus](https://www.samsung.com/it/tvs/smart-tv/samsung-tv-plus/) | Riquadro corretto e canali visti; distinto dal sintonizzatore antenna |
| Netflix | [Netflix Italia](https://www.netflix.com/it/) | App mantenuta; apertura dal launcher |
| Prime Video | [Prime Video](https://www.primevideo.com/) | App mantenuta; apertura dal launcher |
| YouTube | [YouTube](https://www.youtube.com/) | App originale mantenuta accanto a OmegaTube |
| RaiPlay | [RaiPlay](https://www.raiplay.it/) | App mantenuta; apertura dal launcher |
| Mediaset Infinity | [Mediaset Infinity](https://mediasetinfinity.mediaset.it/) · [Italia 1 ufficiale](https://mediasetinfinity.mediaset.it/diretta/italia1_cI1/) | App mantenuta; apertura vista; Italia 1 in Nuvio provato separatamente |
| Disney+ | [Disney+ Italia](https://www.disneyplus.com/it-it) | App mantenuta; apertura vista |

Queste app sono normalmente gestite da Apps della TV. Un link al sito del servizio non è un pacchetto WGT da scaricare né un abbonamento incluso. La riproduzione completa di tutti questi servizi non è stata verificata.

## Strumenti sul PC e diagnostica avanzata

| Componente | Link originale | Uso |
| --- | --- | --- |
| Samsung TV SDK/SDB | [Installare TV SDK](https://developer.samsung.com/smarttv/develop/getting-started/setting-up-sdk/installing-tv-sdk.html) | Connessione, strumenti di sviluppo |
| Certificati Samsung | [Creating Certificates](https://developer.samsung.com/smarttv/develop/getting-started/setting-up-sdk/creating-certificates.html) | Profilo autore/distributore per la propria TV |
| Apps2Samsung | [Progetto](https://github.com/Apps2Samsung/Apps2Samsung) · [release](https://github.com/Apps2Samsung/Apps2Samsung/releases) · [catalogo community](https://github.com/Apps2Samsung/tizen-community-packages) | Ecosistema di installazione e inventario; TizenSdb 1.1.8 è il client di firma/installazione usato nel laboratorio, non incluso qui |
| Node.js | [Download ufficiali](https://nodejs.org/en/download) | Build e test Essential |
| PowerShell | [Release ufficiali](https://github.com/PowerShell/PowerShell/releases) | Comandi Windows |
| Git | [Download ufficiali](https://git-scm.com/downloads) | Checkout della base Arn0 |
| AeroTizen | [Repository](https://github.com/helalaou/AeroTizen) | Diagnosi avanzata UID 901; non prerequisito di Nuvio |
| Metodo AU8000 | [samsung-tv-unlock](https://github.com/DavidNgugi/samsung-tv-unlock) | Riferimento per l'adattamento Home, non installer universale |

Per backup e limiti di sistema leggi [recupero](backup-ripristino.md) e [Home avanzata](home-avanzata.md). Questa pagina non contiene chiavi, account, manifest privati o percorsi di recupero di un altro dispositivo.
