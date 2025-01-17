import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <>
      {/* navbar */}
      <Navbar />

      {/* hero */}
      <Hero />

      {/* portfolio */}
      <Portfolio />

      {/* Work Experince */}
      <WorkExperience />

      {/* About me */}
      <section id="about">
        <div
          className="w-full
        lg:p-24
        relative
        overflow-hidden
        block
        z-[20]
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
          <div className="mb-4">
            <h1 className="lg:text-6xl text-4xl font-bold text-white">
              Looking for collaboration <br /> or have a project idea?
            </h1>
          </div>
          <div>
            <div className="">
              <div className="mb-4">
                <h3 className="text-lg text-[#9DDDFF]">Contact Me</h3>
              </div>
              <a className="flex align-center mb-3" href="mailto:wayanarisanjaya01@gmail.com">
                <svg
                  className="fill-[#D2EFFF]"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  style={{
                    transform: "",
                    msfilter: "",
                  }}
                >
                  <path d="m18.73 5.41-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 0 0 2 7.05v11.59A1.36 1.36 0 0 0 3.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0 0 22 18.64V7.05a2 2 0 0 0-3.27-1.64z" />
                </svg>
                <p className="text-[#D2EFFF] ml-2">
                  wayanarisanjaya01@gmail.com
                </p>
              </a>
              <a className="flex align-center mb-3" href="https://instagram.com/arysannjayaa">
                <svg
                  className="fill-[#D2EFFF]"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  style={{
                    transform: "",
                    msfilter: "",
                  }}
                >
                  <path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z" />
                  <circle cx={11.994} cy={11.979} r={3.003} />
                </svg>
                <p className="text-[#D2EFFF] ml-2">
                  arysannjayaa
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
