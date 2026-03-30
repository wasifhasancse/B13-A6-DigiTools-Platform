import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Pricing from "./components/Pricing/Pricing";
import StatsSection from "./components/StatsSection/StatsSection";
import StepsSection from "./components/StepsSection/StepsSection";
import WorkFlow from "./components/WorkFlow/WorkFlow";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <StatsSection />
      <StepsSection />
      <Pricing />
      <WorkFlow />
      <Footer />
    </>
  );
}

export default App;
