export const links = {
  social: {
    instagram: "https://www.instagram.com/farah_alwayswannadance/",
    facebook: "https://www.facebook.com/farah.alwayswannadance",
    email: "mailto:ambiance-zumba@hotmail.fr"
  },
  external: {
    weezevent: "https://my.weezevent.com/paris-reggaeton-festival"
  },
  internal: {
    lineup: "#lineup",
    planning: "/planning",
    tickets: "/tickets",
    boutique: "/boutique"
  }
} as const;

export type LinkType = keyof typeof links;
export type SocialLinkType = keyof typeof links.social;
export type ExternalLinkType = keyof typeof links.external;
export type InternalLinkType = keyof typeof links.internal; 