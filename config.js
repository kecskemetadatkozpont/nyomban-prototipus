// Generálva: deploy/build.mjs — kézzel ne szerkeszd.
window.NYOMBAN_CONFIG = {
  // Szerveroldali árazó végpont. Amíg null, a becslés a böngészőben fut
  // (demó mód), és a pricing-demo.js szolgáltatja az árlistát.
  quoteEndpoint: null,

  // Feltöltési korlát — egy ügyfél legfeljebb ennyi fotót adhat egy kéréshez.
  maxPhotos: 5,
  photoMaxEdge: 1600,

  // Kliensoldali kérés-korlát (nem biztonsági határ, lásd RATE_LIMIT.md).
  quotesPerDay: 5,
  quotesPerHour: 3,
  minGapSeconds: 25
};
