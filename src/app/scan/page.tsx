"use client";

import { FormEvent, useState } from "react";
import RiskBar from "@/components/RiskBar";
import Preview from "@/components/Preview";
import { BiLoader } from "react-icons/bi";
import { FaSearch } from "react-icons/fa";
import { FiLoader } from "react-icons/fi";
import checkUrl from "@/lib/phishing/checkUrl";
import MetaInfo from "@/types/MetaInfo";

interface ScanResult {
  score: number;
  url: string;
  meta: MetaInfo;
}

export default function AppPage() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);

  const handleScan = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult(null);
    if (!url.trim()) return;
    setIsLoading(true);

    (async () => {
      const response = await checkUrl(url);
      setResult(response);
      console.log(response);
      setIsLoading(false);
    })();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <main className="container mx-auto px-4 py-8 max-w-4xl rounded-md">
        {/* URL Scanner Panel */}
        <div className="mb-8 py-7 px-5 space-y-2 shadow-lg border-0 bg-white dark:bg-slate-800">
          <div>
            <h1 className="text-2xl font-bold mb-8 text-center text-slate-900 dark:text-white">
              URL Security Scanner
            </h1>
          </div>
          <div className="space-y-4">
            <form
              className="flex items-stretch space-x-2"
              onSubmit={handleScan}
            >
              <input
                type="url"
                placeholder="Paste a suspicious URL here..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1 text-lg py-1 px-4 border-2 border-slate-200 rounded-xl dark:border-slate-600 focus:border-primary focus:outline-0 w-full"
                // onKeyDown={(e) => e.key === "Enter" && handleScan()}
              />
              <button
                type="submit"
                disabled={!url.trim() || isLoading}
                className="bg-primary flex items-center gap-x-2 rounded-xl text-white px-4 py-2 text-lg font-semibold"
              >
                {isLoading ? (
                  <FiLoader className="h-5 w-5 animate-spin" />
                ) : (
                  <FaSearch className="h-5 w-5" />
                )}
                <span className="hidden sm:inline">
                  {isLoading ? "Scanning..." : "Scan"}
                </span>
              </button>
            </form>

            {isLoading && (
              <div className="text-center py-8">
                <div className="inline-flex items-center space-x-2 text-slate-600 dark:text-slate-300">
                  <BiLoader className="h-6 w-6 animate-spin" />
                  <span>Analyzing URL for potential threats...</span>
                </div>
              </div>
            )}

            {result && (
              <div>
                {/* Risk Bar */}
                <RiskBar level={result?.score || 0} />

                {/* Site Preview */}
                <Preview
                  title={result.meta.title ?? result.meta.ogTitle ?? null}
                  description={result.meta.description}
                  image={result.meta.image ?? result.meta.favicon ?? null}
                  url={result.url}
                />
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
