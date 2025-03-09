import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const products = [
  {
    imgSrc: "/images/product_rails/bath_potty.webp",
    title: "Bath & Potty Time",
    description:
      "Keep your little one clean and comfy with our gentle, safe, and absorbent bath & potty essentials!",
    link: "#",
  },
  {
    imgSrc: "/images/product_rails/breast_pumbs.webp",
    title: "Breast Pumps",
    description:
      "A breast pump helps mothers express, store milk, maintain supply, and offers flexibility for feeding schedules.",
    link: "/breast-pumps",
  },
  {
    imgSrc: "/images/product_rails/feeding bottle.webp",
    title: "Feeding Bottle",
    description:
      "Our feeding bottles are safe, BPA-free, durable, easy to clean, and designed for comfortable feeding.",
    link: "/feeding-bottles",
  },
  {
    imgSrc: "/images/product_rails/baby_rattles.webp",
    title: "Baby Rattles",
    description:
      "Our baby rattles are safe, colorful, lightweight, and designed to stimulate sensory development for infants.",
    link: "#",
  },
];

const MainProductRail = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-white p-10">
      <div className="container mx-auto grid grid-cols-12 gap-x-4">
        {products.map(({ imgSrc, title, description, link }, index) => (
          <div
            key={title}
            className="group col-span-3 transform rounded-2xl p-3 text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-primary-500"
            data-aos="fade-up"
            data-aos-delay={index * 200}
          >
            <img className="w-full rounded-2xl" src={imgSrc} alt={title} />
            <h2 className="mt-5 text-xl font-bold uppercase text-black">
              {title}
            </h2>
            <p className="mt-2 font-serif text-lg leading-snug text-black">
              {description}
            </p>
            <button className="my-3 rounded-3xl bg-primary-500 px-5 py-2 text-sm font-bold uppercase group-hover:bg-white group-hover:text-primary-500">
              <Link to={link}>Explore More</Link>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MainProductRail;
