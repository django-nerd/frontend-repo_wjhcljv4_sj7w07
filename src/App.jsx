import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Chat from "./components/Chat";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(56,189,248,0.12),transparent_60%)]">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Chat />
      </main>
      <Footer />
    </div>
  );
}

export default App;
