const StepCard = ({ stepData }) => {
  return (
    <div className="relative rounded-2xl border-2 border-zinc-200 bg-white px-5 py-8 md:px-6 md:py-6 lg:px-8 lg:py-12 text-center">
      <span className="absolute right-4 top-4 md:right-5 md:top-5 h-8 w-8 md:h-9 md:w-9 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-md md:text-lg font-bold flex items-center justify-center">
        {stepData.id}
      </span>
      <div className="mx-auto p-5 h-20 w-20 md:h-20 md:w-20 lg:h-24 lg:w-24 rounded-full bg-[#EDE4FF] text-[#7C3AED] flex items-center justify-center">
        <img src={stepData.image} alt={stepData.title} />
      </div>
      <h3 className="mt-6 md:mt-7 lg:mt-8 text-3xl md:text-3xl lg:text-4xl font-bold text-[#1F2937]">
        {stepData.title}
      </h3>
      <p className="mt-3 md:mt-4 text-base md:text-lg lg:text-xl leading-snug text-[#6B7A90]">
        {stepData.description}
      </p>
    </div>
  );
};

export default StepCard;
