import Image from "next/image";

export default function Home() {
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
          <a
            href="#cta"
            className="rounded-xl px-4 py-2 font-medium"
            style={{ background: "#ff6a00" }}
          >
            Get the app
          </a>
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

            <div id="cta" className="mt-8 flex gap-4">
              <a
                href="#download"
                className="rounded-xl px-5 py-3 font-semibold"
                style={{ background: "#ff6a00" }}
              >
                Start Winning
              </a>
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
            <Card title="Set a weekly goal" text="Set by Monday noon. Make it measurable." />
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
          <h2 className="text-3xl md:text-4xl font-bold">In-app flow</h2>
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
            <a href="/terms" className="underline">Terms</a>
            <a href="/privacy" className="underline">Privacy</a>
          </div>
        </div>
      </footer>
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
