import { Shield, Zap, Languages, Workflow } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Cepat & Andal",
    desc: "Respon instan dengan kualitas konsisten untuk kebutuhan profesional.",
  },
  {
    icon: Shield,
    title: "Keamanan Prioritas",
    desc: "Data percakapan Anda terlindungi dengan enkripsi dan kontrol privasi.",
  },
  {
    icon: Languages,
    title: "Multi-Bahasa",
    desc: "Dukungan bahasa Indonesia & Inggris untuk tim global Anda.",
  },
  {
    icon: Workflow,
    title: "Automasi Alur Kerja",
    desc: "Integrasi mudah ke proses bisnis untuk efisiensi maksimal.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tight">Fitur Premium</h2>
          <p className="text-gray-600 mt-2">
            Semua yang Anda butuhkan untuk percakapan AI yang profesional.
          </p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm hover:shadow transition">
              <div className="size-10 rounded-lg bg-indigo-600/10 text-indigo-600 grid place-items-center">
                <Icon className="size-5" />
              </div>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="text-gray-600 mt-1 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
