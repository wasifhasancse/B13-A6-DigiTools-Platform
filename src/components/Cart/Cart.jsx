const Cart = ({ selectedItems,setSelectedItems }) => {
  const totalPrice = selectedItems.reduce((sum, item) => sum + item.price, 0);

  const manageDelete = (item) => {
    const filterDelete = selectedItems.filter(check => item.id !== check.id)
    setSelectedItems(filterDelete)
  }

  return (
    <div className="mt-10 md:mt-12 lg:mt-14 rounded-2xl border border-[#E4E6EB] bg-white p-4 md:p-5 lg:p-6">
      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#111827]">
        Your Cart
      </h3>

      <div className="mt-4 md:mt-5 lg:mt-6 space-y-3 md:space-y-4 lg:space-y-4">
        {selectedItems.map((item) =>
          <div className="rounded-2xl bg-[#F7F8FC] p-3 md:p-4 lg:p-5 flex items-center justify-between gap-3 md:gap-4">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="h-10 w-10 md:h-11 md:w-11 lg:h-12 lg:w-12 rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="h-6 w-6 md:h-6 md:w-6 lg:h-7 lg:w-7 object-contain"
                />
              </div>

              <div>
                <h4 className="text-sm md:text-lg lg:text-xl font-semibold text-[#1F2937]">
                  {item.name}
                </h4>
                <p className="mt-0.5 text-xs md:text-sm lg:text-base text-[#6B7A90]">
                  ${item.price}
                </p>
              </div>
            </div>

            <button onClick={()=>manageDelete(item)}
              type="button"
              className="text-xs md:text-sm lg:text-base font-semibold text-[#FF4F87]"
            >
              Remove
            </button>
          </div>
        )}
      </div>

      <div className="mt-5 md:mt-6 lg:mt-7 flex items-end justify-between gap-3">
        <span className="text-sm md:text-base lg:text-lg text-[#6B7A90]">
          Total:
        </span>
        <span className="text-2xl md:text-2xl lg:text-3xl font-bold text-[#111827]">
          ${totalPrice}
        </span>
      </div>

      <button
        type="button"
        className="mt-5 md:mt-6 lg:mt-7 w-full rounded-full py-2.5 md:py-3 lg:py-3 text-sm md:text-sm lg:text-base font-semibold bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
      >
        Proceed To Checkout
      </button>
    </div>
  );
};

export default Cart;
