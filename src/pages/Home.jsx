import { useEffect } from "react";
import ProductSlider from "../components/ProductSlider";
import BestSellers from "../components/BestSellers";
import { Link } from "react-router-dom";
import MainProductRail from "../components/MainProductRail";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init();
  }, []);
  return (
    <main>
      <section className="relative">
        <video className="w-full" autoPlay loop muted playsInline>
          <source src="/images/home_banner.mp4" type="video/mp4" />
        </video>
        <div className="absolute bottom-20 flex w-full flex-col items-center">
          <h2 className="text-center text-6xl font-bold uppercase text-white">
            We Make Your Journey Beautiful
          </h2>
          <button className="mt-5 rounded-lg bg-primary-500 px-4 py-2 text-2xl font-semibold uppercase text-white transition-colors duration-200 hover:bg-primary-600">
            Explore
          </button>
        </div>
      </section>
      <MainProductRail />
      <section className="relative">
        <img src="/images/home_section_banner1.webp" className="w-full" />
        <div className="absolute left-0 top-1/2 w-full -translate-y-1/2">
          <div className="container mx-auto grid grid-cols-12">
            <div
              className="col-span-5 flex flex-col items-center"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <h2 className="text-center text-6xl font-semibold uppercase leading-snug text-black">
                Enjoy Smart
                <br />
                Pumbing Life
              </h2>
              <button className="mt-5 rounded-full bg-primary-500 px-12 py-4 text-3xl font-semibold uppercase text-white transition-colors duration-200 hover:bg-primary-600">
                <Link to="/breast-pumbs">Explore More</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary-50 py-12">
        <h2 className="mb-8 text-center text-5xl font-bold uppercase text-zinc-700">
          Featured Products
        </h2>
        <ProductSlider />
      </section>
      <section className="bg-white pb-28 pt-12">
        <div className="container mx-auto">
          <h2 className="mb-5 text-center text-5xl font-bold uppercase text-zinc-700">
            Best Sellers
          </h2>
          <p className="mx-auto mb-12 w-full text-center text-sm leading-loose text-zinc-500">
            Turtees, the epitome of comfort and care for babies, offers a
            comprehensive range of baby essentials. Our feeding bottles are
            designed with precision to provide a seamless feeding experience.
            Engage and stimulate your little one’s development with our
            enchanting toys. For on-the-go convenience, explore our travel gear
            collection. Grooming becomes a joy with our gentle products, while
            bath time is transformed into
          </p>
          <BestSellers />
        </div>
      </section>
      <section className="relative">
        <img src="/images/home_section_banner2.webp" className="w-full" />
        <div className="absolute left-0 top-1/2 w-full -translate-y-1/2">
          <div className="container mx-auto grid grid-cols-12">
            <div className="col-span-5 flex flex-col items-center">
              <h2 className="text-center text-6xl font-semibold uppercase leading-snug text-white">
                Smooth Rides,
                <br />
                Stylish Gear
              </h2>
              <button className="mt-5 rounded-full bg-primary-500 px-12 py-4 text-3xl font-semibold uppercase text-white transition-colors duration-200 hover:bg-primary-600">
                Explore More
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
