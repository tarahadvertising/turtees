import { useEffect } from "react";
import ProductSlider from "../components/ProductSlider";
import BestSellers from "../components/BestSellers";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
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
      <section className="bg-white p-10">
        <div className="container mx-auto grid grid-cols-12 gap-x-4">
          <div className="group col-span-3 transform rounded-2xl p-3 text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-primary-500">
            <img
              className="h-72 w-full rounded-2xl"
              src="/images/product_rails/bath_potty.webp"
            />
            <h2 className="mt-5 text-xl font-bold uppercase text-black">
              Potty Seat
            </h2>
            <p className="mt-2 font-serif text-lg leading-snug text-black">
              Keep your little one clean and comfy with our gentle, safe, and
              absorbent bath & potty essentials!
            </p>
            <button className="my-3 rounded-3xl bg-primary-500 px-5 py-2 text-sm font-bold uppercase group-hover:bg-white group-hover:text-primary-500">
              Explore More
            </button>
          </div>
          <div className="group col-span-3 transform rounded-2xl p-3 text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-primary-500">
            <img
              className="h-72 w-full rounded-2xl"
              src="/images/product_rails/breast_pumbs.webp"
            />
            <h2 className="mt-5 text-xl font-bold uppercase text-black">
              Breast Pumps
            </h2>
            <p className="mt-2 font-serif text-lg leading-snug text-black">
              A breast pump helps mothers express, store milk, maintain supply,
              and offers flexibility for feeding schedules, convenience, and
              returning to work easily.
            </p>
            <button className="my-3 rounded-3xl bg-primary-500 px-5 py-2 text-sm font-bold uppercase group-hover:bg-white group-hover:text-primary-500">
              Explore More
            </button>
          </div>
          <div className="group col-span-3 transform rounded-2xl p-3 text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-primary-500">
            <img
              className="h-72 w-full rounded-2xl"
              src="/images/product_rails/feeding bottle.webp"
            />
            <h2 className="mt-5 text-xl font-bold uppercase text-black">
              Feeding Bottle
            </h2>
            <p className="mt-2 font-serif text-lg leading-snug text-black">
              Our feeding bottles are safe, BPA-free, durable, easy to clean,
              and designed for comfortable feeding, ensuring a natural and
              smooth experience.
            </p>
            <button className="my-3 rounded-3xl bg-primary-500 px-5 py-2 text-sm font-bold uppercase group-hover:bg-white group-hover:text-primary-500">
              Explore More
            </button>
          </div>
          <div className="group col-span-3 transform rounded-2xl p-3 text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-primary-500">
            <img
              className="h-72 w-full rounded-2xl"
              src="/images/product_rails/baby_rattles.webp"
            />
            <h2 className="my-5 text-xl font-bold uppercase text-black">
              Baby Rattles
            </h2>
            <p className="mt-2 font-serif text-lg leading-snug text-black">
              Our baby rattles are safe, colorful, lightweight, and designed to
              stimulate sensory development, encourage grasping, and provide
              endless fun for infants.
            </p>
            <button className="my-3 rounded-3xl bg-primary-500 px-5 py-2 text-sm font-bold uppercase group-hover:bg-white group-hover:text-primary-500">
              Explore More
            </button>
          </div>
        </div>
      </section>
      <section className="relative">
        <img src="/images/home_section_banner1.webp" className="w-full" />
        <div className="absolute left-0 top-1/2 w-full -translate-y-1/2">
          <div className="container mx-auto grid grid-cols-12">
            <div className="col-span-5 flex flex-col items-center">
              <h2 className="text-center text-6xl font-semibold uppercase leading-snug text-black">
                Enjoy Smart
                <br />
                Pumbing Life
              </h2>
              <button className="mt-5 rounded-full bg-primary-500 px-12 py-4 text-3xl font-semibold uppercase text-white transition-colors duration-200 hover:bg-primary-600">
                Explore More
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
      <section className="bg-primary-50 py-12">
        <div className="container mx-auto">
          <h2 className="mb-5 text-center text-5xl font-bold uppercase text-zinc-700">
            The Edit
          </h2>
          <p className="mx-auto mb-12 w-9/12 text-center text-sm leading-loose text-zinc-500">
            The Edit is here to guide you through this incredible journey. We
            work with parenting experts to offer the advice and support you
            really need, talk to parents about their real-life experiences –
            plus there’s a whole lot of inspiration and escapism too.
          </p>
          <div className="flex w-full gap-x-4">
            <div className="w-1/5">
              <a className="block transform transition-transform duration-300 hover:rotate-[-2deg]">
                <img src="/images/insta_links/1.webp" alt="Instagram Link" />
              </a>
            </div>
            <div className="w-1/5">
              <a className="block transform transition-transform duration-300 hover:rotate-[-2deg]">
                <img src="/images/insta_links/1.webp" />
              </a>
            </div>
            <div className="w-1/5">
              <a className="block transform transition-transform duration-300 hover:rotate-[-2deg]">
                <img src="/images/insta_links/1.webp" />
              </a>
            </div>
            <div className="w-1/5">
              <a className="block transform transition-transform duration-300 hover:rotate-[-2deg]">
                <img src="/images/insta_links/1.webp" />
              </a>
            </div>
            <div className="w-1/5">
              <a className="block transform transition-transform duration-300 hover:rotate-[-2deg]">
                <img src="/images/insta_links/1.webp" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
