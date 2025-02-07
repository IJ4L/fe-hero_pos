import React, { useState, useEffect } from "react";
import Advantage from "@/components/advantage";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Preview from "@/components/preview";
import Feature from "@/components/feature";
import Maker from "@/components/maker";
import Footer from "@/components/footer";
import "./App.css";

const App = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-smooth">
      <Navbar scrolling={scrolling} />
      <Hero />
      <Advantage />
      <Preview />
      <Feature />
      <Maker />
      <Footer />
      <a href="https://wa.me/+6281241438052" className="fixed bottom-0 right-0 mr-6 mb-6 px-3 py-2 text-xs bg-white rounded-lg shadow-[0px_4px_10px_rgba(0,0,0,0.1)] hover:bg-slate-50 cursor-pointer">
        <div className="flex items-center space-x-2">
          <img className="size-5" src="src\assets\icons\whats-app.png" />
          <p>WhatsApp Support</p>
        </div>
      </a>
    </div>
  );
};

export default App;

