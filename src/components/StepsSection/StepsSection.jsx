import { LuBox, LuRocket, LuUserRound } from "react-icons/lu";

const StepsSection = () => {
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
          <div className="relative rounded-2xl border-2 border-zinc-200 bg-white px-5 py-8 md:px-6 md:py-6 lg:px-8 lg:py-12 text-center">
            <span className="absolute right-4 top-4 md:right-5 md:top-5 h-8 w-8 md:h-9 md:w-9 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-[10px] md:text-xs font-bold flex items-center justify-center">
              01
            </span>
            <div className="mx-auto h-18 w-18 md:h-20 md:w-20 lg:h-22 lg:w-22 rounded-full bg-[#EDE4FF] text-[#7C3AED] flex items-center justify-center">
              <LuUserRound className="text-[36px] md:text-[40px] lg:text-5xl" />
            </div>
            <h3 className="mt-6 md:mt-7 lg:mt-8 text-3xl md:text-3xl lg:text-4xl font-bold text-[#1F2937]">
              Create Account
            </h3>
            <p className="mt-3 md:mt-4 text-base md:text-lg lg:text-xl leading-snug text-[#6B7A90]">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>

          <div className="relative rounded-2xl border-2 border-zinc-200 bg-white px-5 py-8 md:px-6 md:py-6 lg:px-8 lg:py-12 text-center">
            <span className="absolute right-4 top-4 md:right-5 md:top-5 h-8 w-8 md:h-9 md:w-9 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-[10px] md:text-xs font-bold flex items-center justify-center">
              02
            </span>
            <div className="mx-auto h-18 w-18 md:h-20 md:w-20 lg:h-22 lg:w-22 rounded-full bg-[#EDE4FF] text-[#7C3AED] flex items-center justify-center">
              <LuBox className="text-[36px] md:text-[40px] lg:text-5xl" />
            </div>
            <h3 className="mt-6 md:mt-7 lg:mt-8 text-3xl md:text-3xl lg:text-4xl font-bold text-[#1F2937]">
              Choose Products
            </h3>
            <p className="mt-3 md:mt-4 text-base md:text-lg lg:text-xl leading-snug text-[#6B7A90]">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          <div className="relative rounded-2xl border-2 border-zinc-200 bg-white px-5 py-8 md:px-6 md:py-6 lg:px-8 lg:py-12 text-center">
            <span className="absolute right-4 top-4 md:right-5 md:top-5 h-8 w-8 md:h-9 md:w-9 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-[10px] md:text-xs font-bold flex items-center justify-center">
              03
            </span>
            <div className="mx-auto h-18 w-18 md:h-20 md:w-20 lg:h-22 lg:w-22 rounded-full bg-[#EDE4FF] text-[#7C3AED] flex items-center justify-center">
              <LuRocket className="text-[36px] md:text-[40px] lg:text-5xl" />
            </div>
            <h3 className="mt-6 md:mt-7 lg:mt-8 text-3xl md:text-3xl lg:text-4xl font-bold text-[#1F2937]">
              Start Creating
            </h3>
            <p className="mt-3 md:mt-4 text-base md:text-lg lg:text-xl leading-snug text-[#6B7A90]">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
