import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  Search,
  AlertTriangle,
  Zap,
  Globe,
  Filter,
  Github,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <Shield className="h-16 w-16 text-red-600 dark:text-red-500" />
                <Search className="h-8 w-8 text-slate-600 dark:text-slate-400 absolute -bottom-1 -right-1" />
              </div>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
              Deception Ends Here.
            </h1>

            <p className="text-xl lg:text-2xl text-slate-600 dark:text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Fallax helps you uncover suspicious links and phishing traps
              instantly.
            </p>

            <Link href="/scan">
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Scan a Link
                <Shield className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-red-200 dark:bg-red-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-slate-200 dark:bg-slate-700 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-30 animate-pulse delay-1000"></div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Three simple steps to protect yourself from phishing attacks
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="bg-red-100 dark:bg-red-900/30 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Globe className="h-10 w-10 text-red-600 dark:text-red-500" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                1. Paste a URL
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Simply paste any suspicious link into our scanner
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-blue-100 dark:bg-blue-900/30 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Search className="h-10 w-10 text-blue-600 dark:text-blue-500" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                2. Instant Preview
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Get the page title and site preview immediately
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-green-100 dark:bg-green-900/30 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-10 w-10 text-green-600 dark:text-green-500" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">
                3. Risk Analysis
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Receive a detailed risk score and phishing analysis
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Fallax Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Why Fallax?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Advanced protection powered by intelligent detection
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-slate-800">
              <CardContent className="p-6 text-center">
                <div className="bg-red-100 dark:bg-red-900/30 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-red-600 dark:text-red-500" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Real-time Detection
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Instant analysis of suspicious links and domains
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-slate-800">
              <CardContent className="p-6 text-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-blue-600 dark:text-blue-500" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Google Search Mismatch
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Detects when page content doesn&apos;t match search results
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-slate-800">
              <CardContent className="p-6 text-center">
                <div className="bg-orange-100 dark:bg-orange-900/30 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="h-8 w-8 text-orange-600 dark:text-orange-500" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Known Phishing Domains
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  Comprehensive database of malicious websites
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-slate-800">
              <CardContent className="p-6 text-center">
                <div className="bg-green-100 dark:bg-green-900/30 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Filter className="h-8 w-8 text-green-600 dark:text-green-500" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Smart Keyword Filtering
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-sm">
                  AI-powered detection of suspicious content patterns
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Shield className="h-6 w-6 text-red-600 dark:text-red-500" />
              <span className="text-xl font-bold text-slate-900 dark:text-white">
                Fallax
              </span>
            </div>

            <div className="flex items-center space-x-6">
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                © 2024 Fallax. Protecting users from deception.
              </p>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
