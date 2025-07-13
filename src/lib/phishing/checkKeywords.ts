const PHISHING_KEYWORDS = [
  "account",
  "action",
  "alert",
  "billing",
  "confirm",
  "document",
  "expenses",
  "file",
  "free",
  "important",
  "invoice",
  "login",
  "message",
  "new",
  "register",
  "signup",
  "signin",
  "sign-up",
  "sign-in",
  "notification",
  "order",
  "password",
  "payment",
  "purchase",
  "payroll",
  "request",
  "required",
  "secure",
  "statement",
  "support",
  "suspension",
  "transaction",
  "update",
  "urgent",
  "validate",
  "pay",
  "verification",
  "verify",
  "warning",
];

async function checkKeywords(url: string) {
  const keywordHits = PHISHING_KEYWORDS.filter((word) =>
    url.toLowerCase().includes(word)
  );
  return keywordHits;
}

export default checkKeywords;
