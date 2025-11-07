import { useEffect, useRef, useState } from "react";
import { Send, Sparkles } from "lucide-react";

// Simple local echo AI placeholder. Backend can be connected later via VITE_BACKEND_URL
export default function Chat() {
  const [messages, setMessages] = useState([
    { id: 1, role: "assistant", content: "Halo! Saya NeezarAI. Ada yang bisa saya bantu?" },
  ]);
  const [input, setInput] = useState("");
  const listRef = useRef(null);

  useEffect(() => {
    listRef.current?.lastElementChild?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const onSend = async () => {
    const text = input.trim();
    if (!text) return;
    const userMsg = { id: Date.now(), role: "user", content: text };
    setMessages((m) => [...m, userMsg]);
    setInput("");

    // Fake AI typing
    setTimeout(() => {
      const reply = {
        id: Date.now() + 1,
        role: "assistant",
        content:
          "Ini respons demo dari NeezarAI. Integrasikan dengan backend untuk jawaban AI nyata.",
      };
      setMessages((m) => [...m, reply]);
    }, 500);
  };

  return (
    <section id="chat" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10 items-stretch">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Chat dengan NeezarAI</h2>
            <p className="text-gray-600 mt-2">
              Didesain untuk percakapan profesional, ringkas, dan akurat. Cocok untuk
              brainstorming, ringkasan dokumen, dan automasi pekerjaan.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <div className="p-4 rounded-xl border border-black/10 bg-white">
                <div className="flex items-center gap-2 text-indigo-600 font-medium">
                  <Sparkles className="size-4" /> Ide & Brainstorm
                </div>
                <p className="text-gray-600 mt-2">Bantu ciptakan ide kampanye, konten, dan strategi.</p>
              </div>
              <div className="p-4 rounded-xl border border-black/10 bg-white">
                <div className="flex items-center gap-2 text-indigo-600 font-medium">
                  <Sparkles className="size-4" /> Ringkasan Cepat
                </div>
                <p className="text-gray-600 mt-2">Rangkum artikel, email, dan dokumen dalam hitungan detik.</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-black/10 bg-white shadow-sm flex flex-col h-[520px] overflow-hidden">
            <div ref={listRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-white to-slate-50">
              {messages.map((m) => (
                <div key={m.id} className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-sm ${m.role === "user" ? "ml-auto bg-indigo-600 text-white" : "bg-white border border-black/10"}`}>
                  {m.content}
                </div>
              ))}
            </div>
            <div className="p-3 border-t border-black/10 bg-white">
              <div className="flex items-center gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && onSend()}
                  placeholder="Tulis pesan..."
                  className="flex-1 rounded-xl border border-black/10 px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-500/30"
                />
                <button onClick={onSend} className="px-4 py-3 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-semibold flex items-center gap-2">
                  <Send className="size-4" />
                  Kirim
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
