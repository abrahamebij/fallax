"use server";

const WHITELIST = [
  // Major tech companies
  "google.com",
  "microsoft.com",
  "apple.com",
  "amazon.com",
  "meta.com",
  "facebook.com",
  "instagram.com",
  "twitter.com",
  "x.com",
  "linkedin.com",
  "youtube.com",

  // Banking & Finance
  "chase.com",
  "bankofamerica.com",
  "wellsfargo.com",
  "paypal.com",
  "stripe.com",
  "visa.com",
  "mastercard.com",

  // Government sites
  "gov",
  "edu",
  "irs.gov",
  "usps.com",

  // Popular services
  "github.com",
  "stackoverflow.com",
  "reddit.com",
  "wikipedia.org",
  "dropbox.com",
  "spotify.com",
  "netflix.com",
  "adobe.com",
  "slack.com",
  "zoom.us",
  "discord.com",

  // E-commerce
  "ebay.com",
  "etsy.com",
  "shopify.com",
  "walmart.com",
  "target.com",

  // News & Media
  "cnn.com",
  "bbc.com",
  "nytimes.com",
  "washingtonpost.com",
  "reuters.com",
];

async function checkWhitelist(hostname: string): Promise<boolean> {
  const cleanHostname = hostname.toLowerCase().replace(/^www\./, "");

  return WHITELIST.some((domain) => {
    // Exact match
    if (cleanHostname === domain) return true;

    // Subdomain match (e.g., mail.google.com matches google.com)
    if (cleanHostname.endsWith("." + domain)) return true;

    // TLD match for government/education domains
    if (domain.startsWith(".") && cleanHostname.endsWith(domain)) return true;
    if (cleanHostname.endsWith("." + domain)) return true;

    return false;
  });
}

export default checkWhitelist;
