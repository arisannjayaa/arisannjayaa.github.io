const hero = () => {
  return (
    <div style={{ zIndex: 22 }}
      id="home"
      className="w-full
            absolute
            top-0
            overflow-hidden
            block
						
            before:bg-[url('/src/assets/hero.png')]
            before:bg-cover
            before:bg-no-repeat
            before:bg-center
            lg:h-[calc(100vh+100px)]
            h-[calc(100vh+100px)]

            before:content-['']
            before:absolute
            before:inset-0
            before:block
            bg-gradient-to-t
            from-[#11435E]
            to-[#071F2C]
            before:opacity-10
            bg-blend-color-dodge
            before:z-[-1]"
    >
      <header className="container mx-auto relative w-full z-20 lg:top-[100px] top-[100px]">
        <div className="w-full flex justify-center py-2 mb-10">
          <h1 className="lg:text-6xl text-4xl w-10/12 lg:text-center text-left font-bold text-white">
            <span className="text-[#248BC3] lg:text-4xl text-3xl">Ari Sanjaya.</span> <br />
            Web Developer Building Digital Solutions with Dedication and
            Innovation
          </h1>
        </div>
        <div className="bg-gradient-to-r from-[#11435E] to-[#248BC3] w-full h-full p-[3px] rounded-2xl lg:mx-0 mx-5">
          <div className="lg:flex block bg-[#071F2C] rounded-2xl p-10">
            <div className="lg:w-8/12 w-full mb-5 lg-mb-9">
              <div className="lg:flex block justify-between gap-12 w-full h-full">
                <div className="hidden lg:block mb-5 lg:mb-0 lg:w-[600px] lg:h-[300px] w-full h-[200px] bg-gradient-to-r from-[#11435E] to-[#248BC3] rounded-2xl">
                  <img
                    className="relative lg:w-full lg:h-[450px] lg:top-[-100px] top-[-100px] h-[300px] object-cover rounded-3xl"
                    src="/src/assets/Wisuda2.webp"
                    alt=""
                  />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-white mb-5">
                    Biography
                  </h1>
                  <p className="lg:text-lg text-base text-white w-full">
                    Experienced web developer with Laravel expertise +1 year,
                    has good communication, problem solving and collaboration
                    skills.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-4/12 w-full">
              <h1 className="text-3xl font-bold text-white">Tech Stack</h1>
              <div className="">
                <div className="overflow-hidden p-4 marquee-container lg:w-8/12 w-full">
                  <div className="marquee-content marquee-container flex gap-4 items-center animate-marquee w-full">
                    <div className="lg:flex lg:justify-center text-center block items-center px-4 py-2 bg-gradient-to-r from-[#11435E] to-[#248BC3] rounded-full text-white">
                      <svg
                        className="fill-white"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        style={{
                          transform: "",
                          msfilter: "",
                        }}
                      >
                        <path d="M2.15 16.78h1.57a.14.14 0 0 0 .14-.12l.35-1.82h1.22a4.88 4.88 0 0 0 1.51-.2A2.79 2.79 0 0 0 8 14a3.18 3.18 0 0 0 .67-.85 3.43 3.43 0 0 0 .36-1 2.43 2.43 0 0 0-.41-2.16 2.64 2.64 0 0 0-2.09-.78h-3a.16.16 0 0 0-.15.13L2 16.6a.19.19 0 0 0 0 .13.17.17 0 0 0 .15.05zM5 10.62h1a1.45 1.45 0 0 1 1.08.29c.17.18.2.52.11 1a1.81 1.81 0 0 1-.57 1.12 2.17 2.17 0 0 1-1.33.33h-.8zm9.8-.95a2.7 2.7 0 0 0-1.88-.51h-1.19l.33-1.76a.15.15 0 0 0 0-.13.16.16 0 0 0-.11 0h-1.57a.14.14 0 0 0-.14.12l-1.38 7.27a.13.13 0 0 0 0 .12.13.13 0 0 0 .11.06h1.54a.14.14 0 0 0 .14-.13l.77-4.07h1.11c.45 0 .61.1.66.16a.81.81 0 0 1 0 .62l-.61 3.24a.13.13 0 0 0 0 .12.14.14 0 0 0 .11.06h1.56a.16.16 0 0 0 .15-.13l.64-3.4a1.7 1.7 0 0 0-.24-1.64zm4.52-.51h-3.13a.14.14 0 0 0-.15.13l-1.46 7.31a.16.16 0 0 0 0 .13.14.14 0 0 0 .11.05h1.63a.14.14 0 0 0 .15-.12l.37-1.82h1.27a5.28 5.28 0 0 0 1.56-.2 3 3 0 0 0 1.18-.64 3.31 3.31 0 0 0 .7-.85 3.45 3.45 0 0 0 .37-1 2.38 2.38 0 0 0-.42-2.16 2.81 2.81 0 0 0-2.18-.83zm.62 2.77a1.83 1.83 0 0 1-.6 1.12 2.28 2.28 0 0 1-1.37.33h-.8l.54-2.76h1a1.6 1.6 0 0 1 1.13.29c.16.18.16.52.1 1.02z" />
                      </svg>
                    </div>
                    <div className="lg:flex lg:justify-center block text-center items-center px-4 py-2 bg-gradient-to-r from-[#11435E] to-[#248BC3] rounded-full text-white w-auto">
                      <svg
                        className="fill-white"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                      >
                        <path d="M3.345 6.935c-1.756 2.523-1.538 5.806-.196 8.487l.098.19c.021.04.041.082.063.121.012.024.026.047.039.069a7.842 7.842 0 0 0 .198.344l.073.12a9.14 9.14 0 0 0 .211.33 10.179 10.179 0 0 0 .221.319l.036.049c.063.088.129.175.196.261l.074.094.182.223.069.082c.082.097.167.194.252.289l.005.005c.004.004.007.006.01.011.083.091.17.181.256.271l.083.083.205.201.084.08c.092.087.186.172.281.256l.004.004.049.041c.083.073.169.145.255.215l.105.084a11.03 11.03 0 0 0 .565.424c.029.021.057.042.087.062l.024.017c.076.053.154.103.231.153.033.022.066.045.101.067a10.975 10.975 0 0 0 .886.509c.065.034.129.068.195.101l.045.022.08.039c.102.048.205.097.308.143l.066.029c.119.052.239.102.36.149l.088.035a13.895 13.895 0 0 0 .382.142c.125.044.252.085.38.124l.092.028c.128.039.256.085.39.11 8.492 1.548 10.958-5.102 10.958-5.102-2.072 2.698-5.748 3.41-9.232 2.618-.132-.03-.261-.071-.39-.109l-.097-.029a10.929 10.929 0 0 1-.755-.264l-.093-.036c-.12-.047-.239-.097-.356-.148l-.071-.031a11.932 11.932 0 0 1-.301-.14l-.087-.042c-.078-.038-.155-.079-.232-.118-.051-.027-.104-.053-.155-.082a8.294 8.294 0 0 1-.278-.156l-.094-.052a11.4 11.4 0 0 1-.363-.223l-.098-.065a10.557 10.557 0 0 1-.259-.172l-.083-.059c-.082-.058-.164-.116-.244-.176a11.921 11.921 0 0 1-.328-.255l-.099-.079c-.092-.076-.184-.152-.274-.231a12.01 12.01 0 0 1-.319-.288c-.028-.026-.055-.051-.081-.078a7.985 7.985 0 0 1-.208-.203l-.081-.081a10.76 10.76 0 0 1-.254-.269l-.012-.012a11.75 11.75 0 0 1-.258-.293l-.067-.081a10.313 10.313 0 0 1-.254-.313 11.855 11.855 0 0 1-.215-.286C3.864 11.825 3.17 8.186 4.715 5.198" />
                        <path d="M8.794 4.809c-1.27 1.827-1.2 4.273-.21 6.205.166.324.353.639.561.938.191.273.401.597.654.816.092.101.187.199.284.295l.076.074c.094.092.19.182.291.271l.011.01.003.002c.111.097.224.19.34.281l.078.06a8.281 8.281 0 0 0 .366.268c.053.037.108.072.161.107.026.017.051.035.078.051a7.14 7.14 0 0 0 .301.184c.076.044.155.087.233.13.026.015.055.029.082.043.055.028.108.057.163.083a9.645 9.645 0 0 0 .365.171l.074.031c.093.039.186.077.281.113l.117.044c.086.032.171.06.256.089l.117.037c.121.038.243.085.37.107 6.556 1.086 8.068-3.961 8.068-3.961-1.364 1.964-4.006 2.902-6.825 2.17a7.866 7.866 0 0 1-.743-.232l-.118-.043a7.629 7.629 0 0 1-.353-.145 8.79 8.79 0 0 1-.344-.159c-.057-.028-.113-.058-.17-.087l-.099-.051a9.352 9.352 0 0 1-.533-.313l-.08-.053a7.65 7.65 0 0 1-.602-.435c-1.234-.974-2.213-2.306-2.678-3.815-.488-1.566-.382-3.323.462-4.75" />
                        <path d="M13.379 3.221c-.749 1.102-.823 2.469-.304 3.686.548 1.292 1.671 2.304 2.981 2.785a3.85 3.85 0 0 0 .234.079c.077.024.152.053.233.067 3.62.699 4.601-1.857 4.862-2.234-.86 1.239-2.306 1.536-4.078 1.105a5.403 5.403 0 0 1-.939-.344 5.39 5.39 0 0 1-.895-.545c-1.585-1.204-2.573-3.501-1.536-5.372" />
                      </svg>
                    </div>
                    <div className="lg:flex lg:justify-center block text-center items-center px-4 py-2 bg-gradient-to-r from-[#11435E] to-[#248BC3] rounded-full text-white w-auto">
                      <svg
                        className="fill-white"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        style={{
                          transform: "",
                          msfilter: "",
                        }}
                      >
                        <path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.259-1.165-.438-1.349-.854-.068-.248-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.563.315.732.676.775-.507.775-.507 1.316-.844-.203-.314-.304-.451-.439-.586-.473-.528-1.103-.798-2.126-.775l-.528.067c-.507.124-.991.395-1.283.754-.855.968-.608 2.655.427 3.354 1.023.765 2.521.933 2.712 1.653.18.878-.652 1.159-1.475 1.058-.607-.136-.945-.439-1.316-1.002l-1.372.788c.157.359.337.517.607.832 1.305 1.316 4.568 1.249 5.153-.754.021-.067.18-.528.056-1.237l.034.049zm-6.737-5.434h-1.686c0 1.453-.007 2.898-.007 4.354 0 .924.047 1.772-.104 2.033-.247.517-.886.451-1.175.359-.297-.146-.448-.349-.623-.641-.047-.078-.082-.146-.095-.146l-1.368.844c.229.473.563.879.994 1.137.641.383 1.502.507 2.404.305.588-.17 1.095-.519 1.358-1.059.384-.697.302-1.553.299-2.509.008-1.541 0-3.083 0-4.635l.003-.042z" />
                      </svg>
                    </div>
                    <div className="lg:flex lg:justify-center block text-center items-center px-4 py-2 bg-gradient-to-r from-[#11435E] to-[#248BC3] rounded-full text-white w-auto">
                      <svg
                        className="fill-white"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        style={{
                          transform: "",
                          msfilter: "",
                        }}
                      >
                        <path d="m21.62 11.108-8.731-8.729a1.292 1.292 0 0 0-1.823 0L9.257 4.19l2.299 2.3a1.532 1.532 0 0 1 1.939 1.95l2.214 2.217a1.53 1.53 0 0 1 1.583 2.531c-.599.6-1.566.6-2.166 0a1.536 1.536 0 0 1-.337-1.662l-2.074-2.063V14.9c.146.071.286.169.407.29a1.537 1.537 0 0 1 0 2.166 1.536 1.536 0 0 1-2.174 0 1.528 1.528 0 0 1 0-2.164c.152-.15.322-.264.504-.339v-5.49a1.529 1.529 0 0 1-.83-2.008l-2.26-2.271-5.987 5.982c-.5.504-.5 1.32 0 1.824l8.731 8.729a1.286 1.286 0 0 0 1.821 0l8.69-8.689a1.284 1.284 0 0 0 .003-1.822" />
                      </svg>
                    </div>
                    <div className="lg:flex lg:justify-center block text-center items-center px-4 py-2 bg-gradient-to-r from-[#11435E] to-[#248BC3] rounded-full text-white w-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-brand-mysql"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M13 21c-1.427 -1.026 -3.59 -3.854 -4 -6c-.486 .77 -1.501 2 -2 2c-1.499 -.888 -.574 -3.973 0 -6c-1.596 -1.433 -2.468 -2.458 -2.5 -4c-3.35 -3.44 -.444 -5.27 2.5 -3h1c8.482 .5 6.421 8.07 9 11.5c2.295 .522 3.665 2.254 5 3.5c-2.086 -.2 -2.784 -.344 -3.5 0c.478 1.64 2.123 2.2 3.5 3" />
                        <path d="M9 7h.01" />
                      </svg>
                    </div>
                    <div className="lg:flex lg:justify-center block text-center items-center px-4 py-2 bg-gradient-to-r from-[#11435E] to-[#248BC3] rounded-full text-white w-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-brand-laravel"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M3 17l8 5l7 -4v-8l-4 -2.5l4 -2.5l4 2.5v4l-11 6.5l-4 -2.5v-7.5l-4 -2.5z" />
                        <path d="M11 18v4" />
                        <path d="M7 15.5l7 -4" />
                        <path d="M14 7.5v4" />
                        <path d="M14 11.5l4 2.5" />
                        <path d="M11 13v-7.5l-4 -2.5l-4 2.5" />
                        <path d="M7 8l4 -2.5" />
                        <path d="M18 10l4 -2.5" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default hero;
