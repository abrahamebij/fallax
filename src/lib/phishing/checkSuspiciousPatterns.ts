const SUSPICIOUS_PATTERNS = [
  { pattern: /--/, description: "Suspicious substring for obfuscation" },
  {
    pattern: /xn--/,
    description: "IDN domains, often used in homograph attacks",
  },
  {
    pattern: /\.zip$/,
    description: "Risky TLD, associated with malicious downloads",
  },
  { pattern: /\.ru$/, description: "Often linked to phishing/spam campaigns" },
  { pattern: /\.tk$/, description: "Free TLD, frequently abused" },
  { pattern: /\.ml$/, description: "Free TLD, commonly used in scams" },
  { pattern: /\.ga$/, description: "Free TLD, associated with spam" },
  { pattern: /\.cf$/, description: "Free TLD, high abuse rate" },
  { pattern: /\.gq$/, description: "Free TLD, often used in phishing" },
  { pattern: /\.top$/, description: "Frequently used in spam/phishing" },
  { pattern: /\.info$/, description: "Commonly abused in low-cost domains" },
  { pattern: /\.cc$/, description: "Often used in malicious campaigns" },
  { pattern: /\.xyz$/, description: "Popular in phishing due to low cost" },
  { pattern: /\.win$/, description: "Associated with malicious downloads" },
  { pattern: /\.club$/, description: "Sometimes used in spam" },
  { pattern: /\.pw$/, description: "Free TLD, high abuse rate" },
  { pattern: /\.biz$/, description: "Occasionally used in phishing" },
  { pattern: /\.co$/, description: "Sometimes abused for typosquatting" },
  {
    pattern: /login/,
    description: "Common in phishing URLs mimicking login pages",
  },
  { pattern: /secure/, description: "Often used to fake legitimacy" },
  { pattern: /verify/, description: "Frequently seen in phishing scams" },
  { pattern: /account/, description: "Common in fake account recovery pages" },
  { pattern: /auth/, description: "Used in phishing for authentication pages" },
  { pattern: /signin/, description: "Common in fake login pages" },
  { pattern: /paypal/, description: "Typosquatting for PayPal" },
  { pattern: /paypa1/, description: "Typosquatting variant for PayPal" },
  { pattern: /g00gle/, description: "Typosquatting for Google" },
  { pattern: /faceb00k/, description: "Typosquatting for Facebook" },
  { pattern: /amaz0n/, description: "Typosquatting for Amazon" },
  { pattern: /bank/, description: "Generic term in financial phishing" },
  { pattern: /crypto/, description: "Common in cryptocurrency scams" },
  { pattern: /wallet/, description: "Used in crypto-related phishing" },
  { pattern: /payment/, description: "Common in fake payment portals" },
  { pattern: /billing/, description: "Used in phishing for billing scams" },
] as const;

/**
 * Checks if a hostname contains suspicious patterns indicating potential malicious intent.
 * @param hostname - The hostname to check (e.g., "example.com").
 * @param options - Configuration options.
 * @param options.strictTldMatching - If true, TLD patterns must match at the end of the hostname.
 * @param options.enableLogging - If true, logs matched patterns to the console.
 * @returns An array of descriptions for matched patterns.
 * @throws Error if hostname is not a valid string.
 */
function checkSuspiciousPatterns(
  hostname: string,
  options: { strictTldMatching?: boolean; enableLogging?: boolean } = {}
): string[] {
  const { strictTldMatching = true, enableLogging = false } = options;

  if (typeof hostname !== "string" || !hostname.trim()) {
    throw new Error("Hostname must be a non-empty string");
  }

  const normalizedHostname = hostname.toLowerCase();
  const matchedPatterns = SUSPICIOUS_PATTERNS.filter(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({ pattern, description }) => {
      if (strictTldMatching && pattern.toString().includes("\\.")) {
        return pattern.test(normalizedHostname);
      }
      return normalizedHostname.includes(
        pattern.source.replace(/^\//, "").replace(/\/$/, "")
      );
    }
  ).map(({ description }) => description);

  if (enableLogging && matchedPatterns.length > 0) {
    console.log(
      `Suspicious patterns found in "${hostname}": ${matchedPatterns.join(
        ", "
      )}`
    );
  }

  return matchedPatterns;
}

export default checkSuspiciousPatterns;
