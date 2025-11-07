import { Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-blue-500 to-cyan-400 text-white grid place-items-center shadow-md">
            <Sparkles className="size-5" />
          </div>
          <span className="font-semibold text-xl tracking-tight">NeezarAI</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition">Features</a>
          <a href="#chat" className="hover:text-gray-900 transition">Chat</a>
          <a href="#pricing" className="hover:text-gray-900 transition">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition">
            Masuk
          </button>
          <button className="px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gray-900 hover:bg-gray-800 shadow-sm">
            Coba Gratis
          </button>
        </div>
      </div>
    </header>
  );
}
