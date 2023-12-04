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

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <CTASection />
              <AboutSection />
              <HoneySection />
              <BeeFarmSection />
              <ChooseUsSection />
              <Footer />
            </>
          }
        />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;
