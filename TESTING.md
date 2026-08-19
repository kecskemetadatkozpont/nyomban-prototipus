# VOLT.SZEGED — tesztelési forgatókönyv

Élő cím: a repo Settings → Pages alatt, illetve a projekt README-jében.

## Amit tudni kell

- Ez **kattintható prototípus**, nem éles rendszer. Amit beírsz, kizárólag a saját
  böngésződben tárolódik — másik gépről nem látszik ugyanaz.
- **Asztali gépen teszteld.** A prototípusban nincs mobil elrendezés; telefonon
  vízszintesen kell húzni a tartalmat.
- Nincsenek útvonalak (`/ajanlat`, `/crm` stb.) — az egész egy állapotgép, ne gépelj be URL-t.
- Újrakezdés: F12 → Console → `localStorage.clear()` → frissítés.

## Ügyfélfolyamat — végigkattintandó

| # | Lépés | Elvárt eredmény |
|---|-------|-----------------|
| 1 | Nyisd meg a kezdőlapot | Landing a DEMÓ-sávval és egy gombbal |
| 2 | „Árajánlatot kérek" | Nyitóoldal: hero, statisztikák, sötét kategóriakártya |
| 3 | Kattints egy kategória-chipre a sötét kártyán | Egyből az 1. lépésben vagy, a kategória kiválasztva |
| 4 | Írj 10 karakternél rövidebb leírást | A tovább gomb tiltott, felirata „Írjon pár szót a hibáról" |
| 5 | Írj részletes leírást (pl. „Lecsapja a kismegszakítót, ha megy a bojler") | Gépelés közben **azonnal frissül** a jobb oldali ársáv és a pontosságmérő |
| 6 | Tölts fel 6 fotót egyszerre | **Csak 5 megy fel**, és megjelenik: „Legfeljebb 5 fotót tölthet fel." |
| 7 | Nézd meg a feltöltött kép méretét (F12 → Application → Local Storage) | A képek átméretezve tárolódnak (max 1600 px él, JPEG) |
| 8 | Sürgősség: „Ma / holnap" | Az ár azonnal ugrik a sürgősségi felárral |
| 9 | Cím, név, telefonszám → „Részletes ajánlat →" | 2. lépés: tételes bontás, összeg, indoklás |
| 10 | Menj vissza és kérj **azonnal** új becslést | „Egy pillanat — N másodperc múlva kérhet új becslést." |
| 11 | Kérj 5-nél több becslést egy nap | „Ma már 5 árbecslést kért…" — a további kérés nem indul el |
| 12 | 3. lépés: jelölj meg 4 sávot | A 4.-nél toast: „Már 3 sávot megjelölt — vegyen ki egyet." |
| 13 | Foglalt (szürke) sávra kattints | „Ez a sáv már betelt." |
| 14 | ÁSZF pipa → „Ajánlat elfogadása" | Visszaigazoló képernyő munkaszámmal és idővonallal |
| 15 | Frissítsd az oldalt | A leadott ajánlat megmarad |
| 16 | Kapcsold ki a wifit, frissíts | Az oldalnak **így is** rendereznie kell (a React helyben van) |
| 17 | Keresd a CRM-et | **Nincs sehol** — az ügyféloldalon nem érhető el |

## Admin felület

A belépő címét és a jelszót külön kaptad meg — ne oszd meg, és ne írd bele
e-mailbe. Belépés után elérhető: Munkák, Naptár, Ügyfelek, Árazási szabályok, Számlázás.

| # | Lépés | Elvárt eredmény |
|---|-------|-----------------|
| 1 | Nyisd meg a belépő címét | Sötét bejelentkező űrlap |
| 2 | Adj meg rossz jelszót | „Hibás felhasználónév vagy jelszó" — és minden próbálkozás után lassabban válaszol |
| 3 | Helyes belépés | Betölt a CRM a Munkák listával |
| 4 | Árazási szabályok | Írj át egy díjat, majd nézd meg az ügyféloldalt — az új szabály szerint számol |
| 5 | Nyiss meg egy munkát | Fotók, tételek, végleges ár szerkeszthető |
| 6 | Időpont megerősítése | Státusz `elfogadva`-ra vált, toast: „SMS kiküldve" (csak felirat) |

## Amiről visszajelzést kérünk

- Érthető-e az ársáv és a „miért ennyi" magyarázat?
- Jó-e a 3 időpont szabálya?
- Hiányzik-e a CRM-ből olyan mező, amit a napi munkában használnál?

## Ami MÉG NEM működik (nem hiba)

- Gemini AI árbecslés és fotóelemzés — a képek feltöltődnek, de nem elemzi őket semmi.
- Valódi adatbázis — másik gépről nem látszanak ugyanazok a rendelések.
- SMS / e-mail értesítés — csak felirat.
- Ügyfél követő link (`/ajanlat/[ref]`).
- Számlázás — szándékosan demó állapot.
- Mobil elrendezés.
