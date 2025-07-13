"use server";
import whitelist from "@/data/whitelist";

function checkWhitelist(hostname: string) {
  const cleanHostname = hostname.toLowerCase().replace(/^www\./, "");

  return whitelist.some((domain) => {
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
