"use client";
import Link from "next/link";
import { TERMS_OF_SERVICE } from "@/content/legal";

export default function ServicePage() {
  return (
    <main className="min-h-screen text-white">
      {/* Header with navigation back to main page */}
      <section
        className="relative"
        style={{
          backgroundImage: "url('/bg-clouds-1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#0d242a",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <span className="text-lg font-semibold tracking-wide">BetHabits</span>
            </Link>
          </div>
          <Link 
            href="/" 
            className="rounded-full px-4 py-2 text-sm font-semibold bg-white/10 border border-white/20 hover:bg-white/20 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section
        className="relative"
        style={{
          backgroundImage: "url('/bg-clouds-2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#0d242a",
        }}
      >
        <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
          
          <div className="rounded-2xl p-6 md:p-8 border border-white/20 bg-black/25 backdrop-blur">
            <pre className="whitespace-pre-wrap font-sans text-sm md:text-base leading-relaxed opacity-95">
              {TERMS_OF_SERVICE}
            </pre>
          </div>

          {/* Navigation back to home */}
          <div className="mt-8 flex justify-center">
            <Link 
              href="/"
              className="rounded-xl px-6 py-3 font-semibold border border-white/30 hover:bg-white/10 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer 
        className="relative"
        style={{
          backgroundImage: "url('/bg-clouds-1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#0d242a",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-10 opacity-85">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span>© {new Date().getFullYear()} BetHabits</span>
            <span>•</span>
            <Link href="/" className="underline hover:no-underline">
              Back to Main Page
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
