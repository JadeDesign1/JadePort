const Contact = () => {
  return (
    <div className="container">
      <section>
        <h1>Contact me</h1>
        <p className="w-full">
          If you have any job offer for me, you could use the form below to
          reach out to me.
        </p>
      </section>
      <form
        action="https://getform.io/f/0e78ef00-9981-49bd-ae32-63dd74b73f15"
        method="POST"
      >
        <div className=" flex md:flex-row flex-wrap w-full">
          <section>
            <div className="relative w-full pt-4">
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

            <div className="relative pt-4">
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

            <div className="relative pt-4">
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
            <div className="pt-4 relative">
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
