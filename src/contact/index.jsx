const Contact = () => {
  return (
    <div className="md:px-8 sm:px-4 px-2 flex flex-col gap-2 scroll-mt-6 mb-8 min-h-[100vh]">
      <section>
        <h2 className="heading">Contact me</h2>
        <p className="text-light w-full font-semibold text-[18px] md:text-[22px]">
          If you have any job offer for me, you could use the form below to
          reach out to me.
        </p>
      </section>
      <form
        action="https://getform.io/f/0e78ef00-9981-49bd-ae32-63dd74b73f15"
        method="POST"
        className="mx-auto text-light gap-1 sm:gap-2 w-full flex justify-center items-start flex-col text-xs md:text-sm"
      >
        <div className=" flex md:flex-row flex-wrap w-full">
          <section className=" flex flex-col justify-center sm:justify-start mx-auto w-[280px] sm:w-[60%] lg:w-1/2 sm:gap-2">
            <div className="relative w-full pt-5">
              <input
                className="input peer"
                type="text"
                placeholder="Enter Name"
                name="name"
                id="name"
              />
              <label htmlFor="name" className="label">
                Enter Name
              </label>
            </div>

            <div className="relative pt-5">
              <input
                className="input peer"
                type="text"
                placeholder="Phone Number"
                name="phone"
              />
              <label htmlFor="ph" className="label">
                Phone Number
              </label>
            </div>

            <div className="relative pt-5">
              <input
                className="input peer"
                type="email"
                placeholder="Email"
                name="email"
                id="email"
              />
              <label htmlFor="email" className="label">
                Email
              </label>
            </div>
            <div className="pt-5 relative">
              <textarea
                className="input peer"
                name="message"
                rows="4"
                placeholder="Subject"
                id="subject"
              ></textarea>
              <label className="label" htmlFor="subject">
                Subject
              </label>
            </div>
          </section>
        </div>
        <div className=" flex flex-row w-1/2 justify-center mx-auto items-center">
          <button className="btn">Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
