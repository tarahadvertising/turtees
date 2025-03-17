import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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
    link: "/breast-pumbs",
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

const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: index * 0.2 },
  }),
};

const MainProductRail = () => {
  return (
    <section className="bg-white p-3 lg:p-10">
      <div className="container mx-auto grid grid-cols-12 gap-x-1 lg:gap-x-4">
        {products.map(({ imgSrc, title, description, link }, index) => (
          <motion.div
            key={title}
            className="col-span-6 lg:col-span-3"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={index}
          >
            <Link to={link}>
              <div className="group transform rounded-2xl p-1 text-center transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-primary-500 lg:p-3">
                <img className="w-full rounded-2xl" src={imgSrc} alt={title} />
                <h2 className="mt-5 text-base font-bold uppercase text-black lg:text-xl">
                  {title}
                </h2>
                <p className="mt-2 font-serif text-base leading-snug text-black lg:text-lg">
                  {description}
                </p>
                <button className="my-3 rounded-3xl bg-primary-500 px-5 py-2 text-xs font-bold uppercase group-hover:bg-white group-hover:text-primary-500 lg:text-sm">
                  Explore More
                </button>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MainProductRail;
