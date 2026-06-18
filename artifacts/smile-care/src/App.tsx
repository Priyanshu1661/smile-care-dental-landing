import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { DentistProfile } from "./components/DentistProfile";
import { Gallery } from "./components/Gallery";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <DentistProfile />
        <Gallery />
        <WhyChooseUs />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
