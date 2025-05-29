const SUSPICIOUS_PATTERNS = ["--", "xn--", ".zip", ".ru", ".tk", ".ml", ".ga"];

async function checkSuspiciousPatterns(hostname: string) {
  return SUSPICIOUS_PATTERNS.filter((pattern) => hostname.includes(pattern));
}
export default checkSuspiciousPatterns;
