const Cart = () => {
  return (
    <div className="mt-10 md:mt-12 lg:mt-14 rounded-2xl border border-[#E4E6EB] bg-white p-5 md:p-6 lg:p-8">
      <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#111827]">
        Your Cart
      </h3>

      <div className="mt-5 md:mt-6 lg:mt-7 space-y-4 md:space-y-4 lg:space-y-5">
        <div className="rounded-2xl bg-[#F7F8FC] p-4 md:p-5 lg:p-6 flex items-center justify-between gap-3 md:gap-4">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center">
              <img
                src="https://i.ibb.co.com/C3j31Cc0/operation.png"
                alt="AI Writing Pro"
                className="h-7 w-7 md:h-8 md:w-8 object-contain"
              />
            </div>

            <div>
              <h4 className="text-base md:text-xl lg:text-2xl font-semibold text-[#1F2937]">
                AI Writing Pro
              </h4>
              <p className="mt-1 text-sm md:text-base lg:text-lg text-[#6B7A90]">
                $29
              </p>
            </div>
          </div>

          <button
            type="button"
            className="text-sm md:text-base lg:text-lg font-semibold text-[#FF4F87]"
          >
            Remove
          </button>
        </div>

        <div className="rounded-2xl bg-[#F7F8FC] p-4 md:p-5 lg:p-6 flex items-center justify-between gap-3 md:gap-4">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="h-12 w-12 md:h-14 md:w-14 rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center">
              <img
                src="https://i.ibb.co.com/jPG3tqXS/design-tool.png"
                alt="Design Templates Pack"
                className="h-7 w-7 md:h-8 md:w-8 object-contain"
              />
            </div>

            <div>
              <h4 className="text-base md:text-xl lg:text-2xl font-semibold text-[#1F2937]">
                Design Templates Pack
              </h4>
              <p className="mt-1 text-sm md:text-base lg:text-lg text-[#6B7A90]">
                $49
              </p>
            </div>
          </div>

          <button
            type="button"
            className="text-sm md:text-base lg:text-lg font-semibold text-[#FF4F87]"
          >
            Remove
          </button>
        </div>
      </div>

      <div className="mt-6 md:mt-7 lg:mt-8 flex items-end justify-between gap-3">
        <span className="text-base md:text-lg lg:text-2xl text-[#6B7A90]">
          Total:
        </span>
        <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#111827]">
          $78
        </span>
      </div>

      <button
        type="button"
        className="mt-6 md:mt-7 lg:mt-8 w-full rounded-full py-3 md:py-3 lg:py-4 text-sm md:text-base lg:text-lg font-semibold bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
      >
        Proceed To Checkout
      </button>
    </div>
  );
};

export default Cart;
