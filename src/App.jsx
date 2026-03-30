import "./App.css";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
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
      <WorkFlow />
    </>
  );
}

export default App;
