import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const ref = useRef();
  const isInView = useInView(ref);
  const control = useAnimation();

  useEffect(() => {
    if (isInView) {
      control.start("visible");
    }
  }, [isInView]);

  return (
    <motion.div
      className="md:px-8 sm:px-8 px-4 scroll-mt-6 min-h-[100vh] flex flex-col gap-4 mb-8"
      ref={ref}
      initial="hidden"
      animate={control}
      transition={{ duration: 0.9, delay: 0.5 }}
      variants={{
        hidden: { opacity: 0, x: 95 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      {/* Home section */}
      <section className="sm:w-[180px]  md:hidden mx-auto sm:h-[180px] mt-10">
        <img src="fm.jpg" alt="" className="img" />
      </section>
      <section className="md:mt-10">
        <h1>
          Hi, <span className=" animate-pulse">👋</span>
          <br />
          <span>
            <span className="whitespace-nowrap"> I'm Joseph Oluwafemi</span>{" "}
            <br />
            <span className="whitespace-nowrap">A Frontend Developer.</span>
          </span>
        </h1>
      </section>
      <motion.div
        ref={ref}
        initial={"hidden"}
        animate={control}
        transition={{ duration: 0.9, delay: 0.7 }}
        variants={{
          hidden: { opacity: 0, y: 90 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <section>
          <p>
            I am a skilled frontend developer with a talent for merging
            creativity and technical expertise to craft compelling user
            interfaces and aseamless user experiences.
          </p>
        </section>
      </motion.div>
      <motion.div
        ref={ref}
        initial={"hidden"}
        animate={control}
        transition={{ duration: 0.9, delay: 0.9 }}
        variants={{
          hidden: { opacity: 0, y: 90 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <section className="w-52">
          <Link
            to="/contacts"
            className="btn"
            type="submit"
            fdprocessedid="1fi6k"
          >
            Contact me
          </Link>
        </section>
      </motion.div>
    </motion.div>
  );
};

export default Home;
