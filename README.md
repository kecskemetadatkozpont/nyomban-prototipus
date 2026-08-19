# NYOMBAN — kattintható prototípus

Ez a repo egy **statikus prototípus** kiszolgálására szolgál (GitHub Pages).
Nem éles rendszer: nincs backend, nincs adatbázis — amit a látogató megad, az a saját
böngészőjében marad.

- `index.html` — belépő oldal
- `app.dc.html` — az ügyfélfolyamat (leírás → tételes ajánlat → 3 időpont → visszaigazolás)
- `TESTING.md` — tesztelési forgatókönyv
- `support.js`, `vendor/` — a prototípus futtatókörnyezete (React helyben, CDN nélkül)

A tartalmat generátor állítja elő, kézzel ne szerkeszd:
`node deploy/build.mjs` a forrásprojektben.
