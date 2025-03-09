import { Link } from "react-router-dom";

const products = [
  {
    img: "/images/best_sellers/feeding_bottles.webp",
    title: "Sip & smile",
    subtitle: "Feeding Bottles",
    description:
      "Our baby bottles feature leak-proof technology, easy-to-clean materials, and a natural nipple shape for safe, comfortable feeding.",
    position: "left-16",
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
    position: "right-16",
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
    position: "left-16",
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
    position: "right-16",
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
    position: "left-16",
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
    position: "right-16",
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
  <div className="relative transition-transform duration-300 ease-in-out hover:scale-105">
    <img src={img} alt={title} />
    <div
      className={`absolute ${position} top-16 flex h-[540px] w-5/12 flex-col justify-between rounded-3xl ${bg} p-7`}
    >
      <div>
        <h3 className="text-5xl font-bold uppercase">{title}</h3>
        <span className="text-5xl font-semibold uppercase">{subtitle}</span>
        <p className={`mt-3 font-serif text-3xl ${text}`}>{description}</p>
      </div>
      <Link
        to={link}
        className={`${button} self-start rounded-full bg-white px-6 py-2 text-2xl font-bold uppercase transition-colors duration-200 hover:bg-primary-500 hover:text-white`}
      >
        Explore
      </Link>
    </div>
  </div>
);

export default function BestSellers() {
  return (
    <div className="flex flex-wrap gap-28 px-10">
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
}
