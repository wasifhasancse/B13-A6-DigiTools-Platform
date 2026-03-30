import { CiPlay1 } from "react-icons/ci";

const Hero = () => {
  return (
    <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-8 lg:gap-10 py-10 md:py-14 lg:py-16">
      <div className="space-y-5 order-2 md:order-1">
        <div className="inline-flex items-center gap-2.5 bg-[#E1E7FF] py-2 px-3.5 rounded-full">
          <span className="relative flex items-center justify-center">
            <span className="absolute w-3 h-3 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] animate-ping"></span>
            <span className="absolute w-2 h-2 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] animate-ping [animation-delay:0.2s] opacity-75"></span>
            <span className="absolute w-1 h-1 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] animate-ping [animation-delay:0.8s] opacity-50"></span>
            <span className="w-2 h-2 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA]"></span>
          </span>
          <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-medium text-xs md:text-sm">
            New: AI-Powered Tools Available
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-[#111827] leading-tight">
          Supercharge Your Digital Workflow
        </h1>

        <p className="text-sm lg:text-base text-gray-500 leading-relaxed max-w-md">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-3 lg:gap-4">
          <button className="py-3 px-6 md:py-2.5 md:px-5 lg:py-3 lg:px-6 bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white font-semibold text-sm md:text-sm lg:text-base hover:from-[#9514FA] hover:to-[#4F39F6] hover:scale-[1.01] transition-colors duration-500 cursor-pointer">
            Explore Products
          </button>
          <button className=" flex items-center justify-center gap-2 py-3 px-6 md:py-2.5 md:px-5 lg:py-3 lg:px-6 rounded-full border-2 border-violet-500 font-semibold text-sm md:text-sm lg:text-base text-violet-600 hover:bg-violet-50 hover:scale-[1.01] transition-colors duration-300 cursor-pointer">
            <CiPlay1 className="text-lg" /> <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">Watch Demo</span>
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center md:justify-end order-1 md:order-2">
        <img
          src="https://i.ibb.co.com/FbDFMgy5/banner.png"
          className="w-full max-w-70 md:max-w-90 lg:max-w-md rounded-2xl object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
