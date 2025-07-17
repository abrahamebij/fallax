"use server";
import checkBlocklist from "./checkBlocklist";
import checkKeywords from "./checkKeywords";
import checkSuspiciousPatterns from "./checkSuspiciousPatterns";
import checkWhitelist from "./checkWhitelist";
import getMeta from "./getMeta";

async function checkUrl(url: string) {
  const issues: string[] = [];
  let score = 0;
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
      whitelisted: true,
      message: "This domain is on our trusted whitelist",
    };
  }

  // Blocklist
  if (await checkBlocklist(hostname)) {
    issues.push("URL matches known phishing domain");
    score += 70; // Assign a high score for blocklist
  }

  // Keywords
  const keywordHits = await checkKeywords(url);
  if (keywordHits.length) {
    issues.push(`Suspicious keywords found: ${keywordHits.join(", ")}`);
    score += 15; // Assign a score for suspicious keywords
  }

  // Patterns
  const patternHits = checkSuspiciousPatterns(hostname);
  if (patternHits.length) {
    issues.push(`Suspicious domain patterns: ${patternHits.join(", ")}`);
    score += 20; // Assign a score for suspicious patterns
  }

  // Get Page Metadata
  const meta = await getMeta(url);

  // Cap the score at 100
  score = Math.min(100, score);

  return {
    meta,
    url,
    score,
    whitelisted: false,
  };
}

export default checkUrl;
