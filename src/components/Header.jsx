import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState("");

  useEffect(() => {
    // Set active menu based on current path
    if (location.pathname === "/") {
      setActiveMenu("home");
    } else if (location.pathname === "/breast-pumbs") {
      setActiveMenu("breast-pumbs");
    } else if (location.pathname === "/feeding-bottles") {
      setActiveMenu("feeding-bottles");
    } else {
      setActiveMenu("");
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`${
        isScrolled
          ? "fixed top-0 z-20 w-full animate-slideDown bg-primary-50 p-4 drop-shadow-md lg:p-6"
          : "relative w-full bg-primary-50 p-3 lg:p-6"
      }`}
    >
      <div className="mx-auto max-w-screen-xl">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-3 md:col-span-4 lg:col-span-2">
            <Link className="block w-11/12 lg:w-4/5" to="/">
              <img
                src="/images/logo.svg"
                alt="Logo"
                className="h-auto w-full"
              />
            </Link>
          </div>
          <div className="col-span-9 md:col-span-4 lg:col-span-10">
            <div className="grid grid-cols-12">
              <div className="relative col-span-10 pl-1 md:col-span-9 md:pl-0">
                <input
                  className="w-full rounded-3xl bg-white px-4 py-3 text-xs placeholder:text-zinc-500 lg:text-sm"
                  type="text"
                  placeholder="What are you looking for"
                />
                <button className="absolute right-4 top-1/2 flex -translate-y-1/2 gap-x-2 lg:right-6">
                  <img className="w-4 lg:w-5" src="/images/icons/search.svg" />
                  <p className="hidden text-sm font-bold text-black lg:block">
                    Search
                  </p>
                </button>
              </div>
              <div className="col-span-3 hidden items-center justify-center space-x-2 text-sm md:flex lg:justify-end">
                <a
                  href=""
                  class="rounded-full bg-primary-700 p-2 transition duration-300 ease-in-out hover:scale-110"
                  target="_blank"
                >
                  <img
                    src="/images/icons/facebook.svg"
                    class="h-5 w-5"
                    alt="facebook icon"
                  />
                </a>
                <a
                  href="#"
                  class="rounded-full bg-primary-700 p-2 transition duration-300 ease-in-out hover:scale-110"
                >
                  <img
                    src="/images/icons/instagram.svg"
                    class="h-5 w-5"
                    alt="instagram icon"
                  />
                </a>
                <a
                  href=""
                  target="_blank"
                  class="rounded-full bg-primary-700 p-2 transition duration-300 ease-in-out hover:scale-110"
                >
                  <img
                    src="/images/icons/youtube.svg"
                    class="h-5 w-5"
                    alt="youtube icon"
                  />
                </a>
                <a
                  href=""
                  class="rounded-full bg-primary-700 p-2 transition duration-300 ease-in-out hover:scale-110"
                  target="_blank"
                >
                  <img
                    src="/images/icons/threads.svg"
                    class="h-5 w-5"
                    alt="threads icon"
                  />
                </a>
              </div>
              <div className="col-span-2 flex justify-end md:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className="bg-transparent text-primary-700 focus:outline-none"
                >
                  {isMobileMenuOpen ? (
                    <svg
                      className="h-10 w-10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  ) : (
                    <svg
                      className="h-10 w-10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                      ></path>
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <nav className="col-span-12 hidden md:col-span-8 md:block lg:col-span-12">
              <div className="mt-6 flex justify-end space-x-5 font-semibold uppercase tracking-[0.25px] text-zinc-600 md:text-base lg:text-sm">
                <Link
                  to="/"
                  className={`transition-colors duration-200 hover:text-black ${
                    activeMenu === "home" ? "text-primary-600" : ""
                  }`}
                >
                  Home
                </Link>
                <Link
                  to="/feeding-bottles"
                  className={`transition-colors duration-200 hover:text-black ${
                    activeMenu === "feeding-bottles" ? "text-primary-600" : ""
                  }`}
                >
                  Feeding Bottles
                </Link>
                <Link
                  to="/breast-pumbs"
                  className={`transition-colors duration-200 hover:text-black ${
                    activeMenu === "breast-pumbs" ? "text-primary-600" : ""
                  }`}
                >
                  Natural Feedings
                </Link>
                <Link
                  to="/"
                  className={`transition-colors duration-200 hover:text-black ${
                    activeMenu === "" ? "text-primary-600" : ""
                  }`}
                >
                  Accessories
                </Link>
                <Link
                  to="/"
                  className={`transition-colors duration-200 hover:text-black ${
                    activeMenu === "" ? "text-primary-600" : ""
                  }`}
                >
                  Nature Skin Care
                </Link>
                <Link
                  to="/"
                  className={`transition-colors duration-200 hover:text-black ${
                    activeMenu === "" ? "text-primary-600" : ""
                  }`}
                >
                  Bath & Diapering
                </Link>
                <Link
                  to="/"
                  className={`transition-colors duration-200 hover:text-black ${
                    activeMenu === "" ? "text-primary-600" : ""
                  }`}
                >
                  Fun Time
                </Link>
                <Link
                  to="/"
                  className={`transition-colors duration-200 hover:text-black ${
                    activeMenu === "" ? "text-primary-600" : ""
                  }`}
                >
                  Travel & Gear
                </Link>
              </div>
            </nav>
            {isMobileMenuOpen && (
              <div
                id="mobile-menu"
                className="absolute left-0 top-full z-10 w-full bg-primary-50 text-sm font-medium text-zinc-600 md:hidden"
              >
                <nav className="flex flex-col">
                  <Link
                    to="/"
                    className={`border-b border-zinc-300 p-3 ${
                      activeMenu === "home" ? "text-primary-600" : ""
                    }`}
                    onClick={closeMobileMenu}
                  >
                    Home
                  </Link>
                  <Link
                    to="/feeding-bottles"
                    className={`border-b border-zinc-300 p-3 ${
                      activeMenu === "feeding-bottles" ? "text-primary-600" : ""
                    }`}
                    onClick={closeMobileMenu}
                  >
                    Feeding Bottles
                  </Link>
                  <Link
                    to="/breast-pumbs"
                    className={`border-b border-zinc-300 p-3 ${
                      activeMenu === "breast-pumbs" ? "text-primary-600" : ""
                    }`}
                    onClick={closeMobileMenu}
                  >
                    Natural Feedings
                  </Link>
                  <Link
                    to="/"
                    className={`border-b border-zinc-300 p-3 ${
                      activeMenu === "" ? "text-primary-600" : ""
                    }`}
                    onClick={closeMobileMenu}
                  >
                    Accessories
                  </Link>
                  <Link
                    to="/"
                    className={`border-b border-zinc-300 p-3 ${
                      activeMenu === "" ? "text-primary-600" : ""
                    }`}
                    onClick={closeMobileMenu}
                  >
                    Nature Skin Care
                  </Link>
                  <Link
                    to="/"
                    className={`border-b border-zinc-300 p-3 ${
                      activeMenu === "" ? "text-primary-600" : ""
                    }`}
                    onClick={closeMobileMenu}
                  >
                    Bath & Diapering
                  </Link>
                  <Link
                    to="/"
                    className={`border-b border-zinc-300 p-3 ${
                      activeMenu === "" ? "text-primary-600" : ""
                    }`}
                    onClick={closeMobileMenu}
                  >
                    Fun Time
                  </Link>
                  <Link
                    to="/"
                    className={`border-b border-zinc-300 p-3 ${
                      activeMenu === "" ? "text-primary-600" : ""
                    }`}
                    onClick={closeMobileMenu}
                  >
                    Travel & Gear
                  </Link>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
