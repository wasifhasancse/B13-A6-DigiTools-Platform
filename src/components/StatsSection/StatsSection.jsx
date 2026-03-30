const StatsSection = () => {
  return (
    <div className="w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-10 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-around gap-8 text-center text-white sm:flex-row sm:gap-0">
          <div className="flex-1">
            <h2 className="text-4xl font-bold md:text-5xl">50K+</h2>
            <p className="mt-4 text-sm md:text-base text-white/80">
              Active Users
            </p>
          </div>

          <div className="hidden sm:block border-l-2 border-white/50 h-16"></div>

          <div className="flex-1">
            <h2 className="text-4xl font-bold md:text-5xl">200+</h2>
            <p className="mt-4 text-sm md:text-base text-white/80">
              Premium Tools
            </p>
          </div>

          <div className="hidden sm:block border-l-2 border-white/50 h-16"></div>

          <div className="flex-1">
            <h2 className="text-4xl font-bold md:text-5xl">4.9</h2>
            <p className="mt-4 text-sm md:text-base text-white/80">Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
