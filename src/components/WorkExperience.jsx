const workExperience = () => {
  return (
    <section id="work-experience">
      <div
        className="w-full
            lg:p-24
            p-5
            relative
            overflow-hidden
            block
            z-[20]
						
            before:bg-[url('/src/assets/hero.png')]
            before:bg-cover
            before:bg-no-repeat
            before:bg-center

            before:content-['']
            before:absolute
            before:inset-0
            before:block
            bg-gradient-to-b
            from-[#071F2C]
            to-[#11435E]
            before:opacity-10
            bg-blend-color-dodge
            before:z-[-1]"
      >
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold text-white mb-5">Work Experince</h1>
        </div>

        <ol className="container mx-auto relative border-s border-[#2CB1F9] ">
          <li className=" mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-[#0C3246] rounded-full mt-1.5 -start-1.5 border border-white "></div>
            <time className="mb-1 text-sm font-normal leading-none text-[#9DDDFF] ">
              August 2023 - February 2024
            </time>
            <h1 className="lg:text-3xl text-lg font-semibold text-gray-900 dark:text-white mb-5">
              Henbuk - Laravel Developer
            </h1>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Responsibilites:
            </h3>
            <p className="mb-4 lg:text-base text-sm font-normal text-white">
              - Software requirements analysis and project development strategy.{" "}
              <br />
              - Efficient database design with a focus on security, scalability
              and performance. <br />
              - Code implementation using the best principles in programming and
              the latest technologies in Laravel. <br />
              - Experience in building web applications with a focus on good
              user experience, as well as security and performance. <br />
              - Fix bugs with a systematic and collaborative approach with team
              members. <br />
              - Committed to a proactive approach, hard work and dedication to
              deliver outstanding software solutions. <br />
            </p>
          </li>
          <li className=" mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-[#0C3246] rounded-full mt-1.5 -start-1.5 border border-white "></div>
            <time className="mb-1 text-sm font-normal leading-none text-[#9DDDFF] ">
              Jan 2019 - April 2019
            </time>
            <h1 className="lg:text-3xl text-lg font-semibold text-gray-900 dark:text-white mb-5">
              Jimbaran Bay Beach Resort and SPA - IT Support
            </h1>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Responsibilites:
            </h3>
            <p className="mb-4 lg:text-base text-sm font-normal text-white">
              - Repair and provide solutions to network problems. <br />
              - Ensure optimal availability and performance of the hotel network
              infrastructure, including connected hardware and software. <br />
              - Provide technical support to internal users, such as hotel
              staff, to ensure smooth use of the network system in carrying out
              their daily tasks. <br />
              - Maintain responsiveness and provide effective solutions in
              dealing with network problems. <br />
              - Ensure that hotel network operations continue to run without
              significant obstacles. <br />
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default workExperience;