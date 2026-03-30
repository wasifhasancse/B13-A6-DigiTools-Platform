const WorkFlow = () => {
  return (
    <section className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-10 md:py-14 lg:py-16 px-4 md:px-6 lg:px-8 text-center text-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-snug">
          Ready To Transform Your Workflow?
        </h2>
        <p className="mt-3 md:mt-4 text-sm md:text-base lg:text-lg text-white/80 leading-relaxed">
          Join thousands of professionals who are already using Digitools to
          work smarter.
          <br className="hidden md:block" /> Start your free trial today.
        </p>

        <div className="mt-7 md:mt-8 lg:mt-9 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
          <button className="w-full md:w-auto px-6 md:px-7 lg:px-8 py-2.5 md:py-3 rounded-full bg-white text-[#4F39F6] font-semibold text-sm md:text-base lg:text-lg hover:bg-white/90 transition-colors duration-300">
            Explore Products
          </button>
          <button className="w-full md:w-auto px-6 md:px-7 lg:px-8 py-2.5 md:py-3 rounded-full border-2 border-white text-white font-semibold text-sm md:text-base lg:text-lg hover:bg-white hover:text-[#4F39F6] transition-colors duration-300">
            View Pricing
          </button>
        </div>

        <p className="mt-5 md:mt-6 text-xs md:text-sm lg:text-base text-white/70">
          14-day free trial &bull; No credit card required &bull; Cancel anytime
        </p>
      </div>
    </section>
  );
};

export default WorkFlow;
