import Footer from "./Footer";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Section3 from "./Sectio3";
import Section2 from "./Section2";
import Section4 from "./Section4";

const App = () => {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main className="section-hero">
        <Hero />
      </main>
      <section className="section-2">
        <Section2 />
      </section>
      <search className="section-3">
        <Section3 />
      </search>
      <section className="section-4">
        <Section4 />
      </section>
      <footer className="footer">
        <Footer />
      </footer>
    </>
  );
};

export default App;
