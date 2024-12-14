import { useState } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Features from "./components/Features1";
import Feature from "./components/Features2";
import Testimonials from "./components/Testimonials";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Header />
      <Features />
      <Feature />
      <Testimonials />
      <FAQs />
      <Footer />
    </>
  );
}

export default App;
