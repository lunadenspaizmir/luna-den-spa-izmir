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
    slug: "alacati-beach-resort-spa",
    name: "Alaçatı Beach Resort & Spa",
    fullName: "Alaçatı Beach Resort & Spa",
    district: "Alaçatı",
    image: "/subelerimiz/alacati-beach-resort-spa.avif",
    status: "open",
    translationKey: "alacatiBeachResortSpa",
    phone: "+90 532 499 85 23",
    phoneHref: "tel:+905324998523",
    whatsappHref: "https://wa.me/905324998523",
    instagramHref: "https://www.instagram.com/alacatibeachresort/",
    mapsUrl: "https://maps.app.goo.gl/AuNEwZVmykxvjaHJ6",
    mapsEmbedUrl:
      "https://www.google.com/maps?q=Alacati%20Mahallesi%20No%3A11%2C%20%C3%87ark%20Plaj%C4%B1%2C%20Liman%20Mevkii%2C%20Ala%C3%A7at%C4%B1%2C%2035930%20%C4%B0zmir&output=embed",
    gallery: [
      "/subelerimiz/alacati-beach-resort-spa/alacati-beach-resort-spa-1.avif",
      "/subelerimiz/alacati-beach-resort-spa/alacati-beach-resort-spa-2.avif",
    ],
    highlights: [
      "Telefonla hızlı geri dönüş",
      "Alaçatı’da kolay ulaşım",
    ],
    searchTopics: [
      "Alaçatı spa",
      "Alaçatı masaj",
      "Alaçatı wellness",
      "Çeşme spa",
      "İzmir Alaçatı spa",
    ],
  },
  {
    slug: "alacati-soliport-hotel-spa",
    name: "Alaçatı SoliPort Hotel & Spa",
    fullName: "SoliPort Hotel & Spa Alaçatı",
    district: "Alaçatı",
    image: "/subelerimiz/alacati-soliport-hotel-spa.png",
    status: "open",
    translationKey: "alacatiSoliportHotelSpa",
    phone: "+90 532 499 85 23",
    phoneHref: "tel:+905324998523",
    whatsappHref: "https://wa.me/905324998523",
    instagramHref: "https://www.instagram.com/hotelsoliport/",
    mapsUrl: "https://maps.app.goo.gl/76QbrozS59dogera9",
    mapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3133.1359317707725!2d26.382237999999997!3d38.2531533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bb7fe536daabb5%3A0xb005f3b896daf820!2sSoliport%20Hotel%20%26%20Spa!5e0!3m2!1str!2str!4v1779144049548!5m2!1str!2str",
    gallery: [
      "/subelerimiz/alacati-soliport-hotel-spa/alacati-soliport-hotel-spa-1.jpg",
      "/subelerimiz/alacati-soliport-hotel-spa/alacati-soliport-hotel-spa-2.jpg",
      "/subelerimiz/alacati-soliport-hotel-spa/alacati-soliport-hotel-spa-3.jpg",
      "/subelerimiz/alacati-soliport-hotel-spa/alacati-soliport-hotel-spa-4.jpg",
      "/subelerimiz/alacati-soliport-hotel-spa/alacati-soliport-hotel-spa-5.jpg",
      "/subelerimiz/alacati-soliport-hotel-spa/alacati-soliport-hotel-spa-6.jpg",
      "/subelerimiz/alacati-soliport-hotel-spa/alacati-soliport-hotel-spa-7.jpg",
      "/subelerimiz/alacati-soliport-hotel-spa/alacati-soliport-hotel-spa-8.jpg",
      "/subelerimiz/alacati-soliport-hotel-spa/alacati-soliport-hotel-spa-9.jpg",
    ],
    highlights: [
      "WhatsApp ile hızlı randevu",
      "Telefonla hızlı geri dönüş",
      "Alaçatı’da konforlu spa deneyimi",
    ],
    searchTopics: [
      "Alaçatı SoliPort spa",
      "SoliPort Hotel Spa Alaçatı",
      "Alaçatı masaj",
      "Alaçatı spa",
      "Çeşme spa",
      "İzmir Alaçatı masaj",
      "Alaçatı wellness",
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
