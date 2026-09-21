export const siteConfig = {
  name: "AutoGloss",
  tagline: "Deep cleaning of vehicles and furniture",
  description:
    "AutoGloss is a professional deep-cleaning service for vehicle interiors, upholstered furniture, and ozone treatment in Smederevo and the surrounding area. We come to your address.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://autogloss.rs",
  locale: "sr_RS",
  location: {
    city: "Smederevo",
    region: "Smederevo and surrounding area",
    country: "RS",
  },
  instagram: {
    handle: "@autogloss.rs",
    url: "https://www.instagram.com/autogloss.rs/?hl=en",
  },
} as const;

export const navLinks = [
  { label: "About Us", href: "#o-nama" },
  { label: "Services", href: "#usluge" },
  { label: "Before & After", href: "#pre-posle" },
  { label: "How We Work", href: "#kako-radimo" },
  { label: "Ozone Treatment", href: "#ozon-tretman" },
  { label: "Contact", href: "#kontakt" },
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
    title: "Deep Cleaning of Vehicle Interiors",
    description:
      "Complete treatment of seats, carpets, plastic surfaces, and headliner — using professional equipment that extracts dirt from the deepest fibers, not just from the surface.",
    points: [
      "Extraction cleaning of seats and carpets",
      "Cleaning of plastic surfaces, headliner, and doors",
      "Removal of stains and old marks",
    ],
    image: { src: "/images/gallery/mercedes-amg-interior.jpg", ratio: 0.66 },
  },
  {
    id: "namestaj",
    title: "Upholstered Furniture Cleaning",
    description:
      "Sofas, armchairs, mattresses, and chairs receive the same level of care as vehicles. Ideal for coffee stains, food stains, pet stains, or years of everyday use.",
    points: [
      "Sofas, armchairs, and chairs",
      "Mattresses and children's beds",
      "Safe for all types of fabrics",
    ],
    image: { src: "/images/gallery/sofa-detail.jpg", ratio: 0.66 },
  },
  {
    id: "patosnice",
    title: "Car Floor Mat and Carpet Cleaning",
    description:
      "Years of mud, sand, and stains — removed down to the last fiber. Floor mats are returned to your vehicle completely dry and fresh. See the results in the Before & After section.",
    points: [
      "Deep extraction cleaning",
      "Removal of stains and unpleasant odors",
      "Fast drying, with no retained moisture",
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
    title: "Children's Mattress",
    description:
      "Stains that were more than a month old and were thought to be impossible to remove.",
    ratio: 1.55,
    before: "/images/before-after/mattress-before.jpg",
    after: "/images/before-after/mattress-after.jpg",
  },
  {
    id: "patosnica",
    title: "Car Floor Mat",
    description:
      "Years of mud and sand removed down to the last carpet fiber.",
    ratio: 0.675,
    before: "/images/before-after/mat-before.jpg",
    after: "/images/before-after/mat-after.jpg",
  },
];

export const advantages = [
  {
    title: "We Come to Your Address",
    description:
      "Service available in Smederevo and the surrounding area — no wasted time, we work wherever it is convenient for you.",
  },
  {
    title: "Professional Equipment",
    description:
      "Extraction machine and industrial ozone generator — not an ordinary household vacuum cleaner and air freshener.",
  },
  {
    title: "No Aggressive Chemicals",
    description:
      "Ozone treatment is 100% natural. Our cleaning products are safe for children, pets, and delicate fabrics.",
  },
  {
    title: "Attention to Detail",
    description:
      "Every seam, every corner, every stain — we treat everything thoroughly, not just superficially.",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Booking",
    description:
      "Send us a message on Instagram and we will arrange a time that works for you.",
  },
  {
    step: "02",
    title: "We Come to Your Address",
    description:
      "We arrive at your location with all the professional equipment needed and ready to work.",
  },
  {
    step: "03",
    title: "Deep Cleaning",
    description:
      "Extraction cleaning, stain removal, and, when needed, ozone treatment.",
  },
  {
    step: "04",
    title: "A Result You Can See and Feel",
    description:
      "Fresh, clean, and free of unpleasant odors — ready to use immediately.",
  },
] as const;

export const aboutImage: ImageAsset = {
  src: "/images/gallery/bmw-interior.jpg",
  ratio: 0.739,
};

/**
 * Copy adapted from the AutoGloss "Ozone Vehicle Treatment" promotional graphic —
 * headline, removal list and closing line are carried over from the original,
 * condensed for the web.
 */
export const ozoneContent = {
  eyebrow: "Ozone Vehicle Treatment",
  titleLead: "Fresh air. Without unpleasant",
  titleAccent: "odors.",
  description:
    "A professional, effective, and 100% natural treatment without chemicals that does not mask unpleasant odors — but removes them from the vehicle.",
  removes: [
    "Cigarette and tobacco odors",
    "Stale odors inside the vehicle",
    "Pet odors",
    "Food and drink odors",
    "Moisture and mold odors",
    "Odors from ventilation and air conditioning",
  ],
  image: { src: "/images/services/ozone-treatment.jpg", ratio: 1.118 },
} as const;

export const ctaImage: ImageAsset = {
  src: "/images/gallery/vw-interior.jpg",
  ratio: 0.864,
};

export const faqItems = [
  {
    question: "Do you come to my address?",
    answer:
      "Yes. We are a mobile service for Smederevo and the surrounding area — we come to you with all the professional equipment, so you don't have to drive anywhere or wait in line.",
  },
  {
    question: "Is ozone treatment safe?",
    answer:
      "Yes. Ozone treatment is 100% natural, without chemicals or artificial fragrances. It is carried out in an empty, unoccupied vehicle — once the treatment is complete and the vehicle has been ventilated, the interior is completely safe to use.",
  },
  {
    question: "Can stains really be completely removed?",
    answer:
      "The extraction equipment we use pulls dirt from deep within the fabric, not just from the surface, allowing us to successfully deal with older, stubborn stains as well. Every case is different, so before we begin, we assess the condition and honestly tell you what results we can realistically achieve.",
  },
  {
    question:
      "Will moisture remain in the upholstered furniture or vehicle after cleaning?",
    answer:
      "No. Professional extraction technology removes almost all moisture during the cleaning process itself, so surfaces are safe to use much sooner than with traditional manual washing.",
  },
  {
    question: "How can I book an appointment?",
    answer:
      "The easiest way is to send us a message on Instagram — we will arrange the date, time, and all the details directly through the conversation.",
  },
  {
    question: "Do you work with all types of vehicles and furniture?",
    answer:
      "Yes — from city cars to premium models, as well as sofas, armchairs, mattresses, and other upholstered items. The products we use are safe for all types of fabrics.",
  },
] as const;
