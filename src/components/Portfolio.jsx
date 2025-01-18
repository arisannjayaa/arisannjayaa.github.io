const portfolio = () => {
  return (
    <section id="portfolio">
      <div style={{ zIndex: 21 }}
        className="w-full
        lg:p-24
        relative
        overflow-hidden
        block
        p-5
        
        before:bg-[url('/src/assets/hero.png')]
        before:bg-cover
        before:bg-no-repeat
        before:bg-center

        before:content-['']
        before:absolute
        before:inset-0
        before:block
        bg-gradient-to-b
        from-[#11435E]
        to-[#071F2C]
        before:opacity-10
        bg-blend-color-dodge
        before:z-[-1]"
      >
        <div className="lg:container lg:mx-auto">
          <h1 className="lg:text-5xl text-4xl font-bold text-white mb-5 text-left">
            Portfolio
          </h1>
        </div>
        <div className="container portfolio-wrap mx-auto lg:flex w-full h-full gap-10 mb-10">
          <div className="portfolio-card lg:w-6/12 w-full lg:mb-0 mb-5">
            <div
              style={{ aspectRatio: "16/9" }}
              className=" bg-gradient-to-r from-[#11435E] to-[#248BC3]  p-[3px] rounded-2xl"
            >
              <div className="flex bg-[#071F2C] w-full h-full rounded-2xl p-10"></div>
            </div>
          </div>
          <div className="lg:w-6/12 w-full">
            <div className="mb-3">
              <div className="">
                <div className="mb-5">
                  <ul className="flex gap-5 tag-stack-list">
                    <li className="bg-white lg:px-5 px-3 py-2 lg:py-3 rounded-full lg:text-xl text-sm font-semibold text-[#11435E]">
                      Codeigniter
                    </li>
                    <li className="bg-white lg:px-5 px-3 py-2 lg:py-3 rounded-full lg:text-xl text-sm font-semibold text-[#11435E]">
                      Mysql
                    </li>
                    <li className="bg-white lg:px-5 px-3 py-2 lg:py-3 rounded-full lg:text-xl text-sm font-semibold text-[#11435E]">
                      PHP
                    </li>
                  </ul>
                </div>
                <div>
                  <h1 className="lg:text-4xl text-3xl font-bold text-white mb-3">
                    E-Commerce Bu Jem Jem
                  </h1>
                  <p className="lg:text-lg text-base text-white">
                    Bu Jem Jem is an e-commerce platform that provides
                    high-quality fresh fruits and vegetables to meet customers
                    daily needs. With a user-friendly interface, Bu Jem Jem
                    makes it easy for customers to choose the best products at
                    affordable prices, ensuring freshness from farmers directly
                    to consumers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container portfolio-wrap mx-auto lg:flex w-full h-full gap-10 mb-10">
          <div className="portfolio-card lg:w-6/12 w-full lg:mb-0 mb-5">
            <div
              style={{ aspectRatio: "16/9" }}
              className=" bg-gradient-to-r from-[#11435E] to-[#248BC3]  p-[3px] rounded-2xl"
            >
              <div className="flex bg-[#071F2C] w-full h-full rounded-2xl p-10"></div>
            </div>
          </div>
          <div className="lg:w-6/12 w-full">
            <div className="mb-3">
              <div className="">
                <div className="mb-5">
                  <ul className="flex gap-5 tag-stack-list">
                    <li className="bg-white lg:px-5 px-3 py-2 lg:py-3 rounded-full lg:text-xl text-sm font-semibold text-[#11435E]">
                      Codeigniter
                    </li>
                    <li className="bg-white lg:px-5 px-3 py-2 lg:py-3 rounded-full lg:text-xl text-sm font-semibold text-[#11435E]">
                      Mysql
                    </li>
                    <li className="bg-white lg:px-5 px-3 py-2 lg:py-3 rounded-full lg:text-xl text-sm font-semibold text-[#11435E]">
                      PHP
                    </li>
                  </ul>
                </div>
                <div>
                  <h1 className="lg:text-4xl text-3xl font-bold text-white mb-3">
                    Rent Bike
                  </h1>
                  <p className="lg:text-lg text-base text-white">
                  Rent Bike is a two-wheeled motorcycle rental website that
                    offers the best motorcycle selection experience using the
                    Simple Additive Weighting (SAW) algorithm. This algorithm
                    helps users make optimal decisions based on various
                    criteria, such as price, comfort, and performance, so that
                    customers get the vehicle that suits their needs easily and
                    efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default portfolio;
