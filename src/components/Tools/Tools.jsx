import { use, useState } from "react";
import Cart from "../Cart/Cart";
import ToolCard from "./ToolCard";

const Tools = ({ toolsDatasPromise, selectedItems, setSelectedItems }) => {
  const [tabSelected, setTabSelected] = useState("products");

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

        <div className="mt-8 md:mt-10 flex justify-center">
          <div className="w-full max-w-72 md:max-w-80 lg:max-w-96 rounded-full border border-[#E5E7EB] bg-[#F9FAFB] p-1 grid grid-cols-2 gap-1">
            <button
              onClick={() => setTabSelected("products")}
              type="button"
              className={`rounded-full px-3 md:px-4 lg:px-5 py-2 md:py-2.5 lg:py-2.5 text-sm md:text-sm lg:text-base font-semibold ${tabSelected=='products'? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white hover:from-[#9514FA] hover:to-[#4F39F6]':'text-[#2F1F58] hover:text-violet-500'} transition-colors duration-500`}
            >
              Products
            </button>

            <button
              onClick={() => setTabSelected("cart")}
              type="button"
              className={`rounded-full px-3 md:px-4 lg:px-5 py-2 md:py-2.5 lg:py-2.5 text-sm md:text-sm lg:text-base font-semibold ${tabSelected=='cart'? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white hover:from-[#9514FA] hover:to-[#4F39F6]':'text-[#2F1F58] hover:text-violet-500'} transition-colors duration-500`}
            >
              Cart ({selectedItems.length})
            </button>
          </div>
        </div>

        {tabSelected == "products" ? (
          <div className="mt-10 md:mt-12 lg:mt-14 grid grid-cols-1 gap-5 md:gap-6 lg:gap-7 md:grid-cols-2 lg:grid-cols-3">
            {toolsData.map((toolData) => (
              <ToolCard
                key={toolData.id}
                toolData={toolData}
                selectedItems={selectedItems}
                setSelectedItems={setSelectedItems}
              />
            ))}
          </div>
        ) : (
          <div>
            <Cart
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Tools;
