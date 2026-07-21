export type BranchStatus = "open" | "comingSoon";

export type BranchServiceKey =
  | "swedish"
  | "bali"
  | "deepTissue"
  | "medical"
  | "aromatherapy"
  | "thaiMix"
  | "sultan";

export type Branch = {
  slug: string;
  name: string;
  fullName: string;
  district: string;
  image?: string;
  status: BranchStatus;
  translationKey: string;
  phone?: string;
  phoneHref?: string;
  whatsappHref?: string;
  instagramHref?: string;
  mapsUrl?: string;
  mapsEmbedUrl?: string;
  workingHours?: ReadonlyArray<{
    key: string;
    hours: string;
  }>;
  gallery?: ReadonlyArray<string>;
  services?: ReadonlyArray<BranchServiceKey>;
  highlights?: ReadonlyArray<string>;
  searchTopics?: ReadonlyArray<string>;
};

export const branches: ReadonlyArray<Branch> = [
  {
    slug: "balcova-ege-park",
    name: "Balçova Ege Park",
    fullName: "Luna Den Spa Balçova Ege Park AVM",
    district: "Balçova",
    image: "/subelerimiz/balcova-ege-park.webp",
    status: "open",
    translationKey: "balcovaEgePark",
    phone: "+90 542 582 61 10",
    phoneHref: "tel:+905425826110",
    whatsappHref: "https://wa.me/905425826110",
    instagramHref: "https://www.instagram.com/lunadenspa.izmir/",
    mapsUrl: "https://maps.app.goo.gl/Gb3tcp5T1meByJs37",
    mapsEmbedUrl:
      "https://www.google.com/maps?q=Luna%20Den%20Spa%20Ege%20Park%20AVM%20Bal%C3%A7ova%20%C4%B0zmir&output=embed",
    workingHours: [
      {
        key: "weekday",
        hours: "11:00-22:00",
      },
      {
        key: "weekend",
        hours: "11:00-21:00",
      },
    ],
    gallery: [
      "/subelerimiz/balcova-ege-park/balcova-ege-park-1.webp",
      "/subelerimiz/balcova-ege-park/balcova-ege-park-3.webp",
      "/subelerimiz/balcova-ege-park/balcova-ege-park-4.webp",
      "/subelerimiz/balcova-ege-park/balcova-ege-park-5.webp",
      "/subelerimiz/balcova-ege-park/balcova-ege-park-6.webp",
      "/subelerimiz/balcova-ege-park/balcova-ege-park-7.webp",
      "/subelerimiz/balcova-ege-park/balcova-ege-park-8.webp",
    ],
    services: [
      "swedish",
      "bali",
      "deepTissue",
      "medical",
      "aromatherapy",
      "thaiMix",
      "sultan",
    ],
    highlights: [
      "WhatsApp ile hızlı randevu",
      "Telefonla hızlı geri dönüş",
      "Ege Park AVM içinde kolay ulaşım",
    ],
    searchTopics: [
      "Balçova masaj salonu",
      "Balçova spa",
      "Balçova hamam",
      "Balçova kese köpük",
      "İzmir masaj Balçova",
      "Türk hamamı",
    ],
  },
  {
    slug: "cocos-the-club-solto-hotel",
    name: "Cocos The Club Solto Hotel",
    fullName: "Cocos The Club Solto Hotel Alaçatı",
    district: "Alaçatı",
    image: "/subelerimiz/cocos-the-club-solto-hotel.webp",
    status: "open",
    translationKey: "cocosTheClubSoltoHotel",
    phone: "+90 532 013 01 34",
    phoneHref: "tel:+905320130134",
    whatsappHref: "https://wa.me/905320130134",
    instagramHref: "https://www.instagram.com/lunadenspa_alacati/",
    mapsUrl: "https://maps.app.goo.gl/ntJ16BAnKYkYUQSS8",
    mapsEmbedUrl:
      "https://www.google.com/maps?q=Luna%20Den%20Spa%20Cocos%20The%20Club%20Solto%20Hotel%20Ala%C3%A7at%C4%B1%20%C3%87e%C5%9Fme&output=embed",
    gallery: [
      "/subelerimiz/cocos-the-club-solto-hotel/cocos-the-club-solto-hotel-1.webp",
      "/subelerimiz/cocos-the-club-solto-hotel/cocos-the-club-solto-hotel-2.webp",
      "/subelerimiz/cocos-the-club-solto-hotel/cocos-the-club-solto-hotel-3.webp",
      "/subelerimiz/cocos-the-club-solto-hotel/cocos-the-club-solto-hotel-4.webp",
      "/subelerimiz/cocos-the-club-solto-hotel/cocos-the-club-solto-hotel-5.webp",
      "/subelerimiz/cocos-the-club-solto-hotel/cocos-the-club-solto-hotel-6.webp",
      "/subelerimiz/cocos-the-club-solto-hotel/cocos-the-club-solto-hotel-7.webp",
      "/subelerimiz/cocos-the-club-solto-hotel/cocos-the-club-solto-hotel-8.webp",
      "/subelerimiz/cocos-the-club-solto-hotel/cocos-the-club-solto-hotel-9.webp",
      "/subelerimiz/cocos-the-club-solto-hotel/cocos-the-club-solto-hotel-10.webp",
      "/subelerimiz/cocos-the-club-solto-hotel/cocos-the-club-solto-hotel-11.webp",
      "/subelerimiz/cocos-the-club-solto-hotel/cocos-the-club-solto-hotel-12.webp",
      "/subelerimiz/cocos-the-club-solto-hotel/cocos-the-club-solto-hotel-13.webp",
      "/subelerimiz/cocos-the-club-solto-hotel/cocos-the-club-solto-hotel-14.webp",
      "/subelerimiz/cocos-the-club-solto-hotel/cocos-the-club-solto-hotel-15.webp",
      "/subelerimiz/cocos-the-club-solto-hotel/cocos-the-club-solto-hotel-16.webp",
      "/subelerimiz/cocos-the-club-solto-hotel/cocos-the-club-solto-hotel-17.webp",
      "/subelerimiz/cocos-the-club-solto-hotel/cocos-the-club-solto-hotel-18.webp",
      "/subelerimiz/cocos-the-club-solto-hotel/cocos-the-club-solto-hotel-19.webp",
      "/subelerimiz/cocos-the-club-solto-hotel/cocos-the-club-solto-hotel-20.webp",
      "/subelerimiz/cocos-the-club-solto-hotel/cocos-the-club-solto-hotel-21.webp",
    ],
    services: [
      "swedish",
      "bali",
      "deepTissue",
      "medical",
      "aromatherapy",
      "thaiMix",
      "sultan",
    ],
  },
  {
    slug: "gaziemir",
    name: "Gaziemir",
    fullName: "Luna Den Spa Gaziemir",
    district: "Gaziemir",
    image: "/subelerimiz/mock-spa.jpg",
    status: "comingSoon",
    translationKey: "gaziemir",
  },
];

export function getBranchBySlug(slug: string) {
  return branches.find((branch) => branch.slug === slug);
}

export const openBranches = branches.filter(
  (branch) => branch.status === "open"
);

export const comingSoonBranches = branches.filter(
  (branch) => branch.status === "comingSoon"
);

export const trackedGoogleAdsBranchSlug = "balcova-ege-park";

type ConversionType = "whatsapp" | "phone";

export function getBranchConversionProps(
  slug: string,
  type: ConversionType,
  location: string
) {
  if (slug !== trackedGoogleAdsBranchSlug) {
    return {};
  }

  return {
    "data-conversion": type,
    "data-conversion-location": location,
    "data-branch": slug,
  } as const;
}
