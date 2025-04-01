import Image from "next/image";

function HeroSection() {
    return (
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
          <div className="col-span-7 place-self-center text-center sm:text-left ">
            <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
              Hello, I`m Yirbelt James
            </h1>
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias nobis labore placeat soluta rerum quae quisquam sint doloribus deleniti dolore nesciunt necessitatibus.
            </p>
            <div>
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-slate-200 text-black cursor-pointer">Hire Me</button>
              <button className="px-6 py-3 rounded-full hover-slate-800 text-white border border-white mt-3 cursor-pointer">View CV</button>
            </div>
          </div>
          <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] flex items-center justify-center overflow-hidden">
              <Image
                src="/image/hero-img.png"
                alt="hero image"
                className=""
                width={170}
                height={170}
                layout=""
              />
            </div>
          </div>
        </div>
      </section>
    );
}

export default HeroSection;
