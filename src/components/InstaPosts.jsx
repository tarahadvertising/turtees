const InstaPosts = () => {
  return (
    <section className="bg-primary-50 py-12">
      <div className="container mx-auto">
        <h2 className="mb-5 text-center text-5xl font-bold uppercase text-zinc-700">
          The Edit
        </h2>
        <p className="mx-auto mb-12 w-9/12 text-center text-sm leading-loose text-zinc-500">
          The Edit is here to guide you through this incredible journey. We work
          with parenting experts to offer the advice and support you really
          need, talk to parents about their real-life experiences – plus there’s
          a whole lot of inspiration and escapism too.
        </p>
        <div className="flex w-full gap-x-4">
          <div className="w-1/5">
            <a className="block transform transition-transform duration-300 hover:rotate-[-2deg]">
              <img src="/images/insta_links/1.webp" alt="Instagram Link" />
            </a>
          </div>
          <div className="w-1/5">
            <a className="block transform transition-transform duration-300 hover:rotate-[-2deg]">
              <img src="/images/insta_links/2.webp" />
            </a>
          </div>
          <div className="w-1/5">
            <a className="block transform transition-transform duration-300 hover:rotate-[-2deg]">
              <img src="/images/insta_links/3.webp" />
            </a>
          </div>
          <div className="w-1/5">
            <a className="block transform transition-transform duration-300 hover:rotate-[-2deg]">
              <img src="/images/insta_links/4.webp" />
            </a>
          </div>
          <div className="w-1/5">
            <a className="block transform transition-transform duration-300 hover:rotate-[-2deg]">
              <img src="/images/insta_links/5.webp" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstaPosts;
