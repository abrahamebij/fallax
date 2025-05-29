"use server";
const BLOCKLIST = ["phishy-site.com", "malicious.ru", "stealyourdata.tk"];

async function checkBlocklist(hostname: string) {
  return BLOCKLIST.some((domain) => hostname.includes(domain));
}

export default checkBlocklist;
