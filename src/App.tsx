import "./App.css";
import Header from "./components/Header";
import Features from "./components/Features";
import DownloadSection from "./components/DownloadSection";
import FaqSection from "./components/Faq";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Features />
      <DownloadSection />
      <FaqSection />
      <ContactForm />
      <Footer />
    </>
  );
}

export default App;
