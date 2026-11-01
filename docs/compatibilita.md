# Compatibilità Samsung Tizen: modelli, versioni e pacchetti

[Indice](../README.md)

## Dispositivo provato

| Campo | Valore pubblico |
| --- | --- |
| Modello | UE65AU7170UXZT, famiglia AU7170 |
| Sistema | Tizen 6.0, ARMv7 |
| Firmware retail | T-KSU2EDEUC-2301.1 |
| Build rilevata | T-KSU2EDEUC-REL-202511120507 |
| Data prove | 1 novembre 2026 |
| PC | Windows, PowerShell 7, Node.js 22 |

L'anno di produzione o acquisto non determina da solo la piattaforma. Samsung colloca le famiglie AU7000 del 2021 tra i gruppi Tizen 6.0. Controlla il sistema effettivo del tuo dispositivo.

## Supporto dichiarato e prove locali

Nuvio al tag 2.0.8 documenta queste varianti. La tabella non costituisce un test su tutti i modelli:

| Sistema | Variante indicata dal progetto | Prova locale |
| --- | --- | --- |
| Tizen 4.0–5.5, normalmente 2018–2020 | NuvioTpk40 | Non provata; limitazioni descritte upstream |
| Tizen 6.0, normalmente 2021 | NuvioTpk60 | Provata sulla AU7170 |
| Tizen 6.5–7.0, normalmente 2022–2023 | NuvioTpk65 | Non provata qui |
| Tizen 8+, normalmente 2024 e successivi | NuvioTpk | Non provata qui |

I numeri delle API nel progetto .NET possono differire dal sistema di destinazione: scegli il pacchetto in base alle indicazioni della release, non a un numero letto casualmente nel sorgente.

Verifica separatamente: accettazione della firma/installazione; riproduzione e codec; compatibilità della modifica Home con modello, firmware, schema e permessi. Un'app che si installa non dimostra gli altri punti. Non togliere i controlli di un helper per forzarlo su un'altra TV.

Fonti: [Samsung TV Model Groups](https://developer.samsung.com/smarttv/develop/specifications/tv-model-groups.html), [Nuvio TPK 2.0.8](https://github.com/iqui27/nuvio-native-legacy/blob/v2.0.8/tizen-tpk/README.md).
