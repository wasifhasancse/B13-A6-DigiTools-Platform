import { Suspense, useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/NavBar";
import Pricing from "./components/Pricing/Pricing";
import StatsSection from "./components/StatsSection/StatsSection";
import StepsSection from "./components/StepsSection/StepsSection";
import Tools from "./components/Tools/Tools";
import WorkFlow from "./components/WorkFlow/WorkFlow";

const getToolsDataPromise = async () => {
  const getToolsDatasResponce = await fetch("/Data/toolsData.json");
  return await getToolsDatasResponce.json();
};
const toolsDataPromise = getToolsDataPromise();

function App() {

  const [selectedItems, setSelectedItems] = useState([])
  console.log(selectedItems)

  return (
    <>
      <NavBar selectedItems={selectedItems}/>
      <Hero />
      <StatsSection />
      <Suspense
        fallback={
          <div>
            <span className="loading loading-spinner text-error loading-xl"></span>
          </div>
        }
      >
        <Tools toolsDatasPromise={toolsDataPromise} selectedItems={selectedItems} setSelectedItems={setSelectedItems} />
      </Suspense>

      <StepsSection />
      <Pricing />
      <WorkFlow />
      <Footer />
    </>
  );
}

export default App;
