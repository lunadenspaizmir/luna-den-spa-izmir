export const siteConfig = {
  name: "Luna Den Spa",
  url: "https://www.lunadenspaizmir.com",
  description:
    "Luna Den Spa Balçova Ege Park AVM'de masaj, spa, hamam ve wellness hizmetleriyle rahatlatıcı ve premium bir deneyim sunar.",

  /** Ana (tek aktif) şube: iletişim, konum ve yapısal veri bu şubeye aittir. */
  locationLabel: "Balçova Ege Park AVM / İzmir",
  district: "Balçova",
  city: "İzmir",

  phone: {
    display: "+90 542 582 61 10",
    href: "tel:+905425826110",
  },
  whatsapp: {
    number: "905425826110",
    defaultMessage:
      "Merhaba, Luna Den Spa Balçova Ege Park AVM şubesi hakkında bilgi almak ve randevu oluşturmak istiyorum.",
  },
  instagramHref: "https://www.instagram.com/lunadenspa.izmir/",

  address:
    "Ege Park AVM, 2. Kat, Bahçelerarası, Mithatpaşa Cd. No: 44, 35330 Balçova / İzmir",
  directionsUrl: "https://maps.app.goo.gl/Gb3tcp5T1meByJs37",
  mapEmbedUrl:
    "https://www.google.com/maps?q=Luna%20Den%20Spa%20Ege%20Park%20AVM%20Bal%C3%A7ova%20%C4%B0zmir&output=embed",
} as const;
