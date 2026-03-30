import { LuCheck } from "react-icons/lu";

const PricingCard = ({ pricingData }) => {
  const { plan, subtitle, price, features, buttonText, highlighted, badge } =
    pricingData;

  return (
    <div
      className={`relative rounded-2xl border-2 hover:border-violet-500 hover:scale-[1.01] transition-colors duration-500 p-5 md:p-5 lg:p-7 h-full flex flex-col ${
        highlighted
          ? "bg-linear-to-br from-[#4F39F6] to-[#9514FA] border-transparent text-white"
          : "bg-[#F3F5FA] border-[#E4E6EB] text-[#1F2937]"
      }`}
    >
      {badge && (
        <span className="absolute -top-3 md:-top-2.5 lg:-top-6 left-1/2 -translate-x-1/2 rounded-full bg-[#FEF3C6] px-4 md:px-3.5 lg:px-4 py-1.5 md:py-1 lg:py-1.5 text-xs lg:text-lg font-medium text-[#BB4D00] whitespace-nowrap">
          {badge}
        </span>
      )}

      <h3 className="text-3xl md:text-[34px] lg:text-4xl font-bold">{plan}</h3>
      <p
        className={`mt-1.5 md:mt-2 text-sm ${highlighted ? "text-white/85" : "text-[#6B7A90]"}`}
      >
        {subtitle}
      </p>

      <div className="mt-4 md:mt-5 flex items-end">
        <span className="text-5xl md:text-5xl lg:text-6xl font-bold leading-none">
          ${price}
        </span>
        <span
          className={`mb-1 ml-1 text-xl md:text-xl lg:text-2xl ${highlighted ? "text-white/80" : "text-[#6B7A90]"}`}
        >
          /Month
        </span>
      </div>

      <ul className="mt-5 md:mt-6 space-y-2 md:space-y-2 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 md:gap-2.5">
            <LuCheck
              className={`mt-0.5 text-lg ${
                highlighted ? "text-white" : "text-[#22C55E]"
              }`}
            />
            <span
              className={`text-sm md:text-[15px] lg:text-base leading-snug ${highlighted ? "text-white/95" : "text-[#5A6B7E]"}`}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <button
        className={`mt-6 md:mt-6 lg:mt-8 w-full rounded-full py-3 md:py-2.5 lg:py-3.5 text-sm md:text-sm lg:text-base font-semibold hover:scale-[1.01] transition-colors duration-500 ${
          highlighted
            ? "bg-white text-[#5A2CF1] hover:bg-white/90"
            : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white hover:from-[#9514FA] hover:to-[#4F39F6]"
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default PricingCard;
