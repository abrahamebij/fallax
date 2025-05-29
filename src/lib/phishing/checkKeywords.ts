const PHISHING_KEYWORDS = [
  "login",
  "verify",
  "update",
  "secure",
  "free",
  "account",
  "confirm",
  "password",
];

async function checkKeywords(url: string) {
  const keywordHits = PHISHING_KEYWORDS.filter((word) =>
    url.toLowerCase().includes(word)
  );
  return keywordHits;
}

export default checkKeywords;
