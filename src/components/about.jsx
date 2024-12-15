export const About = () => {
  return (
    <>
      <section id="about" className="bg-[#e7d3c8] py-24">
        <h2 className=" text-4xl font-bold text-center mb-16 -mt-10">About me</h2>
        <div className="wrapper flex flex-col-reverse lg:flex-row gap-16 lg:gap-32">
          <div className="flex flex-col gap-10 lg:w-1/2">

            <div className="flex items-start xl:items-center flex-col xl:flex-row gap-6">
              <div className="bg-[#f3e9e3] max-w-36 w-full h-32 flex items-center justify-center rounded-lg interval">
                <img
                  src="/development.png"
                  alt="An icon showing a computer with a coding sign on it"
                  className="h-12"
                />
              </div>
              <div>
                <h4 className="text-xl font-semibold interval">Web development</h4>
                <p className="text-gray-700 mt-2 interval">
                  Passionate web developer crafting dynamic, engaging websites
                  that captivate audiences and drive business success.
                </p>
              </div>
            </div>

            <div className="flex items-start xl:items-center flex-col xl:flex-row gap-6">
              <div className="bg-[#f3e9e3] max-w-36 w-full h-32 flex items-center justify-center rounded-lg interval">
                <img
                  src="/design.png"
                  alt="An icon showing multiple tabs"
                  className="h-12"
                />
              </div>
              <div>
                <h4 className="text-xl font-semibold interval">UX / UI Design</h4>
                <p className="text-gray-700 mt-2 interval">
                  Specializing in crafting user-friendly and visually stunning
                  UX/UI designs that enhance digital experiences.
                </p>
              </div>
            </div>

            <div className="flex items-start xl:items-center flex-col xl:flex-row gap-6">
              <div className="bg-[#f3e9e3] max-w-36 w-full h-32 flex items-center justify-center rounded-lg interval">
                <img
                  src="/toolbox.png"
                  alt="An icon showing a CMS with a repairing tool"
                  className="h-12"
                />
              </div>
              <div>
                <h4 className="text-xl font-semibold interval">My toolbox</h4>
                <p className="text-gray-700 mt-2 interval">
                  Skilled in JavaScript, HTML, CSS, React, Tailwind and Bootstrap, aswell as Strapi and WordPress for
                  versatile and dynamic web development.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-6 interval">My journey</h3>
            <p className="text-gray-700 mb-6 leading-relaxed interval">
              Currently, I&apos;m immersed in studying frontend development at
              Noroff School of Technology and Digital Media, where I&apos;ve delved
              deep into the realms of HTML, CSS and JavaScript. The learning
              curve has been exhilarating, and I&apos;ve also explored the world of
              headless CMS, mastering platforms like WordPress and Strapi along
              the way. I aspire to craft seamless user experiences while
              sprinkling in captivating effects and innovations. For me, it&apos;s
              about not just creating functional websites but transforming them
              into engaging, visually stunning experiences.
            </p>
            <p className="text-gray-700 mb-6 interval">
              Have questions about frontend development, UX/UI design, or just want
              to chat?
            </p>
            <p className="text-gray-700 mb-6 interval">
              Feel free to reach out! I&apos;m always up for a good conversation or
              collaboration. Just hit that button below to get in touch.
            </p>
            <p className="text-gray-700 mb-6 interval">
              Let&apos;s build something{" "}
              <span className="font-bold">awesome</span> together!
            </p>
            <a
              href="#contact"
              className="self-start interval px-6 py-3 bg-white text-[#282525] rounded-full font-medium text-base shadow-md hover:bg-[#282525] hover:text-white transition-colors duration-500"
            >
              CONTACT ME
            </a>
          </div>
        </div>
      </section>

      <div className="w-full">
        <img
          src="/waves.png"
          alt=""
          className="hidden lg:block w-full"
        />
        <img
          src="/waves-mobile.png"
          alt=""
          className="block lg:hidden w-full"
        />
      </div>
    </>
  );
};
