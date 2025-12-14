import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Highlights } from "./components/Highlights";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toaster } from "sonner@2.0.3";

export default function App() {
  return (
    <div className="min-h-screen">
      <Toaster position="top-right" />
      <Header />
      <main>
        <Hero />
        <Highlights />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
