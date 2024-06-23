import { useEffect, useRef } from "react";
import Svg from "../../svg";
import { Ski } from "./Skills";
import { motion, useAnimation, useInView } from "framer-motion";

const Skills = () => {
  const ref = useRef();
  const isInView = useInView(ref);
  const control = useAnimation();

  useEffect(() => {
    if (isInView) {
      control.start("visible");
    }
  }, [isInView]);
  return (
    <div className="flex flex-col h-full gap-4 items-center">
      <div className="mt-2 flex-wrap w-full flex flex-row mx-auto justify-center gap-2 ">
        {Ski.map((ski, i) => {
          return (
            <motion.section
              ref={ref}
              initial="hidden"
              animate={control}
              transition={{
                duration:
                  i === 0
                    ? 0.8
                    : i === 1
                    ? 1
                    : i === 2
                    ? 1.2
                    : i === 3
                    ? 1.4
                    : i === 4
                    ? 1.6
                    : 1.8,
                delay:
                  i === 0
                    ? 0.5
                    : i === 1
                    ? 0.6
                    : i === 2
                    ? 0.7
                    : i === 3
                    ? 0.8
                    : i === 4
                    ? 0.9
                    : 1,
              }}
              variants={{
                hidden: { opacity: 0, y: 95 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex justify-center mx-auto items-center gap-[4px] flex-col "
              key={i}
            >
              <h3 className="header text-center text-primary font-semibold text-[16px] sm:text-[18px] pr-2 pb-2 ">
                {ski.title}
              </h3>
              <Svg percent={ski.per} />
            </motion.section>
          );
        })}
      </div>
    </div>
  );
};
export default Skills;
