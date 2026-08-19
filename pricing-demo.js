// DEMÓ ÁRLISTA — generálva: deploy/build.mjs
//
// Ez az EGYETLEN fájl, ami árazási adatot tesz a publikus oldalra. Azért van itt
// külön, mert amíg nincs szerveroldali árazó végpont, a becslés a böngészőben fut,
// és enélkül nem tudna árat mutatni.
//
// Amint a Supabase Edge Function él:  NYOMBAN_QUOTE_ENDPOINT=https://... node deploy/build.mjs
// — ekkor ez a fájl NEM jön létre, és az árazás teljes egészében a szerveren marad.
(function () {
  const DEFAULT_RULES = [
  { id:'r1', label:'Hibafeltárás, érintésvédelmi mérés', note:'1 óra · jegyzőkönyvvel', keywords:'hibaelhárítás, lecsap, zárlat, nem működik, kiver, szikráz', min:9900, max:9900, active:true },
  { id:'r2', label:'Konnektor + doboz csere', note:'db-onként, anyaggal', keywords:'konnektor, dugalj, kapcsoló', min:7200, max:9600, active:true },
  { id:'r3', label:'Bojler külön áramkör', note:'16A kismegszakítóval, vezetékhossztól függ', keywords:'bojler, villanybojler, vízmelegítő', min:18000, max:24000, active:true },
  { id:'r4', label:'Lámpatest felszerelés, bekötés', note:'db-onként, gipszkartonnál felár', keywords:'lámpa, csillár, világítás, spot', min:8500, max:12000, active:true },
  { id:'r5', label:'Elosztószekrény bővítés / csere', note:'FI-relével, sorkapcsokkal', keywords:'elosztó, tábla, biztosíték, fi-relé, fi relé, áramvédő', min:62000, max:96000, active:true },
  { id:'r6', label:'Kaputelefon hibakeresés, javítás', note:'beltéri egység cseréje külön', keywords:'kaputelefon, csengő, videokaputelefon', min:16000, max:26000, active:true },
  { id:'r7', label:'Vezetékhálózat felújítás', note:'pontonként, falhoronnyal', keywords:'felújítás, vezetékcsere, teljes felújítás, alumínium', min:120000, max:210000, active:true },
  { id:'r8', label:'Kültéri / IP44 szerelvény', note:'terasz, kert, nedves tér', keywords:'kültéri, terasz, kert, ip44, nedves', min:11000, max:18000, active:true }
];
  const DEFAULT_GLOB = { callout:6900, hourly:9900, urgency:30, materialPct:0, minFee:12000 };
  window.NYOMBAN_PRICING = { rules: DEFAULT_RULES, glob: DEFAULT_GLOB };
})();
