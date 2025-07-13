"use server";
import checkBlocklist from "./checkBlocklist";
import checkKeywords from "./checkKeywords";
import checkSuspiciousPatterns from "./checkSuspiciousPatterns";
import checkWhitelist from "./checkWhitelist";
import getMeta from "./getMeta";

async function checkUrl(url: string) {
  const issues: string[] = [];
  const parsedUrl = new URL(url);
  const hostname = parsedUrl.hostname.toLowerCase();

  // Check whitelist first - if whitelisted, return safe score
  const isWhitelisted = await checkWhitelist(hostname);
  if (isWhitelisted) {
    const meta = await getMeta(url);
    return {
      meta,
      url,
      score: 0,
      issues: [],
      whitelisted: true,
      message: "This domain is on our trusted whitelist",
    };
  }
  let score = 0;
  // Blocklist
  if (await checkBlocklist(hostname)) {
    issues.push("URL matches known phishing domain");
    score += 100;
  }

  // Keywords
  const keywordHits = await checkKeywords(url);
  if (keywordHits.length) {
    issues.push(`Suspicious keywords found: ${keywordHits.join(", ")}`);
  }

  // Patterns
  const patternHits = await checkSuspiciousPatterns(hostname);
  if (patternHits.length) {
    issues.push(`Suspicious domain patterns: ${patternHits.join(", ")}`);
  }

  // Get Page Metadata
  const meta = await getMeta(url);

  // Calculate score (whitelisted domains already returned above)
  score = Math.min(100, issues.length * 30);

  return {
    meta,
    url,
    score,
    issues,
    whitelisted: false,
  };
}

export default checkUrl;
