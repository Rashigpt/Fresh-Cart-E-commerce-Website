const Products = () => {
  return (
    <section className="px-4 py-8 bg-gray-50 dark:bg-gray-950">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
          Featured Products
        </h2>
        <p className="text-gray-600 dark:text-gray-300">
          Discover our best-selling items
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Product 1 */}
        <article className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl border border-gray-200 dark:border-gray-700 shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1 animate-fadeIn">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=600&q=80"
              alt="Fruit Basket"
              className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
            />
            <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              OUTSTANDING
            </span>
          </div>

          <div className="p-4">
            <h3 className="text-lg font-semibold mb-1">Premium Quality Fruits </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Fresh and delicious fruits delivered to your doorstep
            </p>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-md font-bold">$199.99</span>
              <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                🛒
              </button>
            </div>
          </div>
        </article>

        {/* Product 2 */}
        <article className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl border border-gray-200 dark:border-gray-700 shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1 animate-fadeIn delay-100">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=600&q=80"
              alt="Chocolate Gift Pack"
              className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
            />
            <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              OUTSTANDING
            </span>
          </div>

          <div className="p-4">
            <h3 className="text-lg font-semibold mb-1">Chocolate Gift Pack</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              A delightful assortment of premium chocolates
            </p>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-md font-bold">$249.99</span>
              <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                🛒
              </button>
            </div>
          </div>
        </article>

        {/* Product 3 */}
        <article className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-xl border border-gray-200 dark:border-gray-700 shadow-md overflow-hidden transform transition duration-300 hover:shadow-xl hover:-translate-y-1 animate-fadeIn delay-200">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80"
              alt="Tea & Coffee Packs"
              className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
            />
            <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              OUTSTANDING
            </span>
          </div>

          <div className="p-4">
            <h3 className="text-lg font-semibold mb-1">Tea & Coffee Packs</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              A selection of premium teas and coffees for a delightful experience
            </p>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-md font-bold">$129.99</span>
              <button className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                🛒
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Products;
