import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import "../App.css";
import Skills from "./skill";
import Oluwafemi from "../assets/OLUWAFEMI.pdf";
import { Link } from "react-router-dom";

const About = () => {
  const ref = useRef();
  const isInView = useInView(ref);
  const control = useAnimation();
  useEffect(() => {
    if (isInView) {
      control.start("visible");
    }
  }, [isInView]);
  return (
    <div
      id="about"
      className="sm:px-8 px-4  flex flex-col gap-10 scroll-mt-6 overflow-y-hidden  min-h-screen"
    >
      {/* About section */}
      <section className="md:w-[90%] lg:w-4/5 flex flex-col gap-2">
        <h2 className="heading">About & Skill</h2>
        <section className="text-light w-full font-semibold text-[18px] md:text-[22px]">
          <motion.div
            ref={ref}
            animate={control}
            initial={"hidden"}
            transition={{ duration: 0.9, delay: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: 95 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <span>
              I am a dedicated frontend developer with a strong passion for
              creating user-friendly and efficient web applications. I am
              seeking a role within an established IT company where I can
              leverage the latest technologies and contribute to innovative and
              diverse projects. Currently improving my skills at Cil Academy, a
              leading data-driven company in Nigeria, I excel in developing
              responsive and visually appealing web interfaces, implementing
              dynamic features with seamless interactions, and crafting
              intuitive user experiences that consistently satisfy users.
            </span>{" "}
          </motion.div>

          <motion.div
            ref={ref}
            variants={{
              hidden: { opacity: 0, x: 75 },
              visible: { opacity: 1, x: 0 },
            }}
            initial={"hidden"}
            animate={control}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex justify-center"
          >
            <Link className="btn" to={Oluwafemi} target="blank">
              Download CV
            </Link>
          </motion.div>
        </section>
      </section>

      <Skills />
    </div>
  );
};

export default About;
