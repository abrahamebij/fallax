"use server";

import MetaInfo from "@/types/MetaInfo";
import * as cheerio from "cheerio";
import { JSDOM } from "jsdom";

export default async function getMeta(url: string): Promise<MetaInfo> {
  try {
    const res = await fetch(url);
    const html = await res.text();

    const meta = extractWithCheerio(html);
    const missingEssential = !meta.title && !meta.description && !meta.ogTitle;

    if (missingEssential) {
      const fallback = extractWithJsdom(html);
      return { ...meta, ...fallback };
    }

    return meta;
  } catch {
    return emptyMeta();
  }
}

function extractWithCheerio(html: string): MetaInfo {
  const $ = cheerio.load(html);

  const title = $("title").text() || null;
  const ogTitle = $('meta[property="og:title"]').attr("content") || null;
  const description = $('meta[name="description"]').attr("content") || null;
  const ogDescription =
    $('meta[property="og:description"]').attr("content") || null;
  const keywordsRaw = $('meta[name="keywords"]').attr("content") || "";
  const keywords = keywordsRaw
    ? keywordsRaw.split(",").map((k) => k.trim())
    : null;
  const image = $('meta[property="og:image"]').attr("content") || null;
  const favicon =
    $('link[rel="icon"]').attr("href") ||
    $('link[rel="shortcut icon"]').attr("href") ||
    null;

  return {
    title,
    ogTitle,
    description,
    ogDescription,
    keywords,
    image,
    favicon,
  };
}

function extractWithJsdom(html: string): Partial<MetaInfo> {
  try {
    const dom = new JSDOM(html);
    const doc = dom.window.document;

    const title = doc.querySelector("title")?.textContent ?? null;
    const ogTitle =
      doc.querySelector('meta[property="og:title"]')?.getAttribute("content") ??
      null;
    const description =
      doc.querySelector('meta[name="description"]')?.getAttribute("content") ??
      null;
    const ogDescription =
      doc
        .querySelector('meta[property="og:description"]')
        ?.getAttribute("content") ?? null;
    const keywordsRaw =
      doc.querySelector('meta[name="keywords"]')?.getAttribute("content") ?? "";
    const keywords = keywordsRaw
      ? keywordsRaw.split(",").map((k: string) => k.trim())
      : null;
    const image =
      doc.querySelector('meta[property="og:image"]')?.getAttribute("content") ??
      null;
    const favicon =
      doc.querySelector('link[rel="icon"]')?.getAttribute("href") ??
      doc.querySelector('link[rel="shortcut icon"]')?.getAttribute("href") ??
      null;

    return {
      title,
      ogTitle,
      description,
      ogDescription,
      keywords,
      image,
      favicon,
    };
  } catch {
    return {};
  }
}
function emptyMeta(): MetaInfo {
  return {
    title: null,
    ogTitle: null,
    description: null,
    ogDescription: null,
    keywords: null,
    image: null,
    favicon: null,
  };
}
