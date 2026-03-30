const NavBar = ({ selectedItems }) => {
  const totalPrice = selectedItems.reduce((sum,item)=>sum+item.price,0)
  return (
    <nav>
      <div className="navbar sticky container mx-auto bg-base-100 shadow-sm px-2 sm:px-4 md:px-5 py-2 min-h-0">
        <div className="navbar-start gap-1 sm:gap-2">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="pr-1.5 sm:pr-2.5 lg:hidden pl-0 hover:text-violet-600 transition-colors duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-56 p-2 shadow"
            >
              <li className="hover:text-violet-600 transition-colors duration-300">
                <a>Products</a>
              </li>
              <li className="hover:text-violet-600 transition-colors duration-300">
                <a>Features</a>
              </li>
              <li className="hover:text-violet-600 transition-colors duration-300">
                <a>Pricing</a>
              </li>
              <li className="hover:text-violet-600 transition-colors duration-300">
                <a>Testimonials</a>
              </li>
              <li className="hover:text-violet-600 transition-colors duration-300">
                <a>FAQ</a>
              </li>
            </ul>
          </div>
          <a className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-xl sm:text-2xl md:text-3xl font-black">
            DigiTools
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg font-medium">
            <li className="hover:text-violet-600 transition-colors duration-300">
              <a>Products</a>
            </li>
            <li className="hover:text-violet-600 transition-colors duration-300">
              <a>Features</a>
            </li>
            <li className="hover:text-violet-600 transition-colors duration-300">
              <a>Pricing</a>
            </li>
            <li className="hover:text-violet-600 transition-colors duration-300">
              <a>Testimonials</a>
            </li>
            <li className="hover:text-violet-600 transition-colors duration-300">
              <a>FAQ</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-1 sm:gap-2 md:gap-4">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle h-9 w-9 sm:h-10 sm:w-10 transition-colors duration-300 hover:text-violet-600"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />{" "}
                </svg>
                <span className="badge badge-sm indicator-item">{selectedItems.length}</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">{selectedItems.length} Items</span>
                <span className="text-info">Subtotal: ${totalPrice}</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
            <button className="text-sm sm:text-base md:text-lg font-semibold hover:text-violet-600 transition-colors duration-300 cursor-pointer hover:scale-[1.01]">
              Login
            </button>
            <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-sm sm:text-base md:text-lg text-white font-semibold px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 whitespace-nowrap hover:from-[#9514FA] hover:to-[#4F39F6] transition-colors duration-500 cursor-pointer hover:scale-[1.01]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
