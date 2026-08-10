export const siteConfig = {
  name: "AutoGloss",
  tagline: "Dubinsko pranje vozila i nameštaja",
  description:
    "AutoGloss je servis za profesionalno dubinsko pranje enterijera vozila, tapaciranog nameštaja i ozon tretman u Smederevu i okolini. Dolazimo na vašu adresu.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://autogloss.rs",
  locale: "sr_RS",
  location: {
    city: "Smederevo",
    region: "Smederevo i okolina",
    country: "RS",
  },
  instagram: {
    handle: "@autogloss.rs",
    url: "https://www.instagram.com/autogloss.rs/?hl=en",
  },
} as const;

export const navLinks = [
  { label: "O nama", href: "#o-nama" },
  { label: "Usluge", href: "#usluge" },
  { label: "Pre i posle", href: "#pre-posle" },
  { label: "Kako radimo", href: "#kako-radimo" },
  { label: "Ozon tretman", href: "#ozon-tretman" },
  { label: "Kontakt", href: "#kontakt" },
] as const;

export type ImageAsset = {
  src: string;
  /** width / height, used to size containers to the photo's true shape instead of cropping it */
  ratio: number;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  points: string[];
  image?: ImageAsset;
};

export const services: Service[] = [
  {
    id: "enterijer-vozila",
    title: "Dubinsko pranje enterijera vozila",
    description:
      "Kompletna obrada sedišta, tepiha, plastike i tavanice — profesionalnom opremom koja izvlači prljavštinu iz najdubljih vlakana, ne samo sa površine.",
    points: [
      "Ekstrakciono pranje sedišta i tepiha",
      "Pranje plastike, tavanice i vrata",
      "Uklanjanje mrlja i starih fleka",
    ],
    image: { src: "/images/gallery/mercedes-amg-interior.jpg", ratio: 0.66 },
  },
  {
    id: "namestaj",
    title: "Pranje tapaciranog nameštaja",
    description:
      "Trosedi, fotelje, madraci i stolice dobijaju istu pažnju kao i vozila. Idealno za flekice od kafe, hrane, kućnih ljubimaca ili godine upotrebe.",
    points: [
      "Trosedi, fotelje i stolice",
      "Madraci i dečiji kreveci",
      "Bezbedno za sve vrste tkanina",
    ],
    image: { src: "/images/gallery/sofa-detail.jpg", ratio: 0.66 },
  },
  {
    id: "patosnice",
    title: "Pranje auto patosnica i tepiha",
    description:
      "Godine blata, peska i mrlja — skinuto do poslednjeg vlakna. Patosnice se vraćaju u vozilo potpuno suve i sveže. Rezultat pogledajte u sekciji Pre i posle.",
    points: [
      "Dubinsko ekstrakciono pranje",
      "Uklanjanje mrlja i neprijatnih mirisa",
      "Brzo sušenje, bez zadržavanja vlage",
    ],
  },
];

export type BeforeAfterItem = {
  id: string;
  title: string;
  description: string;
  /** shared aspect ratio for both photos so the pair lines up perfectly */
  ratio: number;
  before: string;
  after: string;
};

export const beforeAfterItems: BeforeAfterItem[] = [
  {
    id: "madrac",
    title: "Dečiji madrac",
    description:
      "Fleke starije od mesec dana, za koje se mislilo da se ne mogu skinuti.",
    ratio: 1.55,
    before: "/images/before-after/mattress-before.jpg",
    after: "/images/before-after/mattress-after.jpg",
  },
  {
    id: "patosnica",
    title: "Auto patosnica",
    description: "Godine blata i peska uklonjene do poslednjeg vlakna tepiha.",
    ratio: 0.675,
    before: "/images/before-after/mat-before.jpg",
    after: "/images/before-after/mat-after.jpg",
  },
];

