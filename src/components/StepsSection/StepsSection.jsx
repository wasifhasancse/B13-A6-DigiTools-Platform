import { LuBox, LuRocket, LuUserRound } from "react-icons/lu";

const StepsSection = () => {
  return (
    <section className="bg-[#F3F5FA] py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#111827]">
            Get Started In 3 Steps
          </h2>
          <p className="mt-4 text-base md:text-lg text-[#6B7A90]">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-3">
          <div className="relative rounded-2xl border-2 border-zinc-200 bg-white px-6 py-10 md:px-8 md:py-12 text-center">
            <span className="absolute right-5 top-5 h-9 w-9 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-xs font-bold flex items-center justify-center">
              01
            </span>
            <div className="mx-auto h-22 w-22 rounded-full bg-[#EDE4FF] text-[#7C3AED] flex items-center justify-center">
              <LuUserRound className="text-5xl" />
            </div>
            <h3 className="mt-8 text-4xl font-bold text-[#1F2937]">
              Create Account
            </h3>
            <p className="mt-4 text-xl leading-snug text-[#6B7A90]">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>

          <div className="relative rounded-2xl border-2 border-zinc-200 bg-white px-6 py-10 md:px-8 md:py-12 text-center">
            <span className="absolute right-5 top-5 h-9 w-9 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-xs font-bold flex items-center justify-center">
              02
            </span>
            <div className="mx-auto h-22 w-22 rounded-full bg-[#EDE4FF] text-[#7C3AED] flex items-center justify-center">
              <LuBox className="text-5xl" />
            </div>
            <h3 className="mt-8 text-4xl font-bold text-[#1F2937]">
              Choose Products
            </h3>
            <p className="mt-4 text-xl leading-snug text-[#6B7A90]">
              Browse our catalog and select the tools that fit your needs.
            </p>
          </div>

          <div className="relative rounded-2xl border-2 border-zinc-200 bg-white px-6 py-10 md:px-8 md:py-12 text-center">
            <span className="absolute right-5 top-5 h-9 w-9 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-xs font-bold flex items-center justify-center">
              03
            </span>
            <div className="mx-auto h-22 w-22 rounded-full bg-[#EDE4FF] text-[#7C3AED] flex items-center justify-center">
              <LuRocket className="text-5xl" />
            </div>
            <h3 className="mt-8 text-4xl font-bold text-[#1F2937]">
              Start Creating
            </h3>
            <p className="mt-4 text-xl leading-snug text-[#6B7A90]">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </section>

  );
};

export default StepsSection;
