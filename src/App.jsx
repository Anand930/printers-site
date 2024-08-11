import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import OurPartners from "./components/OurPartners";
import Products from "./components/Products";
import Services from "./components/Services";


function App() {
  return (
    <div className="p-0 m-0">
      <Hero />
      <Products/>
      <Services/>
      <OurPartners/>
      <About/>
      <Footer/>
    </div>
  );
}

export default App;
