export const Intro = () => {

  return (
    <section className=" py-10 xl:py-20">
      <div className="wrapper flex flex-col md:flex-row items-center justify-between lg:gap-28 gap-[3rem]">

        <div className="flex flex-col max-w-lg">
          <p className="text-lg md:text-2xl font-medium scrollTwo">
            Hi, my name is Martine
          </p>
          <h1 className="text-2xl lg:text-5xl font-bold py-4 md:py-6 scrollThree">
            I&apos;m an aspiring <span className="text-pink-500">frontend developer</span>
          </h1>
          <span className="block h-1 w-20 bg-pink-500 scrollTwo"></span>
          <p className="mt-6 leading-relaxed scrollTwo">
            I&apos;ve just completed my first year at Noroff School of Technology and
            Digital Media. Stay tuned as I dive into my second year, delving into
            new coding languages, systems, and enhancing my design skills.
          </p>
          <a
            href="#about"
            className="mt-6 px-6 py-3 bg-[#282525] text-[#fffdfb] rounded-full font-medium text-base max-w-[200px] flex justify-center items-center hover:bg-[#cdb0a1] hover:text-[#282525] shadow-md transition-colors duration-500 scrollTwo"
          >
            READ MORE
          </a>
        </div>

        <img
          src="/profileimg.png"
          alt="An image of me wearing a red jumpsuit"
          className="xl:w-2/5 md:w-[38%] w-4/5 rounded-2xl welcome-section-img"
        />
      </div>
    </section>
  );
};
