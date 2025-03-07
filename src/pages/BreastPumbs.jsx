const BreastPumbs = () => {
  return (
    <main>
      <section className="relative">
        <img src="/images/breast_pumbs/banner.webp" className="w-full" />
        <div className="absolute left-0 top-1/2 w-full -translate-y-1/2">
          <div className="container mx-auto grid grid-cols-12">
            <div className="col-span-5 flex flex-col items-center">
              <h2 className="text-left text-6xl font-semibold uppercase leading-tight text-primary-900">
                Electric
                <br />
                Breast Pumb
              </h2>
              <h6 className="mt-3 text-left text-4xl text-primary-900">
                enjoy smart pumbing life
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
                src="/images/breast_pumbs/highlight1.webp"
                alt=""
              />
              <h2 className="absolute left-9 top-9 text-4xl font-medium uppercase leading-tight text-primary-800">
                Core Frequency
                <br />
                Conversion
              </h2>
            </div>
            <div className="relative overflow-hidden rounded-3xl">
              <img
                className="transform object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                src="/images/breast_pumbs/highlight2.webp"
                alt=""
              />
              <h2 className="absolute left-9 top-9 text-4xl font-medium uppercase leading-tight text-primary-800">
                4 Modes &<br />
                36 Levels
              </h2>
            </div>
            <div className="relative overflow-hidden rounded-3xl">
              <img
                className="transform object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                src="/images/breast_pumbs/highlight3.webp"
                alt=""
              />
              <h2 className="absolute left-9 top-9 text-4xl font-medium uppercase leading-tight text-primary-800">
                Wearable
                <br />
                Breast
                <br />
                Pumb
              </h2>
            </div>
            <div className="relative overflow-hidden rounded-3xl">
              <img
                className="w-full transform object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                src="/images/breast_pumbs/highlight4.webp"
                alt=""
              />
              <h2 className="absolute left-9 top-9 text-4xl font-medium uppercase leading-tight text-primary-800">
                Intellectual
                <br />
                Remote
                <br />
                Control
              </h2>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="container relative mx-auto">
          <img
            src="/images/breast_pumbs/banner2.webp"
            className="w-full rounded-3xl"
          />
          <div className="absolute left-10 top-10 w-full">
            <div className="col-span-5 flex flex-col">
              <h2 className="text-left text-5xl font-extrabold uppercase text-black">
                APP CONTROL
              </h2>
              <h6 className="mt-3 text-left text-3xl text-black">
                App Control with
                <br />
                Bluetooth Connectivity
              </h6>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white pb-12 pt-12">
        <div className="container mx-auto">
          <h2 className="mb-5 text-center text-4xl font-bold uppercase text-zinc-700">
            Effortless Extraction
          </h2>
          <h6 className="mb-12 text-center text-3xl font-medium uppercase text-zinc-700">
            Upgrade to Efficiency, Upgrade to Portability
          </h6>
          <div className="grid grid-cols-12">
            <div className="col-span-6">
              <video
                className="w-full rounded-3xl"
                autoPlay
                loop
                muted
                playsInline
              >
                <source
                  src="/images/breast_pumbs/banner_video.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="col-span-6 pl-14 pt-10">
              <h2 className="mb-5 text-4xl font-bold uppercase text-zinc-700">
                Free Hands
              </h2>
              <h6 className="mb-12 text-2xl font-medium uppercase text-zinc-700">
                Turtles Wearable Breast Pumb
              </h6>
              <div className="grid grid-cols-1 gap-16">
                <div>
                  <h2 className="text-4xl font-bold uppercase text-primary-700">
                    246G
                  </h2>
                </div>
                <div>
                  <h2 className="text-4xl font-bold uppercase text-primary-700">
                    72 MM
                  </h2>
                  <h6 className="mt-2 text-2xl font-medium uppercase text-zinc-700">
                    Super Thin
                  </h6>
                </div>
                <div>
                  <h2 className="text-4xl font-bold uppercase text-primary-700">
                    160
                  </h2>
                  <h6 className="mt-2 text-2xl font-medium uppercase text-zinc-700">
                    Large Angle
                  </h6>
                </div>
                <div>
                  <h2 className="text-4xl font-bold uppercase text-primary-700">
                    9 Levels
                  </h2>
                  <h6 className="mt-2 text-2xl font-medium uppercase text-zinc-700">
                    Expression Mode
                  </h6>
                </div>
                <div>
                  <h2 className="text-4xl font-bold uppercase text-primary-700">
                    9 Levels
                  </h2>
                  <h6 className="mt-2 text-2xl font-medium uppercase text-zinc-700">
                    Suction Mode
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BreastPumbs;
