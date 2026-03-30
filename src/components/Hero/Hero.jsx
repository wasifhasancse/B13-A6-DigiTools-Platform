import { CiPlay1 } from "react-icons/ci";

const Hero = () => {
  return (
    <div>
      <div className="hero mx-auto min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              Supercharge Your Digital Workflow
            </h1>
            <p className="py-6">
              Access premium AI tools, design assets, templates, and
              productivity software—all in one place. Start creating faster
              today. Explore Products
            </p>
            <div className="flex items-center justify-center gap-4">
              <button className="py-2.5 px-5 bg-linear-to-r from-[#4F39F6] to-[#9514FA] border-2 border-violet-500 rounded-full text-lg text-white font-semibold hover:from-[#9514FA] hover:to-[#4F39F6] transition-colors duration-500">
                Explore Products
              </button>
              <button className="text-lg flex items-center justify-center gap-2.5 py-2.5 px-5 rounded-full border-2 border-violet-500 font-semibold text-violet-600 transition-colors duration-300">
                <CiPlay1 /> Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
