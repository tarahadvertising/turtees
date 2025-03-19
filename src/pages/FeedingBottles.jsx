import { useEffect } from "react";
import { motion } from "framer-motion";

const scalevariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const slideUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const FeedingBottles = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <section className="relative">
        <img
          src="/images/feeding_bottles/banner.webp"
          className="h-72 w-full object-cover lg:h-auto"
        />
        <div className="absolute left-3 top-1/2 w-full -translate-y-1/2 lg:left-0 lg:top-1/3">
          <div className="container mx-auto grid grid-cols-12">
            <motion.div
              className="col-span-7 flex flex-col"
              variants={slideUpVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-center text-2xl font-semibold uppercase leading-snug text-black lg:text-left lg:text-6xl lg:leading-tight">
                Nourish
                <br />
                Every Moment
              </h2>
              <h6 className="mt-1 text-center text-lg leading-snug text-black lg:mt-3 lg:text-left lg:text-4xl">
                Designed for
                <br />
                smooth feeding
              </h6>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="bg-white px-3 pb-3 pt-6 lg:pb-12 lg:pt-12">
        <div className="container mx-auto">
          <h2 className="text-center text-xl font-bold uppercase text-zinc-700 lg:text-5xl">
            Hightlights
          </h2>
          <div className="mt-4 grid grid-cols-2 gap-2 lg:mt-10 lg:gap-12">
            <div className="relative overflow-hidden">
              <img
                className="h-40 w-full transform rounded-xl object-cover transition-transform duration-300 ease-in-out lg:h-auto lg:rounded-3xl lg:hover:scale-105"
                src="/images/feeding_bottles/highlight1.webp"
                alt=""
              />
              <motion.h2
                className="unset left-3 top-9 my-2 flex justify-center text-center text-base font-medium uppercase leading-normal text-primary-800 lg:absolute lg:left-9 lg:my-0 lg:text-left lg:text-4xl"
                variants={scalevariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Borosilicate
                <br />
                Glass Bottle
              </motion.h2>
            </div>
            <div className="relative overflow-hidden">
              <img
                className="h-40 w-full transform rounded-xl object-cover transition-transform duration-300 ease-in-out lg:h-auto lg:rounded-3xl lg:hover:scale-105"
                src="/images/feeding_bottles/highlight2.webp"
                alt=""
              />
              <motion.h2
                className="unset left-3 top-9 my-2 flex justify-center text-center text-base font-medium uppercase leading-normal text-primary-800 lg:absolute lg:left-9 lg:my-0 lg:text-left lg:text-4xl"
                variants={scalevariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                PP Bottle
              </motion.h2>
            </div>
            <div className="relative overflow-hidden">
              <img
                className="h-40 w-full transform rounded-xl object-cover transition-transform duration-300 ease-in-out lg:h-auto lg:rounded-3xl lg:hover:scale-105"
                src="/images/feeding_bottles/highlight3.webp"
                alt=""
              />
              <motion.h2
                className="unset left-3 top-9 my-2 flex justify-center text-center text-base font-medium uppercase leading-normal text-primary-800 lg:absolute lg:left-9 lg:my-0 lg:text-4xl"
                variants={scalevariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                PPSU Bottle
              </motion.h2>
            </div>
            <div className="relative overflow-hidden">
              <img
                className="h-40 w-full transform rounded-xl object-cover transition-transform duration-300 ease-in-out lg:h-auto lg:rounded-3xl lg:hover:scale-105"
                src="/images/feeding_bottles/highlight4.webp"
                alt=""
              />
              <motion.h2
                className="unset left-3 top-9 my-2 flex justify-center text-center text-base font-medium uppercase leading-normal text-primary-800 lg:absolute lg:left-9 lg:my-0 lg:text-left lg:text-4xl"
                variants={scalevariants}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Sipper Bottle
              </motion.h2>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white px-3">
        <div className="container relative mx-auto">
          <img
            src="/images/feeding_bottles/banner2.webp"
            className="h-64 w-full rounded-3xl object-cover object-left lg:h-auto"
          />
          <div className="absolute left-10 top-1/2 w-full -translate-y-1/2">
            <motion.div
              className="col-span-5 flex flex-col"
              variants={slideUpVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-left text-xl font-semibold uppercase leading-snug text-white lg:text-5xl lg:leading-tight">
                Carefully
                <br />
                Packed
              </h2>
              <h6 className="mt-1 text-left text-lg leading-snug text-white lg:mt-3 lg:text-3xl">
                hygienic
                <br />
                feeding bottle
              </h6>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="bg-white px-3 py-6 lg:px-6 lg:py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 rounded-3xl bg-custom-gradient p-2 lg:grid-cols-3 lg:p-6">
            <motion.div
              className="flex flex-col items-center gap-2 p-3 lg:gap-4 lg:p-6"
              variants={slideUpVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img src="/images/feeding_bottles/anti_colic.png" />
              <h3 className="text-2xl font-bold uppercase text-black lg:text-4xl">
                Anti Colic
              </h3>
              <p className="text-center text-xl font-normal leading-snug text-black lg:text-3xl">
                Reduces gas, prevents fussiness, aids digestion
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center gap-2 p-3 lg:gap-4 lg:p-6"
              variants={slideUpVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img src="/images/feeding_bottles/easy_clean.png" />
              <h3 className="text-2xl font-bold uppercase text-black lg:text-4xl">
                Easy Clean
              </h3>
              <p className="text-center text-xl font-normal leading-snug text-black lg:text-3xl">
                Wide neck for easy filling and cleaning
              </p>
            </motion.div>
            <motion.div
              className="flex flex-col items-center gap-2 p-3 lg:gap-4 lg:p-6"
              variants={slideUpVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img src="/images/feeding_bottles/bpa_free.png" />
              <h3 className="text-2xl font-bold uppercase text-black lg:text-4xl">
                BPA Free
              </h3>
              <p className="text-center text-xl font-normal leading-snug text-black lg:text-3xl">
                Safe, non-toxic, durable, eco-friendly, baby approved.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="bg-white px-3">
        <div className="container mx-auto grid grid-cols-12 gap-x-3 lg:gap-x-12">
          <div className="relative col-span-6 lg:col-span-6">
            <img
              src="/images/feeding_bottles/banner3.webp"
              className="w-full rounded-3xl"
            />
            <motion.div
              className="absolute bottom-4 left-4 top-auto w-full -translate-y-1/2 lg:bottom-auto lg:left-10 lg:top-1/2"
              variants={slideUpVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-left text-2xl font-semibold uppercase leading-tight text-white lg:text-5xl">
                Anti Colic
              </h2>
              <h6 className="mt-1 text-left text-lg text-white lg:mt-3 lg:text-3xl">
                Clinically tested
              </h6>
            </motion.div>
          </div>
          <div className="relative col-span-6">
            <img
              src="/images/feeding_bottles/banner4.webp"
              className="w-full rounded-3xl"
            />
            <motion.div
              className="absolute bottom-4 left-4 top-auto w-full -translate-y-1/2 lg:bottom-auto lg:left-10 lg:top-1/2"
              variants={slideUpVariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-left text-2xl font-semibold uppercase leading-tight text-white lg:text-5xl">
                BPA Free
              </h2>
              <h6 className="mt-1 text-left text-lg text-white lg:mt-3 lg:text-3xl">
                Gentle and secure feeding
              </h6>
            </motion.div>
          </div>
        </div>
      </section>
      <section className="bg-white px-3 py-6 lg:py-12">
        <div className="container relative mx-auto">
          <img
            src="/images/feeding_bottles/banner5.webp"
            className="h-40 w-full rounded-3xl object-cover object-center lg:h-auto"
          />
          <div className="absolute left-10 top-1/2 w-full -translate-y-1/2">
            <motion.div
              className="col-span-5 flex flex-col"
              variants={scalevariants}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-left text-xl font-medium uppercase leading-tight text-white lg:text-5xl lg:leading-[1.1]">
                Explore All Baby
                <br />
                Feeding Bottles and
                <br />
                Accessories
              </h2>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FeedingBottles;
