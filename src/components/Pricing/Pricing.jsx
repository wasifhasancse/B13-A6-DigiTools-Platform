import { use } from "react";
import PricingCard from "./PricingCard";

const getPricingDatasPromise = async () => {
  const getPricingDatasResponce = await fetch("/Data/pricingData.json");
  return await getPricingDatasResponce.json();
};
const pricingDatasPromise = getPricingDatasPromise();

const Pricing = () => {
  const pricingDatas = use(pricingDatasPromise);
  return (
    <section className="py-10 md:py-16 lg:py-28">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#111827] leading-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-3 md:mt-4 text-sm md:text-base lg:text-lg text-[#6B7A90]">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="mt-10 md:mt-12 lg:mt-14 grid grid-cols-1 gap-5 md:gap-6 lg:gap-7 md:grid-cols-3">
          {pricingDatas.map((pricingData) => (
            <PricingCard key={pricingData.id} pricingData={pricingData} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
