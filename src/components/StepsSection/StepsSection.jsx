import { use } from "react";
import StepCard from "./StepCard";

const getStepsDataPromise = async () => {
  const getStepsDataResponce = await fetch("/Data/stepsData.json");
  return await getStepsDataResponce.json();
};
const stepsDataPromise = getStepsDataPromise();

const StepsSection = () => {
  const stepsData = use(stepsDataPromise);

  return (
    <section className="bg-[#F3F5FA] py-10 md:py-14 lg:py-16">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#111827] leading-tight">
            Get Started In 3 Steps
          </h2>
          <p className="mt-3 md:mt-4 text-sm md:text-base lg:text-lg text-[#6B7A90]">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="mt-10 md:mt-12 lg:mt-14 grid grid-cols-1 gap-5 md:gap-6 lg:gap-7 md:grid-cols-3">
          {stepsData.map((stepData) => (
            <StepCard key={stepData.id} stepData={stepData} />
          ))}

        </div>
      </div>
    </section>
  );
};

export default StepsSection;
