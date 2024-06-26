import { useState } from "react";
import Cart from "../../cart/cart";
import "./navbar.css";
import DeactiveOverlay from "../../deactiveOverlay/deactiveOverlay";
import SearchBar from "../../searchBar/searchBar";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <nav className="bg-secondary3 ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo and Hamburger Menu */}
          <section className="flex items-center space-x-4 sm:space-x-0 sd:space-x-0 sm:justify-start">
            <a
              href="#"
              className="brand-logo flex items-center sm:order-second"
            ></a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="justify-between space-x-1 flex text-primary2 sm:order-first sd:order-first sm:pr-2 sd:pr-2  pt-2"
            >
              <svg
                className="w-7 h-7 text-current"
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
              <span className=" font-bold font-headline align-baseline text-lg sm:hidden sd:hidden text-primary2 hover:underline">
                Meny
              </span>
            </button>
            <div className="flex flex-row pt-2 sd:hidden sm:hidden md:hidden space-x-4">
              <a
                href="#"
                className="font-headline font-bold text-base text-primary2 hover:text-secondary2 pt-1"
              >
                Kategorier
              </a>
              <a
                href="#"
                className="font-headline font-bold text-base text-primary2 hover:text-secondary2 pt-1"
              >
                Auktioner
              </a>
            </div>
          </section>

          {/* Search Bar - Center */}
          <section className="block sd:hidden sm:hidden md:hidden flex-1 mx-10">
            <SearchBar />
          </section>

          {/* Favorite and Cart Icons */}
          <div className="flex items-center space-x-4">
            <a href="#" className="favorite-logo"></a>
            <Cart />
          </div>
        </div>

        {/* Mobile Menu */}
        <DeactiveOverlay
          isActive={isMobileMenuOpen}
          setIsActive={setIsMobileMenuOpen}
          autoDismiss={false}
        />
        <aside
          className={`fixed inset-y-0 left-0 transform ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out bg-secondary3 z-50 w-full sd:w-3/4 sm:w-2/4 md:w-2/5 lg:w-2/6 xl:w-1/4 2xl:w-1/4`}
        >
          {/* Container for the Close Button */}
          <section className="flex justify-end">
            {/* Close Button */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-4 text-primary3 hover:text-primary3"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </section>
          <a
            href="#"
            className="block py-4 px-4 text-lg text-primary3 hover:bg-gray-400"
          >
            Kategorier
          </a>
          <a
            href="#"
            className="block py-4 px-4 text-lg text-primary3 hover:bg-gray-400"
          >
            Auktioner
          </a>
          <a
            href="#"
            className="block py-4 px-4 text-lg text-primary3 hover:bg-gray-400"
          >
            Sälja hos oss
          </a>
          <a
            href="#"
            className="block py-4 px-4 text-lg text-primary3 hover:bg-gray-400"
          >
            Om oss
          </a>
          <a
            href="#"
            className="block py-4 px-4 text-lg text-primary3 hover:bg-gray-400"
          >
            Kundservice
          </a>
        </aside>
      </div>
    </nav>
  );
}

export default Navbar;
