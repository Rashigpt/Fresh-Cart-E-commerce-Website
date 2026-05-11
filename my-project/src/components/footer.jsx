const Footer = () => {
  return (
    <footer className="pt-10 bg-gray-800">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">

        {/* Newsletter Section */}
        <div className="flex justify-between items-center gap-12 md:flex-row flex-col">
          <div className="flex-1 max-w-lg">
            <h3 className="text-white text-2xl font-bold">
              Get our Daily Fresh Groceries ans New Arrivals updates straight to your inbox.
            </h3>
          </div>

          <div className="flex items-center mt-6 md:mt-0 gap-4">
            <div className="relative w-full md:w-64">
              <svg
                className="w-6 h-6 text-gray-400 absolute left-3 inset-y-0 my-auto"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5M2.25 6.75v10.5M3.75 6.75h16.5"
                />
              </svg>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-12 pr-3 py-2 text-gray-500 bg-white outline-none border focus:border-amber-600 shadow-sm rounded-lg"
              />
            </div>

            <button className="py-3 px-4 font-medium text-sm text-white bg-amber-600 hover:bg-amber-500 active:bg-amber-700 rounded-lg shadow">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          
          <ul className="space-y-4 text-gray-300">
            <h4 className="text-gray-200 font-semibold sm:pb-2">Resources</h4>
            <li><a href="#" className="hover:text-gray-400">Contact</a></li>
            <li><a href="#" className="hover:text-gray-400">Support</a></li>
            <li><a href="#" className="hover:text-gray-400">Documentation</a></li>
            <li><a href="#" className="hover:text-gray-400">Pricing</a></li>
          </ul>

          <ul className="space-y-4 text-gray-300">
            <h4 className="text-gray-200 font-semibold sm:pb-2">About</h4>
            <li><a href="#" className="hover:text-gray-400">Terms</a></li>
            <li><a href="#" className="hover:text-gray-400">License</a></li>
            <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-gray-400">About Fresh Cart</a></li>
          </ul>

          <ul className="space-y-4 text-gray-300">
            <h4 className="text-gray-200 font-semibold sm:pb-2">Explore</h4>
            <li><a href="#" className="hover:text-gray-400">Showcase</a></li>
            <li><a href="#" className="hover:text-gray-400">Roadmap</a></li>
            <li><a href="#" className="hover:text-gray-400">Languages</a></li>
            <li><a href="#" className="hover:text-gray-400">Blog</a></li>
          </ul>

          <ul className="space-y-4 text-gray-300">
            <h4 className="text-gray-200 font-semibold sm:pb-2">Company</h4>
            <li><a href="#" className="hover:text-gray-400">Partners</a></li>
            <li><a href="#" className="hover:text-gray-400">Team</a></li>
            <li><a href="#" className="hover:text-gray-400">Careers</a></li>
          </ul>

        </div>

        {/* Bottom Footer */}
        <div className="mt-10 py-10 border-t border-gray-700 flex items-center justify-between sm:flex-row flex-col">
          <p className="text-gray-300">
            © 2025 Fresh Cart. All rights reserved.
          </p>

          
        </div>
        {/* <!-- Footer Right: Social Media & Contact -->
            <div className="flex items-right gap-4 mt-4">
                <h3 class="text-lg font-semibold text-white">Follow Us</h3>
                <div class="mt-4 flex space-x-4">
                    <a href="#" class="text-gray-400 hover:text-gray-300 transition">
                        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zM12 7c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path>
                        </svg>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-gray-300 transition">
                        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10 10-4.48 10-10zm-14 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm6 6h-4v-4h4v4zm0-6h-4V9h4v3z"></path>
                        </svg>
                    </a>
                    <a href="#" class="text-gray-400 hover:text-gray-300 transition">
                        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 15l-3 3-3-3h2v-4h2v4h2zM12 4c4.41 0 8 3.59 8 8s-3.59 8-8 8S4 12.41 4 8s3.59-8 8-8zM12 7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
                        </svg>
                    </a>
                </div>
                <p class="mt-4 text-gray-400 text-sm">Email: support@FreshCart.com</p>
            </div> */}

      </div>
    </footer>
  );
};

export default Footer;