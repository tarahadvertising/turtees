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
      <div className="container mx-auto grid grid-cols-12 gap-x-1 gap-y-5 lg:gap-x-4 lg:gap-y-0">
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
              <div className="group grid transform gap-y-3 rounded-2xl p-1 text-center transition-transform duration-300 ease-in-out lg:p-3 lg:hover:scale-105 lg:hover:bg-primary-500">
                <img
                  className="mb-3 w-full rounded-2xl"
                  src={imgSrc}
                  alt={title}
                />
                <h2 className="text-sm font-bold uppercase text-black lg:text-xl">
                  {title}
                </h2>
                <p className="font-serif text-sm leading-snug text-black lg:text-lg">
                  {description}
                </p>
                <button className="mx-auto w-auto rounded-3xl bg-primary-500 px-4 py-2 text-xs font-bold uppercase lg:text-sm lg:group-hover:bg-white lg:group-hover:text-primary-500">
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
