const navbar = () => {
  return (
    <nav className=" container mx-auto relative" style={{ zIndex: 23 }}>
      <div className="container-none w-auto lg:px-10 lg:py-5 px-5 py-5 lg:flex lg:justify-between align-center hidden">
        <div className="text-xl font-bold text-white">Ari Sanjaya</div>
        <div className="lg:block hidden">
          <ul className="flex gap-10">
            <li className="font-semibold text-xl text-white">
              <a href="#home">Home</a>
            </li>
            <li className="font-semibold text-xl text-white">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="font-semibold text-xl text-white">
              <a href="#work-experience">Work Experince</a>
            </li>
          </ul>
        </div>
        <div className="cursor-pointer lg:hidden block">
              <svg className="fill-white bg-[#11435E] text-4xl rounded-xl"
                xmlns="http://www.w3.org/2000/svg"
                width={45}
                height={45}
                viewBox="0 0 24 24"
                style={{
                  transform: "",
                  msfilter: "",
                }}
              >
                <path d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z" />
              </svg>
            </div>
      </div>
    </nav>
  );
};

export default navbar;
