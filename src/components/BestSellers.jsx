import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const scalevariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const products = [
  {
    img: "/images/best_sellers/feeding_bottles.webp",
    title: "Sip & smile",
    subtitle: "Feeding Bottles",
    description:
      "Our baby bottles feature leak-proof technology, easy-to-clean materials, and a natural nipple shape for safe, comfortable feeding.",
    position: "left-0 lg:left-16",
    link: "/breast-pumbs",
    bg: "bg-[#c2bfb8]",
    text: "text-black",
    button: "text-[#c2bfb8]",
  },
  {
    img: "/images/best_sellers/toys.webp",
    title: "Unveiling wonder",
    subtitle: "Toys collections",
    description:
      "Explore our baby toys, designed to stimulate senses, encourage development, and provide hours of safe, colorful fun.",
    position: "right-0 lg:right-16",
    link: "#",
    bg: "bg-[#716d6c]",
    text: "text-white",
    button: "text-[#716d6c]",
  },
  {
    img: "/images/best_sellers/bath_products.webp",
    title: "bubble bliss",
    subtitle: "bath products",
    description:
      "Our baby bath products are gentle, safe, and nourish delicate skin with hypoallergenic ingredients for soothing bath time.",
    position: "left-0 lg:left-16",
    link: "#",
    bg: "bg-[#c2bfb8]",
    text: "text-black",
    button: "text-[#c2bfb8]",
  },
  {
    img: "/images/best_sellers/moms_collection.webp",
    title: "premium",
    subtitle: "mom’s collection",
    description:
      "Our mom’s baby products use natural ingredients, ensuring comfort, safety, and well-being with every gentle, reliable use.",
    position: "right-0 lg:right-16",
    link: "#",
    bg: "bg-[#716d6c]",
    text: "text-white",
    button: "text-[#716d6c]",
  },
  {
    img: "/images/best_sellers/skin_care_products.webp",
    title: "Natural Glow",
    subtitle: "Skin Care products",
    description:
      "Natural care uses pure, gentle ingredients to nourish, protect, and soothe your skin, naturally and safely.",
    position: "left-0 lg:left-16",
    link: "#",
    bg: "bg-[#c2bfb8]",
    text: "text-black",
    button: "text-[#c2bfb8]",
  },
  {
    img: "/images/best_sellers/food_warmer.webp",
    title: "Soft Bites",
    subtitle: "Food Warmer & Processor",
    description:
      "Our baby food processor makes fresh, nutritious purees effortlessly, ensuring healthy, homemade meals for your little one.",
    position: "right-0 lg:right-16",
    link: "#",
    bg: "bg-[#716d6c]",
    text: "text-white",
    button: "text-[#716d6c]",
  },
];

const ProductCard = ({
  img,
  title,
  subtitle,
  description,
  position,
  link,
  bg,
  text,
  button,
}) => (
  <Link
    className="relative transition-transform duration-300 ease-in-out lg:hover:scale-105"
    to={link}
  >
    <img src={img} alt={title} />
    <motion.div
      className={`absolute ${position} -top-9 flex h-[220px] w-1/2 flex-col justify-between rounded-2xl lg:top-16 lg:h-[540px] lg:w-5/12 ${bg} p-3 lg:p-7`}
      variants={scalevariants}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div>
        <h3 className="text-sm font-bold uppercase leading-tight lg:text-5xl lg:leading-snug">
          {title}
        </h3>
        <span className="text-sm font-semibold uppercase leading-tight lg:text-5xl">
          {subtitle}
        </span>
        <p
          className={`mt-1 font-serif text-sm leading-tight lg:mt-3 lg:text-3xl ${text}`}
        >
          {description}
        </p>
      </div>
      <button
        className={`${button} lg-py-2 mt-2 self-start rounded-full bg-white px-3 py-1 text-xs font-bold uppercase transition-colors duration-200 hover:bg-primary-500 hover:text-white lg:mt-0 lg:px-6 lg:text-2xl`}
      >
        Explore
      </button>
    </motion.div>
  </Link>
);

export default function BestSellers() {
  return (
    <div className="flex flex-wrap gap-16 px-3 lg:gap-28 lg:px-10">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
}
