import { CONTACTS, KITS } from "./data";

const BASE_URL = "https://4g-engeniry.ru";
const PHONE = CONTACTS.phoneHref.replace("tel:", "");
const FORM_URL = `${BASE_URL}/#zayavka`;

export function siteSchema() {
  const offers = KITS.map((kit) => ({
    "@type": "Offer",
    name: `${kit.name} — подключение под ключ`,
    price: String(kit.priceValue),
    priceCurrency: "RUB",
    description: kit.tagline,
    url: FORM_URL,
    availability: "https://schema.org/InStock",
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${BASE_URL}/#organization`,
        name: "4G Инженеры",
        url: BASE_URL,
        email: CONTACTS.email,
        telephone: PHONE,
        description:
          "Подключение стабильного 4G интернета для дома, дачи и бизнеса под ключ.",
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Комплекты 4G интернета",
          itemListElement: offers,
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": `${BASE_URL}/#localbusiness`,
        name: "4G Инженеры",
        url: BASE_URL,
        email: CONTACTS.email,
        telephone: PHONE,
        address: {
          "@type": "PostalAddress",
          streetAddress: CONTACTS.address,
          addressCountry: "RU",
        },
        areaServed: "RU",
        openingHours: "Mo-Su 00:00-24:00",
        priceRange: "₽₽",
        potentialAction: {
          "@type": "ContactAction",
          name: "Заказать звонок",
          target: FORM_URL,
        },
      },
      ...KITS.map((kit) => ({
        "@type": "Product",
        "@id": `${BASE_URL}/#product-${kit.name}`,
        name: `Комплект «${kit.name}»`,
        description: kit.tagline,
        brand: { "@type": "Brand", name: "4G Инженеры" },
        offers: {
          "@type": "Offer",
          price: String(kit.priceValue),
          priceCurrency: "RUB",
          availability: "https://schema.org/InStock",
          url: FORM_URL,
        },
      })),
    ],
  };
}
