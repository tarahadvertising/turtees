import { useEffect } from "react";
const FeedingBottles = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main>
      <section className="relative">
        <img src="/images/feeding_bottles/banner.webp" className="w-full" />
        <div className="absolute left-0 top-1/3 w-full -translate-y-1/2">
          <div className="container mx-auto grid grid-cols-12">
            <div className="col-span-5 flex flex-col">
              <h2 className="text-left text-6xl font-semibold uppercase leading-tight text-black">
                Nourish
                <br />
                Every Moment
              </h2>
              <h6 className="mt-3 text-left text-4xl leading-snug text-black">
                Designed for
                <br />
                smooth feeding
              </h6>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white pb-12 pt-12">
        <div className="container mx-auto">
          <h2 className="mb-5 text-center text-5xl font-bold uppercase text-zinc-700">
            Hightlights
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-12">
            <div className="relative overflow-hidden rounded-3xl">
              <img
                className="w-full transform object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                src="/images/feeding_bottles/highlight1.webp"
                alt=""
              />
              <h2 className="absolute left-9 top-9 text-4xl font-medium uppercase leading-tight text-primary-800">
                Borosilicate
                <br />
                Glass Bottle
              </h2>
            </div>
            <div className="relative overflow-hidden rounded-3xl">
              <img
                className="transform object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                src="/images/feeding_bottles/highlight2.webp"
                alt=""
              />
              <h2 className="absolute left-9 top-9 text-4xl font-medium uppercase leading-tight text-primary-800">
                PP Bottle
              </h2>
            </div>
            <div className="relative overflow-hidden rounded-3xl">
              <img
                className="transform object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                src="/images/feeding_bottles/highlight3.webp"
                alt=""
              />
              <h2 className="absolute left-9 top-9 text-4xl font-medium uppercase leading-tight text-primary-800">
                PPSU Bottle
              </h2>
            </div>
            <div className="relative overflow-hidden rounded-3xl">
              <img
                className="w-full transform object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                src="/images/feeding_bottles/highlight4.webp"
                alt=""
              />
              <h2 className="absolute left-9 top-9 text-4xl font-medium uppercase leading-tight text-primary-800">
                Sipper Bottle
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="container relative mx-auto">
          <img
            src="/images/feeding_bottles/banner2.webp"
            className="w-full rounded-3xl"
          />
          <div className="absolute left-10 top-1/2 w-full -translate-y-1/2">
            <div className="col-span-5 flex flex-col">
              <h2 className="text-left text-5xl font-semibold uppercase leading-tight text-white">
                Carefully
                <br />
                Packed
              </h2>
              <h6 className="mt-3 text-left text-3xl leading-snug text-white">
                hygienic
                <br />
                feeding bottle
              </h6>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white px-6 py-12">
        <div className="container mx-auto">
          <div className="bg-custom-gradient grid grid-cols-3 rounded-3xl p-6">
            <div className="flex flex-col items-center gap-4 p-6">
              <img src="/images/feeding_bottles/anti_colic.png" />
              <h3 className="text-4xl font-bold uppercase text-black">
                Anti Colic
              </h3>
              <p className="text-center text-3xl font-normal leading-snug text-black">
                Reduces gas, prevents fussiness, aids digestion
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 p-6">
              <img src="/images/feeding_bottles/easy_clean.png" />
              <h3 className="text-4xl font-bold uppercase text-black">
                Easy Clean
              </h3>
              <p className="text-center text-3xl font-normal leading-snug text-black">
                Wide neck for easy filling and cleaning
              </p>
            </div>
            <div className="flex flex-col items-center gap-4 p-6">
              <img src="/images/feeding_bottles/bpa_free.png" />
              <h3 className="text-4xl font-bold uppercase text-black">
                BPA Free
              </h3>
              <p className="text-center text-3xl font-normal leading-snug text-black">
                Safe, non-toxic, durable, eco-friendly, baby approved.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="container mx-auto grid grid-cols-12 gap-x-12">
          <div className="relative col-span-6">
            <img
              src="/images/feeding_bottles/banner3.webp"
              className="w-full rounded-3xl"
            />
            <div className="absolute left-10 top-1/2 w-full -translate-y-1/2">
              <h2 className="text-left text-5xl font-semibold uppercase leading-tight text-white">
                Anti Colic
              </h2>
              <h6 className="mt-3 text-left text-3xl text-white">
                Clinically tested
              </h6>
            </div>
          </div>
          <div className="relative col-span-6">
            <img
              src="/images/feeding_bottles/banner4.webp"
              className="w-full rounded-3xl"
            />
            <div className="absolute left-10 top-1/4 w-full -translate-y-1/2">
              <h2 className="text-left text-5xl font-semibold uppercase leading-tight text-black">
                BPA Free
              </h2>
              <h6 className="mt-3 text-left text-3xl text-black">
                Gentle and secure feeding
              </h6>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-12">
        <div className="container relative mx-auto">
          <img
            src="/images/feeding_bottles/banner5.webp"
            className="w-full rounded-3xl"
          />
          <div className="absolute left-10 top-1/2 w-full -translate-y-1/2">
            <div className="col-span-5 flex flex-col">
              <h2 className="text-left text-5xl font-medium uppercase leading-[1.1] text-white">
                Explore All Baby
                <br />
                Feeding Bottles and
                <br />
                Accessories
              </h2>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FeedingBottles;
