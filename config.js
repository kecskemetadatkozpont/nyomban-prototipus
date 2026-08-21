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
  quotesPerDay: 5,
  quotesPerHour: 3,
  minGapSeconds: 25
};
