// Generálva: deploy/build.mjs — kézzel ne szerkeszd.
window.NYOMBAN_CONFIG = {
  // ---- Supabase ----
  // A publikálható kulcs SZÁNDÉKOSAN publikus: a böngészőbe kerül, és a
  // soralapú védelem (RLS) mögött semmit nem nyit ki. A service_role kulcs
  // SOHA nem kerülhet ide.
  supabase: { url: "https://uqymbvzatjccxhrktkgm.supabase.co", key: "sb_publishable_9DYs6p7Suj1qy5ws4DpLvA_hXmR3mZa" },

  // Amíg false, minden a mai demó-működésen marad (localStorage, helyi árazás).
  // Ez a visszaút, ha élesben bármi elromlik.
  live: true,

  // Szerveroldali árazó végpont. Amíg null, a becslés a böngészőben fut
  // (demó mód), és a pricing-demo.js szolgáltatja az árlistát.
  quoteEndpoint: null,

  // Vékony demó-sáv a lap tetején. Élesben állítsd false-ra.
  showDemoBanner: true,

  // Feltöltési korlát — egy ügyfél legfeljebb ennyi fotót adhat egy kéréshez.
  maxPhotos: 5,
  photoMaxEdge: 1600,

  // Kliensoldali kérés-korlát (nem biztonsági határ, lásd RATE_LIMIT.md).
  //
  // TESZTIDŐSZAKRA FELEMELVE. Élesben 5 / 3 / 25 volt; a megrendelő aktív
  // próbázáshoz kért többet. A környezeti változóval bármikor visszaállítható:
  //   NYOMBAN_QUOTES_PER_DAY=5 NYOMBAN_QUOTES_PER_HOUR=3 NYOMBAN_MIN_GAP=25
  //
  // Ez NEM a költségvédelem. Azt a havi keret adja (KOLTSEGKERET.md): egy
  // AI-hívás ~0,7 Ft, a napi plafon 300 Ft, tehát a keret ~430 hívásnál akkor
  // is megállítja a rendszert, ha a kérés-korlát tárva-nyitva van. A kliensoldali
  // számláló amúgy is a böngésző tárolójában él — udvariassági fék, nem határ.
  quotesPerDay: 30,
  quotesPerHour: 15,
  minGapSeconds: 5
};
