"use server";
import MetaInfo from "@/types/MetaInfo";

function extractMetaTag(content: string, name: string): string {
  const regex = new RegExp(
    `<meta[^>]+(?:name|property)=["']${name}["'][^>]*content=["']([^"']+)["']`,
    "i"
  );
  const match = content.match(regex);
  return match ? match[1] : "";
}

function extractTagContent(content: string, tag: string): string {
  const regex = new RegExp(`<${tag}[^>]*>(.*?)</${tag}>`, "i");
  const match = content.match(regex);
  return match ? match[1] : "";
}

function extractFavicon(content: string): string {
  const regex =
    /<link[^>]+rel=["'](?:icon|shortcut icon)["'][^>]+href=["']([^"']+)["']/i;
  const match = content.match(regex);
  console.log(match);

  return match ? match[1] : "/favicon.ico";
}

function emptyMeta(): MetaInfo {
  return {
    title: "",
    description: "",
    ogTitle: "",
    ogDescription: "",
    image: "",
    favicon: "",
  };
}

export default async function getMeta(url: string): Promise<MetaInfo> {
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/113.0.0.0 Safari/537.36",
        Accept: "text/html",
        "Accept-Language": "en-US,en;q=0.9",
        "Cache-Control": "no-cache",
      },
    });
    const html = await res.text();
    console.log(html.slice(0, 1000));

    return {
      title: extractTagContent(html, "title"),
      description: extractMetaTag(html, "description"),
      ogTitle: extractMetaTag(html, "og:title"),
      ogDescription: extractMetaTag(html, "og:description"),
      image: extractMetaTag(html, "og:image"),
      favicon: extractFavicon(html),
    };
  } catch {
    return emptyMeta();
  }
}
