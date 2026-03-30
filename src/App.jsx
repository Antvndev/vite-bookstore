import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./components/Cartcontext";
import CartSidebar from "./components/Cartsidebar";
import Checkout from "./components/Checkout";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StorePerks from "./components/StorePerks";
import FeaturedBooks from "./components/FeaturedBooks";
import BrowseCategories from "./components/BrowseCategories";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import { ScrollToTopButton } from "./components/Button";
import "./App.css";

function HomePage() {
  return (
    <>
      <Navbar />
      <CartSidebar />
      <Hero />
      <StorePerks />
      <FeaturedBooks />
      <BrowseCategories />
      <AboutSection />
      <Footer />
      <ScrollToTopButton />
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename="/vite-bookstore">
      <CartProvider>
        <div className="bg-background">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;