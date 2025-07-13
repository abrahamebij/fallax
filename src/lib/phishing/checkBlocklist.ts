"use server";
import blocklist from "@/data/blocklist";

async function checkBlocklist(hostname: string) {
  return blocklist.some((domain) => hostname.includes(domain));
}

export default checkBlocklist;