export const advantages = [
  {
    title: "Dolazimo na vašu adresu",
    description:
      "Servis za Smederevo i okolinu — nema gubljenja vremena, obradu radimo tamo gde vam odgovara.",
  },
  {
    title: "Profesionalna oprema",
    description:
      "Ekstrakciona mašina i industrijski ozon generator — ne obična kućna usisivačica i osveživač.",
  },
  {
    title: "Bez agresivnih hemikalija",
    description:
      "Ozon tretman je 100% prirodan. Sredstva za pranje su bezbedna za decu, kućne ljubimce i osetljive tkanine.",
  },
  {
    title: "Pažnja posvećena detaljima",
    description:
      "Svaki šav, svaki ugao, svaka fleka — obrađujemo temeljno, ne površno.",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Zakazivanje",
    description: "Pišete nam poruku na Instagram i dogovaramo termin koji vam odgovara.",
  },
  {
    step: "02",
    title: "Dolazak na adresu",
    description: "Dolazimo kod vas sa kompletnom profesionalnom opremom, spremni za rad.",
  },
  {
    step: "03",
    title: "Dubinska obrada",
    description: "Ekstrakciono pranje, uklanjanje fleka i, po potrebi, ozon tretman.",
  },
  {
    step: "04",
    title: "Rezultat koji se vidi i oseti",
    description: "Sveže, čisto i bez neprijatnih mirisa — odmah spremno za upotrebu.",
  },
] as const;

export const aboutImage: ImageAsset = {
  src: "/images/gallery/bmw-interior.jpg",
  ratio: 0.739,
};

/**
 * Copy adapted from the AutoGloss "Ozon tretman vozila" promotional graphic —
 * headline, removal list and closing line are carried over from the original,
 * condensed for the web.
 */
export const ozoneContent = {
  eyebrow: "Ozon tretman vozila",
  titleLead: "Svež vazduh. Bez neprijatnih",
  titleAccent: "mirisa.",
  description:
    "Profesionalan, efikasan i 100% prirodan tretman bez hemikalija koji ne prekriva neprijatne mirise — već ih trajno uklanja iz vozila.",
  removes: [
    "Miris cigareta i duvana",
    "Ustajale mirise u vozilu",
    "Miris kućnih ljubimaca",
    "Miris hrane i pića",
    "Miris vlage i buđi",
    "Mirise iz ventilacije i klime",
  ],
  image: { src: "/images/services/ozone-treatment.jpg", ratio: 1.118 },
} as const;

export const ctaImage: ImageAsset = {
  src: "/images/gallery/vw-interior.jpg",
  ratio: 0.864,
};

export const faqItems = [
  {
    question: "Da li dolazite na moju adresu?",
    answer:
      "Da. Mobilni smo servis za Smederevo i okolinu — dolazimo kod vas sa kompletnom profesionalnom opremom, tako da ne morate nigde da vozite ni da čekate u redu.",
  },
  {
    question: "Da li je ozon tretman bezbedan?",
    answer:
      "Da. Ozon tretman je 100% prirodan, bez hemikalija i veštačkih mirisa. Sprovodi se u praznom, nezauzetom vozilu — kada se tretman završi i vozilo se provetri, enterijer je potpuno bezbedan za upotrebu.",
  },
  {
    question: "Da li mrlje zaista mogu potpuno da se uklone?",
    answer:
      "Ekstrakciona oprema koju koristimo izvlači prljavštinu iz dubine tkanine, ne samo sa površine, pa uspešno rešavamo i starije, uporne mrlje. Svaki slučaj je drugačiji, pa pre početka procenimo stanje i realno vam kažemo šta možemo da postignemo.",
  },
  {
    question: "Da li ostaje vlaga u tapaciranom nameštaju ili vozilu nakon pranja?",
    answer:
      "Ne. Profesionalna ekstrakciona tehnika izvlači gotovo svu vlagu tokom samog pranja, tako da su površine bezbedne za upotrebu mnogo brže nego pri klasičnom ručnom pranju.",
  },
  {
    question: "Kako mogu da zakažem termin?",
    answer:
      "Najlakše je da nam pošaljete poruku na Instagram — dogovaramo datum, vreme i sve detalje direktno u razgovoru.",
  },
  {
    question: "Da li radite sa svim vrstama vozila i nameštaja?",
    answer:
      "Da — od gradskih automobila do premium modela, kao i trosedi, fotelje, madraci i drugi tapacirani komadi. Sredstva koja koristimo su bezbedna za sve vrste tkanina.",
  },
] as const;
