export const Contact = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <>
      <section
        id="contact"
        className="contact-section flex items-center justify-center bg-cover w-full py-20"
      >
        <div className="wrapper w-full flex items-center justify-end">
          <div className="flex flex-col items-start justify-end w-full max-w-3xl mt-60">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact me</h2>
            <form className="flex flex-col space-y-4 w-full">
              {/* Name Fields */}
              <div className="flex flex-col md:flex-row md:space-x-4 w-full">
                <input
                  type="text"
                  placeholder="First name:"
                  className="flex-1 px-4 py-3 rounded-md interval border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                <input
                  type="text"
                  placeholder="Last name:"
                  className="flex-1 px-4 py-3 rounded-md interval border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 mt-4 md:mt-0"
                />
              </div>
              {/* Email Field */}
              <input
                type="email"
                placeholder="E-mail:"
                className="w-full px-4 py-3 rounded-md interval border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
              {/* Message Field */}
              <textarea
                placeholder="Your message..."
                className="w-full px-4 py-3 h-32 interval rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-400 resize-none"
              ></textarea>
            </form>
            <button className="my-6 ml-auto interval bg-gray-800 text-white px-[1rem] py-[1.5rem] w-full max-w-[200px] max-h-[3rem] flex items-center justify-center rounded-full shadow-md hover:bg-white hover:text-gray-800 hover:ring-1 hover:ring-gray-800 duration-500 transition-all">
              SEND
            </button>
          </div>
        </div>

      </section>
      <footer>
        <div className="flex items-center justify-center">
          <p className="py-[2rem]">
            © Martine Midttveit {getCurrentYear()}
          </p>
        </div>
      </footer>
    </>
  );
};
