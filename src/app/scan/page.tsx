"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Shield,
  Search,
  ArrowLeft,
  Globe,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Loader2,
} from "lucide-react";

interface ScanResult {
  url: string;
  title: string;
  favicon: string;
  preview: string;
  riskLevel: "safe" | "suspicious" | "dangerous";
  riskScore: number;
  reasons: string[];
}

export default function AppPage() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);

  const handleScan = async () => {
    if (!url.trim()) return;

    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Mock result based on URL
    const mockResult: ScanResult = {
      url: url,
      title: url.includes("paypal")
        ? "PayPal - Secure Payment"
        : url.includes("bank")
        ? "Online Banking Login"
        : url.includes("amazon")
        ? "Amazon.com - Shopping"
        : "Website Title",
      favicon: "🌐",
      preview: "This website appears to be...",
      riskLevel:
        url.includes("suspicious") || url.includes("phishing")
          ? "dangerous"
          : url.includes("unknown")
          ? "suspicious"
          : "safe",
      riskScore:
        url.includes("suspicious") || url.includes("phishing")
          ? 85
          : url.includes("unknown")
          ? 45
          : 15,
      reasons:
        url.includes("suspicious") || url.includes("phishing")
          ? [
              "Domain recently registered",
              "Suspicious keywords detected",
              "No HTTPS certificate",
            ]
          : url.includes("unknown")
          ? ["Unknown domain", "Limited online presence"]
          : [
              "Legitimate domain",
              "Valid SSL certificate",
              "Established online presence",
            ],
    };

    setResult(mockResult);
    setIsLoading(false);
  };

  const getRiskColor = (level: string) => {
    switch (level) {
      case "safe":
        return "bg-green-100 text-green-800 border-green-200";
      case "suspicious":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "dangerous":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getRiskIcon = (level: string) => {
    switch (level) {
      case "safe":
        return <CheckCircle className="h-5 w-5" />;
      case "suspicious":
        return <AlertTriangle className="h-5 w-5" />;
      case "dangerous":
        return <XCircle className="h-5 w-5" />;
      default:
        return <Shield className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="flex items-center space-x-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Back to Home</span>
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-red-600 dark:text-red-500" />
              <Search className="h-6 w-6 text-slate-600 dark:text-slate-400" />
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                Fallax
              </h1>
            </div>
            <div className="w-24"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* URL Scanner Panel */}
        <Card className="mb-8 shadow-lg border-0 bg-white dark:bg-slate-800">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-slate-900 dark:text-white">
              URL Security Scanner
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex space-x-2">
              <Input
                type="url"
                placeholder="Paste a suspicious URL here..."
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1 text-lg py-3 px-4 border-2 border-slate-200 dark:border-slate-600 focus:border-red-500 dark:focus:border-red-400"
                onKeyPress={(e) => e.key === "Enter" && handleScan()}
              />
              <Button
                onClick={handleScan}
                disabled={!url.trim() || isLoading}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-lg font-semibold"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Scanning...
                  </>
                ) : (
                  <>
                    <Search className="mr-2 h-5 w-5" />
                    Scan
                  </>
                )}
              </Button>
            </div>

            {isLoading && (
              <div className="text-center py-8">
                <div className="inline-flex items-center space-x-2 text-slate-600 dark:text-slate-300">
                  <Loader2 className="h-6 w-6 animate-spin" />
                  <span>Analyzing URL for potential threats...</span>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Result Section */}
        {result && !isLoading && (
          <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
            {/* Site Preview */}
            <Card className="shadow-lg border-0 bg-white dark:bg-slate-800">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl">{result.favicon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                      {result.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-2">
                      {result.url}
                    </p>
                    <p className="text-slate-500 dark:text-slate-400">
                      {result.preview}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Risk Assessment */}
            <Card className="shadow-lg border-0 bg-white dark:bg-slate-800">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="flex justify-center mb-4">
                    <div
                      className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full border-2 ${getRiskColor(
                        result.riskLevel
                      )}`}
                    >
                      {getRiskIcon(result.riskLevel)}
                      <span className="font-semibold text-lg capitalize">
                        {result.riskLevel}
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                      Risk Score: {result.riskScore}%
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full transition-all duration-1000 ${
                          result.riskScore >= 70
                            ? "bg-red-500"
                            : result.riskScore >= 40
                            ? "bg-yellow-500"
                            : "bg-green-500"
                        }`}
                        style={{ width: `${result.riskScore}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-3">
                    Analysis Details:
                  </h4>
                  <div className="space-y-2">
                    {result.reasons.map((reason, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            result.riskLevel === "safe"
                              ? "bg-green-500"
                              : result.riskLevel === "suspicious"
                              ? "bg-yellow-500"
                              : "bg-red-500"
                          }`}
                        ></div>
                        <span className="text-slate-600 dark:text-slate-300">
                          {reason}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex justify-center space-x-4">
              <Button
                onClick={() => {
                  setUrl("");
                  setResult(null);
                }}
                variant="outline"
                className="px-6 py-2"
              >
                Scan Another URL
              </Button>
              <Button
                onClick={() => window.open(result.url, "_blank")}
                className="bg-slate-600 hover:bg-slate-700 text-white px-6 py-2"
                disabled={result.riskLevel === "dangerous"}
              >
                <Globe className="mr-2 h-4 w-4" />
                {result.riskLevel === "dangerous"
                  ? "Blocked for Safety"
                  : "Visit Site"}
              </Button>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!result && !isLoading && (
          <div className="text-center py-16">
            <Shield className="h-24 w-24 text-slate-300 dark:text-slate-600 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
              Ready to Scan
            </h3>
            <p className="text-slate-600 dark:text-slate-300 max-w-md mx-auto">
              Paste a URL above to get started with our comprehensive phishing
              detection analysis.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
