import { useEffect, useState } from "react";
import { LuCheck } from "react-icons/lu";
import { toast } from "react-toastify";

const ToolCard = ({ toolData, selectedItems, setSelectedItems }) => {
  const [selectedBuyNow, setSelectedBuyNow] = useState(false);
  const manageBuyNow = () => {
    const checkSelected = selectedItems.find(
      (check) => toolData.id == check.id,
    );

    if (checkSelected) {
      toast.error("Item already in cart!");
      return;
    }
    setSelectedBuyNow(true);
    setSelectedItems([...selectedItems, toolData]);
    toast.success("Item added to cart successfully!");
  };

  useEffect(() => {
  selectedItems.map(item => {item.id==toolData.id && setSelectedBuyNow(true)})
},[toolData, selectedItems])

  const { name, description, price, period, tag, tagType, features, icon } =
    toolData;

  const tagStyle =
    tagType === "popular"
      ? "bg-[#E7E9FF] text-[#5B55F7]"
      : tagType === "new"
        ? "bg-[#DDF8E8] text-[#18A34A]"
        : "bg-[#FDEFCB] text-[#BB6A06]";

  return (
    <div className="relative rounded-2xl border-2 border-[#E4E6EB] hover:border-violet-500 transition-colors duration-500 bg-white p-5 md:p-5 lg:p-6 h-full flex flex-col hover:scale-[1.01]">
      <span
        className={`absolute top-4 right-4 rounded-full px-3 py-1 text-xs md:text-sm font-medium ${tagStyle}`}
      >
        {tag}
      </span>

      <div className="h-16 w-16 rounded-full border border-[#E5E7EB] bg-[#F8FAFC] flex items-center justify-center">
        <img src={icon} alt={name} className=" object-contain" />
      </div>

      <h3 className="mt-5 text-3xl md:text-3xl lg:text-4xl font-bold text-[#111827] leading-tight">
        {name}
      </h3>

      <p className="mt-2 text-sm md:text-base text-[#6B7A90] leading-snug">
        {description}
      </p>

      <div className="mt-4 md:mt-5 flex items-end">
        <span className="text-4xl md:text-4xl lg:text-5xl font-bold leading-none text-[#111827]">
          ${price}
        </span>
        <span className="mb-1 ml-1 text-xl md:text-xl lg:text-2xl text-[#6B7A90] capitalize">
          /{period}
        </span>
      </div>

      <ul className="mt-5 md:mt-6 space-y-2 md:space-y-2 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 md:gap-2.5">
            <LuCheck className="mt-0.5 text-lg text-[#22C55E]" />
            <span className="text-sm md:text-[15px] lg:text-base leading-snug text-[#5A6B7E]">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <button
        onClick={manageBuyNow}
        className={`mt-6 md:mt-6 lg:mt-8 w-full rounded-full py-3 md:py-2.5 lg:py-3.5 text-sm md:text-sm lg:text-base font-semibold hover:scale-[1.01]  text-white transition-colors duration-500  ${selectedBuyNow ? "bg-indigo-400 hover:bg-indigo-500" : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:from-[#9514FA] hover:to-[#4F39F6]"}`}
      >
        {selectedBuyNow ? "Added to cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default ToolCard;
