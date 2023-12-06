import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Sections/Header";
import CTASection from "./Sections/CTASection";
import AboutSection from "./Sections/AboutSection";
import HoneySection from "./Sections/HoneySection";
import BeeFarmSection from "./Sections/BeeFarmSection";
import ChooseUsSection from "./Sections/ChooseUsSection";
import Footer from "./Sections/Footer";
import ProductPage from "./ProductPage";

import { useState } from "react";

function App() {
  const honeysData = [
    {
      id: 1,
      img: "/img/honey-jar-1.webp",
      name: "Wildflower",
      flowerImg: "/img/wildflower.png",
      text: "Collected from a variety of blossoms dancing in meadows, this honey captures the essence of diverse wildflowers. Its rich, full-bodied flavor boasts a symphony of floral notes, making each jar a unique and delightful expression of the natural world.",
      price: 15.99,
      amount: "100g",
      region: "USA",
    },

    {
      id: 2,
      img: "/img/honey-jar-2.webp",
      name: "Manuka",
      flowerImg: "/img/manuka-flower.png",
      text: "The nectar of the native Manuka tree gives this honey a distinctive, robust taste with earthy undertones. Known for its potential health benefits, this unique honey is a testament to the bees' craftsmanship and the purity of the environments they inhabit.",
      price: 22.95,
      amount: "120g",
      region: "New Zealand",
    },

    {
      id: 3,
      img: "/img/honey-jar-3.webp",
      name: "Lavender Blossom",
      flowerImg: "/img/lavender-flower.png",
      text: "Light and aromatic, this honey carries the sweet essence of lavender fields, infusing your palate with a gentle, soothing flavor. Perfect for tea, desserts, or simply drizzled over fresh fruits, our Lavender Blossom Honey adds a touch of elegance to your culinary creations.",
      price: 18.99,
      amount: "100g",
      region: "Spain",
    },
  ];

  const [isCartSectionActive, setIsCartSectionActive] = useState(false);

  const openCartSection = () => {
    setIsCartSectionActive(true);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <CTASection openCartSection={openCartSection} />
              <AboutSection />
              <HoneySection
                honeysData={honeysData}
                openCartSection={openCartSection}
              />
              <BeeFarmSection />
              <ChooseUsSection />
              <Footer />
            </>
          }
        />
        <Route
          path="/product/:id"
          element={<ProductPage honeysData={honeysData} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
