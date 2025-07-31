import checkUrl from "@/lib/phishing/checkUrl";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");
  if (!url) {
    return NextResponse.json({ error: "URL is required" }, { status: 400 });
  }

  // Here you would typically call your checkUrl function

  const result = await checkUrl(url);
  const { score } = result;
  const response = {
    url,
    status: score >= 30 ? "unsafe" : "safe",
    score,
  };

  return NextResponse.json(response, { status: 200 });
}
