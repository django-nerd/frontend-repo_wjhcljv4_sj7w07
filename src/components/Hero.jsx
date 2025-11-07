import { Rocket, Shield, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(1250px_650px_at_10%_10%,rgba(99,102,241,0.12),transparent_60%)]" />
      <div className="max-w-6xl mx-auto px-4 py-24 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-indigo-50 text-indigo-700 mb-4">
              <Sparkles className="size-3" />
              Powered by AI
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              NeezarAI
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-xl">
              Chatbot AI premium untuk membantu Anda bekerja lebih cepat, lebih cerdas, dan lebih kreatif. Dirancang untuk profesional dan bisnis modern.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#chat" className="px-5 py-3 rounded-xl text-white bg-gray-900 hover:bg-gray-800 font-semibold shadow-sm">
                Mulai Chat
              </a>
              <a href="#features" className="px-5 py-3 rounded-xl font-semibold text-gray-800 bg-white hover:bg-gray-50 border border-black/10 shadow-sm">
                Lihat Fitur
              </a>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-3">
                <div className="size-9 rounded-lg bg-indigo-600/10 text-indigo-600 grid place-items-center">
                  <Rocket className="size-4" />
                </div>
                Respons Cepat
              </div>
              <div className="flex items-center gap-3">
                <div className="size-9 rounded-lg bg-indigo-600/10 text-indigo-600 grid place-items-center">
                  <Shield className="size-4" />
                </div>
                Aman & Privat
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-indigo-500/20 via-blue-500/10 to-cyan-400/10 border border-indigo-500/20 p-2">
              <div className="w-full h-full rounded-2xl bg-white/60 backdrop-blur grid place-items-center">
                <div className="text-center p-10">
                  <div className="mx-auto size-20 rounded-2xl bg-gradient-to-tr from-indigo-500 to-cyan-400 shadow-lg" />
                  <h3 className="mt-6 text-xl font-semibold">Kualitas Premium</h3>
                  <p className="text-gray-600 mt-2">Desain modern, profesional, dan nyaman digunakan.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
