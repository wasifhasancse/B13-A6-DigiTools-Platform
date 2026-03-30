import { use } from "react";
import ToolCard from "./ToolCard";

const Tools = ({ toolsDatasPromise }) => {
  const toolsData = use(toolsDatasPromise);
  return (
    <section className="py-10 md:py-16 lg:py-28">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#111827] leading-tight">
            Premium Digital Tools
          </h2>
          <p className="mt-3 w-[70%] mx-auto md:mt-4 text-sm md:text-base lg:text-lg text-[#6B7A90]">
            Choose from our curated collection of premium digital products
            designed to boost your productivity and creativity.
          </p>
        </div>

        <div className="mt-10 md:mt-12 lg:mt-14 grid grid-cols-1 gap-5 md:gap-6 lg:gap-7 md:grid-cols-2 lg:grid-cols-3">
          {toolsData.map((toolData) => (
            <ToolCard key={toolData.id} toolData={toolData} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
