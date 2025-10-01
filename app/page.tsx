"use client";
import Image from "next/image";
import { useState } from "react";
import Modal from "@/components/Modal";
import { IMPRESSUM } from "@/content/legal";

export default function Home() {
  const [open, setOpen] = useState<null | "impressum">(null);
  return (
    <main className="min-h-screen text-white">
      {/* ===== HERO ===== */}
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
            {/* If you later add a real SVG/PNG logo, drop it in /public and swap here */}
            <span className="text-lg font-semibold tracking-wide">BetHabits</span>
          </div>
          <span className="rounded-full px-4 py-2 text-sm font-semibold bg-white/10 border border-white/20">
            Launching soon
          </span>
        </div>

        <div className="max-w-6xl mx-auto px-6 pb-12 md:pb-20 grid md:grid-cols-2 gap-10 items-center">
          <div className="pt-4 md:pt-6">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Make your goals <span style={{ color: "#ff6a00" }}>non-negotiable</span>
            </h1>
            <p className="mt-5 text-lg opacity-90">
              Set a weekly goal. Stake money. Submit proof. Get verified. Follow through — or pay up.
            </p>

            <ul className="mt-6 space-y-2 text-base opacity-95">
              <li>✅ Stay motivated</li>
              <li>✅ Take charge</li>
              <li>✅ Beat procrastination</li>
            </ul>

            <div id="cta" className="mt-8 flex flex-wrap items-center gap-4">
              <span className="rounded-full px-4 py-2 text-sm font-semibold bg-white/10 border border-white/20">
                Launching soon
              </span>
              <a
                href="#how"
                className="rounded-xl px-5 py-3 font-semibold border border-white/30"
              >
                How it works
              </a>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/mountain-hero.png"
              alt="BetHabits mountain"
              width={1200}
              height={800}
              className="rounded-2xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS (orange gradient clouds) ===== */}
      <section
        id="how"
        className="relative"
        style={{
          backgroundImage: "url('/bg-clouds-2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#0d242a",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
          <h2 className="text-3xl md:text-4xl font-bold">How it works</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <Card title="Set a goal" text="Deadline within 2 weeks. Make it measurable." />
            <Card title="Bet an amount" text="Put real money on the line." />
            <Card title="Submit Proof" text="Upload before the deadline. We or a friend verify." />
          </div>
          <p className="mt-6 opacity-95">❌ If you lose your bet, you lose your money.</p>
        </div>
      </section>

      {/* ===== APP SCREENS ===== */}
      <section
        className="relative"
        style={{
          backgroundImage: "url('/bg-clouds-1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#0d242a",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-12 md:py-16">
          <h2 className="text-3xl md:text-4xl font-bold">Change your habits in 6 simple steps</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <Image className="rounded-xl shadow-lg" src="/1-dashboard.jpg" alt="Dashboard" width={800} height={1600}/>
            <Image className="rounded-xl shadow-lg" src="/2-setgoalsuccess.jpg" alt="Set goal success" width={800} height={1600}/>
            <Image className="rounded-xl shadow-lg" src="/3-setgoal.jpg" alt="Set goal" width={800} height={1600}/>
            <Image className="rounded-xl shadow-lg" src="/4-submitproof.jpg" alt="Submit proof" width={800} height={1600}/>
            <Image className="rounded-xl shadow-lg" src="/5-verifyfriend.jpg" alt="Verify friend" width={800} height={1600}/>
            <Image className="rounded-xl shadow-lg" src="/6-result.jpg" alt="Result" width={800} height={1600}/>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="max-w-6xl mx-auto px-6 py-10 opacity-85">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span>© {new Date().getFullYear()} BetHabits</span>
          <div className="flex gap-6">
            <button onClick={() => setOpen("impressum")} className="underline">Impressum</button>
            <a href="/service" className="underline hover:no-underline">Terms</a>
            <a href="/privacy" className="underline hover:no-underline">Privacy</a>
          </div>
        </div>
      </footer>

      {/* Legal Modals */}
      <Modal open={open === "impressum"} onClose={() => setOpen(null)} title="Impressum">
        <pre className="whitespace-pre-wrap font-sans">{IMPRESSUM}</pre>
      </Modal>
    </main>
  );
}

function Card({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl p-5 border border-white/20 bg-black/25 backdrop-blur">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="opacity-90">{text}</p>
    </div>
  );
}
