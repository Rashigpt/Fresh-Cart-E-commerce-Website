//import React from "react";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-4 sm:px-10 py-4 sm:py-6 border-b border-slate-100">
      
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-xl bg-orange-500 grid place-content-center">
          🛒
        </div>
        <span className="text-lg sm:text-xl font-bold text-orange-600">FreshCart</span>
      </div>

      <nav className="hidden lg:flex items-center gap-6 xl:gap-10 text-sm font-medium">
        <a href="#" className="text-slate-600">Premium Groceries</a>
        <a href="#" className="text-slate-600">Meal Kits</a>
        <a href="#" className="text-slate-600">Express Delivery</a>
        <a href="#" className="text-slate-600">Weekly Deals</a>
        <a href="#" className="text-slate-600">Customers</a>
      </nav>

      {/* <div className="flex items-center gap-2">
        <button className="lg:hidden p-2 text-slate-600">☰</button>
        <a href="#" className="rounded-full bg-orange-500 text-white px-4 py-2 text-sm">
          Download App
        </a>
      </div>  BEFORE FANCY BUTTON */}
      <div className="flex items-center gap-2">
  
  {/* Mobile Menu */}
  <button className="lg:hidden p-2 text-slate-600 text-xl">
    ☰
  </button>

  {/* Fancy Button */}
  <a
    href="#_"
    className="relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group bg-orange-500"
  >
    <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[0.05]" />

    <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8" />

    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
      Download App
    </span>

    <span className="absolute inset-0 border-2 border-white rounded-full" />
  </a>

</div>

    </header>
  );
};

export default Navbar;