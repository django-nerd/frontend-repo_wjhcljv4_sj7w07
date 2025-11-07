export default function Footer() {
  return (
    <footer className="mt-20 border-t border-black/10">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p>© {new Date().getFullYear()} NeezarAI. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a className="hover:text-gray-900" href="#">Kebijakan Privasi</a>
          <a className="hover:text-gray-900" href="#">Ketentuan</a>
          <a className="hover:text-gray-900" href="#">Kontak</a>
        </div>
      </div>
    </footer>
  );
}
