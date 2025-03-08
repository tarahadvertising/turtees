import React from "react";

const products = [
  {
    id: 1,
    name: "Manual Breast Pump",
    image: "/images/breast_pumbs/products/1.png",
  },
  {
    id: 2,
    name: "Breast Milk Collector",
    image: "/images/breast_pumbs/products/2.png",
  },
  {
    id: 3,
    name: "Breast Pad",
    image: "/images/breast_pumbs/products/3.png",
  },
  {
    id: 4,
    name: "Silicone Milk Storage",
    image: "/images/breast_pumbs/products/4.png",
  },
  {
    id: 4,
    name: "Milk Storage Holder",
    image: "/images/breast_pumbs/products/5.png",
  },
  {
    id: 4,
    name: "Milk Storage Bag",
    image: "/images/breast_pumbs/products/6.png",
  },
  {
    id: 4,
    name: "Silver Cups 999",
    image: "/images/breast_pumbs/products/7.png",
  },
  {
    id: 4,
    name: "Lactation Massager",
    image: "/images/breast_pumbs/products/8.png",
  },
];

const BreastPumpProducts = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-5 text-center text-4xl font-bold uppercase text-zinc-700">
          Continue to explore breast pumps
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-14 md:grid-cols-4">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col items-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-5/6 object-contain"
              />
              <h3 className="py-4 text-center text-2xl font-medium uppercase text-black">
                {product.name}
              </h3>
              <button className="rounded-3xl bg-primary-500 px-8 py-3 text-xl font-semibold uppercase text-white transition-colors duration-200 hover:bg-primary-600">
                Explore
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BreastPumpProducts;
